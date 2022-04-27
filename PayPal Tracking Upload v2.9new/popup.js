/* START: SAUI */
function ShowMessage(Type, Text) {
	if (Type == "ERROR") var Class = "error-message";
	if (Type == "SUCCESS") var Class = "success-message";
	var Message = document.getElementById("Message");
	Message.innerHTML = Text;
	Message.setAttribute("class", Class);
	Message.style.display = "inline-block";
}

var CSV = {
	"toCellString": function (stringData) {
		if (!stringData) return "";
		if (typeof (stringData) === "number") return stringData;
		var processedString = stringData.replace(/"/g, "\"\"");
		if (stringData.indexOf(",") !== -1 || stringData.indexOf("\"") !== -1 || stringData.indexOf("\n") !== -1) processedString = "\"" + processedString + "\"";
		return processedString;
	},
	"toArray": function (csvData) {
		var csvData = csvData.toString(),
			stackString = "",
			insideQuote = false,
			arrayData = [],
			csvItems = [];
		for (var i = 0; i < csvData.length; i++) {
			if (csvData[i] === "\"") {
				if (insideQuote && csvData[i + 1] === "\"") {
					stackString = stackString + "\"";
					i++;
				} else if (insideQuote) {
					insideQuote = false;
				} else {
					insideQuote = true;
				}
			} else if (csvData[i] === ",") {
				if (!insideQuote) {
					csvItems.push(stackString);
					stackString = "";
				} else stackString = stackString + csvData[i];
			} else if (csvData[i] === "\n" || i === csvData.length - 1) {
				if (!insideQuote) {
					csvItems.push(stackString);
					stackString = "";

					arrayData.push(csvItems);
					csvItems = [];
				} else stackString = stackString + csvData[i];
			} else {
				stackString = stackString + csvData[i];
			}
		}
		return arrayData;
	},
	"fromArray": function (arrayData) {
		var csvData = "";
		for (var i = 0; i < arrayData.length; i++) {
			csvData = csvData + ((i === 0) ? "" : "\n");
			for (var n = 0; n < arrayData[i].length; n++) {
				csvData = csvData + ((n === 0) ? "" : ",") + CSV.toCellString(arrayData[i][n]);
			}
		}
		return csvData;
	}
};

function getIndexFromArray(dataArray, targetString, requiredString) {
	var targetIndex = -1;
	for (var i = 0; i < dataArray.length; i++) {
		if (dataArray[i].toLowerCase().indexOf(targetString.toLowerCase()) !== -1) {
			targetIndex = i;
			break;
		}
	}
	console.log(targetString + " " + targetIndex);
	console.log(dataArray);
	if (targetIndex === -1 && requiredString) ShowMessage("ERROR", "No column found for \"" + targetString + "\"");
	return targetIndex;
}

function OpenTab(Name, Content) {
	var Nav = document.querySelectorAll(".Navigation > span");
	for (i = 0; i < ContentTabs.length && Nav.length; i++) {
		Nav[i].removeAttribute("class");
	}
	document.getElementsByName(Name)[0].className = "selected";
	var Tab = document.querySelectorAll(".TabContent");
	for (i = 0; i < Tab.length; i++) {
		Tab[i].style.display = "none";
	}
	document.getElementsByClassName(Name)[0].style.display = "block";
	if (Content) {
		var ContentBody = document.getElementsByClassName(Name)[0].querySelectorAll(".ContentBody");
		for (i = 0; i < ContentBody.length; i++) {
			ContentBody[i].style.display = "none";
		}
		document.getElementsByClassName(Name)[0].getElementsByClassName(Content)[0].style.display = "block";
	}
}
/* TABS */
var ContentTabs = document.querySelectorAll("nav > span");
for (var i = 0; i < ContentTabs.length; i++) {
	ContentTabs[i].onclick = function () {
		OpenTab(this.getAttribute("name"));
	};
}
/* CLOSE BUTTONS */
var CloseButton = document.querySelectorAll("[name=\"Close\"]");
for (var i = 0; i < CloseButton.length; i++) {
	CloseButton[i].onclick = function () {
		window.close();
	};
}
/* END: SAUI */

/* START: FUNCTIONS */
function isJSON(string) {
	try {
		JSON.parse(string);
	} catch (e) {
		return false;
	}
	return true;
}
/* END: FUNCTIONS */

/* START: MAIN */
OpenTab("Home", "Loading");

/* PROCESS STATUS */
function UpdateStatus() {
	chrome.storage.local.get([
		"Transactions",
		"TransactionIDs",
		"Orders",
		"SubmittedList",
		"SubmitList"
	], function (CS) {
		var ProcessStatus = document.querySelectorAll(".ProcessStatus");
		ProcessStatus[0].querySelector("[name=\"TotalOrders\"]").innerHTML = (CS["Orders"]).length;
		ProcessStatus[0].querySelector("[name=\"ScrapedTransactions\"]").innerHTML = (CS["Transactions"]).length;
		ProcessStatus[0].querySelector("[name=\"TotalTransactions\"]").innerHTML = (CS["TransactionIDs"]).length;
		ProcessStatus[0].querySelector("[name=\"TotalMatched\"]").innerHTML = (CS["SubmitList"]).length;
		ProcessStatus[0].querySelector("[name=\"TotalSubmitted\"]").innerHTML = (CS["SubmittedList"]).length;
	});
}

/* HOME CONTENTS */
function CheckLoginStatus(CallBack) {
	/* CHECK PayPal LOGIN STATUS */
	setTimeout(function () {
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", "https://www.paypal.com/bizcomponents/userinfo?forceRefreshNotifications=true&linkPrefix=https://www.paypal.com", true);
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var ResponseText = xhttp.responseText;
				if (isJSON(ResponseText)) {
					CallBack(1);
				} else {
					console.log("Not logged in to PayPal.");
					CallBack(7);
				}
			}
		}
		xhttp.send();
	}, 0);
}
chrome.storage.local.get([
	"ProcessStatus",
], function (CS) {
	if (CS["ProcessStatus"] == "Stopped") {
		chrome.storage.local.set({
			"ProcessStatus": "!Running"
		});
		OpenTab("Home", "Ready");
		OpenTab("History");
		ShowMessage("SUCCESS", "Done successfully!");
		UpdateHistory();
	} else if (CS["ProcessStatus"] == "Running") {
		OpenTab("Home", "ProcessStatus");
		UpdateStatus();
		setInterval(UpdateStatus, 1000);
	} else CheckLoginStatus(function (LoginStatus) {
		/* REQUEST TO LOGIN IF NOT LOGGED IN */
		if (LoginStatus == 7) {
			OpenTab("Home", "LoginToPayPal");
		}
		/* SHOW START PAGE IF LOGGED IN */
		if (LoginStatus == 1) {
			OpenTab("Home", "Ready");
		}
	});
});
document.querySelectorAll("[name=\"LoginToPayPal\"]")[0].onclick = function () {
	window.open("https://www.paypal.com/signin", "_blank");
};
document.querySelectorAll("[name=\"StartProcess\"]")[0].onclick = function () {
	var fileUploader = document.querySelector("[name=\"OrderList\"]");
	var files = fileUploader.files;
	if (!files.length) {
		ShowMessage("ERROR", "Please select a file!");
		return;
	}

	var file = files[0];
	var start = 0;
	var stop = file.size - 1;

	var reader = new FileReader();
	reader.onloadend = function (evt) {
		if (evt.target.readyState === FileReader.DONE) {
			var OrderList = CSV.toArray(evt.target.result);
			if (OrderList.length === 0) ShowMessage("ERROR", "Invalid CSV file!");

			OrderDateIndex = getIndexFromArray(OrderList[0], "Date", 1);
			OrderTrackingNumberIndex = getIndexFromArray(OrderList[0], "Tracking", 1);
			OrderEmailIndex = getIndexFromArray(OrderList[0], "Email", 1);

			OrderCarrierNameIndex = getIndexFromArray(OrderList[0], "Courier");

			OrderIDIndex = getIndexFromArray(OrderList[0], "Order");
			FirstNameIndex = getIndexFromArray(OrderList[0], "First Name");
			LastNameIndex = getIndexFromArray(OrderList[0], "Last Name");

			if (!(OrderDateIndex > -1 && OrderTrackingNumberIndex > -1 && OrderEmailIndex > -1)) return;

			var DateRange = {
					"fromMonth": "",
					"fromDate": "",
					"fromYear": "",
					"toMonth": "",
					"toDate": "",
					"toYear": ""
				},
				FromDate = "",
				ToDate = "";
			var AllOrderList = [];
			for (var i = 1; i < OrderList.length; i++) {
				var OrderDate = OrderList[i][OrderDateIndex].trim();
				var OrderTrackingNumber = OrderList[i][OrderTrackingNumberIndex].trim();
				var OrderEmail = OrderList[i][OrderEmailIndex].trim();

				var OrderCarrierName = (!OrderList[i][OrderCarrierNameIndex]) ? "CH_EMS" : OrderList[i][OrderCarrierNameIndex].trim();

				var OrderID = (!OrderList[i][OrderIDIndex]) ? "---" : OrderList[i][OrderIDIndex].trim();
				var FirstName = (!OrderList[i][FirstNameIndex]) ? "---" : OrderList[i][FirstNameIndex].trim();
				var LastName = (!OrderList[i][LastNameIndex]) ? "---" : OrderList[i][LastNameIndex].trim();

				var OrderContactName = FirstName + " " + LastName;
				var OrderStatus = "";

				var OrderDetails = {
					"OrderID": OrderID,
					"OrderStatus": OrderStatus,
					"OrderDate": OrderDate,
					"OrderCarrierName": OrderCarrierName,
					"OrderTrackingNumber": OrderTrackingNumber,
					"OrderContactName": OrderContactName,
					"OrderEmail": OrderEmail
				};
				if (OrderEmail) {
					AllOrderList.push(OrderDetails);

					var OrderDateTime = new Date(OrderDate);

					if (!FromDate) FromDate = OrderDateTime;
					else if (OrderDateTime.getTime() < FromDate.getTime()) FromDate = OrderDateTime;

					if (!ToDate) ToDate = OrderDateTime;
					else if (OrderDateTime.getTime() > ToDate.getTime()) ToDate = OrderDateTime;
				}
			}

			//console.log(AllOrderList);
			//return;
			
			FromDate = new Date(FromDate.getTime() - (1 * 24 * 60 * 60 * 1000));
			ToDate = (ToDate.getTime() + (1 * 24 * 60 * 60 * 1000) < new Date().getTime()) ? new Date(ToDate.getTime() + (1 * 24 * 60 * 60 * 1000)) : new Date();

			DateRange["fromMonth"] = FromDate.getMonth();
			DateRange["fromDate"] = FromDate.getDate();
			DateRange["fromYear"] = FromDate.getFullYear();
			DateRange["toMonth"] = ToDate.getMonth();
			DateRange["toDate"] = ToDate.getDate();
			DateRange["toYear"] = ToDate.getFullYear();

			chrome.storage.local.set({
				"Orders": AllOrderList,
				"DateRange": DateRange
			}, function () {
				console.log(AllOrderList);
				ShowMessage("SUCCESS", "Scanning started successfully!");
				chrome.extension.sendMessage({
					"Message": "StartProcess"
				}, function () {
					OpenTab("Home", "ProcessStatus");
					UpdateStatus();
					setInterval(UpdateStatus, 1000);
				});
			});
		}
	};

	var blob = file.slice(start, stop + 1);
	reader.readAsText(blob, "UTF-8");
};
document.querySelectorAll("[name=\"StopProcess\"]")[0].onclick = function () {
	chrome.extension.sendMessage({
		"Message": "StopProcess",
		"To": 0
	}, function () {
		OpenTab("Home", "Ready");
		OpenTab("History");
		ShowMessage("SUCCESS", "Done successfully!");
		UpdateHistory();
	});
};
chrome.extension.onMessage.addListener(function (Request, Sender, SendResponse) {
	if (Request.Message == "StopProcess" && Request.To == 1) {
		OpenTab("Home", "Ready");
		OpenTab("History");
		ShowMessage("SUCCESS", "Done successfully!");
		UpdateHistory();
	}
});

/* HISTORY CONTENTS */
function UpdateHistory() {
	chrome.storage.local.get([
		"SubmittedList",
		"FailedList",
		"ScanDate"
	], function (CS) {
		var History = document.querySelectorAll(".History");
		History[0].querySelector("[name=\"ScanDate\"]").innerHTML = CS["ScanDate"];
		History[0].querySelector("[name=\"TotalSubmitted\"]").innerHTML = (CS["SubmittedList"]).length;

		var SubmitSuccessList = History[0].querySelector("[name=\"SubmitSuccessList\"]");
		SubmitSuccessList.innerHTML = "";
		var SubmittedList = CS["SubmittedList"];
		for (var i = SubmittedList.length - 1; i >= 0; i--) {
			var Transaction = document.createElement("tr");
			Transaction.innerHTML = "<td style=\"word-wrap: break-word; text-transform: capitalize; vertical-align: top;\">" + SubmittedList[i]["TransactionContactName"] + "<br/>" + SubmittedList[i]["TransactionDate"].substring(0, 10) + "</td><td style=\"word-wrap: break-word; vertical-align: top;\"><a href=\"https://www.paypal.com/activity/payment/" + SubmittedList[i]["TransactionID"] + "\" target=\"_blank\">Transaction: " + SubmittedList[i]["TransactionID"] + " ➧</a></td><td style=\"word-wrap: break-word; vertical-align: top;\">Order: " + SubmittedList[i]["OrderID"] + "</td>";
			SubmitSuccessList.appendChild(Transaction);
		}
		var FailedList = CS["FailedList"];
		for (var i = FailedList.length - 1; i >= 0; i--) {
			var Transaction = document.createElement("tr");
			Transaction.innerHTML = "<td style=\"word-wrap: break-word; text-transform: capitalize; vertical-align: top; background: rgb(255, 134, 132);\">" + FailedList[i]["OrderContactName"] + "<br/>" + FailedList[i]["OrderDate"].substring(0, 10) + "</td><td style=\"word-wrap: break-word; vertical-align: top; background: rgb(255, 134, 132);\">Transaction: ---</td><td style=\"word-wrap: break-word; vertical-align: top; background: rgb(255, 134, 132);\">Order: " + FailedList[i]["OrderID"] + "</td>";
			SubmitSuccessList.appendChild(Transaction);
		}
	});
}
UpdateHistory();

/* UPDATE SETTINGS */
function UpdateSettings() {
	chrome.storage.local.get([
		"OrdersToScan"
	], function (CS) {
		document.querySelector("[name=\"OrdersToScan\"]").value = CS["OrdersToScan"];
	});
}
UpdateSettings();
document.querySelectorAll("[name=\"UpdateSettings\"]")[0].onclick = function () {
	var OrdersToScan = document.querySelector("[name=\"OrdersToScan\"]").value;
	chrome.storage.local.set({
		"OrdersToScan": OrdersToScan
	}, function () {
		ShowMessage("SUCCESS", "Settings updated successfully!");
		UpdateSettings();
	});
};
/* END: MAIN */
