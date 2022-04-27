/* FDUNCTIONS */
function getXMLHttp(requestMethod, requestUrl, formObject, callBack, getJSON) {
	var xhttp = new XMLHttpRequest();
	if (requestMethod === "POST") {
		var formData = new FormData();
		var dataKeys = Object.keys(formObject);
		for (var i = 0; i < dataKeys.length; i++) formData.append(dataKeys[i], formObject[(dataKeys[i])]);
		xhttp.open("POST", requestUrl, true);
		xhttp.timeout = 2 * 60 * 1000;
		xhttp.send(formData);
	} else if (requestMethod === "GET") {
		xhttp.open("GET", requestUrl, true);
		xhttp.timeout = 2 * 60 * 1000;
		xhttp.send();
	}
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			if (getJSON) callBack(JSON.parse(xhttp.responseText));
			else if (callBack) callBack(xhttp);
		}
	};
}

/* ON INSTALL TASKS */
chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.local.get([
		"ProcessStatus"
	], function (CS) {
		if (!CS["ProcessStatus"]) {
			chrome.storage.local.set({
				"OrdersToScan": 250,
				"ProcessStatus": "!Running",
				"ScanDate": "(No Data Available.)",
				"Transactions": [],
				"TransactionIDs": [],
				"Orders": [],
				"SubmittedList": [],
				"SubmitList": [],
				"FailedList": []
			});
		}
	});
});

/* DATA OF ORDERS */
MaximumOrderPage = 100;
ReportableOrders = [];
Orders = [];

/* DATA OF TRANSACTIONS */
MaximumTransactionPage = 250;
Transactions = [];
TransactionIDs = [];
DateRange = {};

/* MATCHED SUBMIT LIST */
SubmitList = [];
SubmittedList = [];
FailedList = [];

/* FUNCTION TO END THE PROCESS */
function EndProcess() {
	/* COMPLETE */
	chrome.extension.sendMessage({
		"Message": "StopProcess",
		"To": 1
	});
	chrome.storage.local.set({
		"ProcessStatus": "Stopped"
	});
	chrome.notifications.create({
		type: "basic",
		iconUrl: "images/icon.png",
		title: "Process Notification:",
		message: "The Process Has Been Completed Successfully!"
	});
	setTimeout(function () {
		location.reload();
	}, 750);
}

/* SUBMIT TRACKING NUMBER */
var decodeEntities = (function () {
	var element = document.createElement('div');

	function decodeHTMLEntities(str) {
		if (str && typeof str === 'string') {
			str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
			str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
			element.innerHTML = str;
			str = element.textContent;
			element.textContent = '';
		}
		return str;
	}
	return decodeHTMLEntities;
})();

function SubmitTrackingNo(TransactionNo) {
	var FinishProcess = setTimeout(function () {
		EndProcess();
	}, 35 * 1000);
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://www.paypal.com/addtracking/add/" + SubmitList[TransactionNo]["TransactionID"], true);
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var ResponseText = xhttp.responseText;
			var PayPalToken = decodeEntities(ResponseText.split("data-token=\"").pop().split("\"").shift());

			/* SUBMIT NOW */
			setTimeout(function () {
				var formData = new FormData();
				formData.append("status", "SHIPPED");
				formData.append("trackingNumer", SubmitList[TransactionNo]["OrderTrackingNumber"]);
				formData.append("carrier", "CA_OTHER");
				formData.append("otherCarrierName", SubmitList[TransactionNo]["OrderCarrierName"]);
				formData.append("txnId", SubmitList[TransactionNo]["TransactionID"]);
				formData.append("itemType", "default");
				formData.append("_csrf", PayPalToken);
				var xhttp = new XMLHttpRequest();
				xhttp.open("POST", "https://www.paypal.com/addtracking/save", true);
				xhttp.onreadystatechange = function () {
					if (xhttp.readyState == 4 && xhttp.status == 200) {
						SubmittedList.push(SubmitList[TransactionNo]);
						console.log(SubmitList[TransactionNo]);
					}
				};
				xhttp.send(formData);
			}, 250);

			if ((TransactionNo + 1) < SubmitList.length) {
				clearTimeout(FinishProcess);
				setTimeout(function () {
					SubmitTrackingNo(TransactionNo + 1);
				}, 750);
			} else {
				clearTimeout(FinishProcess);
				setTimeout(function () {
					console.log("Finished!");
					chrome.extension.sendMessage({
						"Message": "StopProcess"
					});
					EndProcess();
				}, 12500);
			}
		}
	};
	xhttp.send();
}

/* COMPARE DATA AND FIND MATCHINGS */
function CompareData() {
	for (var n = 0; n < Orders.length; n++) {
		var OrderContactName = Orders[n]["OrderContactName"];
		var OrderEmail = Orders[n]["OrderEmail"];
		var OrderDate = Orders[n]["OrderDate"];
		var OrderStatus = Orders[n]["OrderStatus"];
		var OrderID = Orders[n]["OrderID"];
		var OrderCarrierName = Orders[n]["OrderCarrierName"];
		var OrderTrackingNumber = Orders[n]["OrderTrackingNumber"];

		var orderFound = false;

		for (var i = 0; i < Transactions.length; i++) {
			var TransactionContactName = Transactions[i]["TransactionContactName"];
			var TransactionEmail = Transactions[i]["TransactionEmail"];
			var TransactionDate = Transactions[i]["TransactionDate"];
			var TransactionID = Transactions[i]["TransactionID"];
			if (TransactionEmail && OrderEmail)
				if (TransactionEmail.trim().toLowerCase() === OrderEmail.trim().toLowerCase()) {
					SubmitList.push({
						"TransactionID": TransactionID,
						"TransactionContactName": TransactionContactName,
						"TransactionEmail": TransactionEmail,
						"TransactionDate": TransactionDate,
						"OrderID": OrderID,
						"OrderCarrierName": OrderCarrierName,
						"OrderTrackingNumber": OrderTrackingNumber,
						"OrderDate": OrderDate,
						"OrderContactName": OrderContactName,
						"OrderEmail": OrderEmail
					});
					Orders[n] = {};
					Transactions[i] = {};
					orderFound = true;
				}
		}

		if (!orderFound) FailedList.push({
			"OrderID": OrderID,
			"OrderCarrierName": OrderCarrierName,
			"OrderTrackingNumber": OrderTrackingNumber,
			"OrderDate": OrderDate,
			"OrderContactName": OrderContactName,
			"OrderEmail": OrderEmail
		});
	}
	console.log(SubmitList);
	if (SubmitList.length > 0) SubmitTrackingNo(0);
	else setTimeout(function () {
		EndProcess();
	}, 1.5 * 1000);
}

/* START SCRAPEING PAYPAL TRANSACTIONS AND PUSH TO Transactions AND TransactionIDs VAR */
function scrapeTransactions(PageToken) {
	var startSubmitting = setTimeout(function () {
		console.log(Transactions);
		CompareData();
	}, 35 * 1000);

	var PresendDate = new Date(Date.now()),
		Day = DateRange["toDate"],
		Month = DateRange["toMonth"],
		Year = DateRange["toYear"],
		FromDay = DateRange["fromDate"],
		FromMonth = DateRange["fromMonth"],
		FromYear = DateRange["fromYear"];
	if (!PageToken) PageToken = "";
	var PageURL = "https://www.paypal.com/listing/transactions/activity?transactiontype=PAYMENTS_RECEIVED&currency=ALL_TRANSACTIONS_CURRENCY&limit=&next_page_token=" + PageToken + "&need_actions=true&need_shipping_info=true&sort=time_created&archive=ACTIVE_TRANSACTIONS&fromdate_year=" + FromYear + "&fromdate_month=" + FromMonth + "&fromdate_day=" + FromDay + "&todate_year=" + Year + "&todate_month=" + Month + "&todate_day=" + Day + "";
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", PageURL, true);
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var ResponseText = xhttp.responseText;
			var ResponseJSON = JSON.parse(ResponseText);
			var Transaction = ResponseJSON["data"]["transactions"]
			for (var i = 0; i < Transaction.length; i++) {
				if (Transaction[i]["actionList"].filter(e => e["type"] === "ADD_TRACKING").length !== 0) {
					var TransactionID = Transaction[i]["transactionId"];
					var TransactionContactName = Transaction[i]["transactionDescription"]["name"];
					var TransactionEmail = Transaction[i]["activity"]["counterparty"]["email"];
					var TransactionDate = Transaction[i]["transactionTimeUnformatted"];
					var TransactionDetails = {
						"TransactionID": TransactionID,
						"TransactionContactName": TransactionContactName,
						"TransactionEmail": TransactionEmail,
						"TransactionDate": TransactionDate
					};
					Transactions.push(TransactionDetails);
					TransactionIDs.push(TransactionID);
				}
			}
			var PageToken = ResponseJSON["data"]["nextpageurl"];
			if (PageToken && (Transactions.length / 30) < MaximumTransactionPage) {
				clearTimeout(startSubmitting);
				setTimeout(function () {
					scrapeTransactions(PageToken);
				}, 750);
			} else {
				clearTimeout(startSubmitting);
				setTimeout(function () {
					console.log(Transactions);
					CompareData();
				}, 750);
			}
		}
	};
	xhttp.send();
}

/* ON MESSAGE LISTNERS */
var SaveData = function () {
	chrome.storage.local.set({
		"Transactions": Transactions,
		"TransactionIDs": TransactionIDs,
		"SubmittedList": SubmittedList,
		"SubmitList": SubmitList,
		"FailedList": FailedList
	});
};
chrome.extension.onMessage.addListener(function (Request, Sender, SendResponse) {
	if (Request.Message == "StartProcess") {
		var ScanDate = new Date(Date.now()).toLocaleString();
		chrome.storage.local.set({
			"ProcessStatus": "Running",
			"ScanDate": ScanDate
		});
		chrome.storage.local.get([
			"Orders",
			"OrdersToScan",
			"Transactions",
			"TransactionIDs",
			"DateRange"
		], function (CS) {
			Orders = CS["Orders"];
			MaximumOrderPage = Math.ceil((CS["OrdersToScan"]) / 10);
			DateRange = CS["DateRange"];

			Transactions = [];
			TransactionIDs = [];
			setTimeout(function () {
				scrapeTransactions();
			}, 750);

			setInterval(SaveData, 1000);
		});
	}
	if (Request.Message == "StopProcess" && Request.To == 0) {
		chrome.storage.local.set({
			"ProcessStatus": "Stopped"
		});
		chrome.notifications.create({
			type: "basic",
			iconUrl: "images/icon.png",
			title: "Process Notification:",
			message: "The Process Has Been Completed Successfully!"
		});
		setTimeout(function () {
			location.reload();
		}, 750);
	}
});