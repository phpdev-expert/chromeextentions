

var interv;
var numofQ = 0;
var prevlen = 0;
var failed = 0
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if (request.msg == "quoraans") {
        numofQ = parseInt(request.subject);
       
            interv = setInterval(function() {
                loadpage(1)
            }, 700);
        
    } else if (request.msg == "quorfollow") {
        numofQ = parseInt(request.subject);
            interv = setInterval(function() {
                loadpage(2)
            }, 700);
       
    }
});



var scrollingElement = (document.scrollingElement || document.body)
function scrollToBottom () {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}
function loadpage(v){

        loadanswers(v);
   
}

function loadanswers(v) {
    if (numofQ ==failed) {
        clearInterval(interv);
				if(v==1)
         sortnow()
				else
				 sortnowf()
    } else {
        scrollToBottom();
        failed++
        
    }
}




function sortnow() {
    clearInterval(interv);
    scrollingElement.scrollTop = 0;
    setTimeout(function() {
    var data = [];
    $('.ans_count').each(function() {
        var alpha = $(this).text();
        alpha = alpha.replace(',', '');
        $(this).parents('.pagedlist_item').prepend('<h1 style="display:none" class="sortme"  data-count="' + parseInt(alpha) + '"  >' + parseInt(alpha) + '</h1>');
    });
    $('.pagedlist_item:empty').remove();
    setTimeout(function() {
        scrollingElement.scrollTop = 0;
        tinysort('.QueryResultsList>div', {
            selector: 'h1.sortme',
            data: 'count',
            order: 'desc'
        });
                swal("Sorting DONE!", "", "success");
    }, 200);

}, 200);

}


function sortnowf() {
    clearInterval(interv);
    scrollingElement.scrollTop = 0;
    var data = [];
    $('.bullet').each(function() {
        var alpha = $(this).next().text();
        var indexValue=alpha.indexOf('k');
                if(indexValue!=-1){
                var realVal= parseFloat(alpha);
                var convertVal = realVal*1000
                        $(this).parents('.pagedlist_item').prepend('<h1 style="display:none" class="sortme"  data-count="' +convertVal+ '"  >' + convertVal + '</h1>');
            }else{
                        $(this).parents('.pagedlist_item').prepend('<h1 style="display:none" class="sortme"  data-count="' + parseInt(alpha) + '"  >' + parseInt(alpha) + '</h1>');
            }

    });
    $('.pagedlist_item:empty').remove();
    setTimeout(function() {
        scrollingElement.scrollTop = 0;
        tinysort('.QueryResultsList>div', {
            
            selector: 'h1.sortme',
            data: 'count',
            order: 'desc'
        });
                    swal("Sorting DONE!", "", "success");
    }, 200)

}


const footerlinksUrl = "http://ec2-54-224-229-36.compute-1.amazonaws.com/get-footer-links.php";
