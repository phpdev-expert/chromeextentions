timer = null;
timeInterval = 20000;
fbGroupURL = "https://www.facebook.com/groups/"
autoApproval = null;
cr.onMessage.addListener((req, sender, sendResponse) => {
  switch (req.cmd) {
    case "getToken":
      getToken().then(token => {
        localStorage.token = token;
      });
      break;
    case "sendDataExt":
       console.log("req.datareq.datareq.data")
       console.log(req.data);
      saveToLocal(req.data, sender.tab.id);
      cr.sendMessage({cmd: "dataAddedExt", data: req.data});
      sendToSheet(req.data, sender.tab.id);
      break;
    case "checkUser":
      checkUser(sender.tab.id);
      break;
    case "updateCount":
      updateCount(req.amount);
      break;
    case "checkAuth":
      checkAuth(req.url);
      break;
    case "toUpdate":
      openURL(updateURL);
      break;
    case "openURL":
      openURL(req.url);
      break;
    case "automation" :
      startAutomation();
      break;
    case "automate-fb-approval":
      if(req.data.approval_automation_applied){
        startAutomationFBApproval(req.data)
      }
      break;
    case "stop-automate-fb-approval":
      clearInterval(autoApproval);
      break;
  }
});

function openURL(url) {
  ct.create({url: url});
}

function startAutomationFBApproval(data){
  cs.get(["sheets"], i => {
    let sheets = i.sheets;
    console.log(sheets);
    let sheetsList = [];
    if(sheets){
      timeInterval = data.approval_time_interval * 30000; //convert to millisecond
      autoApproval = setInterval(function(){
        cs.get(["sheets"], i => {
          let sheets = i.sheets;
          console.log(sheets);
          let sheetsList = [];

          if(sheets){
            const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

            Object.keys(sheets).sort((a, b) => {
              return sheets[a].name > sheets[b].name;
            }).forEach(async (gid) => {
              sheets[gid].groupId = gid;
              sheetsList.push(sheets[gid]);
            });

            const asyncGroupList = async () => {
              for (const group of sheetsList) {
               const result = await startAutomate(group.groupId);
               console.log(result);
              }
              console.log('after forEach');
            }

            const startAutomate = groupId => {
              targetURL = fbGroupURL + groupId + "/requests/";
              openFbGroup(targetURL);
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(groupId);
                }, 30000);
              });
            }

            asyncGroupList();

          }
        });
      },timeInterval);
    }else{
      alert("It seems you haven't add your Google sheets.");
    }
  });
}


function openFbGroup(url){
  ct.query({}, function(tabs) {
      var isFound = false;
      tabs.forEach(function(tab){
        if(tab.url === url){
          ct.remove(tab.id);
        }
      });
      console.log("Create new FB Tab.");
      ct.create({ url: url, active: true }, function(tab){
        console.log(tab.url);
        setTimeout(function(){
          ct.sendMessage(tab.id, {
            cmd: "approveAll",
            data: null
          });
        }, 15000);
      });

  });

}


if (localStorage.email) {
  let email = localStorage.email;
  checkEmail(email).then(info => {
    if (info.isValid) {
      cs.set({"level": {pro: info.data.is_pro, ultra: info.data.is_pro, limit: info.data.limit, valid: true}});
    } else {
      cs.set({"level": {pro: false, ultra: false, valid: false}})
    }
  });
}


function checkAuth(url) {
  getToken();
}

function saveToLocal(data, tabId) {
  cs.get(dataKey.user, i => {
    let userData = i[dataKey.user] || [];
    userData.push(data);
    let newData = {};
    newData[dataKey.user] = userData;
    console.log("SAVING DATA TO STORAGE")
    cs.set(newData, function () {
        console.log("SAVING DATA TO STORAGESAVEDDDDDDDDDDD")
    //  ct.sendMessage(tabId, {cmd: "sendResult", data: {success: true, id: data.id, userData: data.userInfo}});
    });
  });
}


function checkUser(tabId) {
  let userValid = localStorage.email;
  let hasSheet = localStorage.token;
  chrome.storage.local.get("login", function(items) {
    if (!chrome.runtime.error){
      chrome.storage.local.get("logintime", function(logtime) {
        if (!chrome.runtime.error) {
          var prevdt=logtime.logintime
          var millis = Date.now() - prevdt;
          var tots= Math.floor(millis/1000)
          if(items.login){
            if(items.login.status==1 && tots < 86400){

            }else{
               userValid = '';
               hasSheet = '';
            }
          }else{
            userValid = '';
              hasSheet = '';
          }

          ct.sendMessage(tabId, {
            cmd: "userResult",
            data: {valid: userValid, hasSheet: hasSheet, testMode: localStorage.testMode === "true"}
          });
        }
      });
    }
  });
}


cr.onInstalled.addListener(details => {
  if (details.reason === "update") {
    cs.remove(dataKey.template);
  }
});

function updateCount(amount) {

}

function checkEmail(email) {
    return new Promise(resolve => {
    $.ajax({
      url: checkEmailURL + email,
      dataType: "json",
      success: (data) => {
        console.log("check email success", data)
        if (data && data.ok) {
          resolve(data);
        } else {
          resolve({
            isPro: false,
            isUltra: false,
            isValid: false
          })
        }
      },
      error: e => {
        resolve({
          success: false
        });
      }
    });
  });
}

function startAutomation() {

  clearInterval(timer);
  if(localStorage['is_automation_applied'] && localStorage['is_automation_applied'] == "true" && localStorage['time_interval'] && !isNaN(localStorage['time_interval'])) {
    timer = setInterval(function() {
      prepareData().then( (fdata) => {
        console.log(fdata);
        var execption = false;
        fdata.forEach((data, index) => {
          var sheetData = data.data;
          if(sheetData && sheetData.length > 0) {
           try {
              var sheetID  = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(data.url)[1];
              sendToSheet(sheetID, sheetData, data.gid);
            } catch (e) {
              return false;
            }
          }
        })
      });
    }, (localStorage['time_interval'] * 60 * 1000));
  }
}


startAutomation();


function sendToSheet(sheetID, sheetData,gid) {

  let colRange = "A1:Z1";
  sheetData =  {
    'values' : sheetData
  };
  let url = "https://sheets.googleapis.com/v4/spreadsheets/" + sheetID + "/values/" + colRange + ":append?valueInputOption=RAW&access_token=" + localStorage.token;
  var tried = 3;
  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(sheetData),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (respData) {
      //clear data
      clearData(gid);
    },
    error: function (e) {
      if (e.status === 401) {
        if (tried > 0) {
          tried--;
          refreshToken().then(token => {
            sendToSheet();
          });
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

function prepareData() {
  return new Promise( (resolve ,reject) => {
      var formatData = [];
      cs.get(["user", "sheets", "level"], i => {
          var sheets = i['sheets'];
          for(gid in sheets) {
             var arr = [];
             var users = i['user'];
             users.forEach((u,innerIndex) => {
                 if(u.userInfo.groupID == gid) {
                    arr.push(objectToArr(u.userInfo));
                 }
             })
             formatData.push({
                data : arr,
                url : sheets[gid].url,
                gid : gid
              });
          }
          resolve(formatData);
      })

    });
}


function clearData(cgid) {

    cs.get("user", i => {
        let data = i["user"];
        if (data) {
          let newData = [];
          data.forEach((u, i) => {
            let user = u.userInfo;
            let gid = user.groupID;
            if (gid !== cgid) {
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


function objectToArr(obj) {
  let arr = [];
  arr.push(obj.groupName);
  arr.push(obj.userID);
  arr.push(obj.userName);
  arr.push(obj.joinedDate);
  //sort the questions
  let template;
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
  //storeTemplate(qtemplate);
  arr[10] = obj.dateAdded;
  arr[11] = obj.firstName;
  arr[12] = obj.lastName;
  return arr;
}
