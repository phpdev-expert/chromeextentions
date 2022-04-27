
checklogin();
var URL='http://54.224.229.36/qsort/'
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
            if(items.login.status==1 && tots < 86400){
              $("#loader").hide();
              $("#dashboard").show();
            }else{
              $("#loader").hide();
              $("#form_container").show();
            }
          }else{
            $("#loader").hide();
            $("#form_container").show();
          }
        }
      });
    }
  });
}

$("#forgotpasslink").click(function(){

  $("#form_container").hide();
  $("#forgotpass").show();
})

$("#loginBackBtn").click(function(){
  $("#form_container").show();
  $("#forgotpass").hide();
})

$("#btn_logout").click(function(){

  $("#form_container").show();
  $("#dashboard").hide();
  var resp={status:0};
  chrome.storage.local.set({ "login" : resp }, function() {
          if (chrome.runtime.error) {
            console.log("Runtime error.");
          }
        });

})




$("#dologin").click(function(){
  $("#loader").show();
  //alert($("#username").val());
  $.ajax({
    url:URL+'/loginapi.php',
    data:{username:$("#username").val(),password:$("#password").val()},
    type:'post',
    success:function(data){

      $("#loader").hide();
	  //console.log(data);return false;
	  var resp=JSON.parse(data);
    // alert(data)
	  if(resp.status==1){
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
      }else{
        $("#error").show();
        $("#text-msg").text('Invalid login details')
      }

    }
  })

  return false;
})

$(document).on("click","#sortquora",function(){
	var page=$('#numberec').val();
	chrome.storage.local.get("data", function(items) {
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {
			msg: 'quoraans',
			subject:page
			});
		});
	})

})


$(document).on("click","#sortquoraf",function(){
	var page=$('#numberec').val();
	chrome.storage.local.get("data", function(items) {
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {
			msg: 'quorfollow',
			subject:page
			});
		});
	})

})



if(localStorage.flinks) {
      setFooterLinks(localStorage.flinks);
      getFooterLinks().then( (data) => {
          localStorage.flinks = JSON.stringify(data);
    });

      
} else {
    getFooterLinks().then( (data) => {
          localStorage.flinks = JSON.stringify(data);
          setFooterLinks(localStorage.flinks);
    })
}



function getFooterLinks() {
    return new Promise(resolve => {
    $.ajax({
      url: 'http://54.224.229.36/qsort/get-footer-links.php',
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

function setFooterLinks(data) {
    var htmlData = '';
    console.log(data);
    data = JSON.parse(data);
    data = data.data;
    for(link in data) {
      var linkd = data[link];
      
      htmlData += '<li><a href="'+ linkd.href +'" target="_blank" >' + linkd.name +'</a><span>|</span></li>';
    }
    $('.pull-left').html('');
    $('.pull-left').html(htmlData);
}