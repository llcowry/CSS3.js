(function(f){typeof define==="function"?define("posfixed",f):f()})(function(require,exports,module){"use strict";!function(e){function t(e,t){return t=t||"auto",e+':expression(seajs.require("posfixed")(this,"'+e+'","'+t+'"))'}function i(e,t,i){var o,s=e.uniqueID,r=d[s];if(t=t.toLowerCase(),i=i.toLowerCase(),r||(d[s]=r={},r.fixedright=r.fixedbottom="auto"),r[t]=i,"position"===t){if("fixed"===i){if(r.fixed){var f=parseInt(r.left),n=parseInt(r.top),u=parseInt(r.right),a=parseInt(r.bottom);r.fixedleft=isNaN(f)?isNaN(u)?r.left:l.scrollLeft+l.clientWidth-e.offsetWidth-u:l.scrollLeft+f,r.fixedtop=isNaN(n)?isNaN(a)?r.top:l.scrollTop+l.clientHeight-e.offsetHeight-a:l.scrollTop+n}else setTimeout(function(){r.top&&r.left||(e.className+=" "+p)},1),r.fixed=!0;o="absolute"}}else"fixed"===r.position&&(o=r["fixed"+t]);return o||i}var o,s=t("$1","$2")+"$3",r=e.stylefix||require("stylefix"),f=e.cssprops||require("cssprops"),n=e.document,l=n.documentElement,p="fixed_helper_"+n.uniqueID,u=l.childNodes[0],a=r.ieVersion,d={};if(7>a){f.push([/^(position)\s*:\s*(\w+)([\};]|$)/i,s]),f.push([/^(left|top|right|bottom)\s*:\s*([\d\.+]*\w*)([\};]|$)/i,s]),r.ready(function(){o=n.createElement("style"),u.insertBefore(o,u.firstChild),r.cssContent(o,"html{background: url(about:blank) no-repeat fixed}."+p+"{"+t("top")+";"+t("left")+"}")});try{module.exports=i}catch(c){e.posfixed=i}}}(window);});