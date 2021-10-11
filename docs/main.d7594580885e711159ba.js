(()=>{"use strict";var e,t={771:(e,t,n)=>{n(90),n(229);var r=n(442),o=n.n(r);n(105),n(31);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.links=document.querySelectorAll(".main-nav__link"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.links.forEach((function(t){t.addEventListener("click",(function(t){return e.scroll(t)}))}))}},{key:"scroll",value:function(e){e.preventDefault();var t="#"===e.currentTarget.getAttribute("href")?"header":e.currentTarget.getAttribute("href"),n=document.querySelector(t).offsetTop-128,r=window.pageYOffset,o=n-r,i=null;window.requestAnimationFrame((function e(t){i||(i=t);var n,s,l,a=t-i;window.scrollTo(0,(n=a,s=r,l=o,(n/=500)<1?l/2*n*n*n+s:l/2*((n-=2)*n*n+2)+s)),a<1e3&&window.requestAnimationFrame(e)}))}}])&&i(t.prototype,n),e}();var l=n(493),a=n.n(l),c=n(279),u=n.n(c);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lastScrollTop=0,this.siteHeader=document.querySelector(".header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",a()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",u()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection();var t=window.pageYOffset||document.documentElement.scrollTop;t>this.lastScrollTop?this.siteHeader.style.top="-130px":this.siteHeader.style.top="0px",this.lastScrollTop=t,this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".main-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&d(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mobileMenu=document.querySelector(".header__mobile-menu"),this.mobileMenuIcon=document.querySelector(".header__mobile-menu-icon"),this.overlay=document.querySelector(".header__overlay"),this.nav=document.querySelector(".main-nav"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.mobileMenu.addEventListener("click",(function(){return e.toggleMenu()})),this.nav.addEventListener("click",(function(){return e.navLinks()}))}},{key:"toggleMenu",value:function(){this.mobileMenuIcon.classList.toggle("header__mobile-menu-icon--close"),this.overlay.classList.contains("header__overlay--open")?(document.body.style.overflow="visible",this.overlay.classList.remove("header__overlay--open"),this.overlay.classList.add("header__overlay--close")):(document.body.style.overflow="hidden",this.overlay.classList.add("header__overlay--open"),this.overlay.classList.remove("header__overlay--close"))}},{key:"navLinks",value:function(){this.overlay.classList.remove("header__overlay--open"),this.overlay.classList.add("header__overlay--close"),this.mobileMenuIcon.classList.remove("header__mobile-menu-icon--close"),document.body.style.overflow="visible"}}])&&f(t.prototype,n),e}();new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=document.querySelectorAll(".testimonial .main-carousel"),r=document.querySelector(" .testimonial #next"),i=document.querySelector(" .testimonial #prev");this.nextSlideImg=document.querySelector(" .testimonial  .testimonial__right-arrow"),this.previousSlideImg=document.querySelector(" .testimonial  .testimonial__left-arrow"),n.forEach((function(e){var n=new(o())(e,{cellAlign:"left",contain:!0,wrapAround:!1,prevNextButtons:!1,pageDots:!1,autoPlay:!1,fade:!0,draggable:!1});r.addEventListener("click",(function(){n.next()})),i.addEventListener("click",(function(){n.previous()})),n.on("select",(function(){n.selectedIndex-1<0?(t.previousSlideImg.src="./assets/images/testimonial--left-disable-arrow.png",t.nextSlideImg.src="./assets/images/testimonial--right-active-arrow.png"):n.selectedIndex+1==n.slides.length?(t.previousSlideImg.src="./assets/images/testimonial--left-active-arrow.png",t.nextSlideImg.src="./assets/images/testimonial--right-disable-arrow.png"):(t.previousSlideImg.src="./assets/images/testimonial--left-active-arrow.png",t.nextSlideImg.src="./assets/images/testimonial--right-active-arrow.png")}))}))},new s,new v,new h}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],l=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[a])))?n.splice(a--,1):(l=!1,i<s&&(s=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[s,l,a]=n,c=0;if(s.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(a)var u=a(r)}for(t&&t(n);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[s[c]]=0;return r.O(u)},n=self.webpackChunkwebpack_website_setup=self.webpackChunkwebpack_website_setup||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[637],(()=>r(771)));o=r.O(o)})();