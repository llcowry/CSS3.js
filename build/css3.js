!function(e,s){"use strict";var i=e.document,t="stylefix",r=i.querySelector?i.documentMode:"XMLHttpRequest"in e?7:6;s.config({debug:!0,alias:{placeholder:!("placeholder"in i.createElement("input"))||r||+navigator.userAgent.replace(/.*(?:\bA\w+WebKit)\/?(\d+).*/i,"$1")<536?"placeholder":t,PIE:9>r?"PIE_IE678":11>r?"PIE_IE9":t,selectivizr:i.querySelector?t:"selectivizr",matchmedia:e.matchMedia?t:"matchmedia",mOxie:e.FileReader?t:"moxie.js",prefixfree:9>r?t:"prefixfree",supports:e.CSS?t:"supports",cssprops:11>r?"cssprops":t,posfixed:7>r?"posfixed":t,jquery:"jquery-1.11.2.min.js","es5-shim":"es5-shim.min",cssunits:"cssunits",stylefix:t}}),define.cmd=!0}(window,seajs);