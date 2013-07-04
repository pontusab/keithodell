/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
(function(d){d.flexslider=function(j,l){var a=d(j),c=d.extend({},d.flexslider.defaults,l),e=c.namespace,q="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=q?"touchend":"click",m="vertical"===c.direction,n=c.reverse,h=0<c.itemWidth,s="fade"===c.animation,t=""!==c.asNavFor,f={};d.data(j,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=m?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!s)if(g=c.useCSS)a:{g=document.createElement("div");var p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in p)if(void 0!==g.style[p[e]]){a.pfx=p[e].replace("Perspective","").toLowerCase();
a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();t&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());q&&c.touch&&f.touch();(!s||s&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();b=d(this);var g=b.index();
!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var p=0;p<a.pagingCount;p++)g="thumbnails"===c.controlNav?
'<img src="'+a.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNavScaffold.delegate("a",
"click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(u,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
q&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(u,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});q&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){k=m?d-b.touches[0].pageY:d-b.touches[0].pageX;q=m?Math.abs(k)<Math.abs(b.touches[0].pageX-e):Math.abs(k)<Math.abs(b.touches[0].pageY-e);if(!q||500<Number(new Date)-l)b.preventDefault(),!s&&a.transitions&&(c.animationLoop||(k/=0===a.currentSlide&&0>k||a.currentSlide===a.last&&0<k?Math.abs(k)/r+2:1),a.setProps(f+k,"setTouch"))}function g(){j.removeEventListener("touchmove",
b,!1);if(a.animatingTo===a.currentSlide&&!q&&null!==k){var h=n?-k:k,m=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(m)&&(550>Number(new Date)-l&&50<Math.abs(h)||Math.abs(h)>r/2)?a.flexAnimate(m,c.pauseOnAction):s||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}j.removeEventListener("touchend",g,!1);f=k=e=d=null}var d,e,f,r,k,l,q=!1;j.addEventListener("touchstart",function(k){a.animating?k.preventDefault():1===k.touches.length&&(a.pause(),r=m?a.h:a.w,l=Number(new Date),f=h&&n&&a.animatingTo===
a.last?0:h&&n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*r:(a.currentSlide+a.cloneOffset)*r,d=m?k.touches[0].pageY:k.touches[0].pageX,e=m?k.touches[0].pageX:k.touches[0].pageY,j.addEventListener("touchmove",b,!1),j.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),s?f.smoothHeight():h?(a.slides.width(a.computedW),
a.update(a.pagingCount),a.setProps()):m?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!m||s){var c=s?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,p,j,l){t&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,l)||p)&&a.is(":visible")){if(t&&j)if(p=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,p.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",p.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!l&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(s)q?(a.slides.eq(a.currentSlide).css({opacity:0,
zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var r=m?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*r:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*r:n?(a.count-1-b+a.cloneOffset)*r:(b+a.cloneOffset)*r;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
function(){a.wrapup(r)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(r)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!s&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=t?a.pagingCount-1:a.last;return g?!0:t&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:t&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
!t?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
a.last?a.limit:f;switch(g){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=m?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(s)a.slides.css({width:"100%",
"float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(q?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,p;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
0,n&&(p=d.makeArray(a.slides).reverse(),a.slides=d(p),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;m&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;m&&n?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():m&&n?a.slides.eq(a.last).remove():
a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(j){void 0===j&&(j={});if("object"===typeof j)return this.each(function(){var a=d(this),c=a.find(j.selector?j.selector:".slides > li");1===c.length?(c.fadeIn(400),
j.start&&j.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,j)});var l=d(this).data("flexslider");switch(j){case "play":l.play();break;case "pause":l.pause();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof j&&l.flexAnimate(j,!0)}}})(jQuery);

/* **********************************************
     Begin infobubble-compiled.js
********************************************** */

(function(){
var b=void 0,g;
function k(a){this.extend(k,google.maps.OverlayView);this.b=[];this.d=null;this.g=100;this.m=!1;a=a||{};if(a.backgroundColor==b)a.backgroundColor=this.z;if(a.borderColor==b)a.borderColor=this.A;if(a.borderRadius==b)a.borderRadius=this.B;if(a.borderWidth==b)a.borderWidth=this.C;if(a.padding==b)a.padding=this.F;if(a.arrowPosition==b)a.arrowPosition=this.u;a.disableAutoPan==b&&(a.disableAutoPan=!1);a.disableAnimation==b&&(a.disableAnimation=!1);if(a.minWidth==b)a.minWidth=this.D;if(a.shadowStyle==b)a.shadowStyle=
this.G;if(a.arrowSize==b)a.arrowSize=this.v;if(a.arrowStyle==b)a.arrowStyle=this.w;l(this);this.setValues(a)}window.InfoBubble=k;g=k.prototype;g.v=15;g.w=0;g.G=1;g.D=50;g.u=50;g.F=10;g.C=1;g.A="#ccc";g.B=10;g.z="#fff";g.extend=function(a,c){return function(a){for(var c in a.prototype)this.prototype[c]=a.prototype[c];return this}.apply(a,[c])};
function l(a){var c=a.c=document.createElement("DIV");c.style.position="absolute";c.style.zIndex=a.g;(a.i=document.createElement("DIV")).style.position="relative";var d=a.l=document.createElement("IMG");d.style.position="absolute";d.style.width=n(12);d.style.height=n(12);d.style.border=0;d.style.zIndex=a.g+1;d.style.cursor="pointer";d.src="http://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif";google.maps.event.addDomListener(d,"click",function(){a.close();google.maps.event.trigger(a,"closeclick")});
var e=a.e=document.createElement("DIV");e.style.overflowX="auto";e.style.overflowY="auto";e.style.cursor="default";e.style.clear="both";e.style.position="relative";var f=a.j=document.createElement("DIV");e.appendChild(f);f=a.L=document.createElement("DIV");f.style.position="relative";var i=a.n=document.createElement("DIV"),h=a.k=document.createElement("DIV"),j=q(a);i.style.position=h.style.position="absolute";i.style.left=h.style.left="50%";i.style.height=h.style.height="0";i.style.width=h.style.width=
"0";i.style.marginLeft=n(-j);i.style.borderWidth=n(j);i.style.borderBottomWidth=0;j=a.a=document.createElement("DIV");j.style.position="absolute";c.style.display=j.style.display="none";c.appendChild(a.i);c.appendChild(d);c.appendChild(e);f.appendChild(i);f.appendChild(h);c.appendChild(f);c=document.createElement("style");c.setAttribute("type","text/css");a.h="_ibani_"+Math.round(1E4*Math.random());c.textContent="."+a.h+"{-webkit-animation-name:"+a.h+";-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes "+
a.h+" {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}";document.getElementsByTagName("head")[0].appendChild(c)}g.ca=function(a){this.set("backgroundClassName",a)};k.prototype.setBackgroundClassName=k.prototype.ca;k.prototype.M=function(){this.j.className=this.get("backgroundClassName")};k.prototype.backgroundClassName_changed=k.prototype.M;k.prototype.oa=function(a){this.set("tabClassName",a)};
k.prototype.setTabClassName=k.prototype.oa;k.prototype.ra=function(){t(this)};k.prototype.tabClassName_changed=k.prototype.ra;k.prototype.ba=function(a){this.set("arrowStyle",a)};k.prototype.setArrowStyle=k.prototype.ba;k.prototype.K=function(){this.p()};k.prototype.arrowStyle_changed=k.prototype.K;function q(a){return parseInt(a.get("arrowSize"),10)||0}k.prototype.aa=function(a){this.set("arrowSize",a)};k.prototype.setArrowSize=k.prototype.aa;k.prototype.p=function(){this.r()};
k.prototype.arrowSize_changed=k.prototype.p;k.prototype.$=function(a){this.set("arrowPosition",a)};k.prototype.setArrowPosition=k.prototype.$;k.prototype.J=function(){this.n.style.left=this.k.style.left=(parseInt(this.get("arrowPosition"),10)||0)+"%";u(this)};k.prototype.arrowPosition_changed=k.prototype.J;k.prototype.setZIndex=function(a){this.set("zIndex",a)};k.prototype.setZIndex=k.prototype.setZIndex;k.prototype.getZIndex=function(){return parseInt(this.get("zIndex"),10)||this.g};
k.prototype.ta=function(){var a=this.getZIndex();this.c.style.zIndex=this.g=a;this.l.style.zIndex=a+1};k.prototype.zIndex_changed=k.prototype.ta;k.prototype.ma=function(a){this.set("shadowStyle",a)};k.prototype.setShadowStyle=k.prototype.ma;
k.prototype.pa=function(){var a="",c="",d="";switch(parseInt(this.get("shadowStyle"),10)||0){case 0:a="none";break;case 1:c="40px 15px 10px rgba(33,33,33,0.3)";d="transparent";break;case 2:c="0 0 2px rgba(33,33,33,0.3)",d="rgba(33,33,33,0.35)"}this.a.style.boxShadow=this.a.style.webkitBoxShadow=this.a.style.MozBoxShadow=c;this.a.style.backgroundColor=d;if(this.m)this.a.style.display=a,this.draw()};k.prototype.shadowStyle_changed=k.prototype.pa;
k.prototype.qa=function(){this.set("hideCloseButton",!1)};k.prototype.showCloseButton=k.prototype.qa;k.prototype.P=function(){this.set("hideCloseButton",!0)};k.prototype.hideCloseButton=k.prototype.P;k.prototype.Q=function(){this.l.style.display=this.get("hideCloseButton")?"none":""};k.prototype.hideCloseButton_changed=k.prototype.Q;k.prototype.da=function(a){a&&this.set("backgroundColor",a)};k.prototype.setBackgroundColor=k.prototype.da;
k.prototype.N=function(){var a=this.get("backgroundColor");this.e.style.backgroundColor=a;this.k.style.borderColor=a+" transparent transparent";t(this)};k.prototype.backgroundColor_changed=k.prototype.N;k.prototype.ea=function(a){a&&this.set("borderColor",a)};k.prototype.setBorderColor=k.prototype.ea;
k.prototype.O=function(){var a=this.get("borderColor"),c=this.e,d=this.n;c.style.borderColor=a;d.style.borderColor=a+" transparent transparent";c.style.borderStyle=d.style.borderStyle=this.k.style.borderStyle="solid";t(this)};k.prototype.borderColor_changed=k.prototype.O;k.prototype.fa=function(a){this.set("borderRadius",a)};k.prototype.setBorderRadius=k.prototype.fa;function w(a){return parseInt(a.get("borderRadius"),10)||0}
k.prototype.q=function(){var a=w(this),c=x(this);this.e.style.borderRadius=this.e.style.MozBorderRadius=this.e.style.webkitBorderRadius=this.a.style.borderRadius=this.a.style.MozBorderRadius=this.a.style.webkitBorderRadius=n(a);this.i.style.paddingLeft=this.i.style.paddingRight=n(a+c);u(this)};k.prototype.borderRadius_changed=k.prototype.q;function x(a){return parseInt(a.get("borderWidth"),10)||0}k.prototype.ga=function(a){this.set("borderWidth",a)};k.prototype.setBorderWidth=k.prototype.ga;
k.prototype.r=function(){var a=x(this);this.e.style.borderWidth=n(a);this.i.style.top=n(a);var a=x(this),c=q(this),d=parseInt(this.get("arrowStyle"),10)||0,e=n(c),f=n(Math.max(0,c-a)),i=this.n,h=this.k;this.L.style.marginTop=n(-a);i.style.borderTopWidth=e;h.style.borderTopWidth=f;0==d||1==d?(i.style.borderLeftWidth=e,h.style.borderLeftWidth=f):i.style.borderLeftWidth=h.style.borderLeftWidth=0;0==d||2==d?(i.style.borderRightWidth=e,h.style.borderRightWidth=f):i.style.borderRightWidth=h.style.borderRightWidth=
0;2>d?(i.style.marginLeft=n(-c),h.style.marginLeft=n(-(c-a))):i.style.marginLeft=h.style.marginLeft=0;i.style.display=0==a?"none":"";t(this);this.q();u(this)};k.prototype.borderWidth_changed=k.prototype.r;k.prototype.la=function(a){this.set("padding",a)};k.prototype.setPadding=k.prototype.la;function y(a){return parseInt(a.get("padding"),10)||0}k.prototype.X=function(){this.e.style.padding=n(y(this));t(this);u(this)};k.prototype.padding_changed=k.prototype.X;function n(a){return a?a+"px":a}
function z(a){var c="mousedown,mousemove,mouseover,mouseout,mouseup,mousewheel,DOMMouseScroll,touchstart,touchend,touchmove,dblclick,contextmenu,click".split(","),d=a.c;a.s=[];for(var e=0,f;f=c[e];e++)a.s.push(google.maps.event.addDomListener(d,f,function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}))}k.prototype.onAdd=function(){this.c||l(this);z(this);var a=this.getPanes();a&&(a.floatPane.appendChild(this.c),a.floatShadow.appendChild(this.a))};k.prototype.onAdd=k.prototype.onAdd;
k.prototype.draw=function(){var a=this.getProjection();if(a){var c=this.get("position");if(c){var d=0;if(this.d)d=this.d.offsetHeight;var e=A(this),f=q(this),i=parseInt(this.get("arrowPosition"),10)||0,i=i/100,a=a.fromLatLngToDivPixel(c);if(c=this.e.offsetWidth){var h=a.y-(this.c.offsetHeight+f);e&&(h-=e);var j=a.x-c*i;this.c.style.top=n(h);this.c.style.left=n(j);switch(parseInt(this.get("shadowStyle"),10)){case 1:this.a.style.top=n(h+d-1);this.a.style.left=n(j);this.a.style.width=n(c);this.a.style.height=
n(this.e.offsetHeight-f);break;case 2:c*=0.8,this.a.style.top=e?n(a.y):n(a.y+f),this.a.style.left=n(a.x-c*i),this.a.style.width=n(c),this.a.style.height=n(2)}}}else this.close()}};k.prototype.draw=k.prototype.draw;k.prototype.onRemove=function(){this.c&&this.c.parentNode&&this.c.parentNode.removeChild(this.c);this.a&&this.a.parentNode&&this.a.parentNode.removeChild(this.a);for(var a=0,c;c=this.s[a];a++)google.maps.event.removeListener(c)};k.prototype.onRemove=k.prototype.onRemove;k.prototype.R=function(){return this.m};
k.prototype.isOpen=k.prototype.R;k.prototype.close=function(){if(this.c)this.c.style.display="none",this.c.className=this.c.className.replace(this.h,"");if(this.a)this.a.style.display="none",this.a.className=this.a.className.replace(this.h,"");this.m=!1};k.prototype.close=k.prototype.close;k.prototype.open=function(a,c){var d=this;window.setTimeout(function(){B(d,a,c)},0)};
function B(a,c,d){C(a);c&&a.setMap(c);d&&(a.set("anchor",d),a.bindTo("anchorPoint",d),a.bindTo("position",d));a.c.style.display=a.a.style.display="";a.get("disableAnimation")||(a.c.className+=" "+a.h,a.a.className+=" "+a.h);u(a);a.m=!0;a.get("disableAutoPan")||window.setTimeout(function(){a.o()},200)}k.prototype.open=k.prototype.open;k.prototype.setPosition=function(a){a&&this.set("position",a)};k.prototype.setPosition=k.prototype.setPosition;k.prototype.getPosition=function(){return this.get("position")};
k.prototype.getPosition=k.prototype.getPosition;k.prototype.Y=function(){this.draw()};k.prototype.position_changed=k.prototype.Y;k.prototype.o=function(){var a=this.getProjection();if(a&&this.c){var c=this.c.offsetHeight+A(this),d=this.get("map"),e=d.getDiv().offsetHeight,f=this.getPosition(),i=a.fromLatLngToContainerPixel(d.getCenter()),f=a.fromLatLngToContainerPixel(f),c=i.y-c,e=e-i.y,i=0;0>c&&(i=(-1*c+e)/2);f.y-=i;f=a.fromContainerPixelToLatLng(f);d.getCenter()!=f&&d.panTo(f)}};
k.prototype.panToView=k.prototype.o;function D(a){var a=a.replace(/^\s*([\S\s]*)\b\s*$/,"$1"),c=document.createElement("DIV");c.innerHTML=a;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);return a}function E(a){if(a)for(var c;c=a.firstChild;)a.removeChild(c)}k.prototype.setContent=function(a){this.set("content",a)};k.prototype.setContent=k.prototype.setContent;k.prototype.getContent=function(){return this.get("content")};
k.prototype.getContent=k.prototype.getContent;function C(a){if(a.j){E(a.j);var c=a.getContent();if(c){"string"==typeof c&&(c=D(c));a.j.appendChild(c);for(var c=a.j.getElementsByTagName("IMG"),d=0,e;e=c[d];d++)google.maps.event.addDomListener(e,"load",function(){var c=!a.get("disableAutoPan");u(a);c&&(0==a.b.length||0==a.d.index)&&a.o()});google.maps.event.trigger(a,"domready")}u(a)}}
function t(a){if(a.b&&a.b.length){for(var c=0,d;d=a.b[c];c++)F(a,d.f);a.d.style.zIndex=a.g;c=x(a);d=y(a)/2;a.d.style.borderBottomWidth=0;a.d.style.paddingBottom=n(d+c)}}
function F(a,c){var d=a.get("backgroundColor"),e=a.get("borderColor"),f=w(a),i=x(a),h=y(a),j=n(-Math.max(h,f)),f=n(f),p=a.g;c.index&&(p-=c.index);var d={cssFloat:"left",position:"relative",cursor:"pointer",backgroundColor:d,border:n(i)+" solid "+e,padding:n(h/2)+" "+n(h),marginRight:j,whiteSpace:"nowrap",borderRadiusTopLeft:f,MozBorderRadiusTopleft:f,webkitBorderTopLeftRadius:f,borderRadiusTopRight:f,MozBorderRadiusTopright:f,webkitBorderTopRightRadius:f,zIndex:p,display:"inline"},m;for(m in d)c.style[m]=
d[m];m=a.get("tabClassName");m!=b&&(c.className+=" "+m)}function G(a,c){c.S=google.maps.event.addDomListener(c,"click",function(){H(a,this)})}k.prototype.na=function(a){(a=this.b[a-1])&&H(this,a.f)};k.prototype.setTabActive=k.prototype.na;
function H(a,c){if(c){var d=y(a)/2,e=x(a);if(a.d){var f=a.d;f.style.zIndex=a.g-f.index;f.style.paddingBottom=n(d);f.style.borderBottomWidth=n(e)}c.style.zIndex=a.g;c.style.borderBottomWidth=0;c.style.marginBottomWidth="-10px";c.style.paddingBottom=n(d+e);a.setContent(a.b[c.index].content);C(a);a.d=c;u(a)}else a.setContent(""),C(a)}k.prototype.ia=function(a){this.set("maxWidth",a)};k.prototype.setMaxWidth=k.prototype.ia;k.prototype.U=function(){u(this)};k.prototype.maxWidth_changed=k.prototype.U;
k.prototype.ha=function(a){this.set("maxHeight",a)};k.prototype.setMaxHeight=k.prototype.ha;k.prototype.T=function(){u(this)};k.prototype.maxHeight_changed=k.prototype.T;k.prototype.ka=function(a){this.set("minWidth",a)};k.prototype.setMinWidth=k.prototype.ka;k.prototype.W=function(){u(this)};k.prototype.minWidth_changed=k.prototype.W;k.prototype.ja=function(a){this.set("minHeight",a)};k.prototype.setMinHeight=k.prototype.ja;k.prototype.V=function(){u(this)};k.prototype.minHeight_changed=k.prototype.V;
k.prototype.H=function(a,c){var d=document.createElement("DIV");d.innerHTML=a;F(this,d);G(this,d);this.i.appendChild(d);this.b.push({label:a,content:c,f:d});d.index=this.b.length-1;d.style.zIndex=this.g-d.index;this.d||H(this,d);d.className=d.className+" "+this.h;u(this)};k.prototype.addTab=k.prototype.H;k.prototype.sa=function(a,c,d){if(this.b.length&&!(0>a||a>=this.b.length)){a=this.b[a];if(c!=b)a.f.innerHTML=a.label=c;if(d!=b)a.content=d;this.d==a.f&&(this.setContent(a.content),C(this));u(this)}};
k.prototype.updateTab=k.prototype.sa;k.prototype.Z=function(a){if(this.b.length&&!(0>a||a>=this.b.length)){var c=this.b[a];c.f.parentNode.removeChild(c.f);google.maps.event.removeListener(c.f.S);this.b.splice(a,1);delete c;for(var d=0,e;e=this.b[d];d++)e.f.index=d;if(c.f==this.d)this.d=this.b[a]?this.b[a].f:this.b[a-1]?this.b[a-1].f:b,H(this,this.d);u(this)}};k.prototype.removeTab=k.prototype.Z;
function I(a,c,d){var e=document.createElement("DIV");e.style.display="inline";e.style.position="absolute";e.style.visibility="hidden";"string"==typeof a?e.innerHTML=a:e.appendChild(a.cloneNode(!0));document.body.appendChild(e);a=new google.maps.Size(e.offsetWidth,e.offsetHeight);if(c&&a.width>c)e.style.width=n(c),a=new google.maps.Size(e.offsetWidth,e.offsetHeight);if(d&&a.height>d)e.style.height=n(d),a=new google.maps.Size(e.offsetWidth,e.offsetHeight);document.body.removeChild(e);delete e;return a}
function u(a){var c=a.get("map");if(c){var d=y(a);x(a);w(a);var e=q(a),f=c.getDiv(),i=2*e,c=f.offsetWidth-i,f=f.offsetHeight-i-A(a),i=0,h=a.get("minWidth")||0,j=a.get("minHeight")||0,p=a.get("maxWidth")||0,m=a.get("maxHeight")||0,p=Math.min(c,p),m=Math.min(f,m),v=0;if(a.b.length)for(var r=0,o;o=a.b[r];r++){var s=I(o.f,p,m);o=I(o.content,p,m);if(h<s.width)h=s.width;v+=s.width;if(j<s.height)j=s.height;if(s.height>i)i=s.height;if(h<o.width)h=o.width;if(j<o.height)j=o.height}else if(r=a.get("content"),
"string"==typeof r&&(r=D(r)),r){o=I(r,p,m);if(h<o.width)h=o.width;if(j<o.height)j=o.height}p&&(h=Math.min(h,p));m&&(j=Math.min(j,m));h=Math.max(h,v);h==v&&(h+=2*d);h=Math.max(h,2*e);h>c&&(h=c);j>f&&(j=f-i);if(a.i)a.t=i,a.i.style.width=n(v);a.e.style.width=n(h);a.e.style.height=n(j)}w(a);d=x(a);c=2;a.b.length&&a.t&&(c+=a.t);e=2+d;(f=a.e)&&f.clientHeight<f.scrollHeight&&(e+=15);a.l.style.right=n(e);a.l.style.top=n(c+d);a.draw()}
function A(a){return a.get("anchor")&&(a=a.get("anchorPoint"))?-1*a.y:0}k.prototype.I=function(){this.draw()};k.prototype.anchorPoint_changed=k.prototype.I;
})();

/* **********************************************
     Begin googlemaps.js
********************************************** */

var markers;
var map;
var infowindow;
var image;
var selected;

function initialize() {
   markers = new Array();

    var mapOptions = {
        disableDefaultUI: true,
        backgroundColor: '#eae4d6',
        minZoom: 2,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map        = new google.maps.Map( document.getElementById( 'map-canvas' ), mapOptions );
    bounds     = new google.maps.LatLngBounds();
    infowindow = new InfoBubble({
        minHeight: 26,
        minWidth: 50,
        map: map,
        shadowStyle: 'transperant',
        backgroundColor: 'transperant',
        borderRadius: 0,
        arrowSize: 0,
        borderWidth: 0,
        disableAutoPan: true,
        hideCloseButton: true,
        arrowPosition: 30,
        backgroundClassName: 'tooltip',
    });

    style = [{
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#C7B9A1"
        }]
    }, {
        "featureType": "water",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#eae4d6"
        }]
    }, {
        "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }];

    map.setOptions({
        styles: style
    });

    image = {
        url: 'assets/img/point.png',
    };

    selected = {
        url: 'assets/img/point-selected.png',
    };

    for( i = 0; i < data.length; i ++ ) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data[i][1], data[i][2]),
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP,
            title: data[i][4]
        });

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
            return function() {
                marker.setIcon(selected);
                infowindow.open();

            }
        })(marker, i));

        google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {
            return function() {
                marker.setIcon(image);
            }
        })(marker, i));

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function() {
                window.location.href = data[i][3];
            }
        })(marker, i));

        markers.push( marker );
    }

    map.fitBounds(bounds);

    setTimeout( addRaster, 200 );
}

function addRaster() {
    var dv = document.createElement("DIV");
    dv.className = "raster";

    var mc = document.getElementById("map-canvas");
    mc.childNodes[0].childNodes[0].childNodes[0].appendChild(dv);
}


/* **********************************************
     Begin script.js
********************************************** */

/*
@codekit-prepend "vendors/jquery.flexslider-min.js"
@codekit-prepend "vendors/infobubble-compiled.js"
@codekit-prepend "vendors/googlemaps.js"
*/

$(document).ready(function() {
	
	$('.flexslider').flexslider({
		pauseOnAction: false,
		directionNav: false,
		slideshowSpeed: 8300,
		animationSpeed: 1300
	});

	$('.content-1').flexslider({
		animation: 'slide',
		directionNav: false,
		slideshowSpeed: 4000,
		animationSpeed: 900
	});

	$('.story-items').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 300,
	    itemMargin: 0,
	    slideshow: false,
	    pauseOnHover: true,
	    controlNav: false,
	    prevText: '',         
		nextText: '', 
		animationLoop: true
	});

	$('body').removeClass('preload');
	$('body').addClass('loaded');
	
	$('.icon-menu').click( function() {
		$('.menu').toggleClass('expanded');
	});

	var closed = localStorage.getItem('closed');

	$('.toggle').click( function() {

		// var key    = 'closed';
		// var closed = localStorage.getItem(key);

		// localStorage.removeItem(key);
		// localStorage[key] = true;

		$('.list').toggleClass('closed');
	});


	$('.slides li').mouseenter( function() {
		i = $(this).data('id');
		marker = markers[i];
		marker.setIcon( selected );
        map.panTo( new google.maps.LatLng( data[i][1], data[i][2] ) );
        infowindow.setContent( data[i][0] );
        infowindow.open( map, marker );
	});

	$('.slides li').mouseout( function() {
		marker.setIcon( image );
	});

});