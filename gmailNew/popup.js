
checklogin();
var URL='http://ec2-18-191-216-173.us-east-2.compute.amazonaws.com/dashboard/'
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

$(document).on("click","#extract",function(){


  var no = document.getElementById("totalmail").value;
  
	chrome.storage.local.get("data", function(items) {
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {
			msg: 'quoraans',
      num :no,
			subject:'abc'
			});
		});
	})
})

  




