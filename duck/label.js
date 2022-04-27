/*
 * Add this script to any HTML file of the extensions that requires relabelling and / or i18n 
 */

function localizeStrings(){
    // get messages and populate template
    var els = document.querySelectorAll('*[i18n]');
    els.forEach(element => {
        console.log(element);
        var att = element.getAttribute("i18n");
        var atts = att.split(",");
        for (var i=0; i<atts.length; i++){
            console.log(atts[[i]]);            
            if ( atts[i].indexOf("@")==0){
                // set attribute value
                var attribute = atts[i].substring(1);
                //  support multi-pass translation
                while (element.style.display!="none" && element.getAttribute(attribute).match(/__(.*?)__/)){
                    var key = element.getAttribute(attribute).match(/__(.*?)__/)[1];            
                    var value = chrome.i18n.getMessage(key);          
                    console.log(".."+key+" = "+value);
                    if (!!value){                        
                        element.setAttribute(atts[i].substring(1), value);
                    }else{
                        element.style="display:none";
                    }
                }
            }else{
                // set node value
                if  (element[atts[i]].match(/__(.*?)__/) ==  null || element[atts[i]].match(/__(.*?)__/).length == 1 ){
                    alert(JSON.stringify(element));
                }
                // support multiple placeholders per innerText, and support multi-pass translation
                while (element.style.display!="none" && element[atts[i]].match(/__(.*?)__/)){
                    var keys = element[atts[i]].match(/__(.*?)__/g);    
                    for (var ki=0;ki<keys.length;ki++){
                        var key = keys[ki].match(/__(.*?)__/)[1];        
                        var value = chrome.i18n.getMessage(key);    
                        console.log("::"+key+" = "+value);
                        if (!!value){        
                            var regex = new RegExp("__"+key+"__", "g");
                            element[atts[i]] = element[atts[i]].replace(regex, value);
                        }else{
                            element.style="display:none";
                        }
                    }
                }
            }
        }
        // remove i18n attribute to avoid subsequent calls doing unnecessary work.
        element.removeAttribute("i18n");
    });
};
localizeStrings();