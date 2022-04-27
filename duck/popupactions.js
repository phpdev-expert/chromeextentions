// action functions
function searchLinkedIn(){
    chrome.tabs.create({
        'url': 'https://www.linkedin.com/search/results/index/?keywords=&origin=GLOBAL_SEARCH_HEADER'
    }, function(tab) {

    });
    logUserAction("Open LinkedIn People Search");
}
function searchGroups(){
    chrome.tabs.create({
        'url': 'https://www.linkedin.com/groups/my-groups'
    }, function(tab) {

    });
    logUserAction("Open LinkedIn Group Search");
}
function searchConnections(){
    chrome.tabs.create({
        'url': 'https://www.linkedin.com/mynetwork/invite-connect/connections/'
    }, function(tab) {

    });
    logUserAction("Open LinkedIn Connections Search");
}
function searchSalesNav(){
    chrome.tabs.create({
        'url': 'https://www.linkedin.com/sales/search'
    }, function(tab) {

    });
    logUserAction("Open LinkedIn SalesNav Search");
}
function searchRecruiter(){
    chrome.tabs.create({
        'url': 'https://www.linkedin.com/recruiter/smartsearch'
    }, function(tab) {

    });
    logUserAction("Open LinkedIn SalesNav Search");
}

function searchGooglePro(){
    chrome.tabs.create({
        'url': 'customsearch_pro.html'
    }, function(tab) {

    });
    logUserAction("Open XRay Search Pro");
}
function searchGoogleFree(){
    chrome.tabs.create({
        'url': 'customsearch_free.html'
    }, function(tab) {

    });
    logUserAction("Open XRay Search Free");
}
function doGoogleSearch(){
    var titlequery = (!!document.getElementById("titlequery").value?' +"'+document.getElementById("titlequery").value+'"':" ");
    var locationquery = (!!document.getElementById("locationquery").value?' +"'+document.getElementById("locationquery").value+'"':" ");

    document.location.href="http://www.google.com/search?q="+encodeURIComponent(titlequery+locationquery+' -intitle:"profiles" -inurl:"dir/+" site:linkedin.com/in/ OR site:linkedin.com/pub/');
    logUserAction("Execute XRay Search");
}
function typeOrSearch(event){
    if (event.keyCode == 13) {
        doGoogleSearch();
    }
}
function goPro(){
    chrome.tabs.create({
        'url': 'https://www.dux-soup.com/pricing'
    }, function(tab) {
    });
    logUserAction("Go Pro");
}
function showAbout(){
    chrome.tabs.create({
        'url': 'chrome-extension://'+chrome.runtime.id+'/postinstall.html'
    }, function(tab) {
    });
    logUserAction("Show About");
}
function showScheduler(){
    chrome.tabs.create({
        'url': 'chrome-extension://'+chrome.runtime.id+'/planner.html'
    }, function(tab) {
    });
    logUserAction("Show Scheduler");
}

function showOptions() {
    const optionsUrl = 'chrome-extension://' + chrome.runtime.id + '/options.html';

    chrome.tabs.query({ url: optionsUrl }, function (tabs) {
        if (tabs.length == 0) {
            chrome.tabs.create({ url: optionsUrl });
        } else {
            chrome.tabs.update(tabs[0].id, { active: true });
            window.close();
        }
    });

    logUserAction('Show Options');
}

function showDuxStore(){
    chrome.tabs.create({
        'url': 'chrome-extension://'+chrome.runtime.id+'/dux-store.html'
    }, function(tab) {
    });
    logUserAction("Show Dux-Store");
}
function checkChrome(){
    chrome.tabs.create({
        'url': 'chrome://chrome'
    }, function(tab) {
    });
}
function review(){
    chrome.tabs.create({
        'url': 'https://chrome.google.com/webstore/detail/'+chrome.runtime.id+'/reviews'
    }, function(tab) {
    });
    logUserAction("Open Chrome Webstore Reviews");
}
function reload(){
    logUserAction("Reload extension");

    sendMessage({command: "reloadExtension" });
    logUserAction("Reload Extension");
    window.close();

}
function signin(){
    sendMessage({command: "signin", target: tabs[0]});
    logUserAction("Open Sign-in Page");
}
function logout(){
    logUserAction("Logout of extension");

    sendMessage({command: "logout" });
    logUserAction("Logout user from extension");
    window.close();

}
function logUserAction(action){
    // logging in try/catch to avoid problems.
    try{
        sendMessage({command: "logUserAction", action: action});
    }catch(e){
        console.log(e);
    }
}
// event adapters
/**
 * Start the data collection by sending the collection command to the active content script
 * @param event : the event that triggered the collection
 */
function startDataCollection(event){
    sendMessage({command: "start", target: tabs[0], mode: event.srcElement.id});
    logUserAction("Start Visiting");
    window.close();
}

async function startVisitAndConnect(event) {
    await saveOption('autoconnect', true);
    sendMessage({ command: 'start', target: tabs[0], mode: 'visit' });
    logUserAction('Start Visiting and Connecting');
    window.close();
}

function stopDataCollection(event){
    sendMessage({command: "stop", target: tabs[0]});
    logUserAction("Stop Visiting");
    window.close();
}
function clearData(event){
    sendMessage({command: "reset" });
    logUserAction("Clear Data");
    window.close();
}
function downloadData(event){
    console.log("stopping");
    sendMessage({command: "download" });
    logUserAction("Download Data");
    window.close();
}
function uploadCSV(event){
    chrome.tabs.create({
        'url': 'chrome-extension://'+chrome.runtime.id+'/revisit.html'
    }, function(tab) {
    });
    logUserAction("Open Revisit");
}
function tagSearch(event){
    chrome.tabs.create({
        'url': 'chrome-extension://'+chrome.runtime.id+'/tagsearch.html'
    }, function(tab) {
    });
    logUserAction("Open TagSearch");
}
function toggleForTab(event){
    sendMessage({command: "toggleForTab", target: tabs[0]});
    logUserAction("Toggle for tab");
    window.close();
}

function saveOption(field, value) {
    return new Promise((resolve, reject) => {
        sendMessage({ command: 'getConfigMap' }, options => {
            if (options) {
                options[field] = value;

                console.log(1);
                sendMessage({ command: 'setoptions', options: options });
                setTimeout(resolve, 0);
            } else {
                reject();
            }
        });
    });
}

function saveAutoConnectMessage() {
    sendMessage({ command: 'getConfigMap' }, options => {
        if (options) {
            options.autoconnectmessageflag = document.querySelector('#custom-message').checked;
            options.autoconnectmessagetext = document.querySelector('#custom-message-textarea').value;

            sendMessage({ command: 'setoptions', options: options });
        }
    });
}

let heightCache;
function showCustomMessage(event) {
    const $customMessage = document.querySelector('.custom-message');

    heightCache = heightCache || $customMessage.querySelector('.inner-wrapper').offsetHeight;

    if (event.target.checked) {
        $customMessage.style.maxHeight = `${heightCache}px`;
        $customMessage.classList.add('__shown');
    } else {
        $customMessage.style.maxHeight = 0;
        $customMessage.classList.remove('__shown');
    }

    saveAutoConnectMessage();
}

const hideSavedLabel = debounce(() => {
    document.querySelector('.custom-message_saved').classList.remove('__shown');
}, 5000);

let _lastValue;
function onAutoMessageKeyUp(event) {
    const value = this.value.trim();

    if (value === _lastValue) {
        return;
    }

    updateCharCount(event.target);
    saveAutoConnectMessage();

    document.querySelector('.custom-message_saved').classList.add('__shown');
    hideSavedLabel();

    _lastValue = value;
}

function updateCharCount(element) {
    element = element || this;
    document.querySelector('.custom-message_length').innerHTML = element.value && element.value.length || 0;
}

function showPremiumPopup() {
    document.querySelector('body').classList.add('__no-scroll');
    document.querySelector('.premium-popup').classList.add('__shown');
}

function closePremiumPopup() {
    document.querySelector('body').classList.remove('__no-scroll');
    document.querySelector('.premium-popup').classList.remove('__shown');
}

function openMailClient() {
    const emailUrl = 'mailto:info@dux-soup.com';

    chrome.tabs.update({ url: emailUrl });
}
