/**
 * javascript file used only by the popup html page for the DuxSoup plugin.
 */
  // initialize the "record cound" field in the popup according to the active value
var tabs = [];
chrome.tabs.getSelected(null, function (tab) {
  tabs = [tab];
});

// initialize the event handlers
setElementProperty('scan', 'onclick', startDataCollection);
setElementProperty('visit', 'onclick', startDataCollection);
setElementProperty('visit-connect', 'onclick', startVisitAndConnect);
setElementProperty('stop', 'onclick', stopDataCollection);
setElementProperty('download', 'onclick', downloadData);
setElementProperty('reset', 'onclick', clearData);
setElementProperty('linkedin', 'onclick', searchLinkedIn);
setElementProperty('groups', 'onclick', searchGroups);
setElementProperty('connections', 'onclick', searchConnections);
setElementProperty('salesnav', 'onclick', searchSalesNav);
setElementProperty('googlefree', 'onclick', searchGoogleFree);
setElementProperty('googlepro', 'onclick', searchGooglePro);
setElementProperty('titlequery', 'onkeydown', typeOrSearch);
setElementProperty('locationquery', 'onkeydown', typeOrSearch);
setElementProperty('search', 'onclick', doGoogleSearch);
setElementProperty('buy', 'onclick', goPro);
setElementProperty('about', 'onclick', showAbout);
setElementProperty('scheduler', 'onclick', showScheduler);
setElementProperty('options', 'onclick', showOptions);
setElementProperty('duxstore', 'onclick', showDuxStore);
setElementProperty('review', 'onclick', review);
setElementProperty('reload', 'onclick', reload);
setElementProperty('toggle', 'onclick', toggleForTab);
setElementProperty('version', 'innerText', 'v' + chrome.runtime.getManifest().version);
setElementProperty('upload', 'onclick', uploadCSV);
setElementProperty('tagsearch', 'onclick', tagSearch);
setElementProperty('premium-popup', 'onclick', showPremiumPopup);
setElementProperty('close-premium-popup', 'onclick', closePremiumPopup);
setElementProperty('custom-message', 'onchange', showCustomMessage);
setElementProperty('custom-message-textarea', 'onkeyup', onAutoMessageKeyUp);
setElementProperty('contact', 'onclick', openMailClient);

setTimeout(() => {
  sendMessage({ command: 'getConfigMap' }, options => {
    if (options) {
      document.querySelector('#custom-message').checked = options.autoconnectmessageflag;
      document.querySelector('#custom-message').dispatchEvent(new Event('change'));

      document.querySelector('#custom-message-textarea').value = options.autoconnectmessagetext;
      updateCharCount(document.querySelector('#custom-message-textarea'));
    }
  });
}, 0);

// query the plugin for the view-state
updateGUIState();
