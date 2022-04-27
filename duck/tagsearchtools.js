var pagenumber = 0;
function displayTagSearch(taglist) {
    if (!taglist){
        taglist=[];
    }
    // sort the tags
    taglist.sort(function(a, b){
        if(a.toLowerCase() < b.toLowerCase()) return -1;
        if(a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    })

    var dstags = $('#duxsouptagsearch');
    var dsxtags = $('#duxsouptagsearchexclude');
    dstags.tagit({
        tabIndex:1,
        autocomplete: {delay: 0, minLength: 1},
        placeholderText: "Type tags to include...",
        availableTags:taglist,
        afterTagAdded: function(evt, ui) {
            if (!ui.duringInitialization) {
                var value = dstags.tagit('tagLabel', ui.tag);
                log.info('adding tag:' + value);
                pagenumber = 0;
                loadTaggedProfiles();
            }
        },
        afterTagRemoved: function(evt, ui) {
            var value = dstags.tagit('tagLabel', ui.tag);
            log.info('removing tag:' + value);
            pagenumber = 0;
            loadTaggedProfiles();
        },
    });    
    dsxtags.tagit({
        tabIndex:2,
        autocomplete: {delay: 0, minLength: 1},
        placeholderText: "Type tags to exclude...",
        availableTags:taglist,
        afterTagAdded: function(evt, ui) {
            if (!ui.duringInitialization) {
                var value = dsxtags.tagit('tagLabel', ui.tag);
                log.info('adding tag:' + value);
                pagenumber = 0;
                loadTaggedProfiles();
            }
        },
        afterTagRemoved: function(evt, ui) {
            var value = dsxtags.tagit('tagLabel', ui.tag);
            log.info('removing tag:' + value);
            pagenumber = 0;
            loadTaggedProfiles();
        },
    });
    $('input[type=radio][name=searchtype]').on('change', loadTaggedProfiles);
    //dstags.css({"z-index":20000 ,position:"relative" });
    message("");

    $("#duxsouptagsearch").css("background-color", "#dadada");
    $("#duxsouptagsearch input").css("font-size", "18px");
    $("#duxsouptagsearchexclude").css("background-color", "#dadada");
    $("#duxsouptagsearchexclude input").css("font-size", "18px");

    $("#dsprev").click(function(){displayPage(pagenumber-1);});
    $("#dsnext").click(function(){displayPage(pagenumber+1);});

     $("#dstags").html(taglist.length==0?"No tags found, you have not tagged any profiles.":"Your tags:"+taglist.join(", "));
    pagenumber = 0;

}
function loadTaggedProfiles() {
    var tags = $('#duxsouptagsearch').tagit("assignedTags");
    var xtags = $('#duxsouptagsearchexclude').tagit("assignedTags");
    var searchtype = $("input[name=searchtype]:checked").val();

    if (tags.length>0){
        sendMessage({ command: 'listTaggedProfiles', searchtype: searchtype, tags: tags, xtags: xtags, pagenumber: pagenumber }, function(response) {
            log.info("received: " + JSON.stringify(response));
            displayTaggedProfiles(response);
            // show / hide previous and next buttons. Free mode never needs these
            $("#dsnext").removeClass( "visible invisible" ).addClass( response.nextpage && config.fulltagsIsActive()?'visible':'invisible' );
            $("#dsprev").removeClass( "visible invisible" ).addClass( response.previouspage && config.fulltagsIsActive() ?'visible':'invisible' );
        });
        window.history.pushState({},"", location.href.split('?')[0]+"?tags="+tags.join(',')+"&xtags="+xtags.join(',')+"@"+pagenumber);
    }else{
        $("#dsprev").removeClass( "visible invisible" ).addClass( 'invisible' );
        $("#dsnext").removeClass( "visible invisible" ).addClass( 'invisible' );
        clearProfiles();
        window.history.pushState({},"", location.href.split('?')[0]);
    }
}
function displayPage(newpage){
    pagenumber = newpage;
    clearProfiles();
    loadTaggedProfiles();    
}
function clearProfiles(p){
    $('#dsresults').empty();
    message("");
}
function displayTaggedProfiles(result){
    var c = $('#dsresults');
    c.empty();
    if (result.data.length==0){
        message("No profiles found.");
    }else{
        if (config.fulltagsIsActive()||result.totalcount<= config.getMaxTagResults()){
            message("Listing profiles "+result.startindex+" to "+result.endindex+" of "+result.totalcount);
            for (var i=0;i<result.data.length;i++ ){
                c.append(populateTemplate(result.data[i]));
            }
        }else{
            // free mode, only display first 5 profiles and add message.
            var msg = "Displaying first 5 of "+result.totalcount+" tagged profiles. Please <a target='_blank' href='https://chrome.google.com/webstore/detail/"+chrome.runtime.id+"/'>upgrade to the Professional Edition</a> for the full list.";
            message(msg);
            for (var i=0;i<result.data.length;i++ ){
                c.append(populateTemplate(result.data[i]));
            }
        }
        // open profile URLs when clicking on links
        $(".dsresult").click(function(){
            this.querySelector('#mylink').click();
        });
        setTimeout(function(){
            clearImgErrors();
        },100);

    }
}
function clearImgErrors() {
    // set the images in case of error
    var incomplete = false;
    var imgs = document.querySelectorAll(".entity-img");
    for (var j=0; j<imgs.length; j++){
        if ( imgs[j].complete){
            if (imgs[j].naturalWidth === 0 ){
                imgs[j].src = "/personplaceholder.png";
            }
        }else{
            incomplete = true;
        }
    }
    if (incomplete){
        setTimeout(clearImgErrors, 100);
    }
}

function populateTemplate(values){
    var rv = recordtemplate;

    try{
        rv = rv.replace(/__Picture__/g,(values["Picture"]!=null?values["Picture"]:""));
        rv = rv.replace(/__Profile__/g,(values["Profile"]!=null?values["Profile"]:""));
        rv = rv.replace(/__First Name__/g,(values["First Name"]!=null?values["First Name"]:""));
        rv = rv.replace(/__Last Name__/g,(values["Last Name"]!=null?values["Last Name"]:""));
        rv = rv.replace(/__Title__/g,(values["Title"]!=null?values["Title"]:""));
        rv = rv.replace(/__Location__/g,(values["Location"]!=null?values["Location"]:""));
        rv = rv.replace(/__Industry__/g,(values["Industry"]!=null?values["Industry"]:""));
        rv = rv.replace(/__Company__/g,(values["Company"]!=null?values["Company"]:""));
        rv = rv.replace(/__id__/g,(values["id"]!=null?values["id"]:""));
    }catch(e){
        // replace failed.
    }
    
    return rv;
}

function message(text){
    $("#dsmessage").html(text);
}

var recordtemplate=`
    <li class="dsresult" style="position:relative">
    <input type="hidden" class="First" value="__First Name__">
    <input type="hidden" class="Last" value="__Last Name__">
    <input type="hidden" class="id" value="__id__">
    <input type="hidden" class="Profile" value="__Profile__">
    <a class="result-image" href="#"><img class="entity-img" width="60" height="60" src="__Picture__"></a>
    <a id="mylink" style="display:none" target="_blank" href="__Profile__"</a>
        <div class="bd">
            <h3 class=""><a class="title main-headline" title="__Profile__" href="#">__First Name__ __Last Name__</a></h3>
            <div class="description">__Title__</div>
            <dl class="demographic">
                <dt>Location:</dt>
                <dd>
                    <bdi dir="ltr" class="">__Location__</bdi>
                </dd>
                <dt>Industry</dt>
                <dd class="">__Industry__</dd>
                <dt>Company</dt>
                <dd class="">__Company__</dd>
            </dl>
        </div>
    </li>
`;

function staticextension_init (){
    if ( !!location.search ){
        window.history.pushState({},"", location.href.split("?")[0]);
    }else{
        sendMessage({command: "taglist" }, function(taglist){
            displayTagSearch(taglist);
            agent.init("loadevent");    
        });
    }
}
