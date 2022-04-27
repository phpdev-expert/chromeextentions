const progressBar = `
  <div class="momane_overlay"></div>
  <div class="momane_progressBar">
    <div class="momane_finished">
    <img src="http://ec2-18-191-216-173.us-east-2.compute.amazonaws.com/images/output-onlinepngtools.png"  style="width:50%;"/ >
  </div>
  <div class="momane_text">Automatication is going on. Please wait ......</div>
    <div class="momane_progressInfo">
      <span class="momane_done">0</span> of <span class="momane_sum">100</span>
    </div>
 
  </div>
`;



function sortnow(no) {

var va = 1;
if(no != '')
{
  var nw =no-va;
}

  var emaildata = [];
   
   $(".ae4.UI .Cp table tr").each(function( key, val){  
          if(no != '' && key < no-1)  {
             emaildata.push(this);
          }else if(no=='')  {
           emaildata.push(this);
        }
           });

var i=0;
var emailcontent = [];
$("body").append(progressBar);
  var interva=setInterval(loadcontent,700);
  function loadcontent(){
    var num = 1;
    var total = emaildata.length + num;

    $(".momane_sum").text(total);
    $(".momane_done").text(i);

    if(i>emaildata.length){
      clearInterval(interva);
    
        chrome.storage.local.set({ "emailcontent" : emailcontent }, function() {
          if (chrome.runtime.error) {
            console.log("Runtime error.");
          }
        });

chrome.runtime.sendMessage({
    from: 'content',
    subject:'lastItem'
});
       

       setTimeout(function(){
        window.location.reload();
    },200);


   
    }
    $(emaildata[i]).click();
    setTimeout(function(){
        emailcontent.push($(".Bs.nH.iY.bAt").html());
        $(".asa").click();
        i++;
    },300);

  }

}


chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if (request.msg == "quoraans") {
       var no = request.num;
      sortnow(no);
    }
});


