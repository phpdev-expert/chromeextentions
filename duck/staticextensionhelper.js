var manifestData = chrome.runtime.getManifest();
// dynamically includes content scripts in static result pages. 
var jss = manifestData.content_scripts[0].js;
for (var i in jss){ 
    var sc = document.createElement("script");
    sc.setAttribute("src", jss[i]);
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);
}
var bootstrapsc = document.createElement("script");
bootstrapsc.setAttribute("src", "staticextensionbootstrap.js");
bootstrapsc.setAttribute("type", "text/javascript");
document.head.appendChild(bootstrapsc);
