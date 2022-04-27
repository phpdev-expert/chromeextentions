/**
 * javascript file used only by the popup html page for the DuxSoup plugin.
 */
var tabs=[];
chrome.tabs.getSelected(null, function(tab) {
    tabs=[tab];
});

// initialize the event handlers
setElementProperty("scan", "onclick", startDataCollection);
setElementProperty("visit", "onclick", startDataCollection);
setElementProperty("stop", "onclick", stopDataCollection);
setElementProperty("download", "onclick", downloadData);
setElementProperty("reset", "onclick", clearData);
setElementProperty("linkedin", "onclick", searchLinkedIn);
setElementProperty("groups", "onclick", searchGroups);
setElementProperty("connections", "onclick", searchConnections);
setElementProperty("salesnav", "onclick", searchSalesNav);
setElementProperty("recruiter", "onclick", searchRecruiter);
setElementProperty("googlefree", "onclick", searchGoogleFree);
setElementProperty("googlepro", "onclick", searchGooglePro);
setElementProperty("titlequery", "onkeydown", typeOrSearch);
setElementProperty("locationquery", "onkeydown", typeOrSearch);
setElementProperty("search", "onclick", doGoogleSearch);
setElementProperty("buy", "onclick", goPro);
setElementProperty("about", "onclick", showAbout);
setElementProperty("scheduler", "onclick", showScheduler);
setElementProperty("options", "onclick", showOptions);
setElementProperty("duxstore", "onclick", showDuxStore);
setElementProperty("review", "onclick", review);
setElementProperty("reload", "onclick", reload);
setElementProperty("signin", "onclick", signin);
setElementProperty("toggle", "onclick", toggleForTab);
setElementProperty("check", "onclick", checkChrome);
setElementProperty("upload", "onclick", uploadCSV);
setElementProperty("tagsearch", "onclick", tagSearch);
setElementProperty("contact", "onclick", openMailClient);
setElementProperty('premium-popup', 'onclick', showPremiumPopup);
setElementProperty('close-premium-popup', 'onclick', closePremiumPopup);
prependElementProperty("version", "innerText", "v"+chrome.runtime.getManifest().version);

// query the plugin for the view-state
updateGUIState();
