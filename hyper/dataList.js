const downloadBtn = $("#download");
const pushSheet = $("#toSheet");
const clearBtn = $("#clear");
const sheetURLIpt = $("#sheetUrl");
const openSheetBtn = $("#openSheet");
const groupSelect = $("#groupList");
const allGroupID = "100";

const loader = $(".loading");
let template;
let sheets = {};
loadBasic();
const table = $("#dataTable").find("tbody");
let currentGroupID = allGroupID;
let currentGroupName = "";
let level = {
  isValid: true,
  pro: false
};

$("body").on("change", "#groupList", function () {
  let that = $(this),
    selectedOpt = that.find("option:selected");
  url = selectedOpt.data("url");
  currentGroupID = that.val();
  currentGroupName = selectedOpt.text().trim();
  sheetURLIpt.val(url);
  openSheetBtn.attr("title", url);
  loadData();
  //all groups
  if (currentGroupID === allGroupID) {
    pushSheet.prop("disabled", true).addClass("disabled");
    openSheetBtn.prop("disabled", true).addClass("disabled");
    clearBtn.prop("disabled", true).addClass("disabled");
  } else {
    pushSheet.prop("disabled", false).removeClass("disabled");
    openSheetBtn.prop("disabled", false).removeClass("disabled");
    clearBtn.prop("disabled", false).removeClass("disabled");
  }
});

function checkuser() {
  cs.get("level", i => {
    level = i.level;
  });
}

function loadBasic(data, func) {
  cs.get(["user", "sheets", "level"], i => {
    let sheets = i.sheets;
    level = i.level;
    if (!sheets || !level || !level.valid) {
      groupSelect.hide()
    } else {
      groupSelect.show();
      groupSelect.prop("disabled", false);
      let groupHtml = `<option value="${allGroupID}">ALL GROUPS</option>`;
      let sortedSheets = {};
      Object.keys(sheets).sort((a, b) => {
        return sheets[a].name > sheets[b].name;
      }).forEach(gid => {
        sortedSheets[gid] = sheets[gid];
      });
      let hasData = data ? data.groupID : false;
      let hasName = data ? data.groupName : false;
      var sheetCounter = 1;
      for (gid in sortedSheets) {
        if (gid !== "length") {
          let name = sheets[gid]["name"];
          if(sheetCounter == 1) {
          groupHtml += `<option value="${gid || "100"}" data-url="${sheets[gid]["url"]}" ${name ? "" : "selected"} selected>${name}</option>`;
          } else {
             groupHtml += `<option value="${gid || "100"}" data-url="${sheets[gid]["url"]}" ${name ? "" : "selected"}>${name}</option>`;
          }
          sheetCounter++;
        }
      }
      groupSelect.html(groupHtml);
      groupSelect.trigger("change");

      let groupID = hasData || groupSelect.find("option").eq(0).val();
      let groupName = hasName || groupSelect.find("option").eq(0).text();

      if (groupID !== allGroupID) {
        currentGroupID = groupID;
        currentGroupName = groupName;
        sheetURLIpt.val(sheets[groupID].url);
        openSheetBtn.attr("title", sheets[groupID].url)
      }
    }

    if (level && !level.pro && !level.ultra) {
      if (sheets) {
        let added = false;
        for (let key in sheets) {
          if (sheets.hasOwnProperty(key) && !added) {
            sheetURLIpt.val(sheets[key].url);
            currentGroupID = key;
            currentGroupName = sheets[key].name;
            added = true;
          }
        }
      }
    }
    if (func) {
      func();
    }
  });
}

function loadData() {
  getTemplate().then(qaTemplate => {
    template = qaTemplate;
  });

  cs.get(dataKey.user, i => {
    let data = i[dataKey.user];
    console.log(data)
    if (data) {
      let tableHTML = "";
      data.forEach((u, i) => {
        let user = u.userInfo;
        let gid = user.groupID;
        const {dateAdded} = user;
        let arr = objectToArr(user);
        let trClass = "shownData";
        if (level && (level.pro || level.ultra) && gid !== currentGroupID && currentGroupID !== allGroupID) {
          trClass = "hiddenData";
        }
        tableHTML += `<tr class="${trClass}" data-gid=${gid}>
                        <td>${arr[0] || " "}</td>
                        <td>${arr[1] || " "}</td>
                        <td>${arr[2] || " "}</td>
                        <td>${arr[3] || " "}</td>
                        <td>${arr[4] || " "}</td>
                        <td>${arr[5] || " "}</td>
                        <td>${arr[6] || " "}</td>
                        <td>${arr[7] || " "}</td>
                        <td>${arr[8] || " "}</td>
                        <td>${arr[9] || " "}</td>
                        <td>${arr[10] || " "}</td>
                        <td>${arr[11] || " "}</td>
                        <td>${arr[12] || " "}</td>
                      </tr>`;
      });
      table.html(tableHTML);
    } else {
      table.html("<h1> No data avilable </h1>");
    }
  });
}

pushSheet.click(sendToSheet);
clearBtn.click(clearData);
downloadBtn.click(downloadData);
openSheetBtn.click(openSheet);

function openSheet() {
  window.open(sheetURLIpt.val().trim(), "_blank");
}

function downloadData() {
  cs.get(dataKey.user, i => {
    let usersData = i[dataKey.user];
    if (!usersData) {
      a(texts.noDataToDownload);
      return false;
    }
    if (!level.basic && currentGroupID !== "100") {
      usersData = usersData.filter(d => {
        return d.userInfo.groupID === currentGroupID;
      });
    }
    let sheetData = prepareDataForCsv(usersData);
    let tableHead = "Group Name, User ID, Facebook Username, Joined Facebook On, Q1, A1, Q2, A2, Q3, A3, Date Added\n";
    let csvContent = "data:text/csv;charset=utf-8," + tableHead + sheetData;
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", currentGroupName + "_" + getFormatTime() + ".csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function getCSVFileName() {
  return groupSelect.find("selected").text();
}

let tried = 3;

function clearData() {
  let cfm;
  if (currentGroupName) {
    cfm = confirm(`${texts.sureToClearFrom} ${currentGroupName}?`);
  } else {
    cfm = confirm(texts.sureToClearAll);
  }
  if (cfm) {
    if (!level.pro && !level.ultra) {
      cs.remove(dataKey.user, () => {
        loadData();
      });
    } else {
      cs.get(dataKey.user, i => {
        let data = i[dataKey.user];
        if (data) {
          let newData = [];
          data.forEach((u, i) => {
            let user = u.userInfo;
            let gid = user.groupID;
            if (gid !== currentGroupID) {
              newData.push(u);
            }
          });
          cs.set({
            user: newData
          });
        } else {
        }
      });
    }

    // refresh
    location.reload();
  }
}

function checkURL(sheetURL) {
  if (sheetURL) {
    if (storeSheetID(sheetURL)) {
      sl.get("sheets", i => {
        let sheets = i.sheets || {};
        sheets["default"] = {
          url: sheetURL
        };
        sl.set({
          sheets: sheets
        });
      });
      if (!localStorage.token) {
        cr.sendMessage({
          cmd: "getToken",
          data: {
            sheetURL: sheetURL
          }
        });
        let c = setInterval(() => {
          if (localStorage.token) {
            clearInterval(c);
            localStorage.testMode = testModeCB.is(":checked");
          }
        }, 10);
      } else {
        infoBar.text(texts.checkSheetURL).addClass("momane_error");
      }
    } else {
      infoBar.text(texts.checkSheetURL).addClass("momane_error");
    }
  }
}

function sendToSheet() {
  loader.show();
  pushSheet.prop("disabled", true);
  let sheetURL = sheetURLIpt.val().trim() || localStorage.sheetURL;
  if (!sheetURL || !storeSheetID(sheetURL)) {
    a(texts.urlNotCorrect);
    return false;
  }
  if (table.find("tr").length < 1) {
    a(texts.noData);
    return false;
  }
  let sheetData = prepareData();
  let colRange = "A1:Z1";
  let url = "https://sheets.googleapis.com/v4/spreadsheets/" + localStorage.sheetID + "/values/" + colRange + ":append?valueInputOption=RAW&access_token=" + localStorage.token;

  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(sheetData),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (respData) {
      loader.hide();
      pushSheet.prop("disabled", false);
      a(texts.pushSucced, "Success", "success");

      clearBtn.click();
    },
    error: function (e) {
      loader.hide();
      pushSheet.prop("disabled", false);
      if (e.status === 401) {
        if (tried > 0) {
          tried--;
          refreshToken().then(token => {
            sendToSheet();
          });
        } else {
          a(texts.couldNotPush);
        }

      } else if (e.status === 404) {
        a(texts.sheetNotCorrect);
      } else if (e.status === 403) {
        a(texts.noPermission);
      } else {
        try {
          let err = JSON.parse(e.responseText);
          a(err.error.message);
          a(texts.unknownError);
        } catch (e) {
          a(texts.unknownError);
        }

      }
    }
  });
}

function storeSheetID(url) {
  try {
    localStorage.sheetID = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(url)[1];
    return true;
  } catch (e) {
    return false;
  }
}

function prepareData(usersData) {
  let tableValues = [];
  table.find("tr:visible").each(function () {
    let trValues = [];
    $(this).find("td").each(function (i, e) {
      if (i > -1) {
        trValues.push($(this).text() || " ");
      }
    });
    tableValues.push(trValues);
  });

  return {
    values: tableValues
  };
}

function prepareDataForCsv(usersData) {
  let rowValue = "";
  usersData.forEach(data => {
    let arrData = objectToArr(data.userInfo);
    for (let i = 0; i < arrData.length; i++) {
      let cellValue = arrData[i] ? arrData[i].trim() : " ";
      cellValue = cellValue.replace(/[\n\t\s]+/gi, " ");
      if (cellValue.includes(",")) {
        cellValue = `"${cellValue}"`;
      }
      rowValue += cellValue.length === 0 ? " " : cellValue;
      rowValue += ",";
    }
    rowValue += "\r\n";
  });

  return rowValue;
}

function objectToArr(obj) {
  let arr = [];
  arr.push(obj.groupName);
  arr.push(obj.userID);
  arr.push(obj.userName);
  arr.push(obj.joinedDate);
  //sort the questions
  let questions = obj.questions;
  let qtemplate = [];
  if (!template) {
    if (questions && questions.length > 0) {
      let newArr = questions.sort(function (a, b) {
        // return a.question.length > b.question.length
        return true;
      });
      for (let i = 0; i < newArr.length; i++) {
        arr.push(newArr[i].question);
        qtemplate.push(newArr[i].question);
        arr.push(newArr[i].answer);
      }
    }
  } else {
    if (questions && questions.length > 0) {
      let result = [];
      result.length = questions.length >= template.length ? questions.length : template.length;

      let unMatchedArr = [];

      questions.forEach(qa => {
        let found = false;
        template.forEach((t, i) => {
          if (qa.question === t) {
            result[i] = [qa.question, qa.answer];
            found = true;
          }
        });
        if (!found) {
          unMatchedArr.push(qa);
        }
      });


      if (unMatchedArr.length > 0) {
        // unMatchedArr.forEach(u => {
        //     qtemplate.push(u.question);
        //     result.push([u.question, u.answer]);
        // });
        for (let i = 0; i < result.length; i++) {
          if (!result[i]) {
            let u = unMatchedArr.shift();
            if (u) {
              result[i] = [u.question, u.answer];
              if (template.length >= 3) {
                template[i] = u.question;
              } else {
                template.push(u.question);
              }
            } else {
              result[i] = ["", ""];
            }

          }
        }

      }
      qtemplate = template;
      for (let k = 0; k < result.length; k++) {
        if (!result[k]) {
          arr.push(" ", " ");
        } else {
          arr.push(result[k][0], result[k][1]);
        }
      }
    } else {
      qtemplate = template;
      arr.push(" ", " ", " ", " ", " ", " ");
    }
  }
  if (qtemplate.length > 0 && template && template.length > 0) {
    template = qtemplate;
  }
  storeTemplate(qtemplate);
  arr[10] = obj.dateAdded;
  arr[11] = obj.firstName;
  arr[12] = obj.lastName;
  return arr;
}

function storeTemplate(t) {
  cs.set({
    qaTemplate: t
  });
}

function getTemplate() {
  return new Promise(resolve => {
    cs.get("qaTemplate", i => {
      resolve(i.qaTemplate);
    })
  });
}

function getFormatTime(dateTime) {
  let d = new Date(dateTime);
  // get x day before if error.
  if (!(d instanceof Date && isFinite(d))) {
    d = new Date();
  }
  let year = d.getFullYear();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let hour = '' + d.getHours();
  let minute = '' + d.getMinutes();
  let seconds = '' + d.getSeconds();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;
  if (seconds.length < 2) seconds = '0' + seconds;

  return [year, month, day].join('-') + " " + [hour, minute, seconds].join(':');
}

function a(msg, title, success) {
  let t = title ? title : "Error";
  let type = success ? "success" : "error";
  swal({
    title: t,
    text: msg,
    icon: type,
    timer: 3000
  });
  loader.hide();
}

function isBasicUser() {
  return !level.pro && !level.ultra;
}

$("#clearGG").click(removeAuth);
cr.onMessage.addListener((req, sender, sr) => {
  if (req.cmd === "dataAddedExt") {
    let data = req.data.userInfo;
    if (data.groupID !== currentGroupID) {
      loadBasic(data, loadData);
    } else {
      loadData();
    }
  }
});


if(localStorage.links) {
      setFooterLinks(localStorage.links);
}

function setFooterLinks(data) {
    var htmlData = '';
    console.log(data);
    data = JSON.parse(data);
    data = data.data;
    for(link in data) {
      var linkd = data[link];
      htmlData += '<a href="'+ linkd.href +'" target="_blank">' + linkd.name +'</a> |  ';
    }
    $('.center-block').html('');
    $('.center-block').html(htmlData);
}


//new features for automation
$('#automate').click(function() {
    if(localStorage['is_automation_applied'] && localStorage['is_automation_applied'] == 'true') {
      $('.automation-applied').prop("checked", true);
    } else {
      $('.automation-applied').prop('checked', false);
    }

    $('.time-interval').val(localStorage['time_interval']);

    $('.add-new-data-popup').addClass('swal-overlay--show-modal');
})

$('#automate-approval-btn').click(function() {
  $('.approval-settings-popup').addClass('swal-overlay--show-modal');
})



$('.save-auto-data').click(function() {
  var is_automation_applied = $('.automation-applied').is(":checked");
  var time_interval = $('.time-interval').val();
  if(time_interval <= 15) {
    swal('Please enter above 15 mins', '', 'error');
    return false;
  }
  if(time_interval != '') {
      localStorage['is_automation_applied'] = is_automation_applied;
      localStorage['time_interval'] = time_interval;
      cr.sendMessage({
          cmd: "automation",
          data: {

          }
        });

      $('.add-new-data-popup').removeClass('swal-overlay--show-modal');
  }
})

$('.save-automation-approval').click(function() {
  var approval_automation_applied = $('.approval-automation-applied').is(":checked");
  var time_interval = $('.approval-time-interval').val();
  if(parseInt(time_interval) <= 15) {
    swal('Please enter above 15 mins', '', 'error');
    return false;
  }
  if(time_interval != '') {
      localStorage['approval_automation_applied'] = approval_automation_applied;
      localStorage['approval_time_interval'] = time_interval;
      cr.sendMessage({
          cmd: "automate-fb-approval",
          data: {
            approval_automation_applied: approval_automation_applied,
            approval_time_interval: time_interval
          }
        });

      $('.approval-settings-popup').removeClass('swal-overlay--show-modal');
  }
})

$(".stop-automation-approval").click(function(){
  var time_interval = $('.approval-time-interval').val("");
  localStorage['approval_automation_applied'] = false;
  localStorage['approval_time_interval'] = 0;
  cr.sendMessage({
    cmd: "stop-automate-fb-approval",
    data: null
  });
  $('.approval-settings-popup').removeClass('swal-overlay--show-modal');
});

$('.cancel-auto-data').click(function() {
    $('.add-new-data-popup').removeClass('swal-overlay--show-modal');
})

$('.cancel-automation-approval').click(function() {
  $('.approval-settings-popup').removeClass('swal-overlay--show-modal');
})

$(function(){
  loadData()
})
