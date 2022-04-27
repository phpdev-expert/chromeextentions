chrome.action.onClicked.addListener((tab) => {

  let cid = chrome.runtime.id;
  chrome.tabs.sendMessage(tab.id, {
    from: "background",
    chrom_id: cid
  }, function(response) {

  });


});
