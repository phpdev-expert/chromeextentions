const cr = chrome.runtime;
const cs = chrome.storage.local;

console.log("Hello there content script!");
const messageBar = `<div class="momane_message_ext"></div>`;
const progressBar = `
  <div class="momane_overlay"></div>
  <div class="momane_progressBar">
    <div class="momane_finished">
    <img src="${chrome.extension.getURL("./images/logo.png")}"  style="height:200px;width:250px;"/ >
  </div>
  <div class="momane_text">Automatication is going on. Please wait ......</div>
    <div class="momane_progressInfo">
      <span class="momane_done">0</span> of <span class="momane_sum">100</span>
    </div>
    <button class="momane_stop">Stop</button>
  </div>
`;

const sheetURLHTML = `<div class="gc-ext-block" style="width: 845px;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 2px var(--shadow-2);
    margin: auto;
    margin-top: 30px;"><label class="momane_lable" style="display:block;    font-size: 14px;
    padding: 5px 0px;">${texts.sheetURL}</label><input class="momane_sheet_ext" type="url" placeholder="${texts.inputSheetURL}"></div>`;
let sheets = {};
let user = {};
let level = {};
cs.get(["user", "level", "sheets"], i => {
  user = i.user;
  level = i.level;
  sheets = i.sheets;
});

let debugging = false;

let approveAllStatus = false;
keepFrameHot();
setInterval(keepFrameHot, 3200);
let userCount = 0;
let passedCount = 0;
let scrollingInterval;
let groupName = "";
let groupId = 0;

cr.onMessage.addListener((req, sender, sendResponse) => {
  switch (req.cmd) {
    case "userResult":
      setUser(req.data);
      break;
    case "sendResult":
      setResult(req.data);
      break;
    case "approveAll":
      userCount = 0;
      userCount = document.querySelector("div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.i1fnvgqd.bp9cbjyn.lhclo0ds.btwxx1t3.sj5x9vvc.cxgpxx05.b5q2rw42.lq239pai.mysgfdmx.hddg9phg > div:nth-child(1) > div > div > span > h2 > span").textContent.replace('·', '').replace('Matches', '').trim()
      userCount = parseInt(userCount, 10)
      if (userCount == 1) {
        let noSheet = false;
        if (!approveAllStatus) {
          if ($(".momane_sheet_ext").val() === "") {
            noSheet = true;
            // showError(texts.noSheetSet);
            // return;
          }
          approveAllStatus = true;
          approveAllFilter(noSheet);
        }
      } else {
        approveAllTrigger();
      }
      break;
    case "approveAllFilter":
      approveAllTriggerFilter();
      break;
    case "triggerWelcomeMessage":
      triggerWelcomeSendMessage(req.welcomeMessageText);
      break;
  }
});

function approveAllTrigger(){
    $( ".momane_approveAll" ).trigger( "click" );
}

function setResult(data) {
  passedCount++;
  if (data.success) {
    $(".momane_message_ext").html(`<span class="momane_userName"> ${data.userData.userName} </span>${texts.added}.`).addClass("momane_info").removeClass("momane_error");
    setTimeout(resetInfobar, 2500);
  } else {
    $(".momane_message_ext").html(`There was an error when adding user <span class="momane_userName">${data.userData.userName} </span> to sheet`).removeClass("momane_info").addClass("momane_error");
    // clearMessage();
  }
  $(".momane_done").text(passedCount);
  if (approveAllStatus) {
    setTimeout(() => {
      if (passedCount < userCount) {
        waitAndApprove();
      } else {
        approveAllStatus = false;
        $(".momane_approveAll").text("Finished");
        resetInfobar();
      }
    }, getRandomPoint() * 100);
    if ($(".momane_adding").length === userCount || $(".momane_btn").length === 0) {
      clearInterval(scrollingInterval);
      $(".momane_text").text("Complete");
      resetInfobar();
      setTimeout(() => {
        stopApprovingAll();
      }, 2500);
    }
  }
}

function waitAndApprove() {
  if ($(".momane_approve").length > 0) {
    approveUser($(".momane_approve").eq(0));
  } else {
    setTimeout(() => {
      waitAndApprove();
    }, 3000);
  }
}


function checkUser() {
  cr.sendMessage({
    cmd: "checkUser"
  });
}


function setUser(data) {
  if (data.valid && data.hasSheet) {
    if (sheets && sheets.hasOwnProperty(getGroupID())) {
      resetInfobar();
    } else {
      showErrorMessage({
        valid: true,
        hasSheet: false
      });
    }
  } else {
    showErrorMessage(data);
  }

    init();


  debugging = data.testMode;
  if (debugging) {
    $(".momane_approve").addClass("momane_testing");
    $(".momane_approveAll").addClass("momane_testing");
  } else {
    $(".momane_approve").removeClass("momane_testing");
    $(".momane_approveAll").removeClass("momane_testing");
  }
  console.log(data)
  // alert(data.valid)
  // if(data.valid){

    $("[aria-label='Approve']:visible").each(function () {
        let that = $(this);
        if (that.prev(".momane_approve").length < 1) {
          that.before(`<button class="momane_btn momane_approve" title="Courtesy of Group Hyper  Growth Tool Ext!"> Approve </button>`);
          that.hide();
        }
      });


      let approveAll = $(`[aria-label="Approve All"]`);
      //alert(approveAll.length)
      if (approveAll.length > 0) {
        if (approveAll.prev(".momane_approveAll").length < 1) {
          approveAll.before(`<button class="momane_approveAll" title="Courtesy of Group Hyper  Growth Tool Ext!"> Approve All</button>`);
          approveAll.hide();
        }
      }


  // }else{
  //
  //     $('.momane_approveAll').remove();
  //     $('.momane_approve').remove();
  //     $(`[aria-label="Approve All"]`).show();
  //     $(`[aria-label="Approve"]`).each(function () {
  //       var thats = $(this)
  //       thats.show();
  //     });
  // }

}

function init() {
  groupName = getGroupName();
  if($("div[aria-label='Close']").length){
    $("div[aria-label='Close']").click()
    $("div[aria-label='Close']")[0].click()
  //  $("div[aria-label='Close']").triggre('click')
  }
  $(document).on("click", ".momane_approve", function () {
    let noSheet = false;
    if ($(".momane_sheet_ext").val() === "") {
      // showError(texts.noSheetSet);
      noSheet = true;
      // return;
    }
    approveAllStatus = false;
    cr.sendMessage({
      cmd: "updateCount",
      amount: 1
    });
    approveUser($(this), noSheet);
  });

  $(document).on("click", ".momane_approveAll", function () {
    let noSheet = false;
    if (!approveAllStatus) {
      if ($(".momane_sheet_ext").val() === "") {
        noSheet = true;
        // showError(texts.noSheetSet);
        // return;
      }

      $(this).text("Approving...");
      approveAllStatus = true;
      approveAll(noSheet);
      alert(noSheet)
    } else {
    //  alert("working");
    }
  });

  $(document).on("click", ".momane_stop", function () {
    stopApprovingAll();
    $(".momane_approveAll").text("Approve All");
    resetInfobar();
  })

  $(document).on("click", ".momane_sheet_ext", function () {
    // if (!level.pro) {
    //   alert(texts.upgrade);
    // }
  })



  $(document).on("click", ".momane_limit", function () {
    cr.sendMessage({
      cmd: "toUpdate"
    });
  });
}

$(document).on("input", ".momane_sheet_ext", function () {
  let that = $(this),
    url = that.val().trim();
  if (checkIsGoogleSheet(url)) {
    checkSlot(url);
  } else {
    if (url) {
      swal({
        title: "Error",
        text: texts.urlNotCorrect,
        icon: "error",
        timer: 2000
      });
    }

  }
})

function checkSlot(url) {
  // show confirmation modal
  if (level.valid && !level.ultra) {
    let change = sheets.hasOwnProperty(getGroupID());
    if (change) {
      addSheets(url);
      return;
    }
    let plan = "BASIC PLAN";
    if (level.pro) {
      plan = "PRO PLAN";
    }
    let limit = 10;
    let len = (sheets.length ? sheets.length : 0) + 1;

    let msg = `You currently subscribed to the ${plan} which allows you to use Group Convert with 1 group.
               By clicking the OK you will be adding 1 out of 1 available groups.
                If this isn’t a group that you want to use with Group Convert, please click Cancel. `;
    if (level.pro) {
      limit = level.limit;
      msg = `You currently subscribed to the ${plan} which allows you to use Group Convert with 5 groups.
              By clicking the OK you will be adding ${len} out of ${limit} available groups.
              If this isn’t a group that you want to use with Group Convert, please click Cancel. `;
    }

    swal({
      title: "Are you sure?",
      text: msg,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willAdd) => {
        if (willAdd) {
          addSheets(url)
        }
      });
  } else {
    if (level.ultra || (sheets && sheets.hasOwnProperty(getGroupID()))) {
      addSheets(url);
    }
  }
}

function addSheets(url) {
  groupId = getGroupID();
  let change = sheets.hasOwnProperty(groupId);
  cr.sendMessage({
    cmd: "checkAuth",
    sheetURL: url
  });
  sheets[groupId] = {
    name: getGroupName(),
    url: url
  };
  if (!change) { //add group
    sheets.length = (sheets.length ? sheets.length : 0) + 1;
  }
  cs.set({
    sheets: sheets
  });
  swal({
    title: "Success",
    text: "Sheet URL added",
    icon: "success",
    timer: 2000
  });
  $(".momane_sheet_ext").removeClass("momane_emptyinput")
}

function stopApprovingAll() {
  approveAllStatus = false;
  $(".momane_overlay").remove();
  $(".momane_progressBar").remove();
  clearInterval(scrollingInterval);
}


function approveUser(btn, noSheet, status) {
  let that = btn;
  if (noSheet) {
    if (!debugging) {
      that.next()[0].click();
    } else {
      console.log("approved");
    }
    //return;
  }


  console.log('approveUser');

  that.addClass("momane_adding").removeClass("momane_approve");
  that.text(texts.userAdded);
  let info = {};
  let infoWrapper = that.parent().parent().parent().parent().parent();
  info.groupName = getGroupName();
  info.groupID = getGroupID();

  console.log("infoWrapper: ", infoWrapper);
  if (infoWrapper.length > 0) {
    // var name = infoWrapper.find('div:nth-child(1) > div > div:nth-child(2) > span > span > div > a');
    var name = infoWrapper.find('a[role="link"]');
    console.log('name', name[0]);
    name = $(name[0]);
    var href = name.attr("href");
    info.userID = 'https://www.facebook.com' + href || "ERROR";

    /*
     if(info.userID != 'ERROR') {
         var r = /.*\/user\/(.*)\//g
         var data = r.exec(info.userID);
         if(data.length > 1) {
            info.userID = data[1];
         }
    }*/

    const userName = infoWrapper.find('div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.g5gj957u.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr.p8fzw8mz.pcp91wgn.iuny7tx3.ipjc6fyt > div > div:nth-child(1) > span');
    console.log('userName', userName[0]);
    info.userName = $(userName[0]).text().trim() || "ERROR";
    info.firstName = $(userName[0]).text().split(" ")[0] || "ERROR";

    var length = $(userName[0]).text().split(" ").length;
    info.lastName = $(userName[0]).text().split(" ")[length - 1];

    var date = infoWrapper
      .find(
        "div.orn4t191 > div:nth-child(2) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.d2edcug0.rj1gh0hx.buofh1pr.g5gj957u.hpfvmrgz.o8rfisnq.p8fzw8mz.pcp91wgn.iuny7tx3.ipjc6fyt > div > div > span"
      )
      .text();
    if (date == "") {
      date = infoWrapper
        .find(
          "div.orn4t191 > div:nth-child(1) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.d2edcug0.rj1gh0hx.buofh1pr.g5gj957u.hpfvmrgz.o8rfisnq.p8fzw8mz.pcp91wgn.iuny7tx3.ipjc6fyt > div > div > span"
        )
        .text();
    }
    // info.joinedDate = date.replace("Joined Facebook", "");
    infosRow = infoWrapper.find('.dwo3fsh8.g5ia77u1.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.q9uorilb.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.k4urcfbm')
    const joinedEl = [...infosRow].filter((dt) => dt.textContent.includes('Joined'))
    info.joinedDate = joinedEl[0]
      ?.textContent
      ?.replace("Joined Facebook", "") || date.replace("Joined Facebook", "");

    const [month, day, year] = new Date().toDateString().split(" ").slice(1);
    info.dateAdded = month + " " + day + ", " + year;
    info.status = status;
    info.questions = [];
    infoWrapper.find("ul li").each(function () {
      info.questions.push({
        question: $(this).find("span").first().text(),
        answer: $(this).find("div.aahdfvyu span").text(),
      });
    });
    console.log("info: ", info);
  }

  console.log("length: ", info.questions.length);

  cr.sendMessage({
    cmd: "sendDataExt",
    data: {
      userInfo: info,
    },
  }, (res) => console.log('sendDataExt res', res));
  if (!debugging) {
    that.next()[0].click();
  }
}

function approveAll(noSheet) {
  if (noSheet) {
    $(`[aria-label="Approve All"]`).next()[0].click();
    $(`[aria-label="Confirm"]`)?.click();
    return;
  }

  userCount = 0;
  // var countheadings = document.evaluate(
  //   "//span[contains(., 'Matching')]",
  //   document,
  //   null,
  //   XPathResult.ANY_TYPE,
  //   null
  // );
  // console.log('countheadings', countheadings);
  // var headingInter = countheadings.iterateNext();
  // console.log('headingInter', headingInter);
  // var count = headingInter.textContent;
  // var count =_xpath('//*[@id="mount_0_0"]/div/div/div[3]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[1]/span/span');
  // userCount = count.replace(/^\D+/g, "");
  // userCount = document.querySelectorAll('.momane_approve').length
  userCount = document.querySelector("div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.i1fnvgqd.bp9cbjyn.lhclo0ds.btwxx1t3.sj5x9vvc.cxgpxx05.b5q2rw42.lq239pai.mysgfdmx.hddg9phg > div:nth-child(1) > div > div > span > h2 > span").textContent.replace('·', '').replace('Matches', '').trim()
  userCount = parseInt(userCount, 10)

  if (userCount < 1) {
    return;
  }
  // cr.sendMessage({
  //   cmd: "updateCount",
  //   amount: userCount,
  // });


  $("body").append(progressBar);
  $(".momane_sum").text(userCount);
  passedCount = 0;
  $(".momane_done").text(passedCount);
  console.log(passedCount);
  let btn = $(".momane_approve").eq(0);

  if (approveAllStatus) {
    approveUser(btn, noSheet, "approve");
    scrollingInterval = setInterval(() => {
      window.scrollBy(0, 1000);
    }, 500);
  }
}



function showErrorMessage(data) {
  let msgBar = $(".momane_message_ext");
  if (msgBar.hasClass("momane_limit")) {
    return;
  }
  let text = `Please check that your${!data.valid ? " email address" : " "}
  ${!data.valid && !data.hasSheet ? " and " : " "}
  ${!data.hasSheet ? "Google Sheet URL" : " "}
      ${!data.valid && !data.hasSheet ? " are " : " is "}  defined.`;
  $(".momane_sheet_ext").addClass("momane_emptyinput");
  $(".momane_message_ext").text(text).addClass("momane_error").removeClass("momane_info");

}

function keepFrameHot() {

  checkUser();
    let messageHeader = $('div[role="main"]');
    if (messageHeader.length > 0) {
      //if (messageHeader.find(".momane_message_ext").length < 1) {
      //  $("#member_requests_pagelet").prepend(messageBar);
      //}
      if (messageHeader.find(".momane_sheet_ext").length < 1) {
        messageHeader.first().prepend(sheetURLHTML);
        //$('div[role="main"]').prepend(sheetURLHTML);
      }

    cs.get(["user", "level", "sheets"], i => {
      user = i.user || {};
      sheets = i.sheets || {};
      level = i.level || {};
      groupId = getGroupID();
      groupName = getGroupName();

      let sheetIpt = $(".momane_sheet_ext");
      if (sheetIpt.val().trim() === "" && !sheetIpt.is(":focus")) {
        if (sheets.hasOwnProperty(groupId)) {
          sheetIpt.val(sheets[groupId]["url"]);
        } else {
          if (sheets.hasOwnProperty("length") && !level.ultra) {
            if (level.limit <= sheets.length) {
              showExceedsLimit();
            }
          }
        }
        if (!sheets[groupId]) {
          sheets[groupId] = {
            name: getGroupName()
          }
        }
        cs.set({
          sheets: sheets
        });
      }
      // sheetIpt.prop("disabled", !level.pro)
    });
  }

}

function showExceedsLimit() {
  showErrorInBar(texts.exceedsLimit);
  $(".momane_sheet_ext").hide();
  toggleURLIpt();
}

function toggleURLIpt(show) {
  if (show) {
    $(".momane_message_ext").removeClass("momane_limit");
    $(".momane_lable").show();
  } else {
    $(".momane_message_ext").addClass("momane_limit");
    $(".momane_lable").hide();
  }
}

function getRandomPoint() {
  let min = 1.5;
  let max = 2.5;
  return getRandomFloat(min, max).toFixed(3);
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function resetInfobar() {
  $(".momane_message_ext").text(texts.barMessage).addClass("momane_info").removeClass("momane_error");
}

function getGroupID() {
  const match = window.location.href.match(/\/groups\/([\w.]*)\//)
  return match !== null ? match[1] : null
}

function getGroupName() {
  const match = window.location.href.match(/\/groups\/([\w.]*)\//);
  return match !== null ? match[1] : null;
}

function checkIsGoogleSheet(url) {
  return new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").test(url);
}

function showError(msg) {
  swal({
    title: "Error",
    text: msg,
    icon: "error",
    timer: 4000
  });
}

function showErrorInBar(msg) {
  $(".momane_message_ext").text(msg).addClass("momane_error").removeClass("momane_info");
}

function getSheets() {
  return new Promise(resolve => {
    sl.get("sheets", i => {
      resolve(i.sheets);
    });
  });
}

function updateSheets(newSheets, cb) {
  getSheets().then(sheets => {
    sheets = newSheets;
    sl.set({sheets: sheets}, () => {
      cb && cb();
    });
  });
}
