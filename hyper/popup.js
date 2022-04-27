const server = checkEmailURL;
const saveBtn = $("#save"),
      emailIpt = $("#email"),
      infoBar = $(".infoBar"),
      testModeCB = $("#testMode");
const sl = chrome.storage.local;
const loader = $(".loading");
let currentEmail = localStorage.email;
 infoBar.css('display', 'none');
saveBtn.click(function () {
  let email = emailIpt.val().trim();
  if (currentEmail && email !== currentEmail) {
    swal({
      title: "Are you sure?",
      text: texts.checkEmail,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(willCheck => {
      if (willCheck) {
        init();
        currentEmail = email;
        checkAndSaveEmail(email);
      }
    });
  } else {
    checkAndSaveEmail(email);
  }
});


function init() {
  sl.clear();
  localStorage.removeItem("testMode");
}

function checkAndSaveEmail(email) {
  loader.show();
  checkEmail(email).then(info => {
    localStorage.email = email;
    if (1) {
      cs.set({
        "level": {
          pro: 1,
          ultra: 1,
          limit: 10,
          valid: true
        }
      });
      if (testEmails.includes(email)) {
        $(".test").show();
      }
      infoBar.attr("class", "infoBar");
      infoBar.text(texts.barMessage).removeClass("momane_error").addClass("momane_info");
      infoBar.css('display', 'block');
      localStorage.testMode = testModeCB.is(":checked");
    } else {
      cs.set({
                      "level": {
                        pro: 1,
                        ultra: 1,
                        limit: 10,
                        valid: true
                      }
                    });
      console.log(info);
      infoBar.text(texts.emailNotValid).removeClass("momane_info").addClass("momane_error");
      localStorage.removeItem("sheetID");
      localStorage.removeItem("sheetURL");
      infoBar.css('display','block');
    }
    loader.hide();
  });
}

emailIpt.val(localStorage.email);

testModeCB.prop("checked", localStorage.testMode === "true");
if (testEmails.includes(localStorage.email)) {
  $(".test").show();
}

if (localStorage.email) {
  checkEmail(localStorage.email).then(info => {
    if (info.ok) {
      cs.set({
                      "level": {
                        pro: 1,
                        ultra: 1,
                        limit: 10,
                        valid: true
                      }
                    });
    } else {
      infoBar.text(texts.emailNotValid).removeClass("momane_info").addClass("momane_error");
       infoBar.css('display', 'block');
      $(".test").hide();
    }
  });
}


if(localStorage.links) {
      setFooterLinks(localStorage.links);
      getFooterLinks().then( (data) => {
          localStorage.links = JSON.stringify(data);
    });
} else {
    getFooterLinks().then( (data) => {
          localStorage.links = JSON.stringify(data);
          setFooterLinks(localStorage.links);
    })
}


$("#clear").click(() => {
  removeAuth();
});

function getFooterLinks() {
    return new Promise(resolve => {
    $.ajax({
      url: footerlinksUrl,
      dataType: "json",
      success: (data) => {
          resolve(data);
      },
      error: e => {
            //error
      }
    });
  });
}


function checkEmail(email) {
   return new Promise(resolve => {
    $.ajax({
      url: server + email,
      dataType: "json",
      success: (data) => {
        console.log("check email success", data)
        if (data && data.ok) {
          resolve(data);
        } else {

          resolve({
            isPro: 1,
            isUltra: 1,
            isValid: 1
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

$("#cancel").click(function () {
  window.close();
});

$("#forgotpasslinks").click(function () {
  var pending_url = 'http://ec2-18-220-180-86.us-east-2.compute.amazonaws.com/changepassword';
   chrome.tabs.create({url: pending_url} );
   return false;
});


$("#openDataList").click(() => {
  let dataUrl = "dataListExt.html";
  ct.query({}, tabs => {
    let found = false;
    tabs.forEach(tab => {
      if (tab.url.includes(dataUrl)) {
        ct.update(tab.id, {
          active: true
        });
        found = true;
      }
    });

    if (!found) {
      ct.create({
        url: dataUrl
      });
    }
  });
});

function setFooterLinks(data) {
    var htmlData = '';
    console.log(data);
    data = JSON.parse(data);
    data = data.data;
    for(link in data) {
      var linkd = data[link];
      htmlData += '<a href="'+ linkd.href +'" target="_blank">' + linkd.name +'</a> |  ';
    }
    $('.pull-left').html('');
    $('.pull-left').html(htmlData);
}
// ggt popjs
checklogin();
var viewData = "chrome-extension://"+  chrome.runtime.id +"/dataListExt.html";
$('#view-data').attr("href", viewData); // Set herf value

var URL = 'http://ec2-18-220-180-86.us-east-2.compute.amazonaws.com/api';
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});
function checklogin(){
  $("#loader").show();

  chrome.storage.local.get("login", function(items) {
    if (!chrome.runtime.error){
      chrome.storage.local.get("logintime", function(logtime) {
        if (!chrome.runtime.error) {
          var prevdt=logtime.logintime
          var millis = Date.now() - prevdt;
          var tots= Math.floor(millis/1000)
          if(items.login){
            if(items.login.data.id && tots < 86400){
              $("#loader").hide();
            //  checkAndSaveEmail('email@email.com');
              $("#form_container").hide();
              $("#dashboard").show();
              localStorage.activeStatus = 1;

            }else{
              $("#loader").hide();
              $("#form_container").show();
              localStorage.activeStatus = 0;
            }
          }else{
            $("#loader").hide();
            $("#form_container").show();
            localStorage.activeStatus = 0;
          }
        }
      });
    }
  });
}




$(document).on("click","#logoutLink",function(){
     $("#form_container").show();
              $("#dashboard").hide();
              chrome.storage.local.set({ "login" : [] }, function() {
                        if (chrome.runtime.error) {
                          console.log("Runtime error.");
                        }
                        cs.set({
                          "level": {
                            pro: false,
                            ultra: false,
                            valid: false
                          }
                        });
                      });

})

$(document).on("click","#add-friends",function(){
    $('#addnmbr #adddelay').val('')
    $('#addinput').show();

})

$(document).on("click","#addbtn",function(){

  var num1 = $('#addnmbr').val();
  var delay = $('#adddelay').val();
  if(delay=='' || isNaN(delay)){
    delay = 1000
  }else{
    delay = delay * 1000;
  }

  if(num1=='' || isNaN(num1)){
      alert('Pease enter valid number')
     }else{
      $('#addinput').hide();
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            msg: 'add-friends',
            data : num1 ,
            greeting : delay
          });
        });
     }
})


// send add freinds request to
/*$(document).on("click","#add-friends",function(){
    $('#addinput').show();
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
          msg: 'add-friends',
        });
    });
})*/




// send pendong freinds request to
$(document).on("click","#pending-friends",function(){
    var pending_url = 'https://m.facebook.com/friends/center/requests/outgoing/';
     chrome.tabs.create({url: pending_url} );
     return false;
})



$("#dologin").click(function(){
  $("#loader").show();
  let datsz = {
    email:$('#username').val(),
    password:$('#password').val()
  }
  $.ajax({
    url: URL + '/login',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(datsz),

              success: function (data, textStatus, xhr) {

                var resp=data;
                console.log(resp);
                $("#loader").hide();
               if(resp.data.id){
                      chrome.storage.local.set({ "login" : resp }, function() {
                        if (chrome.runtime.error) {
                          console.log("Runtime error.");
                        }
                      });
                      var now = Date.now()
                      chrome.storage.local.set({ "logintime" : now  }, function() {
                        if (chrome.runtime.error) {
                          console.log("Runtime error.");
                        }
                      });

                    $("#form_container").hide();
                    $("#dashboard").show();
                    checkAndSaveEmail($('#username').val());

                }else{

                    $("#error").show();
                    $("#text-msg").text(resp.msg)

                    cs.set({
                      "level": {
                        pro: false,
                        ultra: false,
                        valid: false
                      }
                    });

                }

              },

              error: function (xhr, textStatus, errorThrown) {
                    $("#loader").hide();
                    $("#error").show();
                    $("#text-msg").text('Invalid login details')
              }

  })



                    //   let resp={
                    //     status:1
                    //   }
                    //   chrome.storage.local.set({ "login" : resp }, function() {
                    //     if (chrome.runtime.error) {
                    //       console.log("Runtime error.");
                    //     }
                    //   });
                    //   var now = Date.now()
                    //   chrome.storage.local.set({ "logintime" : now  }, function() {
                    //     if (chrome.runtime.error) {
                    //       console.log("Runtime error.");
                    //     }
                    //   });
                    // $("#loader").hide();
                    // $("#form_container").hide();
                    // $("#dashboard").show();



  return false;
})
