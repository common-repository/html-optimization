window.O10N=function(e,b){function t(){var a=b(this).closest(".o10n-notice").attr("rel");a&&d[24]("delete_notice",{a:a},function(c){c?d[51]("error",c,!1,!0,function(){}):d[8]("","Notice deleted",a)})}function g(a,c,b){var d;if(f)if(100<h&&f.clear&&(f.clear(),h=0),b||(b="white"),c=Array.prototype.slice.call(c),f){var e=c.shift();switch(e="admin"+(e?"."+e:""),c.unshift("font-size:12px;font-weight:bold;color:"+b+";margin-right:1px;"),c.unshift("font-size:10px;"),c.unshift("font-size:10px;font-weight:bold;"),
a){case "ok":c.unshift("font-size:14px;font-weight:bold;color:green;margin-right:2px;");d="%c\u2714";a="log";break;case "warn":c.unshift("font-size:14px;font-weight:bold;color:orange;margin-right:2px;");d="%c\u26a0";a="log";break;default:d=""}c.unshift("font-size:12px;font-weight:bold;color:"+b+";margin-right:1px;");c.unshift("%c\u2772"+d+"%co10n%c."+e+"%c\u2773");f[a]||(a="log");try{f[a].apply(this,c),h++}catch(v){throw Error(c.join(" - "));}}else if("error"===a)throw Error(c.join(" - "));}O10N=
{};var d={},k={},l={},p=!1,q=!1,m=[],n=[];O10N[0]=function(a){if("object"!=typeof a)return d[11]("","Client configuration invalid",a);for(var c in a)a.hasOwnProperty(c)&&(7===(c=parseInt(c))?l=a[c]:k[c]=a[c]);for(a=n.shift();a;)a(),a=n.shift();q=!0;b(function(){for(var a=m.shift();a;)a(),a=m.shift();p=!0})};d[14]=function(a){p?a():m.push(a)};d[25]=function(){return Math.round(+new Date/1E3)};O10N[1]=function(a){q?O10N=a(e,b,O10N,k,d,l):n.push(function(){O10N=a(e,b,O10N,k,d,l)})};var u=e.requestAnimationFrame?
e.requestAnimationFrame:e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(a){e.setTimeout(a,1E3/60)};d[15]=O10N[15]=function(){u.apply(e,arguments)};var r=void 0!==e.requestIdleCallback&&null!==e.requestIdleCallback&&e.requestIdleCallback;d[16]=function(a,c,b){if("function"!=typeof a)return d[11]("","requestIdleCallback not a function",arguments);r?r(a,{timeout:c}):(void 0===b&&(b=100),setTimeout(a,b))};"content"in document.createElement("template")||
b(function(){for(var a=document.getElementsByTagName("template"),c=a.length,b=0;b<c;++b){for(var d=a[b],e=d.childNodes,f=document.createDocumentFragment();e[0];)f.appendChild(e[0]);d.content=f}});var f=e.console,h=0;d[8]=function(){g("log",arguments,"#079c2d")};d[12]=function(){g("ok",arguments,"#079c2d")};d[9]=function(){g("info",arguments,"#4285f4")};d[10]=function(){g("warn",arguments,"#fbbc05")};d[11]=function(){g("error",arguments,"#ea4335")};return d[51]=function(a,c,e,f,g){switch(a){case "ok":c=
'<div class="updated inline notice-flap is-dismissable" style="opacity:0.2;"><p>'+c+"</p></div>";break;case "error":c='<div class="error inline" style="opacity:0.2;"><p>'+c+"</p></div>";break;default:return d[11]("","invalid notice type",a)}return c=b(c),b("#o10n-notices .inline").css({opacity:1}),b("#o10n-notices").append(c),b("html, body").stop().animate({scrollTop:c.offset().top-40},250,"swing",function(){c.fadeTo(1500,100);e&&setTimeout(function(){c.fadeOut(1E3,function(){c.remove()})},e);g&&
g(c)}),c},d[14](function(){function a(){0<b(".o10n-notice .notice-dismiss").length&&b(".o10n-notice .notice-dismiss").not("data[o10n-notice]").data("o10n-notice",1).on("click",t)}d[16](function(){d[15](function(){1<b(".wrap .other-notices > div").length&&(b(".other-notices .wp-header-end").remove(),b(".other-notices-notice .count").html(b(".wrap .other-notices > div").length),b(".other-notices-notice").show(),b(".other-notices-notice").css("visibility","visible"),b(".other-notices-notice .show").on("click",
function(){b(".other-notices").is(":visible")?(b(".other-notices").hide(),b(this).html(b(this).data("show"))):(b(".other-notices").fadeIn({duration:200}),b(this).data("show")||b(this).data("show",b(this).html()),b(this).html(b(this).data("hide")))}))})},1E3,10);a();setTimeout(a,1E3)}),O10N}(window,jQuery);
