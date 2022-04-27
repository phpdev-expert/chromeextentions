/**
 * Sends a message to the content script of the active tab as specified in #chrome.tabs.sendMessage
 * If a result is returned this is logged into the console
*/
function sendMessage(cmd, callback){
    var cb = callback
    if (cb == null){
        cb = console.log;
    };
    chrome.runtime.sendMessage(cmd, cb);
}
function setElementProperty(elementid, property, value){
    var elements =  document.querySelectorAll('#'+elementid);
    for (var idx=0;idx<elements.length;idx++){
        if (property!=null){
            try{
                elements[idx][property]=value;
            }catch(e){
                //alert("failed to set property on ("+elementid+"."+property+":"+e);
            };
        }
    }
}
function prependElementProperty(elementid, property, value){
    var elements =  document.querySelectorAll('#'+elementid);
    for (var idx=0;idx<elements.length;idx++){
        if (property!=null){
            try{
                elements[idx][property]=value + elements[idx][property];
            }catch(e){
                //alert("failed to set property on ("+elementid+"."+property+":"+e);
            };
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

var attempts = 3;
function updateGUIState() {
    sendMessage({ command: 'guistate' }, function (result) {
        // result can be null when initialisation is ongoing, or has failed.
        if (result != null) {
            setElementProperty('scan', 'disabled', !result.startscan);
            setElementProperty('visit', 'disabled', !result.startvisit);
            setElementProperty('visit-connect', 'disabled', !result.startvisit);
            setElementProperty('custom-message', 'disabled', !result.startvisit);
            setElementProperty('stop', 'disabled', !result.stop);
            setElementProperty('download', 'disabled', !result.download);
            setElementProperty('reset', 'disabled', !result.reset);
            setElementProperty('upload', 'disabled', false);
            setElementProperty('connections', 'disabled', false);
            setElementProperty('tagsearch', 'disabled', false);
            setElementProperty('todayrecords', 'textContent', result.counttoday.toString() + ' ' + (result.counttoday == 1 ? chrome.i18n.getMessage('visitpopup') : chrome.i18n.getMessage('visitspopup')));
            setElementProperty('timezone', 'textContent', '(' + result.timezone + ')');
            if (result.snoozetime) {
                setElementProperty('recentrecords', 'textContent', chrome.i18n.getMessage('snoozingpopup') + result.snoozetime.hours + 'h' + (result.snoozetime.minutes < 10 ? '0' : '') + result.snoozetime.minutes);
            } else {
                setElementProperty('recentrecords', 'textContent', result.countrecent.toString() + ' ' + (result.countrecent == 1 ? chrome.i18n.getMessage('profilepopup') : chrome.i18n.getMessage('profilespopup')));
            }

            const $onOff = document.querySelector('.on-off');
            const $dslabel = document.querySelector('.on-off strong');

            if ($onOff && result.enabled) {
                $onOff.classList.add('__enabled');
            }

            const $logo = document.querySelector('.logo img');

            if ($logo) {
                $logo['src'] = 'logo_'+result.edition+'_nolabel.png';
                switch (result.edition){
                    case 'starter': $dslabel.innerText += " Starter"; break;
                    case 'pro': $dslabel.innerText += " Pro"; break;
                    case 'turbo': $dslabel.innerText += " Turbo"; break;
                }
            }

        } else {
            // try again in a second. Avoid the user having to 'click to refresh'
            setElementProperty('recentrecords', 'textContent', chrome.i18n.getMessage('loadingpopup') + '...'.substring(0, (attempts++) % 3));
            setTimeout(updateGUIState, 1000);
        }
    });
}

function checkAndLoadOAuthPopup(){
    sendMessage({command: "getConfigMap" }, function(config){
        if (!!config){
            if (config.userauthenticationtype == "oauth2"){
                chrome.identity.getAuthToken({ interactive: true }, function(res){
                    // triggers permissions dialog.
                });
            }
        }else{
            // config not ready , try again.
            setTimeout(checkAndLoadOAuthPopup, 500);
        }
    });
}

checkAndLoadOAuthPopup();
