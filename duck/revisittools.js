function onload (e) {
    var error;
    var csvoptions = {separator:config.getCSVSeparator()};
    var lines = e.target.result.split(/[\n\r]+/);
    if ( lines[0].startsWith("sep=")){
        // if specified in the file, use that instead of configured value.
        csvoptions = {separator:lines[0].split('sep=')[1]};
        lines.shift();
    }
    var guessedsep = guessSeparator(lines);

    if ( guessedsep != null  && guessedsep != config.getCSVSeparator() ){
        log.warning("File format does not correspond to CSV config, using guessed value '"+guessedsep+"' instead of configured value '"+config.getCSVSeparator()+"'.");
        csvoptions = {separator:guessedsep};
    }

    var line0 = $.csv.toArray(lines[0], csvoptions);
    // TODO : strip " and ' in case the values are wrapped in quotes
    var public_idx = getPublicIDIndex(line0);
    var container = document.createElement("TABLE");
    var datacount = 0;
    container.className += " dstable";
    container.setAttribute("align", "center");
    container.setAttribute("width", "50%");

    for (var i=0;i<lines.length;i++){
        var row = document.createElement("TR");
        try{
            var columns = $.csv.toArray(lines[i], csvoptions);
            if (columnsHaveData(columns)){
                var numbercell = document.createElement("TD");
                numbercell.className += line0[j]+" dstd";
                numbercell.innerHTML = datacount++;
                row.className += (i==0?" dsheader":" dsrecord");
                row.appendChild(numbercell);
                container.appendChild(row);
                for (var j=0;j<columns.length && j<line0.length;j++){
                    if (["id","profile","first name","last name"].indexOf(line0[j].toLowerCase())>-1){
                        var cell = document.createElement("TD");
                        cell.className += line0[j]+" dstd";
                        row.appendChild(cell);
                        var d = columns[j];
                        d=d!=null?d.trim():d;
                        if (line0[j]=="Profile" && isLegacyLink(d)){
                            var public_id = public_idx>-1?profileURLFromPublicID(columns[public_idx]):d;
                            if ( public_id == d){
                                // don't error on these, they could be valid salesnav links too
                                // besides, thre robot will just continue after failing.
                                // error = chrome.i18n.getMessage("revisitLegacyError");
                            }else{
                                d = public_id;
                            }
                        }
                        if (line0[j]=="id"){
                            cell.className += " hidden";
                        }
                        if (d!=null&& d.startsWith != null && (d.startsWith("http://") || d.startsWith("https://"))) {
                            var dlabel = d;
                            if ( dlabel.length>80){
                                dlabel = dlabel.substring(0,78)+"...";
                            }
                            cell.innerHTML= "<a title="+d+" href="+d+">"+dlabel+"</a>";
                        }else{
                            if (i==0){
                                switch(d.toLowerCase()){
                                    case "profile"   : cell.innerHTML = chrome.i18n.getMessage("revisitProfileHeader");break;
                                    case "first name": cell.innerHTML = chrome.i18n.getMessage("revisitFirstNameHeader");break;
                                    case "last name" : cell.innerHTML = chrome.i18n.getMessage("revisitLastNameHeader");break;
                                    default     : cell.innerHTML=d;
                                }
                            }else{
                                cell.innerHTML=d;
                            }
                        }
                    }
                }
            }
        
        }catch(e){
            console.log("Format problem in CSV, line "+i, e);
        }
    }

    if (error){
        alert(error);
    }else{
        document.querySelector(".container").appendChild(container);
        document.getElementById("drop-zone").style="display:none";
        setTimeout(function(){agent.init("loadevent");},0);
    }
}
function isLegacyLink(profile_url){
    var rv = false;
    try{
        if (profile_url != null){
            var m = profile_url.match(/http[s]*:\/\/www.linkedin.com\/.*?\?id=\d*/);
            rv = (m!=null && m[0] == profile_url);
        }
    }catch(e){
        //ignore
    }
    return rv;
}
function getPublicIDIndex(header){
    for (var i=0;i<header.length;i++){
        if (header[i]=="publicprofile_id"){
            return i;
        }
    }
    return -1;
}
function profileURLFromPublicID(public_id){
    var proto = document.location.protocol=="https:"?"https://":"http://";
    return proto+public_id;
}

function readSingleFile(f) {
    window.history.pushState({},"", location.href+"?"+f.name);
    if (f) {
        try{
            var r = new FileReader();
            r.onload = onload;
            r.readAsText(f);
        }catch(e){
            alert(chrome.i18n.getMessage("revisitParseError"));
        }
    }
}

function listenForFile(){
    document.getElementById("fileinput").addEventListener("change", 
        function(evt){
            readSingleFile(evt.target.files[0]);
        },    
        false);
}

function guessSeparator(lines){
    var guessed;
    var currentcount = 0;
    var seps = [",",";","\t"];

    for ( var i = 0; i < seps.length && lines.length>1 ; i++){
        try{
            var count1 = $.csv.toArray(lines[0], {separator:seps[i]}).length; 
            var count2 = $.csv.toArray(lines[1], {separator:seps[i]}).length;
        
            if ( count1 >1 && count1 == count2 && count1 > currentcount){
                guessed = seps[i];
                currentcount = count1;
            }
        }catch(e){
            log.error(e);
        }
    }
    return guessed;

}

function columnsHaveData(columns){
    var gotcolumns = columns!=null && columns.length>0;
    var founddata = false;
    if (gotcolumns){
        // check if any of the columns have data 
        for ( var i=0;i<columns.length;i++){
            if ( columns[i].trim() != ""){
                founddata = true;
                break;
            }
        }
    }
    return founddata;
}
function staticextension_init (){
    if ( !!location.search ){
        window.history.pushState({},"", location.href.split("?")[0]);
    }else{
        agent.init("loadevent");
    }
    listenForFile();
}