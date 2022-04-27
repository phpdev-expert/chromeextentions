function testpage_init (){
    agent.init("loadevent");    
}
function addNodes(type, urls){
    urls.forEach(url => {
        var node = document.createElement(type);
        node.src = url;
        document.head.appendChild(node);
    });
}
var manifest = chrome.runtime.getManifest();

addNodes('style', manifest.content_scripts[0].css);
addNodes('script', manifest.content_scripts[0].js);

setTimeout(testpage_init, 1000);

