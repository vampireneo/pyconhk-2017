!function(e){function t(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a=window.webpackJsonp;window.webpackJsonp=function(t,i,n){for(var l,u,s=0,c=[];s<t.length;s++)u=t[s],o[u]&&c.push(o[u][0]),o[u]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(a&&a(t,i,n);c.length;)c.shift()()};var i={},o={3:0};t.e=function(e){function a(){u.onerror=u.onload=null,clearTimeout(s);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var i=o[e];if(0===i)return new Promise(function(e){e()});if(i)return i[2];var n=new Promise(function(t,a){i=o[e]=[t,a]});i[2]=n;var l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,t.nc&&u.setAttribute("nonce",t.nc),u.src=t.p+""+e+".js";var s=setTimeout(a,12e4);return u.onerror=u.onload=a,l.appendChild(u),n},t.m=e,t.c=i,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/pyconhk-2017/",t.oe=function(e){throw console.error(e),e},t(t.s=79)}({21:function(e,t,a){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(7),n=function(e){return e&&e.__esModule?e:{default:e}}(o),l=0,u=0,s=function(){return"materialize-modal-overlay-"+ ++u},c={init:function(e){var t={opacity:.5,inDuration:350,outDuration:250,ready:void 0,complete:void 0,dismissible:!0,startingTop:"4%",endingTop:"10%"};return e=n.default.extend(t,e),this.each(function(){var t=(0,n.default)(this),a=(0,n.default)(this).attr("id")||"#"+(0,n.default)(this).data("target"),i=function(){var a=t.data("overlay-id"),i=(0,n.default)("#"+a);t.removeClass("open"),(0,n.default)("body").css({overflow:"",width:""}),t.find(".modal-close").off("click.close"),(0,n.default)(document).off("keyup.modal"+a),i.velocity({opacity:0},{duration:e.outDuration,queue:!1,ease:"easeOutQuart"});var o={duration:e.outDuration,queue:!1,ease:"easeOutCubic",complete:function(){(0,n.default)(this).css({display:"none"}),"function"==typeof e.complete&&e.complete.call(this,t),i.remove(),l--}};t.hasClass("bottom-sheet")?t.velocity({bottom:"-100%",opacity:0},o):t.velocity({top:e.startingTop,opacity:0,scaleX:.7},o)},o=function(a){var o=(0,n.default)("body"),u=o.innerWidth();if(o.css("overflow","hidden"),o.width(u),!t.hasClass("open")){var c=s(),d=(0,n.default)('<div class="modal-overlay"></div>'),r=++l;d.attr("id",c).css("z-index",1e3+2*r),t.data("overlay-id",c).css("z-index",1e3+2*r+1),t.addClass("open"),o.append(d),e.dismissible&&(d.click(function(){i()}),(0,n.default)(document).on("keyup.modal"+c,function(e){27===e.keyCode&&i()})),t.find(".modal-close").on("click.close",function(e){i()}),d.css({display:"block",opacity:0}),t.css({display:"block",opacity:0}),d.velocity({opacity:e.opacity},{duration:e.inDuration,queue:!1,ease:"easeOutCubic"}),t.data("associated-overlay",d[0]);var f={duration:e.inDuration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof e.ready&&e.ready.call(this,t,a)}};t.hasClass("bottom-sheet")?t.velocity({bottom:"0",opacity:1},f):(n.default.Velocity.hook(t,"scaleX",.7),t.css({top:e.startingTop}),t.velocity({top:e.endingTop,opacity:1,scaleX:"1"},f))}};(0,n.default)(document).off("click.modalTrigger",'a[href="#'+a+'"], [data-target="'+a+'"]'),(0,n.default)(this).off("openModal"),(0,n.default)(this).off("closeModal"),(0,n.default)(document).on("click.modalTrigger",'a[href="#'+a+'"], [data-target="'+a+'"]',function(t){e.startingTop=((0,n.default)(this).offset().top-(0,n.default)(window).scrollTop())/1.15,o((0,n.default)(this)),t.preventDefault()}),(0,n.default)(this).on("openModal",function(){o()}),(0,n.default)(this).on("closeModal",function(){i()})})},open:function(){(0,n.default)(this).trigger("openModal")},close:function(){(0,n.default)(this).trigger("closeModal")}};n.default.fn.modal=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==(void 0===e?"undefined":i(e))&&e?void n.default.error("Method "+e+" does not exist on jQuery.modal"):c.init.apply(this,arguments)}},7:function(e,t){e.exports=jQuery},79:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";var i=a(7),o=function(e){return e&&e.__esModule?e:{default:e}}(i);navigator.serviceWorker&&a.e(0).then(function(){a(78)}.bind(null,a)).catch(a.oe),a(81),a(84),a(85),a(21),(0,o.default)("[data-activates]").sideNav(),(0,o.default)(".collapsible").collapsible(),new Promise(function(e){e()}).then(function(){a(86).init()}.bind(null,a)).catch(a.oe)},81:function(e,t,a){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(7),n=function(e){return e&&e.__esModule?e:{default:e}}(o);a(82);var l={init:function(e){var t={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0};e=n.default.extend(t,e),(0,n.default)(this).each(function(){var t=(0,n.default)(this),a=t.attr("data-activates"),i=(0,n.default)("#"+a);300!==e.menuWidth&&i.css("width",e.menuWidth);var o=(0,n.default)('.drag-target[data-sidenav="'+a+'"]');e.draggable?(o.length&&o.remove(),o=(0,n.default)('<div class="drag-target"></div>').attr("data-sidenav",a),(0,n.default)("body").append(o)):o=(0,n.default)(),"left"===e.edge?(i.css("transform","translateX(-100%)"),o.css({left:0})):(i.addClass("right-aligned").css("transform","translateX(100%)"),o.css({right:0})),i.hasClass("fixed")&&window.innerWidth>992&&i.css("transform","translateX(0)"),i.hasClass("fixed")&&(0,n.default)(window).resize(function(){window.innerWidth>992?0!==(0,n.default)("#sidenav-overlay").length&&s?l(!0):i.css("transform","translateX(0%)"):!1===s&&("left"===e.edge?i.css("transform","translateX(-100%)"):i.css("transform","translateX(100%)"))}),!0===e.closeOnClick&&i.on("click.itemclick","a:not(.collapsible-header)",function(){l()});var l=function(t){u=!1,s=!1,(0,n.default)("body").css({overflow:"",width:""}),(0,n.default)("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){(0,n.default)(this).remove()}}),"left"===e.edge?(o.css({width:"",right:"",left:"0"}),i.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===t&&(i.removeAttr("style"),i.css("width",e.menuWidth))}})):(o.css({width:"",right:"0",left:""}),i.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===t&&(i.removeAttr("style"),i.css("width",e.menuWidth))}}))},u=!1,s=!1;e.draggable&&(o.on("click",function(){s&&l()}),o.hammer({prevent_default:!1}).bind("pan",function(t){if("touch"===t.gesture.pointerType){var a=t.gesture.center.x,o=(0,n.default)(document.body),u=(0,n.default)("#sidenav-overlay"),c=o.innerWidth();o.css("overflow","hidden"),o.width(c),0===u.length&&(u=(0,n.default)('<div id="sidenav-overlay"></div>'),u.css("opacity",0).click(function(){l()}),(0,n.default)("body").append(u)),"left"===e.edge&&(a>e.menuWidth?a=e.menuWidth:a<0&&(a=0)),"left"===e.edge&&(a<e.menuWidth/2?s=!1:a>=e.menuWidth/2&&(s=!0)),i.css("transform","translateX("+(a-e.menuWidth)+"px)")}else{x<window.innerWidth-e.menuWidth/2?s=!0:x>=window.innerWidth-e.menuWidth/2&&(s=!1);var d=x-e.menuWidth/2;d<0&&(d=0),i.css("transform","translateX("+d+"px)")}var r=void 0;"left"===e.edge?(r=x/e.menuWidth,$overlay.velocity({opacity:r},{duration:10,queue:!1,easing:"easeOutQuad"})):(r=Math.abs((x-window.innerWidth)/e.menuWidth),$overlay.velocity({opacity:r},{duration:10,queue:!1,easing:"easeOutQuad"}))}).bind("panend",function(t){if("touch"===t.gesture.pointerType){var a=(0,n.default)('<div id="sidenav-overlay"></div>'),l=t.gesture.velocityX,c=t.gesture.center.x,d=c-e.menuWidth,r=c-e.menuWidth/2;d>0&&(d=0),r<0&&(r=0),u=!1,"left"===e.edge?s&&l<=.3||l<-.5?(0!==d&&i.velocity({translateX:[0,d]},{duration:300,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),o.css({width:"50%",right:0,left:""}),s=!0):(!s||l>.3)&&((0,n.default)("body").css({overflow:"",width:""}),i.velocity({translateX:[-1*e.menuWidth-10,d]},{duration:200,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){(0,n.default)(this).remove()}}),o.css({width:"10px",right:"",left:0})):s&&l>=-.3||l>.5?(0!==r&&i.velocity({translateX:[0,r]},{duration:300,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),o.css({width:"50%",right:"",left:0}),s=!0):(!s||l<-.3)&&((0,n.default)("body").css({overflow:"",width:""}),i.velocity({translateX:[e.menuWidth+10,r]},{duration:200,queue:!1,easing:"easeOutQuad"}),a.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){(0,n.default)(this).remove()}}),o.css({width:"10px",right:0,left:""}))}})),t.off("click.sidenav").on("click.sidenav",function(){if(!0===s)s=!1,u=!1,l();else{var t=(0,n.default)("body"),a=(0,n.default)('<div id="sidenav-overlay"></div>'),c=t.innerWidth();t.css("overflow","hidden"),t.width(c),t.append(o),"left"===e.edge?(o.css({width:"50%",right:0,left:""}),i.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(o.css({width:"50%",right:"",left:0}),i.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),a.css("opacity",0).click(function(){s=!1,u=!1,l(),a.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){(0,n.default)(this).remove()}})}),t.append(a),a.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){s=!0,u=!1}})}return!1})})},destroy:function(){var e=(0,n.default)("#sidenav-overlay"),t=(0,n.default)('.drag-target[data-sidenav="'+(0,n.default)(this).attr("data-activates")+'"]');e.trigger("click"),t.remove(),(0,n.default)(this).off("click"),e.remove()},show:function(){this.trigger("click")},hide:function(){(0,n.default)("#sidenav-overlay").trigger("click")}};n.default.fn.sideNav=function(e){return l[e]?l[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==(void 0===e?"undefined":i(e))&&e?void n.default.error("Method "+e+" does not exist on jQuery.sideNav"):l.init.apply(this,arguments)}},82:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=(0,l.default)(e);a.data("hammer")||a.data("hammer",new s.default(a[0],t))}var n=a(7),l=i(n),u=a(83),s=i(u);l.default.fn.hammer=function(e){return this.each(function(){o(this,e)})},s.default.Manager.prototype.emit=function(e){return function(t,a){e.call(this,t,a),(0,l.default)(this.element).trigger({type:t,gesture:a})}}(s.default.Manager.prototype.emit)},83:function(e,t){e.exports=Hammer},84:function(e,t,a){"use strict";var i=a(7),o=function(e){return e&&e.__esModule?e:{default:e}}(i);o.default.fn.collapsible=function(e){var t={accordion:void 0,onOpen:void 0,onClose:void 0};return e=o.default.extend(t,e),this.each(function(){function t(e){c=s.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}}),c.not(e).removeClass("active").parent().removeClass("active"),c.not(e).parent().children(".collapsible-body").stop(!0,!1).each(function(){(0,o.default)(this).is(":visible")&&(0,o.default)(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height",""),n((0,o.default)(this).siblings(".collapsible-header"))}})})}function a(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){(0,o.default)(this).css("height","")}})}function i(i){e.accordion||"accordion"===d||void 0===d?t(i):a(i),n(i)}function n(t){t.hasClass("active")?"function"==typeof e.onOpen&&e.onOpen.call(this,t.parent()):"function"==typeof e.onClose&&e.onClose.call(this,t.parent())}function l(e){return u(e).length>0}function u(e){return e.closest("li > .collapsible-header")}var s=(0,o.default)(this),c=(0,o.default)(this).find("> li > .collapsible-header"),d=s.data("collapsible");s.off("click.collapse","> li > .collapsible-header"),c.off("click.collapse"),s.on("click.collapse","> li > .collapsible-header",function(e){var t=(0,o.default)(e.target);l(t)&&(t=u(t)),t.toggleClass("active"),i(t)}),e.accordion||"accordion"===d||void 0===d?i(c.filter(".active").first()):c.filter(".active").each(function(){i((0,o.default)(this))})})}},85:function(e,t,a){"use strict";var i=a(7),o=function(e){return e&&e.__esModule?e:{default:e}}(i);"localhost"===location.hostname?(console.debug("[GA local debug] override localhost `ga` function"),window.ga=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];if("function"==typeof t[0]){var i={get:function(e){return"debug:"+e}};window.setTimeout(t[0](i),500)}else if("create"===t[0]){var o=(t[0],t[1]),n=t[2];console.debug("[GA local debug] "+o+' "'+n+'"')}else if("send"===t[0]){var l=(t[0],t[1]);t[2],t[3],t[4],t[5];"pageview"===l?console.debug("[GA local debug] sending "+l):console.debug("[GA local debug] sending "+l,t.slice(2))}}):(window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date);var n=function(){var e=this.href;console.debug("[GA debug] trackLinkOutbound",e),window.ga("send","event","outbound","click",e,{transport:"beacon",hitCallback:function(){document.location=e}})},l=function(e,t,a,i){return function(){console.debug('[GA debug] track event "'+e+'", "'+t+'", "'+a+'", "'+i+'"'),window.ga("send","event",e,t,a,i)}};window.ga(function(e){var t=e.get("clientId");(0,o.default)("a").each(function(){var e=this,a=(0,o.default)(this);if(e.hostname.match(/^(.+?\.|)eventbrite\.com/)){e.search=""===e.search?"?_eboga="+t:e.search+"&_eboga="+t;var i=a.data("ga-category"),u=a.data("ga-action"),s=a.data("ga-label"),c=a.data("ga-value");void 0!==i&&""!==i&&void 0!==u&&""!==u&&(e.onclick=l(i,u,s,c))}else if(e.href.match(/^mailto:/)){var d=e.href.substring(7);e.onclick=l("outbound","click","email",d)}else e.href.match(window.location.hostname)||(e.onclick=n)})})},86:function(e,t){e.exports=Waves}});
//# sourceMappingURL=app.js.map