webpackJsonp([0],[,,,,function(t,e,n){e=t.exports=n(6)(),e.push([t.i,".part{width:100%;height:921px;overflow:hidden}.part0{background:#c99}.part1{background:#846c68}.part2{background:#cf3}.part3{background:#cf9}.part4{background:#f99}.part5{background:#cff}.footer{width:100%;height:60px;background:#000}.right-nav{position:fixed;right:0;top:100px;width:200px}.right-nav li{width:100px;padding:20px 0;border:1px solid #f30;margin:4px auto;text-align:center;color:#000;list-style:none;cursor:pointer}.right-nav li.current{background:#f30;color:#fff}",""])},,,function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]);var a=n(2)(o,{});o.locals&&(t.exports=o.locals),o.locals||t.hot.accept(4,function(){var e=n(4);"string"==typeof e&&(e=[[t.i,e,""]]),a(e)}),t.hot.dispose(function(){a()})},,function(t,e,n){"use strict";var o={sayHello:function(t){console.log(t)}};t.exports=o},function(t,e,n){"use strict";var o,a,i;"function"==typeof Symbol&&Symbol.iterator;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
!function(r){a=[n(0)],o=r,void 0!==(i="function"==typeof o?o.apply(e,a):o)&&(t.exports=i)}(function(t){function e(e){var r=e||window.event,l=s.call(arguments,1),c=0,u=0,h=0,d=0;if(e=t.event.fix(r),e.type="mousewheel","detail"in r&&(h=r.detail*-1),"wheelDelta"in r&&(h=r.wheelDelta),"wheelDeltaY"in r&&(h=r.wheelDeltaY),"wheelDeltaX"in r&&(u=r.wheelDeltaX*-1),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(u=h*-1,h=0),c=0===h?u:h,"deltaY"in r&&(h=r.deltaY*-1,c=h),"deltaX"in r&&(u=r.deltaX,0===h&&(c=u*-1)),0!==h||0!==u){if(1===r.deltaMode){var p=t.data(this,"mousewheel-line-height");c*=p,h*=p,u*=p}else if(2===r.deltaMode){var f=t.data(this,"mousewheel-page-height");c*=f,h*=f,u*=f}return d=Math.max(Math.abs(h),Math.abs(u)),(!i||d<i)&&(i=d,o(r,d)&&(i/=40)),o(r,d)&&(c/=40,u/=40,h/=40),c=Math[c>=1?"floor":"ceil"](c/i),u=Math[u>=1?"floor":"ceil"](u/i),h=Math[h>=1?"floor":"ceil"](h/i),e.deltaX=u,e.deltaY=h,e.deltaFactor=i,e.deltaMode=0,l.unshift(e,c,u,h),a&&clearTimeout(a),a=setTimeout(n,200),(t.event.dispatch||t.event.handle).apply(this,l)}}function n(){i=null}function o(t,e){return u.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120==0}var a,i,r=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],l="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],s=Array.prototype.slice;if(t.event.fixHooks)for(var c=r.length;c;)t.event.fixHooks[r[--c]]=t.event.mouseHooks;var u=t.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var n=l.length;n;)this.addEventListener(l[--n],e,!1);else this.onmousewheel=e;t.data(this,"mousewheel-line-height",u.getLineHeight(this)),t.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=l.length;t;)this.removeEventListener(l[--t],e,!1);else this.onmousewheel=null},getLineHeight:function(e){return parseInt(t(e)["offsetParent"in t.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(e){return t(e).height()},settings:{adjustOldDeltas:!0}};t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})})},,function(t,e,n){"use strict";(function(e){function n(){this.partNum=0,this.partTop=[],this.partLength=e(".part").length,this.canScroll=!0;for(var t=0;t<this.partLength;t++)this.partTop[t]=e(".part").eq(t).offset().top;this.init()}n.prototype={init:function(){var t,n=this.partTop,o=this;if(e(".part").mousewheel(function(t,e){return o.loghandle(t,e),!1}),e(window).scroll(function(){t=e(window).scrollTop(),e(".right-nav").show(),e(".right-nav ul li").removeClass("current"),t<=n[0]?(o.partNum=0,e(".nav01").addClass("current")):t>n[0]&&t<=n[1]?(o.partNum=1,e(".nav02").addClass("current")):t>n[1]&&t<=n[2]?(o.partNum=2,e(".nav03").addClass("current")):t>n[2]&&t<=n[3]?(o.partNum=3,e(".nav04").addClass("current")):t>n[3]&&(o.partNum=4,e(".nav05").addClass("current")),e(document).scrollTop()>=e(document).height()-e(window).height()&&(o.partNum=4,e(".right-nav ul li").removeClass("current"),e(".nav05").addClass("current")),e(".part"+(o.partNum+1)).addClass("active").siblings().removeClass("active")}),o.right_nav_scroll(),"ontouchstart"in window){var a=0,i=0,r=0,l=0;e(".pages").length,e(window)[0].addEventListener("touchstart",function(t){a=t.touches[0].clientX,i=t.touches[0].clientY,_flagX=a,l=i}),e(window)[0].addEventListener("touchmove",function(t){t.preventDefault(),r=t.touches[0].clientY,_flagX=0,l=r}),e(window)[0].addEventListener("touchend",function(t){var e=r-i;return Math.abs(e),Math.abs(l-i)>=10&&(e<0?(console.log("down"),o.scroll_down()):(console.log("up"),o.scroll_up())),!1})}},right_nav_scroll:function(){var t=this;e(".right-nav ul li").click(function(){var n=e(this).index(),o=t.partTop[n];e("html,body").animate({scrollTop:o})})},scroll_up:function(){var t=this;if(1==t.canScroll&&t.partNum>0){t.canScroll=!1,t.partNum--;var n=e(".part").eq(t.partNum).offset().top;e("html,body").animate({scrollTop:n},function(){t.canScroll=!0})}},scroll_down:function(){var t=this;if(1==t.canScroll&&t.partNum<this.partLength-1){t.canScroll=!1,t.partNum++;var n=e(".part").eq(t.partNum).offset().top;e("html,body").animate({scrollTop:n},function(){t.canScroll=!0})}},loghandle:function(t,e){e>0&&this.scroll_up(),e<0&&this.scroll_down()}},t.exports=n}).call(e,n(0))},,function(t,e,n){"use strict";var o={loadScript:function(t){var e=document.createElement("script");e.type="text/script",e.src=t,document.body.appendChild(e)},loadLink:function(t){var e=document.createElement("link"),n=document.getElementsByTagName("head")[0];e.type="text/css",e.href=t,n.appendChild(e)}};t.exports=o},,function(t,e,n){"use strict";(function(t){function e(t){return t&&t.__esModule?t:{default:t}}n(1),n(14);var o=n(9),a=e(o);n(7),n(10);var i=n(12),r=e(i);console.log(a.default),function(t){console.log(t)}("hello world!!!!!!");new r.default;t.ajax({type:"post",url:"/api/test",data:{},dataType:"json",success:function(t){console.log(t.status)}})}).call(e,n(0))}],[16]);