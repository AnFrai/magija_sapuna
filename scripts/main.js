var g=(()=>{let t=document.getElementById("search-open-button"),a=document.getElementById("search-activation-button"),s=document.getElementById("clear-input-button"),e=document.getElementById("search"),o=document.querySelector(".user-communication__button-wrapper--cart"),i=!1,l=e.value,c=u=>{u.classList.toggle("visually-hidden")},n=u=>{i&&!e.contains(u.target)&&!t.contains(u.target)&&!s.contains(u.target)&&(c(a),c(e),c(s),c(o),t.classList.remove("icon-button--user-communication-search-opened"),t.classList.remove("user-communication__button--search-opened"),i=!1)},r=()=>{c(a),c(e),c(o),t.classList.toggle("icon-button--user-communication-search-opened"),t.classList.toggle("user-communication__button--search-opened"),i=!e.classList.contains("visually-hidden"),i&&e.focus(),s.classList.toggle("visually-hidden",e.value.trim()==="")},d=u=>{u.stopPropagation(),e.value="",e.focus(),s.classList.add("visually-hidden"),localStorage.setItem("searchValue",l)},m=()=>{!e.classList.contains("visually-hidden")&&(s.classList.toggle("visually-hidden",e.value.trim()===""),e.value.trim()!==""?localStorage.setItem("searchValue",e.value):localStorage.removeItem("searchValue"))},S=()=>{document.addEventListener("click",n),t.addEventListener("click",r),s.addEventListener("click",d),e.addEventListener("input",m)};return{init:()=>{e.value=localStorage.getItem("searchValue")||l,S()}}})();var _=(()=>{let t=document.querySelector(".user-communication__menu-button"),a=document.querySelector(".main-nav__list"),s=document.querySelectorAll(".main-nav__main-list-text--list-down"),e=document.querySelector(".main-nav__sublist"),o=document.querySelector(".main-nav__main-list"),i=()=>{t.classList.toggle("icon-button--user-communication-menu-opened"),t.classList.toggle("icon-button--user-communication-menu-closed"),a.classList.toggle("main-nav__list--mobile-opened"),a.classList.toggle("main-nav__list--mobile-closed")},l=r=>{r.preventDefault(),e.classList.toggle("main-nav__sublist--closed"),e.classList.toggle("main-nav__sublist--opened"),o.classList.toggle("main-nav__main-list--mobile-closed"),o.classList.toggle("main-nav__main-list--mobile-opened")},c=()=>{t.addEventListener("click",i),s.forEach(r=>r.addEventListener("click",l))};return{init:()=>{c()}}})();var p=(()=>{let t=document.querySelector(".user-communication__button--cart"),a=document.querySelector(".user-communication__button-counter--cart"),s=parseInt(a.textContent,10)||0,e=()=>{s>0?(t.classList.add("icon-button--user-communication-cart-added"),a.classList.remove("visually-hidden"),a.textContent=s,t.title=`Artikala u korpi: ${s}`):(t.classList.remove("icon-button--user-communication-cart-added"),a.classList.add("visually-hidden"),t.title="Nema artikala u korpi")},o=c=>{c.classList.add("catalog__card-button--added-to-cart"),c.classList.remove("catalog__card-button--add-to-cart");let n=c.closest(".catalog__card").querySelector(".catalog__card-message"),r=n.querySelector(".catalog__card-message-text");r.classList.add("catalog__card-message-text--added"),setTimeout(()=>{r.classList.remove("catalog__card-message-text--added")},500),n.classList.contains("catalog__card-message--animate")?(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(()=>{n.classList.remove("catalog__card-message--animate")},4e3)):(n.classList.add("catalog__card-message--animate"),n.timeoutId=setTimeout(()=>{n.classList.remove("catalog__card-message--animate")},4e3));let d=c.querySelector(".catalog__card-button-counter--cart"),m=parseInt(d.textContent,10);d.textContent=m+1,s++,e()},i=()=>{document.querySelectorAll(".cart-button").forEach(n=>n.addEventListener("click",()=>o(n)))};return{init:()=>{i(),e()}}})();var v=(()=>{let t=e=>{e.classList.toggle("catalog__card-button--favorite-add"),e.classList.toggle("catalog__card-button--favorite-added")},a=()=>{document.querySelectorAll(".favorite-button").forEach(o=>{o.addEventListener("click",()=>t(o))})};return{init:()=>{a()}}})();var h=(()=>{let t=()=>{document.querySelectorAll(".catalog__card--sale").forEach(e=>{let o=e.querySelector(".catalog__card-properties-item-value--sale"),i=e.querySelector(".catalog__card-image-superscript-text--sale"),l=e.querySelector(".catalog__card-properties-item-value--sale-price");if(o&&i&&l){let c=parseFloat(o.textContent),n=parseFloat(i.textContent.replace(/[^0-9.-]+/g,""));n=Math.abs(n);let r=c*(n/100),d=c-r;d=Math.round(d/10)*10,l.textContent=`${d} rsd`}})};return{init:()=>{t()}}})();var y=(()=>{let t=document.querySelector(".main-header__category-slider"),a=()=>{let o=t.scrollWidth-t.clientWidth;t.scrollLeft>=o-5?t.style.setProperty("--shadow-end-opacity","0"):t.style.setProperty("--shadow-end-opacity","1"),t.scrollLeft<=5?t.style.setProperty("--shadow-start-opacity","0"):t.style.setProperty("--shadow-start-opacity","1")},s=()=>{t.addEventListener("scroll",a)};return{init:()=>{a(),s()}}})();var L=(()=>{let t=document.querySelector(".hero"),a=document.querySelector(".hero__button"),s=-.2,e=()=>{let l=window.scrollY,c=l*s;t.style.backgroundPositionY=`${c}px`;let n=(l-15)/90;n=Math.max(0,Math.min(n,1)),a.style.opacity=n,a.style.pointerEvents=n>0?"auto":"none"},o=()=>{window.addEventListener("scroll",e)};return{init:()=>{o()}}})();var f=(()=>{let t=o=>{o.classList.toggle("visually-hidden")},a=o=>{let i=o.nextElementSibling;t(i),o.classList.toggle("faq__card-title--opened")},s=()=>{document.querySelectorAll(".faq__card-title").forEach(i=>{i.addEventListener("click",()=>a(i))})};return{init:()=>{s()}}})();document.addEventListener("DOMContentLoaded",()=>{g.init(),_.init(),p.init(),v.init(),h.init(),y.init(),L.init(),f.init()});
