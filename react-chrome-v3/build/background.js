chrome.action.onClicked.addListener((e=>{let o=chrome.runtime.id;chrome.tabs.sendMessage(e.id,{from:"background",chrom_id:o},(function(e){}))}));
