chrome.runtime.onMessage.addListener(function(msg, sender) {

    
    if (msg.from == 'content') {     


      /* chrome.tabs.create({ url: "chrome-extension://"chrome.runtime.id+"/email_list.html" });*/
       chrome.tabs.create({url:  "email_list.html" });

    }
});



