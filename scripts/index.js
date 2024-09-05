document.addEventListener("DOMContentLoaded",()=>{let c=document.getElementById("search-open-button"),y=document.getElementById("search-activation-button"),n=document.getElementById("clear-input-button"),a=document.getElementById("search"),L=document.querySelector(".user-communication__button-wrapper--cart"),i=!1,h=a.value;function r(t){t.classList.toggle("visually-hidden")}a.value=localStorage.getItem("searchValue")||h,c.addEventListener("click",()=>{r(y),r(a),r(L),c.classList.toggle("icon-button--user-communication-search-opened"),c.classList.toggle("user-communication__button--search-opened"),i=!a.classList.contains("visually-hidden"),i&&a.focus(),n.classList.toggle("visually-hidden",a.value.trim()==="")}),document.addEventListener("click",t=>{i&&!a.contains(t.target)&&!c.contains(t.target)&&!n.contains(t.target)&&(y.classList.add("visually-hidden"),n.classList.add("visually-hidden"),a.classList.add("visually-hidden"),c.classList.remove("icon-button--user-communication-search-opened"),c.classList.remove("user-communication__button--search-opened"),L.classList.remove("visually-hidden"),i=!1)}),n.addEventListener("click",t=>{t.stopPropagation(),a.value="",a.focus(),n.classList.add("visually-hidden"),localStorage.setItem("searchValue",h)}),a.addEventListener("input",()=>{i&&n.classList.toggle("visually-hidden",a.value.trim()===""),a.value.trim()!==""?localStorage.setItem("searchValue",a.value):localStorage.removeItem("searchValue")});let _=document.querySelector(".user-communication__menu-button"),f=document.querySelector(".main-nav__list");_.addEventListener("click",()=>{_.classList.toggle("icon-button--user-communication-menu-opened"),_.classList.toggle("icon-button--user-communication-menu-closed"),f.classList.toggle("main-nav__list--mobile-opened"),f.classList.toggle("main-nav__list--mobile-closed")});let B=document.querySelectorAll(".main-nav__main-list-text--list-down"),S=document.querySelector(".main-nav__sublist"),b=document.querySelector(".main-nav__main-list");B.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),S.classList.toggle("main-nav__sublist--closed"),S.classList.toggle("main-nav__sublist--opened"),b.classList.toggle("main-nav__main-list--mobile-closed"),b.classList.toggle("main-nav__main-list--mobile-opened")})});let I=document.querySelector("header"),w=document.querySelector("main"),k=I.offsetHeight;w.style.paddingTop=`${k}px`;let C=document.querySelector(".hero"),E=document.querySelector(".hero__button"),P=-.2;window.addEventListener("scroll",()=>{let t=window.scrollY,e=t*P;C.style.backgroundPositionY=`${e}px`;let s=(t-15)/90;s=Math.max(0,Math.min(s,1)),E.style.opacity=s,E.style.pointerEvents=s>0?"auto":"none"});let o=document.querySelector(".main-header__category-slider");function q(){let t=o.scrollWidth-o.clientWidth;o.scrollLeft>=t-5?o.style.setProperty("--shadow-end-opacity","0"):o.style.setProperty("--shadow-end-opacity","1"),o.scrollLeft<=5?o.style.setProperty("--shadow-start-opacity","0"):o.style.setProperty("--shadow-start-opacity","1")}q(),o.addEventListener("scroll",q),document.querySelectorAll(".favorite-button").forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("catalog__card-button--favorite-add"),t.classList.toggle("catalog__card-button--favorite-added")})});let d=document.querySelector(".user-communication__button--cart"),u=document.querySelector(".user-communication__button-counter--cart"),m=parseInt(u.textContent,10)||0;function x(){m>0?(d.classList.add("icon-button--user-communication-cart-added"),u.classList.remove("visually-hidden"),u.textContent=m,d.title=`Artikala u korpi: ${m}`):(d.classList.remove("icon-button--user-communication-cart-added"),u.classList.add("visually-hidden"),d.title="Nema artikala u korpi")}x(),document.querySelectorAll(".cart-button").forEach(t=>{t.addEventListener("click",()=>{t.classList.add("catalog__card-button--added-to-cart"),t.classList.remove("catalog__card-button--add-to-cart");let e=t.closest(".catalog__card").querySelector(".catalog__card-message"),s=e.querySelector(".catalog__card-message-text");s.classList.add("catalog__card-message-text--added"),setTimeout(()=>{s.classList.remove("catalog__card-message-text--added")},500),e.classList.contains("catalog__card-message--animate")?(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(()=>{e.classList.remove("catalog__card-message--animate")},4e3)):(e.classList.add("catalog__card-message--animate"),e.timeoutId=setTimeout(()=>{e.classList.remove("catalog__card-message--animate")},4e3));let l=t.querySelector(".catalog__card-button-counter--cart"),g=parseInt(l.textContent,10);l.textContent=g+1,m++,x()})}),document.querySelectorAll(".catalog__card--sale").forEach(t=>{let e=t.querySelector(".catalog__card-properties-item-value--sale"),s=t.querySelector(".catalog__card-image-superscript-text--sale"),l=t.querySelector(".catalog__card-properties-item-value--sale-price");if(e&&s&&l){let g=parseFloat(e.textContent),v=parseFloat(s.textContent.replace(/[^0-9.-]+/g,""));v=Math.abs(v);let A=g*(v/100),p=g-A;p=Math.round(p/10)*10,l.textContent=`${p} rsd`}}),document.querySelectorAll(".faq__card-title").forEach(t=>{t.addEventListener("click",function(){let e=this.nextElementSibling;r(e),this.classList.toggle("faq__card-title--opened")})})});
