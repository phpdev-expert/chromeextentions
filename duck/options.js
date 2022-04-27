
var initializing = true;

function sendMessage(cmd, callback){
    var cb = callback;
    if (cb == null){
        cb = console.log;
    }
    chrome.runtime.sendMessage(cmd, cb);
}
function show_hide(switchid, targetid){
    var toggle = $("#"+switchid);
    var target = $("#"+targetid);
    if (toggle.prop('checked') ){
        target.fadeIn();
    }else{
        target.fadeOut();

    }
}
function save_options() {
    if (!initializing){
        var options = {};
        captureElementPropertyValue('throttletime', 'value', options);
        captureElementPropertyValue('scanthrottletime', 'value', options);
        captureElementPropertyValue('maxvisits', 'value', options);
        captureElementPropertyValue('maxinvites', 'value', options);
        captureElementPropertyValue('maxmessages', 'value', options);
        captureElementPropertyValue('dailylimitoffset', 'value', options, parseInt);
        captureElementPropertyValue('warningnotifications', 'checked', options);
        captureElementPropertyValue('actionnotifications', 'checked', options);
        captureElementPropertyValue('infonotifications', 'checked', options);
        captureElementPropertyValue('expand', 'checked', options);
        captureElementPropertyValue('skiptaggedflag', 'checked', options);
        captureElementPropertyValue('skiptaggedvalue', 'value', options);
        captureElementPropertyValue('skipcustomflag', 'checked', options);
        captureElementPropertyValue('skipcustomvalue', 'value', options);
        captureElementPropertyValue('skipnoimage', 'checked', options);
        captureElementPropertyValue('skipincrm', 'checked', options);
        captureElementPropertyValue('skip3plus', 'checked', options);
        captureElementPropertyValue('skipnopremium', 'checked', options);
        captureElementPropertyValue('skipnolion', 'checked', options);
        captureElementPropertyValue('skipnoinfluencer', 'checked', options);
        captureElementPropertyValue('skipnojobseeker', 'checked', options);
        captureElementPropertyValue('excludeblacklistedaction', 'checked', options);
        captureElementPropertyValue('snooze', 'checked', options);
        captureElementPropertyValue('randomrange', 'checked', options);
        captureElementPropertyValue('killcharacters', 'value', options);
        captureElementPropertyValue('killwords', 'value', options);
        captureElementPropertyValue('robotscheduleenabled', 'checked', options);
        captureElementPropertyValue('robotscheduleplan', 'value', options, JSON.parse);
        captureElementPropertyValue('pauserobot', 'checked', options);
        captureElementPropertyValue('reloadonhang', 'checked', options);
        captureElementPropertyValue('accepttandcs', 'checked', options);
        captureElementPropertyValue('buymail', 'checked', options);
        captureElementPropertyValue('autoendorse', 'checked', options);
        captureElementPropertyValue('autoendorsetarget', 'value', options);
        captureElementPropertyValue('csvhint', 'checked', options);
        captureElementPropertyValue('csvseparator', 'value', options);
        captureElementPropertyValue('csvencoding', 'value', options);
        captureElementPropertyValue('badgedisplay', 'value', options);
        captureElementPropertyValue('autotagflag', 'checked', options);
        captureElementPropertyValue('autotagvalue', 'value', options);
        captureElementPropertyValue('autofollow', 'checked', options);
        captureElementPropertyValue('autodisconnect', 'checked', options);
        captureElementPropertyValue('autopdf', 'checked', options);
        captureElementPropertyValue('runautomationsonmanualvisits', 'checked', options);
        captureElementPropertyValue('autosaveaslead', 'checked', options);
        captureElementPropertyValue('autoconnect', 'checked', options);
        captureElementPropertyValue('autoconnectmessageflag', 'checked', options);
        captureElementPropertyValue('autoconnectmessagetext', 'value', options);
        captureElementPropertyValue('connectedmessageflag', 'checked', options);
        captureElementPropertyValue('connectedmessagetext', 'value', options);
        captureElementPropertyValue('sendinmailflag', 'checked', options);
        captureElementPropertyValue('sendinmailsubject', 'value', options);
        captureElementPropertyValue('sendinmailbody', 'value', options);
        captureElementPropertyValue('skipdays', 'value', options);
        captureElementPropertyValue('followupflag', 'checked', options);
        captureElementPropertyValue('webhookprofileflag', 'checked', options);
        // captureElementPropertyValue('webhookprofilevalue', 'value', options);
        // captureElementPropertyValue('webhookvisiteventsflag', 'checked', options);
        // captureElementPropertyValue('webhookscaneventsflag', 'checked', options);
        // captureElementPropertyValue('webhookactioneventsflag', 'checked', options);
        // captureElementPropertyValue('webhookmessageeventsflag', 'checked', options);
        // captureElementPropertyValue('webhookrceventsflag', 'checked', options);
        captureElementPropertyValue('messagebridgeflag', 'checked', options);
        captureElementPropertyValue('remotecontrolflag', 'checked', options);
        captureElementPropertyValue('pageinitdelay', 'value', options);
        captureElementPropertyValue('waitminutes', 'value', options, parseInt);
        captureElementPropertyValue('waitvisits', 'value', options, parseInt);
        captureElementPropertyValue('maxpageloadtime', 'value', options);
        captureElementPropertyValue('manageddownload', 'checked', options);
        captureElementPropertyValue('debugmode', 'checked', options);
        captureElementPropertyValue('debuglog', 'checked', options);
        captureElementPropertyValue('killtracking', 'checked', options);
        captureElementPropertyValue('ignoreunknown', 'checked', options);
        captureElementPropertyValue('killextensions', 'checked', options);
        captureElementPropertyValue('killads', 'checked', options);
        captureElementPropertyValue('startdisabled', 'checked', options);
        captureElementPropertyValue('logstack', 'checked', options);
        captureElementPropertyValue('logstackfilter', 'value', options);
        captureElementPropertyValue('userauthenticationtype', 'value', options);


        // due to the nested property this isn't handled generically
        if (!!document.getElementById('xlicensekey')){
            options.affiliatelicense = {
                key       : document.getElementById('xlicensekey').value.trim()
            };
        }

        // same here, 
        options.webhooks = serializeWebhookConfig();
        options.followups = serializeFollowUpConfig();

        // all done, send it
        sendMessage({command:"setoptions", options:options});
        successmessage('Options saved.');
    }
}

function restore_options() {
    sendMessage({command:"getOptionscreenValues"}, function(res){
        if (res != null){
            setElementPropertyValue('userid', "value", res.userid);
            setElementPropertyValue('useremail', "value", res.useremail);
            setElementPropertyValue('clientid', "value", res.clientid);
            setElementPropertyValue('throttletime', "value", res.throttletime);
            setElementPropertyValue('scanthrottletime', "value", res.scanthrottletime);
            setElementPropertyValue('maxvisits', "value", res.maxvisits);
            setElementPropertyValue('maxinvites', "value", res.maxinvites);
            setElementPropertyValue('maxmessages', "value", res.maxmessages);
            setElementPropertyValue('dailylimitoffset', "value", res.dailylimitoffset);
            setElementPropertyValue('xlicensekey', "value", res.affiliatelicense.key);
            setElementPropertyValue('xlicenseexpiry', "innerText", res.affiliatelicense.expiry);
            setElementPropertyValue('warningnotifications', "checked", res.warningnotifications==true);
            setElementPropertyValue('actionnotifications', "checked", res.actionnotifications==true);
            setElementPropertyValue('infonotifications', "checked", res.infonotifications==true);
            setElementPropertyValue('killcharacters', "value", res.killcharacters);
            setElementPropertyValue('killwords', "value", res.killwords);
            setElementPropertyValue('expand', "checked", res.expand==true);
            setElementPropertyValue('skiptaggedflag', "checked", res.skiptaggedflag==true);
            setElementPropertyValue('skiptaggedvalue', "value", res.skiptaggedvalue);
            setElementPropertyValue('skipcustomflag', "checked", res.skipcustomflag==true);
            setElementPropertyValue('skipcustomvalue', "value", res.skipcustomvalue);
            setElementPropertyValue('skipnoimage', "checked", res.skipnoimage==true);
            setElementPropertyValue('skipincrm', "checked", res.skipincrm==true);
            setElementPropertyValue('skip3plus', "checked", res.skip3plus==true);
            setElementPropertyValue('skipnopremium', "checked", res.skipnopremium==true);
            setElementPropertyValue('skipnolion', "checked", res.skipnolion==true);
            setElementPropertyValue('skipnoinfluencer', "checked", res.skipnoinfluencer==true);
            setElementPropertyValue('skipnojobseeker', "checked", res.skipnojobseeker==true);
            setElementPropertyValue('excludeblacklistedaction', "checked", res.excludeblacklistedaction==true);
            setElementPropertyValue('snooze', "checked", res.snooze==true);
            setElementPropertyValue('randomrange', "checked", res.randomrange==true);
            setElementPropertyValue('robotscheduleenabled', "checked", res.robotscheduleenabled==true);
            setElementPropertyValue('robotscheduleplan', "value", JSON.stringify(res.robotscheduleplan));
            setElementPropertyValue('pauserobot', "checked", res.pauserobot==true);
            setElementPropertyValue('reloadonhang', "checked", res.reloadonhang==true);
            setElementPropertyValue('accepttandcs', "checked", res.accepttandcs==true);
            setElementPropertyValue('buymail', "checked", res.buymail==true);
            setElementPropertyValue('autoendorse', "checked", res.autoendorse==true);
            setElementPropertyValue('autoendorsetarget', "value", res.autoendorsetarget);
            setElementPropertyValue('csvhint', "checked", res.csvhint==true);
            setElementPropertyValue('csvseparator', "value", res.csvseparator);
            setElementPropertyValue('csvencoding', "value", res.csvencoding);
            setElementPropertyValue('badgedisplay', "value", res.badgedisplay);
            setElementPropertyValue('autotagflag', "checked", res.autotagflag==true);
            setElementPropertyValue('autotagvalue', "value", res.autotagvalue);
            setElementPropertyValue('autofollow', "checked", res.autofollow==true);
            setElementPropertyValue('autodisconnect', "checked", res.autodisconnect==true);
            setElementPropertyValue('autopdf', "checked", res.autopdf==true);
            setElementPropertyValue('runautomationsonmanualvisits', "checked", res.runautomationsonmanualvisits==true);
            setElementPropertyValue('autosaveaslead', "checked", res.autosaveaslead==true);
            setElementPropertyValue('autoconnect', "checked", res.autoconnect==true);
            setElementPropertyValue('autoconnectmessageflag', "checked", res.autoconnectmessageflag==true);
            setElementPropertyValue('autoconnectmessagetext', "value", res.autoconnectmessagetext);
            updateConnectMessageChars();
            setElementPropertyValue('connectedmessageflag', "checked", res.connectedmessageflag==true);
            setElementPropertyValue('connectedmessagetext', "value", res.connectedmessagetext);
            updateDirectMessageChars();
            setElementPropertyValue('sendinmailflag', "checked", res.sendinmailflag==true);
            setElementPropertyValue('sendinmailsubject', "value", res.sendinmailsubject);
            setElementPropertyValue('sendinmailbody', "value", res.sendinmailbody);
            updateInmailMessageChars();
            setElementPropertyValue('skipdays', "value", res.skipdays);
            setElementPropertyValue('followupflag', 'checked', res.followupflag==true);
            setElementPropertyValue('webhookprofileflag', 'checked', res.webhookprofileflag==true);
            // setElementPropertyValue('webhookprofilevalue', 'value', res.webhookprofilevalue);
            // setElementPropertyValue('webhookvisiteventsflag', 'checked', res.webhookvisiteventsflag==true);
            // setElementPropertyValue('webhookscaneventsflag', 'checked', res.webhookscaneventsflag==true);
            // setElementPropertyValue('webhookactioneventsflag', 'checked', res.webhookactioneventsflag==true);
            // setElementPropertyValue('webhookmessageeventsflag', 'checked', res.webhookmessageeventsflag==true);
            // setElementPropertyValue('webhookrceventsflag', 'checked', res.webhookrceventsflag==true);
            setElementPropertyValue('messagebridgeflag', 'checked', res.messagebridgeflag==true);
            setElementPropertyValue('remotecontrolflag', 'checked', res.remotecontrolflag==true);
            setElementPropertyValue('pageinitdelay', "value", res.pageinitdelay);
            setElementPropertyValue('waitminutes', "value", res.waitminutes);
            setElementPropertyValue('waitvisits', "value", res.waitvisits);
            setElementPropertyValue('maxpageloadtime', "value", res.maxpageloadtime);
            setElementPropertyValue('manageddownload', "checked", res.manageddownload==true);
            setElementPropertyValue('debugmode', "checked", res.debugmode==true);
            setElementPropertyValue('debuglog', "checked", res.debuglog==true);
            setElementPropertyValue('killtracking', "checked", res.killtracking==true);
            setElementPropertyValue('ignoreunknown', "checked", res.ignoreunknown==true);
            setElementPropertyValue('killextensions', "checked", res.killextensions==true);
            setElementPropertyValue('killads', "checked", res.killads==true);
            setElementPropertyValue('startdisabled', "checked", res.startdisabled==true);
            setElementPropertyValue('logstack', "checked", res.logstack==true);
            setElementPropertyValue('logstackfilter', "value", res.logstackfilter);
            setElementPropertyValue('userauthenticationtype', 'value', res.userauthenticationtype);


            setElementPropertyValue('rcurl', "value", res.apikey?res.baseapplist[res.activebaseappindex]+"/xapi/remote/control/"+res.userid:"");
            setElementPropertyValue('rckey', "value", res.apikey||"");


            // due to the nested property this isn't handled generically
            if (!!document.getElementById('xlicensemessage') && res.affiliatelicense.key!= ""){
                document.getElementById('xlicensemessage').style.color = (res.affiliatelicense.status=="valid"?"green":"red");
                document.getElementById('xlicensemessage').innerText = res.affiliatelicense.message;
            }

            deserializeWebhookConfig(res.webhooks);

            deserializeFollowUpConfig(res.followups);

            // calculated property. readonly.
            var offseth = res.dailylimitoffset/60;
            var tz = "UTC "+( offseth>=0 ? "+"+offseth: ""+offseth )+"h";
            setElementPropertyValue('timezone', "innerText", tz);

            // schedule 
            if (!!document.getElementById('weekly-schedule')){
                $("#weekly-schedule").data('artsy.dayScheduleSelector').deserialize(res.robotscheduleplan);
            }

        }
        initializing = false;
    });
}
function toggle_dailymax(){
    var dd = [
        document.getElementById("maxvisits"),
        document.getElementById("maxinvites"),
        document.getElementById("maxmessages")
    ];
    for ( var i in dd){
        if ( dd[i].disabled) {
            // enable
            dd[i].disabled = false;
            dd[i].style.color = "#000000";
        }else{
            // disable
            dd[i].disabled = true;
            dd[i].style.color = "#999999";
        }
    }
}
function successmessage(text){
    toastr["success"](text, chrome.i18n.getMessage("appTitle"));
}
function reload(){

    sendMessage({command:"reloadExtension"}, function(){
        // alert('Reloading...'); 
     });

}
function logout(){

    sendMessage({command:"logout"}, function(){
        // alert('Reloading...'); 
     });

}
function resetConfig(){
 
    sendMessage({command:"resetoptions"}, function(){
       alert('Options have been reset to factory defaults, reloading options page.'); 
       location.reload();        
    });

}

function captureElementPropertyValue(elementid, propertyname, map, preprocessor){
    if (_usesJQ(elementid)){
        return captureElementPropertyValueJQ(elementid, propertyname, map, preprocessor);
    }else{
        var element = document.getElementById(elementid);
        if (!!element){
            map[elementid] = element[propertyname];
            if (preprocessor){
                map[elementid] = preprocessor(map[elementid]);
            }
        }
    }
}

function captureElementPropertyValueJQ(elementid, propertyname, map, preprocessor){
    var element = $("#"+elementid);
    if (element.length == 1){
        map[elementid] = element.prop(propertyname);
        if (preprocessor){
            map[elementid] = preprocessor(map[elementid]);
        }
    }
}
function setElementPropertyValue(elementid, propertyname, value){
    if (_usesJQ(elementid)){
        return setElementPropertyValueJQ(elementid, propertyname, value);
    }else{
        if ( value != null && value.toLocaleDateString != null){
            value = value.toLocaleString();
        }
        var element = document.getElementById(elementid);
        if (!!element){
            element[propertyname] = value;
        }
    }
}

function setElementPropertyValueJQ(elementid, propertyname, value){
    if ( value != null && value.toLocaleDateString != null){
        value = value.toLocaleString();
    }
    var element = $("#"+elementid);
    if (element.length == 1){
        element.prop(propertyname, value).change();
    }
}

function addChangeListener(elementid, eventtype, listener){
    if (_usesJQ(elementid)){
        return addChangeListenerJQ(elementid, eventtype, listener);
    }else{
        var element = document.getElementById(elementid);
        if (!!element){
            element.addEventListener(eventtype, listener);
        }
    }
}

function addChangeListenerJQ(elementid, eventtype, listener){
    $('#'+elementid).on(eventtype, listener);
}

function _usesJQ(elementid){
    return !!$('#'+elementid).attr('jq-toggle');
}
document.addEventListener('DOMContentLoaded', restore_options);

addChangeListener('throttletime', 'change', save_options);
addChangeListener('scanthrottletime', 'change', save_options);
addChangeListener('maxvisits', 'change', save_options);
addChangeListener('maxinvites', 'change', save_options);
addChangeListener('maxmessages', 'change', save_options);
addChangeListener('dailylimitoffset', 'change', save_options);
addChangeListener('warning', 'change', toggle_dailymax);
addChangeListener('xlicensekey', 'change', save_options);
addChangeListener('actionnotifications', 'change', save_options);
addChangeListener('infonotifications', 'change', save_options);
addChangeListener('warningnotifications', 'change', save_options);
addChangeListener('expand', 'change', save_options);
addChangeListener('skiptaggedflag', 'change', save_options);
addChangeListener('skiptaggedvalue', 'change', save_options);
addChangeListener('skipcustomflag', 'change', save_options);
addChangeListener('skipcustomvalue', 'change', save_options);
addChangeListener('skipnoimage', 'change', save_options);
addChangeListener('skipincrm', 'change', save_options);
addChangeListener('skip3plus', 'change', save_options);
addChangeListener('skipnopremium', 'change', save_options);
addChangeListener('skipnolion', 'change', save_options);
addChangeListener('skipnoinfluencer', 'change', save_options);
addChangeListener('skipnojobseeker', 'change', save_options);
addChangeListener('excludeblacklistedaction', 'change', save_options);
addChangeListener('killcharacters', 'change', save_options);
addChangeListener('killwords', 'change', save_options);
addChangeListener('snooze', 'change', save_options);
addChangeListener('randomrange', 'change', save_options);
addChangeListener('robotscheduleenabled', 'change', save_options);
addChangeListener('robotscheduleplan', 'change', save_options);
addChangeListener('pauserobot', 'change', save_options);
addChangeListener('reloadonhang', 'change', save_options);
addChangeListener('accepttandcs', 'change', save_options);
addChangeListener('buymail', 'change', save_options);
addChangeListener('autoendorse', 'change', save_options);
addChangeListener('autoendorsetarget', 'change', save_options);
addChangeListener('csvhint', 'change', save_options);
addChangeListener('csvseparator', 'change', save_options);
addChangeListener('csvencoding', 'change', save_options);
addChangeListener('badgedisplay', 'change', save_options);
addChangeListener('autotagflag', 'change', save_options);
addChangeListener('autotagvalue', 'change', save_options);
addChangeListener('autofollow', 'change', save_options);
addChangeListener('followupflag', 'change', function(){
    var o={};
    captureElementPropertyValue('followupflag', 'checked', o);
    // autofollow feature requires the message bridge and remote control to be ON
    if ( o.followupflag == true ){
        setElementPropertyValue('messagebridgeflag', 'checked', true);
        setElementPropertyValue('remotecontrolflag', 'checked', true);
    }else{
        //  in this case the user has just switched the autofollow to off so we disable these required features.
        setElementPropertyValue('messagebridgeflag', 'checked', false);
        setElementPropertyValue('remotecontrolflag', 'checked', false);
    }
    save_options();
});
addChangeListener('autodisconnect', 'change', save_options);
addChangeListener('autopdf', 'change', save_options);
addChangeListener('runautomationsonmanualvisits', 'change', save_options);
addChangeListener('autosaveaslead', 'change', save_options);
addChangeListener('autoconnect', 'change', save_options);
addChangeListener('autoconnect', 'change', function(){show_hide('autoconnect','autoconnectfields')});

addChangeListener('autoconnectmessageflag', 'change', save_options);
addChangeListener('autoconnectmessagetext', 'change', save_options);
addChangeListener('autoconnectmessagetext', 'keyup', updateConnectMessageChars);

addChangeListener('connectedmessageflag', 'change', save_options);
addChangeListener('connectedmessageflag', 'change', function(){show_hide('connectedmessageflag','connectedmessagefields');});

addChangeListener('connectedmessagetext', 'change', save_options);
addChangeListener('connectedmessagetext', 'keyup', updateDirectMessageChars);
addChangeListener('sendinmailflag', 'change', save_options);
addChangeListener('sendinmailflag', 'change', function(){show_hide('sendinmailflag','sendinmailfields');});

addChangeListener('sendinmailsubject', 'change', save_options);
addChangeListener('sendinmailsubject', 'keyup', updateInmailMessageChars);
addChangeListener('sendinmailbody', 'change', save_options);
addChangeListener('sendinmailbody', 'keyup', updateInmailMessageChars);

addChangeListener('followupflag', 'change', save_options);

addChangeListener('skipdays', 'change', save_options);

addChangeListener('webhookprofileflag', 'change', save_options);
// addChangeListener('webhookprofilevalue', 'change', save_options);
// addChangeListener('webhookvisiteventsflag', 'change', save_options);
// addChangeListener('webhookscaneventsflag', 'change', save_options);
// addChangeListener('webhookactioneventsflag', 'change', save_options);
// addChangeListener('webhookmessageeventsflag', 'change', save_options);
// addChangeListener('webhookrceventsflag', 'change', save_options);
addChangeListener('messagebridgeflag', 'change', save_options);
addChangeListener('remotecontrolflag', 'change', save_options);

addChangeListener('reload', 'click', reload); 
addChangeListener('logout', 'click', logout);
addChangeListener('resetConfig', 'click', resetConfig);
addChangeListener('saveSchedule', 'click', save_options);
addChangeListener('pageinitdelay', 'change', save_options);
addChangeListener('waitminutes', 'change', save_options);
addChangeListener('waitvisits', 'change', save_options);
addChangeListener('maxpageloadtime', 'change', save_options);
addChangeListener('manageddownload', 'change', save_options);
addChangeListener('debugmode', 'change', save_options);
addChangeListener('debuglog', 'change', save_options);
addChangeListener('killtracking', 'change', save_options);
addChangeListener('ignoreunknown', 'change', save_options);
addChangeListener('killads', 'change', save_options);
addChangeListener('startdisabled', 'change', save_options);
addChangeListener('logstack', 'change', save_options);
addChangeListener('logstackfilter', 'change', save_options);
addChangeListener('userauthenticationtype', 'change', save_options);

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "6500",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

if (!!$("*[jq-toggle=toggle]").bootstrapToggle){
    $("*[jq-toggle=toggle]").bootstrapToggle({
        on: chrome.i18n.getMessage("on"),
        off: chrome.i18n.getMessage("off"),
        width: '72px',
        height: '36px',
        style: 'jq-toggle'
    });
}

if (!!$('[data-toggle="tooltip"]').tooltip){
    $('[data-toggle="tooltip"]').tooltip(); 
}

addDropdownOptions("#maxinvites"); 
addDropdownOptions("#maxmessages"); 

sendMessage({command: "getConfigMap" }, function(config) {
    if (!config.features.throttling)    disableOption('throttling');
    if (!config.features.throttling)    disableOption('planner');
    if (!config.features.userlimits)    disableOption('dailylimits');
    if (!config.features.csvfiles)      disableOption('dataformat');
    if (!config.features.automation)    disableOption('automations');
    if (!config.features.webhooks)      disableOption('webhooks', true);
    if (!config.features.webhooks)      disableOption('messagebridge', true);
    if (!config.features.remotecontrol) disableOption('remotecontrol', true);
    // we will add a L1 orchestration later. 
    if (config.features.orchestration !=2 ) disableOption('orchestration', true);

    if (config.activeuserauthenticationtype != 'websession') {
        document.querySelector(`#logout`).setAttribute('disabled', 'disabled');
    }

    document.querySelector(`.logo img`).setAttribute('src', 'logo_'+config.edition+'.png');
});

function disableOption(id, isTurbo = false) {
    const $element = document.querySelector(`#${id}`);

    if ($element) {
        $element.classList.add('__disabled', isTurbo ? '__turbo' : '__pro');
        $element.addEventListener('click', () => {
            chrome.tabs.create({ 'url': 'https://www.dux-soup.com/pricing' });
        });
    }
}

function updateConnectMessageChars(){
    updateMessageChars("autoconnectmessagetext","connectmessagechars");
};
function updateDirectMessageChars(){
    updateMessageChars("connectedmessagetext","directmessagechars");
};
function updateInmailMessageChars(){
    updateMessageChars("sendinmailsubject","sendinmailsubjectchars");
    updateMessageChars("sendinmailbody","sendinmailbodychars");
};

function updateMessageChars(sourceid, displayid){
    var sourceelement = $("#"+sourceid);
    var displayelement = $("#"+displayid);

    if (sourceelement.length && displayelement.length){
        var currentvalue = sourceelement.val();
        var currenvaluewithoutscriptmarkers = currentvalue.replace(/_\(.*?\)_/g, "====");

        var cl = currenvaluewithoutscriptmarkers.length;
        var ml = sourceelement.attr("data-maxlength");
        // the maxlength of the input field needs to be offset with the expression length, as this isn't part of the text that is sent to LI
        sourceelement.prop("maxlength",parseInt(ml)+(currentvalue.length - cl));
        displayelement.html(cl+"/"+ml);

        if ( ml-cl < 15 ) {
            displayelement.css('color', '#ff4444');
        }else{
            displayelement.css('color', '#333');
        }    
    } 
}
function addDropdownOptions(elselect){
    var el = $(elselect);
    var step = parseInt(el.attr("step"));
    var max = parseInt(el.attr("max"));
    var txt = el.attr("cap");
    for ( var i=step; i<=max; i+=step){
        el.append('<option value="V">C</option>'.replace(/V/,i).replace(/C/,txt.replace(/NN/,i)));
    }
}
// webhook config utils
function addWebhookConfig(url, events){
    var template = 
    `<li id="webhookconfig__count__">
        <input type="url" style="width: 70%;" pattern="(http|https)://.*" i18n="@placeholder" class="input __small" type="text" id="webhookprofilevalue" placeholder="__webhookPlaceholder__" maxlength="256" size="40">&nbsp;
        <button class="btn __grey __square" id="removewh">&nbsp;-&nbsp;</button>
        <button class="btn __grey __square" id="addwh">&nbsp;+&nbsp;</button>
        <br>
        Events: <input type="checkbox" id="webhookvisiteventsflag" checked>
        <span ii18n="innerText">Visit</span> &nbsp;
        <input type="checkbox" id="webhookscaneventsflag" checked>
        <span ii18n="innerText">Scan</span> &nbsp;
        <input type="checkbox" id="webhookactioneventsflag" checked>
        <span ii18n="innerText">Action</span> &nbsp;
        <input type="checkbox" id="webhookmessageeventsflag" checked>
        <span ii18n="innerText">Message</span> &nbsp;
        <input type="checkbox" id="webhookrceventsflag" checked>
        <span ii18n="innerText">Remote Control</span>
    </li>`;
    var container = $("#webhookconfigs");
    var currentcount = container.children().length;

    //  create new input field entry 
    container.append(template.replace(/__count__/g, currentcount+1));
    var configs = $("#webhookconfigs").children();
    var idx = configs.length-1;
    var config = $(configs[idx]);

    // set webhook props if available
    if (!!url && !!events){
        config.find("#webhookprofilevalue").val(url);
        config.find("#webhookvisiteventsflag").prop("checked", events.indexOf("visit")>-1);
        config.find("#webhookscaneventsflag").prop("checked", events.indexOf("scan")>-1);
        config.find("#webhookactioneventsflag").prop("checked", events.indexOf("action")>-1);
        config.find("#webhookmessageeventsflag").prop("checked", events.indexOf("message")>-1);
        config.find("#webhookrceventsflag").prop("checked", events.indexOf("rc")>-1);
    }
    // add event handlers
    config.find("#addwh").on('click', addWebhookConfig);
    config.find("#removewh").on('click', removeWebhookConfig);
    config.find("#webhookprofilevalue").on('change',  save_options);
    config.find("#webhookvisiteventsflag").on('change',  save_options);
    config.find("#webhookscaneventsflag").on('change',  save_options);
    config.find("#webhookactioneventsflag").on('change',  save_options);
    config.find("#webhookmessageeventsflag").on('change',  save_options);
    config.find("#webhookrceventsflag").on('change',  save_options);

    // show/hide buttons according to the current list
    updateWebhookConfigButtons();

    // translate
    localizeStrings();    
}

function removeWebhookConfig(event){
    $(event.target).parent().remove();
    updateWebhookConfigButtons();
    save_options();
}

function serializeWebhookConfig(){
    var rv = [];
    var configs = $("#webhookconfigs").children();
    for ( var i=0; i<configs.length; i++){
        var config = $(configs[i]);
        var url =  config.find("#webhookprofilevalue").val().trim();

        var events = [];
        if ( config.find("#webhookvisiteventsflag").prop("checked")) events.push ("visit");
        if ( config.find("#webhookscaneventsflag").prop("checked")) events.push ("scan");
        if ( config.find("#webhookactioneventsflag").prop("checked")) events.push ("action");
        if ( config.find("#webhookmessageeventsflag").prop("checked")) events.push ("message");
        if ( config.find("#webhookrceventsflag").prop("checked")) events.push ("rc");

        if ( !! url){
            rv.push({
                url : url,
                events: events
            }); 
        }
    }
    return rv;
}

function deserializeWebhookConfig(webhooks){
    if (!webhooks || webhooks.length == 0){
        // add empty config UI
        addWebhookConfig("",[]);
    }else{
        webhooks.forEach(element => {
            addWebhookConfig(element.url, element.events);
        });
    }
}

function updateWebhookConfigButtons(){
    var configs = $("#webhookconfigs").children();

    for ( var i=0; i<configs.length; i++){
        // only show 'add' on last line AND when we have fewer than 5 in total.
        if ( i==configs.length-1 && configs.length < 5){            
            $(configs[i]).find("#add").show();
        }else{
            $(configs[i]).find("#add").hide();
        }
        if (configs.length > 1){
            // more than 1, allow delete for all.
            $(configs[i]).find("#remove").show();
        }else{
            // only 1 left, hide the delete button.
            $(configs[i]).find("#remove").hide();
        }
    }
}
// followup config utils
function addFollowUpConfig(text, delay){
    var template = 
    `<li id="followupconfig__count__">
        <span i18n="innerText">__delayLabel__</span> <input class="input __small" type="number" min="0" max="31" step="1" style="width: 3em;text-align:right" id="followupdelaydays" value="__days__">
          <span i18n="innerText">__pauseDaysLabel__</span>
          <input class="input __small" type="number" min="0" max="24" step="1" style="width: 3em;text-align:right" id="followupdelayhours" value="__hours__">
          <span i18n="innerText">__pauseHoursLabel__</span>
          <input class="input __small" type="number" min="0" max="60" step="1" style="width: 3em;text-align:right" id="followupdelayminutes" value="__mins__">
          <span i18n="innerText">__pauseMinutesLabel__</span><br>
              <textarea style="width: 80%;" class="input"
                    i18n="@placeholder"
                    id="followuptext"
                    rows="3"
                    data-maxlength="300"
                    placeholder="__followUpPlaceholder__"></textarea>
        <button class="btn __grey __square" id="removefu">&nbsp;-&nbsp;</button>
        <button class="btn __grey __square" id="addfu">&nbsp;+&nbsp;</button>
    </li>`;
    var container = $("#followupconfigs");
    var currentcount = container.children().length;

    //  create new input field entry 
    container.append(template.replace(/__count__/g, currentcount+1)
                            .replace(/__days__/g, [0,2,5,9,14][currentcount])
                            .replace(/__hours__/g, currentcount==0?2:0)
                            .replace(/__mins__/g, 0));
    var configs = $("#followupconfigs").children();
    var idx = configs.length-1;
    var config = $(configs[idx]);

    // set followup props if available
    if (!!text && !!delay){
        config.find("#followuptext").val(text);
        config.find("#followupdelaydays").val(delay.days);
        config.find("#followupdelayhours").val(delay.hours);
        config.find("#followupdelayminutes").val(delay.minutes);
    }
    // add event handlers
    config.find("#addfu").on('click', addFollowUpConfig);
    config.find("#removefu").on('click', removeFollowUpConfig);
    config.find("#followuptext").on('change',  save_options);
    config.find("#followupdelaydays").on('change',  save_options);
    config.find("#followupdelayhours").on('change',  save_options);
    config.find("#followupdelayminutes").on('change',  save_options);

    // show/hide buttons according to the current list
    updateFollowUpConfigButtons();

    // translate
    localizeStrings();    

}

function removeFollowUpConfig(event){
    $(event.target).parent().remove();
    updateFollowUpConfigButtons();
    save_options();
}

function serializeFollowUpConfig(){
    var rv = [];
    var configs = $("#followupconfigs").children();
    for ( var i=0; i<configs.length; i++){
        var config = $(configs[i]);
        var text =  config.find("#followuptext").val().trim();

        var delay = {};
        delay.days = config.find("#followupdelaydays").val();
        delay.hours = config.find("#followupdelayhours").val();
        delay.minutes = config.find("#followupdelayminutes").val();

        if ( !! text){
            rv.push({
                text : text,
                delay: delay
            }); 
        }
    }
    return rv;
}

function deserializeFollowUpConfig(followups){
    if (!followups || followups.length == 0){
        // add empty config UI
        addFollowUpConfig("",{days:1, hours:0, minutes: 0});
    }else{
        followups.forEach(element => {
            addFollowUpConfig(element.text, element.delay);
        });
    }
}

function updateFollowUpConfigButtons(){
    var configs = $("#followupconfigs").children();

    for ( var i=0; i<configs.length; i++){
        // only show 'add' on last line AND when we have fewer than 5 in total.
        if ( i==configs.length-1 && configs.length < 5){            
            $(configs[i]).find("#addfu").show();
        }else{
            $(configs[i]).find("#addfu").hide();
        }
        if (configs.length > 1){
            // more than 1, allow delete for all.
            $(configs[i]).find("#removefu").show();
        }else{
            // only 1 left, hide the delete button.
            $(configs[i]).find("#removefu").hide();
        }
    }
}
