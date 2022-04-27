
var thisArray = [];
var pendingArray = [];
var cancelArray = [];
var i = 0;
var numberRequest = 0;
var delay = 1000;
var cancelCount=0;
var scrollingElement = (document.scrollingElement || document.body)




const progressBarPending = `
<div id="popupModal" style="display:none;">
  <div class="momane_overlay"></div>
  <div class="momane_progressBar" style="height: 100px;">

  <div class="momane_text">Pending friend requests are being cancelled. Please wait ......</div>
    <div class="progress">
      <div class="progress-bar bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

  </div>
  </div>
`;

const progressBarFb = `
<div id="popupModalFb" style="display:none;">
  <div class="momane_overlay"></div>
  <div class="momane_progressBar" style="height: 100px;">

  <div class="momane_text">Adding Friends..... Do not close the window.</div>
    <div class="progress">
      <div class="progress-bar bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

  </div>
  </div>
`;

const successBarFb = `
<div id="successBarFb" style="display:none;">
  <div class="momane_overlay"></div>
  <div class="momane_progressBar"style="height: 120px;" style="height: 100px;">

  <div class="momane_text">Friends added successfully, you are on the road to growing your group.</div>
   <a href="#" id="closeFbalert" class="buttoncancel">Close</a>
  </div>
  </div>
`;



chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if (request.msg == "add-friends" && request.data > 0) {
       console.log('works');
       i = 0;
       numberRequest = request.data;
       delay = request.greeting
       thisArray = [];
       setTimeout(addFriends,2000)

    }
});

function dothisAction(){

  var newI = setInterval(function(){

  if(numberRequest > (i - cancelCount )){
    if ($('.layerCancel').length){
      $('.layerCancel')[0].click()
      $('.layerCancel').remove()
     cancelCount++;
     //console.log($(this).parent().html())

      }
    }else{
      clearInterval(newI); // stop the interval
    }


}, 500);
  //console.log('cancel');
  //console.log(cancelArray.length);
}

$(document).on("click","#closeFbalert",function(){
    $('#successBarFb').remove();
})


//for click the add friends buttons
function addFriends(){




$("div[aria-label='Add Friend']").each(function(){
          if(!$(this).hasClass("noAdd")){
            var txt = $(this).parents("div[data-visualcompletion='ignore-dynamic']").text();
            var txt2 = 'admin'
            var txt3 = 'moderator'
            if(txt.toUpperCase().indexOf(txt2.toUpperCase()) != -1 || txt.toUpperCase().indexOf(txt3.toUpperCase()) != -1){

            }else{
              thisArray.push($(this));
            }
          }
    });
 console.log(thisArray.length)
    dothisAction()
    doAction();

}


//function for do action for add friend requests
function doAction(){

    var len = thisArray.length;
    setTimeout(function(){
        $('#popupModalFb').show();
    },500);


    var interval = setInterval(function(){
    //$('.layerCancel')[0].click();
    if(i == len){
      clearInterval(interval); // stop the interval
      scrollToBottom(addFriends);
    }else{

      if(numberRequest > (i - cancelCount )){
        if(thisArray[i]){
      $('html, body').animate({
            'scrollTop' : thisArray[i].position().top
        });
      }

        thisArray[i].addClass('noAdd');
        thisArray[i].click();

        //$('.layerCancel')[0].click();
        i++;
        openpopupFb()
      }else{
        clearInterval(interval); // stop the interval
      }
    }
  }, delay);

}


//function for do action for pending request
function doPendingAction(){


    setTimeout(function(){
      $('#popupModal').show();
        openpopup()
    },500);

    var interval = setInterval(function(){

    if(i == pendingArray.length){
      clearInterval(interval); // stop the interval

    }else{

        //console.log(i);
        pendingArray[i].click()
        i++;
    }

  }, 1000);
}

//fuction for scroll to bottom
function scrollToBottom (fun) {
  console.log('scroll')
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
  setTimeout(fun,1000)
}

function openpopup(){



            var progress = setInterval(function() {
            var $bar = $('.bar');
            var per = (i/(pendingArray.length - 1))*100;


            if (per==100) {

                // complete

                clearInterval(progress);
                $('.progress').removeClass('active');
                $('#popupModal').hide();
                $bar.width(0);

            } else {

                // perform processing logic here

                $bar.width(per+'%');
            }

            $bar.text(i+'/'+ (pendingArray.length - 1));
          }, 800);


}

function openpopupFb(){


            console.log(i+'_'+cancelCount)
            //var progress = setInterval(function() {
            var proceedRequest=i-cancelCount;
            //  alert(proceedRequest);
            var $bar = $('.bar');
            var per = (proceedRequest/(numberRequest))*100;


            if (per==100) {

                // complete

                //clearInterval(progress);
                $('.progress').removeClass('active');
                $('#popupModalFb').hide();
                $bar.width(0);
                setTimeout(function() {
                  $('#successBarFb').show();
                }, 1000);
            } else {

                // perform processing logic here

                $bar.width(per+'%');
            }

            $bar.text(proceedRequest+'/'+ (numberRequest));
          //}, 800);


}

var checkPending= 0;
//functionf for count pending friends
function pendingFriends(){

  if($('button[value="Cancel"]').length == $('.noCanel').length){

          checkPending++;
  }
  $('button[value="Cancel"]').not('.noCanel').each(function(){

           $(this).addClass('noCanel');
  });

  if(checkPending < 2){

      scrollToBottom(pendingFriends);

  }else{

     $('.noCanel').each(function(){

           pendingArray.push($(this));
      });


     if(pendingArray.length > 0){
          var r = confirm("Are you sure to cancel pending friends ?");
          if (r == true) {
            doPendingAction();
          } else {
            return false;
          }

     }else{
        return false;
     }
    //alert(pendingArray.length);


  }

}


function scrollToBottomPending(){
  console.log('scroll')
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
  setTimeout(pendingFriends,500)
}

//check onload for pendinf freinds button click
window.onload = function(e){
$('body').append(progressBarFb);
$('body').append(progressBarPending);
$('body').append(successBarFb);
  var url = 'https://m.facebook.com/friends/center/requests/outgoing/';
  if(window.location.href == url){

    pendingFriends()

  }
}
