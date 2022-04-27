
chrome.storage.local.get("emailcontent", function(emailcontent) {

	var data = emailcontent.emailcontent;
	
	$.each(data, function( index, value ) {
     
		/*var html = $($.parseHTML(value));*/

		var html = $($.parseHTML(data[index]));
        var subject=html.find('h2.hP').text();   
        var date = html.find('.cf .acZ td:nth-child(2)').text();
        var content= html.find('div.a3s.aXjCH').text();
        var file   = html.find('div.aSH').text(); 
        var link   =  html.find('.aQy.e').attr('href');


    /* var date = html.find('.gH.gK.g3').text();*/
/*console.log(link);
$("#renderhere").append(html); */ 
   
 

       $("#renderhere").append("<tr><td>"+subject+" </td> <td>"+date+" </td><td>"+content+"</td> <td> <a href='"+link+"' target ='_blank' class = 'button'>"+file+"</a> </td></tr>");
        
       $(".sourceData").append("<h4>Subject:<h4><p>"+subject+" </p> <h4> DateTime:</h4><p>"+date+"</p> <h4>Content:</h4><p>"+content+"</p><h4>Attachment:</h4><p><a href='"+link+"' target ='_blank' class = 'button'>"+file+"</a></p></br</br></br></br></br</br>");  
});
});







$(document).ready(function(){
   $("#btn-export").click(function(){
  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'document.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
});
})

