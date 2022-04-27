!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do{h=h||".5",g/=h,n.style(c.elem,a,g+f)}while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{for:"htmlFor",class:"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});(function($,undefined){var uuid=0,runiqueId=/^ui-id-\d+$/;$.ui=$.ui||{};if($.ui.version){return}$.extend($.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});$.fn.extend({_focus:$.fn.focus,focus:function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem)}},delay)}):this._focus.apply(this,arguments)},scrollParent:function(){var scrollParent;if($.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){scrollParent=this.parents().filter(function(){return/(relative|absolute|fixed)/.test($.css(this,"position"))&&/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}else{scrollParent=this.parents().filter(function(){return/(auto|scroll)/.test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!scrollParent.length?$(document):scrollParent},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex)}if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value}}elem=elem.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++uuid}})},removeUniqueId:function(){return this.each(function(){if(runiqueId.test(this.id)){$(this).removeAttr("id")}})}});function focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false}img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img)}return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element)}function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().andSelf().filter(function(){return $.css(this,"visibility")==="hidden"}).length}$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName)}}):function(elem,i,match){return!!$.data(elem,match[3])},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")))},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN)}});$(function(){var body=document.body,div=body.appendChild(div=document.createElement("div"));div.offsetHeight;$.extend(div.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});$.support.minHeight=div.offsetHeight===100;$.support.selectstart="onselectstart"in div;body.removeChild(div).style.display="none"});if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0}if(margin){size-=parseFloat($.css(elem,"margin"+this))||0}});return size}$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this)}return this.each(function(){$(this).css(type,reduce(this,size)+"px")})};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size)}return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px")})}})}if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key))}else{return removeData.call(this)}}}($.fn.removeData)}(function(){var uaMatch=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];$.ui.ie=uaMatch.length?true:false;$.ui.ie6=parseFloat(uaMatch[1],10)===6})();$.fn.extend({disableSelection:function(){return this.bind(($.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(event){event.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});$.extend($.ui,{plugin:{add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]])}},call:function(instance,name,args){var i,set=instance.plugins[name];if(!set||!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11){return}for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args)}}}},contains:$.contains,hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false}var scroll=a&&a==="left"?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true}el[scroll]=1;has=el[scroll]>0;el[scroll]=0;return has},isOverAxis:function(x,reference,size){return x>reference&&x<reference+size},isOver:function(y,x,top,left,height,width){return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width)}})})(jQuery);(function($,undefined){var uuid=0,slice=Array.prototype.slice,_cleanData=$.cleanData;$.cleanData=function(elems){for(var i=0,elem;(elem=elems[i])!=null;i++){try{$(elem).triggerHandler("remove")}catch(e){}}_cleanData(elems)};$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,namespace=name.split(".")[0];name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget}$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName)};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element)}if(arguments.length){this._createWidget(options,element)}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base;basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if($.isFunction(value)){prototype[prop]=function(){var _super=function(){return base.prototype[prop].apply(this,arguments)},_superApply=function(args){return base.prototype[prop].apply(this,args)};return function(){var __super=this._super,__superApply=this._superApply,returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue}}()}});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?basePrototype.widgetEventPrefix:name},prototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetBaseClass:fullName,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto)});delete existingConstructor._childConstructors}else{base._childConstructors.push(constructor)}$.widget.bridge(name,constructor)};$.widget.extend=function(target){var input=slice.call(arguments,1),inputIndex=0,inputLength=input.length,key,value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value)}else{target[key]=value}}}}return target};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=slice.call(arguments,1),returnValue=this;options=!isMethodCall&&args.length?$.widget.extend.apply(null,[options].concat(args)):options;if(isMethodCall){this.each(function(){var methodValue,instance=$.data(this,fullName);if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'")}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance")}methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false}})}else{this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{})._init()}else{$.data(this,fullName,new object(options,this))}})}return returnValue}};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=uuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this.bindings=$();this.hoverable=$();this.focusable=$();if(element!==this){$.data(element,this.widgetName,this);$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy()}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:$.noop,widget:function(){return this.element},option:function(key,value){var options=key,parts,curOption,i;if(arguments.length===0){return $.widget.extend({},this.options)}if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]]}key=parts.pop();if(value===undefined){return curOption[key]===undefined?null:curOption[key]}curOption[key]=value}else{if(value===undefined){return this.options[key]===undefined?null:this.options[key]}options[key]=value}}this._setOptions(options);return this},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key])}return this},_setOption:function(key,value){this.options[key]=value;if(key==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!value).attr("aria-disabled",value);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false}if(!handlers){handlers=element;element=this.element;delegateElement=this.widget()}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element)}$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return}return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments)}if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++}var match=event.match(/^(\w+)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];if(selector){delegateElement.delegate(selector,eventName,handlerProxy)}else{element.bind(eventName,handlerProxy)}})},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.unbind(eventName).undelegate(eventName)},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments)}var instance=this;return setTimeout(handlerProxy,delay||0)},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){$(event.currentTarget).addClass("ui-state-hover")},mouseleave:function(event){$(event.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){$(event.currentTarget).addClass("ui-state-focus")},focusout:function(event){$(event.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(type,event,data){var prop,orig,callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop]}}}this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented())}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options}}var hasOptions,effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options}}hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay)}if(hasOptions&&$.effects&&($.effects.effect[effectName]||$.uiBackCompat!==false&&$.effects[effectName])){element[method](options)}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback)}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0])}next()})}}});if($.uiBackCompat!==false){$.Widget.prototype._getCreateOptions=function(){return $.metadata&&$.metadata.get(this.element[0])[this.widgetName]}}})(jQuery);(function($,undefined){var mouseHandled=false;$(document).mouseup(function(e){mouseHandled=false});$.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event)}).bind("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(event){if(mouseHandled){return}this._mouseStarted&&this._mouseUp(event);this._mouseDownEvent=event;var that=this,btnIsLeft=event.which===1,elIsCancel=typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false;if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(event)!==false;if(!this._mouseStarted){event.preventDefault();return true}}if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(event){return that._mouseMove(event)};this._mouseUpDelegate=function(event){return that._mouseUp(event)};$(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true},_mouseMove:function(event){if($.ui.ie&&!(document.documentMode>=9)&&!event.button){return this._mouseUp(event)}if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault()}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,event)!==false;this._mouseStarted?this._mouseDrag(event):this._mouseUp(event)}return!this._mouseStarted},_mouseUp:function(event){$(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(event)}return false},_mouseDistanceMet:function(event){return Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance},_mouseDelayMet:function(event){return this.mouseDelayMet},_mouseStart:function(event){},_mouseDrag:function(event){},_mouseStop:function(event){},_mouseCapture:function(event){return true}})})(jQuery);(function($,undefined){$.widget("ui.draggable",$.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(event){var o=this.options;if(this.helper||o.disabled||$(event.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(event);if(!this.handle)return false;$(o.iframeFix===true?"iframe":o.iframeFix).each(function(){$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css($(this).offset()).appendTo("body")});return true},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if($.ui.ddmanager)$.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);if(o.containment)this._setContainment();if(this._trigger("start",event)===false){this._clear();return false}this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour)$.ui.ddmanager.prepareOffsets(this,event);this._mouseDrag(event,true);if($.ui.ddmanager)$.ui.ddmanager.dragStart(this,event);return true},_mouseDrag:function(event,noPropagation){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===false){this._mouseUp({});return false}this.position=ui.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);return false},_mouseStop:function(event){var dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour)dropped=$.ui.ddmanager.drop(this,event);if(this.dropped){dropped=this.dropped;this.dropped=false}var element=this.element[0],elementInDom=false;while(element&&(element=element.parentNode)){if(element==document){elementInDom=true}}if(!elementInDom&&this.options.helper==="original")return false;if(this.options.revert=="invalid"&&!dropped||this.options.revert=="valid"&&dropped||this.options.revert===true||$.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped)){var that=this;$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==false){that._clear()}})}else{if(this._trigger("stop",event)!==false){this._clear()}}return false},_mouseUp:function(event){$("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if($.ui.ddmanager)$.ui.ddmanager.dragStop(this,event);return $.ui.mouse.prototype._mouseUp.call(this,event)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(event){var handle=!this.options.handle||!$(this.options.handle,this.element).length?true:false;$(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==event.target)handle=true});return handle},_createHelper:function(event){var o=this.options;var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event])):o.helper=="clone"?this.element.clone().removeAttr("id"):this.element;if(!helper.parents("body").length)helper.appendTo(o.appendTo=="parent"?this.element[0].parentNode:o.appendTo);if(helper[0]!=this.element[0]&&!/(fixed|absolute)/.test(helper.css("position")))helper.css("position","absolute");return helper},_adjustOffsetFromHelper:function(obj){if(typeof obj=="string"){obj=obj.split(" ")}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0}}if("left"in obj){this.offset.click.left=obj.left+this.margins.left}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left}if("top"in obj){this.offset.click.top=obj.top+this.margins.top}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&$.ui.ie)po={top:0,left:0};return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var p=this.element.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var o=this.options;if(o.containment=="parent")o.containment=this.helper[0].parentNode;if(o.containment=="document"||o.containment=="window")this.containment=[o.containment=="document"?0:$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,o.containment=="document"?0:$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(o.containment=="document"?0:$(window).scrollLeft())+$(o.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(o.containment=="document"?0:$(window).scrollTop())+($(o.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(o.containment)&&o.containment.constructor!=Array){var c=$(o.containment);var ce=c[0];if(!ce)return;var co=c.offset();var over=$(ce).css("overflow")!="hidden";this.containment=[(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0),(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0),(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=c}else if(o.containment.constructor==Array){this.containment=o.containment}},_convertPositionTo:function(d,pos){if(!pos)pos=this.position;var mod=d=="absolute"?1:-1;var o=this.options,scroll=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);return{top:pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop())*mod,left:pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod}},_generatePosition:function(event){var o=this.options,scroll=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);var pageX=event.pageX;var pageY=event.pageY;if(this.originalPosition){var containment;if(this.containment){if(this.relative_container){var co=this.relative_container.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top]}else{containment=this.containment}if(event.pageX-this.offset.click.left<containment[0])pageX=containment[0]+this.offset.click.left;if(event.pageY-this.offset.click.top<containment[1])pageY=containment[1]+this.offset.click.top;if(event.pageX-this.offset.click.left>containment[2])pageX=containment[2]+this.offset.click.left;if(event.pageY-this.offset.click.top>containment[3])pageY=containment[3]+this.offset.click.top}if(o.grid){var top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?!(top-this.offset.click.top<containment[1]||top-this.offset.click.top>containment[3])?top:!(top-this.offset.click.top<containment[1])?top-o.grid[1]:top+o.grid[1]:top;var left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?!(left-this.offset.click.left<containment[0]||left-this.offset.click.left>containment[2])?left:!(left-this.offset.click.left<containment[0])?left-o.grid[0]:left+o.grid[0]:left}}return{top:pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop()),left:pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval)this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui]);if(type=="drag")this.positionAbs=this._convertPositionTo("absolute");return $.Widget.prototype._trigger.call(this,type,event,ui)},plugins:{},_uiHash:function(event){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui){var inst=$(this).data("draggable"),o=inst.options,uiSortable=$.extend({},ui,{item:inst.element});inst.sortables=[];$(o.connectToSortable).each(function(){var sortable=$.data(this,"sortable");if(sortable&&!sortable.options.disabled){inst.sortables.push({instance:sortable,shouldRevert:sortable.options.revert});sortable.refreshPositions();sortable._trigger("activate",event,uiSortable)}})},stop:function(event,ui){var inst=$(this).data("draggable"),uiSortable=$.extend({},ui,{item:inst.element});$.each(inst.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;inst.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(event);this.instance.options.helper=this.instance.options._helper;if(inst.options.helper=="original")this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",event,uiSortable)}})},drag:function(event,ui){var inst=$(this).data("draggable"),that=this;var checkPos=function(o){var dyClick=this.offset.click.top,dxClick=this.offset.click.left;var helperTop=this.positionAbs.top,helperLeft=this.positionAbs.left;var itemHeight=o.height,itemWidth=o.width;var itemTop=o.top,itemLeft=o.left;return $.ui.isOver(helperTop+dyClick,helperLeft+dxClick,itemTop,itemLeft,itemHeight,itemWidth)};$.each(inst.sortables,function(i){var innermostIntersecting=false;var thisSortable=this;this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){innermostIntersecting=true;$.each(inst.sortables,function(){this.instance.positionAbs=inst.positionAbs;this.instance.helperProportions=inst.helperProportions;this.instance.offset.click=inst.offset.click;if(this!=thisSortable&&this.instance._intersectsWith(this.instance.containerCache)&&$.ui.contains(thisSortable.instance.element[0],this.instance.element[0]))innermostIntersecting=false;return innermostIntersecting})}if(innermostIntersecting){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=$(that).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return ui.helper[0]};event.target=this.instance.currentItem[0];this.instance._mouseCapture(event,true);this.instance._mouseStart(event,true,true);this.instance.offset.click.top=inst.offset.click.top;this.instance.offset.click.left=inst.offset.click.left;this.instance.offset.parent.left-=inst.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=inst.offset.parent.top-this.instance.offset.parent.top;inst._trigger("toSortable",event);inst.dropped=this.instance.element;inst.currentItem=inst.element;this.instance.fromOutside=inst}if(this.instance.currentItem)this.instance._mouseDrag(event)}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",event,this.instance._uiHash(this.instance));this.instance._mouseStop(event,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder)this.instance.placeholder.remove();inst._trigger("fromSortable",event);inst.dropped=false}}})}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui){var t=$("body"),o=$(this).data("draggable").options;if(t.css("cursor"))o._cursor=t.css("cursor");t.css("cursor",o.cursor)},stop:function(event,ui){var o=$(this).data("draggable").options;if(o._cursor)$("body").css("cursor",o._cursor)}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui){var t=$(ui.helper),o=$(this).data("draggable").options;if(t.css("opacity"))o._opacity=t.css("opacity");t.css("opacity",o.opacity)},stop:function(event,ui){var o=$(this).data("draggable").options;if(o._opacity)$(ui.helper).css("opacity",o._opacity)}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui){var i=$(this).data("draggable");if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!="HTML")i.overflowOffset=i.scrollParent.offset()},drag:function(event,ui){var i=$(this).data("draggable"),o=i.options,scrolled=false;if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!="HTML"){if(!o.axis||o.axis!="x"){if(i.overflowOffset.top+i.scrollParent[0].offsetHeight-event.pageY<o.scrollSensitivity)i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop+o.scrollSpeed;else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity)i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop-o.scrollSpeed}if(!o.axis||o.axis!="y"){if(i.overflowOffset.left+i.scrollParent[0].offsetWidth-event.pageX<o.scrollSensitivity)i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft+o.scrollSpeed;else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity)i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft-o.scrollSpeed}}else{if(!o.axis||o.axis!="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed)}if(!o.axis||o.axis!="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed)}}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)$.ui.ddmanager.prepareOffsets(i,event)}});$.ui.plugin.add("draggable","snap",{start:function(event,ui){var i=$(this).data("draggable"),o=i.options;i.snapElements=[];$(o.snap.constructor!=String?o.snap.items||":data(draggable)":o.snap).each(function(){var $t=$(this);var $o=$t.offset();if(this!=i.element[0])i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left})})},drag:function(event,ui){var inst=$(this).data("draggable"),o=inst.options;var d=o.snapTolerance;var x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(var i=inst.snapElements.length-1;i>=0;i--){var l=inst.snapElements[i].left,r=l+inst.snapElements[i].width,t=inst.snapElements[i].top,b=t+inst.snapElements[i].height;if(!(l-d<x1&&x1<r+d&&t-d<y1&&y1<b+d||l-d<x1&&x1<r+d&&t-d<y2&&y2<b+d||l-d<x2&&x2<r+d&&t-d<y1&&y1<b+d||l-d<x2&&x2<r+d&&t-d<y2&&y2<b+d)){if(inst.snapElements[i].snapping)inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));inst.snapElements[i].snapping=false;continue}if(o.snapMode!="inner"){var ts=Math.abs(t-y2)<=d;var bs=Math.abs(b-y1)<=d;var ls=Math.abs(l-x2)<=d;var rs=Math.abs(r-x1)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left-inst.margins.left;if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left-inst.margins.left}var first=ts||bs||ls||rs;if(o.snapMode!="outer"){var ts=Math.abs(t-y1)<=d;var bs=Math.abs(b-y2)<=d;var ls=Math.abs(l-x1)<=d;var rs=Math.abs(r-x2)<=d;if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top-inst.margins.top;if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top-inst.margins.top;if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left-inst.margins.left;if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left-inst.margins.left}if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first))inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));inst.snapElements[i].snapping=ts||bs||ls||rs||first}}});$.ui.plugin.add("draggable","stack",{start:function(event,ui){var o=$(this).data("draggable").options;var group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0)});if(!group.length){return}var min=parseInt(group[0].style.zIndex)||0;$(group).each(function(i){this.style.zIndex=min+i});this[0].style.zIndex=min+group.length}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui){var t=$(ui.helper),o=$(this).data("draggable").options;if(t.css("zIndex"))o._zIndex=t.css("zIndex");t.css("zIndex",o.zIndex)},stop:function(event,ui){var o=$(this).data("draggable").options;if(o._zIndex)$(ui.helper).css("zIndex",o._zIndex)}})})(jQuery);(function($,undefined){$.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var o=this.options,accept=o.accept;this.isover=0;this.isout=1;this.accept=$.isFunction(accept)?accept:function(d){return d.is(accept)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};$.ui.ddmanager.droppables[o.scope]=$.ui.ddmanager.droppables[o.scope]||[];$.ui.ddmanager.droppables[o.scope].push(this);o.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];for(var i=0;i<drop.length;i++)if(drop[i]==this)drop.splice(i,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(key,value){if(key=="accept"){this.accept=$.isFunction(value)?value:function(d){return d.is(value)}}$.Widget.prototype._setOption.apply(this,arguments)},_activate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass)this.element.addClass(this.options.activeClass);draggable&&this._trigger("activate",event,this.ui(draggable))},_deactivate:function(event){var draggable=$.ui.ddmanager.current;if(this.options.activeClass)this.element.removeClass(this.options.activeClass);draggable&&this._trigger("deactivate",event,this.ui(draggable))},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){if(this.options.hoverClass)this.element.addClass(this.options.hoverClass);this._trigger("over",event,this.ui(draggable))}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);this._trigger("out",event,this.ui(draggable))}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return false;var childrenIntersection=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var inst=$.data(this,"droppable");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope==draggable.options.scope&&inst.accept.call(inst.element[0],draggable.currentItem||draggable.element)&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance)){childrenIntersection=true;return false}});if(childrenIntersection)return false;if(this.accept.call(this.element[0],draggable.currentItem||draggable.element)){if(this.options.activeClass)this.element.removeClass(this.options.activeClass);if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);this._trigger("drop",event,this.ui(draggable));return this.element}return false},ui:function(c){return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs}}});$.ui.intersect=function(draggable,droppable,toleranceMode){if(!droppable.offset)return false;var x1=(draggable.positionAbs||draggable.position.absolute).left,x2=x1+draggable.helperProportions.width,y1=(draggable.positionAbs||draggable.position.absolute).top,y2=y1+draggable.helperProportions.height;var l=droppable.offset.left,r=l+droppable.proportions.width,t=droppable.offset.top,b=t+droppable.proportions.height;switch(toleranceMode){case"fit":return l<=x1&&x2<=r&&t<=y1&&y2<=b;break;case"intersect":return l<x1+draggable.helperProportions.width/2&&x2-draggable.helperProportions.width/2<r&&t<y1+draggable.helperProportions.height/2&&y2-draggable.helperProportions.height/2<b;break;case"pointer":var draggableLeft=(draggable.positionAbs||draggable.position.absolute).left+(draggable.clickOffset||draggable.offset.click).left,draggableTop=(draggable.positionAbs||draggable.position.absolute).top+(draggable.clickOffset||draggable.offset.click).top,isOver=$.ui.isOver(draggableTop,draggableLeft,t,l,droppable.proportions.height,droppable.proportions.width);return isOver;break;case"touch":return(y1>=t&&y1<=b||y2>=t&&y2<=b||y1<t&&y2>b)&&(x1>=l&&x1<=r||x2>=l&&x2<=r||x1<l&&x2>r);break;default:return false;break}};$.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,event){var m=$.ui.ddmanager.droppables[t.options.scope]||[];var type=event?event.type:null;var list=(t.currentItem||t.element).find(":data(droppable)").andSelf();droppablesLoop:for(var i=0;i<m.length;i++){if(m[i].options.disabled||t&&!m[i].accept.call(m[i].element[0],t.currentItem||t.element))continue;for(var j=0;j<list.length;j++){if(list[j]==m[i].element[0]){m[i].proportions.height=0;continue droppablesLoop}}m[i].visible=m[i].element.css("display")!="none";if(!m[i].visible)continue;if(type=="mousedown")m[i]._activate.call(m[i],event);m[i].offset=m[i].element.offset();m[i].proportions={width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight}}},drop:function(draggable,event){var dropped=false;$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(!this.options)return;if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance))dropped=this._drop.call(this,event)||dropped;if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],draggable.currentItem||draggable.element)){this.isout=1;this.isover=0;this._deactivate.call(this,event)}});return dropped},dragStart:function(draggable,event){draggable.element.parentsUntil("body").bind("scroll.droppable",function(){if(!draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event)})},drag:function(draggable,event){if(draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var intersects=$.ui.intersect(draggable,this,this.options.tolerance);var c=!intersects&&this.isover==1?"isout":intersects&&this.isover==0?"isover":null;if(!c)return;var parentInstance;if(this.options.greedy){var scope=this.options.scope;var parent=this.element.parents(":data(droppable)").filter(function(){return $.data(this,"droppable").options.scope===scope});if(parent.length){parentInstance=$.data(parent[0],"droppable");parentInstance.greedyChild=c=="isover"?1:0}}if(parentInstance&&c=="isover"){parentInstance["isover"]=0;parentInstance["isout"]=1;parentInstance._out.call(parentInstance,event)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c=="isout"){parentInstance["isout"]=0;parentInstance["isover"]=1;parentInstance._over.call(parentInstance,event)}})},dragStop:function(draggable,event){draggable.element.parentsUntil("body").unbind("scroll.droppable");if(!draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event)}}})(jQuery);(function($,undefined){$.widget("ui.resizable",$.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var that=this,o=this.options;this.element.addClass("ui-resizable");$.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap($('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var n=this.handles.split(",");this.handles={};for(var i=0;i<n.length;i++){var handle=$.trim(n[i]),hname="ui-resizable-"+handle;var axis=$('<div class="ui-resizable-handle '+hname+'"></div>');axis.css({zIndex:o.zIndex});if("se"==handle){axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[handle]=".ui-resizable-"+handle;this.element.append(axis)}}this._renderAxis=function(target){target=target||this.element;for(var i in this.handles){if(this.handles[i].constructor==String)this.handles[i]=$(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var axis=$(this.handles[i],this.element),padWrapper=0;padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();var padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize()}if(!$(this.handles[i]).length)continue}};this._renderAxis(this.element);this._handles=$(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!that.resizing){if(this.className)var axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);that.axis=axis&&axis[1]?axis[1]:"se"}});if(o.autoHide){this._handles.hide();$(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(o.disabled)return;$(this).removeClass("ui-resizable-autohide");that._handles.show()}).mouseleave(function(){if(o.disabled)return;if(!that.resizing){$(this).addClass("ui-resizable-autohide");that._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy();var _destroy=function(exp){$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){_destroy(this.element);var wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove()}this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this},_mouseCapture:function(event){var handle=false;for(var i in this.handles){if($(this.handles[i])[0]==event.target){handle=true}}return!this.options.disabled&&handle},_mouseStart:function(event){var o=this.options,iniPos=this.element.position(),el=this.element;this.resizing=true;this.documentScroll={top:$(document).scrollTop(),left:$(document).scrollLeft()};if(el.is(".ui-draggable")||/absolute/.test(el.css("position"))){el.css({position:"absolute",top:iniPos.top,left:iniPos.left})}this._renderProxy();var curleft=num(this.helper.css("left")),curtop=num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.originalPosition={left:curleft,top:curtop};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1;var cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor=="auto"?this.axis+"-resize":cursor);el.addClass("ui-resizable-resizing");this._propagate("start",event);return true},_mouseDrag:function(event){var el=this.helper,o=this.options,props={},that=this,smp=this.originalMousePosition,a=this.axis;var dx=event.pageX-smp.left||0,dy=event.pageY-smp.top||0;var trigger=this._change[a];if(!trigger)return false;var data=trigger.apply(this,[event,dx,dy]);this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey)data=this._updateRatio(data,event);data=this._respectSize(data,event);this._propagate("resize",event);el.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length)this._proportionallyResize();this._updateCache(data);this._trigger("resize",event,this.ui());return false},_mouseStop:function(event){this.resizing=false;var o=this.options,that=this;if(this._helper){var pr=this._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width;var s={width:that.helper.width()-soffsetw,height:that.helper.height()-soffseth},left=parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left)||null,top=parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top)||null;if(!o.animate)this.element.css($.extend(s,{top:top,left:left}));that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate)this._proportionallyResize()}$("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper)this.helper.remove();return false},_updateVirtualBoundaries:function(forceAspectRatio){var o=this.options,pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b;b={minWidth:isNumber(o.minWidth)?o.minWidth:0,maxWidth:isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:isNumber(o.minHeight)?o.minHeight:0,maxHeight:isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth)b.minWidth=pMinWidth;if(pMinHeight>b.minHeight)b.minHeight=pMinHeight;if(pMaxWidth<b.maxWidth)b.maxWidth=pMaxWidth;if(pMaxHeight<b.maxHeight)b.maxHeight=pMaxHeight}this._vBoundaries=b},_updateCache:function(data){var o=this.options;this.offset=this.helper.offset();if(isNumber(data.left))this.position.left=data.left;if(isNumber(data.top))this.position.top=data.top;if(isNumber(data.height))this.size.height=data.height;if(isNumber(data.width))this.size.width=data.width},_updateRatio:function(data,event){var o=this.options,cpos=this.position,csize=this.size,a=this.axis;if(isNumber(data.height))data.width=data.height*this.aspectRatio;else if(isNumber(data.width))data.height=data.width/this.aspectRatio;if(a=="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null}if(a=="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width)}return data},_respectSize:function(data,event){var el=this.helper,o=this._vBoundaries,pRatio=this._aspectRatio||event.shiftKey,a=this.axis,ismaxw=isNumber(data.width)&&o.maxWidth&&o.maxWidth<data.width,ismaxh=isNumber(data.height)&&o.maxHeight&&o.maxHeight<data.height,isminw=isNumber(data.width)&&o.minWidth&&o.minWidth>data.width,isminh=isNumber(data.height)&&o.minHeight&&o.minHeight>data.height;if(isminw)data.width=o.minWidth;if(isminh)data.height=o.minHeight;if(ismaxw)data.width=o.maxWidth;if(ismaxh)data.height=o.maxHeight;var dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height;var cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw&&cw)data.left=dw-o.minWidth;if(ismaxw&&cw)data.left=dw-o.maxWidth;if(isminh&&ch)data.top=dh-o.minHeight;if(ismaxh&&ch)data.top=dh-o.maxHeight;var isNotwh=!data.width&&!data.height;if(isNotwh&&!data.left&&data.top)data.top=null;else if(isNotwh&&!data.top&&data.left)data.left=null;return data},_proportionallyResize:function(){var o=this.options;if(!this._proportionallyResizeElements.length)return;var element=this.helper||this.element;for(var i=0;i<this._proportionallyResizeElements.length;i++){var prel=this._proportionallyResizeElements[i];if(!this.borderDif){var b=[prel.css("borderTopWidth"),prel.css("borderRightWidth"),prel.css("borderBottomWidth"),prel.css("borderLeftWidth")],p=[prel.css("paddingTop"),prel.css("paddingRight"),prel.css("paddingBottom"),prel.css("paddingLeft")];this.borderDif=$.map(b,function(v,i){var border=parseInt(v,10)||0,padding=parseInt(p[i],10)||0;return border+padding})}prel.css({height:element.height()-this.borderDif[0]-this.borderDif[2]||0,width:element.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$('<div style="overflow:hidden;"></div>');var ie6offset=$.ui.ie6?1:0,pxyoffset=$.ui.ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+pxyoffset,height:this.element.outerHeight()+pxyoffset,position:"absolute",left:this.elementOffset.left-ie6offset+"px",top:this.elementOffset.top-ie6offset+"px",zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(event,dx,dy){return{width:this.originalSize.width+dx}},w:function(event,dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx}},n:function(event,dx,dy){var o=this.options,cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy}},s:function(event,dx,dy){return{height:this.originalSize.height+dy}},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]))},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]))}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);n!="resize"&&this._trigger(n,event,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});$.ui.plugin.add("resizable","alsoResize",{start:function(event,ui){var that=$(this).data("resizable"),o=that.options;var _store=function(exp){$(exp).each(function(){var el=$(this);el.data("resizable-alsoresize",{width:parseInt(el.width(),10),height:parseInt(el.height(),10),left:parseInt(el.css("left"),10),top:parseInt(el.css("top"),10)})})};if(typeof o.alsoResize=="object"&&!o.alsoResize.parentNode){if(o.alsoResize.length){o.alsoResize=o.alsoResize[0];_store(o.alsoResize)}else{$.each(o.alsoResize,function(exp){_store(exp)})}}else{_store(o.alsoResize)}},resize:function(event,ui){var that=$(this).data("resizable"),o=that.options,os=that.originalSize,op=that.originalPosition;var delta={height:that.size.height-os.height||0,width:that.size.width-os.width||0,top:that.position.top-op.top||0,left:that.position.left-op.left||0},_alsoResize=function(exp,c){$(exp).each(function(){var el=$(this),start=$(this).data("resizable-alsoresize"),style={},css=c&&c.length?c:el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0)style[prop]=sum||null});el.css(style)})};if(typeof o.alsoResize=="object"&&!o.alsoResize.nodeType){$.each(o.alsoResize,function(exp,c){_alsoResize(exp,c)})}else{_alsoResize(o.alsoResize)}},stop:function(event,ui){$(this).removeData("resizable-alsoresize")}});$.ui.plugin.add("resizable","animate",{stop:function(event,ui){var that=$(this).data("resizable"),o=that.options;var pr=that._proportionallyResizeElements,ista=pr.length&&/textarea/i.test(pr[0].nodeName),soffseth=ista&&$.ui.hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width;var style={width:that.size.width-soffsetw,height:that.size.height-soffseth},left=parseInt(that.element.css("left"),10)+(that.position.left-that.originalPosition.left)||null,top=parseInt(that.element.css("top"),10)+(that.position.top-that.originalPosition.top)||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseInt(that.element.css("width"),10),height:parseInt(that.element.css("height"),10),top:parseInt(that.element.css("top"),10),left:parseInt(that.element.css("left"),10)};if(pr&&pr.length)$(pr[0]).css({width:data.width,height:data.height});that._updateCache(data);that._propagate("resize",event)}})}});$.ui.plugin.add("resizable","containment",{start:function(event,ui){var that=$(this).data("resizable"),o=that.options,el=that.element;var oc=o.containment,ce=oc instanceof $?oc.get(0):/parent/.test(oc)?el.parent().get(0):oc;if(!ce)return;that.containerElement=$(ce);if(/document/.test(oc)||oc==document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight}}else{var element=$(ce),p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=num(element.css("padding"+name))});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:element.innerHeight()-p[3],width:element.innerWidth()-p[1]};var co=that.containerOffset,ch=that.containerSize.height,cw=that.containerSize.width,width=$.ui.hasScroll(ce,"left")?ce.scrollWidth:cw,height=$.ui.hasScroll(ce)?ce.scrollHeight:ch;that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height}}},resize:function(event,ui){var that=$(this).data("resizable"),o=that.options,ps=that.containerSize,co=that.containerOffset,cs=that.size,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement;if(ce[0]!=document&&/static/.test(ce.css("position")))cop=co;if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+(that._helper?that.position.left-co.left:that.position.left-cop.left);if(pRatio)that.size.height=that.size.width/that.aspectRatio;that.position.left=o.helper?co.left:0}if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+(that._helper?that.position.top-co.top:that.position.top);if(pRatio)that.size.width=that.size.height*that.aspectRatio;that.position.top=that._helper?co.top:0}that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top;var woset=Math.abs((that._helper?that.offset.left-cop.left:that.offset.left-cop.left)+that.sizeDiff.width),hoset=Math.abs((that._helper?that.offset.top-cop.top:that.offset.top-co.top)+that.sizeDiff.height);var isParent=that.containerElement.get(0)==that.element.parent().get(0),isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative)woset-=that.parentData.left;if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio)that.size.height=that.size.width/that.aspectRatio}if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio)that.size.width=that.size.height*that.aspectRatio}},stop:function(event,ui){var that=$(this).data("resizable"),o=that.options,cp=that.position,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement;var helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&/relative/.test(ce.css("position")))$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});if(that._helper&&!o.animate&&/static/.test(ce.css("position")))$(this).css({left:ho.left-cop.left-co.left,width:w,height:h})}});$.ui.plugin.add("resizable","ghost",{start:function(event,ui){var that=$(this).data("resizable"),o=that.options,cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof o.ghost=="string"?o.ghost:"");that.ghost.appendTo(that.helper)},resize:function(event,ui){var that=$(this).data("resizable"),o=that.options;if(that.ghost)that.ghost.css({position:"relative",height:that.size.height,width:that.size.width})},stop:function(event,ui){var that=$(this).data("resizable"),o=that.options;if(that.ghost&&that.helper)that.helper.get(0).removeChild(that.ghost.get(0))}});$.ui.plugin.add("resizable","grid",{resize:function(event,ui){var that=$(this).data("resizable"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,ratio=o._aspectRatio||event.shiftKey;o.grid=typeof o.grid=="number"?[o.grid,o.grid]:o.grid;var ox=Math.round((cs.width-os.width)/(o.grid[0]||1))*(o.grid[0]||1),oy=Math.round((cs.height-os.height)/(o.grid[1]||1))*(o.grid[1]||1);if(/^(se|s|e)$/.test(a)){that.size.width=os.width+ox;that.size.height=os.height+oy}else if(/^(ne)$/.test(a)){that.size.width=os.width+ox;that.size.height=os.height+oy;that.position.top=op.top-oy}else if(/^(sw)$/.test(a)){that.size.width=os.width+ox;that.size.height=os.height+oy;that.position.left=op.left-ox}else{that.size.width=os.width+ox;that.size.height=os.height+oy;that.position.top=op.top-oy;that.position.left=op.left-ox}}});var num=function(v){return parseInt(v,10)||0};var isNumber=function(value){return!isNaN(parseInt(value,10))}})(jQuery);(function($,undefined){$.widget("ui.selectable",$.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var that=this;this.element.addClass("ui-selectable");this.dragged=false;var selectees;this.refresh=function(){selectees=$(that.options.filter,that.element[0]);selectees.addClass("ui-selectee");selectees.each(function(){var $this=$(this);var pos=$this.offset();$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")})})};this.refresh();this.selectees=selectees.addClass("ui-selectee");this._mouseInit();this.helper=$("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(event){var that=this;this.opos=[event.pageX,event.pageY];if(this.options.disabled)return;var options=this.options;this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({left:event.clientX,top:event.clientY,width:0,height:0});if(options.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey&&!event.ctrlKey){selectee.$element.removeClass("ui-selected");selectee.selected=false;selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element})}});$(event.target).parents().andSelf().each(function(){var selectee=$.data(this,"selectable-item");if(selectee){var doSelect=!event.metaKey&&!event.ctrlKey||!selectee.$element.hasClass("ui-selected");selectee.$element.removeClass(doSelect?"ui-unselecting":"ui-selected").addClass(doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){that._trigger("selecting",event,{selecting:selectee.element})}else{that._trigger("unselecting",event,{unselecting:selectee.element})}return false}})},_mouseDrag:function(event){var that=this;this.dragged=true;if(this.options.disabled)return;var options=this.options;var x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){var tmp=x2;x2=x1;x1=tmp}if(y1>y2){var tmp=y2;y2=y1;y1=tmp}this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item");if(!selectee||selectee.element==that.element[0])return;var hit=false;if(options.tolerance=="touch"){hit=!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1)}else if(options.tolerance=="fit"){hit=selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2}if(hit){if(selectee.selected){selectee.$element.removeClass("ui-selected");selectee.selected=false}if(selectee.unselecting){selectee.$element.removeClass("ui-unselecting");selectee.unselecting=false}if(!selectee.selecting){selectee.$element.addClass("ui-selecting");selectee.selecting=true;that._trigger("selecting",event,{selecting:selectee.element})}}else{if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){selectee.$element.removeClass("ui-selecting");selectee.selecting=false;selectee.$element.addClass("ui-selected");selectee.selected=true}else{selectee.$element.removeClass("ui-selecting");selectee.selecting=false;if(selectee.startselected){selectee.$element.addClass("ui-unselecting");selectee.unselecting=true}that._trigger("unselecting",event,{unselecting:selectee.element})}}if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){selectee.$element.removeClass("ui-selected");selectee.selected=false;selectee.$element.addClass("ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element})}}}});return false},_mouseStop:function(event){var that=this;this.dragged=false;var options=this.options;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-unselecting");selectee.unselecting=false;selectee.startselected=false;that._trigger("unselected",event,{unselected:selectee.element})});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");selectee.$element.removeClass("ui-selecting").addClass("ui-selected");selectee.selecting=false;selectee.selected=true;selectee.startselected=true;that._trigger("selected",event,{selected:selectee.element})});this._trigger("stop",event);this.helper.remove();return false}})})(jQuery);(function($,undefined){$.widget("ui.sortable",$.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var o=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?o.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--)this.items[i].item.removeData(this.widgetName+"-item");return this},_setOption:function(key,value){if(key==="disabled"){this.options[key]=value;this.widget().toggleClass("ui-sortable-disabled",!!value)}else{$.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(event,overrideHandle){var that=this;if(this.reverting){return false}if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(event);var currentItem=null,nodes=$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")==that){currentItem=$(this);return false}});if($.data(event.target,that.widgetName+"-item")==that)currentItem=$(event.target);if(!currentItem)return false;if(this.options.handle&&!overrideHandle){var validHandle=false;$(this.options.handle,currentItem).find("*").andSelf().each(function(){if(this==event.target)validHandle=true});if(!validHandle)return false}this.currentItem=currentItem;this._removeCurrentsFromItems();return true},_mouseStart:function(event,overrideHandle,noActivation){var o=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(o.containment)this._setContainment();if(o.cursor){if($("body").css("cursor"))this._storedCursor=$("body").css("cursor");$("body").css("cursor",o.cursor)}if(o.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",o.opacity)}if(o.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",o.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions)this._cacheHelperProportions();if(!noActivation){for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this))}}if($.ui.ddmanager)$.ui.ddmanager.current=this;if($.ui.ddmanager&&!o.dropBehaviour)$.ui.ddmanager.prepareOffsets(this,event);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(event);return true},_mouseDrag:function(event){this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var o=this.options,scrolled=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-event.pageY<o.scrollSensitivity)this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity)this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-event.pageX<o.scrollSensitivity)this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity)this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed}else{if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed)}if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)$.ui.ddmanager.prepareOffsets(this,event)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var i=this.items.length-1;i>=0;i--){var item=this.items[i],itemElement=item.item[0],intersection=this._intersectsWithPointer(item);if(!intersection)continue;if(item.instance!==this.currentContainer)continue;if(itemElement!=this.currentItem[0]&&this.placeholder[intersection==1?"next":"prev"]()[0]!=itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type=="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item)}else{break}this._trigger("change",event,this._uiHash());break}}this._contactContainers(event);if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(event,noPropagation){if(!event)return;if($.ui.ddmanager&&!this.options.dropBehaviour)$.ui.ddmanager.drop(this,event);if(this.options.revert){var that=this;var cur=this.placeholder.offset();this.reverting=true;$(this.helper).animate({left:cur.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:cur.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){that._clear(event)})}else{this._clear(event,noPropagation)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original")this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");else this.currentItem.show();for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode)this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode)this.helper.remove();$.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem)}else{$(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected);var str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||/(.+)[-=_](.+)/);if(res)str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]))});if(!str.length&&o.key){str.push(o.key+"=")}return str.join("&")},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected);var ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"")});return ret},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height;var l=item.left,r=l+item.width,t=item.top,b=t+item.height;var dyClick=this.offset.click.top,dxClick=this.offset.click.left;var isOverElement=y1+dyClick>t&&y1+dyClick<b&&x1+dxClick>l&&x1+dxClick<r;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"]){return isOverElement}else{return l<x1+this.helperProportions.width/2&&x2-this.helperProportions.width/2<r&&t<y1+this.helperProportions.height/2&&y2-this.helperProportions.height/2<b}},_intersectsWithPointer:function(item){var isOverElementHeight=this.options.axis==="x"||$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=this.options.axis==="y"||$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth,verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(!isOverElement)return false;return this.floating?horizontalDirection&&horizontalDirection=="right"||verticalDirection=="down"?2:1:verticalDirection&&(verticalDirection=="down"?2:1)},_intersectsWithSides:function(item){var isOverBottomHalf=$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+item.height/2,item.height),isOverRightHalf=$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+item.width/2,item.width),verticalDirection=this._getDragVerticalDirection(),horizontalDirection=this._getDragHorizontalDirection();if(this.floating&&horizontalDirection){return horizontalDirection=="right"&&isOverRightHalf||horizontalDirection=="left"&&!isOverRightHalf}else{return verticalDirection&&(verticalDirection=="down"&&isOverBottomHalf||verticalDirection=="up"&&!isOverBottomHalf)}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!=0&&(delta>0?"down":"up")},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!=0&&(delta>0?"right":"left")},refresh:function(event){this._refreshItems(event);this.refreshPositions();return this},_connectWith:function(){var options=this.options;return options.connectWith.constructor==String?[options.connectWith]:options.connectWith},_getItemsAsjQuery:function(connected){var items=[];var queries=[];var connectWith=this._connectWith();if(connectWith&&connected){for(var i=connectWith.length-1;i>=0;i--){var cur=$(connectWith[i]);for(var j=cur.length-1;j>=0;j--){var inst=$.data(cur[j],this.widgetName);if(inst&&inst!=this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst])}}}}queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var i=queries.length-1;i>=0;i--){queries[i][0].each(function(){items.push(this)})}return $(items)},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]==item.item[0])return false}return true})},_refreshItems:function(event){this.items=[];this.containers=[this];var items=this.items;var queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]];var connectWith=this._connectWith();if(connectWith&&this.ready){for(var i=connectWith.length-1;i>=0;i--){var cur=$(connectWith[i]);for(var j=cur.length-1;j>=0;j--){var inst=$.data(cur[j],this.widgetName);if(inst&&inst!=this&&!inst.options.disabled){queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst)}}}}for(var i=queries.length-1;i>=0;i--){var targetData=queries[i][1];var _queries=queries[i][0];for(var j=0,queriesLength=_queries.length;j<queriesLength;j++){var item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0})}}},refreshPositions:function(fast){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var i=this.items.length-1;i>=0;i--){var item=this.items[i];if(item.instance!=this.currentContainer&&this.currentContainer&&item.item[0]!=this.currentItem[0])continue;var t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight()}var p=t.offset();item.left=p.left;item.top=p.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var i=this.containers.length-1;i>=0;i--){var p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight()}}return this},_createPlaceholder:function(that){that=that||this;var o=that.options;if(!o.placeholder||o.placeholder.constructor==String){var className=o.placeholder;o.placeholder={element:function(){var el=$(document.createElement(that.currentItem[0].nodeName)).addClass(className||that.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!className)el.style.visibility="hidden";return el},update:function(container,p){if(className&&!o.forcePlaceholderSize)return;if(!p.height()){p.height(that.currentItem.innerHeight()-parseInt(that.currentItem.css("paddingTop")||0,10)-parseInt(that.currentItem.css("paddingBottom")||0,10))}if(!p.width()){p.width(that.currentItem.innerWidth()-parseInt(that.currentItem.css("paddingLeft")||0,10)-parseInt(that.currentItem.css("paddingRight")||0,10))}}}}that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder)},_contactContainers:function(event){var innermostContainer=null,innermostIndex=null;for(var i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0]))continue;if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0]))continue;innermostContainer=this.containers[i];innermostIndex=i}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0}}}if(!innermostContainer)return;if(this.containers.length===1){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1}else{var dist=1e4;var itemWithLeastDistance=null;var posProperty=this.containers[innermostIndex].floating?"left":"top";var sizeProperty=this.containers[innermostIndex].floating?"width":"height";var base=this.positionAbs[posProperty]+this.offset.click[posProperty];for(var j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0]))continue;if(this.items[j].item[0]==this.currentItem[0])continue;var cur=this.items[j].item.offset()[posProperty];var nearBottom=false;if(Math.abs(cur-base)>Math.abs(cur+this.items[j][sizeProperty]-base)){nearBottom=true;cur+=this.items[j][sizeProperty]}if(Math.abs(cur-base)<dist){dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down"}}if(!itemWithLeastDistance&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[innermostIndex];itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1}},_createHelper:function(event){var o=this.options;var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):o.helper=="clone"?this.currentItem.clone():this.currentItem;if(!helper.parents("body").length)$(o.appendTo!="parent"?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);if(helper[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(helper[0].style.width==""||o.forceHelperSize)helper.width(this.currentItem.width());if(helper[0].style.height==""||o.forceHelperSize)helper.height(this.currentItem.height());return helper},_adjustOffsetFromHelper:function(obj){if(typeof obj=="string"){obj=obj.split(" ")}if($.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0}}if("left"in obj){this.offset.click.left=obj.left+this.margins.left}if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left}if("top"in obj){this.offset.click.top=obj.top+this.margins.top}if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&$.ui.ie)po={top:0,left:0};return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var o=this.options;if(o.containment=="parent")o.containment=this.helper[0].parentNode;if(o.containment=="document"||o.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,$(o.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,($(o.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(o.containment)){var ce=$(o.containment)[0];var co=$(o.containment).offset();var over=$(ce).css("overflow")!="hidden";this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,pos){if(!pos)pos=this.position;var mod=d=="absolute"?1:-1;var o=this.options,scroll=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);return{top:pos.top+this.offset.relative.top*mod+this.offset.parent.top*mod-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop())*mod,left:pos.left+this.offset.relative.left*mod+this.offset.parent.left*mod-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod}},_generatePosition:function(event){var o=this.options,scroll=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=/(html|body)/i.test(scroll[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var pageX=event.pageX;var pageY=event.pageY;if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0])pageX=this.containment[0]+this.offset.click.left;if(event.pageY-this.offset.click.top<this.containment[1])pageY=this.containment[1]+this.offset.click.top;if(event.pageX-this.offset.click.left>this.containment[2])pageX=this.containment[2]+this.offset.click.left;if(event.pageY-this.offset.click.top>this.containment[3])pageY=this.containment[3]+this.offset.click.top}if(o.grid){var top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?!(top-this.offset.click.top<this.containment[1]||top-this.offset.click.top>this.containment[3])?top:!(top-this.offset.click.top<this.containment[1])?top-o.grid[1]:top+o.grid[1]:top;var left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?!(left-this.offset.click.left<this.containment[0]||left-this.offset.click.left>this.containment[2])?left:!(left-this.offset.click.left<this.containment[0])?left-o.grid[0]:left+o.grid[0]:left}}return{top:pageY-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():scrollIsRootNode?0:scroll.scrollTop()),left:pageX-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())}},_rearrange:function(event,i,a,hardRefresh){a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?i.item[0]:i.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter==this.counter)this.refreshPositions(!hardRefresh)})},_clear:function(event,noPropagation){this.reverting=false;var delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length)this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS){if(this._storedCSS[i]=="auto"||this._storedCSS[i]=="static")this._storedCSS[i]=""}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!noPropagation)delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!noPropagation)delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash())});if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash())});delayedTriggers.push(function(c){return function(event){c._trigger("receive",event,this._uiHash(this))}}.call(this,this.currentContainer));delayedTriggers.push(function(c){return function(event){c._trigger("update",event,this._uiHash(this))}}.call(this,this.currentContainer))}}for(var i=this.containers.length-1;i>=0;i--){if(!noPropagation)delayedTriggers.push(function(c){return function(event){c._trigger("deactivate",event,this._uiHash(this))}}.call(this,this.containers[i]));if(this.containers[i].containerCache.over){delayedTriggers.push(function(c){return function(event){c._trigger("out",event,this._uiHash(this))}}.call(this,this.containers[i]));this.containers[i].containerCache.over=0}}if(this._storedCursor)$("body").css("cursor",this._storedCursor);if(this._storedOpacity)this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event)}this._trigger("stop",event,this._uiHash())}this.fromOutside=false;return false}if(!noPropagation)this._trigger("beforeStop",event,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0])this.helper.remove();this.helper=null;if(!noPropagation){for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event)}this._trigger("stop",event,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null}}})})(jQuery);jQuery.effects||function($,undefined){var backCompat=$.uiBackCompat!==false,dataSpace="ui-effects-";$.effects={effect:{}};(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]]}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha)},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={byte:{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1}});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return allowEmpty||!prop.def?null:prop.def}value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def}if(type.mod){return(value+type.mod)%type.mod}return 0>value?0:type.max<value?type.max:value}function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return false}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent)}return inst}return colors[string]}color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this}if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined}var inst=this,type=jQuery.type(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array"}if(type==="string"){return this.parse(stringParse(red)||colors._default)}if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop)});return this}if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice()}})}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return}inst[cache]=space.to(inst._rgba)}inst[cache][prop.idx]=clamp(red[key],prop,true)});if(inst[cache]&&$.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache])}}})}return this}},is:function(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=isCache[prop.idx]===localCache[prop.idx];return same}})}return same});return same},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName)}});return used.pop()},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return}if(startValue===null){result[index]=endValue}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod}else if(startValue-endValue>type.mod/2){startValue-=type.mod}}result[index]=clamp((endValue-startValue)*distance+startValue,prop)}});return this[spaceName](result)},blend:function(opaque){if(this._rgba[3]===1){return this}var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v}))},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?i>2?1:0:v});if(rgba[3]===1){rgba.pop();prefix="rgb("}return prefix+rgba.join()+")"},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0}if(i&&i<3){v=Math.round(v*100)+"%"}return v});if(hsla[3]===1){hsla.pop();prefix="hsl("}return prefix+hsla.join()+")"},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255))}return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6}if(h*2<1){return q}if(h*3<2){return p+(q-p)*(2/3-h)*6}return p}spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]]}var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*.5,h,s;if(min===max){h=0}else if(r===max){h=60*(g-b)/diff+360}else if(g===max){h=60*(b-r)/diff+120}else{h=60*(r-g)/diff+240}if(l===0||l===1){s=l}else if(l<=.5){s=diff/add}else{s=diff/(2-add)}return[Math.round(h)%360,s,l,a==null?1:a]};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]]}var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+1/3)*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-1/3)*255),a]};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba)}if(value===undefined){return this[cache].slice()}var ret,type=jQuery.type(value),arr=type==="array"||type==="object"?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx]}local[prop.idx]=clamp(val,prop)});if(from){ret=color(from(local));ret[cache]=local;return ret}else{return color(local)}};each(props,function(key,prop){if(color.fn[key]){return}color.fn[key]=function(value){var vtype=jQuery.type(value),fn=key==="alpha"?this._hsla?"hsla":"rgba":spaceName,local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur}if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value)}if(value==null&&prop.empty){return this}if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1)}}local[prop.idx]=value;return this[fn](local)}})});each(stepHooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(jQuery.type(value)!=="string"||(parsed=stringParse(value))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode}catch(e){}}value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default")}value=value.toRgbaString()}try{elem.style[hook]=value}catch(error){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=true}jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos))}});jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value});return expanded}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=true}}});function getElementStyles(){var style=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,newStyle={},key,len;if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){newStyle[$.camelCase(key)]=style[key]}}}else{for(key in style){if(typeof style[key]==="string"){newStyle[key]=style[key]}}}return newStyle}function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value}}}}return diff}$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").andSelf():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles.call(this)}});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action])}})};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles.call(this.el[0]);this.diff=styleDifference(this.start,this.end);return this});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=jQuery.extend({},o,{queue:false,complete:function(){dfd.resolve(styleInfo)}});this.el.animate(this.diff,opts);return dfd.promise()});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"")})});o.complete.call(animated[0])})})};$.fn.extend({_addClass:$.fn.addClass,addClass:function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):this._addClass(classNames)},_removeClass:$.fn.removeClass,removeClass:function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):this._removeClass(classNames)},_toggleClass:$.fn.toggleClass,toggleClass:function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return this._toggleClass(classNames,force)}else{return $.effects.animateClass.call(this,force?{add:classNames}:{remove:classNames},speed,easing,callback)}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing)}},switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback)}})})();(function(){$.extend($.effects,{version:"1.9.2",save:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]])}}},restore:function(element,set){var val,i;for(i=0;i<set.length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);if(val===undefined){val=""}element.css(set[i],val)}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide"}return mode},getBaseline:function(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height}switch(origin[1]){case"left":x=0;break;case"center":x=.5;break;case"right":x=1;break;default:x=origin[1]/original.width}return{x:x,y:y}},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent()}var props={width:element.outerWidth(true),height:element.outerHeight(true),float:element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id}catch(e){active=document.body}element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).focus()}wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"})}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto"}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}element.css(size);return wrapper.css(props).show()},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).focus()}}return element},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1]}});return value}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect}effect={effect:effect};if(options==null){options={}}if($.isFunction(options)){callback=options;speed=null;options={}}if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={}}if($.isFunction(speed)){callback=speed;speed=null}if(options){$.extend(effect,options)}speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect}function standardSpeed(speed){if(!speed||typeof speed==="number"||$.fx.speeds[speed]){return true}if(typeof speed==="string"&&!$.effects.effect[speed]){if(backCompat&&$.effects[speed]){return false}return true}return false}$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.effects.effect[args.effect],oldEffectMethod=!effectMethod&&backCompat&&$.effects[args.effect];if($.fx.off||!(effectMethod||oldEffectMethod)){if(mode){return this[mode](args.duration,args.complete)}else{return this.each(function(){if(args.complete){args.complete.call(this)}})}}function run(next){var elem=$(this),complete=args.complete,mode=args.mode;function done(){if($.isFunction(complete)){complete.call(elem[0])}if($.isFunction(next)){next()}}if(elem.is(":hidden")?mode==="hide":mode==="show"){done()}else{effectMethod.call(elem[0],args,done)}}if(effectMethod){return queue===false?this.each(run):this.queue(queue||"fx",run)}else{return oldEffectMethod.call(this,{options:args,duration:args.duration,callback:args.complete,mode:args.mode})}},_show:$.fn.show,show:function(speed){if(standardSpeed(speed)){return this._show.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args)}},_hide:$.fn.hide,hide:function(speed){if(standardSpeed(speed)){return this._hide.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args)}},__toggle:$.fn.toggle,toggle:function(speed){if(standardSpeed(speed)||typeof speed==="boolean"||$.isFunction(speed)){return this.__toggle.apply(this,arguments)}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args)}},cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit]}});return val}})})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2)}});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2)}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p)};$.easing["easeInOut"+name]=function(p){return p<.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2}})})()}(jQuery);(function($,undefined){var uid=0,hideProps={},showProps={};hideProps.height=hideProps.paddingTop=hideProps.paddingBottom=hideProps.borderTopWidth=hideProps.borderBottomWidth="hide";showProps.height=showProps.paddingTop=showProps.paddingBottom=showProps.borderTopWidth=showProps.borderBottomWidth="show";$.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var accordionId=this.accordionId="ui-accordion-"+(this.element.attr("id")||++uid),options=this.options;this.prevShow=this.prevHide=$();this.element.addClass("ui-accordion ui-widget ui-helper-reset");this.headers=this.element.find(options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this._hoverable(this.headers);this._focusable(this.headers);this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();if(!options.collapsible&&(options.active===false||options.active==null)){options.active=0}if(options.active<0){options.active+=this.headers.length}this.active=this._findActive(options.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");this.active.next().addClass("ui-accordion-content-active").show();this._createIcons();this.refresh();this.element.attr("role","tablist");this.headers.attr("role","tab").each(function(i){var header=$(this),headerId=header.attr("id"),panel=header.next(),panelId=panel.attr("id");if(!headerId){headerId=accordionId+"-header-"+i;header.attr("id",headerId)}if(!panelId){panelId=accordionId+"-panel-"+i;panel.attr("id",panelId)}header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})}this._on(this.headers,{keydown:"_keydown"});this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._setupEvents(options.event)},_getCreateEventData:function(){return{header:this.active,content:!this.active.length?$():this.active.next()}},_createIcons:function(){var icons=this.options.icons;if(icons){$("<span>").addClass("ui-accordion-header-icon ui-icon "+icons.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(icons.header).addClass(icons.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var contents;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});this._destroyIcons();contents=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});if(this.options.heightStyle!=="content"){contents.css("height","")}},_setOption:function(key,value){if(key==="active"){this._activate(value);return}if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event)}this._setupEvents(value)}this._super(key,value);if(key==="collapsible"&&!value&&this.options.active===false){this._activate(0)}if(key==="icons"){this._destroyIcons();if(value){this._createIcons()}}if(key==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!value)}},_keydown:function(event){if(event.altKey||event.ctrlKey){return}var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break}if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);toFocus.focus();event.preventDefault()}},_panelKeyDown:function(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().focus()}},refresh:function(){var maxHeight,overflow,heightStyle=this.options.heightStyle,parent=this.element.parent();if(heightStyle==="fill"){if(!$.support.minHeight){overflow=parent.css("overflow");parent.css("overflow","hidden")}maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return}maxHeight-=elem.outerHeight(true)});if(overflow){parent.css("overflow",overflow)}this.headers.each(function(){maxHeight-=$(this).outerHeight(true)});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){maxHeight=Math.max(maxHeight,$(this).css("height","").height())}).height(maxHeight)}},_activate:function(index){var active=this._findActive(index)[0];if(active===this.active[0]){return}active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop})},_findActive:function(selector){return typeof selector==="number"?this.headers.eq(selector):$()},_setupEvents:function(event){var events={};if(!event){return}$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"});this._on(this.headers,events)},_eventHandler:function(event){var options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if(clickedIsActive&&!options.collapsible||this._trigger("beforeActivate",event,eventData)===false){return}options.active=collapsing?false:this.headers.index(clicked);this.active=clickedIsActive?$():clicked;this._toggle(eventData);active.removeClass("ui-accordion-header-active ui-state-active");if(options.icons){active.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header)}if(!clickedIsActive){clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(options.icons){clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader)}clicked.next().addClass("ui-accordion-content-active")}},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data)}else{toHide.hide();toShow.show();this._toggleComplete(data)}toHide.attr({"aria-expanded":"false","aria-hidden":"true"});toHide.prev().attr("aria-selected","false");if(toShow.length&&toHide.length){toHide.prev().attr("tabIndex",-1)}else if(toShow.length){this.headers.filter(function(){return $(this).attr("tabIndex")===0}).attr("tabIndex",-1)}toShow.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,down=toShow.length&&(!toHide.length||toShow.index()<toHide.index()),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function(){that._toggleComplete(data)};if(typeof options==="number"){duration=options}if(typeof options==="string"){easing=options}easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(showProps,duration,easing,complete)}if(!toShow.length){return toHide.animate(hideProps,duration,easing,complete)}total=toShow.show().outerHeight();toHide.animate(hideProps,{duration:duration,easing:easing,step:function(now,fx){fx.now=Math.round(now)}});toShow.hide().animate(showProps,{duration:duration,easing:easing,complete:complete,step:function(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){adjust+=fx.now}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0}}})},_toggleComplete:function(data){var toHide=data.oldPanel;toHide.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className}this._trigger("activate",null,data)}});if($.uiBackCompat!==false){(function($,prototype){$.extend(prototype.options,{navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var _create=prototype._create;prototype._create=function(){if(this.options.navigation){var that=this,headers=this.element.find(this.options.header),content=headers.next(),current=headers.add(content).find("a").filter(this.options.navigationFilter)[0];if(current){headers.add(content).each(function(index){if($.contains(this,current)){that.options.active=Math.floor(index/2);return false}})}}_create.call(this)}})(jQuery,jQuery.ui.accordion.prototype);(function($,prototype){$.extend(prototype.options,{heightStyle:null,autoHeight:true,clearStyle:false,fillSpace:false});var _create=prototype._create,_setOption=prototype._setOption;$.extend(prototype,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle();_create.call(this)},_setOption:function(key){if(key==="autoHeight"||key==="clearStyle"||key==="fillSpace"){this.options.heightStyle=this._mergeHeightStyle()}_setOption.apply(this,arguments)},_mergeHeightStyle:function(){var options=this.options;if(options.fillSpace){return"fill"}if(options.clearStyle){return"content"}if(options.autoHeight){return"auto"}}})})(jQuery,jQuery.ui.accordion.prototype);(function($,prototype){$.extend(prototype.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var _createIcons=prototype._createIcons;prototype._createIcons=function(){if(this.options.icons){this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected}_createIcons.call(this)}})(jQuery,jQuery.ui.accordion.prototype);(function($,prototype){prototype.activate=prototype._activate;var _findActive=prototype._findActive;prototype._findActive=function(index){if(index===-1){index=false}if(index&&typeof index!=="number"){index=this.headers.index(this.headers.filter(index));if(index===-1){index=false}}return _findActive.call(this,index)}})(jQuery,jQuery.ui.accordion.prototype);jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh;(function($,prototype){$.extend(prototype.options,{change:null,changestart:null});var _trigger=prototype._trigger;prototype._trigger=function(type,event,data){var ret=_trigger.apply(this,arguments);if(!ret){return false}if(type==="beforeActivate"){ret=_trigger.call(this,"changestart",event,{oldHeader:data.oldHeader,oldContent:data.oldPanel,newHeader:data.newHeader,newContent:data.newPanel})}else if(type==="activate"){ret=_trigger.call(this,"change",event,{oldHeader:data.oldHeader,oldContent:data.oldPanel,newHeader:data.newHeader,newContent:data.newPanel})}return ret}})(jQuery,jQuery.ui.accordion.prototype);(function($,prototype){$.extend(prototype.options,{animate:null,animated:"slide"});var _create=prototype._create;prototype._create=function(){var options=this.options;if(options.animate===null){if(!options.animated){options.animate=false}else if(options.animated==="slide"){options.animate=300}else if(options.animated==="bounceslide"){options.animate={duration:200,down:{easing:"easeOutBounce",duration:1e3}}}else{options.animate=options.animated}}_create.call(this)}})(jQuery,jQuery.ui.accordion.prototype)}})(jQuery);(function($,undefined){var requestIndex=0;$.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var suppressKeyPress,suppressKeyPressRepeat,suppressInput;this.isMultiLine=this._isMultiLine();this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(event){if(this.element.prop("readOnly")){suppressKeyPress=true;suppressInput=true;suppressKeyPressRepeat=true;return}suppressKeyPress=false;suppressInput=false;suppressKeyPressRepeat=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=true;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=true;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=true;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=true;this._keyEvent("next",event);break;case keyCode.ENTER:case keyCode.NUMPAD_ENTER:if(this.menu.active){suppressKeyPress=true;event.preventDefault();this.menu.select(event)}break;case keyCode.TAB:if(this.menu.active){this.menu.select(event)}break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(event);event.preventDefault()}break;default:suppressKeyPressRepeat=true;this._searchTimeout(event);break}},keypress:function(event){if(suppressKeyPress){suppressKeyPress=false;event.preventDefault();return}if(suppressKeyPressRepeat){return}var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break}},input:function(event){if(suppressInput){suppressInput=false;event.preventDefault();return}this._searchTimeout(event)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(event);this._change(event)}});this._initSource();this.menu=$("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:$(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu");this._on(this.menu.element,{mousedown:function(event){event.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur});var menuElement=this.menu.element[0];if(!$(event.target).closest(".ui-menu-item").length){this._delay(function(){var that=this;this.document.one("mousedown",function(event){if(event.target!==that.element[0]&&event.target!==menuElement&&!$.contains(menuElement,event.target)){that.close()}})})}},menufocus:function(event,ui){if(this.isNewMenu){this.isNewMenu=false;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent)});return}}var item=ui.item.data("ui-autocomplete-item")||ui.item.data("item.autocomplete");if(false!==this._trigger("focus",event,{item:item})){if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value)}}else{this.liveRegion.text(item.value)}},menuselect:function(event,ui){var item=ui.item.data("ui-autocomplete-item")||ui.item.data("item.autocomplete"),previous=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=previous;this._delay(function(){this.previous=previous;this.selectedItem=item})}if(false!==this._trigger("select",event,{item:item})){this._value(item.value)}this.term=this._value();this.close(event);this.selectedItem=item}});this.liveRegion=$("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);if($.fn.bgiframe){this.menu.element.bgiframe()}this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(key,value){this._super(key,value);if(key==="source"){this._initSource()}if(key==="appendTo"){this.menu.element.appendTo(this.document.find(value||"body")[0])}if(key==="disabled"&&value&&this.xhr){this.xhr.abort()}},_isMultiLine:function(){if(this.element.is("textarea")){return true}if(this.element.is("input")){return false}return this.element.prop("isContentEditable")},_initSource:function(){var array,url,that=this;if($.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term))}}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort()}that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function(data){response(data)},error:function(){response([])}})}}else{this.source=this.options.source}},_searchTimeout:function(event){clearTimeout(this.searching);this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;this.search(null,event)}},this.options.delay)},search:function(value,event){value=value!=null?value:this._value();this.term=this._value();if(value.length<this.options.minLength){return this.close(event)}if(this._trigger("search",event)===false){return}return this._search(value)},_search:function(value){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:value},this._response())},_response:function(){var that=this,index=++requestIndex;return function(content){if(index===requestIndex){that.__response(content)}that.pending--;if(!that.pending){that.element.removeClass("ui-autocomplete-loading")}}},__response:function(content){if(content){content=this._normalize(content)}this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open")}else{this._close()}},close:function(event){this.cancelSearch=true;this._close(event)},_close:function(event){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",event)}},_change:function(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem})}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items}return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item}}return $.extend({label:item.label||item.value,value:item.value||item.label},item)})},_suggest:function(items){var ul=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(ul,items);this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item)})},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item)},_renderItem:function(ul,item){return $("<li>").append($("<a>").text(item.label)).appendTo(ul)},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return}if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){this._value(this.term);this.menu.blur();return}this.menu[direction](event)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);event.preventDefault()}}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value)})}});$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}if(content&&content.length){message=this.options.messages.results(content.length)}else{message=this.options.messages.noResults}this.liveRegion.text(message)}})})(jQuery);(function($,undefined){var lastActive,startXPos,startYPos,clickDragged,baseClasses="ui-button ui-widget ui-state-default ui-corner-all",stateClasses="ui-state-hover ui-state-active ",typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",formResetHandler=function(){var buttons=$(this).find(":ui-button");setTimeout(function(){buttons.button("refresh")},1)},radioGroup=function(radio){var name=radio.name,form=radio.form,radios=$([]);if(name){if(form){radios=$(form).find("[name='"+name+"']")}else{radios=$("[name='"+name+"']",radio.ownerDocument).filter(function(){return!this.form})}}return radios};$.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,formResetHandler);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var that=this,options=this.options,toggleButton=this.type==="checkbox"||this.type==="radio",activeClass=!toggleButton?"ui-state-active":"",focusClass="ui-state-focus";if(options.label===null){options.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()}this._hoverable(this.buttonElement);this.buttonElement.addClass(baseClasses).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(options.disabled){return}if(this===lastActive){$(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(options.disabled){return}$(this).removeClass(activeClass)}).bind("click"+this.eventNamespace,function(event){if(options.disabled){event.preventDefault();event.stopImmediatePropagation()}});this.element.bind("focus"+this.eventNamespace,function(){that.buttonElement.addClass(focusClass)}).bind("blur"+this.eventNamespace,function(){that.buttonElement.removeClass(focusClass)});if(toggleButton){this.element.bind("change"+this.eventNamespace,function(){if(clickDragged){return}that.refresh()});this.buttonElement.bind("mousedown"+this.eventNamespace,function(event){if(options.disabled){return}clickDragged=false;startXPos=event.pageX;startYPos=event.pageY}).bind("mouseup"+this.eventNamespace,function(event){if(options.disabled){return}if(startXPos!==event.pageX||startYPos!==event.pageY){clickDragged=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false}$(this).toggleClass("ui-state-active");that.buttonElement.attr("aria-pressed",that.element[0].checked)})}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(options.disabled||clickDragged){return false}$(this).addClass("ui-state-active");that.buttonElement.attr("aria-pressed","true");var radio=that.element[0];radioGroup(radio).not(radio).map(function(){return $(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(options.disabled){return false}$(this).addClass("ui-state-active");lastActive=this;that.document.one("mouseup",function(){lastActive=null})}).bind("mouseup"+this.eventNamespace,function(){if(options.disabled){return false}$(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(event){if(options.disabled){return false}if(event.keyCode===$.ui.keyCode.SPACE||event.keyCode===$.ui.keyCode.ENTER){$(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace,function(){$(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(event){if(event.keyCode===$.ui.keyCode.SPACE){$(this).click()}})}}this._setOption("disabled",options.disabled);this._resetButton()},_determineButtonType:function(){var ancestor,labelSelector,checked;if(this.element.is("[type=checkbox]")){this.type="checkbox"}else if(this.element.is("[type=radio]")){this.type="radio"}else if(this.element.is("input")){this.type="input"}else{this.type="button"}if(this.type==="checkbox"||this.type==="radio"){ancestor=this.element.parents().last();labelSelector="label[for='"+this.element.attr("id")+"']";this.buttonElement=ancestor.find(labelSelector);if(!this.buttonElement.length){ancestor=ancestor.length?ancestor.siblings():this.element.siblings();this.buttonElement=ancestor.filter(labelSelector);if(!this.buttonElement.length){this.buttonElement=ancestor.find(labelSelector)}}this.element.addClass("ui-helper-hidden-accessible");checked=this.element.is(":checked");if(checked){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",checked)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(baseClasses+" "+stateClasses+" "+typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(key,value){this._super(key,value);if(key==="disabled"){if(value){this.element.prop("disabled",true)}else{this.element.prop("disabled",false)}return}this._resetButton()},refresh:function(){var isDisabled=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOption("disabled",isDisabled)}if(this.type==="radio"){radioGroup(this.element[0]).each(function(){if($(this).is(":checked")){$(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{$(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var buttonElement=this.buttonElement.removeClass(typeClasses),buttonText=$("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),icons=this.options.icons,multipleIcons=icons.primary&&icons.secondary,buttonClasses=[];if(icons.primary||icons.secondary){if(this.options.text){buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":icons.primary?"-primary":"-secondary"))}if(icons.primary){buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>")}if(icons.secondary){buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>")}if(!this.options.text){buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){buttonElement.attr("title",$.trim(buttonText))}}}else{buttonClasses.push("ui-button-text-only")}buttonElement.addClass(buttonClasses.join(" "))}});$.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(key,value){if(key==="disabled"){this.buttons.button("option",key,value)}this._super(key,value)},refresh:function(){var rtl=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(rtl?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return $(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function($,undefined){$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker";var dpuuid=(new Date).getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug)console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=nodeName=="div"||nodeName=="span";if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else if(inline){this._inlineDatepicker(target,inst)}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName))return;this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append)inst.append.remove();if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger)inst.trigger.remove();var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both")input.focus(this._showDatepicker);if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0])$.datepicker._hideDatepicker();else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else $.datepicker._showDatepicker(input[0]);return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,dateFormat.match(/MM/)?"monthNames":"monthNamesShort")));date.setDate(findMax(this._get(inst,dateFormat.match(/DD/)?"dayNames":"dayNamesShort"))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName))return;divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=date&&date.constructor==Date?this._formatDate(inst,date):date;this._dialogInput.val(date);this._pos=pos?pos.length?pos:[pos.pageX,pos.pageY]:null;if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[browserWidth/2-100+scrollX,browserHeight/2-150+scrollY]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI)$.blockUI(this.dpDiv);$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(nodeName=="div"||nodeName=="span")$target.removeClass(this.markerClassName).empty()},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}this._disabledInputs=$.map(this._disabledInputs,function(value){return value==target?null:value})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}this._disabledInputs=$.map(this._disabledInputs,function(value){return value==target?null:value});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target)return true}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return name=="defaults"?$.extend({},$.datepicker._defaults):inst?name=="all"?$.extend({},inst.settings):this._get(inst,name):null}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings["dateFormat"]!==undefined&&settings["minDate"]===undefined)inst.settings.minDate=this._formatDate(inst,minDate);if(maxDate!==null&&settings["dateFormat"]!==undefined&&settings["maxDate"]===undefined)inst.settings.maxDate=this._formatDate(inst,maxDate);this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline)this._setDateFromField(inst,noDefault);return inst?this._getDate(inst):null},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing)switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0])$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst])}else $.datepicker._hideDatepicker();return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");break;case 35:if(event.ctrlKey||event.metaKey)$.datepicker._clearDate(event.target);handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey)$.datepicker._gotoToday(event.target);handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,isRTL?+1:-1,"D");handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");break;case 38:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,-7,"D");handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,isRTL?-1:+1,"D");handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");break;case 40:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,+7,"D");handled=event.ctrlKey||event.metaKey;break;default:handled=false}else if(event.keyCode==36&&event.ctrlKey)$.datepicker._showDatepicker(this);else{handled=false}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),inst.input?inst.input.val():null,$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){$.datepicker.log(err)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input")input=$("input",input.parentNode)[0];if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input)return;var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return}extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog)input.value="";if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return!isFixed});var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":isFixed?"fixed":"absolute",display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim]))inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);else inst.dpDiv[showAnim||"show"](showAnim?duration:null,postProcess);if(!showAnim||!duration)postProcess();if(inst.input.is(":visible")&&!inst.input.is(":disabled"))inst.input.focus();$.datepicker._curInst=inst}},_updateDatepicker:function(inst){this.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1)inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",width*cols+"em");inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement)inst.input.focus();if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=this._get(inst,"isRTL")?dpWidth-inputWidth:0;offset.left-=isFixed&&offset.left==inst.input.offset().left?$(document).scrollLeft():0;offset.top-=isFixed&&offset.top==inst.input.offset().top+inputHeight?$(document).scrollTop():0;offset.left-=Math.min(offset.left,offset.left+dpWidth>viewWidth&&viewWidth>dpWidth?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,offset.top+dpHeight>viewHeight&&viewHeight>dpHeight?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||input&&inst!=$.data(input,PROP_NAME))return;if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim]))inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);else inst.dpDiv[showAnim=="slideDown"?"slideUp":showAnim=="fadeIn"?"fadeOut":"hide"](showAnim?duration:null,postProcess);if(!showAnim)postProcess();this._datepickerShowing=false;var onClose=this._get(inst,"onClose");if(onClose)onClose.apply(inst.input?inst.input[0]:null,[inst.input?inst.input.val():"",inst]);this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst)return;var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)||$target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)$.datepicker._hideDatepicker()},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date;inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=dateStr!=null?dateStr:this._formatDate(inst);if(inst.input)inst.input.val(dateStr);this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect)onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]);else if(inst.input)inst.input.trigger("change");if(inst.inline)this._updateDatepicker(inst);else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof inst.input[0]!="object")inst.input.focus();this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[day>0&&day<6,""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/864e5)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null)throw"Invalid arguments";value=typeof value=="object"?value.toString():value+"";if(value=="")return null;var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=typeof shortYearCutoff!="string"?shortYearCutoff:(new Date).getFullYear()%100+parseInt(shortYearCutoff,10);var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)==match;if(matches)iFormat++;return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=match=="@"?14:match=="!"?20:match=="y"&&isDoubled?4:match=="o"?3:2;var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num)throw"Missing number at position "+iValue;iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return-(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1)return index+1;else throw"Unknown name at position "+iValue};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat))throw"Unexpected literal at position "+iValue;iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)if(format.charAt(iFormat)=="'"&&!lookAhead("'"))literal=false;else checkLiteral();else switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/1e4);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'"))checkLiteral();else literal=true;break;default:checkLiteral()}}if(iValue<value.length){var extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra}}if(year==-1)year=(new Date).getFullYear();else if(year<100)year+=(new Date).getFullYear()-(new Date).getFullYear()%100+(year<=shortYearCutoff?0:-100);if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim)break;month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day)throw"Invalid date";return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*1e7,formatDate:function(format,date,settings){if(!date)return"";var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)==match;if(matches)iFormat++;return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match))while(num.length<len)num="0"+num;return num};var formatName=function(match,value,shortNames,longNames){return lookAhead(match)?longNames[value]:shortNames[value]};var output="";var literal=false;if(date)for(var iFormat=0;iFormat<format.length;iFormat++){if(literal)if(format.charAt(iFormat)=="'"&&!lookAhead("'"))literal=false;else output+=format.charAt(iFormat);else switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/864e5),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100;break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*1e4+this._ticksTo1970;break;case"'":if(lookAhead("'"))output+="'";else literal=true;break;default:output+=format.charAt(iFormat)}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)==match;if(matches)iFormat++;return matches};for(var iFormat=0;iFormat<format.length;iFormat++)if(literal)if(format.charAt(iFormat)=="'"&&!lookAhead("'"))literal=false;else chars+=format.charAt(iFormat);else switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'"))chars+="'";else literal=true;break;default:chars+=format.charAt(iFormat)}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return}var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=noDefault?"":dates}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=dates?date.getDate():0;inst.currentMonth=dates?date.getMonth():0;inst.currentYear=dates?date.getFullYear():0;this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date;date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date;var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=date==null||date===""?defaultDate:typeof date=="string"?offsetString(date):typeof date=="number"?isNaN(date)?defaultDate:offsetNumeric(date):new Date(date.getTime());newDate=newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate;if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date)return null;date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange)this._notifyChange(inst);this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=!inst.currentYear||inst.input&&inst.input.val()==""?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");var id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var today=new Date;today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=numMonths[0]!=1||numMonths[1]!=1;var currentDate=this._daylightSavingAdjust(!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[0]*numMonths[1]+1,maxDate.getDate()));maxDraw=minDate&&maxDraw<minDate?minDate:maxDraw;while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst));var prev=this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click"'+' title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>";var nextText=this._get(inst,"nextText");nextText=!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst));var next=this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"'+' title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>";var currentText=this._get(inst,"currentText");var gotoDate=this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today;currentText=!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst));var controls=!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"";var buttonPanel=showButtonPanel?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click"'+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=isNaN(firstDay)?0:firstDay;var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1)switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?isRTL?next:prev:"")+(/all|right/.test(cornerClass)&&row==0?isRTL?prev:next:"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var thead=showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"";for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth)inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows;this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>";for(var dow=0;dow<7;dow++){var daySettings=beforeShowDay?beforeShowDay.apply(inst.input?inst.input[0]:null,[printDate]):[true,""];var otherMonth=printDate.getMonth()!=drawMonth;var unselectable=otherMonth&&!selectOtherMonths||!daySettings[0]||minDate&&printDate<minDate||maxDate&&printDate>maxDate;tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+(printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent||defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime()?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>")+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+(numMonths[0]>0&&col==numMonths[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.ui.ie6&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth)monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>";else{var inMinYear=minDate&&minDate.getFullYear()==drawYear;var inMaxYear=maxDate&&maxDate.getFullYear()==drawYear;monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth()))monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}monthHtml+="</select>"}if(!showMonthAfterYear)html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear)html+='<span class="ui-datepicker-year">'+drawYear+"</span>";else{var years=this._get(inst,"yearRange").split(":");var thisYear=(new Date).getFullYear();var determineYear=function(value){var year=value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10);return isNaN(year)?thisYear:year};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=minDate?Math.max(year,minDate.getFullYear()):year;endYear=maxDate?Math.min(endYear,maxDate.getFullYear()):endYear;inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear)html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y")this._notifyChange(inst)},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=minDate&&date<minDate?minDate:date;newDate=maxDate&&newDate>maxDate?maxDate:newDate;return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange)onChange.apply(inst.input?inst.input[0]:null,[inst.selectedYear,inst.selectedMonth+1,inst])},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return numMonths==null?[1,1]:typeof numMonths=="number"?[1,numMonths]:numMonths},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0)date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return(!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=typeof shortYearCutoff!="string"?shortYearCutoff:(new Date).getFullYear()%100+parseInt(shortYearCutoff,10);return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=day?typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day)):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1)$(this).removeClass("ui-datepicker-prev-hover");if(this.className.indexOf("ui-datepicker-next")!=-1)$(this).removeClass("ui-datepicker-next-hover")}).delegate(selector,"mouseover",function(){if(!$.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1)$(this).addClass("ui-datepicker-prev-hover");if(this.className.indexOf("ui-datepicker-next")!=-1)$(this).addClass("ui-datepicker-next-hover")}})}function extendRemove(target,props){$.extend(target,props);for(var name in props)if(props[name]==null||props[name]==undefined)target[name]=props[name];return target}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget"))return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string")return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker;$.datepicker.initialized=false;$.datepicker.uuid=(new Date).getTime();$.datepicker.version="1.9.2";window["DP_jQuery_"+dpuuid]=$})(jQuery);(function($,undefined){var uiDialogClasses="ui-dialog ui-widget ui-widget-content ui-corner-all ",sizeRelatedOptions={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};$.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset)}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string"){this.originalTitle=""}this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.options.title=this.options.title||this.originalTitle;var that=this,options=this.options,title=options.title||"&#160;",uiDialog,uiDialogTitlebar,uiDialogTitlebarClose,uiDialogTitle,uiDialogButtonPane;uiDialog=(this.uiDialog=$("<div>")).addClass(uiDialogClasses+options.dialogClass).css({display:"none",outline:0,zIndex:options.zIndex}).attr("tabIndex",-1).keydown(function(event){if(options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){that.close(event);event.preventDefault()}}).mousedown(function(event){that.moveToTop(false,event)}).appendTo("body");this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(uiDialog);uiDialogTitlebar=(this.uiDialogTitlebar=$("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  "+"ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){uiDialog.focus()}).prependTo(uiDialog);uiDialogTitlebarClose=$("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(event){event.preventDefault();that.close(event)}).appendTo(uiDialogTitlebar);(this.uiDialogTitlebarCloseText=$("<span>")).addClass("ui-icon ui-icon-closethick").text(options.closeText).appendTo(uiDialogTitlebarClose);uiDialogTitle=$("<span>").uniqueId().addClass("ui-dialog-title").html(title).prependTo(uiDialogTitlebar);uiDialogButtonPane=(this.uiDialogButtonPane=$("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");(this.uiButtonSet=$("<div>")).addClass("ui-dialog-buttonset").appendTo(uiDialogButtonPane);uiDialog.attr({role:"dialog","aria-labelledby":uiDialogTitle.attr("id")});uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();this._hoverable(uiDialogTitlebarClose);this._focusable(uiDialogTitlebarClose);if(options.draggable&&$.fn.draggable){this._makeDraggable()}if(options.resizable&&$.fn.resizable){this._makeResizable()}this._createButtons(options.buttons);this._isOpen=false;if($.fn.bgiframe){uiDialog.bgiframe()}this._on(uiDialog,{keydown:function(event){if(!options.modal||event.keyCode!==$.ui.keyCode.TAB){return}var tabbables=$(":tabbable",uiDialog),first=tabbables.filter(":first"),last=tabbables.filter(":last");if(event.target===last[0]&&!event.shiftKey){first.focus(1);return false}else if(event.target===first[0]&&event.shiftKey){last.focus(1);return false}}})},_init:function(){if(this.options.autoOpen){this.open()}},_destroy:function(){var next,oldPosition=this.oldPosition;if(this.overlay){this.overlay.destroy()}this.uiDialog.hide();this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}next=oldPosition.parent.children().eq(oldPosition.index);if(next.length&&next[0]!==this.element[0]){next.before(this.element)}else{oldPosition.parent.append(this.element)}},widget:function(){return this.uiDialog},close:function(event){var that=this,maxZ,thisZ;if(!this._isOpen){return}if(false===this._trigger("beforeClose",event)){return}this._isOpen=false;if(this.overlay){this.overlay.destroy()}if(this.options.hide){this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event)})}else{this.uiDialog.hide();this._trigger("close",event)}$.ui.dialog.overlay.resize();if(this.options.modal){maxZ=0;$(".ui-dialog").each(function(){if(this!==that.uiDialog[0]){thisZ=$(this).css("z-index");if(!isNaN(thisZ)){maxZ=Math.max(maxZ,thisZ)}}});$.ui.dialog.maxZ=maxZ}return this},isOpen:function(){return this._isOpen},moveToTop:function(force,event){var options=this.options,saveScroll;if(options.modal&&!force||!options.stack&&!options.modal){return this._trigger("focus",event)}if(options.zIndex>$.ui.dialog.maxZ){$.ui.dialog.maxZ=options.zIndex}if(this.overlay){$.ui.dialog.maxZ+=1;$.ui.dialog.overlay.maxZ=$.ui.dialog.maxZ;this.overlay.$el.css("z-index",$.ui.dialog.overlay.maxZ)}saveScroll={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()};$.ui.dialog.maxZ+=1;this.uiDialog.css("z-index",$.ui.dialog.maxZ);this.element.attr(saveScroll);this._trigger("focus",event);return this},open:function(){if(this._isOpen){return}var hasFocus,options=this.options,uiDialog=this.uiDialog;this._size();this._position(options.position);uiDialog.show(options.show);this.overlay=options.modal?new $.ui.dialog.overlay(this):null;this.moveToTop(true);hasFocus=this.element.find(":tabbable");if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable");if(!hasFocus.length){hasFocus=uiDialog}}hasFocus.eq(0).focus();this._isOpen=true;this._trigger("open");return this},_createButtons:function(buttons){var that=this,hasButtons=false;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if(typeof buttons==="object"&&buttons!==null){$.each(buttons,function(){return!(hasButtons=true)})}if(hasButtons){$.each(buttons,function(name,props){var button,click;props=$.isFunction(props)?{click:props,text:name}:props;props=$.extend({type:"button"},props);click=props.click;props.click=function(){click.apply(that.element[0],arguments)};button=$("<button></button>",props).appendTo(that.uiButtonSet);if($.fn.button){button.button()}});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)}else{this.uiDialog.removeClass("ui-dialog-buttons")}},_makeDraggable:function(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){$(this).addClass("ui-dialog-dragging");that._trigger("dragStart",event,filteredUi(ui))},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui))},stop:function(event,ui){options.position=[ui.position.left-that.document.scrollLeft(),ui.position.top-that.document.scrollTop()];$(this).removeClass("ui-dialog-dragging");that._trigger("dragStop",event,filteredUi(ui));$.ui.dialog.overlay.resize()}})},_makeResizable:function(handles){handles=handles===undefined?this.options.resizable:handles;var that=this,options=this.options,position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){$(this).addClass("ui-dialog-resizing");that._trigger("resizeStart",event,filteredUi(ui))},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui))},stop:function(event,ui){$(this).removeClass("ui-dialog-resizing");options.height=$(this).height();options.width=$(this).width();that._trigger("resizeStop",event,filteredUi(ui));$.ui.dialog.overlay.resize()}}).css("position",position).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var options=this.options;if(options.height==="auto"){return options.minHeight}else{return Math.min(options.minHeight,options.height)}},_position:function(position){var myAt=[],offset=[0,0],isVisible;if(position){if(typeof position==="string"||typeof position==="object"&&"0"in position){myAt=position.split?position.split(" "):[position[0],position[1]];if(myAt.length===1){myAt[1]=myAt[0]}$.each(["left","top"],function(i,offsetPosition){if(+myAt[i]===myAt[i]){offset[i]=myAt[i];myAt[i]=offsetPosition}});position={my:myAt[0]+(offset[0]<0?offset[0]:"+"+offset[0])+" "+myAt[1]+(offset[1]<0?offset[1]:"+"+offset[1]),at:myAt.join(" ")}}position=$.extend({},$.ui.dialog.prototype.options.position,position)}else{position=$.ui.dialog.prototype.options.position}isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show()}this.uiDialog.position(position);if(!isVisible){this.uiDialog.hide()}},_setOptions:function(options){var that=this,resizableOptions={},resize=false;$.each(options,function(key,value){that._setOption(key,value);if(key in sizeRelatedOptions){resize=true}if(key in resizableRelatedOptions){resizableOptions[key]=value}});if(resize){this._size()}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",resizableOptions)}},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;switch(key){case"buttons":this._createButtons(value);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+value);break;case"dialogClass":uiDialog.removeClass(this.options.dialogClass).addClass(uiDialogClasses+value);break;case"disabled":if(value){uiDialog.addClass("ui-dialog-disabled")}else{uiDialog.removeClass("ui-dialog-disabled")}break;case"draggable":isDraggable=uiDialog.is(":data(draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy")}if(!isDraggable&&value){this._makeDraggable()}break;case"position":this._position(value);break;case"resizable":isResizable=uiDialog.is(":data(resizable)");if(isResizable&&!value){uiDialog.resizable("destroy")}if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value)}if(!isResizable&&value!==false){this._makeResizable(value)}break;case"title":$(".ui-dialog-title",this.uiDialogTitlebar).html(""+(value||"&#160;"));break}this._super(key,value)},_size:function(){var nonContentHeight,minContentHeight,autoHeight,options=this.options,isVisible=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(options.minWidth>options.width){options.width=options.minWidth}nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);if(options.height==="auto"){if($.support.minHeight){this.element.css({minHeight:minContentHeight,height:"auto"})}else{this.uiDialog.show();autoHeight=this.element.css("height","auto").height();if(!isVisible){this.uiDialog.hide()}this.element.height(Math.max(autoHeight,minContentHeight))}}else{this.element.height(Math.max(options.height-nonContentHeight,0))}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}}});$.extend($.ui.dialog,{uuid:0,maxZ:0,getTitleId:function($el){var id=$el.attr("id");if(!id){this.uuid+=1;id=this.uuid}return"ui-dialog-title-"+id},overlay:function(dialog){this.$el=$.ui.dialog.overlay.create(dialog)}});$.extend($.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:$.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(event){return event+".dialog-overlay"}).join(" "),create:function(dialog){if(this.instances.length===0){setTimeout(function(){if($.ui.dialog.overlay.instances.length){$(document).bind($.ui.dialog.overlay.events,function(event){if($(event.target).zIndex()<$.ui.dialog.overlay.maxZ){return false}})}},1);$(window).bind("resize.dialog-overlay",$.ui.dialog.overlay.resize)}var $el=this.oldInstances.pop()||$("<div>").addClass("ui-widget-overlay");$(document).bind("keydown.dialog-overlay",function(event){var instances=$.ui.dialog.overlay.instances;if(instances.length!==0&&instances[instances.length-1]===$el&&dialog.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){dialog.close(event);event.preventDefault()}});$el.appendTo(document.body).css({width:this.width(),height:this.height()});if($.fn.bgiframe){$el.bgiframe()}this.instances.push($el);return $el},destroy:function($el){var indexOf=$.inArray($el,this.instances),maxZ=0;if(indexOf!==-1){this.oldInstances.push(this.instances.splice(indexOf,1)[0])}if(this.instances.length===0){$([document,window]).unbind(".dialog-overlay")}$el.height(0).width(0).remove();$.each(this.instances,function(){maxZ=Math.max(maxZ,this.css("z-index"))});this.maxZ=maxZ},height:function(){var scrollHeight,offsetHeight;if($.ui.ie){scrollHeight=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);offsetHeight=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(scrollHeight<offsetHeight){return $(window).height()+"px"}else{return scrollHeight+"px"}}else{return $(document).height()+"px"}},width:function(){var scrollWidth,offsetWidth;if($.ui.ie){scrollWidth=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(scrollWidth<offsetWidth){return $(window).width()+"px"}else{return scrollWidth+"px"}}else{return $(document).width()+"px"}},resize:function(){var $overlays=$([]);$.each($.ui.dialog.overlay.instances,function(){$overlays=$overlays.add(this)});$overlays.css({width:0,height:0}).css({width:$.ui.dialog.overlay.width(),height:$.ui.dialog.overlay.height()})}});$.extend($.ui.dialog.overlay.prototype,{destroy:function(){$.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);(function($,undefined){var rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/;$.effects.effect.blind=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),direction=o.direction||"up",vertical=rvertical.test(direction),ref=vertical?"height":"width",ref2=vertical?"top":"left",motion=rpositivemotion.test(direction),animation={},show=mode==="show",wrapper,distance,margin;if(el.parent().is(".ui-effects-wrapper")){$.effects.save(el.parent(),props)}else{$.effects.save(el,props)}el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=wrapper[ref]();margin=parseFloat(wrapper.css(ref2))||0;animation[ref]=show?distance:0;if(!motion){el.css(vertical?"bottom":"right",0).css(vertical?"top":"left","auto").css({position:"absolute"});animation[ref2]=show?margin:distance+margin}if(show){wrapper.css(ref,0);if(!motion){wrapper.css(ref2,margin+distance)}}wrapper.animate(animation,{duration:o.duration,easing:o.easing,queue:false,complete:function(){if(mode==="hide"){el.hide()}$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})}})(jQuery);(function($,undefined){$.effects.effect.bounce=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),hide=mode==="hide",show=mode==="show",direction=o.direction||"up",distance=o.distance,times=o.times||5,anims=times*2+(show||hide?1:0),speed=o.duration/anims,easing=o.easing,ref=direction==="up"||direction==="down"?"top":"left",motion=direction==="up"||direction==="left",i,upAnim,downAnim,queue=el.queue(),queuelen=queue.length;if(show||hide){props.push("opacity")}$.effects.save(el,props);el.show();$.effects.createWrapper(el);if(!distance){distance=el[ref==="top"?"outerHeight":"outerWidth"]()/3}if(show){downAnim={opacity:1};downAnim[ref]=0;el.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing)}if(hide){distance=distance/Math.pow(2,times-1)}downAnim={};downAnim[ref]=0;for(i=0;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2}if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing)}el.queue(function(){if(hide){el.hide()}$.effects.restore(el,props);$.effects.removeWrapper(el);done()});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)))}el.dequeue()}})(jQuery);(function($,undefined){$.effects.effect.clip=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"vertical",vert=direction==="vertical",size=vert?"height":"width",position=vert?"top":"left",animation={},wrapper,animate,distance;$.effects.save(el,props);el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});animate=el[0].tagName==="IMG"?wrapper:el;distance=animate[size]();if(show){animate.css(size,0);animate.css(position,distance/2)}animation[size]=show?distance:0;animation[position]=show?0:distance/2;animate.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(!show){el.hide()}$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})}})(jQuery);(function($,undefined){$.effects.effect.drop=function(o,done){var el=$(this),props=["position","top","bottom","left","right","opacity","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",direction=o.direction||"left",ref=direction==="up"||direction==="down"?"top":"left",motion=direction==="up"||direction==="left"?"pos":"neg",animation={opacity:show?1:0},distance;$.effects.save(el,props);el.show();$.effects.createWrapper(el);distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](true)/2;if(show){el.css("opacity",0).css(ref,motion==="pos"?-distance:distance)}animation[ref]=(show?motion==="pos"?"+=":"-=":motion==="pos"?"-=":"+=")+distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){el.hide()}$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})}})(jQuery);(function($,undefined){$.effects.effect.explode=function(o,done){var rows=o.pieces?Math.round(Math.sqrt(o.pieces)):3,cells=rows,el=$(this),mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",offset=el.show().css("visibility","hidden").offset(),width=Math.ceil(el.outerWidth()/cells),height=Math.ceil(el.outerHeight()/rows),pieces=[],i,j,left,top,mx,my;function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete()}}for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/2;el.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},o.duration||500,o.easing,childComplete)}}function animComplete(){el.css({visibility:"visible"});$(pieces).remove();if(!show){el.hide()}done()}}})(jQuery);(function($,undefined){$.effects.effect.fade=function(o,done){var el=$(this),mode=$.effects.setMode(el,o.mode||"toggle");el.animate({opacity:mode},{queue:false,duration:o.duration,easing:o.easing,complete:done})}})(jQuery);(function($,undefined){$.effects.effect.fold=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",hide=mode==="hide",size=o.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!o.horizFirst,widthFirst=show!==horizFirst,ref=widthFirst?["width","height"]:["height","width"],duration=o.duration/2,wrapper,distance,animation1={},animation2={};$.effects.save(el,props);el.show();wrapper=$.effects.createWrapper(el).css({overflow:"hidden"});distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()];if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1]}if(show){wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0})}animation1[ref[0]]=show?distance[0]:size;animation2[ref[1]]=show?distance[1]:0;wrapper.animate(animation1,duration,o.easing).animate(animation2,duration,o.easing,function(){if(hide){el.hide()}$.effects.restore(el,props);$.effects.removeWrapper(el);done()})}})(jQuery);(function($,undefined){$.effects.effect.highlight=function(o,done){var elem=$(this),props=["backgroundImage","backgroundColor","opacity"],mode=$.effects.setMode(elem,o.mode||"show"),animation={backgroundColor:elem.css("backgroundColor")};if(mode==="hide"){animation.opacity=0}$.effects.save(elem,props);elem.show().css({backgroundImage:"none",backgroundColor:o.color||"#ffff99"}).animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){elem.hide()}$.effects.restore(elem,props);done()}})}})(jQuery);(function($,undefined){$.effects.effect.pulsate=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"show"),show=mode==="show",hide=mode==="hide",showhide=show||mode==="hide",anims=(o.times||5)*2+(showhide?1:0),duration=o.duration/anims,animateTo=0,queue=elem.queue(),queuelen=queue.length,i;if(show||!elem.is(":visible")){elem.css("opacity",0).show();animateTo=1}for(i=1;i<anims;i++){elem.animate({opacity:animateTo},duration,o.easing);animateTo=1-animateTo}elem.animate({opacity:animateTo},duration,o.easing);elem.queue(function(){if(hide){elem.hide()}done()});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)))}elem.dequeue()}})(jQuery);(function($,undefined){$.effects.effect.puff=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"hide"),hide=mode==="hide",percent=parseInt(o.percent,10)||150,factor=percent/100,original={height:elem.height(),width:elem.width(),outerHeight:elem.outerHeight(),outerWidth:elem.outerWidth()};$.extend(o,{effect:"scale",queue:false,fade:true,mode:mode,complete:done,percent:hide?percent:100,from:hide?original:{height:original.height*factor,width:original.width*factor,outerHeight:original.outerHeight*factor,outerWidth:original.outerWidth*factor}});elem.effect(o)};$.effects.effect.scale=function(o,done){var el=$(this),options=$.extend(true,{},o),mode=$.effects.setMode(el,o.mode||"effect"),percent=parseInt(o.percent,10)||(parseInt(o.percent,10)===0?0:mode==="hide"?0:100),direction=o.direction||"both",origin=o.origin,original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()},factor={y:direction!=="horizontal"?percent/100:1,x:direction!=="vertical"?percent/100:1};options.effect="size";options.queue=false;options.complete=done;if(mode!=="effect"){options.origin=origin||["middle","center"];options.restore=true}options.from=o.from||(mode==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:original);options.to={height:original.height*factor.y,width:original.width*factor.x,outerHeight:original.outerHeight*factor.y,outerWidth:original.outerWidth*factor.x};if(options.fade){if(mode==="show"){options.from.opacity=0;options.to.opacity=1}if(mode==="hide"){options.from.opacity=1;options.to.opacity=0}}el.effect(options)};$.effects.effect.size=function(o,done){var original,baseline,factor,el=$(this),props0=["position","top","bottom","left","right","width","height","overflow","opacity"],props1=["position","top","bottom","left","right","overflow","opacity"],props2=["width","height","overflow"],cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=$.effects.setMode(el,o.mode||"effect"),restore=o.restore||mode!=="effect",scale=o.scale||"both",origin=o.origin||["middle","center"],position=el.css("position"),props=restore?props0:props1,zero={height:0,width:0,outerHeight:0,outerWidth:0};if(mode==="show"){el.show()}original={height:el.height(),width:el.width(),outerHeight:el.outerHeight(),outerWidth:el.outerWidth()};if(o.mode==="toggle"&&mode==="show"){el.from=o.to||zero;el.to=o.from||original}else{el.from=o.from||(mode==="show"?zero:original);el.to=o.to||(mode==="hide"?zero:original)}factor={from:{y:el.from.height/original.height,x:el.from.width/original.width},to:{y:el.to.height/original.height,x:el.to.width/original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){props=props.concat(vProps);el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to)}if(factor.from.x!==factor.to.x){props=props.concat(hProps);el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from);el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to)}}if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){props=props.concat(cProps).concat(props2);el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from);el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to)}}$.effects.save(el,props);el.show();$.effects.createWrapper(el);el.css("overflow","hidden").css(el.from);if(origin){baseline=$.effects.getBaseline(origin,original);el.from.top=(original.outerHeight-el.outerHeight())*baseline.y;el.from.left=(original.outerWidth-el.outerWidth())*baseline.x;el.to.top=(original.outerHeight-el.to.outerHeight)*baseline.y;el.to.left=(original.outerWidth-el.to.outerWidth)*baseline.x}el.css(el.from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);props2=props0.concat(vProps).concat(hProps);el.find("*[width]").each(function(){var child=$(this),c_original={height:child.height(),width:child.width(),outerHeight:child.outerHeight(),outerWidth:child.outerWidth()};if(restore){$.effects.save(child,props2)}child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x,outerHeight:c_original.outerHeight*factor.from.y,outerWidth:c_original.outerWidth*factor.from.x};child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x,outerHeight:c_original.height*factor.to.y,outerWidth:c_original.width*factor.to.x};if(factor.from.y!==factor.to.y){child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from);child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to)}if(factor.from.x!==factor.to.x){child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from);child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to)}child.css(child.from);child.animate(child.to,o.duration,o.easing,function(){if(restore){$.effects.restore(child,props2)}})})}el.animate(el.to,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(el.to.opacity===0){el.css("opacity",el.from.opacity)}if(mode==="hide"){el.hide()}$.effects.restore(el,props);if(!restore){if(position==="static"){el.css({position:"relative",top:el.to.top,left:el.to.left})}else{$.each(["top","left"],function(idx,pos){el.css(pos,function(_,str){var val=parseInt(str,10),toRef=idx?el.to.left:el.to.top;if(str==="auto"){return toRef+"px"}return val+toRef+"px"})})}}$.effects.removeWrapper(el);done()}})}})(jQuery);(function($,undefined){$.effects.effect.shake=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),direction=o.direction||"left",distance=o.distance||20,times=o.times||3,anims=times*2+1,speed=Math.round(o.duration/anims),ref=direction==="up"||direction==="down"?"top":"left",positiveMotion=direction==="up"||direction==="left",animation={},animation1={},animation2={},i,queue=el.queue(),queuelen=queue.length;$.effects.save(el,props);el.show();$.effects.createWrapper(el);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;el.animate(animation,speed,o.easing);for(i=1;i<times;i++){el.animate(animation1,speed,o.easing).animate(animation2,speed,o.easing)}el.animate(animation1,speed,o.easing).animate(animation,speed/2,o.easing).queue(function(){if(mode==="hide"){el.hide()}$.effects.restore(el,props);$.effects.removeWrapper(el);done()});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)))}el.dequeue()}})(jQuery);(function($,undefined){$.effects.effect.slide=function(o,done){var el=$(this),props=["position","top","bottom","left","right","width","height"],mode=$.effects.setMode(el,o.mode||"show"),show=mode==="show",direction=o.direction||"left",ref=direction==="up"||direction==="down"?"top":"left",positiveMotion=direction==="up"||direction==="left",distance,animation={};$.effects.save(el,props);el.show();distance=o.distance||el[ref==="top"?"outerHeight":"outerWidth"](true);$.effects.createWrapper(el).css({overflow:"hidden"});if(show){el.css(ref,positiveMotion?isNaN(distance)?"-"+distance:-distance:distance)}animation[ref]=(show?positiveMotion?"+=":"-=":positiveMotion?"-=":"+=")+distance;el.animate(animation,{queue:false,duration:o.duration,easing:o.easing,complete:function(){if(mode==="hide"){el.hide()}$.effects.restore(el,props);$.effects.removeWrapper(el);done()}})}})(jQuery);(function($,undefined){$.effects.effect.transfer=function(o,done){var elem=$(this),target=$(o.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=elem.offset(),transfer=$('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(o.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:elem.innerHeight(),width:elem.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,o.duration,o.easing,function(){transfer.remove();done()})}})(jQuery);(function($,undefined){var mouseHandled=false;$.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,$.proxy(function(event){if(this.options.disabled){event.preventDefault()}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item > a":function(event){event.preventDefault()},"click .ui-state-disabled > a":function(event){event.preventDefault()},"click .ui-menu-item:has(a)":function(event){var target=$(event.target).closest(".ui-menu-item");if(!mouseHandled&&target.not(".ui-state-disabled").length){mouseHandled=true;this.select(event);if(target.has(".ui-menu").length){this.expand(event)}else if(!this.element.is(":focus")){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}},"mouseenter .ui-menu-item":function(event){var target=$(event.currentTarget);target.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(event,target)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(event,keepActiveItem){var item=this.active||this.element.children(".ui-menu-item").eq(0);if(!keepActiveItem){this.focus(event,item)}},blur:function(event){this._delay(function(){if(!$.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(event)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(event){if(!$(event.target).closest(".ui-menu").length){this.collapseAll(event)}mouseHandled=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-carat")){elem.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(event){var match,prev,character,skip,regex,preventDefault=true;function escape(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event)}break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=false;prev=this.previousFilter||"";character=String.fromCharCode(event.keyCode);skip=false;clearTimeout(this.filterTimer);if(character===prev){skip=true}else{character=prev+character}regex=new RegExp("^"+escape(character),"i");match=this.activeMenu.children(".ui-menu-item").filter(function(){return regex.test($(this).children("a").text())});match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;if(!match.length){character=String.fromCharCode(event.keyCode);regex=new RegExp("^"+escape(character),"i");match=this.activeMenu.children(".ui-menu-item").filter(function(){return regex.test($(this).children("a").text())})}if(match.length){this.focus(event,match);if(match.length>1){this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(preventDefault){event.preventDefault()}},_activate:function(event){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(event)}else{this.select(event)}}},refresh:function(){var menus,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.prev("a"),submenuCarat=$("<span>").addClass("ui-menu-icon ui-icon "+icon).data("ui-menu-submenu-carat",true);item.attr("aria-haspopup","true").prepend(submenuCarat);menu.attr("aria-labelledby",item.attr("id"))});menus=submenus.add(this.element);menus.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});menus.children(":not(.ui-menu-item)").each(function(){var item=$(this);if(!/[^\-—–\s]/.test(item.text())){item.addClass("ui-widget-content ui-menu-divider")}});menus.children(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(event,item){var nested,focused;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.children("a").addClass("ui-state-focus");if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"))}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");if(event&&event.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}nested=item.children(".ui-menu");if(nested.length&&/^mouse/.test(event.type)){this._startOpening(nested)}this.activeMenu=item.parent();this._trigger("focus",event,{item:item})},_scrollIntoView:function(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.height();if(offset<0){this.activeMenu.scrollTop(scroll+offset)}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight)}}},blur:function(event,fromFocus){if(!fromFocus){clearTimeout(this.timer)}if(!this.active){return}this.active.children("a").removeClass("ui-state-focus");this.active=null;this._trigger("blur",event,{item:this.active})},_startOpening:function(submenu){clearTimeout(this.timer);if(submenu.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();this._open(submenu)},this.delay)},_open:function(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position)},collapseAll:function(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));if(!currentMenu.length){currentMenu=this.element}this._close(currentMenu);this.blur(event);this.activeMenu=currentMenu},this.delay)},_close:function(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element}startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem)}},expand:function(event){var newItem=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(newItem&&newItem.length){this._open(newItem.parent());this._delay(function(){this.focus(event,newItem)})}},next:function(event){this._move("next","first",event)},previous:function(event){this._move("prev","last",event)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active[direction==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{next=this.active[direction+"All"](".ui-menu-item").eq(0)}}if(!next||!next.length||!this.active){next=this.activeMenu.children(".ui-menu-item")[filter]()}this.focus(event,next)},nextPage:function(event){var item,base,height;if(!this.active){this.next(event);return}if(this.isLastItem()){return}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0});this.focus(event,item)}else{this.focus(event,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())}},previousPage:function(event){var item,base,height;if(!this.active){this.next(event);return}if(this.isFirstItem()){return}if(this._hasScroll()){base=this.active.offset().top;height=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0});this.focus(event,item)}else{this.focus(event,this.activeMenu.children(".ui-menu-item").first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(event){this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,true)}this._trigger("select",event,ui)}})})(jQuery);(function($,undefined){$.ui=$.ui||{};var cachedScrollbarWidth,max=Math.max,abs=Math.abs,round=Math.round,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseInt(offsets[0],10)*(rpercent.test(offsets[0])?width/100:1),parseInt(offsets[1],10)*(rpercent.test(offsets[1])?height/100:1)]}function parseCss(element,property){return parseInt($.css(element,property),10)||0}$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth}var w1,w2,div=$("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth}div.remove();return cachedScrollbarWidth=w1-w2},getScrollInfo:function(within){var overflowX=within.isWindow?"":within.element.css("overflow-x"),overflowY=within.isWindow?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||overflowX==="auto"&&within.width<within.element[0].scrollWidth,hasOverflowY=overflowY==="scroll"||overflowY==="auto"&&within.height<within.element[0].scrollHeight;return{width:hasOverflowX?$.position.scrollbarWidth():0,height:hasOverflowY?$.position.scrollbarWidth():0}},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]);return{element:withinElement,isWindow:isWindow,offset:withinElement.offset()||{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:isWindow?withinElement.width():withinElement.outerWidth(),height:isWindow?withinElement.height():withinElement.outerHeight()}}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments)}options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),targetElem=target[0],collision=(options.collision||"flip").split(" "),offsets={};if(targetElem.nodeType===9){targetWidth=target.width();targetHeight=target.height();targetOffset={top:0,left:0}}else if($.isWindow(targetElem)){targetWidth=target.width();targetHeight=target.height();targetOffset={top:target.scrollTop(),left:target.scrollLeft()}}else if(targetElem.preventDefault){options.at="left top";targetWidth=targetHeight=0;targetOffset={top:targetElem.pageY,left:targetElem.pageX}}else{targetWidth=target.outerWidth();targetHeight=target.outerHeight();targetOffset=target.offset()}basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"]}pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]]});if(collision.length===1){collision[1]=collision[0]}if(options.at[0]==="right"){basePosition.left+=targetWidth}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2}if(options.at[1]==="bottom"){basePosition.top+=targetHeight}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2}atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth}else if(options.my[0]==="center"){position.left-=elemWidth/2}if(options.my[1]==="bottom"){position.top-=elemHeight}else if(options.my[1]==="center"){position.top-=elemHeight/2}position.left+=myOffset[0];position.top+=myOffset[1];if(!$.support.offsetFractions){position.left=round(position.left);position.top=round(position.top)}collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem})}});if($.fn.bgiframe){elem.bgiframe()}if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center"}if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle"}if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal"}else{feedback.important="vertical"}options.using.call(this,props,feedback)}}elem.offset($.extend(position,{using:using}))})};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-withinOffset;position.left+=overLeft-newOverRight}else if(overRight>0&&overLeft<=0){position.left=withinOffset}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth}else{position.left=withinOffset}}}else if(overLeft>0){position.left+=overLeft}else if(overRight>0){position.left-=overRight}else{position.left=max(position.left-collisionPosLeft,position.left)}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-withinOffset;position.top+=overTop-newOverBottom}else if(overBottom>0&&overTop<=0){position.top=withinOffset}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight}else{position.top=withinOffset}}}else if(overTop>0){position.top+=overTop}else if(overBottom>0){position.top-=overBottom}else{position.top=max(position.top-collisionPosTop,position.top)}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-outerHeight-withinOffset;if(position.top+myOffset+atOffset+offset>overTop&&(newOverBottom<0||newOverBottom<abs(overTop))){position.top+=myOffset+atOffset+offset}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+offset-offsetTop;if(position.top+myOffset+atOffset+offset>overBottom&&(newOverTop>0||abs(newOverTop)<overBottom)){position.top+=myOffset+atOffset+offset}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments)}}};(function(){var testElement,testElementParent,testElementStyle,offsetLeft,i,body=document.getElementsByTagName("body")[0],div=document.createElement("div");testElement=document.createElement(body?"div":"body");testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(body){$.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"})}for(i in testElementStyle){testElement.style[i]=testElementStyle[i]}testElement.appendChild(div);testElementParent=body||document.documentElement;testElementParent.insertBefore(testElement,testElementParent.firstChild);div.style.cssText="position: absolute; left: 10.7432222px;";offsetLeft=$(div).offset().left;$.support.offsetFractions=offsetLeft>10&&offsetLeft<11;testElement.innerHTML="";testElementParent.removeChild(testElement)})();if($.uiBackCompat!==false){(function($){var _position=$.fn.position;$.fn.position=function(options){if(!options||!options.offset){return _position.call(this,options)}var offset=options.offset.split(" "),at=options.at.split(" ");if(offset.length===1){offset[1]=offset[0]}if(/^\d/.test(offset[0])){offset[0]="+"+offset[0]}if(/^\d/.test(offset[1])){offset[1]="+"+offset[1]}if(at.length===1){if(/left|center|right/.test(at[0])){at[1]="center"}else{at[1]=at[0];at[0]="center"}}return _position.call(this,$.extend(options,{at:at[0]+offset[0]+" "+at[1]+offset[1],offset:undefined}))}})(jQuery)}})(jQuery);(function($,undefined){$.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(newValue){if(newValue===undefined){return this._value()}this._setOption("value",newValue);return this},_setOption:function(key,value){if(key==="value"){this.options.value=value;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete")}}this._super(key,value)},_value:function(){var val=this.options.value;if(typeof val!=="number"){val=0}return Math.min(this.options.max,Math.max(this.min,val))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var value=this.value(),percentage=this._percentage();if(this.oldValue!==value){this.oldValue=value;this._trigger("change")}this.valueDiv.toggle(value>this.min).toggleClass("ui-corner-right",value===this.options.max).width(percentage.toFixed(0)+"%");this.element.attr("aria-valuenow",value)}})})(jQuery);(function($,undefined){var numPages=5;$.widget("ui.slider",$.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var i,handleCount,o=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",handles=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(o.disabled?" ui-slider-disabled ui-disabled":""));this.range=$([]);if(o.range){if(o.range===true){if(!o.values){o.values=[this._valueMin(),this._valueMin()]}if(o.values.length&&o.values.length!==2){o.values=[o.values[0],o.values[0]]}}this.range=$("<div></div>").appendTo(this.element).addClass("ui-slider-range"+" ui-widget-header"+(o.range==="min"||o.range==="max"?" ui-slider-range-"+o.range:""))}handleCount=o.values&&o.values.length||1;for(i=existingHandles.length;i<handleCount;i++){handles.push(handle)}this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(event){event.preventDefault()}).mouseenter(function(){if(!o.disabled){$(this).addClass("ui-state-hover")}}).mouseleave(function(){$(this).removeClass("ui-state-hover")}).focus(function(){if(!o.disabled){$(".ui-slider .ui-state-focus").removeClass("ui-state-focus");$(this).addClass("ui-state-focus")}else{$(this).blur()}}).blur(function(){$(this).removeClass("ui-state-focus")});this.handles.each(function(i){$(this).data("ui-slider-handle-index",i)});this._on(this.handles,{keydown:function(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=true;$(event.target).addClass("ui-state-active");allowed=this._start(event,index);if(allowed===false){return}}break}step=this.options.step;if(this.options.values&&this.options.values.length){curVal=newVal=this.values(index)}else{curVal=newVal=this.value()}switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+(this._valueMax()-this._valueMin())/numPages);break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-(this._valueMax()-this._valueMin())/numPages);break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return}newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return}newVal=this._trimAlignValue(curVal-step);break}this._slide(event,index,newVal)},keyup:function(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(event,index);this._change(event,index);$(event.target).removeClass("ui-state-active")}}});this._refreshValue();this._animateOff=false},_destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-slider-disabled"+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._mouseDestroy()},_mouseCapture:function(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if(distance>thisDistance){distance=thisDistance;closestHandle=$(this);index=i}});if(o.range===true&&this.values(1)===o.min){index+=1;closestHandle=$(this.handles[index])}allowed=this._start(event,index);if(allowed===false){return false}this._mouseSliding=true;this._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-closestHandle.width()/2,top:event.pageY-offset.top-closestHandle.height()/2-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue)}this._animateOff=true;return true},_mouseStart:function(){return true},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false},_mouseStop:function(event){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}percentMouse=pixelMouse/pixelTotal;if(percentMouse>1){percentMouse=1}if(percentMouse<0){percentMouse=0}if(this.orientation==="vertical"){percentMouse=1-percentMouse}valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse)},_start:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}return this._trigger("start",event,uiHash)},_slide:function(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if(this.options.values.length===2&&this.options.range===true&&(index===0&&newVal>otherVal||index===1&&newVal<otherVal)){newVal=otherVal}if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal,true)}}}else{if(newVal!==this.value()){allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==false){this.value(newVal)}}}},_stop:function(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}this._trigger("stop",event,uiHash)},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values()}this._trigger("change",event,uiHash)}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return}return this._value()},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return}if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(index)}else{return this.value()}}}else{return this._values()}},_setOption:function(key,value){var i,valsLength=0;if($.isArray(this.options.values)){valsLength=this.options.values.length}$.Widget.prototype._setOption.apply(this,arguments);switch(key){case"disabled":if(value){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.prop("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.prop("disabled",false);this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i)}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break}},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val}else{vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i])}return vals}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin()}if(val>=this._valueMax()){return this._valueMax()}var step=this.options.step>0?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=valModStep>0?step:-step}return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=!this._animateOff?o.animate:false,_set={};if(this.options.values&&this.options.values.length){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===true){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate)}if(i===1){that.range[animate?"animate":"css"]({width:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate})}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:valPercent+"%"},o.animate)}if(i===1){that.range[animate?"animate":"css"]({height:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate})}}}lastValPercent=valPercent})}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=valueMax!==valueMin?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate)}if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:100-valPercent+"%"},{queue:false,duration:o.animate})}if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate)}if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:100-valPercent+"%"},{queue:false,duration:o.animate})}}}})})(jQuery);(function($){function modifier(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change")}}}$.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this._value(this.element.val(),true);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var options={},element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!==undefined&&value.length){options[option]=value}});return options},_events:{keydown:function(event){if(this._start(event)&&this._keydown(event)){event.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event)}},mousewheel:function(event,delta){if(!delta){return}if(!this.spinning&&!this._start(event)){return false}this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event)}},100);event.preventDefault()},"mousedown .ui-spinner-button":function(event){var previous;previous=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===this.document[0].activeElement;if(!isActive){this.element.focus();this.previous=previous;this._delay(function(){this.previous=previous})}}event.preventDefault();checkFocus.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;checkFocus.call(this)});if(this._start(event)===false){return}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(event){if(!$(event.currentTarget).hasClass("ui-state-active")){return}if(this._start(event)===false){return false}this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var uiSpinner=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=uiSpinner.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(uiSpinner.height()*.5)&&uiSpinner.height()>0){uiSpinner.height(uiSpinner.height())}if(this.options.disabled){this.disable()}},_keydown:function(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return true;case keyCode.DOWN:this._repeat(null,-1,event);return true;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return true;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return""+"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>"+"<span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(event){if(!this.spinning&&this._trigger("start",event)===false){return false}if(!this.counter){this.counter=1}this.spinning=true;return true},_repeat:function(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event)},i);this._spin(steps*this.options.step,event)},_spin:function(step,event){var value=this.value()||0;if(!this.counter){this.counter=1}value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==false){this._value(value);this.counter++}},_increment:function(i){var incremental=this.options.incremental;if(incremental){return $.isFunction(incremental)?incremental(i):Math.floor(i*i*i/5e4-i*i/500+17*i/200+1)}return 1},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min))}return precision},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1},_adjustValue:function(value){var base,aboveMin,options=this.options;base=options.min!==null?options.min:0;aboveMin=value-base;aboveMin=Math.round(aboveMin/options.step)*options.step;value=base+aboveMin;value=parseFloat(value.toFixed(this._precision()));if(options.max!==null&&value>options.max){return options.max}if(options.min!==null&&value<options.min){return options.min}return value},_stop:function(event){if(!this.spinning){return}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",event)},_setOption:function(key,value){if(key==="culture"||key==="numberFormat"){var prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return}if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value)}}this._super(key,value);if(key==="disabled"){if(value){this.element.prop("disabled",true);this.buttons.button("disable")}else{this.element.prop("disabled",false);this.buttons.button("enable")}}},_setOptions:modifier(function(options){this._super(options);this._value(this.element.val())}),_parse:function(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val}return val===""||isNaN(val)?null:val},_format:function(value){if(value===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed)}value=this._format(parsed)}}this.element.val(value);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:modifier(function(steps){this._stepUp(steps)}),_stepUp:function(steps){this._spin((steps||1)*this.options.step)},stepDown:modifier(function(steps){this._stepDown(steps)}),_stepDown:function(steps){this._spin((steps||1)*-this.options.step)},pageUp:modifier(function(pages){this._stepUp((pages||1)*this.options.page)}),pageDown:modifier(function(pages){this._stepDown((pages||1)*this.options.page)}),value:function(newVal){if(!arguments.length){return this._parse(this.element.val())}modifier(this._value).call(this,newVal)},widget:function(){return this.uiSpinner}})})(jQuery);(function($,undefined){var tabId=0,rhash=/#.*$/;function getNextTabId(){return++tabId}function isLocal(anchor){return anchor.hash.length>1&&anchor.href.replace(rhash,"")===location.href.replace(rhash,"").replace(/\s/g,"%20")}$.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var that=this,options=this.options,active=options.active,locationHash=location.hash.substring(1);this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",options.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(event){if($(this).is(".ui-state-disabled")){event.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur()}});this._processTabs();if(active===null){if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return false}})}if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(active===null||active===-1){active=this.tabs.length?0:false}}if(active!==false){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=options.collapsible?false:0}}options.active=active;if(!options.collapsible&&options.active===false&&this.anchors.length){options.active=0}if($.isArray(options.disabled)){options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(this.options.active)}else{this.active=$()}this._refresh();if(this.active.length){this.load(options.active)}},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)}},_tabKeydown:function(event){var focusedTab=$(this.document[0].activeElement).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=true;if(this._handlePageNav(event)){return}switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=false;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex===this.options.active?false:selectedIndex);return;default:return}event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);if(!event.ctrlKey){focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex)},this.delay)}},_panelKeydown:function(event){if(this._handlePageNav(event)){return}if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.focus()}},_handlePageNav:function(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true}if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true}},_findNextTab:function(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0}if(index<0){index=lastTabIndex}return index}while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1}return index},_focusNextTab:function(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).focus();return index},_setOption:function(key,value){if(key==="active"){this._activate(value);return}if(key==="disabled"){this._setupDisabled(value);return}this._super(key,value);if(key==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",value);if(!value&&this.options.active===false){this._activate(0)}}if(key==="event"){this._setupEvents(value)}if(key==="heightStyle"){this._setupHeightStyle(value)}},_tabId:function(tab){return tab.attr("aria-controls")||"ui-tabs-"+getNextTabId()},_sanitizeSelector:function(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab)});this._processTabs();if(options.active===false||!this.anchors.length){options.active=false;this.active=$()}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===options.disabled.length){options.active=false;this.active=$()}else{this._activate(this._findNextTab(Math.max(0,options.active-1),false))}}else{options.active=this.tabs.index(this.active)}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var that=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return $("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");if(isLocal(anchor)){selector=anchor.hash;panel=that.element.find(that._sanitizeSelector(selector))}else{panelId=that._tabId(tab);selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist)}panel.attr("aria-live","polite")}if(panel.length){that.panels=that.panels.add(panel)}if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls)}tab.attr({"aria-controls":selector.substring(1),"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(id){return $("<div>").attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(disabled){if($.isArray(disabled)){if(!disabled.length){disabled=false}else if(disabled.length===this.anchors.length){disabled=true}}for(var i=0,li;li=this.tabs[i];i++){if(disabled===true||$.inArray(i,disabled)!==-1){$(li).addClass("ui-state-disabled").attr("aria-disabled","true")}else{$(li).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=disabled},_setupEvents:function(event){var events={click:function(event){event.preventDefault()}};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(heightStyle){var maxHeight,overflow,parent=this.element.parent();if(heightStyle==="fill"){if(!$.support.minHeight){overflow=parent.css("overflow");parent.css("overflow","hidden")}maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return}maxHeight-=elem.outerHeight(true)});if(overflow){parent.css("overflow",overflow)}this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(true)});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height())}).height(maxHeight)}},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||clickedIsActive&&!options.collapsible||this._trigger("beforeActivate",event,eventData)===false){return}options.active=collapsing?false:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort()}if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(toShow.length){this.load(this.tabs.index(tab),event)}this._toggle(event,eventData)},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData)}function show(){eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete)}else{toShow.show();complete()}}if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");show()})}else{eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");toHide.hide();show()}toHide.attr({"aria-expanded":"false","aria-hidden":"true"});eventData.oldTab.attr("aria-selected","false");if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1)}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0}).attr("tabIndex",-1)}toShow.attr({"aria-expanded":"true","aria-hidden":"false"});eventData.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(index){var anchor,active=this._findActive(index);if(active[0]===this.active[0]){return}if(!active.length){active=this.active}anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop})},_findActive:function(index){return index===false?$():this.tabs.eq(index)},_getIndex:function(index){if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+index+"']"))}return index},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove()}else{$(this).removeClass("ui-state-default ui-state-active ui-state-disabled "+"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev)}else{li.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(index){var disabled=this.options.disabled;if(disabled===false){return}if(index===undefined){disabled=false}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null})}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null})}}this._setupDisabled(disabled)},disable:function(index){var disabled=this.options.disabled;if(disabled===true){return}if(index===undefined){disabled=true}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return}if($.isArray(disabled)){disabled=$.merge([index],disabled).sort()}else{disabled=[index]}}this._setupDisabled(disabled)},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel};if(isLocal(anchor[0])){return}this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));if(this.xhr&&this.xhr.statusText!=="canceled"){tab.addClass("ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.success(function(response){setTimeout(function(){panel.html(response);that._trigger("load",event,eventData)},1)}).complete(function(jqXHR,status){setTimeout(function(){if(status==="abort"){that.panels.stop(false,true)}tab.removeClass("ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr}},1)})}},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href"),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData))}}},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id))}});if($.uiBackCompat!==false){$.ui.tabs.prototype._ui=function(tab,panel){return{tab:tab,panel:panel,index:this.anchors.index(tab)}};$.widget("ui.tabs",$.ui.tabs,{url:function(index,url){this.anchors.eq(index).attr("href",url)}});$.widget("ui.tabs",$.ui.tabs,{options:{ajaxOptions:null,cache:false},_create:function(){this._super();var that=this;this._on({tabsbeforeload:function(event,ui){if($.data(ui.tab[0],"cache.tabs")){event.preventDefault();return}ui.jqXHR.success(function(){if(that.options.cache){$.data(ui.tab[0],"cache.tabs",true)}})}})},_ajaxSettings:function(anchor,event,ui){var ajaxOptions=this.options.ajaxOptions;return $.extend({},ajaxOptions,{error:function(xhr,status){try{ajaxOptions.error(xhr,status,ui.tab.closest("li").index(),ui.tab[0])}catch(error){}}},this._superApply(arguments))},_setOption:function(key,value){if(key==="cache"&&value===false){this.anchors.removeData("cache.tabs")}this._super(key,value)},_destroy:function(){this.anchors.removeData("cache.tabs");this._super()},url:function(index){this.anchors.eq(index).removeData("cache.tabs");this._superApply(arguments)}});$.widget("ui.tabs",$.ui.tabs,{abort:function(){if(this.xhr){this.xhr.abort()}}});$.widget("ui.tabs",$.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super();this._on({tabsbeforeload:function(event,ui){if(event.target!==this.element[0]||!this.options.spinner){return}var span=ui.tab.find("span"),html=span.html();span.html(this.options.spinner);ui.jqXHR.complete(function(){span.html(html)})}})}});$.widget("ui.tabs",$.ui.tabs,{options:{enable:null,disable:null},enable:function(index){var options=this.options,trigger;if(index&&options.disabled===true||$.isArray(options.disabled)&&$.inArray(index,options.disabled)!==-1){trigger=true}this._superApply(arguments);if(trigger){this._trigger("enable",null,this._ui(this.anchors[index],this.panels[index]))}},disable:function(index){var options=this.options,trigger;if(index&&options.disabled===false||$.isArray(options.disabled)&&$.inArray(index,options.disabled)===-1){trigger=true}this._superApply(arguments);if(trigger){this._trigger("disable",null,this._ui(this.anchors[index],this.panels[index]))}}});$.widget("ui.tabs",$.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(url,label,index){if(index===undefined){index=this.anchors.length}var doInsertAfter,panel,options=this.options,li=$(options.tabTemplate.replace(/#\{href\}/g,url).replace(/#\{label\}/g,label)),id=!url.indexOf("#")?url.replace("#",""):this._tabId(li);li.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",true);li.attr("aria-controls",id);doInsertAfter=index>=this.tabs.length;panel=this.element.find("#"+id);if(!panel.length){panel=this._createPanel(id);if(doInsertAfter){if(index>0){panel.insertAfter(this.panels.eq(-1))}else{panel.appendTo(this.element)}}else{panel.insertBefore(this.panels[index])}}panel.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();if(doInsertAfter){li.appendTo(this.tablist)}else{li.insertBefore(this.tabs[index])}options.disabled=$.map(options.disabled,function(n){return n>=index?++n:n});this.refresh();if(this.tabs.length===1&&options.active===false){this.option("active",0)}this._trigger("add",null,this._ui(this.anchors[index],this.panels[index]));return this},remove:function(index){index=this._getIndex(index);var options=this.options,tab=this.tabs.eq(index).remove(),panel=this._getPanelForTab(tab).remove();if(tab.hasClass("ui-tabs-active")&&this.anchors.length>2){this._activate(index+(index+1<this.anchors.length?1:-1))}options.disabled=$.map($.grep(options.disabled,function(n){return n!==index}),function(n){return n>=index?--n:n});this.refresh();this._trigger("remove",null,this._ui(tab.find("a")[0],panel[0]));return this}});$.widget("ui.tabs",$.ui.tabs,{length:function(){return this.anchors.length}});$.widget("ui.tabs",$.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(tab){var a=tab.is("li")?tab.find("a[href]"):tab;a=a[0];return $(a).closest("li").attr("aria-controls")||a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+getNextTabId()}});$.widget("ui.tabs",$.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(id){return $(this.options.panelTemplate).attr("id",id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)}});$.widget("ui.tabs",$.ui.tabs,{_create:function(){var options=this.options;if(options.active===null&&options.selected!==undefined){options.active=options.selected===-1?false:options.selected}this._super();options.selected=options.active;if(options.selected===false){options.selected=-1}},_setOption:function(key,value){if(key!=="selected"){return this._super(key,value)}var options=this.options;this._super("active",value===-1?false:value);options.selected=options.active;if(options.selected===false){options.selected=-1}},_eventHandler:function(){this._superApply(arguments);this.options.selected=this.options.active;if(this.options.selected===false){this.options.selected=-1}}});$.widget("ui.tabs",$.ui.tabs,{options:{show:null,select:null},_create:function(){this._super();if(this.options.active!==false){this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))}},_trigger:function(type,event,data){var tab,panel,ret=this._superApply(arguments);if(!ret){return false}if(type==="beforeActivate"){tab=data.newTab.length?data.newTab:data.oldTab;panel=data.newPanel.length?data.newPanel:data.oldPanel;ret=this._super("select",event,{tab:tab.find(".ui-tabs-anchor")[0],panel:panel[0],index:tab.closest("li").index()})}else if(type==="activate"&&data.newTab.length){ret=this._super("show",event,{tab:data.newTab.find(".ui-tabs-anchor")[0],panel:data.newPanel[0],index:data.newTab.closest("li").index()})}return ret}});$.widget("ui.tabs",$.ui.tabs,{select:function(index){index=this._getIndex(index);if(index===-1){if(this.options.collapsible&&this.options.selected!==-1){index=this.options.selected}else{return}}this.anchors.eq(index).trigger(this.options.event+this.eventNamespace)}});(function(){var listId=0;$.widget("ui.tabs",$.ui.tabs,{options:{cookie:null},_create:function(){var options=this.options,active;if(options.active==null&&options.cookie){active=parseInt(this._cookie(),10);if(active===-1){active=false}options.active=active}this._super()},_cookie:function(active){var cookie=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++listId)];if(arguments.length){cookie.push(active===false?-1:active);cookie.push(this.options.cookie)}return $.cookie.apply(null,cookie)},_refresh:function(){this._super();if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)}},_eventHandler:function(){this._superApply(arguments);if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)}},_destroy:function(){this._super();if(this.options.cookie){this._cookie(null,this.options.cookie)}}})})();$.widget("ui.tabs",$.ui.tabs,{_trigger:function(type,event,data){var _data=$.extend({},data);if(type==="load"){_data.panel=_data.panel[0];_data.tab=_data.tab.find(".ui-tabs-anchor")[0]}return this._super(type,event,_data)}});$.widget("ui.tabs",$.ui.tabs,{options:{fx:null},_getFx:function(){var hide,show,fx=this.options.fx;if(fx){if($.isArray(fx)){hide=fx[0];show=fx[1]}else{hide=show=fx}}return fx?{show:show,hide:hide}:null},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel,fx=this._getFx();if(!fx){return this._super(event,eventData)}that.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData)}function show(){eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(toShow.length&&fx.show){toShow.animate(fx.show,fx.show.duration,function(){complete()})}else{toShow.show();complete()}}if(toHide.length&&fx.hide){toHide.animate(fx.hide,fx.hide.duration,function(){eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");show()})}else{eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");toHide.hide();show()}}})}})(jQuery);(function($){var increments=0;function addDescribedBy(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")))}function removeDescribedBy(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1)}elem.removeData("ui-tooltip-id");describedby=$.trim(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby)}else{elem.removeAttr("aria-describedby")}}$.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){return $(this).attr("title")},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable()}},_setOption:function(key,value){var that=this;if(key==="disabled"){this[value?"_disable":"_enable"]();this.options[key]=value;return}this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,element){that._updateContent(element)})}},_disable:function(){var that=this;$.each(this.tooltips,function(id,element){var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true)});this.element.find(this.options.items).andSelf().each(function(){var element=$(this);if(element.is("[title]")){element.data("ui-tooltip-title",element.attr("title")).attr("title","")}})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"))}})},open:function(event){var that=this,target=$(event?event.target:this.element).closest(this.options.items);if(!target.length||target.data("ui-tooltip-id")){return}if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"))}target.data("ui-tooltip-open",true);if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,true)}if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","")}})}this._updateContent(target,event)},_updateContent:function(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"){return this._open(event,target,contentOption)}content=contentOption.call(target[0],function(response){if(!target.data("ui-tooltip-open")){return}that._delay(function(){if(event){event.type=eventType}this._open(event,target,response)})});if(content){this._open(event,target,content)}},_open:function(event,target,content){var tooltip,events,delayedShow,positionOption=$.extend({},this.options.position);if(!content){return}tooltip=this._find(target);if(tooltip.length){tooltip.find(".ui-tooltip-content").html(content);return}if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","")}else{target.removeAttr("title")}}tooltip=this._tooltip(target);addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return}tooltip.position(positionOption)}if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});position(event)}else{tooltip.position($.extend({of:target},this.options.position))}tooltip.hide();this._show(tooltip,this.options.show);if(this.options.show&&this.options.show.delay){delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow)}},$.fx.interval)}this._trigger("open",event,{tooltip:tooltip});events={keyup:function(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,true)}},remove:function(){this._removeTooltip(tooltip)}};if(!event||event.type==="mouseover"){events.mouseleave="close"}if(!event||event.type==="focusin"){events.focusout="close"}this._on(true,target,events)},close:function(event){var that=this,target=$(event?event.currentTarget:this.element),tooltip=this._find(target);if(this.closing){return}if(target.data("ui-tooltip-title")){target.attr("title",target.data("ui-tooltip-title"))}removeDescribedBy(target);tooltip.stop(true);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this))});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");if(target[0]!==this.element[0]){this._off(target,"remove")}this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id]})}this.closing=true;this._trigger("close",event,{tooltip:tooltip});this.closing=false},_tooltip:function(element){var id="ui-tooltip-"+increments++,tooltip=$("<div>").attr({id:id,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));$("<div>").addClass("ui-tooltip-content").appendTo(tooltip);tooltip.appendTo(this.document[0].body);if($.fn.bgiframe){tooltip.bgiframe()}this.tooltips[id]=element;return tooltip},_find:function(target){var id=target.data("ui-tooltip-id");return id?$("#"+id):$()},_removeTooltip:function(tooltip){tooltip.remove();delete this.tooltips[tooltip.attr("id")]},_destroy:function(){var that=this;$.each(this.tooltips,function(id,element){var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true);$("#"+id).remove();if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));element.removeData("ui-tooltip-title")}})}})})(jQuery);RegExp.escape=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")};(function(undefined){"use strict";var $;if(typeof jQuery!=="undefined"&&jQuery){$=jQuery}else{$={}}$.csv={defaults:{separator:",",delimiter:'"',headers:true},hooks:{castToScalar:function(value,state){var hasDot=/\./;if(isNaN(value)){return value}else{if(hasDot.test(value)){return parseFloat(value)}else{var integer=parseInt(value);if(isNaN(integer)){return null}else{return integer}}}}},parsers:{parse:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1}if(!options.state.colNum){options.state.colNum=1}var data=[];var entry=[];var state=0;var value="";var exit=false;function endOfEntry(){state=0;value="";if(options.start&&options.state.rowNum<options.start){entry=[];options.state.rowNum++;options.state.colNum=1;return}if(options.onParseEntry===undefined){data.push(entry)}else{var hookVal=options.onParseEntry(entry,options.state);if(hookVal!==false){data.push(hookVal)}}entry=[];if(options.end&&options.state.rowNum>=options.end){exit=true}options.state.rowNum++;options.state.colNum=1}function endOfValue(){if(options.onParseValue===undefined){entry.push(value)}else{var hook=options.onParseValue(value,options.state);if(hook!==false){entry.push(hook)}}value="";state=0;options.state.colNum++}var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\r\n|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);match=new RegExp(matchSrc,"gm");csv.replace(match,function(m0){if(exit){return}switch(state){case 0:if(m0===separator){value+="";endOfValue();break}if(m0===delimiter){state=1;break}if(/^(\r\n|\n|\r)$/.test(m0)){endOfValue();endOfEntry();break}value+=m0;state=3;break;case 1:if(m0===delimiter){state=2;break}value+=m0;state=1;break;case 2:if(m0===delimiter){value+=m0;state=1;break}if(m0===separator){endOfValue();break}if(/^(\r\n|\n|\r)$/.test(m0)){endOfValue();endOfEntry();break}throw new Error("CSVDataError: Illegal State [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]");case 3:if(m0===separator){endOfValue();break}if(/^(\r\n|\n|\r)$/.test(m0)){endOfValue();endOfEntry();break}if(m0===delimiter){throw new Error("CSVDataError: Illegal Quote [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]")}throw new Error("CSVDataError: Illegal Data [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]");default:throw new Error("CSVDataError: Unknown State [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]")}});if(entry.length!==0){endOfValue();endOfEntry()}return data},splitLines:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1}var entries=[];var state=0;var entry="";var exit=false;function endOfLine(){state=0;if(options.start&&options.state.rowNum<options.start){entry="";options.state.rowNum++;return}if(options.onParseEntry===undefined){entries.push(entry)}else{var hookVal=options.onParseEntry(entry,options.state);if(hookVal!==false){entries.push(hookVal)}}entry="";if(options.end&&options.state.rowNum>=options.end){exit=true}options.state.rowNum++}var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);match=new RegExp(matchSrc,"gm");csv.replace(match,function(m0){if(exit){return}switch(state){case 0:if(m0===separator){entry+=m0;state=0;break}if(m0===delimiter){entry+=m0;state=1;break}if(m0==="\n"){endOfLine();break}if(/^\r$/.test(m0)){break}entry+=m0;state=3;break;case 1:if(m0===delimiter){entry+=m0;state=2;break}entry+=m0;state=1;break;case 2:var prevChar=entry.substr(entry.length-1);if(m0===delimiter&&prevChar===delimiter){entry+=m0;state=1;break}if(m0===separator){entry+=m0;state=0;break}if(m0==="\n"){endOfLine();break}if(m0==="\r"){break}throw new Error("CSVDataError: Illegal state [Row:"+options.state.rowNum+"]");case 3:if(m0===separator){entry+=m0;state=0;break}if(m0==="\n"){endOfLine();break}if(m0==="\r"){break}if(m0===delimiter){throw new Error("CSVDataError: Illegal quote [Row:"+options.state.rowNum+"]")}throw new Error("CSVDataError: Illegal state [Row:"+options.state.rowNum+"]");default:throw new Error("CSVDataError: Unknown state [Row:"+options.state.rowNum+"]")}});if(entry!==""){endOfLine()}return entries},parseEntry:function(csv,options){var separator=options.separator;var delimiter=options.delimiter;if(!options.state.rowNum){options.state.rowNum=1}if(!options.state.colNum){options.state.colNum=1}var entry=[];var state=0;var value="";function endOfValue(){if(options.onParseValue===undefined){entry.push(value)}else{var hook=options.onParseValue(value,options.state);if(hook!==false){entry.push(hook)}}value="";state=0;options.state.colNum++}if(!options.match){var escSeparator=RegExp.escape(separator);var escDelimiter=RegExp.escape(delimiter);var match=/(D|S|\n|\r|[^DS\r\n]+)/;var matchSrc=match.source;matchSrc=matchSrc.replace(/S/g,escSeparator);matchSrc=matchSrc.replace(/D/g,escDelimiter);options.match=new RegExp(matchSrc,"gm")}csv.replace(options.match,function(m0){switch(state){case 0:if(m0===separator){value+="";endOfValue();break}if(m0===delimiter){state=1;break}if(m0==="\n"||m0==="\r"){break}value+=m0;state=3;break;case 1:if(m0===delimiter){state=2;break}value+=m0;state=1;break;case 2:if(m0===delimiter){value+=m0;state=1;break}if(m0===separator){endOfValue();break}if(m0==="\n"||m0==="\r"){break}throw new Error("CSVDataError: Illegal State [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]");case 3:if(m0===separator){endOfValue();break}if(m0==="\n"||m0==="\r"){break}if(m0===delimiter){throw new Error("CSVDataError: Illegal Quote [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]")}throw new Error("CSVDataError: Illegal Data [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]");default:throw new Error("CSVDataError: Unknown State [Row:"+options.state.rowNum+"][Col:"+options.state.colNum+"]")}});endOfValue();return entry}},helpers:{collectPropertyNames:function(objects){var o,propName,props=[];for(o in objects){for(propName in objects[o]){if(objects[o].hasOwnProperty(propName)&&props.indexOf(propName)<0&&typeof objects[o][propName]!=="function"){props.push(propName)}}}return props}},toArray:function(csv,options,callback){options=options!==undefined?options:{};var config={};config.callback=callback!==undefined&&typeof callback==="function"?callback:false;config.separator="separator"in options?options.separator:$.csv.defaults.separator;config.delimiter="delimiter"in options?options.delimiter:$.csv.defaults.delimiter;var state=options.state!==undefined?options.state:{};options={delimiter:config.delimiter,separator:config.separator,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,state:state};var entry=$.csv.parsers.parseEntry(csv,options);if(!config.callback){return entry}else{config.callback("",entry)}},toArrays:function(csv,options,callback){options=options!==undefined?options:{};var config={};config.callback=callback!==undefined&&typeof callback==="function"?callback:false;config.separator="separator"in options?options.separator:$.csv.defaults.separator;config.delimiter="delimiter"in options?options.delimiter:$.csv.defaults.delimiter;var data=[];options={delimiter:config.delimiter,separator:config.separator,onPreParse:options.onPreParse,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,onPostParse:options.onPostParse,start:options.start,end:options.end,state:{rowNum:1,colNum:1}};if(options.onPreParse!==undefined){options.onPreParse(csv,options.state)}data=$.csv.parsers.parse(csv,options);if(options.onPostParse!==undefined){options.onPostParse(data,options.state)}if(!config.callback){return data}else{config.callback("",data)}},toObjects:function(csv,options,callback){options=options!==undefined?options:{};var config={};config.callback=callback!==undefined&&typeof callback==="function"?callback:false;config.separator="separator"in options?options.separator:$.csv.defaults.separator;config.delimiter="delimiter"in options?options.delimiter:$.csv.defaults.delimiter;config.headers="headers"in options?options.headers:$.csv.defaults.headers;options.start="start"in options?options.start:1;if(config.headers){options.start++}if(options.end&&config.headers){options.end++}var lines=[];var data=[];options={delimiter:config.delimiter,separator:config.separator,onPreParse:options.onPreParse,onParseEntry:options.onParseEntry,onParseValue:options.onParseValue,onPostParse:options.onPostParse,start:options.start,end:options.end,state:{rowNum:1,colNum:1},match:false,transform:options.transform};var headerOptions={delimiter:config.delimiter,separator:config.separator,start:1,end:1,state:{rowNum:1,colNum:1}};if(options.onPreParse!==undefined){options.onPreParse(csv,options.state)}var headerLine=$.csv.parsers.splitLines(csv,headerOptions);var headers=$.csv.toArray(headerLine[0],options);lines=$.csv.parsers.splitLines(csv,options);options.state.colNum=1;if(headers){options.state.rowNum=2}else{options.state.rowNum=1}for(var i=0,len=lines.length;i<len;i++){var entry=$.csv.toArray(lines[i],options);var object={};for(var j=0;j<headers.length;j++){object[headers[j]]=entry[j]}if(options.transform!==undefined){data.push(options.transform.call(undefined,object))}else{data.push(object)}options.state.rowNum++}if(options.onPostParse!==undefined){options.onPostParse(data,options.state)}if(!config.callback){return data}else{config.callback("",data)}},fromArrays:function(arrays,options,callback){options=options!==undefined?options:{};var config={};config.callback=callback!==undefined&&typeof callback==="function"?callback:false;config.separator="separator"in options?options.separator:$.csv.defaults.separator;config.delimiter="delimiter"in options?options.delimiter:$.csv.defaults.delimiter;var output="",line,lineValues,i,j;for(i=0;i<arrays.length;i++){line=arrays[i];lineValues=[];for(j=0;j<line.length;j++){var strValue=line[j]===undefined||line[j]===null?"":line[j].toString();if(strValue.indexOf(config.delimiter)>-1){strValue=strValue.replace(new RegExp(config.delimiter,"g"),config.delimiter+config.delimiter)}var escMatcher="\n|\r|S|D";escMatcher=escMatcher.replace("S",config.separator);escMatcher=escMatcher.replace("D",config.delimiter);if(strValue.search(escMatcher)>-1){strValue=config.delimiter+strValue+config.delimiter}lineValues.push(strValue)}output+=lineValues.join(config.separator)+"\r\n"}if(!config.callback){return output}else{config.callback("",output)}},fromObjects:function(objects,options,callback){options=options!==undefined?options:{};var config={};config.callback=callback!==undefined&&typeof callback==="function"?callback:false;config.separator="separator"in options?options.separator:$.csv.defaults.separator;config.delimiter="delimiter"in options?options.delimiter:$.csv.defaults.delimiter;config.headers="headers"in options?options.headers:$.csv.defaults.headers;config.sortOrder="sortOrder"in options?options.sortOrder:"declare";config.manualOrder="manualOrder"in options?options.manualOrder:[];config.transform=options.transform;if(typeof config.manualOrder==="string"){config.manualOrder=$.csv.toArray(config.manualOrder,config)}if(config.transform!==undefined){var origObjects=objects;objects=[];var i;for(i=0;i<origObjects.length;i++){objects.push(config.transform.call(undefined,origObjects[i]))}}var props=$.csv.helpers.collectPropertyNames(objects);if(config.sortOrder==="alpha"){props.sort()}if(config.manualOrder.length>0){var propsManual=[].concat(config.manualOrder);var p;for(p=0;p<props.length;p++){if(propsManual.indexOf(props[p])<0){propsManual.push(props[p])}}props=propsManual}var o,p,line,output=[],propName;if(config.headers){output.push(props)}for(o=0;o<objects.length;o++){line=[];for(p=0;p<props.length;p++){propName=props[p];if(propName in objects[o]&&typeof objects[o][propName]!=="function"){line.push(objects[o][propName])}else{line.push("")}}output.push(line)}return $.csv.fromArrays(output,options,config.callback)}};$.csvEntry2Array=$.csv.toArray;$.csv2Array=$.csv.toArrays;$.csv2Dictionary=$.csv.toObjects;if(typeof module!=="undefined"&&module.exports){module.exports=$.csv}}).call(this);(function(){var focusEvent="onfocusin"in document.createElement("input")?"focusin":"focus";var n=document.createElement("div");n.appendChild(document.createTextNode("x-"));n.appendChild(document.createTextNode("x"));n.normalize();var canNormalize=n.firstChild.length==3;bililiteRange=function(el,debug){var ret;if(debug){ret=new NothingRange}else if(window.getSelection&&el.setSelectionRange){try{el.selectionStart;ret=new InputRange}catch(e){ret=new NothingRange}}else if(window.getSelection){ret=new W3CRange}else if(document.selection){ret=new IERange}else{ret=new NothingRange}ret._el=el;ret._doc=el.ownerDocument;ret._win="defaultView"in ret._doc?ret._doc.defaultView:ret._doc.parentWindow;ret._textProp=textProp(el);ret._bounds=[0,ret.length()];if(!("bililiteRangeMouseDown"in ret._doc)){var _doc={_el:ret._doc};ret._doc.bililiteRangeMouseDown=false;bililiteRange.fn.listen.call(_doc,"mousedown",function(){ret._doc.bililiteRangeMouseDown=true});bililiteRange.fn.listen.call(_doc,"mouseup",function(){ret._doc.bililiteRangeMouseDown=false})}if(!("bililiteRangeSelection"in el)){function trackSelection(evt){if(evt&&evt.which==9){ret._nativeSelect(ret._nativeRange(el.bililiteRangeSelection))}else{el.bililiteRangeSelection=ret._nativeSelection()}}trackSelection();if("onbeforedeactivate"in el){ret.listen("beforedeactivate",trackSelection)}else{ret.listen("mouseup",trackSelection).listen("keyup",trackSelection)}ret.listen(focusEvent,function(){if(!ret._doc.bililiteRangeMouseDown){ret._nativeSelect(ret._nativeRange(el.bililiteRangeSelection))}})}if(!("oninput"in el)){var inputhack=function(){ret.dispatch({type:"input",bubbles:true})};ret.listen("keyup",inputhack);ret.listen("cut",inputhack);ret.listen("paste",inputhack);ret.listen("drop",inputhack);el.oninput="patched"}return ret};function textProp(el){if(typeof el.value==="string")return"value";if(typeof el.text!="undefined")return"text";if(typeof el.textContent!="undefined")return"textContent";return"innerText"}function Range(){}Range.prototype={length:function(){return this._el[this._textProp].replace(/\r/g,"").length},bounds:function(s){if(bililiteRange.bounds[s]){this._bounds=bililiteRange.bounds[s].apply(this)}else if(s){this._bounds=s}else{var b=[Math.max(0,Math.min(this.length(),this._bounds[0])),Math.max(0,Math.min(this.length(),this._bounds[1]))];b[1]=Math.max(b[0],b[1]);return b}return this},select:function(){var b=this._el.bililiteRangeSelection=this.bounds();if(this._el===this._doc.activeElement){this._nativeSelect(this._nativeRange(b))}this.dispatch({type:"select",bubbles:true});return this},text:function(text,select){if(arguments.length){var bounds=this.bounds(),el=this._el;this.dispatch({type:"beforeinput",bubbles:true,data:text,bounds:bounds});this._nativeSetText(text,this._nativeRange(bounds));if(select=="start"){this.bounds([bounds[0],bounds[0]])}else if(select=="end"){this.bounds([bounds[0]+text.length,bounds[0]+text.length])}else if(select=="all"){this.bounds([bounds[0],bounds[0]+text.length])}this.dispatch({type:"input",bubbles:true,data:text,bounds:bounds});return this}else{return this._nativeGetText(this._nativeRange(this.bounds())).replace(/\r/g,"")}},insertEOL:function(){this._nativeEOL();this._bounds=[this._bounds[0]+1,this._bounds[0]+1];return this},sendkeys:function(text){var self=this;this.data().sendkeysOriginalText=this.text();this.data().sendkeysBounds=undefined;function simplechar(rng,c){if(/^{[^}]*}$/.test(c))c=c.slice(1,-1);for(var i=0;i<c.length;++i){var x=c.charCodeAt(i);rng.dispatch({type:"keypress",bubbles:true,keyCode:x,which:x,charCode:x})}rng.text(c,"end")}text.replace(/{[^}]*}|[^{]+|{/g,function(part){(bililiteRange.sendkeys[part]||simplechar)(self,part,simplechar)});this.bounds(this.data().sendkeysBounds);this.dispatch({type:"sendkeys",which:text});return this},top:function(){return this._nativeTop(this._nativeRange(this.bounds()))},scrollIntoView:function(scroller){var top=this.top();if(this._el.scrollTop>top||this._el.scrollTop+this._el.clientHeight<top){if(scroller){scroller.call(this._el,top)}else{this._el.scrollTop=top}}return this},wrap:function(n){this._nativeWrap(n,this._nativeRange(this.bounds()));return this},selection:function(text){if(arguments.length){return this.bounds("selection").text(text,"end").select()}else{return this.bounds("selection").text()}},clone:function(){return bililiteRange(this._el).bounds(this.bounds())},all:function(text){if(arguments.length){this.dispatch({type:"beforeinput",bubbles:true,data:text});this._el[this._textProp]=text;this.dispatch({type:"input",bubbles:true,data:text});return this}else{return this._el[this._textProp].replace(/\r/g,"")}},element:function(){return this._el},dispatch:function(opts){opts=opts||{};var event=document.createEvent?document.createEvent("CustomEvent"):this._doc.createEventObject();event.initCustomEvent&&event.initCustomEvent(opts.type,!!opts.bubbles,!!opts.cancelable,opts.detail);for(var key in opts)event[key]=opts[key];var el=this._el;setTimeout(function(){try{el.dispatchEvent?el.dispatchEvent(event):el.fireEvent("on"+opts.type,document.createEventObject())}catch(e){var listeners=el["listen"+opts.type];if(listeners)for(var i=0;i<listeners.length;++i){listeners[i].call(el,event)}}},0);return this},listen:function(type,func){var el=this._el;if(el.addEventListener){el.addEventListener(type,func)}else{el.attachEvent("on"+type,func);var listeners=el["listen"+type]=el["listen"+type]||[];listeners.push(func)}return this},dontlisten:function(type,func){var el=this._el;if(el.removeEventListener){el.removeEventListener(type,func)}else try{el.detachEvent("on"+type,func)}catch(e){var listeners=el["listen"+type];if(listeners)for(var i=0;i<listeners.length;++i){if(listeners[i]===func)listeners[i]=function(){}}}return this}};bililiteRange.fn=Range.prototype;bililiteRange.extend=function(fns){for(fn in fns)Range.prototype[fn]=fns[fn]};bililiteRange.bounds={all:function(){return[0,this.length()]},start:function(){return[0,0]},end:function(){return[this.length(),this.length()]},selection:function(){if(this._el===this._doc.activeElement){this.bounds("all");return this._nativeSelection()}else{return this._el.bililiteRangeSelection}}};bililiteRange.sendkeys={"{enter}":function(rng){rng.dispatch({type:"keypress",bubbles:true,keyCode:"\n",which:"\n",charCode:"\n"});rng.insertEOL()},"{tab}":function(rng,c,simplechar){simplechar(rng,"\t")},"{newline}":function(rng,c,simplechar){simplechar(rng,"\n")},"{backspace}":function(rng){var b=rng.bounds();if(b[0]==b[1])rng.bounds([b[0]-1,b[0]]);rng.text("","end")},"{del}":function(rng){var b=rng.bounds();if(b[0]==b[1])rng.bounds([b[0],b[0]+1]);rng.text("","end")},"{rightarrow}":function(rng){var b=rng.bounds();if(b[0]==b[1])++b[1];rng.bounds([b[1],b[1]])},"{leftarrow}":function(rng){var b=rng.bounds();if(b[0]==b[1])--b[0];rng.bounds([b[0],b[0]])},"{selectall}":function(rng){rng.bounds("all")},"{selection}":function(rng){var s=rng.data().sendkeysOriginalText;for(var i=0;i<s.length;++i){var x=s.charCodeAt(i);rng.dispatch({type:"keypress",bubbles:true,keyCode:x,which:x,charCode:x})}rng.text(s,"end")},"{mark}":function(rng){rng.data().sendkeysBounds=rng.bounds()}};bililiteRange.sendkeys["{Enter}"]=bililiteRange.sendkeys["{enter}"];bililiteRange.sendkeys["{Backspace}"]=bililiteRange.sendkeys["{backspace}"];bililiteRange.sendkeys["{Delete}"]=bililiteRange.sendkeys["{del}"];bililiteRange.sendkeys["{ArrowRight}"]=bililiteRange.sendkeys["{rightarrow}"];bililiteRange.sendkeys["{ArrowLeft}"]=bililiteRange.sendkeys["{leftarrow}"];function IERange(){}IERange.prototype=new Range;IERange.prototype._nativeRange=function(bounds){var rng;if(this._el.tagName=="INPUT"){rng=this._el.createTextRange()}else{rng=this._doc.body.createTextRange();rng.moveToElementText(this._el)}if(bounds){if(bounds[1]<0)bounds[1]=0;if(bounds[0]>this.length())bounds[0]=this.length();if(bounds[1]<rng.text.replace(/\r/g,"").length){rng.moveEnd("character",-1);rng.moveEnd("character",bounds[1]-rng.text.replace(/\r/g,"").length)}if(bounds[0]>0)rng.moveStart("character",bounds[0])}return rng};IERange.prototype._nativeSelect=function(rng){rng.select()};IERange.prototype._nativeSelection=function(){var rng=this._nativeRange();var len=this.length();var sel=this._doc.selection.createRange();try{return[iestart(sel,rng),ieend(sel,rng)]}catch(e){return sel.parentElement().sourceIndex<this._el.sourceIndex?[0,0]:[len,len]}};IERange.prototype._nativeGetText=function(rng){return rng.text};IERange.prototype._nativeSetText=function(text,rng){rng.text=text};IERange.prototype._nativeEOL=function(){if("value"in this._el){this.text("\n")}else{this._nativeRange(this.bounds()).pasteHTML("\n<br/>")}};IERange.prototype._nativeTop=function(rng){var startrng=this._nativeRange([0,0]);return rng.boundingTop-startrng.boundingTop};IERange.prototype._nativeWrap=function(n,rng){var div=document.createElement("div");div.appendChild(n);var html=div.innerHTML.replace("><",">"+rng.htmlText+"<");rng.pasteHTML(html)};function iestart(rng,constraint){var len=constraint.text.replace(/\r/g,"").length;if(rng.compareEndPoints("StartToStart",constraint)<=0)return 0;if(rng.compareEndPoints("StartToEnd",constraint)>=0)return len;for(var i=0;rng.compareEndPoints("StartToStart",constraint)>0;++i,rng.moveStart("character",-1));return i}function ieend(rng,constraint){var len=constraint.text.replace(/\r/g,"").length;if(rng.compareEndPoints("EndToEnd",constraint)>=0)return len;if(rng.compareEndPoints("EndToStart",constraint)<=0)return 0;for(var i=0;rng.compareEndPoints("EndToStart",constraint)>0;++i,rng.moveEnd("character",-1));return i}function InputRange(){}InputRange.prototype=new Range;InputRange.prototype._nativeRange=function(bounds){return bounds||[0,this.length()]};InputRange.prototype._nativeSelect=function(rng){this._el.setSelectionRange(rng[0],rng[1])};InputRange.prototype._nativeSelection=function(){return[this._el.selectionStart,this._el.selectionEnd]};InputRange.prototype._nativeGetText=function(rng){return this._el.value.substring(rng[0],rng[1])};InputRange.prototype._nativeSetText=function(text,rng){var val=this._el.value;this._el.value=val.substring(0,rng[0])+text+val.substring(rng[1])};InputRange.prototype._nativeEOL=function(){this.text("\n")};InputRange.prototype._nativeTop=function(rng){var clone=this._el.cloneNode(true);clone.style.visibility="hidden";clone.style.position="absolute";this._el.parentNode.insertBefore(clone,this._el);clone.style.height="1px";clone.value=this._el.value.slice(0,rng[0]);var top=clone.scrollHeight;clone.value="X";top-=clone.scrollHeight;clone.parentNode.removeChild(clone);return top};InputRange.prototype._nativeWrap=function(){throw new Error("Cannot wrap in a text element")};function W3CRange(){}W3CRange.prototype=new Range;W3CRange.prototype._nativeRange=function(bounds){var rng=this._doc.createRange();rng.selectNodeContents(this._el);if(bounds){w3cmoveBoundary(rng,bounds[0],true,this._el);rng.collapse(true);w3cmoveBoundary(rng,bounds[1]-bounds[0],false,this._el)}return rng};W3CRange.prototype._nativeSelect=function(rng){this._win.getSelection().removeAllRanges();this._win.getSelection().addRange(rng)};W3CRange.prototype._nativeSelection=function(){var rng=this._nativeRange();if(this._win.getSelection().rangeCount==0)return[this.length(),this.length()];var sel=this._win.getSelection().getRangeAt(0);return[w3cstart(sel,rng),w3cend(sel,rng)]};W3CRange.prototype._nativeGetText=function(rng){return String.prototype.slice.apply(this._el.textContent,this.bounds())};W3CRange.prototype._nativeSetText=function(text,rng){rng.deleteContents();rng.insertNode(this._doc.createTextNode(text));if(canNormalize)this._el.normalize()};W3CRange.prototype._nativeEOL=function(){var rng=this._nativeRange(this.bounds());rng.deleteContents();var br=this._doc.createElement("br");br.setAttribute("_moz_dirty","");rng.insertNode(br);rng.insertNode(this._doc.createTextNode("\n"));rng.collapse(false)};W3CRange.prototype._nativeTop=function(rng){if(this.length==0)return 0;if(rng.toString()==""){var textnode=this._doc.createTextNode("X");rng.insertNode(textnode)}var startrng=this._nativeRange([0,1]);var top=rng.getBoundingClientRect().top-startrng.getBoundingClientRect().top;if(textnode)textnode.parentNode.removeChild(textnode);return top};W3CRange.prototype._nativeWrap=function(n,rng){rng.surroundContents(n)};function nextnode(node,root){if(node.firstChild)return node.firstChild;if(node.nextSibling)return node.nextSibling;if(node===root)return null;while(node.parentNode){node=node.parentNode;if(node==root)return null;if(node.nextSibling)return node.nextSibling}return null}function w3cmoveBoundary(rng,n,bStart,el){if(n<=0)return;var node=rng[bStart?"startContainer":"endContainer"];if(node.nodeType==3){n+=rng[bStart?"startOffset":"endOffset"]}while(node){if(node.nodeType==3){var length=node.nodeValue.length;if(n<=length){rng[bStart?"setStart":"setEnd"](node,n);if(n==length){for(var next=nextnode(node,el);next&&next.nodeType==3&&next.nodeValue.length==0;next=nextnode(next,el)){rng[bStart?"setStartAfter":"setEndAfter"](next)}if(next&&next.nodeType==1&&next.nodeName=="BR")rng[bStart?"setStartAfter":"setEndAfter"](next)}return}else{rng[bStart?"setStartAfter":"setEndAfter"](node);n-=length}}node=nextnode(node,el)}}var START_TO_START=0;var START_TO_END=1;var END_TO_END=2;var END_TO_START=3;function w3cstart(rng,constraint){if(rng.compareBoundaryPoints(START_TO_START,constraint)<=0)return 0;if(rng.compareBoundaryPoints(END_TO_START,constraint)>=0)return constraint.toString().length;rng=rng.cloneRange();rng.setEnd(constraint.endContainer,constraint.endOffset);return constraint.toString().replace(/\r/g,"").length-rng.toString().replace(/\r/g,"").length}function w3cend(rng,constraint){if(rng.compareBoundaryPoints(END_TO_END,constraint)>=0)return constraint.toString().length;if(rng.compareBoundaryPoints(START_TO_END,constraint)<=0)return 0;rng=rng.cloneRange();rng.setStart(constraint.startContainer,constraint.startOffset);return rng.toString().replace(/\r/g,"").length}function NothingRange(){}NothingRange.prototype=new Range;NothingRange.prototype._nativeRange=function(bounds){return bounds||[0,this.length()]};NothingRange.prototype._nativeSelect=function(rng){};NothingRange.prototype._nativeSelection=function(){return[0,0]};NothingRange.prototype._nativeGetText=function(rng){return this._el[this._textProp].substring(rng[0],rng[1])};NothingRange.prototype._nativeSetText=function(text,rng){var val=this._el[this._textProp];this._el[this._textProp]=val.substring(0,rng[0])+text+val.substring(rng[1])};NothingRange.prototype._nativeEOL=function(){this.text("\n")};NothingRange.prototype._nativeTop=function(){return 0};NothingRange.prototype._nativeWrap=function(){throw new Error("Wrapping not implemented")};var data=[];bililiteRange.fn.data=function(){var index=this.element().bililiteRangeData;if(index==undefined){index=this.element().bililiteRangeData=data.length;data[index]=new Data(this)}return data[index]};try{Object.defineProperty({},"foo",{});var Data=function(rng){Object.defineProperty(this,"values",{value:{}});Object.defineProperty(this,"sourceRange",{value:rng});Object.defineProperty(this,"toJSON",{value:function(){var ret={};for(var i in Data.prototype)if(i in this.values)ret[i]=this.values[i];return ret}});Object.defineProperty(this,"all",{get:function(){var ret={};for(var i in Data.prototype)ret[i]=this[i];return ret}})};Data.prototype={};Object.defineProperty(Data.prototype,"values",{value:{}});Object.defineProperty(Data.prototype,"monitored",{value:{}});bililiteRange.data=function(name,newdesc){newdesc=newdesc||{};var desc=Object.getOwnPropertyDescriptor(Data.prototype,name)||{};if("enumerable"in newdesc)desc.enumerable=!!newdesc.enumerable;if(!("enumerable"in desc))desc.enumerable=true;if("value"in newdesc)Data.prototype.values[name]=newdesc.value;if("monitored"in newdesc)Data.prototype.monitored[name]=newdesc.monitored;desc.configurable=true;desc.get=function(){if(name in this.values)return this.values[name];return Data.prototype.values[name]};desc.set=function(value){this.values[name]=value;if(Data.prototype.monitored[name])this.sourceRange.dispatch({type:"bililiteRangeData",bubbles:true,detail:{name:name,value:value}})};Object.defineProperty(Data.prototype,name,desc)}}catch(err){Data=function(rng){this.sourceRange=rng};Data.prototype={};bililiteRange.data=function(name,newdesc){if("value"in newdesc)Data.prototype[name]=newdesc.value}}})();if(!Array.prototype.forEach){Array.prototype.forEach=function(fun){"use strict";if(this===void 0||this===null)throw new TypeError;var t=Object(this);var len=t.length>>>0;if(typeof fun!=="function")throw new TypeError;var thisArg=arguments.length>=2?arguments[1]:void 0;for(var i=0;i<len;i++){if(i in t)fun.call(thisArg,t[i],i,t)}}}(function($){$.fn.sendkeys=function(x){x=x.replace(/([^{])\n/g,"$1{enter}");return this.each(function(){bililiteRange(this).bounds("selection").sendkeys(x).select();this.focus()})};$.event.special.keydown=$.event.special.keydown||{};$.event.special.keydown._default=function(evt){if(evt.isTrusted)return false;if(evt.ctrlKey||evt.altKey||evt.metaKey)return false;if(evt.key==null)return false;var target=evt.target;if(target.isContentEditable||target.nodeName=="INPUT"||target.nodeName=="TEXTAREA"){var key=evt.key;if(key.length>1&&key.charAt(0)!="{")key="{"+key+"}";$(target).sendkeys(key);return true}return false}})(jQuery);(function(define){define(["jquery"],function($){return function(){var $container;var listener;var toastId=0;var toastType={error:"error",info:"info",success:"success",warning:"warning"};var defaultOptions={tapToDismiss:true,toastClass:"toast",containerId:"toast-container",debug:false,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:undefined,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:undefined,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:true,preventDuplicates:false,progressBar:false};var toastr={addToastType:addToastType,clear:clear,remove:remove,error:error,getContainer:getContainer,info:info,options:{},subscribe:subscribe,success:success,version:"2.1.1",warning:warning};var previousToast;return toastr;function addToastType(typeName){defaultOptions.iconClasses[typeName]="toast-"+typeName;toastType[typeName]=typeName;toastr[typeName]=function(message,title,optionsOverride){return customToastType(typeName,message,title,optionsOverride)}}function error(message,title,optionsOverride){return notify({type:toastType.error,iconClass:getOptions().iconClasses.error,message:message,optionsOverride:optionsOverride,title:title})}function getContainer(options,create){if(!options){options=getOptions()}$container=$("#"+options.containerId);if($container.length){return $container}if(create){$container=createContainer(options)}return $container}function info(message,title,optionsOverride){return notify({type:toastType.info,iconClass:getOptions().iconClasses.info,message:message,optionsOverride:optionsOverride,title:title})}function subscribe(callback){listener=callback}function success(message,title,optionsOverride){return notify({type:toastType.success,iconClass:getOptions().iconClasses.success,message:message,optionsOverride:optionsOverride,title:title})}function warning(message,title,optionsOverride){return notify({type:toastType.warning,iconClass:getOptions().iconClasses.warning,message:message,optionsOverride:optionsOverride,title:title})}function clear($toastElement,clearOptions){var options=getOptions();if(!$container){getContainer(options)}if(!clearToast($toastElement,options,clearOptions)){clearContainer(options)}}function remove($toastElement){var options=getOptions();if(!$container){getContainer(options)}if($toastElement&&$(":focus",$toastElement).length===0){removeToast($toastElement);return}if($container.children().length){$container.remove()}}function customToastType(typeName,message,title,optionsOverride){return notify({type:toastType[typeName],iconClass:getOptions().iconClasses[typeName],message:message,optionsOverride:optionsOverride,title:title})}function clearContainer(options){var toastsToClear=$container.children();for(var i=toastsToClear.length-1;i>=0;i--){clearToast($(toastsToClear[i]),options)}}function clearToast($toastElement,options,clearOptions){var force=clearOptions&&clearOptions.force?clearOptions.force:false;if($toastElement&&(force||$(":focus",$toastElement).length===0)){$toastElement[options.hideMethod]({duration:options.hideDuration,easing:options.hideEasing,complete:function(){removeToast($toastElement)}});return true}return false}function createContainer(options){$container=$("<div/>").attr("id",options.containerId).addClass(options.positionClass).attr("aria-live","polite").attr("role","alert");$container.appendTo($(options.target));return $container}function getDefaults(){return $.extend({},defaultOptions)}function publish(args){if(!listener){return}listener(args)}function notify(map){var options=getOptions();var iconClass=map.iconClass||options.iconClass;if(typeof map.optionsOverride!=="undefined"){options=$.extend(options,map.optionsOverride);iconClass=map.optionsOverride.iconClass||iconClass}if(shouldExit(options,map)){return}toastId++;$container=getContainer(options,true);var intervalId=null;var $toastElement=$("<div/>");var $titleElement=$("<div/>");var $messageElement=$("<div/>");var $progressElement=$("<div/>");var $closeElement=$(options.closeHtml);var progressBar={intervalId:null,hideEta:null,maxHideTime:null};var response={toastId:toastId,state:"visible",startTime:new Date,options:options,map:map};personalizeToast();displayToast();handleEvents();publish(response);if(options.debug&&console){console.log(response)}return $toastElement;function personalizeToast(){setIcon();setTitle();setMessage();setCloseButton();setProgressBar();setSequence()}function handleEvents(){$toastElement.hover(stickAround,delayedHideToast);if(!options.onclick&&options.tapToDismiss){$toastElement.click(hideToast)}if(options.closeButton&&$closeElement){$closeElement.click(function(event){if(event.stopPropagation){event.stopPropagation()}else if(event.cancelBubble!==undefined&&event.cancelBubble!==true){event.cancelBubble=true}hideToast(true)})}if(options.onclick){$toastElement.click(function(){options.onclick();hideToast()})}}function displayToast(){$toastElement.hide();$toastElement[options.showMethod]({duration:options.showDuration,easing:options.showEasing,complete:options.onShown});if(options.timeOut>0){intervalId=setTimeout(hideToast,options.timeOut);progressBar.maxHideTime=parseFloat(options.timeOut);progressBar.hideEta=(new Date).getTime()+progressBar.maxHideTime;if(options.progressBar){progressBar.intervalId=setInterval(updateProgress,10)}}}function setIcon(){if(map.iconClass){$toastElement.addClass(options.toastClass).addClass(iconClass)}}function setSequence(){if(options.newestOnTop){$container.prepend($toastElement)}else{$container.append($toastElement)}}function setTitle(){if(map.title){$titleElement.append(map.title).addClass(options.titleClass);$toastElement.append($titleElement)}}function setMessage(){if(map.message){$messageElement.append(map.message).addClass(options.messageClass);$toastElement.append($messageElement)}}function setCloseButton(){if(options.closeButton){$closeElement.addClass("toast-close-button").attr("role","button");$toastElement.prepend($closeElement)}}function setProgressBar(){if(options.progressBar){$progressElement.addClass("toast-progress");$toastElement.prepend($progressElement)}}function shouldExit(options,map){if(options.preventDuplicates){if(map.message===previousToast){return true}else{previousToast=map.message}}return false}function hideToast(override){if($(":focus",$toastElement).length&&!override){return}clearTimeout(progressBar.intervalId);return $toastElement[options.hideMethod]({duration:options.hideDuration,easing:options.hideEasing,complete:function(){removeToast($toastElement);if(options.onHidden&&response.state!=="hidden"){options.onHidden()}response.state="hidden";response.endTime=new Date;publish(response)}})}function delayedHideToast(){if(options.timeOut>0||options.extendedTimeOut>0){intervalId=setTimeout(hideToast,options.extendedTimeOut);progressBar.maxHideTime=parseFloat(options.extendedTimeOut);progressBar.hideEta=(new Date).getTime()+progressBar.maxHideTime}}function stickAround(){clearTimeout(intervalId);progressBar.hideEta=0;$toastElement.stop(true,true)[options.showMethod]({duration:options.showDuration,easing:options.showEasing})}function updateProgress(){var percentage=(progressBar.hideEta-(new Date).getTime())/progressBar.maxHideTime*100;$progressElement.width(percentage+"%")}}function getOptions(){return $.extend(getDefaults(),toastr.options)}function removeToast($toastElement){if(!$container){$container=getContainer()}if($toastElement.is(":visible")){return}$toastElement.remove();$toastElement=null;if($container.children().length===0){$container.remove();previousToast=undefined}}}()})})(typeof define==="function"&&define.amd?define:function(deps,factory){if(typeof module!=="undefined"&&module.exports){module.exports=factory(require("jquery"))}else{window["toastr"]=factory(window["jQuery"])}});(function(b){b.widget("ui.tagit",{options:{allowDuplicates:!1,caseSensitive:!0,fieldName:"tags",placeholderText:null,readOnly:!1,removeConfirmation:!1,tagLimit:null,availableTags:[],autocomplete:{},showAutocompleteOnFocus:!1,allowSpaces:!1,singleField:!1,singleFieldDelimiter:",",singleFieldNode:null,animate:!0,tabIndex:null,beforeTagAdded:null,afterTagAdded:null,beforeTagRemoved:null,afterTagRemoved:null,onTagClicked:null,onTagLimitExceeded:null,onTagAdded:null,onTagRemoved:null,tagSource:null},_create:function(){var a=this;this.element.is("input")?(this.tagList=b("<ul></ul>").insertAfter(this.element),this.options.singleField=!0,this.options.singleFieldNode=this.element,this.element.addClass("tagit-hidden-field")):this.tagList=this.element.find("ul, ol").andSelf().last();this.tagInput=b('<input type="text" />').addClass("ui-widget-content");this.options.readOnly&&this.tagInput.attr("disabled","disabled");this.options.tabIndex&&this.tagInput.attr("tabindex",this.options.tabIndex);this.options.placeholderText&&this.tagInput.attr("placeholder",this.options.placeholderText);this.options.autocomplete.source||(this.options.autocomplete.source=function(a,e){var d=a.term.toLowerCase(),c=b.grep(this.options.availableTags,function(a){return 0===a.toLowerCase().indexOf(d)});this.options.allowDuplicates||(c=this._subtractArray(c,this.assignedTags()));e(c)});this.options.showAutocompleteOnFocus&&(this.tagInput.focus(function(b,d){a._showAutocomplete()}),"undefined"===typeof this.options.autocomplete.minLength&&(this.options.autocomplete.minLength=0));b.isFunction(this.options.autocomplete.source)&&(this.options.autocomplete.source=b.proxy(this.options.autocomplete.source,this));b.isFunction(this.options.tagSource)&&(this.options.tagSource=b.proxy(this.options.tagSource,this));this.tagList.addClass("tagit").addClass("ui-widget ui-widget-content ui-corner-all").append(b('<li class="tagit-new"></li>').append(this.tagInput)).click(function(d){var c=b(d.target);c.hasClass("tagit-label")?(c=c.closest(".tagit-choice"),c.hasClass("removed")||a._trigger("onTagClicked",d,{tag:c,tagLabel:a.tagLabel(c)})):a.tagInput.focus()});var c=!1;if(this.options.singleField)if(this.options.singleFieldNode){var d=b(this.options.singleFieldNode),f=d.val().split(this.options.singleFieldDelimiter);d.val("");b.each(f,function(b,d){a.createTag(d,null,!0);c=!0})}else this.options.singleFieldNode=b('<input type="hidden" style="display:none;" value="" name="'+this.options.fieldName+'" />'),this.tagList.after(this.options.singleFieldNode);c||this.tagList.children("li").each(function(){b(this).hasClass("tagit-new")||(a.createTag(b(this).text(),b(this).attr("class"),!0),b(this).remove())});this.tagInput.keydown(function(c){if(c.which==b.ui.keyCode.BACKSPACE&&""===a.tagInput.val()){var d=a._lastTag();!a.options.removeConfirmation||d.hasClass("remove")?a.removeTag(d):a.options.removeConfirmation&&d.addClass("remove ui-state-highlight")}else a.options.removeConfirmation&&a._lastTag().removeClass("remove ui-state-highlight");if(c.which===b.ui.keyCode.COMMA&&!1===c.shiftKey||c.which===b.ui.keyCode.ENTER||c.which==b.ui.keyCode.TAB&&""!==a.tagInput.val()||c.which==b.ui.keyCode.SPACE&&!0!==a.options.allowSpaces&&('"'!=b.trim(a.tagInput.val()).replace(/^s*/,"").charAt(0)||'"'==b.trim(a.tagInput.val()).charAt(0)&&'"'==b.trim(a.tagInput.val()).charAt(b.trim(a.tagInput.val()).length-1)&&0!==b.trim(a.tagInput.val()).length-1))c.which===b.ui.keyCode.ENTER&&""===a.tagInput.val()||c.preventDefault(),a.options.autocomplete.autoFocus&&a.tagInput.data("autocomplete-open")||(a.tagInput.autocomplete("close"),a.createTag(a._cleanedInput()))}).blur(function(b){a.tagInput.data("autocomplete-open")||a.createTag(a._cleanedInput())});if(this.options.availableTags||this.options.tagSource||this.options.autocomplete.source)d={select:function(b,c){a.createTag(c.item.value);return!1}},b.extend(d,this.options.autocomplete),d.source=this.options.tagSource||d.source,this.tagInput.autocomplete(d).bind("autocompleteopen.tagit",function(b,c){a.tagInput.data("autocomplete-open",!0)}).bind("autocompleteclose.tagit",function(b,c){a.tagInput.data("autocomplete-open",!1)}),this.tagInput.autocomplete("widget").addClass("tagit-autocomplete")},destroy:function(){b.Widget.prototype.destroy.call(this);this.element.unbind(".tagit");this.tagList.unbind(".tagit");this.tagInput.removeData("autocomplete-open");this.tagList.removeClass("tagit ui-widget ui-widget-content ui-corner-all tagit-hidden-field");this.element.is("input")?(this.element.removeClass("tagit-hidden-field"),this.tagList.remove()):(this.element.children("li").each(function(){b(this).hasClass("tagit-new")?b(this).remove():(b(this).removeClass("tagit-choice ui-widget-content ui-state-default ui-state-highlight ui-corner-all remove tagit-choice-editable tagit-choice-read-only"),b(this).text(b(this).children(".tagit-label").text()))}),this.singleFieldNode&&this.singleFieldNode.remove());return this},_cleanedInput:function(){return b.trim(this.tagInput.val().replace(/^"(.*)"$/,"$1"))},_lastTag:function(){return this.tagList.find(".tagit-choice:last:not(.removed)")},_tags:function(){return this.tagList.find(".tagit-choice:not(.removed)")},assignedTags:function(){var a=this,c=[];this.options.singleField?(c=b(this.options.singleFieldNode).val().split(this.options.singleFieldDelimiter),""===c[0]&&(c=[])):this._tags().each(function(){c.push(a.tagLabel(this))});return c},_updateSingleTagsField:function(a){b(this.options.singleFieldNode).val(a.join(this.options.singleFieldDelimiter)).trigger("change")},_subtractArray:function(a,c){for(var d=[],f=0;f<a.length;f++)-1==b.inArray(a[f],c)&&d.push(a[f]);return d},tagLabel:function(a){return this.options.singleField?b(a).find(".tagit-label:first").text():b(a).find("input:first").val()},_showAutocomplete:function(){this.tagInput.autocomplete("search","")},_findTagByLabel:function(a){var c=this,d=null;this._tags().each(function(f){if(c._formatStr(a)==c._formatStr(c.tagLabel(this)))return d=b(this),!1});return d},_isNew:function(a){return!this._findTagByLabel(a)},_formatStr:function(a){return this.options.caseSensitive?a:b.trim(a.toLowerCase())},_effectExists:function(a){return Boolean(b.effects&&(b.effects[a]||b.effects.effect&&b.effects.effect[a]))},createTag:function(a,c,d){var f=this;a=b.trim(a);this.options.preprocessTag&&(a=this.options.preprocessTag(a));if(""===a)return!1;if(!this.options.allowDuplicates&&!this._isNew(a))return a=this._findTagByLabel(a),!1!==this._trigger("onTagExists",null,{existingTag:a,duringInitialization:d})&&this._effectExists("highlight")&&a.effect("highlight"),!1;if(this.options.tagLimit&&this._tags().length>=this.options.tagLimit)return this._trigger("onTagLimitExceeded",null,{duringInitialization:d}),!1;var g=b(this.options.onTagClicked?'<a class="tagit-label"></a>':'<span class="tagit-label"></span>').text(a),e=b("<li></li>").addClass("tagit-choice ui-widget-content ui-state-default ui-corner-all").addClass(c).append(g);this.options.readOnly?e.addClass("tagit-choice-read-only"):(e.addClass("tagit-choice-editable"),c=b("<span></span>").addClass("ui-icon ui-icon-close"),c=b('<a><span class="text-icon">×</span></a>').addClass("tagit-close").append(c).click(function(a){f.removeTag(e)}),e.append(c));this.options.singleField||(g=g.html(),e.append('<input type="hidden" value="'+g+'" name="'+this.options.fieldName+'" class="tagit-hidden-field" />'));!1!==this._trigger("beforeTagAdded",null,{tag:e,tagLabel:this.tagLabel(e),duringInitialization:d})&&(this.options.singleField&&(g=this.assignedTags(),g.push(a),this._updateSingleTagsField(g)),this._trigger("onTagAdded",null,e),this.tagInput.val(""),this.tagInput.parent().before(e),this._trigger("afterTagAdded",null,{tag:e,tagLabel:this.tagLabel(e),duringInitialization:d}),this.options.showAutocompleteOnFocus&&!d&&setTimeout(function(){f._showAutocomplete()},0))},removeTag:function(a,c){c="undefined"===typeof c?this.options.animate:c;a=b(a);this._trigger("onTagRemoved",null,a);if(!1!==this._trigger("beforeTagRemoved",null,{tag:a,tagLabel:this.tagLabel(a)})){if(this.options.singleField){var d=this.assignedTags(),f=this.tagLabel(a),d=b.grep(d,function(a){return a!=f});this._updateSingleTagsField(d)}if(c){a.addClass("removed");var d=this._effectExists("blind")?["blind",{direction:"horizontal"},"fast"]:["fast"],g=this;d.push(function(){a.remove();g._trigger("afterTagRemoved",null,{tag:a,tagLabel:g.tagLabel(a)})});a.fadeOut("fast").hide.apply(a,d).dequeue()}else a.remove(),this._trigger("afterTagRemoved",null,{tag:a,tagLabel:this.tagLabel(a)})}},removeTagByLabel:function(a,b){var d=this._findTagByLabel(a);if(!d)throw"No such tag exists with the name '"+a+"'";this.removeTag(d,b)},removeAll:function(){var a=this;this._tags().each(function(b,d){a.removeTag(d,!1)})}})})(jQuery);!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.vex=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?!function(){"use strict";var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var b=function(a){var b=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var c,d=arguments.length;for(c=0;c<d;c++)a=arguments[c],b.call(this,a)}};b("add"),b("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,b){return 1 in arguments&&!this.contains(a)==!b?b:c.call(this,a)}}a=null}():!function(a){"use strict";if("Element"in a){var b="classList",c="prototype",d=a.Element[c],e=Object,f=String[c].trim||function(){return this.replace(/^\s+|\s+$/g,"")},g=Array[c].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},h=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},i=function(a,b){if(""===b)throw new h("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new h("INVALID_CHARACTER_ERR","String contains an invalid character");return g.call(a,b)},j=function(a){for(var b=f.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],d=0,e=c.length;d<e;d++)this.push(c[d]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},k=j[c]=[],l=function(){return new j(this)};if(h[c]=Error[c],k.item=function(a){return this[a]||null},k.contains=function(a){return a+="",i(this,a)!==-1},k.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do{a=b[c]+"",i(this,a)===-1&&(this.push(a),e=!0)}while(++c<d);e&&this._updateClassName()},k.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do{for(a=c[d]+"",b=i(this,a);b!==-1;)this.splice(b,1),f=!0,b=i(this,a)}while(++d<e);f&&this._updateClassName()},k.toggle=function(a,b){a+="";var c=this.contains(a),d=c?b!==!0&&"remove":b!==!1&&"add";return d&&this[d](a),b===!0||b===!1?b:!c},k.toString=function(){return this.join(" ")},e.defineProperty){var m={get:l,enumerable:!0,configurable:!0};try{e.defineProperty(d,b,m)}catch(n){n.number===-2146823252&&(m.enumerable=!1,e.defineProperty(d,b,m))}}else e[c].__defineGetter__&&d.__defineGetter__(b,l)}}(window.self))},{}],2:[function(a,b,c){function d(a,b){if("string"!=typeof a)throw new TypeError("String expected");b||(b=document);var c=/<([\w:]+)/.exec(a);if(!c)return b.createTextNode(a);a=a.replace(/^\s+|\s+$/g,"");var d=c[1];if("body"==d){var e=b.createElement("html");return e.innerHTML=a,e.removeChild(e.lastChild)}var f=g[d]||g._default,h=f[0],i=f[1],j=f[2],e=b.createElement("div");for(e.innerHTML=i+a+j;h--;)e=e.lastChild;if(e.firstChild==e.lastChild)return e.removeChild(e.firstChild);for(var k=b.createDocumentFragment();e.firstChild;)k.appendChild(e.removeChild(e.firstChild));return k}b.exports=d;var e,f=!1;"undefined"!=typeof document&&(e=document.createElement("div"),e.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',f=!e.getElementsByTagName("link").length,e=void 0);var g={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:f?[1,"X<div>","</div>"]:[0,"",""]};g.td=g.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],g.option=g.optgroup=[1,'<select multiple="multiple">',"</select>"],g.thead=g.tbody=g.colgroup=g.caption=g.tfoot=[1,"<table>","</table>"],g.polyline=g.ellipse=g.polygon=g.circle=g.text=g.line=g.path=g.rect=g.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},{}],3:[function(a,b,c){"use strict";function d(a,b){if(void 0===a||null===a)throw new TypeError("Cannot convert first argument to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(void 0!==e&&null!==e)for(var f=Object.keys(Object(e)),g=0,h=f.length;g<h;g++){var i=f[g],j=Object.getOwnPropertyDescriptor(e,i);void 0!==j&&j.enumerable&&(c[i]=e[i])}}return c}function e(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:d})}b.exports={assign:d,polyfill:e}},{}],4:[function(a,b,c){function d(a,b){"object"!=typeof b?b={hash:!!b}:void 0===b.hash&&(b.hash=!0);for(var c=b.hash?{}:"",d=b.serializer||(b.hash?g:h),e=a&&a.elements?a.elements:[],f=Object.create(null),k=0;k<e.length;++k){var l=e[k];if((b.disabled||!l.disabled)&&l.name&&j.test(l.nodeName)&&!i.test(l.type)){var m=l.name,n=l.value;if("checkbox"!==l.type&&"radio"!==l.type||l.checked||(n=void 0),b.empty){if("checkbox"!==l.type||l.checked||(n=""),"radio"===l.type&&(f[l.name]||l.checked?l.checked&&(f[l.name]=!0):f[l.name]=!1),!n&&"radio"==l.type)continue}else if(!n)continue;if("select-multiple"!==l.type)c=d(c,m,n);else{n=[];for(var o=l.options,p=!1,q=0;q<o.length;++q){var r=o[q],s=b.empty&&!r.value,t=r.value||s;r.selected&&t&&(p=!0,c=b.hash&&"[]"!==m.slice(m.length-2)?d(c,m+"[]",r.value):d(c,m,r.value))}!p&&b.empty&&(c=d(c,m,""))}}}if(b.empty)for(var m in f)f[m]||(c=d(c,m,""));return c}function e(a){var b=[],c=/^([^\[\]]*)/,d=new RegExp(k),e=c.exec(a);for(e[1]&&b.push(e[1]);null!==(e=d.exec(a));)b.push(e[1]);return b}function f(a,b,c){if(0===b.length)return a=c;var d=b.shift(),e=d.match(/^\[(.+?)\]$/);if("[]"===d)return a=a||[],Array.isArray(a)?a.push(f(null,b,c)):(a._values=a._values||[],a._values.push(f(null,b,c))),a;if(e){var g=e[1],h=+g;isNaN(h)?(a=a||{},a[g]=f(a[g],b,c)):(a=a||[],a[h]=f(a[h],b,c))}else a[d]=f(a[d],b,c);return a}function g(a,b,c){var d=b.match(k);if(d){var g=e(b);f(a,g,c)}else{var h=a[b];h?(Array.isArray(h)||(a[b]=[h]),a[b].push(c)):a[b]=c}return a}function h(a,b,c){return c=c.replace(/(\r)?\n/g,"\r\n"),c=encodeURIComponent(c),c=c.replace(/%20/g,"+"),a+(a?"&":"")+encodeURIComponent(b)+"="+c}var i=/^(?:submit|button|image|reset|file)$/i,j=/^(?:input|select|textarea|keygen)/i,k=/(\[[^\[\]]*\])/g;b.exports=d},{}],5:[function(b,c,d){(function(e){!function(b){if("object"==typeof d&&"undefined"!=typeof c)c.exports=b();else if("function"==typeof a&&a.amd)a([],b);else{var f;f="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:this,f.vexDialog=b()}}(function(){return function a(c,d,e){function f(h,i){if(!d[h]){if(!c[h]){var j="function"==typeof b&&b;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var l=d[h]={exports:{}};c[h][0].call(l.exports,function(a){var b=c[h][1][a];return f(b?b:a)},l,l.exports,a,c,d,e)}return d[h].exports}for(var g="function"==typeof b&&b,h=0;h<e.length;h++)f(e[h]);return f}({1:[function(a,b,c){function d(a,b){if("string"!=typeof a)throw new TypeError("String expected");b||(b=document);var c=/<([\w:]+)/.exec(a);if(!c)return b.createTextNode(a);a=a.replace(/^\s+|\s+$/g,"");var d=c[1];if("body"==d){var e=b.createElement("html");return e.innerHTML=a,e.removeChild(e.lastChild)}var f=g[d]||g._default,h=f[0],i=f[1],j=f[2],e=b.createElement("div");for(e.innerHTML=i+a+j;h--;)e=e.lastChild;if(e.firstChild==e.lastChild)return e.removeChild(e.firstChild);for(var k=b.createDocumentFragment();e.firstChild;)k.appendChild(e.removeChild(e.firstChild));return k}b.exports=d;var e,f=!1;"undefined"!=typeof document&&(e=document.createElement("div"),e.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',f=!e.getElementsByTagName("link").length,e=void 0);var g={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:f?[1,"X<div>","</div>"]:[0,"",""]};g.td=g.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],g.option=g.optgroup=[1,'<select multiple="multiple">',"</select>"],g.thead=g.tbody=g.colgroup=g.caption=g.tfoot=[1,"<table>","</table>"],g.polyline=g.ellipse=g.polygon=g.circle=g.text=g.line=g.path=g.rect=g.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},{}],2:[function(a,b,c){function d(a,b){"object"!=typeof b?b={hash:!!b}:void 0===b.hash&&(b.hash=!0);for(var c=b.hash?{}:"",d=b.serializer||(b.hash?g:h),e=a&&a.elements?a.elements:[],f=Object.create(null),k=0;k<e.length;++k){var l=e[k];if((b.disabled||!l.disabled)&&l.name&&j.test(l.nodeName)&&!i.test(l.type)){var m=l.name,n=l.value;if("checkbox"!==l.type&&"radio"!==l.type||l.checked||(n=void 0),b.empty){if("checkbox"!==l.type||l.checked||(n=""),"radio"===l.type&&(f[l.name]||l.checked?l.checked&&(f[l.name]=!0):f[l.name]=!1),!n&&"radio"==l.type)continue}else if(!n)continue;if("select-multiple"!==l.type)c=d(c,m,n);else{n=[];for(var o=l.options,p=!1,q=0;q<o.length;++q){var r=o[q],s=b.empty&&!r.value,t=r.value||s;r.selected&&t&&(p=!0,c=b.hash&&"[]"!==m.slice(m.length-2)?d(c,m+"[]",r.value):d(c,m,r.value))}!p&&b.empty&&(c=d(c,m,""))}}}if(b.empty)for(var m in f)f[m]||(c=d(c,m,""));return c}function e(a){var b=[],c=/^([^\[\]]*)/,d=new RegExp(k),e=c.exec(a);for(e[1]&&b.push(e[1]);null!==(e=d.exec(a));)b.push(e[1]);return b}function f(a,b,c){if(0===b.length)return a=c;var d=b.shift(),e=d.match(/^\[(.+?)\]$/);if("[]"===d)return a=a||[],Array.isArray(a)?a.push(f(null,b,c)):(a._values=a._values||[],a._values.push(f(null,b,c))),a;if(e){var g=e[1],h=+g;isNaN(h)?(a=a||{},a[g]=f(a[g],b,c)):(a=a||[],a[h]=f(a[h],b,c))}else a[d]=f(a[d],b,c);return a}function g(a,b,c){var d=b.match(k);if(d){var g=e(b);f(a,g,c)}else{var h=a[b];h?(Array.isArray(h)||(a[b]=[h]),a[b].push(c)):a[b]=c}return a}function h(a,b,c){return c=c.replace(/(\r)?\n/g,"\r\n"),c=encodeURIComponent(c),c=c.replace(/%20/g,"+"),a+(a?"&":"")+encodeURIComponent(b)+"="+c}var i=/^(?:submit|button|image|reset|file)$/i,j=/^(?:input|select|textarea|keygen)/i,k=/(\[[^\[\]]*\])/g;b.exports=d},{}],3:[function(a,b,c){var d=a("domify"),e=a("form-serialize"),f=function(a){var b=document.createElement("form");b.classList.add("vex-dialog-form");var c=document.createElement("div");c.classList.add("vex-dialog-message"),c.appendChild(a.message instanceof window.Node?a.message:d(a.message));var e=document.createElement("div");return e.classList.add("vex-dialog-input"),e.appendChild(a.input instanceof window.Node?a.input:d(a.input)),b.appendChild(c),b.appendChild(e),b},g=function(a){var b=document.createElement("div");b.classList.add("vex-dialog-buttons");for(var c=0;c<a.length;c++){var d=a[c],e=document.createElement("button");e.type=d.type,e.textContent=d.text,e.classList.add(d.className),e.classList.add("vex-dialog-button"),0===c?e.classList.add("vex-first"):c===a.length-1&&e.classList.add("vex-last"),function(a){e.addEventListener("click",function(b){a.click&&a.click.call(this,b)}.bind(this))}.bind(this)(d),b.appendChild(e)}return b},h=function(a){var b={name:"dialog",open:function(b){var c=Object.assign({},this.defaultOptions,b);c.unsafeMessage&&!c.message?c.message=c.unsafeMessage:c.message&&(c.message=a._escapeHtml(c.message));var d=c.unsafeContent=f(c),e=a.open(c),h=c.beforeClose&&c.beforeClose.bind(e);if(e.options.beforeClose=function(){var a=!h||h();return a&&c.callback(this.value||!1),a}.bind(e),d.appendChild(g.call(e,c.buttons)),e.form=d,d.addEventListener("submit",c.onSubmit.bind(e)),c.focusFirstInput){var i=e.contentEl.querySelector("button, input, textarea");i&&i.focus()}return e},alert:function(a){return"string"==typeof a&&(a={message:a}),a=Object.assign({},this.defaultOptions,this.defaultAlertOptions,a),this.open(a)},confirm:function(a){if("object"!=typeof a||"function"!=typeof a.callback)throw new Error("dialog.confirm(options) requires options.callback.");return a=Object.assign({},this.defaultOptions,this.defaultConfirmOptions,a),this.open(a)},prompt:function(b){if("object"!=typeof b||"function"!=typeof b.callback)throw new Error("dialog.prompt(options) requires options.callback.");var c=Object.assign({},this.defaultOptions,this.defaultPromptOptions),d={unsafeMessage:'<label for="vex">'+a._escapeHtml(b.label||c.label)+"</label>",input:'<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="'+a._escapeHtml(b.placeholder||c.placeholder)+'" value="'+a._escapeHtml(b.value||c.value)+'" />'};b=Object.assign(c,d,b);var e=b.callback;return b.callback=function(a){a=a[Object.keys(a)[0]],e(a)},this.open(b)}};return b.buttons={YES:{text:"OK",type:"submit",className:"vex-dialog-button-primary",click:function(){this.value=!0}},NO:{text:"Cancel",type:"button",className:"vex-dialog-button-secondary",click:function(){this.value=!1,this.close()}}},b.defaultOptions={callback:function(){},afterOpen:function(){},message:"",input:"",buttons:[b.buttons.YES,b.buttons.NO],showCloseButton:!1,onSubmit:function(a){return a.preventDefault(),this.options.input&&(this.value=e(this.form,{hash:!0})),this.close()},focusFirstInput:!0},b.defaultAlertOptions={buttons:[b.buttons.YES]},b.defaultPromptOptions={label:"Prompt:",placeholder:"",value:""},b.defaultConfirmOptions={},b};b.exports=h},{domify:1,"form-serialize":2}]},{},[3])(3)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{domify:2,"form-serialize":4}],6:[function(a,b,c){var d=a("./vex");d.registerPlugin(a("vex-dialog")),b.exports=d},{"./vex":7,"vex-dialog":5}],7:[function(a,b,c){a("classlist-polyfill"),a("es6-object-assign").polyfill();var d=a("domify"),e=function(a){if("undefined"!=typeof a){var b=document.createElement("div");return b.appendChild(document.createTextNode(a)),b.innerHTML}return""},f=function(a,b){if("string"==typeof b&&0!==b.length)for(var c=b.split(" "),d=0;d<c.length;d++){var e=c[d];e.length&&a.classList.add(e)}},g=function(){var a=document.createElement("div"),b={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var c in b)if(void 0!==a.style[c])return b[c];return!1}(),h={vex:"vex",content:"vex-content",overlay:"vex-overlay",close:"vex-close",closing:"vex-closing",open:"vex-open"},i={},j=1,k=!1,l={open:function(a){var b=function(a){console.warn('The "'+a+'" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.'),console.warn("See http://github.hubspot.com/vex/api/advanced/#options")};a.css&&b("css"),a.overlayCSS&&b("overlayCSS"),a.contentCSS&&b("contentCSS"),a.closeCSS&&b("closeCSS");var c={};c.id=j++,i[c.id]=c,c.isOpen=!0,c.close=function(){function a(a){return"none"!==d.getPropertyValue(a+"animation-name")&&"0s"!==d.getPropertyValue(a+"animation-duration")}if(!this.isOpen)return!0;var b=this.options;if(k&&!b.escapeButtonCloses)return!1;var c=function(){return!b.beforeClose||b.beforeClose.call(this)}.bind(this)();if(c===!1)return!1;this.isOpen=!1;var d=window.getComputedStyle(this.contentEl),e=a("")||a("-webkit-")||a("-moz-")||a("-o-"),f=function j(){this.rootEl.parentNode&&(this.rootEl.removeEventListener(g,j),delete i[this.id],this.rootEl.parentNode.removeChild(this.rootEl),b.afterClose&&b.afterClose.call(this),0===Object.keys(i).length&&document.body.classList.remove(h.open))}.bind(this);return g&&e?(this.rootEl.addEventListener(g,f),this.rootEl.classList.add(h.closing)):f(),!0},"string"==typeof a&&(a={content:a}),a.unsafeContent&&!a.content?a.content=a.unsafeContent:a.content&&(a.content=e(a.content));var m=c.options=Object.assign({},l.defaultOptions,a),n=c.rootEl=document.createElement("div");n.classList.add(h.vex),f(n,m.className);var o=c.overlayEl=document.createElement("div");o.classList.add(h.overlay),f(o,m.overlayClassName),m.overlayClosesOnClick&&o.addEventListener("click",function(a){a.target===o&&c.close()}),n.appendChild(o);var p=c.contentEl=document.createElement("div");if(p.classList.add(h.content),f(p,m.contentClassName),p.appendChild(m.content instanceof window.Node?m.content:d(m.content)),n.appendChild(p),m.showCloseButton){var q=c.closeEl=document.createElement("div");q.classList.add(h.close),f(q,m.closeClassName),q.addEventListener("click",c.close.bind(c)),p.appendChild(q)}return document.querySelector(m.appendLocation).appendChild(n),m.afterOpen&&m.afterOpen.call(c),document.body.classList.add(h.open),c},close:function(a){var b;if(a.id)b=a.id;else{if("string"!=typeof a)throw new TypeError("close requires a vex object or id string");b=a}return!!i[b]&&i[b].close()},closeTop:function(){var a=Object.keys(i);return!!a.length&&i[a[a.length-1]].close()},closeAll:function(){for(var a in i)this.close(a);return!0},getAll:function(){return i},getById:function(a){return i[a]}};window.addEventListener("keyup",function(a){27===a.keyCode&&(k=!0,l.closeTop(),k=!1)}),window.addEventListener("popstate",function(){l.defaultOptions.closeAllOnPopState&&l.closeAll()}),l.defaultOptions={content:"",showCloseButton:!0,escapeButtonCloses:!0,overlayClosesOnClick:!0,appendLocation:"body",className:"",overlayClassName:"",contentClassName:"",closeClassName:"",closeAllOnPopState:!0},Object.defineProperty(l,"_escapeHtml",{configurable:!1,enumerable:!1,writable:!1,value:e}),l.registerPlugin=function(a,b){var c=a(l),d=b||c.name;if(l[d])throw new Error("Plugin "+b+" is already registered.");l[d]=c},b.exports=l},{"classlist-polyfill":1,domify:2,"es6-object-assign":3}]},{},[6])(6)});(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.XRegExp = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * XRegExp.build 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2017 MIT License
 * Inspired by Lea Verou's RegExp.create <lea.verou.me>
 */

module.exports = function(XRegExp) {
    'use strict';

    var REGEX_DATA = 'xregexp';
    var subParts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
    var parts = XRegExp.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, subParts], 'g', {
        conjunction: 'or'
    });

    /**
     * Strips a leading `^` and trailing unescaped `$`, if both are present.
     *
     * @private
     * @param {String} pattern Pattern to process.
     * @returns {String} Pattern with edge anchors removed.
     */
    function deanchor(pattern) {
        // Allow any number of empty noncapturing groups before/after anchors, because regexes
        // built/generated by XRegExp sometimes include them
        var leadingAnchor = /^(?:\(\?:\))*\^/;
        var trailingAnchor = /\$(?:\(\?:\))*$/;

        if (
            leadingAnchor.test(pattern) &&
            trailingAnchor.test(pattern) &&
            // Ensure that the trailing `$` isn't escaped
            trailingAnchor.test(pattern.replace(/\\[\s\S]/g, ''))
        ) {
            return pattern.replace(leadingAnchor, '').replace(trailingAnchor, '');
        }

        return pattern;
    }

    /**
     * Converts the provided value to an XRegExp. Native RegExp flags are not preserved.
     *
     * @private
     * @param {String|RegExp} value Value to convert.
     * @param {Boolean} [addFlagX] Whether to apply the `x` flag in cases when `value` is not
     *   already a regex generated by XRegExp
     * @returns {RegExp} XRegExp object with XRegExp syntax applied.
     */
    function asXRegExp(value, addFlagX) {
        var flags = addFlagX ? 'x' : '';
        return XRegExp.isRegExp(value) ?
            (value[REGEX_DATA] && value[REGEX_DATA].captureNames ?
                // Don't recompile, to preserve capture names
                value :
                // Recompile as XRegExp
                XRegExp(value.source, flags)
            ) :
            // Compile string as XRegExp
            XRegExp(value, flags);
    }

    /**
     * Builds regexes using named subpatterns, for readability and pattern reuse. Backreferences in
     * the outer pattern and provided subpatterns are automatically renumbered to work correctly.
     * Native flags used by provided subpatterns are ignored in favor of the `flags` argument.
     *
     * @memberOf XRegExp
     * @param {String} pattern XRegExp pattern using `{{name}}` for embedded subpatterns. Allows
     *   `({{name}})` as shorthand for `(?<name>{{name}})`. Patterns cannot be embedded within
     *   character classes.
     * @param {Object} subs Lookup object for named subpatterns. Values can be strings or regexes. A
     *   leading `^` and trailing unescaped `$` are stripped from subpatterns, if both are present.
     * @param {String} [flags] Any combination of XRegExp flags.
     * @returns {RegExp} Regex with interpolated subpatterns.
     * @example
     *
     * var time = XRegExp.build('(?x)^ {{hours}} ({{minutes}}) $', {
     *   hours: XRegExp.build('{{h12}} : | {{h24}}', {
     *     h12: /1[0-2]|0?[1-9]/,
     *     h24: /2[0-3]|[01][0-9]/
     *   }, 'x'),
     *   minutes: /^[0-5][0-9]$/
     * });
     * time.test('10:59'); // -> true
     * XRegExp.exec('10:59', time).minutes; // -> '59'
     */
    XRegExp.build = function(pattern, subs, flags) {
        flags = flags || '';
        // Used with `asXRegExp` calls for `pattern` and subpatterns in `subs`, to work around how
        // some browsers convert `RegExp('\n')` to a regex that contains the literal characters `\`
        // and `n`. See more details at <https://github.com/slevithan/xregexp/pull/163>.
        var addFlagX = flags.indexOf('x') > -1;
        var inlineFlags = /^\(\?([\w$]+)\)/.exec(pattern);
        // Add flags within a leading mode modifier to the overall pattern's flags
        if (inlineFlags) {
            flags = XRegExp._clipDuplicates(flags + inlineFlags[1]);
        }

        var data = {};
        for (var p in subs) {
            if (subs.hasOwnProperty(p)) {
                // Passing to XRegExp enables extended syntax and ensures independent validity,
                // lest an unescaped `(`, `)`, `[`, or trailing `\` breaks the `(?:)` wrapper. For
                // subpatterns provided as native regexes, it dies on octals and adds the property
                // used to hold extended regex instance data, for simplicity.
                var sub = asXRegExp(subs[p], addFlagX);
                data[p] = {
                    // Deanchoring allows embedding independently useful anchored regexes. If you
                    // really need to keep your anchors, double them (i.e., `^^...$$`).
                    pattern: deanchor(sub.source),
                    names: sub[REGEX_DATA].captureNames || []
                };
            }
        }

        // Passing to XRegExp dies on octals and ensures the outer pattern is independently valid;
        // helps keep this simple. Named captures will be put back.
        var patternAsRegex = asXRegExp(pattern, addFlagX);

        // 'Caps' is short for 'captures'
        var numCaps = 0;
        var numPriorCaps;
        var numOuterCaps = 0;
        var outerCapsMap = [0];
        var outerCapNames = patternAsRegex[REGEX_DATA].captureNames || [];
        var output = patternAsRegex.source.replace(parts, function($0, $1, $2, $3, $4) {
            var subName = $1 || $2;
            var capName;
            var intro;
            var localCapIndex;
            // Named subpattern
            if (subName) {
                if (!data.hasOwnProperty(subName)) {
                    throw new ReferenceError('Undefined property ' + $0);
                }
                // Named subpattern was wrapped in a capturing group
                if ($1) {
                    capName = outerCapNames[numOuterCaps];
                    outerCapsMap[++numOuterCaps] = ++numCaps;
                    // If it's a named group, preserve the name. Otherwise, use the subpattern name
                    // as the capture name
                    intro = '(?<' + (capName || subName) + '>';
                } else {
                    intro = '(?:';
                }
                numPriorCaps = numCaps;
                return intro + data[subName].pattern.replace(subParts, function(match, paren, backref) {
                    // Capturing group
                    if (paren) {
                        capName = data[subName].names[numCaps - numPriorCaps];
                        ++numCaps;
                        // If the current capture has a name, preserve the name
                        if (capName) {
                            return '(?<' + capName + '>';
                        }
                    // Backreference
                    } else if (backref) {
                        localCapIndex = +backref - 1;
                        // Rewrite the backreference
                        return data[subName].names[localCapIndex] ?
                            // Need to preserve the backreference name in case using flag `n`
                            '\\k<' + data[subName].names[localCapIndex] + '>' :
                            '\\' + (+backref + numPriorCaps);
                    }
                    return match;
                }) + ')';
            }
            // Capturing group
            if ($3) {
                capName = outerCapNames[numOuterCaps];
                outerCapsMap[++numOuterCaps] = ++numCaps;
                // If the current capture has a name, preserve the name
                if (capName) {
                    return '(?<' + capName + '>';
                }
            // Backreference
            } else if ($4) {
                localCapIndex = +$4 - 1;
                // Rewrite the backreference
                return outerCapNames[localCapIndex] ?
                    // Need to preserve the backreference name in case using flag `n`
                    '\\k<' + outerCapNames[localCapIndex] + '>' :
                    '\\' + outerCapsMap[+$4];
            }
            return $0;
        });

        return XRegExp(output, flags);
    };

};

},{}],2:[function(require,module,exports){
/*!
 * XRegExp.matchRecursive 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2009-2017 MIT License
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Returns a match detail object composed of the provided values.
     *
     * @private
     */
    function row(name, value, start, end) {
        return {
            name: name,
            value: value,
            start: start,
            end: end
        };
    }

    /**
     * Returns an array of match strings between outermost left and right delimiters, or an array of
     * objects with detailed match parts and position data. An error is thrown if delimiters are
     * unbalanced within the data.
     *
     * @memberOf XRegExp
     * @param {String} str String to search.
     * @param {String} left Left delimiter as an XRegExp pattern.
     * @param {String} right Right delimiter as an XRegExp pattern.
     * @param {String} [flags] Any native or XRegExp flags, used for the left and right delimiters.
     * @param {Object} [options] Lets you specify `valueNames` and `escapeChar` options.
     * @returns {Array} Array of matches, or an empty array.
     * @example
     *
     * // Basic usage
     * var str = '(t((e))s)t()(ing)';
     * XRegExp.matchRecursive(str, '\\(', '\\)', 'g');
     * // -> ['t((e))s', '', 'ing']
     *
     * // Extended information mode with valueNames
     * str = 'Here is <div> <div>an</div></div> example';
     * XRegExp.matchRecursive(str, '<div\\s*>', '</div>', 'gi', {
     *   valueNames: ['between', 'left', 'match', 'right']
     * });
     * // -> [
     * // {name: 'between', value: 'Here is ',       start: 0,  end: 8},
     * // {name: 'left',    value: '<div>',          start: 8,  end: 13},
     * // {name: 'match',   value: ' <div>an</div>', start: 13, end: 27},
     * // {name: 'right',   value: '</div>',         start: 27, end: 33},
     * // {name: 'between', value: ' example',       start: 33, end: 41}
     * // ]
     *
     * // Omitting unneeded parts with null valueNames, and using escapeChar
     * str = '...{1}.\\{{function(x,y){return {y:x}}}';
     * XRegExp.matchRecursive(str, '{', '}', 'g', {
     *   valueNames: ['literal', null, 'value', null],
     *   escapeChar: '\\'
     * });
     * // -> [
     * // {name: 'literal', value: '...',  start: 0, end: 3},
     * // {name: 'value',   value: '1',    start: 4, end: 5},
     * // {name: 'literal', value: '.\\{', start: 6, end: 9},
     * // {name: 'value',   value: 'function(x,y){return {y:x}}', start: 10, end: 37}
     * // ]
     *
     * // Sticky mode via flag y
     * str = '<1><<<2>>><3>4<5>';
     * XRegExp.matchRecursive(str, '<', '>', 'gy');
     * // -> ['1', '<<2>>', '3']
     */
    XRegExp.matchRecursive = function(str, left, right, flags, options) {
        flags = flags || '';
        options = options || {};
        var global = flags.indexOf('g') > -1;
        var sticky = flags.indexOf('y') > -1;
        // Flag `y` is controlled internally
        var basicFlags = flags.replace(/y/g, '');
        var escapeChar = options.escapeChar;
        var vN = options.valueNames;
        var output = [];
        var openTokens = 0;
        var delimStart = 0;
        var delimEnd = 0;
        var lastOuterEnd = 0;
        var outerStart;
        var innerStart;
        var leftMatch;
        var rightMatch;
        var esc;
        left = XRegExp(left, basicFlags);
        right = XRegExp(right, basicFlags);

        if (escapeChar) {
            if (escapeChar.length > 1) {
                throw new Error('Cannot use more than one escape character');
            }
            escapeChar = XRegExp.escape(escapeChar);
            // Example of concatenated `esc` regex:
            // `escapeChar`: '%'
            // `left`: '<'
            // `right`: '>'
            // Regex is: /(?:%[\S\s]|(?:(?!<|>)[^%])+)+/
            esc = new RegExp(
                '(?:' + escapeChar + '[\\S\\s]|(?:(?!' +
                    // Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
                    // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
                    // transformation resulting from those flags was already applied to `left` and
                    // `right` when they were passed through the XRegExp constructor above.
                    XRegExp.union([left, right], '', {conjunction: 'or'}).source +
                    ')[^' + escapeChar + '])+)+',
                // Flags `gy` not needed here
                flags.replace(/[^imu]+/g, '')
            );
        }

        while (true) {
            // If using an escape character, advance to the delimiter's next starting position,
            // skipping any escaped characters in between
            if (escapeChar) {
                delimEnd += (XRegExp.exec(str, esc, delimEnd, 'sticky') || [''])[0].length;
            }
            leftMatch = XRegExp.exec(str, left, delimEnd);
            rightMatch = XRegExp.exec(str, right, delimEnd);
            // Keep the leftmost match only
            if (leftMatch && rightMatch) {
                if (leftMatch.index <= rightMatch.index) {
                    rightMatch = null;
                } else {
                    leftMatch = null;
                }
            }
            // Paths (LM: leftMatch, RM: rightMatch, OT: openTokens):
            // LM | RM | OT | Result
            // 1  | 0  | 1  | loop
            // 1  | 0  | 0  | loop
            // 0  | 1  | 1  | loop
            // 0  | 1  | 0  | throw
            // 0  | 0  | 1  | throw
            // 0  | 0  | 0  | break
            // The paths above don't include the sticky mode special case. The loop ends after the
            // first completed match if not `global`.
            if (leftMatch || rightMatch) {
                delimStart = (leftMatch || rightMatch).index;
                delimEnd = delimStart + (leftMatch || rightMatch)[0].length;
            } else if (!openTokens) {
                break;
            }
            if (sticky && !openTokens && delimStart > lastOuterEnd) {
                break;
            }
            if (leftMatch) {
                if (!openTokens) {
                    outerStart = delimStart;
                    innerStart = delimEnd;
                }
                ++openTokens;
            } else if (rightMatch && openTokens) {
                if (!--openTokens) {
                    if (vN) {
                        if (vN[0] && outerStart > lastOuterEnd) {
                            output.push(row(vN[0], str.slice(lastOuterEnd, outerStart), lastOuterEnd, outerStart));
                        }
                        if (vN[1]) {
                            output.push(row(vN[1], str.slice(outerStart, innerStart), outerStart, innerStart));
                        }
                        if (vN[2]) {
                            output.push(row(vN[2], str.slice(innerStart, delimStart), innerStart, delimStart));
                        }
                        if (vN[3]) {
                            output.push(row(vN[3], str.slice(delimStart, delimEnd), delimStart, delimEnd));
                        }
                    } else {
                        output.push(str.slice(innerStart, delimStart));
                    }
                    lastOuterEnd = delimEnd;
                    if (!global) {
                        break;
                    }
                }
            } else {
                throw new Error('Unbalanced delimiter found in string');
            }
            // If the delimiter matched an empty string, avoid an infinite loop
            if (delimStart === delimEnd) {
                ++delimEnd;
            }
        }

        if (global && !sticky && vN && vN[0] && str.length > lastOuterEnd) {
            output.push(row(vN[0], str.slice(lastOuterEnd), lastOuterEnd, str.length));
        }

        return output;
    };

};

},{}],3:[function(require,module,exports){
/*!
 * XRegExp Unicode Base 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2008-2017 MIT License
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Adds base support for Unicode matching:
     * - Adds syntax `\p{..}` for matching Unicode tokens. Tokens can be inverted using `\P{..}` or
     *   `\p{^..}`. Token names ignore case, spaces, hyphens, and underscores. You can omit the
     *   braces for token names that are a single letter (e.g. `\pL` or `PL`).
     * - Adds flag A (astral), which enables 21-bit Unicode support.
     * - Adds the `XRegExp.addUnicodeData` method used by other addons to provide character data.
     *
     * Unicode Base relies on externally provided Unicode character data. Official addons are
     * available to provide data for Unicode categories, scripts, blocks, and properties.
     *
     * @requires XRegExp
     */

    // ==--------------------------==
    // Private stuff
    // ==--------------------------==

    // Storage for Unicode data
    var unicode = {};

    // Reuse utils
    var dec = XRegExp._dec;
    var hex = XRegExp._hex;
    var pad4 = XRegExp._pad4;

    // Generates a token lookup name: lowercase, with hyphens, spaces, and underscores removed
    function normalize(name) {
        return name.replace(/[- _]+/g, '').toLowerCase();
    }

    // Gets the decimal code of a literal code unit, \xHH, \uHHHH, or a backslash-escaped literal
    function charCode(chr) {
        var esc = /^\\[xu](.+)/.exec(chr);
        return esc ?
            dec(esc[1]) :
            chr.charCodeAt(chr.charAt(0) === '\\' ? 1 : 0);
    }

    // Inverts a list of ordered BMP characters and ranges
    function invertBmp(range) {
        var output = '';
        var lastEnd = -1;

        XRegExp.forEach(
            range,
            /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
            function(m) {
                var start = charCode(m[1]);
                if (start > (lastEnd + 1)) {
                    output += '\\u' + pad4(hex(lastEnd + 1));
                    if (start > (lastEnd + 2)) {
                        output += '-\\u' + pad4(hex(start - 1));
                    }
                }
                lastEnd = charCode(m[2] || m[1]);
            }
        );

        if (lastEnd < 0xFFFF) {
            output += '\\u' + pad4(hex(lastEnd + 1));
            if (lastEnd < 0xFFFE) {
                output += '-\\uFFFF';
            }
        }

        return output;
    }

    // Generates an inverted BMP range on first use
    function cacheInvertedBmp(slug) {
        var prop = 'b!';
        return (
            unicode[slug][prop] ||
            (unicode[slug][prop] = invertBmp(unicode[slug].bmp))
        );
    }

    // Combines and optionally negates BMP and astral data
    function buildAstral(slug, isNegated) {
        var item = unicode[slug];
        var combined = '';

        if (item.bmp && !item.isBmpLast) {
            combined = '[' + item.bmp + ']' + (item.astral ? '|' : '');
        }
        if (item.astral) {
            combined += item.astral;
        }
        if (item.isBmpLast && item.bmp) {
            combined += (item.astral ? '|' : '') + '[' + item.bmp + ']';
        }

        // Astral Unicode tokens always match a code point, never a code unit
        return isNegated ?
            '(?:(?!' + combined + ')(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-\uFFFF]))' :
            '(?:' + combined + ')';
    }

    // Builds a complete astral pattern on first use
    function cacheAstral(slug, isNegated) {
        var prop = isNegated ? 'a!' : 'a=';
        return (
            unicode[slug][prop] ||
            (unicode[slug][prop] = buildAstral(slug, isNegated))
        );
    }

    // ==--------------------------==
    // Core functionality
    // ==--------------------------==

    /*
     * Add astral mode (flag A) and Unicode token syntax: `\p{..}`, `\P{..}`, `\p{^..}`, `\pC`.
     */
    XRegExp.addToken(
        // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
        /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
        function(match, scope, flags) {
            var ERR_DOUBLE_NEG = 'Invalid double negation ';
            var ERR_UNKNOWN_NAME = 'Unknown Unicode token ';
            var ERR_UNKNOWN_REF = 'Unicode token missing data ';
            var ERR_ASTRAL_ONLY = 'Astral mode required for Unicode token ';
            var ERR_ASTRAL_IN_CLASS = 'Astral mode does not support Unicode tokens within character classes';
            // Negated via \P{..} or \p{^..}
            var isNegated = match[1] === 'P' || !!match[2];
            // Switch from BMP (0-FFFF) to astral (0-10FFFF) mode via flag A
            var isAstralMode = flags.indexOf('A') > -1;
            // Token lookup name. Check `[4]` first to avoid passing `undefined` via `\p{}`
            var slug = normalize(match[4] || match[3]);
            // Token data object
            var item = unicode[slug];

            if (match[1] === 'P' && match[2]) {
                throw new SyntaxError(ERR_DOUBLE_NEG + match[0]);
            }
            if (!unicode.hasOwnProperty(slug)) {
                throw new SyntaxError(ERR_UNKNOWN_NAME + match[0]);
            }

            // Switch to the negated form of the referenced Unicode token
            if (item.inverseOf) {
                slug = normalize(item.inverseOf);
                if (!unicode.hasOwnProperty(slug)) {
                    throw new ReferenceError(ERR_UNKNOWN_REF + match[0] + ' -> ' + item.inverseOf);
                }
                item = unicode[slug];
                isNegated = !isNegated;
            }

            if (!(item.bmp || isAstralMode)) {
                throw new SyntaxError(ERR_ASTRAL_ONLY + match[0]);
            }
            if (isAstralMode) {
                if (scope === 'class') {
                    throw new SyntaxError(ERR_ASTRAL_IN_CLASS);
                }

                return cacheAstral(slug, isNegated);
            }

            return scope === 'class' ?
                (isNegated ? cacheInvertedBmp(slug) : item.bmp) :
                (isNegated ? '[^' : '[') + item.bmp + ']';
        },
        {
            scope: 'all',
            optionalFlags: 'A',
            leadChar: '\\'
        }
    );

    /**
     * Adds to the list of Unicode tokens that XRegExp regexes can match via `\p` or `\P`.
     *
     * @memberOf XRegExp
     * @param {Array} data Objects with named character ranges. Each object may have properties
     *   `name`, `alias`, `isBmpLast`, `inverseOf`, `bmp`, and `astral`. All but `name` are
     *   optional, although one of `bmp` or `astral` is required (unless `inverseOf` is set). If
     *   `astral` is absent, the `bmp` data is used for BMP and astral modes. If `bmp` is absent,
     *   the name errors in BMP mode but works in astral mode. If both `bmp` and `astral` are
     *   provided, the `bmp` data only is used in BMP mode, and the combination of `bmp` and
     *   `astral` data is used in astral mode. `isBmpLast` is needed when a token matches orphan
     *   high surrogates *and* uses surrogate pairs to match astral code points. The `bmp` and
     *   `astral` data should be a combination of literal characters and `\xHH` or `\uHHHH` escape
     *   sequences, with hyphens to create ranges. Any regex metacharacters in the data should be
     *   escaped, apart from range-creating hyphens. The `astral` data can additionally use
     *   character classes and alternation, and should use surrogate pairs to represent astral code
     *   points. `inverseOf` can be used to avoid duplicating character data if a Unicode token is
     *   defined as the exact inverse of another token.
     * @example
     *
     * // Basic use
     * XRegExp.addUnicodeData([{
     *   name: 'XDigit',
     *   alias: 'Hexadecimal',
     *   bmp: '0-9A-Fa-f'
     * }]);
     * XRegExp('\\p{XDigit}:\\p{Hexadecimal}+').test('0:3D'); // -> true
     */
    XRegExp.addUnicodeData = function(data) {
        var ERR_NO_NAME = 'Unicode token requires name';
        var ERR_NO_DATA = 'Unicode token has no character data ';
        var item;

        for (var i = 0; i < data.length; ++i) {
            item = data[i];
            if (!item.name) {
                throw new Error(ERR_NO_NAME);
            }
            if (!(item.inverseOf || item.bmp || item.astral)) {
                throw new Error(ERR_NO_DATA + item.name);
            }
            unicode[normalize(item.name)] = item;
            if (item.alias) {
                unicode[normalize(item.alias)] = item;
            }
        }

        // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and
        // flags might now produce different results
        XRegExp.cache.flush('patterns');
    };

    /**
     * @ignore
     *
     * Return a reference to the internal Unicode definition structure for the given Unicode
     * Property if the given name is a legal Unicode Property for use in XRegExp `\p` or `\P` regex
     * constructs.
     *
     * @memberOf XRegExp
     * @param {String} name Name by which the Unicode Property may be recognized (case-insensitive),
     *   e.g. `'N'` or `'Number'`. The given name is matched against all registered Unicode
     *   Properties and Property Aliases.
     * @returns {Object} Reference to definition structure when the name matches a Unicode Property.
     *
     * @note
     * For more info on Unicode Properties, see also http://unicode.org/reports/tr18/#Categories.
     *
     * @note
     * This method is *not* part of the officially documented API and may change or be removed in
     * the future. It is meant for userland code that wishes to reuse the (large) internal Unicode
     * structures set up by XRegExp.
     */
    XRegExp._getUnicodeProperty = function(name) {
        var slug = normalize(name);
        return unicode[slug];
    };

};

},{}],4:[function(require,module,exports){
/*!
 * XRegExp Unicode Blocks 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Adds support for all Unicode blocks. Block names use the prefix 'In'. E.g.,
     * `\p{InBasicLatin}`. Token names are case insensitive, and any spaces, hyphens, and
     * underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Blocks');
    }

    XRegExp.addUnicodeData([
        {
            name: 'InAdlam',
            astral: '\uD83A[\uDD00-\uDD5F]'
        },
        {
            name: 'InAegean_Numbers',
            astral: '\uD800[\uDD00-\uDD3F]'
        },
        {
            name: 'InAhom',
            astral: '\uD805[\uDF00-\uDF3F]'
        },
        {
            name: 'InAlchemical_Symbols',
            astral: '\uD83D[\uDF00-\uDF7F]'
        },
        {
            name: 'InAlphabetic_Presentation_Forms',
            bmp: '\uFB00-\uFB4F'
        },
        {
            name: 'InAnatolian_Hieroglyphs',
            astral: '\uD811[\uDC00-\uDE7F]'
        },
        {
            name: 'InAncient_Greek_Musical_Notation',
            astral: '\uD834[\uDE00-\uDE4F]'
        },
        {
            name: 'InAncient_Greek_Numbers',
            astral: '\uD800[\uDD40-\uDD8F]'
        },
        {
            name: 'InAncient_Symbols',
            astral: '\uD800[\uDD90-\uDDCF]'
        },
        {
            name: 'InArabic',
            bmp: '\u0600-\u06FF'
        },
        {
            name: 'InArabic_Extended_A',
            bmp: '\u08A0-\u08FF'
        },
        {
            name: 'InArabic_Mathematical_Alphabetic_Symbols',
            astral: '\uD83B[\uDE00-\uDEFF]'
        },
        {
            name: 'InArabic_Presentation_Forms_A',
            bmp: '\uFB50-\uFDFF'
        },
        {
            name: 'InArabic_Presentation_Forms_B',
            bmp: '\uFE70-\uFEFF'
        },
        {
            name: 'InArabic_Supplement',
            bmp: '\u0750-\u077F'
        },
        {
            name: 'InArmenian',
            bmp: '\u0530-\u058F'
        },
        {
            name: 'InArrows',
            bmp: '\u2190-\u21FF'
        },
        {
            name: 'InAvestan',
            astral: '\uD802[\uDF00-\uDF3F]'
        },
        {
            name: 'InBalinese',
            bmp: '\u1B00-\u1B7F'
        },
        {
            name: 'InBamum',
            bmp: '\uA6A0-\uA6FF'
        },
        {
            name: 'InBamum_Supplement',
            astral: '\uD81A[\uDC00-\uDE3F]'
        },
        {
            name: 'InBasic_Latin',
            bmp: '\0-\x7F'
        },
        {
            name: 'InBassa_Vah',
            astral: '\uD81A[\uDED0-\uDEFF]'
        },
        {
            name: 'InBatak',
            bmp: '\u1BC0-\u1BFF'
        },
        {
            name: 'InBengali',
            bmp: '\u0980-\u09FF'
        },
        {
            name: 'InBhaiksuki',
            astral: '\uD807[\uDC00-\uDC6F]'
        },
        {
            name: 'InBlock_Elements',
            bmp: '\u2580-\u259F'
        },
        {
            name: 'InBopomofo',
            bmp: '\u3100-\u312F'
        },
        {
            name: 'InBopomofo_Extended',
            bmp: '\u31A0-\u31BF'
        },
        {
            name: 'InBox_Drawing',
            bmp: '\u2500-\u257F'
        },
        {
            name: 'InBrahmi',
            astral: '\uD804[\uDC00-\uDC7F]'
        },
        {
            name: 'InBraille_Patterns',
            bmp: '\u2800-\u28FF'
        },
        {
            name: 'InBuginese',
            bmp: '\u1A00-\u1A1F'
        },
        {
            name: 'InBuhid',
            bmp: '\u1740-\u175F'
        },
        {
            name: 'InByzantine_Musical_Symbols',
            astral: '\uD834[\uDC00-\uDCFF]'
        },
        {
            name: 'InCJK_Compatibility',
            bmp: '\u3300-\u33FF'
        },
        {
            name: 'InCJK_Compatibility_Forms',
            bmp: '\uFE30-\uFE4F'
        },
        {
            name: 'InCJK_Compatibility_Ideographs',
            bmp: '\uF900-\uFAFF'
        },
        {
            name: 'InCJK_Compatibility_Ideographs_Supplement',
            astral: '\uD87E[\uDC00-\uDE1F]'
        },
        {
            name: 'InCJK_Radicals_Supplement',
            bmp: '\u2E80-\u2EFF'
        },
        {
            name: 'InCJK_Strokes',
            bmp: '\u31C0-\u31EF'
        },
        {
            name: 'InCJK_Symbols_and_Punctuation',
            bmp: '\u3000-\u303F'
        },
        {
            name: 'InCJK_Unified_Ideographs',
            bmp: '\u4E00-\u9FFF'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_A',
            bmp: '\u3400-\u4DBF'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_B',
            astral: '[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_C',
            astral: '\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F]'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_D',
            astral: '\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]'
        },
        {
            name: 'InCJK_Unified_Ideographs_Extension_E',
            astral: '\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF]'
        },
        {
            name: 'InCarian',
            astral: '\uD800[\uDEA0-\uDEDF]'
        },
        {
            name: 'InCaucasian_Albanian',
            astral: '\uD801[\uDD30-\uDD6F]'
        },
        {
            name: 'InChakma',
            astral: '\uD804[\uDD00-\uDD4F]'
        },
        {
            name: 'InCham',
            bmp: '\uAA00-\uAA5F'
        },
        {
            name: 'InCherokee',
            bmp: '\u13A0-\u13FF'
        },
        {
            name: 'InCherokee_Supplement',
            bmp: '\uAB70-\uABBF'
        },
        {
            name: 'InCombining_Diacritical_Marks',
            bmp: '\u0300-\u036F'
        },
        {
            name: 'InCombining_Diacritical_Marks_Extended',
            bmp: '\u1AB0-\u1AFF'
        },
        {
            name: 'InCombining_Diacritical_Marks_Supplement',
            bmp: '\u1DC0-\u1DFF'
        },
        {
            name: 'InCombining_Diacritical_Marks_for_Symbols',
            bmp: '\u20D0-\u20FF'
        },
        {
            name: 'InCombining_Half_Marks',
            bmp: '\uFE20-\uFE2F'
        },
        {
            name: 'InCommon_Indic_Number_Forms',
            bmp: '\uA830-\uA83F'
        },
        {
            name: 'InControl_Pictures',
            bmp: '\u2400-\u243F'
        },
        {
            name: 'InCoptic',
            bmp: '\u2C80-\u2CFF'
        },
        {
            name: 'InCoptic_Epact_Numbers',
            astral: '\uD800[\uDEE0-\uDEFF]'
        },
        {
            name: 'InCounting_Rod_Numerals',
            astral: '\uD834[\uDF60-\uDF7F]'
        },
        {
            name: 'InCuneiform',
            astral: '\uD808[\uDC00-\uDFFF]'
        },
        {
            name: 'InCuneiform_Numbers_and_Punctuation',
            astral: '\uD809[\uDC00-\uDC7F]'
        },
        {
            name: 'InCurrency_Symbols',
            bmp: '\u20A0-\u20CF'
        },
        {
            name: 'InCypriot_Syllabary',
            astral: '\uD802[\uDC00-\uDC3F]'
        },
        {
            name: 'InCyrillic',
            bmp: '\u0400-\u04FF'
        },
        {
            name: 'InCyrillic_Extended_A',
            bmp: '\u2DE0-\u2DFF'
        },
        {
            name: 'InCyrillic_Extended_B',
            bmp: '\uA640-\uA69F'
        },
        {
            name: 'InCyrillic_Extended_C',
            bmp: '\u1C80-\u1C8F'
        },
        {
            name: 'InCyrillic_Supplement',
            bmp: '\u0500-\u052F'
        },
        {
            name: 'InDeseret',
            astral: '\uD801[\uDC00-\uDC4F]'
        },
        {
            name: 'InDevanagari',
            bmp: '\u0900-\u097F'
        },
        {
            name: 'InDevanagari_Extended',
            bmp: '\uA8E0-\uA8FF'
        },
        {
            name: 'InDingbats',
            bmp: '\u2700-\u27BF'
        },
        {
            name: 'InDomino_Tiles',
            astral: '\uD83C[\uDC30-\uDC9F]'
        },
        {
            name: 'InDuployan',
            astral: '\uD82F[\uDC00-\uDC9F]'
        },
        {
            name: 'InEarly_Dynastic_Cuneiform',
            astral: '\uD809[\uDC80-\uDD4F]'
        },
        {
            name: 'InEgyptian_Hieroglyphs',
            astral: '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F]'
        },
        {
            name: 'InElbasan',
            astral: '\uD801[\uDD00-\uDD2F]'
        },
        {
            name: 'InEmoticons',
            astral: '\uD83D[\uDE00-\uDE4F]'
        },
        {
            name: 'InEnclosed_Alphanumeric_Supplement',
            astral: '\uD83C[\uDD00-\uDDFF]'
        },
        {
            name: 'InEnclosed_Alphanumerics',
            bmp: '\u2460-\u24FF'
        },
        {
            name: 'InEnclosed_CJK_Letters_and_Months',
            bmp: '\u3200-\u32FF'
        },
        {
            name: 'InEnclosed_Ideographic_Supplement',
            astral: '\uD83C[\uDE00-\uDEFF]'
        },
        {
            name: 'InEthiopic',
            bmp: '\u1200-\u137F'
        },
        {
            name: 'InEthiopic_Extended',
            bmp: '\u2D80-\u2DDF'
        },
        {
            name: 'InEthiopic_Extended_A',
            bmp: '\uAB00-\uAB2F'
        },
        {
            name: 'InEthiopic_Supplement',
            bmp: '\u1380-\u139F'
        },
        {
            name: 'InGeneral_Punctuation',
            bmp: '\u2000-\u206F'
        },
        {
            name: 'InGeometric_Shapes',
            bmp: '\u25A0-\u25FF'
        },
        {
            name: 'InGeometric_Shapes_Extended',
            astral: '\uD83D[\uDF80-\uDFFF]'
        },
        {
            name: 'InGeorgian',
            bmp: '\u10A0-\u10FF'
        },
        {
            name: 'InGeorgian_Supplement',
            bmp: '\u2D00-\u2D2F'
        },
        {
            name: 'InGlagolitic',
            bmp: '\u2C00-\u2C5F'
        },
        {
            name: 'InGlagolitic_Supplement',
            astral: '\uD838[\uDC00-\uDC2F]'
        },
        {
            name: 'InGothic',
            astral: '\uD800[\uDF30-\uDF4F]'
        },
        {
            name: 'InGrantha',
            astral: '\uD804[\uDF00-\uDF7F]'
        },
        {
            name: 'InGreek_Extended',
            bmp: '\u1F00-\u1FFF'
        },
        {
            name: 'InGreek_and_Coptic',
            bmp: '\u0370-\u03FF'
        },
        {
            name: 'InGujarati',
            bmp: '\u0A80-\u0AFF'
        },
        {
            name: 'InGurmukhi',
            bmp: '\u0A00-\u0A7F'
        },
        {
            name: 'InHalfwidth_and_Fullwidth_Forms',
            bmp: '\uFF00-\uFFEF'
        },
        {
            name: 'InHangul_Compatibility_Jamo',
            bmp: '\u3130-\u318F'
        },
        {
            name: 'InHangul_Jamo',
            bmp: '\u1100-\u11FF'
        },
        {
            name: 'InHangul_Jamo_Extended_A',
            bmp: '\uA960-\uA97F'
        },
        {
            name: 'InHangul_Jamo_Extended_B',
            bmp: '\uD7B0-\uD7FF'
        },
        {
            name: 'InHangul_Syllables',
            bmp: '\uAC00-\uD7AF'
        },
        {
            name: 'InHanunoo',
            bmp: '\u1720-\u173F'
        },
        {
            name: 'InHatran',
            astral: '\uD802[\uDCE0-\uDCFF]'
        },
        {
            name: 'InHebrew',
            bmp: '\u0590-\u05FF'
        },
        {
            name: 'InHigh_Private_Use_Surrogates',
            bmp: '\uDB80-\uDBFF'
        },
        {
            name: 'InHigh_Surrogates',
            bmp: '\uD800-\uDB7F'
        },
        {
            name: 'InHiragana',
            bmp: '\u3040-\u309F'
        },
        {
            name: 'InIPA_Extensions',
            bmp: '\u0250-\u02AF'
        },
        {
            name: 'InIdeographic_Description_Characters',
            bmp: '\u2FF0-\u2FFF'
        },
        {
            name: 'InIdeographic_Symbols_and_Punctuation',
            astral: '\uD81B[\uDFE0-\uDFFF]'
        },
        {
            name: 'InImperial_Aramaic',
            astral: '\uD802[\uDC40-\uDC5F]'
        },
        {
            name: 'InInscriptional_Pahlavi',
            astral: '\uD802[\uDF60-\uDF7F]'
        },
        {
            name: 'InInscriptional_Parthian',
            astral: '\uD802[\uDF40-\uDF5F]'
        },
        {
            name: 'InJavanese',
            bmp: '\uA980-\uA9DF'
        },
        {
            name: 'InKaithi',
            astral: '\uD804[\uDC80-\uDCCF]'
        },
        {
            name: 'InKana_Supplement',
            astral: '\uD82C[\uDC00-\uDCFF]'
        },
        {
            name: 'InKanbun',
            bmp: '\u3190-\u319F'
        },
        {
            name: 'InKangxi_Radicals',
            bmp: '\u2F00-\u2FDF'
        },
        {
            name: 'InKannada',
            bmp: '\u0C80-\u0CFF'
        },
        {
            name: 'InKatakana',
            bmp: '\u30A0-\u30FF'
        },
        {
            name: 'InKatakana_Phonetic_Extensions',
            bmp: '\u31F0-\u31FF'
        },
        {
            name: 'InKayah_Li',
            bmp: '\uA900-\uA92F'
        },
        {
            name: 'InKharoshthi',
            astral: '\uD802[\uDE00-\uDE5F]'
        },
        {
            name: 'InKhmer',
            bmp: '\u1780-\u17FF'
        },
        {
            name: 'InKhmer_Symbols',
            bmp: '\u19E0-\u19FF'
        },
        {
            name: 'InKhojki',
            astral: '\uD804[\uDE00-\uDE4F]'
        },
        {
            name: 'InKhudawadi',
            astral: '\uD804[\uDEB0-\uDEFF]'
        },
        {
            name: 'InLao',
            bmp: '\u0E80-\u0EFF'
        },
        {
            name: 'InLatin_Extended_Additional',
            bmp: '\u1E00-\u1EFF'
        },
        {
            name: 'InLatin_Extended_A',
            bmp: '\u0100-\u017F'
        },
        {
            name: 'InLatin_Extended_B',
            bmp: '\u0180-\u024F'
        },
        {
            name: 'InLatin_Extended_C',
            bmp: '\u2C60-\u2C7F'
        },
        {
            name: 'InLatin_Extended_D',
            bmp: '\uA720-\uA7FF'
        },
        {
            name: 'InLatin_Extended_E',
            bmp: '\uAB30-\uAB6F'
        },
        {
            name: 'InLatin_1_Supplement',
            bmp: '\x80-\xFF'
        },
        {
            name: 'InLepcha',
            bmp: '\u1C00-\u1C4F'
        },
        {
            name: 'InLetterlike_Symbols',
            bmp: '\u2100-\u214F'
        },
        {
            name: 'InLimbu',
            bmp: '\u1900-\u194F'
        },
        {
            name: 'InLinear_A',
            astral: '\uD801[\uDE00-\uDF7F]'
        },
        {
            name: 'InLinear_B_Ideograms',
            astral: '\uD800[\uDC80-\uDCFF]'
        },
        {
            name: 'InLinear_B_Syllabary',
            astral: '\uD800[\uDC00-\uDC7F]'
        },
        {
            name: 'InLisu',
            bmp: '\uA4D0-\uA4FF'
        },
        {
            name: 'InLow_Surrogates',
            bmp: '\uDC00-\uDFFF'
        },
        {
            name: 'InLycian',
            astral: '\uD800[\uDE80-\uDE9F]'
        },
        {
            name: 'InLydian',
            astral: '\uD802[\uDD20-\uDD3F]'
        },
        {
            name: 'InMahajani',
            astral: '\uD804[\uDD50-\uDD7F]'
        },
        {
            name: 'InMahjong_Tiles',
            astral: '\uD83C[\uDC00-\uDC2F]'
        },
        {
            name: 'InMalayalam',
            bmp: '\u0D00-\u0D7F'
        },
        {
            name: 'InMandaic',
            bmp: '\u0840-\u085F'
        },
        {
            name: 'InManichaean',
            astral: '\uD802[\uDEC0-\uDEFF]'
        },
        {
            name: 'InMarchen',
            astral: '\uD807[\uDC70-\uDCBF]'
        },
        {
            name: 'InMathematical_Alphanumeric_Symbols',
            astral: '\uD835[\uDC00-\uDFFF]'
        },
        {
            name: 'InMathematical_Operators',
            bmp: '\u2200-\u22FF'
        },
        {
            name: 'InMeetei_Mayek',
            bmp: '\uABC0-\uABFF'
        },
        {
            name: 'InMeetei_Mayek_Extensions',
            bmp: '\uAAE0-\uAAFF'
        },
        {
            name: 'InMende_Kikakui',
            astral: '\uD83A[\uDC00-\uDCDF]'
        },
        {
            name: 'InMeroitic_Cursive',
            astral: '\uD802[\uDDA0-\uDDFF]'
        },
        {
            name: 'InMeroitic_Hieroglyphs',
            astral: '\uD802[\uDD80-\uDD9F]'
        },
        {
            name: 'InMiao',
            astral: '\uD81B[\uDF00-\uDF9F]'
        },
        {
            name: 'InMiscellaneous_Mathematical_Symbols_A',
            bmp: '\u27C0-\u27EF'
        },
        {
            name: 'InMiscellaneous_Mathematical_Symbols_B',
            bmp: '\u2980-\u29FF'
        },
        {
            name: 'InMiscellaneous_Symbols',
            bmp: '\u2600-\u26FF'
        },
        {
            name: 'InMiscellaneous_Symbols_and_Arrows',
            bmp: '\u2B00-\u2BFF'
        },
        {
            name: 'InMiscellaneous_Symbols_and_Pictographs',
            astral: '\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]'
        },
        {
            name: 'InMiscellaneous_Technical',
            bmp: '\u2300-\u23FF'
        },
        {
            name: 'InModi',
            astral: '\uD805[\uDE00-\uDE5F]'
        },
        {
            name: 'InModifier_Tone_Letters',
            bmp: '\uA700-\uA71F'
        },
        {
            name: 'InMongolian',
            bmp: '\u1800-\u18AF'
        },
        {
            name: 'InMongolian_Supplement',
            astral: '\uD805[\uDE60-\uDE7F]'
        },
        {
            name: 'InMro',
            astral: '\uD81A[\uDE40-\uDE6F]'
        },
        {
            name: 'InMultani',
            astral: '\uD804[\uDE80-\uDEAF]'
        },
        {
            name: 'InMusical_Symbols',
            astral: '\uD834[\uDD00-\uDDFF]'
        },
        {
            name: 'InMyanmar',
            bmp: '\u1000-\u109F'
        },
        {
            name: 'InMyanmar_Extended_A',
            bmp: '\uAA60-\uAA7F'
        },
        {
            name: 'InMyanmar_Extended_B',
            bmp: '\uA9E0-\uA9FF'
        },
        {
            name: 'InNKo',
            bmp: '\u07C0-\u07FF'
        },
        {
            name: 'InNabataean',
            astral: '\uD802[\uDC80-\uDCAF]'
        },
        {
            name: 'InNew_Tai_Lue',
            bmp: '\u1980-\u19DF'
        },
        {
            name: 'InNewa',
            astral: '\uD805[\uDC00-\uDC7F]'
        },
        {
            name: 'InNumber_Forms',
            bmp: '\u2150-\u218F'
        },
        {
            name: 'InOgham',
            bmp: '\u1680-\u169F'
        },
        {
            name: 'InOl_Chiki',
            bmp: '\u1C50-\u1C7F'
        },
        {
            name: 'InOld_Hungarian',
            astral: '\uD803[\uDC80-\uDCFF]'
        },
        {
            name: 'InOld_Italic',
            astral: '\uD800[\uDF00-\uDF2F]'
        },
        {
            name: 'InOld_North_Arabian',
            astral: '\uD802[\uDE80-\uDE9F]'
        },
        {
            name: 'InOld_Permic',
            astral: '\uD800[\uDF50-\uDF7F]'
        },
        {
            name: 'InOld_Persian',
            astral: '\uD800[\uDFA0-\uDFDF]'
        },
        {
            name: 'InOld_South_Arabian',
            astral: '\uD802[\uDE60-\uDE7F]'
        },
        {
            name: 'InOld_Turkic',
            astral: '\uD803[\uDC00-\uDC4F]'
        },
        {
            name: 'InOptical_Character_Recognition',
            bmp: '\u2440-\u245F'
        },
        {
            name: 'InOriya',
            bmp: '\u0B00-\u0B7F'
        },
        {
            name: 'InOrnamental_Dingbats',
            astral: '\uD83D[\uDE50-\uDE7F]'
        },
        {
            name: 'InOsage',
            astral: '\uD801[\uDCB0-\uDCFF]'
        },
        {
            name: 'InOsmanya',
            astral: '\uD801[\uDC80-\uDCAF]'
        },
        {
            name: 'InPahawh_Hmong',
            astral: '\uD81A[\uDF00-\uDF8F]'
        },
        {
            name: 'InPalmyrene',
            astral: '\uD802[\uDC60-\uDC7F]'
        },
        {
            name: 'InPau_Cin_Hau',
            astral: '\uD806[\uDEC0-\uDEFF]'
        },
        {
            name: 'InPhags_pa',
            bmp: '\uA840-\uA87F'
        },
        {
            name: 'InPhaistos_Disc',
            astral: '\uD800[\uDDD0-\uDDFF]'
        },
        {
            name: 'InPhoenician',
            astral: '\uD802[\uDD00-\uDD1F]'
        },
        {
            name: 'InPhonetic_Extensions',
            bmp: '\u1D00-\u1D7F'
        },
        {
            name: 'InPhonetic_Extensions_Supplement',
            bmp: '\u1D80-\u1DBF'
        },
        {
            name: 'InPlaying_Cards',
            astral: '\uD83C[\uDCA0-\uDCFF]'
        },
        {
            name: 'InPrivate_Use_Area',
            bmp: '\uE000-\uF8FF'
        },
        {
            name: 'InPsalter_Pahlavi',
            astral: '\uD802[\uDF80-\uDFAF]'
        },
        {
            name: 'InRejang',
            bmp: '\uA930-\uA95F'
        },
        {
            name: 'InRumi_Numeral_Symbols',
            astral: '\uD803[\uDE60-\uDE7F]'
        },
        {
            name: 'InRunic',
            bmp: '\u16A0-\u16FF'
        },
        {
            name: 'InSamaritan',
            bmp: '\u0800-\u083F'
        },
        {
            name: 'InSaurashtra',
            bmp: '\uA880-\uA8DF'
        },
        {
            name: 'InSharada',
            astral: '\uD804[\uDD80-\uDDDF]'
        },
        {
            name: 'InShavian',
            astral: '\uD801[\uDC50-\uDC7F]'
        },
        {
            name: 'InShorthand_Format_Controls',
            astral: '\uD82F[\uDCA0-\uDCAF]'
        },
        {
            name: 'InSiddham',
            astral: '\uD805[\uDD80-\uDDFF]'
        },
        {
            name: 'InSinhala',
            bmp: '\u0D80-\u0DFF'
        },
        {
            name: 'InSinhala_Archaic_Numbers',
            astral: '\uD804[\uDDE0-\uDDFF]'
        },
        {
            name: 'InSmall_Form_Variants',
            bmp: '\uFE50-\uFE6F'
        },
        {
            name: 'InSora_Sompeng',
            astral: '\uD804[\uDCD0-\uDCFF]'
        },
        {
            name: 'InSpacing_Modifier_Letters',
            bmp: '\u02B0-\u02FF'
        },
        {
            name: 'InSpecials',
            bmp: '\uFFF0-\uFFFF'
        },
        {
            name: 'InSundanese',
            bmp: '\u1B80-\u1BBF'
        },
        {
            name: 'InSundanese_Supplement',
            bmp: '\u1CC0-\u1CCF'
        },
        {
            name: 'InSuperscripts_and_Subscripts',
            bmp: '\u2070-\u209F'
        },
        {
            name: 'InSupplemental_Arrows_A',
            bmp: '\u27F0-\u27FF'
        },
        {
            name: 'InSupplemental_Arrows_B',
            bmp: '\u2900-\u297F'
        },
        {
            name: 'InSupplemental_Arrows_C',
            astral: '\uD83E[\uDC00-\uDCFF]'
        },
        {
            name: 'InSupplemental_Mathematical_Operators',
            bmp: '\u2A00-\u2AFF'
        },
        {
            name: 'InSupplemental_Punctuation',
            bmp: '\u2E00-\u2E7F'
        },
        {
            name: 'InSupplemental_Symbols_and_Pictographs',
            astral: '\uD83E[\uDD00-\uDDFF]'
        },
        {
            name: 'InSupplementary_Private_Use_Area_A',
            astral: '[\uDB80-\uDBBF][\uDC00-\uDFFF]'
        },
        {
            name: 'InSupplementary_Private_Use_Area_B',
            astral: '[\uDBC0-\uDBFF][\uDC00-\uDFFF]'
        },
        {
            name: 'InSutton_SignWriting',
            astral: '\uD836[\uDC00-\uDEAF]'
        },
        {
            name: 'InSyloti_Nagri',
            bmp: '\uA800-\uA82F'
        },
        {
            name: 'InSyriac',
            bmp: '\u0700-\u074F'
        },
        {
            name: 'InTagalog',
            bmp: '\u1700-\u171F'
        },
        {
            name: 'InTagbanwa',
            bmp: '\u1760-\u177F'
        },
        {
            name: 'InTags',
            astral: '\uDB40[\uDC00-\uDC7F]'
        },
        {
            name: 'InTai_Le',
            bmp: '\u1950-\u197F'
        },
        {
            name: 'InTai_Tham',
            bmp: '\u1A20-\u1AAF'
        },
        {
            name: 'InTai_Viet',
            bmp: '\uAA80-\uAADF'
        },
        {
            name: 'InTai_Xuan_Jing_Symbols',
            astral: '\uD834[\uDF00-\uDF5F]'
        },
        {
            name: 'InTakri',
            astral: '\uD805[\uDE80-\uDECF]'
        },
        {
            name: 'InTamil',
            bmp: '\u0B80-\u0BFF'
        },
        {
            name: 'InTangut',
            astral: '[\uD81C-\uD821][\uDC00-\uDFFF]'
        },
        {
            name: 'InTangut_Components',
            astral: '\uD822[\uDC00-\uDEFF]'
        },
        {
            name: 'InTelugu',
            bmp: '\u0C00-\u0C7F'
        },
        {
            name: 'InThaana',
            bmp: '\u0780-\u07BF'
        },
        {
            name: 'InThai',
            bmp: '\u0E00-\u0E7F'
        },
        {
            name: 'InTibetan',
            bmp: '\u0F00-\u0FFF'
        },
        {
            name: 'InTifinagh',
            bmp: '\u2D30-\u2D7F'
        },
        {
            name: 'InTirhuta',
            astral: '\uD805[\uDC80-\uDCDF]'
        },
        {
            name: 'InTransport_and_Map_Symbols',
            astral: '\uD83D[\uDE80-\uDEFF]'
        },
        {
            name: 'InUgaritic',
            astral: '\uD800[\uDF80-\uDF9F]'
        },
        {
            name: 'InUnified_Canadian_Aboriginal_Syllabics',
            bmp: '\u1400-\u167F'
        },
        {
            name: 'InUnified_Canadian_Aboriginal_Syllabics_Extended',
            bmp: '\u18B0-\u18FF'
        },
        {
            name: 'InVai',
            bmp: '\uA500-\uA63F'
        },
        {
            name: 'InVariation_Selectors',
            bmp: '\uFE00-\uFE0F'
        },
        {
            name: 'InVariation_Selectors_Supplement',
            astral: '\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'InVedic_Extensions',
            bmp: '\u1CD0-\u1CFF'
        },
        {
            name: 'InVertical_Forms',
            bmp: '\uFE10-\uFE1F'
        },
        {
            name: 'InWarang_Citi',
            astral: '\uD806[\uDCA0-\uDCFF]'
        },
        {
            name: 'InYi_Radicals',
            bmp: '\uA490-\uA4CF'
        },
        {
            name: 'InYi_Syllables',
            bmp: '\uA000-\uA48F'
        },
        {
            name: 'InYijing_Hexagram_Symbols',
            bmp: '\u4DC0-\u4DFF'
        }
    ]);

};

},{}],5:[function(require,module,exports){
/*!
 * XRegExp Unicode Categories 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Adds support for Unicode's general categories. E.g., `\p{Lu}` or `\p{Uppercase Letter}`. See
     * category descriptions in UAX #44 <http://unicode.org/reports/tr44/#GC_Values_Table>. Token
     * names are case insensitive, and any spaces, hyphens, and underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Categories');
    }

    XRegExp.addUnicodeData([
        {
            name: 'C',
            alias: 'Other',
            isBmpLast: true,
            bmp: '\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E45-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF',
            astral: '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD83D[\uDED3-\uDEDF\uDEED-\uDEEF\uDEF7-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD1F\uDD28-\uDD2F\uDD31\uDD32\uDD3F\uDD4C-\uDD4F\uDD5F-\uDD7F\uDD92-\uDDBF\uDDC1-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]'
        },
        {
            name: 'Cc',
            alias: 'Control',
            bmp: '\0-\x1F\x7F-\x9F'
        },
        {
            name: 'Cf',
            alias: 'Format',
            bmp: '\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB',
            astral: '\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]'
        },
        {
            name: 'Cn',
            alias: 'Unassigned',
            bmp: '\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u05FF\u061D\u070E\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E45-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF',
            astral: '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD83D[\uDED3-\uDEDF\uDEED-\uDEEF\uDEF7-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD1F\uDD28-\uDD2F\uDD31\uDD32\uDD3F\uDD4C-\uDD4F\uDD5F-\uDD7F\uDD92-\uDDBF\uDDC1-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]'
        },
        {
            name: 'Co',
            alias: 'Private_Use',
            bmp: '\uE000-\uF8FF',
            astral: '[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]'
        },
        {
            name: 'Cs',
            alias: 'Surrogate',
            bmp: '\uD800-\uDFFF'
        },
        {
            name: 'L',
            alias: 'Letter',
            bmp: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
            astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
        },
        {
            name: 'Ll',
            alias: 'Lowercase_Letter',
            bmp: 'a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
            astral: '\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]'
        },
        {
            name: 'Lm',
            alias: 'Modifier_Letter',
            bmp: '\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F',
            astral: '\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0]'
        },
        {
            name: 'Lo',
            alias: 'Other_Letter',
            bmp: '\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
            astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
        },
        {
            name: 'Lt',
            alias: 'Titlecase_Letter',
            bmp: '\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC'
        },
        {
            name: 'Lu',
            alias: 'Uppercase_Letter',
            bmp: 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A',
            astral: '\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]'
        },
        {
            name: 'M',
            alias: 'Mark',
            bmp: '\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
            astral: '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDCA-\uDDCC\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'Mc',
            alias: 'Spacing_Mark',
            bmp: '\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\u1CF3\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC',
            astral: '\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4]|\uD81B[\uDF51-\uDF7E]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]'
        },
        {
            name: 'Me',
            alias: 'Enclosing_Mark',
            bmp: '\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672'
        },
        {
            name: 'Mn',
            alias: 'Nonspacing_Mark',
            bmp: '\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
            astral: '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDCA-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'N',
            alias: 'Number',
            bmp: '0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
            astral: '\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD807[\uDC50-\uDC6C]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83C[\uDD00-\uDD0C]'
        },
        {
            name: 'Nd',
            alias: 'Decimal_Number',
            bmp: '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
            astral: '\uD801[\uDCA0-\uDCA9]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD807[\uDC50-\uDC59]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDD50-\uDD59]'
        },
        {
            name: 'Nl',
            alias: 'Letter_Number',
            bmp: '\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF',
            astral: '\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]'
        },
        {
            name: 'No',
            alias: 'Other_Number',
            bmp: '\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835',
            astral: '\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C]|\uD81A[\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD83A[\uDCC7-\uDCCF]|\uD83C[\uDD00-\uDD0C]'
        },
        {
            name: 'P',
            alias: 'Punctuation',
            bmp: '\x21-\x23\x25-\\x2A\x2C-\x2F\x3A\x3B\\x3F\x40\\x5B-\\x5D\x5F\\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65',
            astral: '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
        },
        {
            name: 'Pc',
            alias: 'Connector_Punctuation',
            bmp: '\x5F\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F'
        },
        {
            name: 'Pd',
            alias: 'Dash_Punctuation',
            bmp: '\\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D'
        },
        {
            name: 'Pe',
            alias: 'Close_Punctuation',
            bmp: '\\x29\\x5D\x7D\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63'
        },
        {
            name: 'Pf',
            alias: 'Final_Punctuation',
            bmp: '\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21'
        },
        {
            name: 'Pi',
            alias: 'Initial_Punctuation',
            bmp: '\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20'
        },
        {
            name: 'Po',
            alias: 'Other_Punctuation',
            bmp: '\x21-\x23\x25-\x27\\x2A\x2C\\x2E\x2F\x3A\x3B\\x3F\x40\\x5C\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166D\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43\u2E44\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65',
            astral: '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
        },
        {
            name: 'Ps',
            alias: 'Open_Punctuation',
            bmp: '\\x28\\x5B\\x7B\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62'
        },
        {
            name: 'S',
            alias: 'Symbol',
            bmp: '\\x24\\x2B\x3C-\x3E\\x5E\x60\\x7C\x7E\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BE\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u23FE\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD',
            astral: '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83B[\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]'
        },
        {
            name: 'Sc',
            alias: 'Currency_Symbol',
            bmp: '\\x24\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BE\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6'
        },
        {
            name: 'Sk',
            alias: 'Modifier_Symbol',
            bmp: '\\x5E\x60\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uFBB2-\uFBC1\uFF3E\uFF40\uFFE3',
            astral: '\uD83C[\uDFFB-\uDFFF]'
        },
        {
            name: 'Sm',
            alias: 'Math_Symbol',
            bmp: '\\x2B\x3C-\x3E\\x7C\x7E\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC',
            astral: '\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]'
        },
        {
            name: 'So',
            alias: 'Other_Symbol',
            bmp: '\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u23FE\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFDFD\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD',
            astral: '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]'
        },
        {
            name: 'Z',
            alias: 'Separator',
            bmp: '\x20\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
        },
        {
            name: 'Zl',
            alias: 'Line_Separator',
            bmp: '\u2028'
        },
        {
            name: 'Zp',
            alias: 'Paragraph_Separator',
            bmp: '\u2029'
        },
        {
            name: 'Zs',
            alias: 'Space_Separator',
            bmp: '\x20\xA0\u1680\u2000-\u200A\u202F\u205F\u3000'
        }
    ]);

};

},{}],6:[function(require,module,exports){
/*!
 * XRegExp Unicode Properties 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Adds properties to meet the UTS #18 Level 1 RL1.2 requirements for Unicode regex support. See
     * <http://unicode.org/reports/tr18/#RL1.2>. Following are definitions of these properties from
     * UAX #44 <http://unicode.org/reports/tr44/>:
     *
     * - Alphabetic
     *   Characters with the Alphabetic property. Generated from: Lowercase + Uppercase + Lt + Lm +
     *   Lo + Nl + Other_Alphabetic.
     *
     * - Default_Ignorable_Code_Point
     *   For programmatic determination of default ignorable code points. New characters that should
     *   be ignored in rendering (unless explicitly supported) will be assigned in these ranges,
     *   permitting programs to correctly handle the default rendering of such characters when not
     *   otherwise supported.
     *
     * - Lowercase
     *   Characters with the Lowercase property. Generated from: Ll + Other_Lowercase.
     *
     * - Noncharacter_Code_Point
     *   Code points permanently reserved for internal use.
     *
     * - Uppercase
     *   Characters with the Uppercase property. Generated from: Lu + Other_Uppercase.
     *
     * - White_Space
     *   Spaces, separator characters and other control characters which should be treated by
     *   programming languages as "white space" for the purpose of parsing elements.
     *
     * The properties ASCII, Any, and Assigned are also included but are not defined in UAX #44. UTS
     * #18 RL1.2 additionally requires support for Unicode scripts and general categories. These are
     * included in XRegExp's Unicode Categories and Unicode Scripts addons.
     *
     * Token names are case insensitive, and any spaces, hyphens, and underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Properties');
    }

    var unicodeData = [
        {
            name: 'ASCII',
            bmp: '\0-\x7F'
        },
        {
            name: 'Alphabetic',
            bmp: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA7E-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
            astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC45\uDC82-\uDCB8\uDCD0-\uDCE8\uDD00-\uDD32\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDF00-\uDF19\uDF1D-\uDF2A]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF36\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
        },
        {
            name: 'Any',
            isBmpLast: true,
            bmp: '\0-\uFFFF',
            astral: '[\uD800-\uDBFF][\uDC00-\uDFFF]'
        },
        {
            name: 'Default_Ignorable_Code_Point',
            bmp: '\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8',
            astral: '\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]'
        },
        {
            name: 'Lowercase',
            bmp: 'a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
            astral: '\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]'
        },
        {
            name: 'Noncharacter_Code_Point',
            bmp: '\uFDD0-\uFDEF\uFFFE\uFFFF',
            astral: '[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]'
        },
        {
            name: 'Uppercase',
            bmp: 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A',
            astral: '\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]'
        },
        {
            name: 'White_Space',
            bmp: '\x09-\x0D\x20\x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
        }
    ];

    // Add non-generated data
    unicodeData.push({
        name: 'Assigned',
        // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
        // Categories addon is required to use this property
        inverseOf: 'Cn'
    });

    XRegExp.addUnicodeData(unicodeData);

};

},{}],7:[function(require,module,exports){
/*!
 * XRegExp Unicode Scripts 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

module.exports = function(XRegExp) {
    'use strict';

    /**
     * Adds support for all Unicode scripts. E.g., `\p{Latin}`. Token names are case insensitive,
     * and any spaces, hyphens, and underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Scripts');
    }

    XRegExp.addUnicodeData([
        {
            name: 'Adlam',
            astral: '\uD83A[\uDD00-\uDD4A\uDD50-\uDD59\uDD5E\uDD5F]'
        },
        {
            name: 'Ahom',
            astral: '\uD805[\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF3F]'
        },
        {
            name: 'Anatolian_Hieroglyphs',
            astral: '\uD811[\uDC00-\uDE46]'
        },
        {
            name: 'Arabic',
            bmp: '\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC',
            astral: '\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]'
        },
        {
            name: 'Armenian',
            bmp: '\u0531-\u0556\u0559-\u055F\u0561-\u0587\u058A\u058D-\u058F\uFB13-\uFB17'
        },
        {
            name: 'Avestan',
            astral: '\uD802[\uDF00-\uDF35\uDF39-\uDF3F]'
        },
        {
            name: 'Balinese',
            bmp: '\u1B00-\u1B4B\u1B50-\u1B7C'
        },
        {
            name: 'Bamum',
            bmp: '\uA6A0-\uA6F7',
            astral: '\uD81A[\uDC00-\uDE38]'
        },
        {
            name: 'Bassa_Vah',
            astral: '\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]'
        },
        {
            name: 'Batak',
            bmp: '\u1BC0-\u1BF3\u1BFC-\u1BFF'
        },
        {
            name: 'Bengali',
            bmp: '\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB'
        },
        {
            name: 'Bhaiksuki',
            astral: '\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]'
        },
        {
            name: 'Bopomofo',
            bmp: '\u02EA\u02EB\u3105-\u312D\u31A0-\u31BA'
        },
        {
            name: 'Brahmi',
            astral: '\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F]'
        },
        {
            name: 'Braille',
            bmp: '\u2800-\u28FF'
        },
        {
            name: 'Buginese',
            bmp: '\u1A00-\u1A1B\u1A1E\u1A1F'
        },
        {
            name: 'Buhid',
            bmp: '\u1740-\u1753'
        },
        {
            name: 'Canadian_Aboriginal',
            bmp: '\u1400-\u167F\u18B0-\u18F5'
        },
        {
            name: 'Carian',
            astral: '\uD800[\uDEA0-\uDED0]'
        },
        {
            name: 'Caucasian_Albanian',
            astral: '\uD801[\uDD30-\uDD63\uDD6F]'
        },
        {
            name: 'Chakma',
            astral: '\uD804[\uDD00-\uDD34\uDD36-\uDD43]'
        },
        {
            name: 'Cham',
            bmp: '\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F'
        },
        {
            name: 'Cherokee',
            bmp: '\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF'
        },
        {
            name: 'Common',
            bmp: '\0-\x40\\x5B-\x60\\x7B-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0589\u0605\u060C\u061B\u061C\u061F\u0640\u06DD\u08E2\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20BE\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u23FE\u2400-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2E00-\u2E44\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD',
            astral: '\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9B\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDF00-\uDF56\uDF60-\uDF71]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDD0C\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]|\uDB40[\uDC01\uDC20-\uDC7F]'
        },
        {
            name: 'Coptic',
            bmp: '\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF'
        },
        {
            name: 'Cuneiform',
            astral: '\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]'
        },
        {
            name: 'Cypriot',
            astral: '\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]'
        },
        {
            name: 'Cyrillic',
            bmp: '\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F'
        },
        {
            name: 'Deseret',
            astral: '\uD801[\uDC00-\uDC4F]'
        },
        {
            name: 'Devanagari',
            bmp: '\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FD'
        },
        {
            name: 'Duployan',
            astral: '\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]'
        },
        {
            name: 'Egyptian_Hieroglyphs',
            astral: '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]'
        },
        {
            name: 'Elbasan',
            astral: '\uD801[\uDD00-\uDD27]'
        },
        {
            name: 'Ethiopic',
            bmp: '\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E'
        },
        {
            name: 'Georgian',
            bmp: '\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D'
        },
        {
            name: 'Glagolitic',
            bmp: '\u2C00-\u2C2E\u2C30-\u2C5E',
            astral: '\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]'
        },
        {
            name: 'Gothic',
            astral: '\uD800[\uDF30-\uDF4A]'
        },
        {
            name: 'Grantha',
            astral: '\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]'
        },
        {
            name: 'Greek',
            bmp: '\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65',
            astral: '\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]'
        },
        {
            name: 'Gujarati',
            bmp: '\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9'
        },
        {
            name: 'Gurmukhi',
            bmp: '\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75'
        },
        {
            name: 'Han',
            bmp: '\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9',
            astral: '[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
        },
        {
            name: 'Hangul',
            bmp: '\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC'
        },
        {
            name: 'Hanunoo',
            bmp: '\u1720-\u1734'
        },
        {
            name: 'Hatran',
            astral: '\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]'
        },
        {
            name: 'Hebrew',
            bmp: '\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F'
        },
        {
            name: 'Hiragana',
            bmp: '\u3041-\u3096\u309D-\u309F',
            astral: '\uD82C\uDC01|\uD83C\uDE00'
        },
        {
            name: 'Imperial_Aramaic',
            astral: '\uD802[\uDC40-\uDC55\uDC57-\uDC5F]'
        },
        {
            name: 'Inherited',
            bmp: '\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951\u0952\u1AB0-\u1ABE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D',
            astral: '\uD800[\uDDFD\uDEE0]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]'
        },
        {
            name: 'Inscriptional_Pahlavi',
            astral: '\uD802[\uDF60-\uDF72\uDF78-\uDF7F]'
        },
        {
            name: 'Inscriptional_Parthian',
            astral: '\uD802[\uDF40-\uDF55\uDF58-\uDF5F]'
        },
        {
            name: 'Javanese',
            bmp: '\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF'
        },
        {
            name: 'Kaithi',
            astral: '\uD804[\uDC80-\uDCC1]'
        },
        {
            name: 'Kannada',
            bmp: '\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2'
        },
        {
            name: 'Katakana',
            bmp: '\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D',
            astral: '\uD82C\uDC00'
        },
        {
            name: 'Kayah_Li',
            bmp: '\uA900-\uA92D\uA92F'
        },
        {
            name: 'Kharoshthi',
            astral: '\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F-\uDE47\uDE50-\uDE58]'
        },
        {
            name: 'Khmer',
            bmp: '\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF'
        },
        {
            name: 'Khojki',
            astral: '\uD804[\uDE00-\uDE11\uDE13-\uDE3E]'
        },
        {
            name: 'Khudawadi',
            astral: '\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]'
        },
        {
            name: 'Lao',
            bmp: '\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF'
        },
        {
            name: 'Latin',
            bmp: 'A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A'
        },
        {
            name: 'Lepcha',
            bmp: '\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F'
        },
        {
            name: 'Limbu',
            bmp: '\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F'
        },
        {
            name: 'Linear_A',
            astral: '\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]'
        },
        {
            name: 'Linear_B',
            astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]'
        },
        {
            name: 'Lisu',
            bmp: '\uA4D0-\uA4FF'
        },
        {
            name: 'Lycian',
            astral: '\uD800[\uDE80-\uDE9C]'
        },
        {
            name: 'Lydian',
            astral: '\uD802[\uDD20-\uDD39\uDD3F]'
        },
        {
            name: 'Mahajani',
            astral: '\uD804[\uDD50-\uDD76]'
        },
        {
            name: 'Malayalam',
            bmp: '\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F'
        },
        {
            name: 'Mandaic',
            bmp: '\u0840-\u085B\u085E'
        },
        {
            name: 'Manichaean',
            astral: '\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]'
        },
        {
            name: 'Marchen',
            astral: '\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]'
        },
        {
            name: 'Meetei_Mayek',
            bmp: '\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9'
        },
        {
            name: 'Mende_Kikakui',
            astral: '\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]'
        },
        {
            name: 'Meroitic_Cursive',
            astral: '\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]'
        },
        {
            name: 'Meroitic_Hieroglyphs',
            astral: '\uD802[\uDD80-\uDD9F]'
        },
        {
            name: 'Miao',
            astral: '\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]'
        },
        {
            name: 'Modi',
            astral: '\uD805[\uDE00-\uDE44\uDE50-\uDE59]'
        },
        {
            name: 'Mongolian',
            bmp: '\u1800\u1801\u1804\u1806-\u180E\u1810-\u1819\u1820-\u1877\u1880-\u18AA',
            astral: '\uD805[\uDE60-\uDE6C]'
        },
        {
            name: 'Mro',
            astral: '\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]'
        },
        {
            name: 'Multani',
            astral: '\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]'
        },
        {
            name: 'Myanmar',
            bmp: '\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F'
        },
        {
            name: 'Nabataean',
            astral: '\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]'
        },
        {
            name: 'New_Tai_Lue',
            bmp: '\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF'
        },
        {
            name: 'Newa',
            astral: '\uD805[\uDC00-\uDC59\uDC5B\uDC5D]'
        },
        {
            name: 'Nko',
            bmp: '\u07C0-\u07FA'
        },
        {
            name: 'Ogham',
            bmp: '\u1680-\u169C'
        },
        {
            name: 'Ol_Chiki',
            bmp: '\u1C50-\u1C7F'
        },
        {
            name: 'Old_Hungarian',
            astral: '\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]'
        },
        {
            name: 'Old_Italic',
            astral: '\uD800[\uDF00-\uDF23]'
        },
        {
            name: 'Old_North_Arabian',
            astral: '\uD802[\uDE80-\uDE9F]'
        },
        {
            name: 'Old_Permic',
            astral: '\uD800[\uDF50-\uDF7A]'
        },
        {
            name: 'Old_Persian',
            astral: '\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]'
        },
        {
            name: 'Old_South_Arabian',
            astral: '\uD802[\uDE60-\uDE7F]'
        },
        {
            name: 'Old_Turkic',
            astral: '\uD803[\uDC00-\uDC48]'
        },
        {
            name: 'Oriya',
            bmp: '\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77'
        },
        {
            name: 'Osage',
            astral: '\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]'
        },
        {
            name: 'Osmanya',
            astral: '\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]'
        },
        {
            name: 'Pahawh_Hmong',
            astral: '\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]'
        },
        {
            name: 'Palmyrene',
            astral: '\uD802[\uDC60-\uDC7F]'
        },
        {
            name: 'Pau_Cin_Hau',
            astral: '\uD806[\uDEC0-\uDEF8]'
        },
        {
            name: 'Phags_Pa',
            bmp: '\uA840-\uA877'
        },
        {
            name: 'Phoenician',
            astral: '\uD802[\uDD00-\uDD1B\uDD1F]'
        },
        {
            name: 'Psalter_Pahlavi',
            astral: '\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]'
        },
        {
            name: 'Rejang',
            bmp: '\uA930-\uA953\uA95F'
        },
        {
            name: 'Runic',
            bmp: '\u16A0-\u16EA\u16EE-\u16F8'
        },
        {
            name: 'Samaritan',
            bmp: '\u0800-\u082D\u0830-\u083E'
        },
        {
            name: 'Saurashtra',
            bmp: '\uA880-\uA8C5\uA8CE-\uA8D9'
        },
        {
            name: 'Sharada',
            astral: '\uD804[\uDD80-\uDDCD\uDDD0-\uDDDF]'
        },
        {
            name: 'Shavian',
            astral: '\uD801[\uDC50-\uDC7F]'
        },
        {
            name: 'Siddham',
            astral: '\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]'
        },
        {
            name: 'SignWriting',
            astral: '\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]'
        },
        {
            name: 'Sinhala',
            bmp: '\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4',
            astral: '\uD804[\uDDE1-\uDDF4]'
        },
        {
            name: 'Sora_Sompeng',
            astral: '\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]'
        },
        {
            name: 'Sundanese',
            bmp: '\u1B80-\u1BBF\u1CC0-\u1CC7'
        },
        {
            name: 'Syloti_Nagri',
            bmp: '\uA800-\uA82B'
        },
        {
            name: 'Syriac',
            bmp: '\u0700-\u070D\u070F-\u074A\u074D-\u074F'
        },
        {
            name: 'Tagalog',
            bmp: '\u1700-\u170C\u170E-\u1714'
        },
        {
            name: 'Tagbanwa',
            bmp: '\u1760-\u176C\u176E-\u1770\u1772\u1773'
        },
        {
            name: 'Tai_Le',
            bmp: '\u1950-\u196D\u1970-\u1974'
        },
        {
            name: 'Tai_Tham',
            bmp: '\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD'
        },
        {
            name: 'Tai_Viet',
            bmp: '\uAA80-\uAAC2\uAADB-\uAADF'
        },
        {
            name: 'Takri',
            astral: '\uD805[\uDE80-\uDEB7\uDEC0-\uDEC9]'
        },
        {
            name: 'Tamil',
            bmp: '\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA'
        },
        {
            name: 'Tangut',
            astral: '\uD81B\uDFE0|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]'
        },
        {
            name: 'Telugu',
            bmp: '\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F'
        },
        {
            name: 'Thaana',
            bmp: '\u0780-\u07B1'
        },
        {
            name: 'Thai',
            bmp: '\u0E01-\u0E3A\u0E40-\u0E5B'
        },
        {
            name: 'Tibetan',
            bmp: '\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA'
        },
        {
            name: 'Tifinagh',
            bmp: '\u2D30-\u2D67\u2D6F\u2D70\u2D7F'
        },
        {
            name: 'Tirhuta',
            astral: '\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]'
        },
        {
            name: 'Ugaritic',
            astral: '\uD800[\uDF80-\uDF9D\uDF9F]'
        },
        {
            name: 'Vai',
            bmp: '\uA500-\uA62B'
        },
        {
            name: 'Warang_Citi',
            astral: '\uD806[\uDCA0-\uDCF2\uDCFF]'
        },
        {
            name: 'Yi',
            bmp: '\uA000-\uA48C\uA490-\uA4C6'
        }
    ]);

};

},{}],8:[function(require,module,exports){
var XRegExp = require('./xregexp');

require('./addons/build')(XRegExp);
require('./addons/matchrecursive')(XRegExp);
require('./addons/unicode-base')(XRegExp);
require('./addons/unicode-blocks')(XRegExp);
require('./addons/unicode-categories')(XRegExp);
require('./addons/unicode-properties')(XRegExp);
require('./addons/unicode-scripts')(XRegExp);

module.exports = XRegExp;

},{"./addons/build":1,"./addons/matchrecursive":2,"./addons/unicode-base":3,"./addons/unicode-blocks":4,"./addons/unicode-categories":5,"./addons/unicode-properties":6,"./addons/unicode-scripts":7,"./xregexp":9}],9:[function(require,module,exports){
/*!
 * XRegExp 3.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2007-2017 MIT License
 */

'use strict';

/**
 * XRegExp provides augmented, extensible regular expressions. You get additional regex syntax and
 * flags, beyond what browsers support natively. XRegExp is also a regex utility belt with tools to
 * make your client-side grepping simpler and more powerful, while freeing you from related
 * cross-browser inconsistencies.
 */

// ==--------------------------==
// Private stuff
// ==--------------------------==

// Property name used for extended regex instance data
var REGEX_DATA = 'xregexp';
// Optional features that can be installed and uninstalled
var features = {
    astral: false,
    natives: false
};
// Native methods to use and restore ('native' is an ES3 reserved keyword)
var nativ = {
    exec: RegExp.prototype.exec,
    test: RegExp.prototype.test,
    match: String.prototype.match,
    replace: String.prototype.replace,
    split: String.prototype.split
};
// Storage for fixed/extended native methods
var fixed = {};
// Storage for regexes cached by `XRegExp.cache`
var regexCache = {};
// Storage for pattern details cached by the `XRegExp` constructor
var patternCache = {};
// Storage for regex syntax tokens added internally or by `XRegExp.addToken`
var tokens = [];
// Token scopes
var defaultScope = 'default';
var classScope = 'class';
// Regexes that match native regex syntax, including octals
var nativeTokens = {
    // Any native multicharacter token in default scope, or any single character
    'default': /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
    // Any native multicharacter token in character class scope, or any single character
    'class': /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
};
// Any backreference or dollar-prefixed character in replacement strings
var replacementToken = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g;
// Check for correct `exec` handling of nonparticipating capturing groups
var correctExecNpcg = nativ.exec.call(/()??/, '')[1] === undefined;
// Check for ES6 `flags` prop support
var hasFlagsProp = /x/.flags !== undefined;
// Shortcut to `Object.prototype.toString`
var toString = {}.toString;

function hasNativeFlag(flag) {
    // Can't check based on the presence of properties/getters since browsers might support such
    // properties even when they don't support the corresponding flag in regex construction (tested
    // in Chrome 48, where `'unicode' in /x/` is true but trying to construct a regex with flag `u`
    // throws an error)
    var isSupported = true;
    try {
        // Can't use regex literals for testing even in a `try` because regex literals with
        // unsupported flags cause a compilation error in IE
        new RegExp('', flag);
    } catch (exception) {
        isSupported = false;
    }
    return isSupported;
}
// Check for ES6 `u` flag support
var hasNativeU = hasNativeFlag('u');
// Check for ES6 `y` flag support
var hasNativeY = hasNativeFlag('y');
// Tracker for known flags, including addon flags
var registeredFlags = {
    g: true,
    i: true,
    m: true,
    u: hasNativeU,
    y: hasNativeY
};

/**
 * Attaches extended data and `XRegExp.prototype` properties to a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to augment.
 * @param {Array} captureNames Array with capture names, or `null`.
 * @param {String} xSource XRegExp pattern used to generate `regex`, or `null` if N/A.
 * @param {String} xFlags XRegExp flags used to generate `regex`, or `null` if N/A.
 * @param {Boolean} [isInternalOnly=false] Whether the regex will be used only for internal
 *   operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *   skipping some operations like attaching `XRegExp.prototype` properties.
 * @returns {RegExp} Augmented regex.
 */
function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
    var p;

    regex[REGEX_DATA] = {
        captureNames: captureNames
    };

    if (isInternalOnly) {
        return regex;
    }

    // Can't auto-inherit these since the XRegExp constructor returns a nonprimitive value
    if (regex.__proto__) {
        regex.__proto__ = XRegExp.prototype;
    } else {
        for (p in XRegExp.prototype) {
            // An `XRegExp.prototype.hasOwnProperty(p)` check wouldn't be worth it here, since this
            // is performance sensitive, and enumerable `Object.prototype` or `RegExp.prototype`
            // extensions exist on `regex.prototype` anyway
            regex[p] = XRegExp.prototype[p];
        }
    }

    regex[REGEX_DATA].source = xSource;
    // Emulate the ES6 `flags` prop by ensuring flags are in alphabetical order
    regex[REGEX_DATA].flags = xFlags ? xFlags.split('').sort().join('') : xFlags;

    return regex;
}

/**
 * Removes any duplicate characters from the provided string.
 *
 * @private
 * @param {String} str String to remove duplicate characters from.
 * @returns {String} String with any duplicate characters removed.
 */
function clipDuplicates(str) {
    return nativ.replace.call(str, /([\s\S])(?=[\s\S]*\1)/g, '');
}

/**
 * Copies a regex object while preserving extended data and augmenting with `XRegExp.prototype`
 * properties. The copy has a fresh `lastIndex` property (set to zero). Allows adding and removing
 * flags g and y while copying the regex.
 *
 * @private
 * @param {RegExp} regex Regex to copy.
 * @param {Object} [options] Options object with optional properties:
 *   - `addG` {Boolean} Add flag g while copying the regex.
 *   - `addY` {Boolean} Add flag y while copying the regex.
 *   - `removeG` {Boolean} Remove flag g while copying the regex.
 *   - `removeY` {Boolean} Remove flag y while copying the regex.
 *   - `isInternalOnly` {Boolean} Whether the copied regex will be used only for internal
 *     operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *     skipping some operations like attaching `XRegExp.prototype` properties.
 *   - `source` {String} Overrides `<regex>.source`, for special cases.
 * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
 */
function copyRegex(regex, options) {
    if (!XRegExp.isRegExp(regex)) {
        throw new TypeError('Type RegExp expected');
    }

    var xData = regex[REGEX_DATA] || {};
    var flags = getNativeFlags(regex);
    var flagsToAdd = '';
    var flagsToRemove = '';
    var xregexpSource = null;
    var xregexpFlags = null;

    options = options || {};

    if (options.removeG) {flagsToRemove += 'g';}
    if (options.removeY) {flagsToRemove += 'y';}
    if (flagsToRemove) {
        flags = nativ.replace.call(flags, new RegExp('[' + flagsToRemove + ']+', 'g'), '');
    }

    if (options.addG) {flagsToAdd += 'g';}
    if (options.addY) {flagsToAdd += 'y';}
    if (flagsToAdd) {
        flags = clipDuplicates(flags + flagsToAdd);
    }

    if (!options.isInternalOnly) {
        if (xData.source !== undefined) {
            xregexpSource = xData.source;
        }
        // null or undefined; don't want to add to `flags` if the previous value was null, since
        // that indicates we're not tracking original precompilation flags
        if (xData.flags != null) {
            // Flags are only added for non-internal regexes by `XRegExp.globalize`. Flags are never
            // removed for non-internal regexes, so don't need to handle it
            xregexpFlags = flagsToAdd ? clipDuplicates(xData.flags + flagsToAdd) : xData.flags;
        }
    }

    // Augment with `XRegExp.prototype` properties, but use the native `RegExp` constructor to avoid
    // searching for special tokens. That would be wrong for regexes constructed by `RegExp`, and
    // unnecessary for regexes constructed by `XRegExp` because the regex has already undergone the
    // translation to native regex syntax
    regex = augment(
        new RegExp(options.source || regex.source, flags),
        hasNamedCapture(regex) ? xData.captureNames.slice(0) : null,
        xregexpSource,
        xregexpFlags,
        options.isInternalOnly
    );

    return regex;
}

/**
 * Converts hexadecimal to decimal.
 *
 * @private
 * @param {String} hex
 * @returns {Number}
 */
function dec(hex) {
    return parseInt(hex, 16);
}

/**
 * Returns a pattern that can be used in a native RegExp in place of an ignorable token such as an
 * inline comment or whitespace with flag x. This is used directly as a token handler function
 * passed to `XRegExp.addToken`.
 *
 * @private
 * @param {String} match Match arg of `XRegExp.addToken` handler
 * @param {String} scope Scope arg of `XRegExp.addToken` handler
 * @param {String} flags Flags arg of `XRegExp.addToken` handler
 * @returns {String} Either '' or '(?:)', depending on which is needed in the context of the match.
 */
function getContextualTokenSeparator(match, scope, flags) {
    if (
        // No need to separate tokens if at the beginning or end of a group
        match.input.charAt(match.index - 1) === '(' ||
        match.input.charAt(match.index + match[0].length) === ')' ||
        // Avoid separating tokens when the following token is a quantifier
        isPatternNext(match.input, match.index + match[0].length, flags, '[?*+]|{\\d+(?:,\\d*)?}')
    ) {
        return '';
    }
    // Keep tokens separated. This avoids e.g. inadvertedly changing `\1 1` or `\1(?#)1` to `\11`.
    // This also ensures all tokens remain as discrete atoms, e.g. it avoids converting the syntax
    // error `(? :` into `(?:`.
    return '(?:)';
}

/**
 * Returns native `RegExp` flags used by a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {String} Native flags in use.
 */
function getNativeFlags(regex) {
    return hasFlagsProp ?
        regex.flags :
        // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
        // with an empty string) allows this to continue working predictably when
        // `XRegExp.proptotype.toString` is overridden
        nativ.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(regex))[1];
}

/**
 * Determines whether a regex has extended instance data used to track capture names.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {Boolean} Whether the regex uses named capture.
 */
function hasNamedCapture(regex) {
    return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames);
}

/**
 * Converts decimal to hexadecimal.
 *
 * @private
 * @param {Number|String} dec
 * @returns {String}
 */
function hex(dec) {
    return parseInt(dec, 10).toString(16);
}

/**
 * Returns the first index at which a given value can be found in an array.
 *
 * @private
 * @param {Array} array Array to search.
 * @param {*} value Value to locate in the array.
 * @returns {Number} Zero-based index at which the item is found, or -1.
 */
function indexOf(array, value) {
    var len = array.length;
    var i;

    for (i = 0; i < len; ++i) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}

/**
 * Checks whether the next nonignorable token after the specified position matches the
 * `needlePattern`
 *
 * @private
 * @param {String} pattern Pattern to search within.
 * @param {Number} pos Index in `pattern` to search at.
 * @param {String} flags Flags used by the pattern.
 * @param {String} needlePattern Pattern to match the next token against.
 * @returns {Boolean} Whether the next nonignorable token matches `needlePattern`
 */
function isPatternNext(pattern, pos, flags, needlePattern) {
    var inlineCommentPattern = '\\(\\?#[^)]*\\)';
    var lineCommentPattern = '#[^#\\n]*';
    var patternsToIgnore = flags.indexOf('x') > -1 ?
        // Ignore any leading whitespace, line comments, and inline comments
        ['\\s', lineCommentPattern, inlineCommentPattern] :
        // Ignore any leading inline comments
        [inlineCommentPattern];
    return nativ.test.call(
        new RegExp('^(?:' + patternsToIgnore.join('|') + ')*(?:' + needlePattern + ')'),
        pattern.slice(pos)
    );
}

/**
 * Determines whether a value is of the specified type, by resolving its internal [[Class]].
 *
 * @private
 * @param {*} value Object to check.
 * @param {String} type Type to check for, in TitleCase.
 * @returns {Boolean} Whether the object matches the type.
 */
function isType(value, type) {
    return toString.call(value) === '[object ' + type + ']';
}

/**
 * Adds leading zeros if shorter than four characters. Used for fixed-length hexadecimal values.
 *
 * @private
 * @param {String} str
 * @returns {String}
 */
function pad4(str) {
    while (str.length < 4) {
        str = '0' + str;
    }
    return str;
}

/**
 * Checks for flag-related errors, and strips/applies flags in a leading mode modifier. Offloads
 * the flag preparation logic from the `XRegExp` constructor.
 *
 * @private
 * @param {String} pattern Regex pattern, possibly with a leading mode modifier.
 * @param {String} flags Any combination of flags.
 * @returns {Object} Object with properties `pattern` and `flags`.
 */
function prepareFlags(pattern, flags) {
    var i;

    // Recent browsers throw on duplicate flags, so copy this behavior for nonnative flags
    if (clipDuplicates(flags) !== flags) {
        throw new SyntaxError('Invalid duplicate regex flag ' + flags);
    }

    // Strip and apply a leading mode modifier with any combination of flags except g or y
    pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function($0, $1) {
        if (nativ.test.call(/[gy]/, $1)) {
            throw new SyntaxError('Cannot use flag g or y in mode modifier ' + $0);
        }
        // Allow duplicate flags within the mode modifier
        flags = clipDuplicates(flags + $1);
        return '';
    });

    // Throw on unknown native or nonnative flags
    for (i = 0; i < flags.length; ++i) {
        if (!registeredFlags[flags.charAt(i)]) {
            throw new SyntaxError('Unknown regex flag ' + flags.charAt(i));
        }
    }

    return {
        pattern: pattern,
        flags: flags
    };
}

/**
 * Prepares an options object from the given value.
 *
 * @private
 * @param {String|Object} value Value to convert to an options object.
 * @returns {Object} Options object.
 */
function prepareOptions(value) {
    var options = {};

    if (isType(value, 'String')) {
        XRegExp.forEach(value, /[^\s,]+/, function(match) {
            options[match] = true;
        });

        return options;
    }

    return value;
}

/**
 * Registers a flag so it doesn't throw an 'unknown flag' error.
 *
 * @private
 * @param {String} flag Single-character flag to register.
 */
function registerFlag(flag) {
    if (!/^[\w$]$/.test(flag)) {
        throw new Error('Flag must be a single character A-Za-z0-9_$');
    }

    registeredFlags[flag] = true;
}

/**
 * Runs built-in and custom regex syntax tokens in reverse insertion order at the specified
 * position, until a match is found.
 *
 * @private
 * @param {String} pattern Original pattern from which an XRegExp object is being built.
 * @param {String} flags Flags being used to construct the regex.
 * @param {Number} pos Position to search for tokens within `pattern`.
 * @param {Number} scope Regex scope to apply: 'default' or 'class'.
 * @param {Object} context Context object to use for token handler functions.
 * @returns {Object} Object with properties `matchLength`, `output`, and `reparse`; or `null`.
 */
function runTokens(pattern, flags, pos, scope, context) {
    var i = tokens.length;
    var leadChar = pattern.charAt(pos);
    var result = null;
    var match;
    var t;

    // Run in reverse insertion order
    while (i--) {
        t = tokens[i];
        if (
            (t.leadChar && t.leadChar !== leadChar) ||
            (t.scope !== scope && t.scope !== 'all') ||
            (t.flag && flags.indexOf(t.flag) === -1)
        ) {
            continue;
        }

        match = XRegExp.exec(pattern, t.regex, pos, 'sticky');
        if (match) {
            result = {
                matchLength: match[0].length,
                output: t.handler.call(context, match, scope, flags),
                reparse: t.reparse
            };
            // Finished with token tests
            break;
        }
    }

    return result;
}

/**
 * Enables or disables implicit astral mode opt-in. When enabled, flag A is automatically added to
 * all new regexes created by XRegExp. This causes an error to be thrown when creating regexes if
 * the Unicode Base addon is not available, since flag A is registered by that addon.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */
function setAstral(on) {
    features.astral = on;
}

/**
 * Enables or disables native method overrides.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */
function setNatives(on) {
    RegExp.prototype.exec = (on ? fixed : nativ).exec;
    RegExp.prototype.test = (on ? fixed : nativ).test;
    String.prototype.match = (on ? fixed : nativ).match;
    String.prototype.replace = (on ? fixed : nativ).replace;
    String.prototype.split = (on ? fixed : nativ).split;

    features.natives = on;
}

/**
 * Returns the object, or throws an error if it is `null` or `undefined`. This is used to follow
 * the ES5 abstract operation `ToObject`.
 *
 * @private
 * @param {*} value Object to check and return.
 * @returns {*} The provided object.
 */
function toObject(value) {
    // null or undefined
    if (value == null) {
        throw new TypeError('Cannot convert null or undefined to object');
    }

    return value;
}

// ==--------------------------==
// Constructor
// ==--------------------------==

/**
 * Creates an extended regular expression object for matching text with a pattern. Differs from a
 * native regular expression in that additional syntax and flags are supported. The returned object
 * is in fact a native `RegExp` and works with all native methods.
 *
 * @class XRegExp
 * @constructor
 * @param {String|RegExp} pattern Regex pattern string, or an existing regex object to copy.
 * @param {String} [flags] Any combination of flags.
 *   Native flags:
 *     - `g` - global
 *     - `i` - ignore case
 *     - `m` - multiline anchors
 *     - `u` - unicode (ES6)
 *     - `y` - sticky (Firefox 3+, ES6)
 *   Additional XRegExp flags:
 *     - `n` - explicit capture
 *     - `s` - dot matches all (aka singleline)
 *     - `x` - free-spacing and line comments (aka extended)
 *     - `A` - astral (requires the Unicode Base addon)
 *   Flags cannot be provided when constructing one `RegExp` from another.
 * @returns {RegExp} Extended regular expression object.
 * @example
 *
 * // With named capture and flag x
 * XRegExp('(?<year>  [0-9]{4} ) -?  # year  \n\
 *          (?<month> [0-9]{2} ) -?  # month \n\
 *          (?<day>   [0-9]{2} )     # day   ', 'x');
 *
 * // Providing a regex object copies it. Native regexes are recompiled using native (not XRegExp)
 * // syntax. Copies maintain extended data, are augmented with `XRegExp.prototype` properties, and
 * // have fresh `lastIndex` properties (set to zero).
 * XRegExp(/regex/);
 */
function XRegExp(pattern, flags) {
    if (XRegExp.isRegExp(pattern)) {
        if (flags !== undefined) {
            throw new TypeError('Cannot supply flags when copying a RegExp');
        }
        return copyRegex(pattern);
    }

    // Copy the argument behavior of `RegExp`
    pattern = pattern === undefined ? '' : String(pattern);
    flags = flags === undefined ? '' : String(flags);

    if (XRegExp.isInstalled('astral') && flags.indexOf('A') === -1) {
        // This causes an error to be thrown if the Unicode Base addon is not available
        flags += 'A';
    }

    if (!patternCache[pattern]) {
        patternCache[pattern] = {};
    }

    if (!patternCache[pattern][flags]) {
        var context = {
            hasNamedCapture: false,
            captureNames: []
        };
        var scope = defaultScope;
        var output = '';
        var pos = 0;
        var result;

        // Check for flag-related errors, and strip/apply flags in a leading mode modifier
        var applied = prepareFlags(pattern, flags);
        var appliedPattern = applied.pattern;
        var appliedFlags = applied.flags;

        // Use XRegExp's tokens to translate the pattern to a native regex pattern.
        // `appliedPattern.length` may change on each iteration if tokens use `reparse`
        while (pos < appliedPattern.length) {
            do {
                // Check for custom tokens at the current position
                result = runTokens(appliedPattern, appliedFlags, pos, scope, context);
                // If the matched token used the `reparse` option, splice its output into the
                // pattern before running tokens again at the same position
                if (result && result.reparse) {
                    appliedPattern = appliedPattern.slice(0, pos) +
                        result.output +
                        appliedPattern.slice(pos + result.matchLength);
                }
            } while (result && result.reparse);

            if (result) {
                output += result.output;
                pos += (result.matchLength || 1);
            } else {
                // Get the native token at the current position
                var token = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, 'sticky')[0];
                output += token;
                pos += token.length;
                if (token === '[' && scope === defaultScope) {
                    scope = classScope;
                } else if (token === ']' && scope === classScope) {
                    scope = defaultScope;
                }
            }
        }

        patternCache[pattern][flags] = {
            // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
            // groups are sometimes inserted during regex transpilation in order to keep tokens
            // separated. However, more than one empty group in a row is never needed.
            pattern: nativ.replace.call(output, /(?:\(\?:\))+/g, '(?:)'),
            // Strip all but native flags
            flags: nativ.replace.call(appliedFlags, /[^gimuy]+/g, ''),
            // `context.captureNames` has an item for each capturing group, even if unnamed
            captures: context.hasNamedCapture ? context.captureNames : null
        };
    }

    var generated = patternCache[pattern][flags];
    return augment(
        new RegExp(generated.pattern, generated.flags),
        generated.captures,
        pattern,
        flags
    );
}

// Add `RegExp.prototype` to the prototype chain
XRegExp.prototype = new RegExp();

// ==--------------------------==
// Public properties
// ==--------------------------==

/**
 * The XRegExp version number as a string containing three dot-separated parts. For example,
 * '2.0.0-beta-3'.
 *
 * @static
 * @memberOf XRegExp
 * @type String
 */
XRegExp.version = '3.2.0';

// ==--------------------------==
// Public methods
// ==--------------------------==

// Intentionally undocumented; used in tests and addons
XRegExp._clipDuplicates = clipDuplicates;
XRegExp._hasNativeFlag = hasNativeFlag;
XRegExp._dec = dec;
XRegExp._hex = hex;
XRegExp._pad4 = pad4;

/**
 * Extends XRegExp syntax and allows custom flags. This is used internally and can be used to
 * create XRegExp addons. If more than one token can match the same string, the last added wins.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex object that matches the new token.
 * @param {Function} handler Function that returns a new pattern string (using native regex syntax)
 *   to replace the matched token within all future XRegExp regexes. Has access to persistent
 *   properties of the regex being built, through `this`. Invoked with three arguments:
 *   - The match array, with named backreference properties.
 *   - The regex scope where the match was found: 'default' or 'class'.
 *   - The flags used by the regex, including any flags in a leading mode modifier.
 *   The handler function becomes part of the XRegExp construction process, so be careful not to
 *   construct XRegExps within the function or you will trigger infinite recursion.
 * @param {Object} [options] Options object with optional properties:
 *   - `scope` {String} Scope where the token applies: 'default', 'class', or 'all'.
 *   - `flag` {String} Single-character flag that triggers the token. This also registers the
 *     flag, which prevents XRegExp from throwing an 'unknown flag' error when the flag is used.
 *   - `optionalFlags` {String} Any custom flags checked for within the token `handler` that are
 *     not required to trigger the token. This registers the flags, to prevent XRegExp from
 *     throwing an 'unknown flag' error when any of the flags are used.
 *   - `reparse` {Boolean} Whether the `handler` function's output should not be treated as
 *     final, and instead be reparseable by other tokens (including the current token). Allows
 *     token chaining or deferring.
 *   - `leadChar` {String} Single character that occurs at the beginning of any successful match
 *     of the token (not always applicable). This doesn't change the behavior of the token unless
 *     you provide an erroneous value. However, providing it can increase the token's performance
 *     since the token can be skipped at any positions where this character doesn't appear.
 * @example
 *
 * // Basic usage: Add \a for the ALERT control code
 * XRegExp.addToken(
 *   /\\a/,
 *   function() {return '\\x07';},
 *   {scope: 'all'}
 * );
 * XRegExp('\\a[\\a-\\n]+').test('\x07\n\x07'); // -> true
 *
 * // Add the U (ungreedy) flag from PCRE and RE2, which reverses greedy and lazy quantifiers.
 * // Since `scope` is not specified, it uses 'default' (i.e., transformations apply outside of
 * // character classes only)
 * XRegExp.addToken(
 *   /([?*+]|{\d+(?:,\d*)?})(\??)/,
 *   function(match) {return match[1] + (match[2] ? '' : '?');},
 *   {flag: 'U'}
 * );
 * XRegExp('a+', 'U').exec('aaa')[0]; // -> 'a'
 * XRegExp('a+?', 'U').exec('aaa')[0]; // -> 'aaa'
 */
XRegExp.addToken = function(regex, handler, options) {
    options = options || {};
    var optionalFlags = options.optionalFlags;
    var i;

    if (options.flag) {
        registerFlag(options.flag);
    }

    if (optionalFlags) {
        optionalFlags = nativ.split.call(optionalFlags, '');
        for (i = 0; i < optionalFlags.length; ++i) {
            registerFlag(optionalFlags[i]);
        }
    }

    // Add to the private list of syntax tokens
    tokens.push({
        regex: copyRegex(regex, {
            addG: true,
            addY: hasNativeY,
            isInternalOnly: true
        }),
        handler: handler,
        scope: options.scope || defaultScope,
        flag: options.flag,
        reparse: options.reparse,
        leadChar: options.leadChar
    });

    // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and flags
    // might now produce different results
    XRegExp.cache.flush('patterns');
};

/**
 * Caches and returns the result of calling `XRegExp(pattern, flags)`. On any subsequent call with
 * the same pattern and flag combination, the cached copy of the regex is returned.
 *
 * @memberOf XRegExp
 * @param {String} pattern Regex pattern string.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Cached XRegExp object.
 * @example
 *
 * while (match = XRegExp.cache('.', 'gs').exec(str)) {
 *   // The regex is compiled once only
 * }
 */
XRegExp.cache = function(pattern, flags) {
    if (!regexCache[pattern]) {
        regexCache[pattern] = {};
    }
    return regexCache[pattern][flags] || (
        regexCache[pattern][flags] = XRegExp(pattern, flags)
    );
};

// Intentionally undocumented; used in tests
XRegExp.cache.flush = function(cacheName) {
    if (cacheName === 'patterns') {
        // Flush the pattern cache used by the `XRegExp` constructor
        patternCache = {};
    } else {
        // Flush the regex cache populated by `XRegExp.cache`
        regexCache = {};
    }
};

/**
 * Escapes any regular expression metacharacters, for use when matching literal strings. The result
 * can safely be used at any point within a regex that uses any flags.
 *
 * @memberOf XRegExp
 * @param {String} str String to escape.
 * @returns {String} String with regex metacharacters escaped.
 * @example
 *
 * XRegExp.escape('Escaped? <.>');
 * // -> 'Escaped\?\ <\.>'
 */
XRegExp.escape = function(str) {
    return nativ.replace.call(toObject(str), /[-\[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

/**
 * Executes a regex search in a specified string. Returns a match array or `null`. If the provided
 * regex uses named capture, named backreference properties are included on the match array.
 * Optional `pos` and `sticky` arguments specify the search start position, and whether the match
 * must start at the specified position only. The `lastIndex` property of the provided regex is not
 * used, but is updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.exec` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Array} Match array with named backreference properties, or `null`.
 * @example
 *
 * // Basic use, with named backreference
 * var match = XRegExp.exec('U+2620', XRegExp('U\\+(?<hex>[0-9A-F]{4})'));
 * match.hex; // -> '2620'
 *
 * // With pos and sticky, in a loop
 * var pos = 2, result = [], match;
 * while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d)>/, pos, 'sticky')) {
 *   result.push(match[1]);
 *   pos = match.index + match[0].length;
 * }
 * // result -> ['2', '3', '4']
 */
XRegExp.exec = function(str, regex, pos, sticky) {
    var cacheKey = 'g';
    var addY = false;
    var fakeY = false;
    var match;
    var r2;

    addY = hasNativeY && !!(sticky || (regex.sticky && sticky !== false));
    if (addY) {
        cacheKey += 'y';
    } else if (sticky) {
        // Simulate sticky matching by appending an empty capture to the original regex. The
        // resulting regex will succeed no matter what at the current index (set with `lastIndex`),
        // and will not search the rest of the subject string. We'll know that the original regex
        // has failed if that last capture is `''` rather than `undefined` (i.e., if that last
        // capture participated in the match).
        fakeY = true;
        cacheKey += 'FakeY';
    }

    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

    // Shares cached copies with `XRegExp.match`/`replace`
    r2 = regex[REGEX_DATA][cacheKey] || (
        regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
            addG: true,
            addY: addY,
            source: fakeY ? regex.source + '|()' : undefined,
            removeY: sticky === false,
            isInternalOnly: true
        })
    );

    pos = pos || 0;
    r2.lastIndex = pos;

    // Fixed `exec` required for `lastIndex` fix, named backreferences, etc.
    match = fixed.exec.call(r2, str);

    // Get rid of the capture added by the pseudo-sticky matcher if needed. An empty string means
    // the original regexp failed (see above).
    if (fakeY && match && match.pop() === '') {
        match = null;
    }

    if (regex.global) {
        regex.lastIndex = match ? r2.lastIndex : 0;
    }

    return match;
};

/**
 * Executes a provided function once per regex match. Searches always start at the beginning of the
 * string and continue until the end, regardless of the state of the regex's `global` property and
 * initial `lastIndex`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Function} callback Function to execute for each match. Invoked with four arguments:
 *   - The match array, with named backreference properties.
 *   - The zero-based match index.
 *   - The string being traversed.
 *   - The regex object being used to traverse the string.
 * @example
 *
 * // Extracts every other digit from a string
 * var evens = [];
 * XRegExp.forEach('1a2345', /\d/, function(match, i) {
 *   if (i % 2) evens.push(+match[0]);
 * });
 * // evens -> [2, 4]
 */
XRegExp.forEach = function(str, regex, callback) {
    var pos = 0;
    var i = -1;
    var match;

    while ((match = XRegExp.exec(str, regex, pos))) {
        // Because `regex` is provided to `callback`, the function could use the deprecated/
        // nonstandard `RegExp.prototype.compile` to mutate the regex. However, since `XRegExp.exec`
        // doesn't use `lastIndex` to set the search position, this can't lead to an infinite loop,
        // at least. Actually, because of the way `XRegExp.exec` caches globalized versions of
        // regexes, mutating the regex will not have any effect on the iteration or matched strings,
        // which is a nice side effect that brings extra safety.
        callback(match, ++i, str, regex);

        pos = match.index + (match[0].length || 1);
    }
};

/**
 * Copies a regex object and adds flag `g`. The copy maintains extended data, is augmented with
 * `XRegExp.prototype` properties, and has a fresh `lastIndex` property (set to zero). Native
 * regexes are not recompiled using XRegExp syntax.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex to globalize.
 * @returns {RegExp} Copy of the provided regex with flag `g` added.
 * @example
 *
 * var globalCopy = XRegExp.globalize(/regex/);
 * globalCopy.global; // -> true
 */
XRegExp.globalize = function(regex) {
    return copyRegex(regex, {addG: true});
};

/**
 * Installs optional features according to the specified options. Can be undone using
 * `XRegExp.uninstall`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.install({
 *   // Enables support for astral code points in Unicode addons (implicitly sets flag A)
 *   astral: true,
 *
 *   // DEPRECATED: Overrides native regex methods with fixed/extended versions
 *   natives: true
 * });
 *
 * // With an options string
 * XRegExp.install('astral natives');
 */
XRegExp.install = function(options) {
    options = prepareOptions(options);

    if (!features.astral && options.astral) {
        setAstral(true);
    }

    if (!features.natives && options.natives) {
        setNatives(true);
    }
};

/**
 * Checks whether an individual optional feature is installed.
 *
 * @memberOf XRegExp
 * @param {String} feature Name of the feature to check. One of:
 *   - `astral`
 *   - `natives`
 * @returns {Boolean} Whether the feature is installed.
 * @example
 *
 * XRegExp.isInstalled('astral');
 */
XRegExp.isInstalled = function(feature) {
    return !!(features[feature]);
};

/**
 * Returns `true` if an object is a regex; `false` if it isn't. This works correctly for regexes
 * created in another frame, when `instanceof` and `constructor` checks would fail.
 *
 * @memberOf XRegExp
 * @param {*} value Object to check.
 * @returns {Boolean} Whether the object is a `RegExp` object.
 * @example
 *
 * XRegExp.isRegExp('string'); // -> false
 * XRegExp.isRegExp(/regex/i); // -> true
 * XRegExp.isRegExp(RegExp('^', 'm')); // -> true
 * XRegExp.isRegExp(XRegExp('(?s).')); // -> true
 */
XRegExp.isRegExp = function(value) {
    return toString.call(value) === '[object RegExp]';
    //return isType(value, 'RegExp');
};

/**
 * Returns the first matched string, or in global mode, an array containing all matched strings.
 * This is essentially a more convenient re-implementation of `String.prototype.match` that gives
 * the result types you actually want (string instead of `exec`-style array in match-first mode,
 * and an empty array instead of `null` when no matches are found in match-all mode). It also lets
 * you override flag g and ignore `lastIndex`, and fixes browser bugs.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {String} [scope='one'] Use 'one' to return the first match as a string. Use 'all' to
 *   return an array of all matched strings. If not explicitly specified and `regex` uses flag g,
 *   `scope` is 'all'.
 * @returns {String|Array} In match-first mode: First match as a string, or `null`. In match-all
 *   mode: Array of all matched strings, or an empty array.
 * @example
 *
 * // Match first
 * XRegExp.match('abc', /\w/); // -> 'a'
 * XRegExp.match('abc', /\w/g, 'one'); // -> 'a'
 * XRegExp.match('abc', /x/g, 'one'); // -> null
 *
 * // Match all
 * XRegExp.match('abc', /\w/g); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /\w/, 'all'); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /x/, 'all'); // -> []
 */
XRegExp.match = function(str, regex, scope) {
    var global = (regex.global && scope !== 'one') || scope === 'all';
    var cacheKey = ((global ? 'g' : '') + (regex.sticky ? 'y' : '')) || 'noGY';
    var result;
    var r2;

    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

    // Shares cached copies with `XRegExp.exec`/`replace`
    r2 = regex[REGEX_DATA][cacheKey] || (
        regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
            addG: !!global,
            removeG: scope === 'one',
            isInternalOnly: true
        })
    );

    result = nativ.match.call(toObject(str), r2);

    if (regex.global) {
        regex.lastIndex = (
            (scope === 'one' && result) ?
                // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
                (result.index + result[0].length) : 0
        );
    }

    return global ? (result || []) : (result && result[0]);
};

/**
 * Retrieves the matches from searching a string using a chain of regexes that successively search
 * within previous matches. The provided `chain` array can contain regexes and or objects with
 * `regex` and `backref` properties. When a backreference is specified, the named or numbered
 * backreference is passed forward to the next regex or returned.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} chain Regexes that each search for matches within preceding results.
 * @returns {Array} Matches by the last regex in the chain, or an empty array.
 * @example
 *
 * // Basic usage; matches numbers within <b> tags
 * XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
 *   XRegExp('(?is)<b>.*?</b>'),
 *   /\d+/
 * ]);
 * // -> ['2', '4', '56']
 *
 * // Passing forward and returning specific backreferences
 * html = '<a href="http://xregexp.com/api/">XRegExp</a>\
 *         <a href="http://www.google.com/">Google</a>';
 * XRegExp.matchChain(html, [
 *   {regex: /<a href="([^"]+)">/i, backref: 1},
 *   {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
 * ]);
 * // -> ['xregexp.com', 'www.google.com']
 */
XRegExp.matchChain = function(str, chain) {
    return (function recurseChain(values, level) {
        var item = chain[level].regex ? chain[level] : {regex: chain[level]};
        var matches = [];

        function addMatch(match) {
            if (item.backref) {
                // Safari 4.0.5 (but not 5.0.5+) inappropriately uses sparse arrays to hold the
                // `undefined`s for backreferences to nonparticipating capturing groups. In such
                // cases, a `hasOwnProperty` or `in` check on its own would inappropriately throw
                // the exception, so also check if the backreference is a number that is within the
                // bounds of the array.
                if (!(match.hasOwnProperty(item.backref) || +item.backref < match.length)) {
                    throw new ReferenceError('Backreference to undefined group: ' + item.backref);
                }

                matches.push(match[item.backref] || '');
            } else {
                matches.push(match[0]);
            }
        }

        for (var i = 0; i < values.length; ++i) {
            XRegExp.forEach(values[i], item.regex, addMatch);
        }

        return ((level === chain.length - 1) || !matches.length) ?
            matches :
            recurseChain(matches, level + 1);
    }([str], 0));
};

/**
 * Returns a new string with one or all matches of a pattern replaced. The pattern can be a string
 * or regex, and the replacement can be a string or a function to be called for each match. To
 * perform a global search and replace, use the optional `scope` argument or include flag g if using
 * a regex. Replacement strings can use `${n}` for named and numbered backreferences. Replacement
 * functions can use named backreferences via `arguments[0].name`. Also fixes browser bugs compared
 * to the native `String.prototype.replace` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 *   Replacement strings can include special replacement syntax:
 *     - $$ - Inserts a literal $ character.
 *     - $&, $0 - Inserts the matched substring.
 *     - $` - Inserts the string that precedes the matched substring (left context).
 *     - $' - Inserts the string that follows the matched substring (right context).
 *     - $n, $nn - Where n/nn are digits referencing an existent capturing group, inserts
 *       backreference n/nn.
 *     - ${n} - Where n is a name or any number of digits that reference an existent capturing
 *       group, inserts backreference n.
 *   Replacement functions are invoked with three or more arguments:
 *     - The matched substring (corresponds to $& above). Named backreferences are accessible as
 *       properties of this first argument.
 *     - 0..n arguments, one for each backreference (corresponding to $1, $2, etc. above).
 *     - The zero-based index of the match within the total search string.
 *     - The total string being searched.
 * @param {String} [scope='one'] Use 'one' to replace the first match only, or 'all'. If not
 *   explicitly specified and using a regex with flag g, `scope` is 'all'.
 * @returns {String} New string with one or all matches replaced.
 * @example
 *
 * // Regex search, using named backreferences in replacement string
 * var name = XRegExp('(?<first>\\w+) (?<last>\\w+)');
 * XRegExp.replace('John Smith', name, '${last}, ${first}');
 * // -> 'Smith, John'
 *
 * // Regex search, using named backreferences in replacement function
 * XRegExp.replace('John Smith', name, function(match) {
 *   return match.last + ', ' + match.first;
 * });
 * // -> 'Smith, John'
 *
 * // String search, with replace-all
 * XRegExp.replace('RegExp builds RegExps', 'RegExp', 'XRegExp', 'all');
 * // -> 'XRegExp builds XRegExps'
 */
XRegExp.replace = function(str, search, replacement, scope) {
    var isRegex = XRegExp.isRegExp(search);
    var global = (search.global && scope !== 'one') || scope === 'all';
    var cacheKey = ((global ? 'g' : '') + (search.sticky ? 'y' : '')) || 'noGY';
    var s2 = search;
    var result;

    if (isRegex) {
        search[REGEX_DATA] = search[REGEX_DATA] || {};

        // Shares cached copies with `XRegExp.exec`/`match`. Since a copy is used, `search`'s
        // `lastIndex` isn't updated *during* replacement iterations
        s2 = search[REGEX_DATA][cacheKey] || (
            search[REGEX_DATA][cacheKey] = copyRegex(search, {
                addG: !!global,
                removeG: scope === 'one',
                isInternalOnly: true
            })
        );
    } else if (global) {
        s2 = new RegExp(XRegExp.escape(String(search)), 'g');
    }

    // Fixed `replace` required for named backreferences, etc.
    result = fixed.replace.call(toObject(str), s2, replacement);

    if (isRegex && search.global) {
        // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
        search.lastIndex = 0;
    }

    return result;
};

/**
 * Performs batch processing of string replacements. Used like `XRegExp.replace`, but accepts an
 * array of replacement details. Later replacements operate on the output of earlier replacements.
 * Replacement details are accepted as an array with a regex or string to search for, the
 * replacement string or function, and an optional scope of 'one' or 'all'. Uses the XRegExp
 * replacement text syntax, which supports named backreference properties via `${name}`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} replacements Array of replacement detail arrays.
 * @returns {String} New string with all replacements.
 * @example
 *
 * str = XRegExp.replaceEach(str, [
 *   [XRegExp('(?<name>a)'), 'z${name}'],
 *   [/b/gi, 'y'],
 *   [/c/g, 'x', 'one'], // scope 'one' overrides /g
 *   [/d/, 'w', 'all'],  // scope 'all' overrides lack of /g
 *   ['e', 'v', 'all'],  // scope 'all' allows replace-all for strings
 *   [/f/g, function($0) {
 *     return $0.toUpperCase();
 *   }]
 * ]);
 */
XRegExp.replaceEach = function(str, replacements) {
    var i;
    var r;

    for (i = 0; i < replacements.length; ++i) {
        r = replacements[i];
        str = XRegExp.replace(str, r[0], r[1], r[2]);
    }

    return str;
};

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * XRegExp.split('a b c', ' ');
 * // -> ['a', 'b', 'c']
 *
 * // With limit
 * XRegExp.split('a b c', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * XRegExp.split('..word1..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', '..']
 */
XRegExp.split = function(str, separator, limit) {
    return fixed.split.call(toObject(str), separator, limit);
};

/**
 * Executes a regex search in a specified string. Returns `true` or `false`. Optional `pos` and
 * `sticky` arguments specify the search start position, and whether the match must start at the
 * specified position only. The `lastIndex` property of the provided regex is not used, but is
 * updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.test` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Boolean} Whether the regex matched the provided value.
 * @example
 *
 * // Basic use
 * XRegExp.test('abc', /c/); // -> true
 *
 * // With pos and sticky
 * XRegExp.test('abc', /c/, 0, 'sticky'); // -> false
 * XRegExp.test('abc', /c/, 2, 'sticky'); // -> true
 */
XRegExp.test = function(str, regex, pos, sticky) {
    // Do this the easy way :-)
    return !!XRegExp.exec(str, regex, pos, sticky);
};

/**
 * Uninstalls optional features according to the specified options. All optional features start out
 * uninstalled, so this is used to undo the actions of `XRegExp.install`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.uninstall({
 *   // Disables support for astral code points in Unicode addons
 *   astral: true,
 *
 *   // DEPRECATED: Restores native regex methods
 *   natives: true
 * });
 *
 * // With an options string
 * XRegExp.uninstall('astral natives');
 */
XRegExp.uninstall = function(options) {
    options = prepareOptions(options);

    if (features.astral && options.astral) {
        setAstral(false);
    }

    if (features.natives && options.natives) {
        setNatives(false);
    }
};

/**
 * Returns an XRegExp object that is the union of the given patterns. Patterns can be provided as
 * regex objects or strings. Metacharacters are escaped in patterns provided as strings.
 * Backreferences in provided regex objects are automatically renumbered to work correctly within
 * the larger combined pattern. Native flags used by provided regexes are ignored in favor of the
 * `flags` argument.
 *
 * @memberOf XRegExp
 * @param {Array} patterns Regexes and strings to combine.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @param {Object} [options] Options object with optional properties:
 *   - `conjunction` {String} Type of conjunction to use: 'or' (default) or 'none'.
 * @returns {RegExp} Union of the provided regexes and strings.
 * @example
 *
 * XRegExp.union(['a+b*c', /(dogs)\1/, /(cats)\1/], 'i');
 * // -> /a\+b\*c|(dogs)\1|(cats)\2/i
 *
 * XRegExp.union([/man/, /bear/, /pig/], 'i', {conjunction: 'none'});
 * // -> /manbearpig/i
 */
XRegExp.union = function(patterns, flags, options) {
    options = options || {};
    var conjunction = options.conjunction || 'or';
    var numCaptures = 0;
    var numPriorCaptures;
    var captureNames;

    function rewrite(match, paren, backref) {
        var name = captureNames[numCaptures - numPriorCaptures];

        // Capturing group
        if (paren) {
            ++numCaptures;
            // If the current capture has a name, preserve the name
            if (name) {
                return '(?<' + name + '>';
            }
        // Backreference
        } else if (backref) {
            // Rewrite the backreference
            return '\\' + (+backref + numPriorCaptures);
        }

        return match;
    }

    if (!(isType(patterns, 'Array') && patterns.length)) {
        throw new TypeError('Must provide a nonempty array of patterns to merge');
    }

    var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
    var output = [];
    var pattern;
    for (var i = 0; i < patterns.length; ++i) {
        pattern = patterns[i];

        if (XRegExp.isRegExp(pattern)) {
            numPriorCaptures = numCaptures;
            captureNames = (pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames) || [];

            // Rewrite backreferences. Passing to XRegExp dies on octals and ensures patterns are
            // independently valid; helps keep this simple. Named captures are put back
            output.push(nativ.replace.call(XRegExp(pattern.source).source, parts, rewrite));
        } else {
            output.push(XRegExp.escape(pattern));
        }
    }

    var separator = conjunction === 'none' ? '' : '|';
    return XRegExp(output.join(separator), flags);
};

// ==--------------------------==
// Fixed/extended native methods
// ==--------------------------==

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `RegExp.prototype.exec`. Calling `XRegExp.install('natives')` uses this to
 * override the native method. Use via `XRegExp.exec` without overriding natives.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Array} Match array with named backreference properties, or `null`.
 */
fixed.exec = function(str) {
    var origLastIndex = this.lastIndex;
    var match = nativ.exec.apply(this, arguments);
    var name;
    var r2;
    var i;

    if (match) {
        // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating capturing
        // groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of older IEs. IE 9
        // in standards mode follows the spec.
        if (!correctExecNpcg && match.length > 1 && indexOf(match, '') > -1) {
            r2 = copyRegex(this, {
                removeG: true,
                isInternalOnly: true
            });
            // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
            // matching due to characters outside the match
            nativ.replace.call(String(str).slice(match.index), r2, function() {
                var len = arguments.length;
                var i;
                // Skip index 0 and the last 2
                for (i = 1; i < len - 2; ++i) {
                    if (arguments[i] === undefined) {
                        match[i] = undefined;
                    }
                }
            });
        }

        // Attach named capture properties
        if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
            // Skip index 0
            for (i = 1; i < match.length; ++i) {
                name = this[REGEX_DATA].captureNames[i - 1];
                if (name) {
                    match[name] = match[i];
                }
            }
        }

        // Fix browsers that increment `lastIndex` after zero-length matches
        if (this.global && !match[0].length && (this.lastIndex > match.index)) {
            this.lastIndex = match.index;
        }
    }

    if (!this.global) {
        // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
        this.lastIndex = origLastIndex;
    }

    return match;
};

/**
 * Fixes browser bugs in the native `RegExp.prototype.test`. Calling `XRegExp.install('natives')`
 * uses this to override the native method.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Boolean} Whether the regex matched the provided value.
 */
fixed.test = function(str) {
    // Do this the easy way :-)
    return !!fixed.exec.call(this, str);
};

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `String.prototype.match`. Calling `XRegExp.install('natives')` uses this to
 * override the native method.
 *
 * @memberOf String
 * @param {RegExp|*} regex Regex to search with. If not a regex object, it is passed to `RegExp`.
 * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
 *   the result of calling `regex.exec(this)`.
 */
fixed.match = function(regex) {
    var result;

    if (!XRegExp.isRegExp(regex)) {
        // Use the native `RegExp` rather than `XRegExp`
        regex = new RegExp(regex);
    } else if (regex.global) {
        result = nativ.match.apply(this, arguments);
        // Fixes IE bug
        regex.lastIndex = 0;

        return result;
    }

    return fixed.exec.call(regex, toObject(this));
};

/**
 * Adds support for `${n}` tokens for named and numbered backreferences in replacement text, and
 * provides named backreferences to replacement functions as `arguments[0].name`. Also fixes browser
 * bugs in replacement text syntax when performing a replacement using a nonregex search value, and
 * the value of a replacement regex's `lastIndex` property during replacement iterations and upon
 * completion. Calling `XRegExp.install('natives')` uses this to override the native method. Note
 * that this doesn't support SpiderMonkey's proprietary third (`flags`) argument. Use via
 * `XRegExp.replace` without overriding natives.
 *
 * @memberOf String
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 * @returns {String} New string with one or all matches replaced.
 */
fixed.replace = function(search, replacement) {
    var isRegex = XRegExp.isRegExp(search);
    var origLastIndex;
    var captureNames;
    var result;

    if (isRegex) {
        if (search[REGEX_DATA]) {
            captureNames = search[REGEX_DATA].captureNames;
        }
        // Only needed if `search` is nonglobal
        origLastIndex = search.lastIndex;
    } else {
        search += ''; // Type-convert
    }

    // Don't use `typeof`; some older browsers return 'function' for regex objects
    if (isType(replacement, 'Function')) {
        // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
        // functions isn't type-converted to a string
        result = nativ.replace.call(String(this), search, function() {
            var args = arguments;
            var i;
            if (captureNames) {
                // Change the `arguments[0]` string primitive to a `String` object that can store
                // properties. This really does need to use `String` as a constructor
                args[0] = new String(args[0]);
                // Store named backreferences on the first argument
                for (i = 0; i < captureNames.length; ++i) {
                    if (captureNames[i]) {
                        args[0][captureNames[i]] = args[i + 1];
                    }
                }
            }
            // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox, Safari
            // bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
            if (isRegex && search.global) {
                search.lastIndex = args[args.length - 2] + args[0].length;
            }
            // ES6 specs the context for replacement functions as `undefined`
            return replacement.apply(undefined, args);
        });
    } else {
        // Ensure that the last value of `args` will be a string when given nonstring `this`,
        // while still throwing on null or undefined context
        result = nativ.replace.call(this == null ? this : String(this), search, function() {
            // Keep this function's `arguments` available through closure
            var args = arguments;
            return nativ.replace.call(String(replacement), replacementToken, function($0, $1, $2) {
                var n;
                // Named or numbered backreference with curly braces
                if ($1) {
                    // XRegExp behavior for `${n}`:
                    // 1. Backreference to numbered capture, if `n` is an integer. Use `0` for the
                    //    entire match. Any number of leading zeros may be used.
                    // 2. Backreference to named capture `n`, if it exists and is not an integer
                    //    overridden by numbered capture. In practice, this does not overlap with
                    //    numbered capture since XRegExp does not allow named capture to use a bare
                    //    integer as the name.
                    // 3. If the name or number does not refer to an existing capturing group, it's
                    //    an error.
                    n = +$1; // Type-convert; drop leading zeros
                    if (n <= args.length - 3) {
                        return args[n] || '';
                    }
                    // Groups with the same name is an error, else would need `lastIndexOf`
                    n = captureNames ? indexOf(captureNames, $1) : -1;
                    if (n < 0) {
                        throw new SyntaxError('Backreference to undefined group ' + $0);
                    }
                    return args[n + 1] || '';
                }
                // Else, special variable or numbered backreference without curly braces
                if ($2 === '$') { // $$
                    return '$';
                }
                if ($2 === '&' || +$2 === 0) { // $&, $0 (not followed by 1-9), $00
                    return args[0];
                }
                if ($2 === '`') { // $` (left context)
                    return args[args.length - 1].slice(0, args[args.length - 2]);
                }
                if ($2 === "'") { // $' (right context)
                    return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
                }
                // Else, numbered backreference without curly braces
                $2 = +$2; // Type-convert; drop leading zero
                // XRegExp behavior for `$n` and `$nn`:
                // - Backrefs end after 1 or 2 digits. Use `${..}` for more digits.
                // - `$1` is an error if no capturing groups.
                // - `$10` is an error if less than 10 capturing groups. Use `${1}0` instead.
                // - `$01` is `$1` if at least one capturing group, else it's an error.
                // - `$0` (not followed by 1-9) and `$00` are the entire match.
                // Native behavior, for comparison:
                // - Backrefs end after 1 or 2 digits. Cannot reference capturing group 100+.
                // - `$1` is a literal `$1` if no capturing groups.
                // - `$10` is `$1` followed by a literal `0` if less than 10 capturing groups.
                // - `$01` is `$1` if at least one capturing group, else it's a literal `$01`.
                // - `$0` is a literal `$0`.
                if (!isNaN($2)) {
                    if ($2 > args.length - 3) {
                        throw new SyntaxError('Backreference to undefined group ' + $0);
                    }
                    return args[$2] || '';
                }
                // `$` followed by an unsupported char is an error, unlike native JS
                throw new SyntaxError('Invalid token ' + $0);
            });
        });
    }

    if (isRegex) {
        if (search.global) {
            // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
            search.lastIndex = 0;
        } else {
            // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
            search.lastIndex = origLastIndex;
        }
    }

    return result;
};

/**
 * Fixes browser bugs in the native `String.prototype.split`. Calling `XRegExp.install('natives')`
 * uses this to override the native method. Use via `XRegExp.split` without overriding natives.
 *
 * @memberOf String
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 */
fixed.split = function(separator, limit) {
    if (!XRegExp.isRegExp(separator)) {
        // Browsers handle nonregex split correctly, so use the faster native method
        return nativ.split.apply(this, arguments);
    }

    var str = String(this);
    var output = [];
    var origLastIndex = separator.lastIndex;
    var lastLastIndex = 0;
    var lastLength;

    // Values for `limit`, per the spec:
    // If undefined: pow(2,32) - 1
    // If 0, Infinity, or NaN: 0
    // If positive number: limit = floor(limit); if (limit >= pow(2,32)) limit -= pow(2,32);
    // If negative number: pow(2,32) - floor(abs(limit))
    // If other: Type-convert, then use the above rules
    // This line fails in very strange ways for some values of `limit` in Opera 10.5-10.63, unless
    // Opera Dragonfly is open (go figure). It works in at least Opera 9.5-10.1 and 11+
    limit = (limit === undefined ? -1 : limit) >>> 0;

    XRegExp.forEach(str, separator, function(match) {
        // This condition is not the same as `if (match[0].length)`
        if ((match.index + match[0].length) > lastLastIndex) {
            output.push(str.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < str.length) {
                Array.prototype.push.apply(output, match.slice(1));
            }
            lastLength = match[0].length;
            lastLastIndex = match.index + lastLength;
        }
    });

    if (lastLastIndex === str.length) {
        if (!nativ.test.call(separator, '') || lastLength) {
            output.push('');
        }
    } else {
        output.push(str.slice(lastLastIndex));
    }

    separator.lastIndex = origLastIndex;
    return output.length > limit ? output.slice(0, limit) : output;
};

// ==--------------------------==
// Built-in syntax/flag tokens
// ==--------------------------==

/*
 * Letter escapes that natively match literal characters: `\a`, `\A`, etc. These should be
 * SyntaxErrors but are allowed in web reality. XRegExp makes them errors for cross-browser
 * consistency and to reserve their syntax, but lets them be superseded by addons.
 */
XRegExp.addToken(
    /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
    function(match, scope) {
        // \B is allowed in default scope only
        if (match[1] === 'B' && scope === defaultScope) {
            return match[0];
        }
        throw new SyntaxError('Invalid escape ' + match[0]);
    },
    {
        scope: 'all',
        leadChar: '\\'
    }
);

/*
 * Unicode code point escape with curly braces: `\u{N..}`. `N..` is any one or more digit
 * hexadecimal number from 0-10FFFF, and can include leading zeros. Requires the native ES6 `u` flag
 * to support code points greater than U+FFFF. Avoids converting code points above U+FFFF to
 * surrogate pairs (which could be done without flag `u`), since that could lead to broken behavior
 * if you follow a `\u{N..}` token that references a code point above U+FFFF with a quantifier, or
 * if you use the same in a character class.
 */
XRegExp.addToken(
    /\\u{([\dA-Fa-f]+)}/,
    function(match, scope, flags) {
        var code = dec(match[1]);
        if (code > 0x10FFFF) {
            throw new SyntaxError('Invalid Unicode code point ' + match[0]);
        }
        if (code <= 0xFFFF) {
            // Converting to \uNNNN avoids needing to escape the literal character and keep it
            // separate from preceding tokens
            return '\\u' + pad4(hex(code));
        }
        // If `code` is between 0xFFFF and 0x10FFFF, require and defer to native handling
        if (hasNativeU && flags.indexOf('u') > -1) {
            return match[0];
        }
        throw new SyntaxError('Cannot use Unicode code point above \\u{FFFF} without flag u');
    },
    {
        scope: 'all',
        leadChar: '\\'
    }
);

/*
 * Empty character class: `[]` or `[^]`. This fixes a critical cross-browser syntax inconsistency.
 * Unless this is standardized (per the ES spec), regex syntax can't be accurately parsed because
 * character class endings can't be determined.
 */
XRegExp.addToken(
    /\[(\^?)\]/,
    function(match) {
        // For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
        // (?!) should work like \b\B, but is unreliable in some versions of Firefox
        return match[1] ? '[\\s\\S]' : '\\b\\B';
    },
    {leadChar: '['}
);

/*
 * Comment pattern: `(?# )`. Inline comments are an alternative to the line comments allowed in
 * free-spacing mode (flag x).
 */
XRegExp.addToken(
    /\(\?#[^)]*\)/,
    getContextualTokenSeparator,
    {leadChar: '('}
);

/*
 * Whitespace and line comments, in free-spacing mode (aka extended mode, flag x) only.
 */
XRegExp.addToken(
    /\s+|#[^\n]*\n?/,
    getContextualTokenSeparator,
    {flag: 'x'}
);

/*
 * Dot, in dotall mode (aka singleline mode, flag s) only.
 */
XRegExp.addToken(
    /\./,
    function() {
        return '[\\s\\S]';
    },
    {
        flag: 's',
        leadChar: '.'
    }
);

/*
 * Named backreference: `\k<name>`. Backreference names can use the characters A-Z, a-z, 0-9, _,
 * and $ only. Also allows numbered backreferences as `\k<n>`.
 */
XRegExp.addToken(
    /\\k<([\w$]+)>/,
    function(match) {
        // Groups with the same name is an error, else would need `lastIndexOf`
        var index = isNaN(match[1]) ? (indexOf(this.captureNames, match[1]) + 1) : +match[1];
        var endIndex = match.index + match[0].length;
        if (!index || index > this.captureNames.length) {
            throw new SyntaxError('Backreference to undefined group ' + match[0]);
        }
        // Keep backreferences separate from subsequent literal numbers. This avoids e.g.
        // inadvertedly changing `(?<n>)\k<n>1` to `()\11`.
        return '\\' + index + (
            endIndex === match.input.length || isNaN(match.input.charAt(endIndex)) ?
                '' : '(?:)'
        );
    },
    {leadChar: '\\'}
);

/*
 * Numbered backreference or octal, plus any following digits: `\0`, `\11`, etc. Octals except `\0`
 * not followed by 0-9 and backreferences to unopened capture groups throw an error. Other matches
 * are returned unaltered. IE < 9 doesn't support backreferences above `\99` in regex syntax.
 */
XRegExp.addToken(
    /\\(\d+)/,
    function(match, scope) {
        if (
            !(
                scope === defaultScope &&
                /^[1-9]/.test(match[1]) &&
                +match[1] <= this.captureNames.length
            ) &&
            match[1] !== '0'
        ) {
            throw new SyntaxError('Cannot use octal escape or backreference to undefined group ' +
                match[0]);
        }
        return match[0];
    },
    {
        scope: 'all',
        leadChar: '\\'
    }
);

/*
 * Named capturing group; match the opening delimiter only: `(?<name>`. Capture names can use the
 * characters A-Z, a-z, 0-9, _, and $ only. Names can't be integers. Supports Python-style
 * `(?P<name>` as an alternate syntax to avoid issues in some older versions of Opera which natively
 * supported the Python-style syntax. Otherwise, XRegExp might treat numbered backreferences to
 * Python-style named capture as octals.
 */
XRegExp.addToken(
    /\(\?P?<([\w$]+)>/,
    function(match) {
        // Disallow bare integers as names because named backreferences are added to match arrays
        // and therefore numeric properties may lead to incorrect lookups
        if (!isNaN(match[1])) {
            throw new SyntaxError('Cannot use integer as capture name ' + match[0]);
        }
        if (match[1] === 'length' || match[1] === '__proto__') {
            throw new SyntaxError('Cannot use reserved word as capture name ' + match[0]);
        }
        if (indexOf(this.captureNames, match[1]) > -1) {
            throw new SyntaxError('Cannot use same name for multiple groups ' + match[0]);
        }
        this.captureNames.push(match[1]);
        this.hasNamedCapture = true;
        return '(';
    },
    {leadChar: '('}
);

/*
 * Capturing group; match the opening parenthesis only. Required for support of named capturing
 * groups. Also adds explicit capture mode (flag n).
 */
XRegExp.addToken(
    /\((?!\?)/,
    function(match, scope, flags) {
        if (flags.indexOf('n') > -1) {
            return '(?:';
        }
        this.captureNames.push(null);
        return '(';
    },
    {
        optionalFlags: 'n',
        leadChar: '('
    }
);

module.exports = XRegExp;

},{}]},{},[8])(8)
}); var ConfigReader=function(configroot){configroot.getUserID=function(){return this._map.userid};configroot.getActiveBaseAppIndex=function(){return this._map.activebaseappindex};configroot.getBaseAppList=function(){return this._map.baseapplist};configroot.getBaseApp=function(){return this.getBaseAppList()[this.getActiveBaseAppIndex()]};configroot.getBaseAppHost=function(){return new URL(config.getBaseApp()).host};configroot.getBaseWS=function(){return this.getBaseApp().replace(/http/,"ws")+"/ws"};configroot.getBaseWebResource=function(){return this.getBaseApp()+"/plugin/resources/"+chrome.i18n.getMessage("labelid")};configroot.getExpand=function(){return false};configroot.getSkipTaggedFlag=function(){return this._map.skiptaggedflag==true};configroot.getSkipTaggedValue=function(){return this._map.skiptaggedvalue};configroot.getSkipCustomFlag=function(){return this._map.skipcustomflag==true};configroot.getSkipCustomValue=function(){return this._map.skipcustomvalue};configroot.getSkipNoName=function(){return this._map.skipnoname==true};configroot.getSkipNoImage=function(){return this._map.skipnoimage==true};configroot.getSkipInCRM=function(){return this._map.skipincrm==true};configroot.getSkip3Plus=function(){return this._map.skip3plus==true};configroot.getSkipNoPremium=function(){return this._map.skipnopremium==true};configroot.getSkipNoLION=function(){return this._map.skipnolion==true};configroot.getSkipNoInfluencer=function(){return this._map.skipnoinfluencer==true};configroot.getSkipNoJobSeeker=function(){return this._map.skipnojobseeker==true};configroot.getExcludeBlacklistedAction=function(){return this._map.excludeblacklistedaction==true};configroot.getKillCharacters=function(){return this._map.killcharacters};configroot.getKillWords=function(){return this._map.killwords};configroot.getSnooze=function(){if(this.throttlingIsActive()){return this._map.snooze==true}else{return false}};configroot.getRandomRangeFlag=function(){if(this.throttlingIsActive()){return this._map.randomrange==true}else{return false}};configroot.getRandomRangeValue=function(){if(this.throttlingIsActive()){return this._map.randomrange==true}else{return false}};configroot.getRobotSchedulePlan=function(){return this._map.robotscheduleplan};configroot.getPauseRobot=function(){return this._map.pauserobot==true};configroot.getReloadOnHang=function(){return this._map.reloadonhang==true};configroot.getIgnoreUnknown=function(){return this._map.ignoreunknown==true};configroot.isPro=function(){return this._map.promode==true};configroot.getBuyMail=function(){return this._map.buymail==true};configroot.getAcceptTandCs=function(){return this._map.accepttandcs==true};configroot.getAutoEndorse=function(){return this._map.autoendorse==true};configroot.getAutoEndorseTarget=function(){var rv=1;try{rv=parseInt(this._map.autoendorsetarget)}catch(e){}return rv};configroot.getAutoTagFlag=function(){return this._map.autotagflag==true};configroot.getAutoTagValue=function(){return this._map.autotagvalue};configroot.getAutoFollow=function(){return this._map.autofollow==true};configroot.getAutoDisconnect=function(){return this._map.autodisconnect==true};configroot.getAutoPDF=function(){return this._map.autopdf==true};configroot.getAutoOnManual=function(){return this._map.runautomationsonmanualvisits==true};configroot.getAutoConnect=function(){return this._map.autoconnect==true};configroot.getAutoSaveAsLead=function(){return this._map.autosaveaslead==true};configroot.getAutoProcessNewConnections=function(){return true};configroot.getAutoConnectMessageFlag=function(){return this._map.autoconnectmessageflag==true};configroot.getAutoConnectMessageText=function(){return this._map.autoconnectmessagetext};configroot.getFollowUpFlag=function(){return this._map.followupflag==true};configroot.getFollowUpSchedule=function(){return this._map.followups};configroot.getConnectedMessageFlag=function(){return this._map.connectedmessageflag==true};configroot.getConnectedMessageText=function(){return this._map.connectedmessagetext};configroot.getSendInmailFlag=function(){return this._map.sendinmailflag==true};configroot.getSendInmailSubject=function(){return this._map.sendinmailsubject};configroot.getSendInmailBody=function(){return this._map.sendinmailbody};configroot.getBadgeDisplay=function(){return this._map.badgedisplay};configroot.getPreVisitDialog=function(){return this._map.previsitdialog};configroot.getExtendedCSVData=function(){return this._map.extendedcsvdata};configroot.getSkipDays=function(){return parseInt(this._map.skipdays)};configroot.getPageInitDelay=function(){var rvoptions=[2500,5e3,7500,1e4];return rvoptions[(this.getMaxPageLoadTime()-1e4)/1e4]};configroot.getWaitMinutes=function(){return this._map.waitminutes};configroot.getWaitVisits=function(){return this._map.waitvisits};configroot.getWebhookProfileFlag=function(){return this._map.webhookprofileflag==true};configroot.getWebhooks=function(){return this._map.webhooks};configroot.getMessageBridgeFlag=function(){return this._map.messagebridgeflag==true};configroot.getRemoteControlFlag=function(){return this._map.remotecontrolflag==true};configroot.getMaxPageLoadTime=function(){return parseInt(this._map.maxpageloadtime)};configroot.getInfoNotifications=function(){return this._map.infonotifications==true};configroot.getActionNotifications=function(){return this._map.actionnotifications==true};configroot.getWarningNotifications=function(){return this._map.warningnotifications==true};configroot.getCSVSeparator=function(){return this._map.csvseparator};configroot.getCSVEncoding=function(){return"utf-8"};configroot.getManagedDownload=function(){return this._map.manageddownload};configroot.includeCSVHint=function(){return false};configroot.getDebugMode=function(){return this._map.debugmode==true};configroot.getDebugLog=function(){return this._map.debuglog==true};configroot.getKillTracking=function(){return this._map.killtracking==true};configroot.getKillExtensions=function(){return this._map.killextensions==true};configroot.getKillAds=function(){return true};configroot.getStartDisabled=function(){return this._map.startdisabled==true};configroot.getMode=function(){return this._map.mode};configroot.getLogLevel=function(){if(this.getDebugLog()){return 0}else{return this._map.loglevel}};configroot.getLogChannels=function(){if(this.getDebugLog()){return["console"]}else{return this._map.logchannels}};configroot.getLogStack=function(){return this._map.logstack==true};configroot.getLogStackFilter=function(){return this._map.logstackfilter};configroot.getThrottleTime=function(){var rv=0;try{rv=parseInt(this._map.throttletime)}catch(e){}return rv};configroot.getScanThrottleTime=function(){var rv=1e3;try{rv=parseInt(this._map.scanthrottletime)}catch(e){}return rv};configroot.getMaxVisits=function(){var rv=100;try{rv=parseInt(this._map.maxvisits)}catch(e){}return rv};configroot.getMaxInvites=function(){var rv=10;try{rv=parseInt(this._map.maxinvites)}catch(e){}return rv};configroot.getMaxMessages=function(){var rv=100;try{rv=parseInt(this._map.maxmessages)}catch(e){}return rv};configroot.getDailyLimitOffset=function(){return this._map.dailylimitoffset};configroot.getMaxTagResults=function(profile){var rv=5;try{rv=this.fulltagsIsActive()?Number.MAX_VALUE:5}catch(e){}return rv};configroot.getMaxTags=function(profile){var rv=100;try{rv=this.fulltagsIsActive()?Number.MAX_VALUE:100}catch(e){}return rv};configroot.getAffiliateLicense=function(){return this._map.affiliatelicense};configroot.getActiveFeatures=function(){return this._map.features};configroot.getEdition=function(){return this._map.edition};configroot.getMap=function(){return Object.assign({},this._map)};configroot.throttlingIsActive=function(){return this._map.features[_featureids.throttling]};configroot.automationIsActive=function(){return this._map.features[_featureids.automation]};configroot.csvfilesIsActive=function(){return this._map.features[_featureids.csvfiles]};configroot.userlimitsIsActive=function(){return this._map.features[_featureids.userlimits]};configroot.fulltagsIsActive=function(){return this._map.features[_featureids.fulltags]};configroot.webhooksIsActive=function(){return this._map.features[_featureids.webhooks]};configroot.remotecontrolIsActive=function(){return this._map.features[_featureids.remotecontrol]};configroot.basicOrchestrationlIsActive=function(){return this._map.features[_featureids.orchestration]==1};configroot.fullOrchestrationlIsActive=function(){return this._map.features[_featureids.orchestration]==2};configroot.getQuota=function(quotaid){return this._map.quota[quotaid]};configroot.getUserAuthenticationType=function(){return this._map.userauthenticationtype}};function SimpleConfigReader(valuemap){var rv={};rv._map=Object.assign({},valuemap);ConfigReader(rv);return rv}const _featureids={throttling:"throttling",automation:"automation",csvfiles:"csvfiles",userlimits:"userlimits",fulltags:"fulltags",webhooks:"webhooks",remotecontrol:"remotecontrol",orchestration:"orchestration"};const _quoateids={BasicProfile:"BasicProfile",PlusProfile:"PlusProfile",SalesProfiles:"SalesProfiles",RecruiterProfile:"RecruiterProfile"};var log={DEBUGLEVEL:0,INFOLEVEL:1,INTERACTIONLEVEL:2,WARNINGLEVEL:3,ERRORLEVEL:4,FATALLEVEL:5,SILENTLEVEL:99,dts:function(msg,base){if(base!=null){var delta=parseFloat(Math.round((new Date).getTime()-base.getTime()/1e3)).toFixed(2);console.log(msg+" @ "+delta+"s")}else{console.log(msg+" @ "+now)}},debug:function(txt){this._logToChannel(log.DEBUGLEVEL,txt)},info:function(txt){this._logToChannel(log.INFOLEVEL,txt)},user:function(txt){this._logToChannel(og.INTERACTIONLEVEL,txt)},warning:function(txt){this._logToChannel(log.WARNINGLEVEL,txt)},error:function(txt){this._logToChannel(log.ERRORLEVEL,txt)},fatal:function(txt){this._logToChannel(log.FATALLEVEL,txt)},_logToChannel:function(level,message){var time=(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString();try{if(config==null||level>=config.getLogLevel()){if(message!=null&&typeof message!="string"){message=JSON.stringify(message)}console.log(time+":"+level+":"+message);if(config!=null&&config.getLogStack()){this._dumpStack(config.getLogStackFilter())}}if(config!=null&&level!=0&&level>=config.getLogLevel()&&!!sendMessage){sendMessage({command:"logMessage",level:level,message:message})}}catch(e){console.log(e+" while logging:"+time+":"+level+":"+message)}},_dumpStack:function(filter){var stack=(new Error).stack;if(!filter||stack.indexOf(filter)>-1){console.log(stack)}}};var tools={addCompanyWebsite:function(signal,callback){var xhr=new XMLHttpRequest;xhr.onreadystatechange=function(){if(xhr.readyState==4&&xhr.status==200){try{var resp=xhr.responseText;var match=resp.match(/,"website(?:Url)?":"(.*?)"/);if(match==null||match.length<=1){match=resp.match(/companyPageUrl&quot;:&quot;(http.*?)&quot/)}if(match==null||match.length<=1){match=resp.match(/<a.*?_website.*?>(.*?)</)}signal.data.CompanyWebsite=match[1]}catch(e){signal.data.CompanyWebsite=""}callback(signal)}else if(xhr.readyState==4&&xhr.status!=200){callback(signal)}};xhr.open("GET",signal.data.CompanyProfile,true);xhr.send()},copyHTMLFieldValues:function(fields,element){var data={};for(var i=0;i<fields.length;i++){var field=fields[i];try{var value=tools.loadHTMLField(field,element);if(!!value){value=tools.applyFilterAndTemplate(field,value);value=tools.stripHTMLTags(value)}if(!!value&&!data[field.name]){data[field.name]=value}}catch(e){data[field.name]=""}}return data},addItemHTML:function(selector,index,data){try{var items=document.querySelectorAll(selector);var itemarray=Array.prototype.slice.call(items);var targetel=itemarray[index];var html="";while(targetel){html+=targetel.outerHTML;targetel=targetel.nextSibling;if(itemarray.indexOf(targetel)>-1){break}}data.html=html}catch(e){log.error(e);data.html=""}},enrichFieldValues:function(htmlvalues,fields){var profilejsondata;if(!!htmlvalues.profileUrl){profilejsondata=pagecache.findByURL(htmlvalues.profileUrl)}if(!profilejsondata&&!!htmlvalues.id){profilejsondata=pagecache.findByID(htmlvalues.id)}if(!profilejsondata){profilejsondata=pagecache.buildVTREE("T:com.linkedin.voyager.identity.profile.ProfileView");if(!!profilejsondata){tools.addExtendedVanilla(profilejsondata,htmlvalues)}else{try{var ref=pagecache.public[htmlvalues.publicIdentifier];ref=ref.entityUrn;ref=ref.replace(/fs_miniProfile/,"fsd_profile");ref=pagecache.entity[ref];profilejsondata=pagecache.expandVNODE(ref,{});if(!!profilejsondata){tools.addExtendedVanilla2019(profilejsondata,htmlvalues)}}catch(e){log.error(e)}}}else{tools.addExtendedSalesNav(profilejsondata,htmlvalues);tools.addExtendedRecruiter(profilejsondata,htmlvalues);tools.addExtendedSalesNav2018(profilejsondata,htmlvalues)}var richdata={};if(htmlvalues.extended!=null){richdata.extended=htmlvalues.extended}for(var i=0;i<fields.length;i++){var field=fields[i];try{if(richdata[field.name]==null||richdata[field.name]==""){var richvalue=null;var htmlvalue=htmlvalues[field.name];var context={};richdata[field.name]=htmlvalue;if(profilejsondata&&field.jsonq){Object.assign(context,profilejsondata);Object.assign(context,richdata);richvalue=tools.loadJSONQField(field,context)}if(field.vpath){Object.assign(context,htmlvalues);Object.assign(context,richdata);richvalue=pagecache.queryVPATH(field.vpath,context)}if(richvalue!=null){if(typeof richvalue!="string"){richvalue=JSON.stringify(richvalue)}richvalue=tools.applyFilterAndTemplate(field,richvalue);richvalue=tools.stripHTMLTags(richvalue);if(!!richvalue){richdata[field.name]=richvalue}}if(richdata[field.name]==null){richdata[field.name]=""}}}catch(e){}}return richdata},loadHTMLField:function(field,element){var value;var queryelement;try{queryelement=element?element:document;value=field.query?queryelement.querySelector(field.query):queryelement;if(field.property!=null){var propvalue=tools.getNestedProperty(field.property.split("."),value);if(!propvalue){value=value?value.getAttribute(field.property):null}else{value=propvalue}}else{value=""}}catch(e){log.warning("Unable to loadHTMLField (query, property, filter):("+field.query+","+field.property+","+field.filter+") for element "+element.innerHTML)}return value},loadJSONQField:function(field,data){var value="";try{if(field.jsonq!=null){var jsonqvalue=tools.getNestedProperty(field.jsonq.split("."),data);if(!!jsonqvalue){value=""+jsonqvalue}}}catch(e){log.warning("Unable to loadJSONQField (query, property, filter):("+field.jsonq+") for object "+JSON.stringify(data))}return value},applyFilterAndTemplate:function(field,value){if(typeof field.filter=="string"){var regexstring=field.filter;var matcher=regexstring.substring(regexstring.indexOf("/")+1,regexstring.lastIndexOf("/"));var flags=regexstring.substring(regexstring.lastIndexOf("/")+1,regexstring.length);field.filter=new RegExp(matcher,flags)}if(!!value&&!!field.filter){try{var match=field.filter.exec(value);value=match?match[1]:""}catch(e){log.error("regex filter failed:"+e)}}if(!!value&&!!field.jsfilter){try{value=value?eval("tools."+field.jsfilter)(value):""}catch(e){log.error("jsfilter failed:"+e)}}if(!!value&&field.encodeURIComponent==true){value=encodeURIComponent(value)}if(!!value&&field.decodeURIComponent==true){value=tools.decodeURIComponentRecurse(value)}value=value.replace(/\u200E/gi,"");if(!!value&&field.template){value=field.template.replace(/__value__/g,value)}return value},htmlDecode:function(input){var parser=new DOMParser;var dom=parser.parseFromString("<!doctype html><body>"+input,"text/html");var decodedString=dom.body.textContent;return decodedString},decodeURIComponentRecurse(value){var newvalue=decodeURIComponent(value);if(newvalue==value){return value}else{return tools.decodeURIComponentRecurse(newvalue)}},decodeURIRecurse(value){var newvalue=decodeURI(value);if(newvalue==value){return value}else{return tools.decodeURIRecurse(newvalue)}},stripHTMLTags:function(value){if(value){value=""+value;value=value.replace(/<.*?>/g,"");value=value.replace(/&nbsp;/g," ");value=value.replace(/&quot;/g,'"');value=value.replace(/&apos;/g,"'");value=value.replace(/&amp;/g,"&")}return value},getNestedProperty:function(keychain,target){if(keychain.length>0&&target){var prop=keychain.shift();var filter=prop.match(/(\w*)\[(\w*)=(\w*)\]/);if(target!=null&&filter==null){return tools.getNestedProperty(keychain,target[prop])}else if(target!=null&&target[filter[1]][filter[2]]==[filter[3]]){return tools.getNestedProperty(keychain,target[filter[1]])}else{return null}}else{return target}},filterLineItems:function(items,filter){var rv=[];var regexstring=filter;var matcher=regexstring.substring(regexstring.indexOf("/")+1,regexstring.lastIndexOf("/"));var flags=regexstring.substring(regexstring.lastIndexOf("/")+1,regexstring.length);var rxfilter=new RegExp(matcher,flags);var inverse="!"==regexstring[0];for(var i=0;items!=null&&i<items.length;i++){if(rxfilter.test(items[i].innerHTML)){if(!inverse){rv.push(items[i])}}else{if(inverse){rv.push(items[i])}}}return rv},removeDuplicates:function(source,checkme){var rv=[];for(var i=0;i<source.length;i++){var found=false;for(var j=0;j<checkme.length;j++){if(source[i]==checkme[j]){found=true;break}}if(!found){rv.push(source[i])}}return rv},click:function(target){var event=new MouseEvent("click",{view:window,bubbles:true,cancelable:true});target.dispatchEvent(event)},scroll:function(target){target.scrollTop=target.scrollHeight;var event=new Event("scroll",{view:window,bubbles:true,cancelable:true,detail:1});target.dispatchEvent(event)},timestamp:function(ms){var d=ms!=null?new Date(parseInt(ms)):new Date;var dformat=[d.getFullYear(),(d.getMonth()+1).padLeft(),d.getDate().padLeft()].join("/")+" "+[d.getHours().padLeft(),d.getMinutes().padLeft(),d.getSeconds().padLeft()].join(":");return dformat},toast:function(toaster,title,text,defaultoptions,useroptions){var options=defaultoptions;if(useroptions!=null){options=JSON.parse(JSON.stringify(defaultoptions));for(var prop in useroptions){options[prop]=useroptions[prop]}}toaster(text,title,options)},getLinkedInUserID:function(){var rv=null;try{var rawid=pagecache.queryVPATH("T:com.linkedin.voyager.common.Me/A:plainId");if(!!rawid){rv="id."+rawid}}catch(e){}return rv},tidyNamePart:function(untidypart){var tidypart=" "+untidypart+" ";var chars=config.getKillCharacters().trim();var words=config.getKillWords().split(",");for(var j in words){tidypart=tidypart.replace(new RegExp("(\\W+)"+escapeRegExp(words[j].trim())+"(\\W+)","gi"),"$1$2")}tidypart=XRegExp.replace(tidypart,XRegExp("[^\\p{L}-]+","g")," ");while(tidypart!=(tidypart=tidypart.replace(/  /g," "))){}tidypart=tidypart.trim();var tidyparts=tidypart.split(" ");for(var p in tidyparts){tidyparts[p]=capitalizeFirstLetter(tidyparts[p])}return tidyparts.join(" ")},tidyLastNameFromFullName:function(untidyfullname){var tidyname=tools.tidyNamePart(untidyfullname);return tidyname.split(" ").pop()},tidyLastNameFromFullNameWithPipe:function(untidyfullname){return tools.tidyLastNameFromFullName(untidyfullname.split("|")[0])},tidyLastNameFromLastName:function(untidylastname){var tidyname=tools.tidyNamePart(untidylastname);return tidyname.split(" ").pop()},tidyFirstNameFromFullName:function(untidyfullname){var tidyname=tools.tidyNamePart(untidyfullname);return tidyname.split(" ")[0]},tidyFirstNameFromFullNameWithPipe:function(untidyfullname){return tools.tidyFirstNameFromFullName(untidyfullname.split("|")[0])},tidyFirstNameFromFirstName:function(untidyfirstname){var tidyname=tools.tidyNamePart(untidyfirstname);return tidyname.split(" ")[0]},tidyMiddleNameFromFullName:function(untidyfullname){var tidyname=tools.tidyNamePart(untidyfullname);var parts=tidyname.split(" ");var rv;if(parts.length>2){rv=parts.slice(1,parts.length-1).join(" ")}else{rv=""}return rv},tidyMiddleNameFromFullNameWithPipe:function(untidyfullname){return tools.tidyMiddleNameFromFullName(untidyfullname.split("|")[0])},tidyMiddleNameFromLastName:function(untidylastname){var tidyname=tools.tidyNamePart(untidylastname);var parts=tidyname.split(" ");var rv;if(parts.length>1){rv=parts.slice(0,parts.length-1).join(" ")}else{rv=""}return rv},recruiterDegreeToNumber:function(degreevalue){var rv="-1";switch(degreevalue){case"THIRD_DEGREE":rv="3";break;case"SECOND_DEGREE":rv="2";break;case"FIRST_DEGREE":rv="1";break;case"GROUP":rv="-1";break;case"OUT_OF_NETWORK":rv="-1";break;default:rv="-1"}return rv},resolveActionFlag:function(flag){var rv=false;if(flag&&flag.vpath){rv=pagecache.queryVPATH(flag.vpath)!=null}else if(flag&&flag.jquery){rv=$(flag.jquery).length>0}else if(flag&&flag.css){var el=document.querySelector(flag.css);rv=el!=null?!el.classList.contains("disabled"):false}return rv},addExtendedVanilla:function(profilejsondata,htmlvalues){if(profilejsondata!=null&&profilejsondata.positionView!=null&&htmlvalues.extended==null&&Array.isArray(profilejsondata.positionGroupView.elements)){htmlvalues.extended={};htmlvalues.extended.positions=[];htmlvalues.extended.skills=[];htmlvalues.extended.schools=[];profilejsondata.positionGroupView.elements.forEach(positionGroup=>{positionGroup.positions.forEach(element=>{try{var data={};if(element.company!=null){data.Industry=element.company.industries?element.company.industries.join(","):"";data.CompanySize=element.company.employeeCountRange?""+element.company.employeeCountRange.start:"";data.CompanySize+=element.company.employeeCountRange?" - "+element.company.employeeCountRange.end:" - "}data.Company=element.companyName?element.companyName:"";data.Location=element.locationName?element.locationName:"";data.Title=element.title?element.title:"";data.Description=element.description?element.description:"";data.From=element.timePeriod.startDate?""+(element.timePeriod.startDate.month?element.timePeriod.startDate.month+"-":"")+element.timePeriod.startDate.year:"";data.To=element.timePeriod.endDate?""+(element.timePeriod.endDate.month?element.timePeriod.endDate.month+"-":"")+element.timePeriod.endDate.year:"";htmlvalues.extended.positions.push(data)}catch(e){log.error(e)}})});profilejsondata.skillView.elements.forEach(element=>{try{htmlvalues.extended.skills.push(element.name)}catch(e){log.error(e)}});profilejsondata.educationView.elements.forEach(element=>{try{var data={};data.Name=element.schoolName;data.Degree=element.degreeName?element.degreeName:"";data.Field=element.fieldOfStudy?element.fieldOfStudy:"";data.From=element.timePeriod.startDate?""+element.timePeriod.startDate.year:"";data.To=element.timePeriod.endDate?""+element.timePeriod.endDate.year:"";htmlvalues.extended.schools.push(data)}catch(e){log.error(e)}})}},addExtendedVanilla2019:function(profilejsondata,htmlvalues){if(profilejsondata!=null&&htmlvalues.extended==null){htmlvalues.extended={};htmlvalues.extended.positions=[];htmlvalues.extended.skills=[];htmlvalues.extended.schools=[];try{if(!!profilejsondata.profilePositionGroups.elements){profilejsondata.profilePositionGroups.elements.forEach(positionGroup=>{positionGroup.profilePositionInPositionGroup.elements.forEach(element=>{try{var data={};if(element.company!=null){data.Industry=element.company.industryUrns?element.company.industryUrns.reduce(function(acc,val){return!!acc?acc+","+val.name:val.name},""):"";data.CompanySize=element.company.employeeCountRange?""+element.company.employeeCountRange.start:"";data.CompanySize+=element.company.employeeCountRange?" - "+element.company.employeeCountRange.end:" - "}data.Company=element.companyName?element.companyName:"";data.Location=element.locationName?element.locationName:"";data.Title=element.title?element.title:"";data.Description=element.description?element.description:"";data.From=element.dateRange.start?""+(element.dateRange.start.month?element.dateRange.start.month+"-":"")+element.dateRange.start.year:"";data.To=element.dateRange.end?""+(element.dateRange.end.month?element.dateRange.end.month+"-":"")+element.dateRange.end.year:"";htmlvalues.extended.positions.push(data)}catch(e){log.error(e)}})})}}catch(e){log.error(e)}try{if(!!profilejsondata.profileSkills.elements){profilejsondata.profileSkills.elements.forEach(element=>{try{htmlvalues.extended.skills.push(element.name)}catch(e){log.error(e)}})}}catch(e){log.error(e)}try{if(!!profilejsondata.profileEducations.elements){profilejsondata.profileEducations.elements.forEach(element=>{try{var data={};data.Name=element.schoolName;data.Degree=element.degreeName?element.degreeName:"";data.Field=element.fieldOfStudy?element.fieldOfStudy:"";data.From=element.dateRange.start?""+(element.dateRange.start.month?element.dateRange.start.month+"-":"")+element.dateRange.start.year:"";data.To=element.dateRange.end?""+(element.dateRange.end.month?element.dateRange.end.month+"-":"")+element.dateRange.end.year:"";htmlvalues.extended.schools.push(data)}catch(e){log.error(e)}})}}catch(e){log.error(e)}}},addExtendedSalesNav:function(profilejsondata,htmlvalues){if(profilejsondata!=null&&profilejsondata.positionsView!=null&&profilejsondata.positionsView.positions!=null&&htmlvalues.extended==null&&Array.isArray(profilejsondata.positionsView.positions)){try{htmlvalues.extended={};htmlvalues.extended.positions=[];htmlvalues.extended.skills=[];htmlvalues.extended.schools=[];profilejsondata.positionsView.positions.forEach(element=>{var data={};element=element.position;data.Company=element.companyName?element.companyName:"";data.Location=element.location?element.location:"";data.Title=element.title?element.title:"";data.Description=element.summary?element.summary:"";data.From=element.formattedStartMonthYear?element.formattedStartMonthYear:"";data.To=element.formattedEndMonthYear?element.formattedEndMonthYear:"";htmlvalues.extended.positions.push(data)});profilejsondata.profile.skills.forEach(element=>{htmlvalues.extended.skills.push(element)});profilejsondata.educationsView.schools.forEach(element=>{var data={};data.Name=element.schoolName;data.Degree=element.degree?element.degree:"";data.Field=element.fieldOfStudy?element.fieldOfStudy:"";data.From=element.startDateYear?""+element.startDateYear:"";data.To=element.endDateYear?""+element.endDateYear:"";htmlvalues.extended.schools.push(data)})}catch(e){log.error(e)}}},addExtendedSalesNav2018:function(profilejsondata,htmlvalues){if(profilejsondata!=null&&profilejsondata.positions!=null&&profilejsondata.educations!=null&&htmlvalues.extended==null&&Array.isArray(profilejsondata.positions)){try{htmlvalues.extended={};htmlvalues.extended.positions=[];htmlvalues.extended.skills=[];htmlvalues.extended.schools=[];profilejsondata.positions.forEach(element=>{var data={};data.Company=element.companyName?element.companyName:"";data.Location="";data.Title=element.title?element.title:"";data.Description=element.description?element.description:"";data.From=element.startedOn&&element.startedOn.month?""+element.startedOn.month+" - ":"";data.From+=element.startedOn&&element.startedOn.year?""+element.startedOn.year:"";data.To=element.endedOn&&element.endedOn.month?""+element.endedOn.month+" - ":"";data.To+=element.endedOn&&element.endedOn.year?""+element.endedOn.year:"";htmlvalues.extended.positions.push(data)});profilejsondata.skills.forEach(element=>{htmlvalues.extended.skills.push(element.name)});profilejsondata.educations.forEach(element=>{var data={};data.Name=element.schoolName;data.Degree=element.degree?element.degree:"";data.Field=element.fieldsOfStudy?element.fieldsOfStudy.join(","):"";data.From=element.startedOn&&element.startedOn.month?""+element.startedOn.month+" - ":"";data.From+=element.startedOn&&element.startedOn.year?""+element.startedOn.year:"";data.To=element.endedOn&&element.endedOn.month?""+element.endedOn.month+" - ":"";data.To+=element.endedOn&&element.endedOn.year?""+element.endedOn.year:"";htmlvalues.extended.schools.push(data)})}catch(e){log.error(e)}}},addExtendedRecruiter:function(profilejsondata,htmlvalues){if(profilejsondata!=null&&profilejsondata.positions!=null&&profilejsondata.profile!=null&&htmlvalues.extended==null&&Array.isArray(profilejsondata.positions)){try{htmlvalues.extended={};htmlvalues.extended.positions=[];htmlvalues.extended.skills=[];htmlvalues.extended.schools=[];profilejsondata.positions.forEach(element=>{var data={};element=element.position;data.Company=element.companyName?element.companyName:"";data.Location=element.location?element.location:"";data.Title=element.title?element.title:"";data.Description=element.positionSummary?element.positionSummary:"";data.From=element.startDateMonth?""+element.startDateMonth+" - ":"";data.From+=element.startDateYear?""+element.startDateYear:"";data.To=element.endDateMonth?""+element.endDateMonth+" - ":"";data.To+=element.endDateYear?""+element.endDateYear:"";htmlvalues.extended.positions.push(data)});profilejsondata.profile.skills.forEach(element=>{htmlvalues.extended.skills.push(element)});profilejsondata.profile.educations.forEach(element=>{var data={};data.Name=element.schoolName;data.Degree=element.degree?element.degree:"";data.Field=element.fieldOfStudy?element.fieldOfStudy:"";data.From=element.startDateYear?""+element.startDateYear:"";data.To=element.endDateYear?""+element.endDateYear:"";htmlvalues.extended.schools.push(data)})}catch(e){log.error(e)}}},downloadCSVData:function(filename,content,charset){try{var a=document.createElement("a");var bdata=(new TextEncoder).encode([content]);var blob=new Blob([bdata],{type:"text/csv;charset="+charset+";"});a.href=window.URL.createObjectURL(blob);a.download=filename;a.style.display="none";document.body.appendChild(a);a.click();delete a}catch(e){alert("Unable to convert CSV data to the selected encoding-format. Please select UTF-8 in the "+chrome.i18n.getMessage("appTitle")+" Download Options and try again.");log.error(e)}}};function escapeRegExp(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function capitalizeFirstLetter(string){var subparts=string.split("-");for(var i=0;i<subparts.length;i++){subparts[i]=subparts[i].charAt(0).toUpperCase()+subparts[i].slice(1).toLowerCase()}return subparts.join("-")}Number.prototype.padLeft=function(base,chr){var len=String(base||10).length-String(this).length+1;return len>0?new Array(len).join(chr||"0")+this:this};function cssexpect(id,allowurlchange){this._queue=[];this._id=id;this._allowurlchange=!!allowurlchange;this._target=location.href}cssexpectmonitor={_monitor:false,lock:function(id,cb,timeout){if(timeout==null){if(config.getDebugMode()){timeout=6e4}else{timeout=5e3}}if(cssexpectmonitor._monitor==false){log.info("LOCK: locking "+id);cssexpectmonitor._monitor=true;try{cb()}catch(e){log.info("LOCK: error "+id);log.error(e)}}else{log.info("LOCK: waiting "+id);if(timeout>0){setTimeout(function(){cssexpectmonitor.lock(id,cb,timeout-100)},100)}else{log.error("css expect failed, callback not invoked.")}}},unlock:function(id){log.info("LOCK: unlocking "+id);cssexpectmonitor._monitor=false}};cssexpect.prototype.expect=function(params){var oparam=params;if(typeof params=="string"||Array.isArray(params)){oparam={entryselector:params}}if(oparam.index==null)oparam.index=0;if(oparam.trigger==null)oparam.trigger=this._defaulttrigger;if(oparam.optional==null)oparam.optional=false;if(oparam.timeout==null&&oparam.optional)oparam.timeout=2500;if(oparam.timeout==null&&!oparam.optional)oparam.timeout=5e3;if(config.getDebugMode()){this._queue.push({pause:5e3})}else{this._queue.push({pause:2e3})}this._queue.push(oparam)};cssexpect.prototype.pause=function(duration){this._queue.push({pause:duration})};cssexpect.prototype._defaulttrigger=function(element){element.scrollIntoView(true)},cssexpect.prototype.wait=function(completeautomation,failautomation){let that=this;cssexpectmonitor.lock(that._id,function(){if(completeautomation==null){completeautomation=function(ok){log.info("Automation succeeded")}}if(failautomation==null){failautomation=function(nok){log.info("Automation failed:"+nok)}}let p=Promise.resolve(true);for(let i=0;i<that._queue.length;i++){let params=that._queue[i];p=p.then(function(resolve,reject){if(!!params.pause){return that._POSTpause(params.pause)}else{return that._POSTCSSexpect(params.entryselector,params.index,params.exitselector,params.trigger,params.optional,params.timeout)}})}p=p.then(function(val){try{that._queue=[];completeautomation(val)}finally{cssexpectmonitor.unlock(that._id)}}).catch(function(err){try{that._queue=[];failautomation(err)}finally{cssexpectmonitor.unlock(that._id)}})})};cssexpect.prototype._POSTpause=function(duration){var that=this;log.info("pausing ...");return new Promise(function(resolve,reject){setTimeout(function(){if(config.getDebugMode()){}resolve(true)},duration)})};cssexpect.prototype._POSTCSSexpect=function(entryselector,index,exitselector,trigger,optional,timeout){var that=this;return new Promise(function(resolve,reject){var starttime=Date.now();that._tryCSSexpect(entryselector,index,exitselector,trigger,starttime,timeout,optional,resolve,reject)})};cssexpect.prototype._tryCSSexpect=function(entryselector,index,exitselector,trigger,starttime,timeout,optional,resolve,reject){var presolve,preject,pfail;if(location.href==this._target||this._allowurlchange){var selectors=[].concat(entryselector);var elements;for(var i=0;i<selectors.length;i++){elements=document.querySelectorAll(selectors[i]);if(index<elements.length)break}if(index<elements.length){trigger(elements[index]);if(exitselector==null||elements[index].querySelector(exitselector)!=null){presolve=true}}if(Date.now()>starttime+timeout){preject="selector '"+entryselector+"["+index+"] not found within timeout."}}else{pfail="url changed after schedule '"+location.href+"!="+this._target}if(presolve){log.info("expect-success:"+presolve);resolve(presolve)}else if(preject&&optional){log.info("expect-ignore:"+preject);resolve(preject)}else if(preject||pfail){log.info("expect-fail:"+(preject||pfail));reject(preject||pfail)}else{var that=this;setTimeout(function(){that._tryCSSexpect(entryselector,index,exitselector,trigger,starttime,timeout,optional,resolve,reject)},100)}};var TagTool={TRACKDEFAULTACCEPTEDTAG:"🦆-default-accepted",NEWCONNECTIONSORIGINTAG:"🦆-newconnections-start",POSTgetTrackingOriginProfiles:function(){return new Promise(function(resolve,reject){sendMessage({command:"listTaggedProfiles",tags:[TagTool.NEWCONNECTIONSORIGINTAG]},function(response){log.info("received: "+JSON.stringify(response));if(!response||response.data.length==0){resolve(null)}else{resolve(response.data)}})})},POSTcreateTag:function(profile,tag){return new Promise(function(resolve,reject){sendMessage({command:"createTag",profileid:profile.id,text:tag},resolve)})},POSTremoveTag:function(profile,value){return new Promise(function(resolve,reject){sendMessage({command:"removeTag",profileid:profile.id,text:tag},resolve)})},POSTisTagged:function(profile,value){return new Promise(function(resolve,reject){sendMessage({command:"getTags",profileid:profile.id},function(response){if(!!response&&response.indexOf(value)>-1){resolve(true)}else{resolve(false)}})})}};function HistoryPushForwarder(push){History.prototype.pushState=function(state,title,location){var event=new CustomEvent("lipush",{detail:location});document.dispatchEvent(event);push.call(this,state,title,location)}}function XHRForwarder(open,mode){if(window.innerWidth<1200){window.innerWidth=1200}if(window.innerHeight<7500){window.innerHeight=7500}if(!XMLHttpRequest.prototype.open.replaced){if(mode)console.log("XHR not yet forwarding");window.requestAnimationFrame=function(callback){setTimeout(function(){callback()},100)};document.addEventListener("lishell",function(event){var rv=null;try{rv=eval(event.detail.cmd)}catch(e){rv=e}var responsemessage=null;try{responsemessage={id:event.detail.id,rv:typeof rv=="object"?JSON.stringify(rv):rv,type:typeof rv}}catch(e){responsemessage={id:event.detail.id,rv:""+rv,type:"string"}}document.dispatchEvent(new CustomEvent("lishellrv",{detail:responsemessage}))});XMLHttpRequest.prototype.open=function(method,url,async,user,pass){this.addEventListener("readystatechange",function(){if(this.readyState==4){var resp={};try{resp.data=this.response;resp.type=this.responseType;resp.url=this.responseURL;if(typeof resp.url!="undefined"&&(resp.url.indexOf("www.linkedin.com/connected/api/v1/contacts")>-1||resp.url.indexOf("www.linkedin.com/connected/api/v2/contacts")>-1||resp.url.indexOf("www.linkedin.com/communities-api/v1/memberships/community")>-1||resp.url.indexOf("www.linkedin.com/sales/search/results")>-1||resp.url.indexOf("www.linkedin.com/sales/profile/")>-1||resp.url.indexOf("www.linkedin.com/sales-api/salesApiProfiles")>-1||resp.url.indexOf("www.linkedin.com/sales-api/salesApiPeopleSearch")>-1||resp.url.indexOf("www.linkedin.com/recruiter/api/smartsearch")>-1||resp.url.indexOf("www.linkedin.com/voyager/api/")>-1)){var event=new CustomEvent("lixhr",{detail:resp});if(XMLHttpRequest.prototype.open.mode)console.log("XHR forwarding "+this.responseURL);document.dispatchEvent(event)}else{if(XMLHttpRequest.prototype.open.mode)console.log("XHR not forwarding "+this.responseURL);if(XMLHttpRequest.prototype.open.mode)console.log("XHR maybe try  "+url)}}catch(e){if(XMLHttpRequest.prototype.open.mode)console.log("XHR error, not forwarding");if(XMLHttpRequest.prototype.open.mode)console.log(e)}}},false);open.call(this,method,url,async,user,pass)};XMLHttpRequest.prototype.open.replaced=true}else{if(mode)console.log("XHR already forwarding");XMLHttpRequest.prototype.open.mode=mode}}function getXHRForwarder(){var rv=null;if(typeof config!="undefined"){var debugmode=!!config&&!!config.getMode&&config.getMode()=="development";rv="("+XHRForwarder+")(XMLHttpRequest.prototype.open, "+debugmode+");"}return rv}function injectXHRForwarder(){document.location.href="javascript:"+getXHRForwarder()}function injectPushForwarder(){document.location.href="javascript:("+HistoryPushForwarder+")(History.prototype.pushState);"}function injectForwarders(){document.location.href="javascript:("+XHRForwarder+")(XMLHttpRequest.prototype.open);("+HistoryPushForwarder+")(History.prototype.pushState);"}function sendAPICall(method,url,params,trycount){var xhr=new XMLHttpRequest;if(!trycount)trycount=0;xhr.open(method,url,true);var paramstring;if(params){paramstring="";for(var p in params){paramstring+=p+"="+encodeURIComponent(params[p])+"&"}}xhr.send(paramstring)}function injectSendAPICall(){document.location.href="javascript:("+sendAPICall+")()"}function EMBEDForwarder(){var FSEMBEDDED=false;document.addEventListener("DOMSubtreeModified",function(){if(typeof fs!="undefined"&&typeof fs.embed!="undefined"&&!FSEMBEDDED){FSEMBEDDED=true;var o=fs.embed;console.log("GOT IT!");fs.embed=function(p1,p2){console.log("RUN IT!");try{var v=document.querySelector("#voltron_srp_main-content").innerHTML;var event=new CustomEvent("liembed",{detail:v.substring(4,v.length-3)});document.dispatchEvent(event)}catch(e){}o(p1,p2)}}})}function injectEMBEDForwarder(){document.location.href="javascript:("+EMBEDForwarder+")()"}var lishell={_callbacks:{},handleResponse:function(msg){var cb=this._callbacks[msg.id];if(cb){if(msg.type=="object"){msg.rv=JSON.parse(msg.rv)}cb(msg.rv)}},exec:function(command,callback){var message={id:Date.now()+"."+Math.random(),cmd:typeof command=="function"?"("+command.toString()+")()":command};var event=new CustomEvent("lishell",{detail:message});if(callback){this._callbacks[message.id]=callback;var that=this;setTimeout(function(){delete that._callbacks[message.id]},1e4)}document.dispatchEvent(event)}};document.addEventListener("lishellrv",function(event){lishell.handleResponse(event.detail)});tools.getContacts=function(fromindex,count,callback){tools.loadContacts(fromindex,count,function(records){callback({result:records})})};tools.loadContacts=function(startindex,count,callback){var url="/voyager/api/relationships/connections?count={count}&sortType=RECENTLY_ADDED&start={startindex}";var headers=tools.getXHRHeaders();url=url.replace("{count}",count);url=url.replace("{startindex}",startindex);$.ajax({url:url,success:function(data,status,xhr){callback(data.elements)},headers:headers,dataType:"json"})};tools.getCSRFToken=function(){var txt=document.cookie;var match=txt.match(/JSESSIONID="ajax:([^"]+)/);var token=match.length==2?match[1]:"";if(!token){log.error("unable to find token")}return token};tools.getXHRHeaders=function(){var token=tools.getCSRFToken();var headers={"Csrf-Token":"ajax:"+token};return headers};tools.countContacts=function(callback){var headers=tools.getXHRHeaders();$.ajax({url:"/voyager/api/relationships/connectionsSummary",success:function(data,status,xhr){callback({count:data.numConnections})},headers:headers,dataType:"json"})};tools.manualExportContacts=function(count,token,callback){var url="https://www.linkedin.com/psettings/member-data";if(tools.f==null){tools.f=$("<iframe>",{src:url,id:"myhelperframe",frameborder:0,scrolling:"no",style:"display:block;width:100%;height:100%;position:fixed;top:0px;left:0px"});tools.f.attr("isDS",true);$(".authentication-outlet").hide();$(".extended-nav").hide();tools.f.appendTo("body")}var formexists=setInterval(function(){var exportframe=document.querySelector("#myhelperframe");if(exportframe==null){clearInterval(formexists);return}var exportwindow=exportframe.contentWindow;var exportdoc=exportwindow.document;var requestbutton=exportdoc!=null?exportdoc.querySelector(".request-archive-btn"):null;var pendingflag=exportdoc!=null?exportdoc.querySelector("#fast-file-only:disabled"):null;var disabledbutton=exportdoc!=null?exportdoc.querySelector(".download-btn:disabled"):null;var downloadbutton=exportdoc!=null?exportdoc.querySelector(".download-btn:enabled"):null;if(requestbutton!=null){clearInterval(formexists);pagedialogs.alert({title:"1. Download an archive of your data",body:"Please request an archive of your data by entering your password and clicking 'Done'."},function(){setTimeout(function(){if(!!exportdoc.querySelector("#fast-file-only"))exportdoc.querySelector("#fast-file-only").click();if(!!exportdoc.querySelector("#file_group_CONNECTIONS"))exportdoc.querySelector("#file_group_CONNECTIONS").click();if(!!exportdoc.querySelector(".request-archive-btn"))exportdoc.querySelector(".request-archive-btn").click();var waitforpw=setInterval(function(){var pw=exportdoc.querySelector("#verify-password");if(!!pw){clearInterval(waitforpw);pw.focus()}},100);var waitforpending=setInterval(function(){var pf=exportdoc!=null?exportdoc.querySelector("#fast-file-only:disabled"):null;if(!!pf){clearInterval(waitforpending);setTimeout(function(){tools.manualExportContacts(count,token,callback)},0)}},100)},0)});return}if(downloadbutton!=null){clearInterval(formexists);pagedialogs.closeModalInfoPanel(tools.waitfordownload);tools.waitfordownload=null;var iamdownloading=pagedialogs.showModalInfoPanel("Downloading archive file...");var xhr=new XMLHttpRequest;xhr.open("GET","/psettings/member-data/download",true);xhr.responseType="blob";xhr.onload=function(e){if(this.status==200){var blob=this.response;pagedialogs.closeModalInfoPanel(iamdownloading);$("#myhelperframe").remove();$(".authentication-outlet").show();$(".extended-nav").show();JSZip.loadAsync(blob).then(function(zip){zip.file("Connections.csv").async("string").then(function(csvdata){callback(csvdata)})})}};xhr.send();return}if(pendingflag!=null){clearInterval(formexists);if(tools.waitfordownload==null){tools.waitfordownload=pagedialogs.showModalInfoPanel("Waiting for download to become available, this usually takes less than 5 minutes...")}setTimeout(function(){if(exportwindow.location!=null&&exportwindow.location.reload!=null){exportwindow.location.reload()}tools.manualExportContacts(count,token,callback)},3e4);return}if(disabledbutton!=null){clearInterval(formexists);if(tools.waitfordownload==null){tools.waitfordownload=pagedialogs.showModalInfoPanel("You have reached the maximum downloads of your contacts-archive, it can take up to 24 hours to become available again. Please close this tab and try again later.")}setTimeout(function(){if(exportwindow.location!=null&&exportwindow.location.reload!=null){exportwindow.location.reload()}tools.manualExportContacts(count,token,callback)},6e4);return}},200)},tools.parseCSVContactData=function(csvdata){console.log("parsing "+csvdata);var rv=[];var lines=null;try{lines=csvdata.replace(/("[^"\n]*)\r?\n(?!(([^"]*"){2})*[^"]*$)/g,"$1").split(/\n/)}catch(e){log.error("Unable to replace LF in quotes");lines=csvdata.split(/\n/)}var headers=$.csv.toArray(lines[0],{separator:","});var fncolumn=headers.indexOf("First Name");var lncolumn=headers.indexOf("Last Name");var emcolumn=headers.indexOf("Email Address");if(fncolumn>-1&&lncolumn>-1&&emcolumn>-1){for(var i=1;i<lines.length;i++){try{log.info(i+":"+lines[i]);var fields=$.csv.toArray(lines[i],{separator:","});if(!!fields&&!!fields[fncolumn]&&!!fields[lncolumn]&&!!fields[emcolumn]){rv.push({firstName:fields[fncolumn],lastName:fields[lncolumn],email:fields[emcolumn]})}}catch(e){log.error("unable to parse line "+i+":"+lines[i]);log.error(e)}}}else{log.warning("Unable to parse CSV data, unknown header format. header="+lines[0])}return rv};tools.buildMailmap=function(contacts){var mailmap={};for(var i=0;i<contacts.length;i++){var fn=contacts[i].firstName+contacts[i].lastName;var key=fn.replace(/\W/g,"").toLowerCase();var email=contacts[i].email;mailmap[key]=email}return mailmap};tools.getMailmap=function(interactive,callback){tools.countContacts(function(result){var token=tools.getCSRFToken();if(token){if(interactive){tools.manualExportContacts(result.count,token,function(csvdata){var contacts=tools.parseCSVContactData(csvdata);console.log(contacts);var rv=tools.buildMailmap(contacts);callback({result:rv,contactcount:result.count})})}}})};tools.pageProtocol=function(){return top.document.location.protocol};var watchdog={};watchdog.start=function(){log.info("setting dog");if(!watchdog.waiting){watchdog.waiting=true;watchdog.token=setTimeout(watchdog.stop,3*60*1e3)}else{throw"Watchdog is already waiting."}};watchdog.stop=function(){log.info("stopping dog");watchdog.waiting=false;if(watchdog.token!=null){log.info("clearing dog timeout");clearTimeout(watchdog.token);watchdog.token=null}};watchdog.isWaiting=function(){log.info("checking dog:"+(watchdog.waiting==true));return watchdog.waiting==true};function addContainer(){var success=false;$("*[duxsouptricks=1]").remove();var tricks=agent.getActiveTricks();if(tricks&&tricks.widgettypes.container){try{var anchorquery=tricks.anchor;var html=widgets.container[tricks.widgettypes.container];success=$(anchorquery).before(html.replace(/__basewebresource__/g,config.getBaseWebResource()).replace(/__appTitle__/g,chrome.i18n.getMessage("appTitle")))[0]!=null}catch(e){}}if(!success){setTimeout(addContainer,500)}}function addTags(tags,taglist){var tricks=agent.getActiveTricks();var success=false;if(tricks&&tricks.widgettypes.container&&tricks.widgettypes.tags){try{var html=widgets.tags[tricks.widgettypes.tags];success=$("#dux-soup-container #placeholder1").before(html)[0]!=null;var dstags=$("#duxsouptags");for(var i=0;i<tags.length;i++){dstags.append("<li>"+tags[i]+"</li>")}dstags.tagit({availableTags:taglist,placeholderText:"add more tags",afterTagAdded:function(evt,ui){if(!ui.duringInitialization){var value=dstags.tagit("tagLabel",ui.tag);console.log("adding tag:"+value);sendCreateTag(value)}},afterTagRemoved:function(evt,ui){var value=dstags.tagit("tagLabel",ui.tag);console.log("removing tag:"+value);sendRemoveTag(value)}});$("#duxsouptags").css("background-color","white")}catch(e){}}if(!success){setTimeout(function(){addTags(tags,taglist)},500)}}function addNote(text){var tricks=agent.getActiveTricks();var success=false;try{if(tricks&&tricks.widgettypes.container&&tricks.widgettypes.notes){var html=widgets.notes[tricks.widgettypes.notes];success=$("#dux-soup-container #placeholder2").before(html)[0]!=null;$("#duxsoupnotes").val(text);$("#dssave")[0].addEventListener("dsSaveEvent",sendSaveNote);$("#dssave").prop("disabled",true);$("#duxsoupnotes").css("background-color","white")}}catch(e){}if(!success){setTimeout(function(){addNote(text)},500)}}function addFollowButton(account){var tricks=agent.getActiveTricks();var success=false;if(tricks&&tricks.widgettypes.container&&tricks.widgettypes.twitter){try{var html=widgets.twitter[tricks.widgettypes.twitter];html=html.replace(/__ACCOUNT__/g,account);success=$("#dux-soup-container #placeholder3").before(html)[0]!=null}catch(e){}}if(!success){setTimeout(function(){addFollowButton(account)},500)}}function addConnectionSearch(profileid){var tricks=agent.getActiveTricks();var success=false;if(tricks&&tricks.widgettypes.container&&tricks.widgettypes.connections){try{var html=widgets.connections[tricks.widgettypes.connections];html=html.replace(/__PROFILEID__/g,profileid.split(".")[1]);success=$("#dux-soup-container #placeholder4").before(html)[0]!=null}catch(e){}}if(!success){setTimeout(function(){addConnectionSearch(profileid)},500)}}function sendSaveNote(){sendMessage({command:"saveNote",profileid:agent.detaildata.id,text:document.getElementById("duxsoupnotes").value});document.getElementById("dssave").disabled=true}function sendCreateTag(value){sendMessage({command:"createTag",profileid:agent.detaildata.id,text:value})}function sendRemoveTag(value){sendMessage({command:"removeTag",profileid:agent.detaildata.id,text:value})}var widgets={container:{standard:`\n            <div duxsouptricks="1">\n                <div id="dux-soup-container" class="discovery-module  class="bgcolor=#ff0000" discovery-peek-right" id="control_gen_13">\n                    <div class="header">\n                        <h3><img src="__basewebresource__/dstrix-logo.png" width="24px" style="margin-right:10px;margin-top:5px;margin-bottom:-3px;">__appTitle__ Tricks</h3>\n                        <div id="placeholder1" style="display:none"></div>\n                        <div id="placeholder2" style="display:none"></div>\n                        <div id="placeholder3" style="display:none"></div> \n                        <div id="placeholder4" style="display:none"></div>\n                    </div>\n                </div>\n                <hr>\n            </div>\n            `,salesnav:`\n            <section id="people-also-viewed" class="module primary-module" duxsouptricks="1">\n                <div id="dux-soup-container" class="pav">\n                    <header class="pav-head">\n                        <h1 class="title"><img src="__basewebresource__/dstrix-logo.png" width="24px" style="margin-right:10px;margin-top:5px;margin-bottom:-3px;">__appTitle__ Tricks</h1>\n                    </header>\n                    <div id="placeholder1" style="display:none"></div>   \n                    <div id="placeholder2" style="display:none"></div>   \n                    <div id="placeholder3" style="display:none"></div>   \n                    <div id="placeholder4" style="display:none"></div>   \n                </div>\n            </section>\n            `,salesnav2018:`\n            <section id="people-also-viewed" class="module primary-module" duxsouptricks="1">\n                <div id="dux-soup-container" class="pav">\n                    <header class="pav-head">\n                        <h3 class="title"><img src="__basewebresource__/dstrix-logo.png" width="24px" style="margin-right:10px;margin-top:5px;margin-bottom:-3px;"><strong>__appTitle__ Tricks</strong></h2>\n                    </header>\n                    <div id="placeholder1" style="display:none"></div>   \n                    <div id="placeholder2" style="display:none"></div>   \n                    <div id="placeholder3" style="display:none"></div>   \n                    <div id="placeholder4" style="display:none"></div>   \n                </div>\n            </section>\n            `,recruiter:`\n            <section id="people-also-viewed" class="module primary-module" duxsouptricks="1">\n                <div id="dux-soup-container" class="pav" style="padding:15px">\n                    <header class="pav-head">\n                        <h1 class="title"><img src="__basewebresource__/dstrix-logo.png" width="24px" style="margin-right:10px;margin-top:5px;margin-bottom:-3px;">__appTitle__ Tricks</h1>\n                    </header>\n                    <div id="placeholder1" style="display:none"></div>   \n                    <div id="placeholder2" style="display:none"></div>   \n                    <div id="placeholder3" style="display:none"></div>   \n                    <div id="placeholder4" style="display:none"></div>   \n                </div>\n            </section>\n            `},notes:{standard:`\n            <div>\n                <div class="discovery-panel">\n                    <strong style="font-size:16px">Your Notes</strong><br/>\n                    <textarea id="duxsoupnotes" oninput="document.getElementById('dssave').disabled=false;"  rows="7" cols="35" maxlength="4096" placeholder="tasks, dates, actions"></textarea>\n                </div>\n                <button style="font-size:16px;margin-top:2px;" id="dssave" onclick="var saveEvent = document.createEvent('Event');saveEvent.initEvent('dsSaveEvent', true, true);this.dispatchEvent(saveEvent);" type="button">Save</button>\n            </div>\n            `,salesnav:` \n            <section class="pav-body">\n                <strong>Your Notes</strong><br/>\n                <textarea id="duxsoupnotes" style="font-size:12px" oninput="document.getElementById('dssave').disabled=false;"  rows="8" cols="38" maxlength="4096" placeholder="tasks, dates, actions"></textarea>\n                <button style="margin-top:2px;" id="dssave" onclick="var saveEvent = document.createEvent('Event');saveEvent.initEvent('dsSaveEvent', true, true);this.dispatchEvent(saveEvent);" type="button">Save</button>\n            </section>\n            `,recruiter:` \n            <section class="pav-body" style="margin-top:5px">\n                <strong>Your Notes</strong><br/>\n                <textarea id="duxsoupnotes" style="font-size:12px" oninput="document.getElementById('dssave').disabled=false;"  rows="8" cols="38" maxlength="4096" placeholder="tasks, dates, actions"></textarea>\n                <button style="margin-top:2px;" id="dssave" onclick="var saveEvent = document.createEvent('Event');saveEvent.initEvent('dsSaveEvent', true, true);this.dispatchEvent(saveEvent);" type="button">Save</button>\n            </section>\n            `},tags:{standard:`\n            <div>\n                <div class="discovery-panel">\n                    <strong style="font-size:16px">Your Tags</strong><br/>\n                    <form>\n                        <ul id="duxsouptags">\n                            \x3c!-- tags inserted here --\x3e       \n                        </ul>\n                    </form>\n                </div>\n            </div>\n            `,salesnav:`\n            <section class="pav-body">\n                <div class="discovery-panel">\n                    <strong style="font-size:16px">Your Tags</strong><br/>\n                    <form>\n                        <ul id="duxsouptags" style=background-color:white">\n                            \x3c!-- tags inserted here --\x3e       \n                        </ul>\n                    </form>\n                </div>\n            </section>\n            `,recruiter:`\n            <section class="pav-body" style="margin-top:5px">\n                <div class="discovery-panel">\n                    <strong style="font-size:16px">Your Tags</strong><br/>\n                    <form>\n                        <ul id="duxsouptags" style=background-color:white">\n                            \x3c!-- tags inserted here --\x3e       \n                        </ul>\n                    </form>\n                </div>\n            </section>\n            `},twitter:{standard:`\n            <div>\n            <br/>\n                <a href="https://twitter.com/__ACCOUNT__" class="twitter-follow-button" data-show-count="false" data-size="large">\n                    Follow @__ACCOUNT__\n                </a>\n            </div>\n            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');<\/script>\n        `,salesnav:`\n            <section class="pav-body">\n            <br/>\n                <a href="https://twitter.com/__ACCOUNT__" class="twitter-follow-button" data-show-count="false" data-size="large">\n                    Follow @__ACCOUNT__\n                </a>\n            </section>\n            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');<\/script>\n        `},connections:{standard:`\n            <div>\n                <br/>\n                <strong style="font-size:16px">Search connections</strong>\n                <br/>\n                <input type="text" style="width:185px" id="duxsoupsearch" placeholder="Leave blank for all connections"></input>\n                <button style="font-size:16px;margin-top:2px;" id="dssearch" onclick="var q=document.getElementById('duxsoupsearch').value; document.location.href='/vsearch/p?keywords='+q+'&pivotType=cofc&pid=__PROFILEID__&trk=prof-connections-search-advanced';" type="button">Search</button>\n            </div>\n        `,newstandard:`\n            <section class="pav-body">\n                <br/>\n                <button style="font-size:16px;margin-top:2px;" id="dssearch" onclick="document.location.href += 'connections/';" type="button">Visit Connections</button>\n            </section>\n        `,salesnav:`\n            <section class="pav-body">\n                <br/>\n                <strong style="font-size:16px">Search connections</strong>\n                <br/>\n                <input type="text" style="width:185px" id="duxsoupsearch" placeholder="Leave blank for all connections"></input>\n                <button style="font-size:16px;margin-top:2px;" id="dssearch" onclick="var q=document.getElementById('duxsoupsearch').value; document.location.href='/vsearch/p?keywords='+q+'&pivotType=cofc&pid=__PROFILEID__&trk=prof-connections-search-advanced';" type="button">Search</button>\n            </section>\n        `}};vex.defaultOptions.className="vex-theme-default";vex.dialog.buttons.YES.text=chrome.i18n.getMessage("dialogYes");vex.dialog.buttons.NO.text=chrome.i18n.getMessage("dialogNo");var pagedialogs={};pagedialogs.display=function(params,sendResponse){pagedialogs[params.dialog](params,sendResponse)};pagedialogs.alert=function(params,sendResponse){vex.dialog.alert({unsafeMessage:pagedialogs._populateTemplate(params),appendLocation:$(params.appendLocation).length>0?params.appendLocation:"body",callback:function(value){if(sendResponse){sendResponse(value)}}})};pagedialogs.showModalInfoPanel=function(message){return vex.dialog.open({unsafeMessage:pagedialogs._populateTemplate(message),buttons:[],showCloseButton:false,overlayClosesOnClick:false,escapeButtonCloses:false})};pagedialogs.closeModalInfoPanel=function(panel){if(!!panel){panel.close()}};pagedialogs.showProgressPanel=function(message,totalcount){pagedialogs.progress=vex.dialog.open({unsafeMessage:pagedialogs._populateTemplate(message+'<br/><p text-align="center"><progress style="width:90%;margin:15px;" id="dsprogress" value="0" max="__total__"></progress> '.replace(/__total__/g,totalcount)),buttons:[],showCloseButton:false,overlayClosesOnClick:false,escapeButtonCloses:false})};pagedialogs.updateProgressPanel=function(progressed){var bar=$("#dsprogress");var currentvalue=parseInt(bar.prop("value"));var newvalue=currentvalue+progressed;bar.prop("value",newvalue)};pagedialogs.closeProgressPanel=function(){pagedialogs.progress.close()};pagedialogs.confirm=function(params,sendResponse){vex.dialog.confirm({unsafeMessage:pagedialogs._populateTemplate(params),appendLocation:$(params.appendLocation).length>0?params.appendLocation:"body",callback:function(value){sendResponse(value)}})};pagedialogs.confirmVisitStart=function(params,sendResponse){var skipfilters=params.skipfilters;var skiptagstext=config.getSkipTaggedValue();if(skiptagstext!=""){skiptagstext=" as '"+skiptagstext+"'"}var skipcustomtext=config.getSkipCustomValue();if(skipcustomtext!=""){skipcustomtext=" /"+skipcustomtext+"/i"}var autoactions=params.autoactions;var lookupsenabled=config.getBuyMail();var lookupsdisabled=!lookupsenabled;var autoendorse=config.getAutoEndorse();var autoendorsetarget=config.getAutoEndorseTarget();var autoendorsetargettext=autoendorsetarget>0?chrome.i18n.getMessage("visitDialogTop")+" "+autoendorsetarget:chrome.i18n.getMessage("visitDialogBottom")+" "+Math.abs(autoendorsetarget);var autotag=config.getAutoTagFlag();var autotagtext=config.getAutoTagValue();var autoconnectmessageflag=config.getAutoConnectMessageFlag();var connectedmessage=config.getConnectedMessageFlag();var autofollow=config.getAutoFollow();var autodisconnect=config.getAutoDisconnect();var autopdf=config.getAutoPDF();var autosaveaslead=config.getAutoSaveAsLead();var autosaveaspdf=config.getAutoPDF();var autoconnect=config.getAutoConnect();var autoinmail=config.getSendInmailFlag();var autoinmailsubject=config.getSendInmailSubject();var autoinmailbody=config.getSendInmailBody();var selectedskipprofiles=(skipfilters.indexOf("Thumbnail")>-1&&config.getSkipNoImage()?chrome.i18n.getMessage("visitDialogNoThumbnail")+", ":"")+(skipfilters.indexOf("Tags")>-1&&config.getSkipTaggedFlag()?chrome.i18n.getMessage("visitDialogIsTagged")+skiptagstext+", ":"")+(skipfilters.indexOf("Custom")>-1&&config.getSkipCustomFlag()?chrome.i18n.getMessage("visitDialogMatchesPattern")+skipcustomtext+", ":"")+(skipfilters.indexOf("IsCrmImported")>-1&&config.getSkipInCRM()?chrome.i18n.getMessage("visitDialogInCRM")+", ":"")+(skipfilters.indexOf("Distance")>-1&&config.getSkip3Plus()?chrome.i18n.getMessage("visitDialog3Plus")+", ":"")+(skipfilters.indexOf("IsPremium")>-1&&config.getSkipNoPremium()?chrome.i18n.getMessage("visitDialogNotPremium")+", ":"")+(skipfilters.indexOf("IsOpenlink")>-1&&config.getSkipNoLION()?chrome.i18n.getMessage("visitDialogNotOpenLink")+", ":"")+(skipfilters.indexOf("IsInfluencer")>-1&&config.getSkipNoInfluencer()?chrome.i18n.getMessage("visitDialogNotInfluencer")+", ":"")+(skipfilters.indexOf("IsJobseeker")>-1&&config.getSkipNoJobSeeker()?chrome.i18n.getMessage("visitDialogNotJobSeeker")+", ":"");var availableskipprofiles=(skipfilters.indexOf("Thumbnail")>-1?chrome.i18n.getMessage("visitDialogNoThumbnail")+", ":"")+(skipfilters.indexOf("Tags")>-1?chrome.i18n.getMessage("visitDialogIsTagged")+", ":"")+(skipfilters.indexOf("Custom")>-1?chrome.i18n.getMessage("visitDialogMatchesPattern")+", ":"")+(skipfilters.indexOf("IsCrmImported")>-1?chrome.i18n.getMessage("visitDialogInCRM")+", ":"")+(skipfilters.indexOf("Distance")>-1?chrome.i18n.getMessage("visitDialog3Plus")+", ":"")+(skipfilters.indexOf("IsPremium")>-1?chrome.i18n.getMessage("visitDialogNotPremium")+", ":"")+(skipfilters.indexOf("IsOpenlink")>-1?chrome.i18n.getMessage("visitDialogNotOpenLink")+", ":"")+(skipfilters.indexOf("IsInfluencer")>-1?chrome.i18n.getMessage("visitDialogNotInfluencer")+", ":"")+(skipfilters.indexOf("IsJobseeker")>-1?chrome.i18n.getMessage("visitDialogNotJobSeeker")+", ":"");var selectedautomations=(autoactions.indexOf("endorse")>-1&&config.getAutoEndorse()?chrome.i18n.getMessage("visitDialogEndorse")+" ("+autoendorsetargettext+"), ":"")+(autoactions.indexOf("connect")>-1&&config.getAutoConnect()?autoconnectmessageflag?chrome.i18n.getMessage("visitDialogConnectWithMessage")+", ":chrome.i18n.getMessage("visitDialogConnectWithoutMessage")+", ":"")+(autoactions.indexOf("sendmessage")>-1&&config.getConnectedMessageFlag()?chrome.i18n.getMessage("visitDialogSendMessage")+", ":"")+(autoactions.indexOf("follow")>-1&&config.getAutoFollow()?chrome.i18n.getMessage("visitDialogFollow")+", ":"")+(autoactions.indexOf("disconnect")>-1&&config.getAutoDisconnect()?chrome.i18n.getMessage("visitDialogDisconnect")+", ":"")+(autoactions.indexOf("savetopdf")>-1&&config.getAutoPDF()?chrome.i18n.getMessage("visitDialogSaveAsPDF")+", ":"")+(autoactions.indexOf("saveaslead")>-1&&config.getAutoSaveAsLead()?chrome.i18n.getMessage("visitDialogSaveAsLead")+", ":"")+(autoactions.indexOf("sendinmail")>-1&&config.getSendInmailFlag()?chrome.i18n.getMessage("visitDialogSendInmail")+", ":"");var availableautomations=(autoactions.indexOf("endorse")>-1?chrome.i18n.getMessage("visitDialogEndorse")+", ":"")+(autoactions.indexOf("connect")>-1?chrome.i18n.getMessage("visitDialogConnect")+", ":"")+(autoactions.indexOf("sendmessage")>-1?chrome.i18n.getMessage("visitDialogSendMessage")+", ":"")+(autoactions.indexOf("follow")>-1?chrome.i18n.getMessage("visitDialogFollow")+", ":"")+(autoactions.indexOf("disconnect")>-1?chrome.i18n.getMessage("visitDialogDisconnect")+", ":"")+(autoactions.indexOf("savetopdf")>-1?chrome.i18n.getMessage("visitDialogSaveAsPDF")+", ":"")+(autoactions.indexOf("saveaslead")>-1?chrome.i18n.getMessage("visitDialogSaveAsLead")+", ":"")+(autoactions.indexOf("sendinmail")>-1?chrome.i18n.getMessage("visitDialogSendInmail")+", ":"");var skipdays=config.getSkipDays();var skipdaystext="";if(skipdays<31){skipdaystext=skipdays==1?skipdays+" "+chrome.i18n.getMessage("day"):skipdays+" "+chrome.i18n.getMessage("days")}else if(skipdays<999999){var m=Math.floor(skipdays/31);skipdaystext=m==1?"1 "+chrome.i18n.getMessage("month"):m+" "+chrome.i18n.getMessage("months")}else{skipdaystext=chrome.i18n.getMessage("visitDialogNeverRevisit")}var isstarter=!config.isPro();var shopurl="chrome-extension://"+chrome.runtime.id+"/dux-store.html";var bodytext=(bodytexttemplate+(chrome.i18n.getMessage("store").length>0?storetexttemplate:"")).replace(/__autoendorse__/g,autoendorse?chrome.i18n.getMessage("on")+" ("+autoendorsetargettext+")":chrome.i18n.getMessage("off")).replace(/__autotag__/g,autotag?chrome.i18n.getMessage("on")+" ("+autotagtext+")":chrome.i18n.getMessage("off")).replace(/__autofollow__/g,autofollow?chrome.i18n.getMessage("on"):chrome.i18n.getMessage("off")).replace(/__autodisconnect__/g,autodisconnect?chrome.i18n.getMessage("on"):chrome.i18n.getMessage("off")).replace(/__autopdf__/g,autopdf?chrome.i18n.getMessage("on"):chrome.i18n.getMessage("off")).replace(/__selectedskipprofiles__/g,selectedskipprofiles!=""?selectedskipprofiles.slice(0,-2):chrome.i18n.getMessage("none")).replace(/__availableskipprofiles__/g,availableskipprofiles!=""?availableskipprofiles.slice(0,-2):chrome.i18n.getMessage("none")).replace(/__selectedautomations__/g,selectedautomations!=""?selectedautomations.slice(0,-2):chrome.i18n.getMessage("none")).replace(/__availableautomations__/g,availableautomations!=""?availableautomations.slice(0,-2):chrome.i18n.getMessage("none")).replace(/__connectedmessage__/g,connectedmessage?chrome.i18n.getMessage("on"):chrome.i18n.getMessage("off")).replace(/__autoconnect__/g,autoconnect?autoconnectmessageflag?chrome.i18n.getMessage("onwith"):chrome.i18n.getMessage("onwithout"):chrome.i18n.getMessage("off")).replace(/__skipdays__/g,skipdaystext).replace(/__lookupsenabled__/g,lookupsenabled?"checked":"").replace(/__lookupsdisabled__/g,lookupsdisabled?"checked":"").replace(/__isstarter__/g,isstarter?chrome.i18n.getMessage("promarker")+" ":"").replace(/__appTitle__/g,chrome.i18n.getMessage("appTitle"));var msgparams={title:chrome.i18n.getMessage("previsitDialogTitle"),body:localizeStrings(bodytext)};vex.dialog.confirm({unsafeMessage:pagedialogs._populateTemplate(msgparams),appendLocation:$(params.appendLocation).length>0?params.appendLocation:"body",callback:function(value){if(value){var lookupsenabled="enabled"==$("input[name=lookups]:checked").val();var noprevisitdialog=$("input[name=previsitdialog]").prop("checked");if(lookupsenabled!=config.getBuyMail()){sendMessage({command:"setConfigOption",configname:"buymail",configvalue:lookupsenabled})}if(noprevisitdialog){sendMessage({command:"setConfigOption",configname:"previsitdialog",configvalue:false})}}sendResponse(value)}});$("#store").on("click",function(){sendMessage({command:"openStore",newtab:true});return false});$("#options").on("click",function(){sendMessage({command:"openOptions",newtab:true});return true})};pagedialogs.selectDownloadType=function(params,sendResponse){var extendedcsvdata=config.getExtendedCSVData();var bodytext=downloaddatatemplate.replace(/__extendedcsvdata__/g,extendedcsvdata?"checked":"");var datacount=params.datacount;var msgparams={title:chrome.i18n.getMessage("downloadDialogTitle"),body:bodytext};vex.dialog.open({unsafeMessage:pagedialogs._populateTemplate(msgparams),appendLocation:$(params.appendLocation).length>0?params.appendLocation:"body",showCloseButton:true,buttons:[{text:chrome.i18n.getMessage("downloadVisitData")+" ("+datacount.visits+")",className:"vex-dialog-button-primary",click:function(){this.value="visit"}},{text:chrome.i18n.getMessage("downloadScanData")+" ("+datacount.scans+")",className:"vex-dialog-button-primary",click:function(){this.value="scan"}}],callback:function(value){if(value){var newextendedcsvdata=$("input[name=extendedcsvdata]").prop("checked");if(config.getExtendedCSVData()!=newextendedcsvdata){sendMessage({command:"setConfigOption",configname:"extendedcsvdata",configvalue:newextendedcsvdata})}}sendResponse(value)}})};pagedialogs._populateTemplate=function(params){var title="";var body="";if(typeof params=="string"){body=localizeStrings(params)}else{if(params.title){title=localizeStrings(params.title)}if(params.message){body=localizeStrings(params.message)}else if(params.body){body=localizeStrings(params.body)}}return dialogTemplate.replace(/__title__/g,title).replace(/__body__/g,body)};var dialogTemplate=`\n    <h3 style="margin-bottom:12px">__title__</h3>\n    <div class="reveal">\n        <p>__body__</p>\n    </div>\n`;var bodytexttemplate=`\n<p>__previsitDialogHeader__</p>\n\n    <ul style="font-family:Source Sans Pro,Helvetica,Arial,sans-serif;font-size:15px;color:rgba(0,0,0,.55);margin-left:24px;font-style:italic;line-height:20px;">\n    <li> __previsitDialogActiveAutomations__ __isstarter__ : __selectedautomations__ <br>\n     <span style="font-size:smaller"> ( __available__ : __availableautomations__ ) </span>\n    <li> __previsitDialogSelectedSkipping__ : __selectedskipprofiles__ <br>\n    <span style="font-size:smaller"> ( __available__ : __availableskipprofiles__ ) </span>\n    <li> __previsitDialogRevisitAfter__ :  __skipdays__\n    </ul>\n</p>\n`;var storetexttemplate=`\n<hr>\n<p>__emailLookupDialogHeader__</p>\n<p style="margin-top:6px;">\n    <label style="margin-top:2px">\n        <input type="radio" name="lookups" value="enabled" style="opacity:1;margin:3px 3px 3px 3px; position:static" __lookupsenabled__>\n        <i>__yesPlease__<sup>*</sup></i>\n    </label>\n    <label style="margin-top:2px">\n        <input type="radio" name="lookups" value="disabled" style="opacity:1;margin:3px 3px 3px 3px; position:static" __lookupsdisabled__>\n        <i>__noThankYou__</i>\n    </label>\n</p>\n<p style="text-align:right;font-size:16px;margin-top:8px;">\n    <sup>*</sup> __requiresPoints__ <br/> \n    <a id="store" href="#" >__claimFreePoints__</a><br>\n    <label style="margin-top:2px">\n        <input type="checkbox" name="previsitdialog" style="opacity:1;margin:3px 3px 3px 3px; position:static" >\n        <i>__dontShowAgain__</i>\n    </label>\n</p>\n</p>\n`;var downloaddatatemplate=`\n<p>__selectDataDownload__<br>\n<label style="margin-top:8px">\n<input type="checkbox" name="extendedcsvdata" __extendedcsvdata__ style="opacity:1;margin:3px 3px 3px 3px; position:static" > __extendedDataLabel__\n</label>\n</p>\n`;function localizeStrings(txt){while(txt.match(/__(.*?)__/)){var keys=txt.match(/__(.*?)__/g);for(var ki=0;ki<keys.length;ki++){var key=keys[ki].match(/__(.*?)__/)[1];var value=chrome.i18n.getMessage(key);var regex=new RegExp("__"+key+"__","g");txt=txt.replace(regex,value)}}return txt}var automation_sequences={};function populateTextArea(el,msg){$(el).sendkeys(".");if(el.nodeName=="TEXTAREA"||el.nodeName=="INPUT"){$(el).val(msg)}else{el.innerText="";var lines=msg.split("\n");var root=el;if(el.nodeName=="P"){root=el.parentElement}lines.forEach(line=>{var p=document.createElement("p");el.parentElement.appendChild(p);p.innerText=line})}$(el).focus();$(el).change();$(el).click()}function getMessageBoxParent(){var rv=null;var removerecipient=document.querySelector(agent.profile.DetailPage.automationcontrols.newconversation);if(removerecipient!=null){rv=removerecipient;while(rv!=null&&!rv.classList.contains("msg-overlay-conversation-bubble")){rv=rv.parentElement}}else{throw"Message box not found."}return rv}function replaceMarkers(text,data,maxlength){if(maxlength==null||maxlength<1){maxlength=1e4}if(!data){data={}}if(!text){text=""}return text.replace(/_\((.*?)\)_/g,getEvalReplaceMarkers(data)).replace(/_FN_/gi,data["First Name"]).replace(/_MN_/gi,data["Middle Name"]).replace(/_LN_/gi,data["Last Name"]).replace(/_TI_/gi,data["Title"]).replace(/_LO_/gi,data["Location"]).replace(/_CN_/gi,data["Company"]).replace(/_IN_/gi,data["Industry"]).substr(0,maxlength)}function getEvalReplaceMarkers(values){var FN=values["First Name"],MN=values["Middle Name"],LN=values["Last Name"],TI=values["Title"],LO=values["Location"],CN=values["Company"],IN=values["Industry"];return function(m0,m1,offset,text){var rv="";if(!!m1){try{rv=eval(m1)}catch(e){console.log(e)}}return rv}}automation_sequences.DetailPageVanilla={endorse:function(count,callback){if(count==null){count=5}var endorsed=0;var seq=new cssexpect("DetailPageVanilla.endorse");seq.expect(agent.profile.DetailPage.automationcontrols.skillsectionpanel);for(let endorsecount=0;endorsecount<Math.abs(count);endorsecount++){seq.pause(3e3);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.endorsebutton,optional:true,timeout:5e3,trigger:function(el){var clickables=document.querySelectorAll(agent.profile.DetailPage.automationcontrols.endorsebutton);var startindex=count>0?0:clickables.length-1;var step=count>0?1:-1;let clickable=clickables[startindex+step*endorsecount];if(clickable!=null&&clickable.click!=null){clickable.click();endorsed++}log.info("endorsed "+endorsed+" skills")}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.postendorsedialogclosebutton,optional:true,trigger:function(el){el.click()}})}seq.wait(function(ok){log.info("Endorse succeeded");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},connect:function(messagetemplate,callback){var seq=new cssexpect("DetailPageVanilla.connect",true);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandprofilemenu,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectbutton,trigger:function(el){el.click()}});if(messagetemplate==null){seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectwithoutmessage,trigger:function(el){if($(agent.profile.DetailPage.automationcontrols.emailprompt).length>0){throw"Unable to send invitation: email address requested."}else{if(config.getDebugMode()){el.focus();log.warning("Debug mode, connection request not sent")}else{el.click()}}}})}else{var msg=replaceMarkers(messagetemplate,agent.detaildata,300);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectwithmessage,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectmessageentry,trigger:function(el){populateTextArea(el,msg)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendconnectionrequest,trigger:function(el){if($(agent.profile.DetailPage.automationcontrols.emailprompt).length>0){throw"Unable to send invitation: email address requested."}else{if(config.getDebugMode()){el.focus();log.warning("Debug mode, connection request not sent")}else{$(el).prop("disabled",false);setTimeout(function(){$(el).click()},200)}}}})}seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectcompleted,timeout:2e4});seq.wait(function(ok){log.info("Connection request sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},sendmessage:function(messagetemplate,callback){var msg=replaceMarkers(messagetemplate,agent.detaildata,2e3);var seq=new cssexpect("DetailPageVanilla.sendmessage");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessagebutton,trigger:function(el){var currentconversations=document.querySelectorAll(agent.profile.DetailPage.automationcontrols.closeconversation);for(var i=0;i<currentconversations.length;i++){currentconversations[i].click()}el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.newconversation,trigger:function(el){}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.toggleclicktosendmenu,optional:true,timeout:5e3,trigger:function(el){el=getMessageBoxParent().querySelector(agent.profile.DetailPage.automationcontrols.toggleclicktosendmenu);if(el!=null){el.click()}}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.toggleclicktosendbutton,optional:true,timeout:5e3,trigger:function(el){el=getMessageBoxParent().querySelector(agent.profile.DetailPage.automationcontrols.toggleclicktosendbutton);if(el!=null){el.click()}}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessagetextentry,trigger:function(el){el=getMessageBoxParent().querySelector(agent.profile.DetailPage.automationcontrols.sendmessagetextentry);populateTextArea(el,msg)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessageendbutton,trigger:function(el){el=getMessageBoxParent().querySelector(agent.profile.DetailPage.automationcontrols.sendmessageendbutton);$(el).prop("disabled",false);if(config.getDebugMode()){log.warning("Debug mode, message not sent")}else{setTimeout(function(){$(el).click()},200)}}});seq.wait(function(ok){log.info("Message sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},follow:function(callback){var seq=new cssexpect("DetailPageVanilla.follow");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandprofilemenu,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.followbutton,trigger:function(el){el.click()}});seq.wait(function(ok){log.info("Follow selected");$("body").click();callback(null,ok)},function(nok){log.info("Automation failed:"+nok);$("body").click();callback(nok)})},disconnect:function(callback){var seq=new cssexpect("DetailPageVanilla.disconnect");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandprofilemenu,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.disconnectbutton,trigger:function(el){el.click()}});seq.wait(function(ok){log.info("Disconnected");$("body").click();callback(null,ok)},function(nok){log.info("Automation failed:"+nok);$("body").click();callback(nok)})},savetopdf:function(callback){var seq=new cssexpect("DetailPageVanilla.savetopdf");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandprofilemenu,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.savetopdfbutton,trigger:function(el){tools.click(el)}});seq.pause(2e3);seq.wait(function(ok){log.info("PDF saved");$("body").click();callback(null,ok)},function(nok){log.info("Automation failed:"+nok);$("body").click();callback(nok)})},togglecontactinfo:function(callback){var seq=new cssexpect("DetailPageVanilla.togglecontactinfo",true);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandcontactinfo,optional:true,trigger:function(el){el.click()}});seq.pause(3500);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.canceldialog,optional:true,trigger:function(el){el.click()}});seq.pause(2e3);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandexperiencesection,optional:true,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandskillsection,optional:true,trigger:function(el){el.click()}});seq.wait(function(ok){log.info("ContactInfo loaded");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})}};automation_sequences.DetailPageSales={connect:function(messagetemplate,callback){var seq=new cssexpect("DetailPageSales.connect");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectbutton,trigger:function(el){el.click()}});if(messagetemplate!=null){var msg=replaceMarkers(messagetemplate,agent.detaildata,300);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectmessageentry,trigger:function(el){el.value=msg}})}seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendconnectionrequest,trigger:function(el){if($(agent.profile.DetailPage.automationcontrols.emailprompt).length>0){throw"Unable to send invitation: email address requested."}else{if(config.getDebugMode()){el.focus();log.warning("Debug mode, connection request not sent")}else{$(el).prop("disabled",false);el.click();$(agent.profile.DetailPage.automationcontrols.sendconnectionrequest).click()}}}});seq.wait(function(ok){log.info("Connection request sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},sendmessage:function(messagetemplate,callback){var msg=replaceMarkers(messagetemplate,agent.detaildata,2e3);var seq=new cssexpect("DetailPageSales.sendmessage");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessagebutton,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessagetextentry,trigger:function(el){populateTextArea(el,msg)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessageendbutton,trigger:function(el){if(config.getDebugMode()){log.warning("Debug mode, message not sent")}else{$(el).prop("disabled",false);setTimeout(function(){$(el).click()},200)}}});seq.wait(function(ok){log.info("Message sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},sendinmail:function(subjecttemplate,messagetemplate,callback){var msgsubject=replaceMarkers(subjecttemplate,agent.detaildata,200);var msgbody=replaceMarkers(messagetemplate,agent.detaildata,2e3);var seq=new cssexpect("DetailPageSales.sendinmail");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailbutton,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailsubjectentry,trigger:function(el){populateTextArea(el,msgsubject)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailtextentry,trigger:function(el){populateTextArea(el,msgbody)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailendbutton,trigger:function(el){if(config.getDebugMode()){log.warning("Debug mode, message not sent")}else{$(el).prop("disabled",false);setTimeout(function(){$(el).click()},200)}}});seq.wait(function(ok){log.info("Message sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},saveaslead:function(callback){var seq=new cssexpect("DetailPageSales.saveaslead");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.saveasleadbutton,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.selectaccountpanel,optional:true,trigger:function(el){tools.scroll(el)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.saveleadbutton,optional:true,trigger:function(el){el.click()}});seq.wait(function(ok){log.info("Lead saved");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})}};automation_sequences.DetailPageSalesNew={connect:function(messagetemplate,callback){var seq=new cssexpect("DetailPageSalesNew.connect");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.expandprofilemenu,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectbutton,trigger:function(el){el.click()}});if(messagetemplate!=null){var msg=replaceMarkers(messagetemplate,agent.detaildata,300);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.connectmessageentry,trigger:function(el){populateTextArea(el,msg)}})}seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendconnectionrequest,trigger:function(el){if($(agent.profile.DetailPage.automationcontrols.emailprompt).length>0){throw"Unable to send invitation: email address requested."}else{if(false&&config.getDebugMode()){el.focus();log.warning("Debug mode, connection request not sent")}else{$(el).prop("disabled",false);el.focus();el.click();$(agent.profile.DetailPage.automationcontrols.sendconnectionrequest).click()}}}});seq.wait(function(ok){log.info("Connection request sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},sendmessage:function(messagetemplate,callback){var msg=replaceMarkers(messagetemplate,agent.detaildata,2e3);var seq=new cssexpect("DetailPageSalesNew.sendmessage",true);seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessagebutton,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessagetextentry,trigger:function(el){populateTextArea(el,msg)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendmessageendbutton,trigger:function(el){if(config.getDebugMode()){log.warning("Debug mode, message not sent")}else{$(el).prop("disabled",false);setTimeout(function(){$(el).click()},200)}}});seq.wait(function(ok){log.info("Message sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},sendinmail:function(subjecttemplate,messagetemplate,callback){var msgsubject=replaceMarkers(subjecttemplate,agent.detaildata,200);var msgbody=replaceMarkers(messagetemplate,agent.detaildata,2e3);var seq=new cssexpect("DetailPageSalesNew.sendinmail");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailbutton,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailsubjectentry,trigger:function(el){populateTextArea(el,msgsubject)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailtextentry,trigger:function(el){populateTextArea(el,msgbody)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailendbutton,trigger:function(el){if(config.getDebugMode()){log.warning("Debug mode, message not sent")}else{$(el).prop("disabled",false);setTimeout(function(){$(el).click()},200)}}});seq.wait(function(ok){log.info("Message sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})},saveaslead:function(callback){var seq=new cssexpect("DetailPageSalesNew.saveaslead");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.saveasleadbutton,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.saveasleadmenuselectallleadsitem,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.selectaccountbutton,optional:true,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.closeselectaccount,optional:true,trigger:function(el){el.click()}});seq.wait(function(ok){log.info("Lead saved");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})}};automation_sequences.DetailPageRecruiter={sendinmail:function(subjecttemplate,messagetemplate,callback){var msgsubject=replaceMarkers(subjecttemplate,agent.detaildata,200);var msgbody=replaceMarkers(messagetemplate,agent.detaildata,2e3);var seq=new cssexpect("DetailPageRecruiter.sendinmail");seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailbutton,trigger:function(el){el.click()}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailsubjectentry,trigger:function(el){populateTextArea(el,msgsubject)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailtextentry,trigger:function(el){populateTextArea(el,msgbody)}});seq.expect({entryselector:agent.profile.DetailPage.automationcontrols.sendinmailendbutton,trigger:function(el){if(config.getDebugMode()){log.warning("Debug mode, message not sent")}else{$(el).prop("disabled",false);setTimeout(function(){$(el).click()},200)}}});seq.wait(function(ok){log.info("Message sent");callback(null,ok)},function(nok){log.info("Automation failed:"+nok);callback(nok)})}};automation_sequences.MessagePageVanilla={readConversations:function(callback){var cs=automation_sequences.MessagePageVanilla.getSortedUnreadConversations();var activeconversationid=document.location.href.match(/thread\/([\d]*)/);activeconversationid=!!activeconversationid?activeconversationid[1]:null;if(cs.length>0||activeconversationid!=null){var c=automation_sequences.MessagePageVanilla.getConversationByID(activeconversationid);if(c!=null){c.read=false;cs.unshift(c)}var seq=new cssexpect("MessagePageVanilla.readConversations",true);seq.expect({entryselector:".hidden .artdeco-spinner",timeout:2e4,trigger:function(el){}});seq.pause(3e3);for(let currentindex=0;currentindex<(config.getDebugMode()?Math.min(3,cs.length):cs.length);currentindex++){seq.expect({entryselector:agent.profile.MessagePage.automationcontrols.conversationlinks,index:currentindex,trigger:function(el){el.scrollIntoView();el.click();let conv=cs[currentindex];if(automation_sequences.MessagePageVanilla._hasEvents(conv)&&conv.events[0].subtype!="SPONSORED_INMAIL"&&conv.events[0].subtype!="INVITATION_ACCEPT"){if(automation_sequences.MessagePageVanilla._hasEvents(conv)){let messages=[];conv.events.forEach(function(ev){let moreevents=true;while(moreevents){try{let isoutbound=automation_sequences.MessagePageVanilla.isOutboundEvent(ev,conv);let messageeventdata={url:"https://www.linkedin.com/messaging/thread/"+conv.id+"/",timestamp:new Date(ev.createdAt).toISOString(),type:ev.subtype,text:ev.eventContent.attributedBody.text};if(isoutbound){messageeventdata.sent=true;messageeventdata.to="https://www.linkedin.com/in/"+conv.participants[0].miniProfile.publicIdentifier;messageeventdata.toId="id."+pagecache.get(conv.participants[0].miniProfile.publicIdentifier).objectUrn.match(/urn:li:member:(.*)/)[1];messageeventdata.toFirstName=tools.tidyNamePart(conv.participants[0].miniProfile.firstName);messageeventdata.toLastName=tools.tidyNamePart(conv.participants[0].miniProfile.lastName)}else{messageeventdata.received=true;messageeventdata.from="https://www.linkedin.com/in/"+ev.from.miniProfile.publicIdentifier;messageeventdata.fromId="id."+pagecache.get(ev.from.miniProfile.publicIdentifier).objectUrn.match(/urn:li:member:(.*)/)[1];messageeventdata.fromFirstName=tools.tidyNamePart(ev.from.miniProfile.firstName);messageeventdata.fromLastName=tools.tidyNamePart(ev.from.miniProfile.lastName)}messages.push(messageeventdata);ev=ev.previousEventInConversation;moreevents=ev!=null&&ev.from!=null}catch(e){log.error(e);moreevents=false}}});messages=automation_sequences.MessagePageVanilla.purgeOldInteractions(messages);if(messages.length>0){sendMessage({command:"updateConversation",messages:messages})}}else{}}}});seq.pause(3e3)}seq.pause(3e3);seq.wait(function(ok){log.info("Message read succeeded");automation_sequences.MessagePageVanilla.processing=false;callback(null,"OK")},function(nok){log.info("Message read failed:"+nok);automation_sequences.MessagePageVanilla.processing=false;callback(nok)})}},_hasEvents:function(conversation){var rv=conversation!=null&&conversation.events!=null&&conversation.events.length>0;return rv},getConversations:function(){var c=[];for(var e in pagecache.entity){if(e.indexOf("urn:li:fs_conversation:")==0){let convid=e.match(/\d+/)[0];let conversation=pagecache.expandVNODE(pagecache.entity[e],{});conversation.id=convid;c.push(conversation)}}return c},getSortedUnreadConversations:function(){var cs=automation_sequences.MessagePageVanilla.getConversations();automation_sequences.MessagePageVanilla.sortConversations(cs);var rv=[];if(cs.length>0){cs.forEach(c=>{if(!c.read){rv.push(c)}})}return rv},sortConversations:function(cs){cs.sort(function(a,b){if(automation_sequences.MessagePageVanilla._hasEvents(a)&&automation_sequences.MessagePageVanilla._hasEvents(b)){var e1=a.events[a.events.length-1].createdAt;var e2=b.events[b.events.length-1].createdAt;return e2-e1}else if(automation_sequences.MessagePageVanilla._hasEvents(a)&&!automation_sequences.MessagePageVanilla._hasEvents(b)){return-1}else if(!automation_sequences.MessagePageVanilla._hasEvents(a)&&automation_sequences.MessagePageVanilla._hasEvents(b)){return 1}else{return 0}})},getConversationByID:function(id){let cs=automation_sequences.MessagePageVanilla.getConversations();let rv;for(let i=0;i<cs.length;i++){if(cs[i].id==id){rv=cs[i];break}}return rv},isOutboundEvent:function(ev,conv){return ev.from.miniProfile.publicIdentifier!=conv.participants[0].miniProfile.publicIdentifier},purgeOldInteractions:function(messages){let rv=[];let inbounddone=false;let outbounddone=false;for(var i=0;i<messages.length;i++){if(messages[i].sent){inbounddone=true}if(messages[i].received&&inbounddone){break}rv.unshift(messages[i])}return rv}};automation_sequences.ResultPageConnections={processNewConnections:function(callback){let seq=new cssexpect("ResultPageConnections.processNewConnections");TagTool.POSTgetTrackingOriginProfiles().then(function(originprofiles){let cs=agent.resultdata;if(originprofiles==null||originprofiles.length==0){TagTool.POSTcreateTag(cs[0],TagTool.NEWCONNECTIONSORIGINTAG)}else{let originprofileids=[];originprofiles.forEach(originprofile=>{originprofileids.push(originprofile.id)});for(let currentindex=0;currentindex<cs.length;currentindex++){let connection=cs[currentindex];if(originprofileids.indexOf(connection.id)>-1)break;seq.expect({entryselector:agent.profile.ResultPage.iterator,index:currentindex,trigger:function(el){TagTool.POSTisTagged(connection,TagTool.TRACKDEFAULTACCEPTEDTAG).then(istagged=>{if(!istagged){POSTprocessNewConnection(connection);seq.pause(1e3)}})}})}}seq.pause(1e4);seq.wait(function(ok){log.info("Connection notifications sent succeeded");automation_sequences.ResultPageConnections.processing=false;callback(null,"OK")},function(nok){log.info("Connection notifications send failed:"+nok);automation_sequences.ResultPageConnections.processing=false;callback(nok)})})}};function POSTprocessNewConnection(connection){return new Promise(resolve=>{let messageeventdata={timestamp:new Date(parseInt(connection.connectionTime)).toISOString(),from:connection.Profile,fromId:connection.id,fromFirstName:connection["First Name"],fromLastName:connection["Last Name"],type:"INVITATION_ACCEPT",text:""};sendMessage({command:"updateConversation",messages:[messageeventdata]})})}var pagecache={};pagecache.pid={};pagecache.id={};pagecache.urn={};pagecache.entity={};pagecache.object={};pagecache.public={};pagecache.type={};pagecache.typesaccessed={};pagecache.storeVoyagerHTML=function(document){if(document!=null&&!document.captured){document.captured=true;var codes=document.querySelectorAll("code");for(var j=0;j<codes.length;j++){var json=codes[j].innerText;pagecache.storeVoyagerJSON(json)}}};pagecache.storeVoyagerJSON=function(json){try{if(typeof json=="string"){var data=JSON.parse(json);pagecache.storeVoyagerDataRoot(data)}else if(typeof json=="object"){var reader=new FileReader;reader.addEventListener("loadend",e=>{var text=e.srcElement.result;pagecache.storeVoyagerJSON(text)});reader.readAsText(json)}}catch(e){log.warning(e)}};pagecache.storeVoyagerDataRoot=function(data){if(data){pagecache.storeVoyagerDataElement(data)}};pagecache.storeVoyagerDataElement=function(data){if(data!=null&&typeof data=="object"){var normalizeddata={};for(var prop in data){normalizeddata[prop.replace(/[\\*]/g,"")]=data[prop]}data=normalizeddata;var type=data["$type"];var id=data["$id"];var urn=data["urn"];var objectUrn=data["objectUrn"];var entityUrn=data["entityUrn"];var publicIdentifier=data["publicIdentifier"];if(type=="com.linkedin.voyager.identity.profile.ProfileView"){pagecache.type["com.linkedin.voyager.identity.profile.ProfileContactInfo"]={}}if(type!=null){if(type=="com.linkedin.voyager.search.SearchCluster"&&data.hitType!="PEOPLE"){log.debug("not caching SearchCluster with hitType :"+data.hitType);return}log.debug("caching data of type:"+type);pagecache.type[type]=data;if(id){pagecache.urn[id]=data}if(urn){pagecache.urn[urn]=data}if(entityUrn){pagecache.entity[entityUrn]=data}if(objectUrn){pagecache.object[objectUrn]=data}if(publicIdentifier){pagecache.public[publicIdentifier]=data}}else{}for(var prop in data){var v=data[prop];if(prop!=null&&prop.indexOf("urn:")==0){v.entityUrn=prop}if(Array.isArray(v)){v.forEach(el=>{pagecache.storeVoyagerDataElement(el)})}else if(typeof v=="object"){pagecache.storeVoyagerDataElement(v)}else{}}}};pagecache.copyToStores=function(data){var olddata;if(data.urn)olddata=pagecache.urn[data.urn];if(!olddata&&data.id)olddata=pagecache.id[data.id];if(!olddata&&data.pid)olddata=pagecache.pid[data.pid];if(!olddata){if(data.urn){data=pagecache.copyToStore(data.urn,data,pagecache.urn)}if(data.id){data=pagecache.copyToStore(data.id,data,pagecache.id)}if(data.pid){data=pagecache.copyToStore(data.pid,data,pagecache.pid)}}else{for(var prop in data){var value=data[prop];if(value!=null&&value!=""){olddata[prop]=value}}if(olddata.urn)pagecache.urn[olddata.urn]=olddata;if(olddata.id)pagecache.id[olddata.id]=olddata;if(olddata.pid)pagecache.pid[olddata.pid]=olddata}};pagecache.copyToStore=function(key,data,store){if(store[key]==null){store[key]=data}else{for(var prop in data){var value=data[prop];if(value!=null&&value!=""){store[key][prop]=value}}}return store[key]};pagecache.find=function(key){var rv;if(pagecache.pid[key]){rv=pagecache.pid[key]}else if(pagecache.urn[key]){rv=pagecache.urn[key]}else if(pagecache.id[key]){rv=pagecache.id[key]}else if(pagecache.public[key]){rv=pagecache.public[key]}else{log.info("No match for:"+key)}return rv};pagecache.findByRegex=function(regex){var rv;rv=filtered_keys(pagecache.id,regex);if(rv.length!=0){log.debug("found "+regex+" in ID-map")}else{rv=filtered_keys(pagecache.urn,regex);if(rv.length!=0){log.debug("found "+regex+" in URN-map")}else{rv=filtered_keys(pagecache.entity,regex);if(rv.length!=0){log.debug("found "+regex+" in ENTITYURN-map")}else{rv=filtered_keys(pagecache.object,regex);if(rv.length!=0){log.debug("found "+regex+" in OBJECTURN-map")}else{rv=filtered_keys(pagecache.public,regex);if(rv.length!=0){log.debug("found "+regex+" in PUBLICID-map")}else{log.debug("Regex not found:"+regex)}}}}}return rv};pagecache.queryVPATH=function(vpath,context){var rv=null;if(vpath!=null){var vq=vpath.split("/");var currentnode=context;var currentexpression=null;for(var i=0;i<vq.length;i++){currentexpression=vq[i];currentnode=pagecache.eval(currentexpression,currentnode);if(currentnode!=null&&currentnode["$type"]!=null){log.debug("VPATH accessed data of type:"+currentnode["$type"]);pagecache.typesaccessed[currentnode["$type"]]=true}}rv=currentnode}return rv};pagecache.eval=function(expr,node){var rv=null;var ee=expr.split(":");try{var t=ee.length>0?ee[0]:null;var v=ee.length>1?ee[1]:null;var i=ee.length>2?parseInt(ee[2]):0;switch(t){case"T":rv=pagecache.firstValue(pagecache.type[v]);break;case"TA":var av=pagecache.type[v];if(av!=null&&av.length>i){rv=av[i]}else{log.info("No VPATH value in array for index "+i);rv=av}break;case"A":if(node!=null){rv=pagecache.firstValue(node[v])}break;case"AA":if(node!=null){var av=node[v];if(ee.length>2){if(av!=null&&av.length>i){rv=av[i]}else{log.info("No VPATH value in array for index "+i);rv=null}}else{rv=av}}break;case"U":if(node!=null){rv=pagecache.urn[pagecache.firstValue(node[v])]}break;case"UA":if(node!=null){var av=node[v];if(av!=null&&av.length>i){rv=pagecache.urn[av[i]]}else{log.info("No VPATH value in array for index "+i)}}break;case"E":if(node!=null){rv=pagecache.entity[pagecache.firstValue(node[v])]}break;case"EA":if(node!=null){var av=node[v];if(av!=null&&av.length>i){rv=pagecache.entity[av[i]]}else{log.info("No VPATH value in array for index "+i)}}break;case"O":if(node!=null){rv=pagecache.object[pagecache.firstValue(node[v])]}break;case"OA":if(node!=null){var av=node[v];if(av!=null&&av.length>i){rv=pagecache.object[av[i]]}else{log.info("No VPATH value in array for index "+i)}}break;case"DP":if(node!=null){rv=pagecache.public[pagecache.firstValue(node[v])]}break;case"DA":if(node!=null){rv=pagecache.get(pagecache.firstValue(node[v]))}break}}catch(e){log.error("Failed to load VPATH query : "+e)}return rv};pagecache.get=function(id){var rv;rv=pagecache.id[id];if(rv!=null){log.debug("found "+id+" in ID-map")}else{rv=pagecache.urn[id];if(rv!=null){log.debug("found "+id+" in URN-map")}else{rv=pagecache.entity[id];if(rv!=null){log.debug("found "+id+" in ENTITYURN-map")}else{rv=pagecache.object[id];if(rv!=null){log.debug("found "+id+" in OBJECTURN-map")}else{rv=pagecache.public[id];if(rv!=null){log.debug("found "+id+" in PUBLICID-map")}else{log.debug("ID not found:"+id)}}}}}return rv};pagecache.firstValue=function(value){var rv=value;if(value instanceof Array&&value.length>0){rv=value[0]}return rv};pagecache.findByURL=function(url){var rv=null;if(!!url){rv=pagecache.find(url);if(!rv){var urlbits=url.split("/");for(var i=0;i<urlbits.length&&rv==null;i++){rv=pagecache.find(urlbits[i])}}}return rv};pagecache.findByID=function(id){var rv=null;if(!!id&&id!="id."){rv=pagecache.id[id]}return rv};pagecache.findValue=function(value){this._findByValue("pid",this.pid,value);this._findByValue("id",this.id,value);this._findByValue("urn",this.urn,value);this._findByValue("entity",this.entity,value);this._findByValue("object",this.object,value);this._findByValue("public",this.public,value);this._findByValue("type",this.type,value)};pagecache._findByValue=function(logcontext,collection,value){for(var key in collection){if(Array.isArray(collection[key])){for(var i=0;i<collection[key].length;i++){try{if(JSON.stringify(collection[key][i]).indexOf(value)>-1){console.log(logcontext+"["+key+"]"+"["+i+"]=");console.log(collection[key][i])}}catch(e){console.log(e)}}}else{try{if(JSON.stringify(collection[key]).indexOf(value)>-1){console.log(logcontext+"["+key+"]=");console.log(collection[key])}}catch(e){console.log(e)}}}};pagecache.clear=function(){};pagecache.buildVTREE=function(vpath){var root=pagecache.queryVPATH(vpath);return pagecache.expandVNODE(root,{})};pagecache.expandVNODE=function(node,cache){var expanded=node;if(typeof node=="string"&&node.indexOf("urn:")==0){if(cache[node]==true){expanded=node}else{cache[node]=true;expanded=pagecache.expandVNODE(pagecache.get(node),cache);cache[node]=false}}else if(typeof node=="object"&&Array.isArray(node)){expanded=[];let gotlazy=false;for(var i=0;i<node.length;i++){expanded.push(pagecache.expandVNODE(node[i],cache));gotlazy=!!node[i].match&&node[i].match(/(urn:li:(fs_positionGroup|fs_skill):\([^,]*,)(\d*)(\))/)}if(gotlazy){for(let counter=1;counter<100;counter++){let lazykey=gotlazy[1]+(parseInt(gotlazy[3])+counter)+gotlazy[4];let lazyvalue=pagecache.expandVNODE(lazykey,cache);if(lazyvalue!=null){expanded.push(lazyvalue)}}}}else if(typeof node=="object"&&!Array.isArray(node)){expanded={};for(var att in node){if(att=="$id")continue;if(att=="$type")continue;if(att=="$deletedFields")continue;if(att=="urn")continue;if(att=="objectUrn")continue;if(att=="entityUrn")continue;if(att=="paging")continue;if(att=="profileId")continue;if(att=="trackingId")continue;if(att=="elements"&&node.paging!=null){var paginginfo=pagecache.get(node.paging);if(node.elements.length>0&&paginginfo&&paginginfo.total&&node.elements.length<paginginfo.total){var elementregex=node.elements[0].replace(/,\d+\)/,",\\d+)$");elementregex=elementregex.replace(/\(/,"\\(");elementregex=elementregex.replace(/\)/,"\\)");elementregex=new RegExp(elementregex);var allelements=pagecache.findByRegex(elementregex);for(var i=0;i<allelements.length;i++){if(node.elements.indexOf(allelements[i])==-1){node.elements.push(allelements[i])}}node.paging=null}}expanded[att]=pagecache.expandVNODE(node[att],cache)}}return expanded};var filtered_keys=function(obj,filter){var key,keys=[];for(key in obj){if(obj.hasOwnProperty(key)&&filter.test(key)){keys.push(key)}}return keys};function sendMessage(msg,callback){if(!callback){callback=function(){}}chrome.runtime.sendMessage(msg,callback)}var DSFRAMEID="frame-"+Math.random().toString().split(".")[1];var iframetimeout;var cachedresultextractions=[];var cacheddetailextractions={};var config=null;var agent={lastemit:"",beforenext:[],cachedprofiles:{},init:function(reason){try{log.info("Initialising page agent: "+reason);if(document.querySelector(".initial-load-animation")!=null&&$(".initial-load-animation").is(":visible")&&document.querySelector(".fade-load")==null||document.querySelector(".results-loader-wrapper")!=null&&$(".results-loader-wrapper").is(":visible")&&document.querySelector(".results-loader-wrapper.hidden")==null){log.info("page loading, try again in 1 sec");setTimeout(function(){agent.init("retryevent")},1e3);return}if(agent.iv!=null){log.info("Clearing timeout for pageload");clearTimeout(agent.iv)}log.info("sending init for "+window.document.location.href);sendMessage({command:"initAgent",parameter:window.document.location.href},agent.setProfiles)}catch(e){log.warning(e)}},activate:function(profilename){if(profilename==null){agent.enablePPRListener()}else if(agent.cachedprofiles[profilename]!=null){agent.setProfile(agent.cachedprofiles[profilename])}agent.emit("activate")},deactivate:function(){agent.emit("deactivate")},configUpdate:function(configmap){config=SimpleConfigReader(configmap);log.info("Config updated")},addBasicWidgets:function(params){addContainer();addConnectionSearch(params.profileid);if(agent.detaildata.Twitter&&agent.detaildata.Twitter!==""){addFollowButton(agent.detaildata.Twitter)}},addNotesWidget:function(params){addNote(params.text)},addTagsWidget:function(params){addTags(params.tags,params.taglist)},canHandleCommand:function(msg){var command=msg.command;var rv=false;if(agent.inDuxSoupFrame()){if(agent.isDetailPage()){rv=["configUpdate","expandPage","connectProfile","messageProfile","endorseProfile","followProfile","disconnectProfile","inmailProfile","pdfProfile","expandPage","reloadPage","saveasleadProfile"].indexOf(command)>-1}else{rv=false}}else if(isTopDocument()){if(agent.isDetailPage()&&isLinkedInDocument()){rv=["configUpdate","backup","reloadPage","successmessage","infomessage","dspointmessage","warningmessage","errormessage","addBasicWidgets","addNotesWidget","addTagsWidget","expandPage","connectProfile","messageProfile","followProfile","disconnectProfile","inmailProfile","pdfProfile","expandPage","saveasleadProfile","endorseProfile","upload","getMailmap","getContacts","countContacts","userDialog","downloadCSVData"].indexOf(command)>-1}else if(agent.isResultPage()){if(isLinkedInDocument()||isExtensionDocument()){rv=["configUpdate","drilldown","processNewConnections","backup","pagedown","scrolldown","nextResultPage","reloadPage","successmessage","infomessage","dspointmessage","warningmessage","errormessage","start","stop","upload","getMailmap","getContacts","countContacts","userDialog","downloadCSVData"].indexOf(command)>-1}else{rv=["configUpdate","drilldown","processNewConnections","backup","pagedown","nextResultPage","reloadPage","successmessage","infomessage","dspointmessage","warningmessage","errormessage","start","stop","userDialog","downloadCSVData"].indexOf(command)>-1}}else if(agent.isMessagePage()){rv=["configUpdate","pagedown","scrolldown","nextMessagePage","readConversations","reloadPage","successmessage","infomessage","dspointmessage","warningmessage","errormessage","userDialog"].indexOf(command)>-1}else{if(isLinkedInDocument()||isExtensionDocument()){rv=["configUpdate","successmessage","infomessage","dspointmessage","warningmessage","errormessage","stop","upload","backup","reloadPage","userDialog","getMailmap","getContacts","countContacts","getMail","downloadCSVData"].indexOf(command)>-1}else{rv=["configUpdate","successmessage","infomessage","dspointmessage","warningmessage","backup","reloadPage","stop","errormessage","userDialog","downloadCSVData"].indexOf(command)>-1}}}else{rv=false}return rv},handleCommand:function(msg,callback){log.info(msg);var rv=false;try{log.info(msg.command+"("+msg.parameter+")");if(msg.command=="getMail"||msg.command=="getMailmap"||msg.command=="getContacts"||msg.command=="countContacts"||msg.command=="userDialog"||msg.command=="connectProfile"||msg.command=="messageProfile"||msg.command=="endorseProfile"||msg.command=="followProfile"||msg.command=="disconnectProfile"||msg.command=="pdfProfile"||msg.command=="expandPage"||msg.command=="inmailProfile"||msg.command=="saveasleadProfile"||msg.command=="readConversations"||msg.command=="processNewConnections"){agent[msg.command](msg.parameter,callback);rv=null}else{rv=agent[msg.command](msg.parameter)}}catch(e){rv=e;log.warning(rv)}log.info("command executed updated");if(callback&&rv!=null){callback({result:rv})}else{return true}},emit:function(event){var isresultpage=agent.isResultPage();var isdetailpage=agent.isDetailPage();var ismessagepage=agent.isMessagePage();var isunknownpage=!(isdetailpage||isresultpage||ismessagepage);var inframe=agent.inDuxSoupFrame();var data;if(isresultpage){log.info("Found ResultPage.");if(!cachedresultextractions[document.location.href]){cachedresultextractions={};cachedresultextractions[document.location.href]=[]}data=cachedresultextractions[document.location.href];if(data.length==0){var fields=agent.profile.ResultRecord.fields;var lineitems=[];if(agent.profile.ResultPage.vpathiterator){var cluster=pagecache.queryVPATH(agent.profile.ResultPage.vpathiterator);for(var i=0;cluster&&i<cluster.length;i++){var item=null;if(typeof cluster[i]=="string"){item=pagecache.get(cluster[i]+",hitInfo,com.linkedin.voyager.search.SearchProfile")}else if(typeof cluster[i]=="object"){item=cluster[i]}if(item!=null){lineitems.push(item)}}}else if(agent.profile.ResultPage.iterator){lineitems=document.querySelectorAll(agent.profile.ResultPage.iterator)}if(agent.isProgressiveResult()){lineitems=tools.removeDuplicates(lineitems,agent.beforenext)}if(agent.profile.ResultPage.filter){lineitems=tools.filterLineItems(lineitems,agent.profile.ResultPage.filter)}if(lineitems.length==0){log.info("Found ResultPage without data, try again in 1 sec.");if(document.querySelector(".logotable")!=null||document.querySelector(".tagsearchform")!=null){agent.enablePPRListener();return}else if(document.querySelector("#empty-results-description")==null){setTimeout(function(){agent.emit(event)},1e3);return}else{setTimeout(function(){agent.emit(event)},1e3)}}else{for(var i=0;i<lineitems.length;i++){if(data[i]==null){var profiledata;if(!agent.profile.ResultPage.vpathiterator){profiledata=tools.copyHTMLFieldValues(fields,lineitems[i])}else{profiledata=lineitems[i]}profiledata=tools.enrichFieldValues(profiledata,fields);profiledata.ScanTime=Date.now()+i;if(!!agent.profile.ResultPage.iterator){tools.addItemHTML(agent.profile.ResultPage.iterator,i,profiledata)}data.push(profiledata)}}}cachedresultextractions[document.location.href]=data;agent.resultdata=data}}else if(isdetailpage){log.info("Found DetailPage.");if(!cacheddetailextractions[document.location.href]){cacheddetailextractions[document.location.href]={}}data=cacheddetailextractions[document.location.href];if(!data.id||data.id=="id."||event=="update"){var fields=agent.profile.DetailRecord.fields;data=tools.copyHTMLFieldValues(fields,document);data=tools.enrichFieldValues(data,fields);if(!data.id||data.id=="id."){var realpid=pagecache.queryVPATH("T:com.linkedin.voyager.identity.profile.ProfileView/DA:profile/E:miniProfile/A:publicIdentifier");var urlpid=tools.decodeURIComponentRecurse(data.publicIdentifier);if(realpid&&urlpid&&realpid!=urlpid){log.info("detailpage reloading with new url");location.href=tools.decodeURIRecurse(location.href).replace(urlpid,realpid);return}else{log.info("detailpage loading, try again in 1 sec");setTimeout(function(){agent.init("retryevent")},1e3);return}}}if(event=="activate"||agent.detaildata==null){data.VisitTime=Date.now()}else{data.VisitTime=agent.detaildata.VisitTime}agent.detaildata=data;if(!agent.botIsRunning&&!config.getDebugMode()){setTimeout(function(){agent.emit("update")},3e3)}}else if(ismessagepage){log.info("Found MessagePage.");var conversations=[];if(agent.profile.MessagePage.iterator){conversations=document.querySelectorAll(agent.profile.MessagePage.iterator)}if(conversations.length==0){log.info("Found MessagePage without Conversations, try again in 1 sec.");setTimeout(function(){agent.emit(event)},1e3)}else{data=conversations}agent.messagedata=data}else{log.info("unknown page")}var signal={event:event,liuser:tools.getLinkedInUserID(),quotaid:agent.getQuotaID(),resultpage:isresultpage,detailpage:isdetailpage,messagepage:ismessagepage,inframe:inframe,cannext:agent.canNextResultPage(),canexpand:agent.canExpandPage(),canendorse:agent.canendorseProfile(),canconnect:agent.canConnectProfile(),canmessage:agent.canMessageProfile(),canfollow:agent.canFollowProfile(),candisconnect:agent.canDisconnectProfile(),cansavetopdf:agent.canPDFProfile(),caninmail:agent.canInmailProfile(),cansaveaslead:agent.canSaveAsLeadProfile(),canreadconversations:agent.canReadConversations(data)};if(agent.profile!=null){signal.profilename=agent.profile.name}if(data){signal.data=data}if(!isresultpage&&!isdetailpage&&!ismessagepage){log.info("unknown page")}if(signal.data==null){log.info("emitting: "+JSON.stringify(signal));sendMessage(signal)}else{var thisemit=JSON.stringify(signal.data);var prevemit=agent.lastemit;if(!agent.toIFrame()&&!agent.isProgressiveResult()&&(isresultpage||isdetailpage&&!agent.botIsRunning)&&thisemit==prevemit){log.info(" not sending duplicate data")}else{agent.lastemit=thisemit;if(!!signal.data.CompanyProfile&&!signal.data.CompanyWebsite){tools.addCompanyWebsite(signal,function(){log.info("emitting: "+JSON.stringify(signal));sendMessage(signal)})}else{log.info("emitting: "+JSON.stringify(signal));sendMessage(signal)}}}},setProfile:function(newprofile){if(newprofile&&agent.profile!=newprofile){agent.profile=newprofile;agent.clearPPRListeners();if(!!agent.profile){log.info("Set profile :"+agent.profile.name)}else{log.warning("Profile is NULL in setProfile.")}}},setProfiles:function(newprofiles){var l1,l2,l3;if(newprofiles&&newprofiles.length>0){for(var i=0;i<newprofiles.length;i++){agent.cachedprofiles[newprofiles[i].name]=newprofiles[i]}for(var i=0;i<newprofiles.length;i++){var url=document.location.href;var p=newprofiles[i];var resulthostpatternmatch=p.ResultPage?p.ResultPage.urlpattern?new RegExp(p.ResultPage.urlpattern).exec(url)!=null:true:false;var detailhostpatternmatch=p.DetailPage?p.DetailPage.urlpattern?new RegExp(p.DetailPage.urlpattern).exec(url)!=null:true:false;var messagehostpatternmatch=p.MessagePage?p.MessagePage.urlpattern?new RegExp(p.MessagePage.urlpattern).exec(url)!=null:true:false;if(p.identifier==null&&p.vpathidentifier==null){if(l1==null)l1=i}if(p.identifier==null&&p.vpathidentifier==null){if(p.ResultPage!=null&&document.querySelector(p.ResultPage.identifier)!=null&&resulthostpatternmatch||p.DetailPage!=null&&document.querySelector(p.DetailPage.identifier)!=null&&detailhostpatternmatch||p.MessagePage!=null&&document.querySelector(p.MessagePage.identifier)!=null&&messagehostpatternmatch){if(l2==null)l2=i}}if((p.identifier!=null&&document.querySelector(p.identifier)!=null||p.vpathidentifier!=null&&pagecache.queryVPATH(p.vpathidentifier)==true)&&(p.ResultPage!=null&&document.querySelector(p.ResultPage.identifier)!=null&&resulthostpatternmatch||p.DetailPage!=null&&document.querySelector(p.DetailPage.identifier)!=null&&detailhostpatternmatch||p.MessagePage!=null&&document.querySelector(p.MessagePage.identifier)!=null&&messagehostpatternmatch)){if(l3==null)l3=i}}log.info("L1 Profile Detection:"+(l1!=null?newprofiles[l1].name:"-"));log.info("L2 Profile Detection:"+(l2!=null?newprofiles[l2].name:"-"));log.info("L3 Profile Detection:"+(l3!=null?newprofiles[l3].name:"-"));if(l3!=null)agent.setProfile(newprofiles[l3]);else if(l2!=null)agent.setProfile(newprofiles[l2]);else if(l1!=null)agent.setProfile(newprofiles[l1])}if(agent.profile){agent.activate()}else{agent.deactivate()}},isResultPage:function(){var rv=false;try{rv=document.querySelector(agent.profile.ResultPage.identifier)!=null;if(rv&&agent.profile.ResultPage.urlpattern!=null&&new RegExp(agent.profile.ResultPage.urlpattern).exec(document.location.href)){rv=true}else{rv=false}}catch(e){log.error(e);rv=false}return rv},isDetailPage:function(){var rv=false;try{rv=document.querySelector(agent.profile.DetailPage.identifier)!=null;if(rv&&agent.profile.DetailPage.urlpattern!=null&&new RegExp(agent.profile.DetailPage.urlpattern).exec(document.location.href)){rv=true}else{rv=false}}catch(e){log.error(e);rv=false}return rv},isMessagePage:function(){var rv=false;try{rv=document.querySelector(agent.profile.MessagePage.identifier)!=null;if(rv&&agent.profile.MessagePage.urlpattern!=null&&new RegExp(agent.profile.MessagePage.urlpattern).exec(document.location.href)){rv=true}else{rv=false}}catch(e){log.error(e);rv=false}return rv},getQuotaID:function(){var rv="BasicProfile";if(!!agent.profile&&!!agent.profile.quotaid){rv=agent.profile.quotaid}else if(!!agent.profile&&!!agent.profile.quotaidresolver){var resolvervalue=!!pagecache.queryVPATH(agent.profile.quotaidresolver.vpathidentifier);for(var id in agent.profile.quotaidresolver.options){if(agent.profile.quotaidresolver.options[id]==resolvervalue){rv=id}}}return rv},getActiveTricks:function(){var rv;if(agent.isResultPage()){rv=agent.profile.ResultPage.duxsouptricks}else if(agent.isDetailPage()){rv=agent.profile.DetailPage.duxsouptricks}return rv},enablePPRListener:function(){var enabled=true;if(agent.isResultPage()&&agent.profile.ResultPage.PPRListener){document.addEventListener("DOMSubtreeModified",agent.PPRResultUpdate)}else if(agent.isDetailPage()&&agent.profile.DetailPage.PPRListener){document.addEventListener("DOMSubtreeModified",agent.PPRDetailUpdate)}else if(agent.profile.PPRListener){document.addEventListener("DOMSubtreeModified",agent.PPRUnknownUpdate)}else{enabled=false}return enabled},disablePPRListener:function(){var disabled=true;if(agent.isResultPage()&&agent.profile.ResultPage.PPRListener){document.removeEventListener("DOMSubtreeModified",agent.PPRResultUpdate)}else if(agent.isDetailPage()&&agent.profile.DetailPage.PPRListener){document.removeEventListener("DOMSubtreeModified",agent.PPRDetailUpdate)}else if(agent.profile.PPRListener){document.removeEventListener("DOMSubtreeModified",agent.PPRUnknownUpdate)}else{disabled=false}return disabled},clearPPRListeners:function(){document.removeEventListener("DOMSubtreeModified",agent.PPRResultUpdate);document.removeEventListener("DOMSubtreeModified",agent.PPRDetailUpdate);document.removeEventListener("DOMSubtreeModified",agent.PPRUnknownUpdate)},PPRResultUpdate:function(event){var selectors=[].concat(agent.profile.ResultPage.PPRListener);for(var i=0;i<selectors.length;i++){var PPRListener=selectors[i];var PPRTargets=document.querySelectorAll(PPRListener);var found=false;for(var j=0;j<PPRTargets.length&&!found;j++){if(PPRTargets[j]==event.target){agent.disablePPRListener();setTimeout(function(){agent.emit("update")},500);setTimeout(function(){agent.enablePPRListener()},1500);found=true}}log.debug(found+" for "+event.target.nodeName+"#"+event.target.id+"."+event.target.className);if(found){break}}},PPRDetailUpdate:function(event){var selectors=[].concat(agent.profile.DetailPage.PPRListener);for(var i=0;i<selectors.length;i++){var PPRListener=agent.profile.DetailPage.PPRListener;var PPRTargets=document.querySelectorAll(PPRListener);var found=false;for(var j=0;j<PPRTargets.length&&!found;j++){if(PPRTargets[j]==event.target){agent.disablePPRListener();setTimeout(function(){agent.emit("update")},500);setTimeout(function(){agent.enablePPRListener()},1500);found=true}}log.debug(found+" for "+event.target.nodeName+"#"+event.target.id+"."+event.target.className);if(found){break}}},PPRUnknownUpdate:function(event){var selectors=[].concat(agent.profile.PPRListener);for(var i=0;i<selectors.length;i++){var PPRListener=agent.profile.PPRListener;var PPRTargets=document.querySelectorAll(PPRListener);var found=false;for(var j=0;j<PPRTargets.length&&!found;j++){if(PPRTargets[j]==event.target){agent.disablePPRListener();setTimeout(function(){agent.emit("update")},500);setTimeout(function(){agent.enablePPRListener()},1500);found=true}}log.debug(found+" for "+event.target.nodeName+"#"+event.target.id+"."+event.target.className);if(found){break}}},isProgressiveResult:function(){return agent.isResultPage()&&agent.profile.ResultPage.progressive=="true"},isProgressiveMessage:function(){return agent.isMessagePage()&&agent.profile.MessagePage.progressive=="true"},inDuxSoupFrame:function(){try{return top.document!=window.document&&window.frameElement!=null&&window.frameElement.getAttribute("isDS")}catch(e){return true}},toIFrame:function(){return agent.isResultPage()&&agent.profile.loadiframe=="true"},drilldown:function(idx){if(!agent.isProgressiveResult()){agent.pagedown()}if(!agent.profile.ResultPage.vpathiterator){var lineitems=document.querySelectorAll(agent.profile.ResultPage.iterator);if(agent.isProgressiveResult()){lineitems=tools.removeDuplicates(lineitems,agent.beforenext)}if(agent.profile.ResultPage.filter){lineitems=tools.filterLineItems(lineitems,agent.profile.ResultPage.filter)}var rec=lineitems[idx];if(agent.toIFrame()){rec.querySelector(agent.profile.ResultRecord.drilldown);agent.loadIFrameByElement(rec.querySelector(agent.profile.ResultRecord.drilldown))}else{rec.querySelector(agent.profile.ResultRecord.drilldown).click()}}else{var rec=cachedresultextractions[document.location.href][idx];var url=rec[agent.profile.ResultRecord.drilldownattribute];if(agent.toIFrame()){$(".keyword-search-box input").sendkeys(" ").blur();agent.loadIFrameByURL(url)}else{document.location.href=url}}log.info("drilling down to detailpage")},expandPage:function(param,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["togglecontactinfo"];if(seq){seq(callback)}}},canExpandPage:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.canexpand)},canendorseProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.canendorse)},connectProfile:function(messagetemplate,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["connect"];if(seq){seq(messagetemplate,callback)}}},endorseProfile:function(count,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["endorse"];if(seq){seq(count,callback)}}},canConnectProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.canconnect)},messageProfile:function(messagetemplate,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["sendmessage"];if(seq){seq(messagetemplate,callback)}}},followProfile:function(nullparams,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["follow"];if(seq){seq(callback)}}},disconnectProfile:function(nullparams,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["disconnect"];if(seq){seq(callback)}}},pdfProfile:function(nullparams,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["savetopdf"];if(seq){seq(callback)}}},inmailProfile:function(messageparams,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["sendinmail"];if(seq){seq(messageparams.subjecttemplate,messageparams.messagetemplate,callback)}}},saveasleadProfile:function(nullparams,callback){if(automation_sequences[agent.profile.DetailPage.name]){var seq=automation_sequences[agent.profile.DetailPage.name]["saveaslead"];if(seq){seq(callback)}}},readConversations:function(param,callback){if(automation_sequences[agent.profile.MessagePage.name]){var seq=automation_sequences[agent.profile.MessagePage.name]["readConversations"];if(seq){seq(callback)}}},canReadConversations:function(convs){return agent.isMessagePage()&&!!convs&&!!convs.length},processNewConnections:function(param,callback){if(automation_sequences[agent.profile.ResultPage.name]){var seq=automation_sequences[agent.profile.ResultPage.name]["processNewConnections"];if(seq){seq(callback)}}},canProcessNewConnections:function(){return agent.isResultPage()&&!!agent.profile.ResultPage.autoactions.processNewConnections},canMessageProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.cansendmessage)},canFollowProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.canfollow)},canDisconnectProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.candisconnect)},canPDFProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.cansavetopdf)},canInmailProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.cansendinmail)},canSaveAsLeadProfile:function(){return agent.isDetailPage()&&tools.resolveActionFlag(agent.profile.DetailPage.actionflags.cansaveaslead)},backup:function(){if(iframetimeout!=null){clearInterval(iframetimeout);iframetimeout=null}if(agent.frame!=null){agent.frame.parentNode.parentNode.removeChild(agent.frame.parentNode);agent.frame=null;setTimeout(function(){agent.emit("activate")},200)}else{window.stop()}log.info("backing up to resultpage")},pagedown:function(){var target=document.scrollingElement;tools.scroll(target)},scrolldown:function(){var elements=document.querySelectorAll(agent.profile.ResultPage.iterator);var lastelement=elements[elements.length-1];lastelement.scrollIntoView()},reloadPage:function(){document.location.reload()},nextResultPage:function(){if(agent.profile.ResultPage.next.indexOf("javascript:")==0){agent.beforenext=document.querySelectorAll(agent.profile.ResultPage.iterator);var action=agent.profile.ResultPage.next.split(":")[1];setTimeout(function(){eval(action)},1e3);log.info("loading next resultpage via javascript")}else{var gonext=document.querySelector(agent.profile.ResultPage.next);if(gonext&&gonext.href&&gonext.href.indexOf("http")>-1){setTimeout(function(){document.location.href=gonext.href},1e3);log.info("loading next resultpage via location.href")}else if(gonext){setTimeout(function(){tools.click(gonext)},1e3);log.info("loading next resultpage via click event")}else if(!gonext){var currentpage=location.href.match(/&page=(\d+)/);var newurl;if(currentpage==null){newurl=location.href+"&page=2"}else{var nextpage=parseInt(currentpage[1])+1;newurl=location.href.replace(/&page=(\d+)/,"&page="+nextpage)}setTimeout(function(){document.location.href=newurl},1e3)}}cachedresultextractions[document.location.href]=[]},canNextResultPage:function(){var rv=false;if(agent.isResultPage()){if(agent.profile.ResultPage.next.indexOf("javascript:")==0){rv=true}else{var gonext=document.querySelector(agent.profile.ResultPage.next);if(gonext&&gonext.click&&!gonext.classList.contains("disabled")&&!gonext.disabled){rv=true}}}return rv},successmessage:function(params){tools.toast(toastr["success"],chrome.i18n.getMessage("appTitle"),params.text,toastroptions.success,params.options)},infomessage:function(params){tools.toast(toastr["info"],chrome.i18n.getMessage("appTitle"),params.text,toastroptions.info,params.options)},dspointmessage:function(params){tools.toast(toastr["dspoint"],chrome.i18n.getMessage("appTitle"),params.text,toastroptions.dspoint,params.options)},warningmessage:function(params){tools.toast(toastr["warning"],chrome.i18n.getMessage("appTitle"),params.text,toastroptions.warning,params.options)},errormessage:function(params){tools.toast(toastr["error"],chrome.i18n.getMessage("appTitle"),params.text,toastroptions.error,params.options)},onRobotStarted:function(){agent.botIsRunning=true;if($("body").length==0){setTimeout(agent.onRobotStarted,500)}else{if($("#dsblock").length==0){$("body").append(`\n                    <div id="dsblock" class="vex vex-theme-default">\n                        <div \n                            style="background: rgba(0, 0, 0, 0);" \n                            class="vex-overlay">\n                        </div>\n                    </div>\n                `);$("#dsblock div").click(function(){agent.warningmessage({text:chrome.i18n.getMessage("interactiondisabled")})})}}},onRobotStopped:function(){agent.botIsRunning=false;$("#dsblock").remove();window.onbeforeunload=null},stop:function(text){agent.onRobotStopped();if(agent.frame!=null){try{agent.frame.parentNode.parentNode.removeChild(agent.frame.parentNode)}catch(e){log.error(e)}agent.frame=null}return true},start:function(){agent.onRobotStarted()},closeAndOpenWebSocket:function(){if(!!agent.ws){try{agent.ws.close()}catch(e){}}agent.ws=new WebSocket(config.getBaseWS())},upload:function(){displayCSVUpload()},userDialog:function(params,callback){pagedialogs.display(params,callback)},getMailmap:function(interactive,callback){tools.getMailmap(interactive,callback)},getMail:function(interactive,callback){var xhr=new XMLHttpRequest;xhr.open("GET","/mynetwork/",true);xhr.onload=function(e){if(this.status==200){var data=this.response;var m=data.match(/\{&quot;emailAddress&quot;:&quot;([^;]*?)&quot;/);callback(m[1])}};xhr.send();tools.getMailmap(interactive,callback)},getContacts:function(fromindex,callback){tools.getContacts(fromindex,100,callback)},countContacts:function(unused,callback){tools.countContacts(callback)},downloadCSVData:function(params){tools.downloadCSVData(params.filename,params.content,params.charset)},makeFrame:function(){log.info("creating frame for detail");var c=document.createElement("div");c.innerHtml='<div style="overflow: hidden;"><h3>Just Visiting...</h3></div>';c.setAttribute("style","right: 20px;bottom:20px;z-index:101; background-color:#ffffff; opacity:0.8; border: 0px none; height: 224px; position: fixed; float:right; width: 288px; overflow: visible;pointer-events: none;z-index:8675310");var f=document.createElement("iframe");f.id=DSFRAMEID;f.setAttribute("isDS",true);f.scrolling="no";f.setAttribute("src","https://www.linkedin.com");f.setAttribute("style","border:16px solid #61ACBE;height: 747px; width: 964px;z-index:8675310;padding:3px;transform: scale(0.3); transform-origin: 0 0; overflow:hidden; margin-right:0px;");c.appendChild(f);document.body.appendChild(c);return f},loadIFrameByElement:function(element){log.info("Opening link "+element.innerText);if(iframetimeout!=null){clearInterval(iframetimeout);iframetimeout=null}if(agent.frame==null){agent.frame=agent.makeFrame()}var href;if(element.href==null)href="https://"+element.innerText;else href=element.href;href=href.replace(/http:/,"https:");href=href.replace(/:\/\/.*?linkedin.com/,"://www.linkedin.com");href=tools.decodeURIComponentRecurse(href);iframetimeout=setInterval(function(){if(agent.frame){agent.frame.src=href}else{clearInterval(iframetimeout);iframetimeout=null}},3*6e4);agent.frame.src=href},loadIFrameByURL:function(url){log.info("Opening link "+url);if(iframetimeout!=null){clearInterval(iframetimeout);iframetimeout=null}if(agent.frame==null){agent.frame=agent.makeFrame()}var href=url;href=href.replace(/http:/,"https:");href=href.replace(/:\/\/.*?linkedin.com/,"://www.linkedin.com");href=tools.decodeURIComponentRecurse(href);iframetimeout=setInterval(function(){if(agent.frame){agent.frame.src=href}else{clearInterval(iframetimeout);iframetimeout=null}},3*6e4);agent.frame.src=href}};function startPluginListener(){chrome.runtime.onMessage.addListener(function(request,sender,callback){if(sender.tab==null){if(agent.canHandleCommand(request)){log.info("Accepted command:"+JSON.stringify(request));var rv=agent.handleCommand(request,callback);if(callback){return true}else{return rv}}else{log.info("Rejected command:"+JSON.stringify(request));return false}}})}toastr.addToastType("dspoint");var toastroptions={};toastroptions.success={closeButton:false,debug:false,newestOnTop:false,progressBar:false,positionClass:"toast-top-right",preventDuplicates:true,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"6500",extendedTimeOut:"6500",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};toastroptions.info={closeButton:false,debug:false,newestOnTop:false,progressBar:false,positionClass:"toast-top-right",preventDuplicates:true,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"6500",extendedTimeOut:"6500",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};toastroptions.dspoint={closeButton:false,debug:false,newestOnTop:false,progressBar:false,positionClass:"toast-top-right",preventDuplicates:true,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"10000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};toastroptions.error={closeButton:false,debug:false,newestOnTop:false,progressBar:false,positionClass:"toast-top-right",preventDuplicates:true,showDuration:"300",hideDuration:"1000",timeOut:0,extendedTimeOut:0,tapToDismiss:true,showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};function startXHRListener(){document.addEventListener("lixhr",function(event){var data=event.detail;var records=[];var idfield=null,urlfield=null;if(data.url!=null){log.debug("XHRFWD "+data.url);if(data.url.indexOf("www.linkedin.com/connected/api/v1/contacts")>-1||data.url.indexOf("www.linkedin.com/connected/api/v2/contacts")>-1){records=JSON.parse(data.data).values;idfield="memberId";urlfield="profileUrl"}else if(data.url.indexOf("www.linkedin.com/communities-api/v1/memberships/community")>-1){records=JSON.parse(data.data).data;idfield="mini.id";urlfield="mini.profileUrl"}else if(data.url.indexOf("www.linkedin.com/sales/search")>-1||data.url.indexOf("www.linkedin.com/sales/lists")>-1||data.url.indexOf("www.linkedin.com/sales-api/salesApiPeopleSearch")>-1){records=JSON.parse(data.data);if(!!records.searchresults){records=records.searchresults;idfield="member.memberId";urlfield=null}else if(!!records.searchResults){records=records.searchResults;idfield=null;urlfield="member.profileId"}else if(!!records.elements){records=records.elements;records.forEach(function(rec){try{rec.profileUrl="https://www.linkedin.com/sales/people/"+rec.entityUrn.match(/urn:li:fs_salesProfile:\(([^\)]+)/)[1];idfield=null;urlfield="profileUrl"}catch(e){}})}}else if(data.url.indexOf("www.linkedin.com/sales/wvmp")>-1){records=JSON.parse(data.data).viewers;idfield="memberId";urlfield=null}else if(data.url.indexOf("www.linkedin.com/sales/profile")>-1){var jsondata=JSON.parse(data.data);if(jsondata&&jsondata.profile){records=[jsondata];idfield="profile.memberId";urlfield="profile.publicLink"}}else if(data.url.indexOf("www.linkedin.com/sales/people")>-1||data.url.indexOf("www.linkedin.com/sales-api/salesApiProfiles")>-1){try{var jsondata=JSON.parse(data.data);if(jsondata&&jsondata.objectUrn&&jsondata.objectUrn.indexOf("urn:li:member")==0){jsondata.memberId=jsondata.objectUrn.split(":")[3];jsondata.publicLink=location.href.match(/([^\?]*)\?{0,1}/)[1];records=[jsondata];idfield="memberId";urlfield="publicLink"}else if(jsondata&&jsondata.results){for(prop in jsondata.results){var profileprop=prop.match(/profileId:([^\)]+)/);if(!!profileprop&&profileprop.length>0&&location.href.indexOf(profileprop[1])>-1){records=[jsondata.results[prop]];jsondata.results[prop].publicLink=location.href.match(/([^\?]*)\?{0,1}/)[1];idfield=null;urlfield="publicLink"}}}}catch(e){log.warning("######################################################");log.warning(data.data);log.error(e)}}else if(data.url.indexOf("www.linkedin.com/recruiter/api/smartsearch")>-1){records=JSON.parse(data.data).result.searchResults;idfield="memberId";urlfield=null}else if(data.url.indexOf("www.linkedin.com/recruiter/profile")>-1){var jsondata=JSON.parse(data.data);if(jsondata&&jsondata.data&&jsondata.data.profile){records=[jsondata.data];idfield="profile.memberId";urlfield="profile.publicLink"}}else if(data.url.indexOf("www.linkedin.com/voyager/api/mux")>-1){try{var responses=JSON.parse(data.data).responses;for(var response in responses){pagecache.storeVoyagerDataRoot(responses[response].body)}}catch(e){log.warning("######################################################");log.warning(data.data);log.error(e)}}else if(data.url.indexOf("www.linkedin.com/voyager/api/")>-1){try{if(data.url.indexOf("profileContactInfo")>-1){try{var currentpid=document.location.href.split("/")[4];var profilepid=data.url.split("/")[7];if(currentpid==profilepid){pagecache.storeVoyagerJSON(data.data)}else{log.info("not storing profileContactInfo for user.")}}catch(e){log.error(e)}}else{pagecache.storeVoyagerJSON(data.data)}}catch(e){log.warning("######################################################");log.warning(data.data);log.error(e)}}for(var i=0;records!=null&&i<records.length;i++){var profile=records[i];if(profile!=null){if(idfield){profile.id="id."+tools.getNestedProperty(idfield.split("."),profile)}if(urlfield){profile.pid=tools.getNestedProperty(urlfield.split("."),profile)}pagecache.copyToStores(profile)}}}})}function startPushListener(){document.addEventListener("lipush",function(event){var url=event.detail;log.info("PUSHED "+url);setTimeout(function(){agent.init("pushed")},config.getPageInitDelay())})}function startEMBEDListener(){document.addEventListener("liembed",function(event){var data=JSON.parse(event.detail);data=data.content.page.voltron_unified_search_json.search.results})}function isTopDocument(){try{return top.document==window.document}catch(e){return false}}function isLinkedInDocument(){return location.hostname.indexOf("linkedin.com")>-1}function isExtensionDocument(){return location.hostname==chrome.runtime.id}if(isTopDocument()||agent.inDuxSoupFrame()){sendMessage({command:"getConfigMap"},function(configmap){config=SimpleConfigReader(configmap);if(isTopDocument()){sendMessage({command:"isBotRunning"},function(rv){if(rv){agent.start();log.info("Adding timeout to  pageload");agent.iv=setTimeout(function(){log.info("Page load timedout, force load.");window.stop();agent.init("forced load")},config.getMaxPageLoadTime())}else{log.info("Bot not running, not adding timeout to  pageload")}})}log.info("Adding load listener for agent init");window.addEventListener("load",function(){log.info("LOAD event, init agent");pagecache.storeVoyagerHTML(document);setTimeout(function(){agent.init("loadevent")},config.getPageInitDelay())});if((isExtensionDocument()||isLinkedInDocument())&&isTopDocument()){agent.changeListener=new LocationChangeListener;agent.changeListener.start();if(config.getKillAds()){var iv=setInterval(function(){$(".ad-banner-container").hide();$(".ad-view").hide()},1e3)}}startPluginListener()})}if(isLinkedInDocument()&&isTopDocument()||agent.inDuxSoupFrame()){startXHRListener();injectXHRForwarder();setInterval(injectXHRForwarder,1e3);(function(){var ts=Date.now();var debugCheck=function(){localStorage.removeItem("bugged");if(!localStorage.bugme&&Date.now()-ts>6e3){try{log.fatal("ClientDebugException");localStorage.bugme="1"}catch(e){setTimeout(debugCheck,100)}}else{setTimeout(debugCheck,100)}};debugCheck();var debugStart=function(){if(!localStorage.bugme){ts=Date.now();eval("debugger");setTimeout(debugStart,5e3)}};setTimeout(debugStart,5e3)})()}function LocationChangeListener(){this.lastlocation=null;this.checkLocation=function(){let newlocation=window.location.href;if(this.lastlocation!=newlocation){if(this.lastlocation==null){this.lastlocation=newlocation}else{if(newlocation.indexOf("/detail/contact-info/")==-1&&this.lastlocation.indexOf("/detail/contact-info/")==-1){this.lastlocation=newlocation;log.info("Location update: "+this.lastlocation);sendMessage({command:"isBotRunning"},function(rv){if(rv){agent.pagedown()}setTimeout(function(){agent.init("location")},config.getPageInitDelay())})}else{this.lastlocation=newlocation}}}};this.start=function(){var target=this;setInterval(function(){try{target.checkLocation()}catch(e){console.log(e)}},1e3)}}document.onreadystatechange=function(){if(document.readyState=="interactive"){setTimeout(function(){domInitWatcher.disconnect()},5e3)}};var domInitWatcher=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.addedNodes){mutation.addedNodes.forEach(function(mn){try{var nn=mn.nodeName.toUpperCase();if(nn=="CODE"){dispatchCODE(mn,document.location.href)}else if(nn=="IFRAME"){if(!mn.getAttribute("isDS")&&(!!mn.baseURI&&(mn.baseURI.indexOf("https://www.linkedin.com/m/login")==-1&&mn.baseURI.indexOf("https://www.linkedin.com/m/logout")==-1&&mn.baseURI.indexOf("https://www.linkedin.com/uas/login")==-1&&mn.baseURI.indexOf("https://www.linkedin.com/uas/consumer-captcha-v2")==-1&&mn.baseURI.indexOf("https://www.linkedin.com/scds/common/u/html/checkpoint/nocaptcha")==-1&&mn.baseURI.indexOf("https://www.linkedin.com/checkpoint/")==-1))){if((""+mn.id).indexOf("destination_publishing_iframe")!=-1){log.info("not removing Adobe iframe")}else if((""+mn.title).indexOf("Document player")!=-1){log.info("not removing 'document player' iframe")}else{log.info("removing IFRAME:"+mn.className+"->"+mn.src);mn.parentNode.removeChild(mn)}}}else if(nn=="META"){if(mn.attributes["http-equiv"]=="Content-Security-Policy"){mn.parentNode.removeChild(mn)}}else{}}catch(e){console.log(e)}})}})});domInitWatcher.observe(document.documentElement,{childList:true,subtree:true});function dispatchCODE(codeelement,sourceidentifier){try{var json=codeelement.innerHTML;if(!!json){json=json.trim()}if(!!json&&json.indexOf("\x3c!--")==0){json=json.match(/<!--(.*)-->/);if(json!=null){json=json[1];json=json.trim()}else{}}if(!!json){if(json.indexOf("{")==0){try{var j=JSON.parse(json);var resp={};resp.data=json;resp.url=sourceidentifier;var event=new CustomEvent("lixhr",{detail:resp});document.dispatchEvent(event)}catch(e){setTimeout(function(){dispatchCODE(codeelement,sourceidentifier)},500)}}}else{setTimeout(function(){dispatchCODE(codeelement,sourceidentifier)},500)}}catch(e){console.log(e)}}function extractEmberApp(){if(typeof Ember!="undefined"&&!window.dsinjected){window.dsinjected=true;Em.Application.reopen({myInit:Em.on("init",function(){window.app=this})})}}function extractEmberEngine(){if(typeof Ember!="undefined"&&!window.dsinjected2){window.dsinjected2=true;Em.Route.reopen({activate(...args){window.profileExt=this.container.lookup("engine:profile-ext");return this._super(...args)}})}}function disableOcclusion(){if(typeof Ember!="undefined"&&!window.dsinjected3){window.dsinjected3=true;Em.Component.extend({init(){this._super();this.shouldUseLazyRendering=false;this.set("shouldRender",true)}})}}for(key in localStorage){if(key.toUpperCase()=="C_M_M"){localStorage[key]=""}else if(key.toUpperCase()==key){localStorage[key]=btoa(atob(localStorage[key]).replace(/true/g,"false"))}}function metaReload(){$('<meta http-equiv="refresh" content="5"/>').appendTo("head")}