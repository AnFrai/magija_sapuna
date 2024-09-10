var L=(()=>{let t=document.getElementById("search-open-button"),n=document.getElementById("search-activation-button"),o=document.getElementById("clear-input-button"),e=document.getElementById("search"),s=document.querySelector(".user-communication__button-wrapper--cart"),l=!1,u=e.value,d=g=>{g.classList.toggle("visually-hidden")};function r(){d(n),d(e),d(s),t.classList.remove("icon-button--user-communication-search-opened"),t.classList.remove("user-communication__button--search-opened"),l=!1,o.classList.add("visually-hidden")}let a=g=>{l&&!e.contains(g.target)&&!t.contains(g.target)&&!o.contains(g.target)&&r()},c=()=>{d(n),d(e),d(s),t.classList.toggle("icon-button--user-communication-search-opened"),t.classList.toggle("user-communication__button--search-opened"),l=!0,l&&e.focus(),o.classList.toggle("visually-hidden",e.value.trim()==="")},i=g=>{g.stopPropagation(),e.value="",e.focus(),o.classList.add("visually-hidden"),localStorage.setItem("searchValue",u)},m=()=>{!e.classList.contains("visually-hidden")&&(o.classList.toggle("visually-hidden",e.value.trim()===""),e.value.trim()!==""?localStorage.setItem("searchValue",e.value):localStorage.removeItem("searchValue"))},_=()=>{document.addEventListener("click",a),t.addEventListener("click",c),o.addEventListener("click",i),e.addEventListener("input",m)};return{init:()=>{e.value=localStorage.getItem("searchValue")||u,_()}}})();var S=(()=>{let t=document.querySelector(".user-communication__menu-button"),n=document.querySelector(".main-nav__list"),o=document.querySelectorAll(".main-nav__main-list-text--list-down"),e=document.querySelector(".main-nav__sublist"),s=document.querySelector(".main-nav__main-list"),l=()=>{t.classList.toggle("icon-button--user-communication-menu-opened"),t.classList.toggle("icon-button--user-communication-menu-closed"),n.classList.toggle("main-nav__list--mobile-opened"),n.classList.toggle("main-nav__list--mobile-closed")},u=a=>{a.preventDefault(),e.classList.toggle("main-nav__sublist--closed"),e.classList.toggle("main-nav__sublist--opened"),s.classList.toggle("main-nav__main-list--mobile-closed"),s.classList.toggle("main-nav__main-list--mobile-opened")},d=()=>{t.addEventListener("click",l),o.forEach(a=>a.addEventListener("click",u))};return{init:()=>{d()}}})();var b={showMessage:n=>{let o=n.closest(".slider-catalog__card").querySelector(".slider-catalog__card-message"),e=o.querySelector(".slider-catalog__card-message-text");e.classList.add("slider-catalog__card-message-text--added"),setTimeout(()=>{e.classList.remove("slider-catalog__card-message-text--added")},500),o.classList.contains("slider-catalog__card-message--animate")?(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(()=>{o.classList.remove("slider-catalog__card-message--animate")},4e3)):(o.classList.add("slider-catalog__card-message--animate"),o.timeoutId=setTimeout(()=>{o.classList.remove("slider-catalog__card-message--animate")},4e3))}};function h(t,n,o){let e="";if(o){let s=new Date;s.setTime(s.getTime()+o*24*60*60*1e3),e=`; expires=${s.toUTCString()}`}document.cookie=`${t}=${n||""}${e}; path=/; SameSite=None; Secure`}function p(t){let n=`${t}=`,o=document.cookie.split(";");for(let e=0;e<o.length;e++){let s=o[e];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(n)===0)return s.substring(n.length,s.length)}return null}var y=(()=>{let t=document.querySelector(".user-communication__button--cart"),n=document.querySelector(".user-communication__button-counter--cart"),o=parseInt(p("cartItemCount"),10)||0,e=()=>{o>0?(t.classList.add("icon-button--user-communication-cart-added"),n.classList.remove("visually-hidden"),n.textContent=o,t.title=`Artikala u korpi: ${o}`):(t.classList.remove("icon-button--user-communication-cart-added"),n.classList.add("visually-hidden"),t.title="Nema artikala u korpi"),h("cartItemCount",o,7)},s=r=>{let a=r.dataset.productId;r.classList.add("slider-catalog__card-button--added-to-cart"),r.classList.remove("slider-catalog__card-button--add-to-cart"),h(`product_${a}_added`,"true",7);let c=parseInt(p(`product_${a}_count`),10)||0;c+=1,h(`product_${a}_count`,c,7);let i=r.querySelector(".slider-catalog__card-button-counter--cart");i.textContent=c;let m=document.querySelector(`#favoriteList [data-product-id="${a}"]`);if(m){let v=m.querySelector(".cart-button");v.classList.add("slider-catalog__card-button--added-to-cart"),v.classList.remove("slider-catalog__card-button--add-to-cart");let g=v.querySelector(".slider-catalog__card-button-counter--cart");g.textContent=c}let _=document.querySelector(`.slider-catalog__list [data-product-id="${a}"]`);if(_){let v=_.querySelector(".cart-button");v.classList.add("slider-catalog__card-button--added-to-cart"),v.classList.remove("slider-catalog__card-button--add-to-cart");let g=v.querySelector(".slider-catalog__card-button-counter--cart");g.textContent=c}o++,e(),b.showMessage(r)},l=()=>{document.querySelectorAll(".cart-button").forEach(a=>{a.addEventListener("click",()=>s(a))})},u=(r,a)=>{p(`product_${a}_added`)==="true"&&(r.classList.add("slider-catalog__card-button--added-to-cart"),r.classList.remove("slider-catalog__card-button--add-to-cart"))};return{init:()=>{l(),o=parseInt(p("cartItemCount"),10)||0,e(),document.querySelectorAll(".cart-button").forEach(a=>{let c=a.dataset.productId,i=parseInt(p(`product_${c}_count`),10)||0,m=a.querySelector(".slider-catalog__card-button-counter--cart");m.textContent=i,u(a,c)})},handleCartAddition:s}})();var q=(()=>{let t=()=>{let o=document.querySelector("header"),e=document.querySelector("main");if(o&&e){let s=o.offsetHeight;e.style.paddingTop=`${s}px`}};return{init:()=>{t(),window.addEventListener("resize",t)}}})();function f(){let t=document.getElementById("favoriteList"),n=document.querySelector(".no-articles");t&&n&&(t.children.length>0?n.classList.add("visually-hidden"):n.classList.remove("visually-hidden"))}var E=(()=>{let t=()=>JSON.parse(localStorage.getItem("favorites"))||[],n=a=>{localStorage.setItem("favorites",JSON.stringify(a))},o=a=>{let c=t();c=c.filter(_=>_!==a),n(c);let i=document.querySelector(`#favoriteList [data-product-id="${a}"]`);i&&i.remove();let m=document.querySelector(`.slider-catalog__list [data-product-id="${a}"] .favorite-button`);m&&(m.classList.remove("slider-catalog__card-button--favorite-added"),m.classList.add("slider-catalog__card-button--favorite-add")),f()},e=(a,c)=>{let i=document.getElementById("favoriteList"),m=c.cloneNode(!0),_=m.querySelector(".favorite-button");_.classList.remove("slider-catalog__card-button--favorite-add"),_.classList.add("slider-catalog__card-button--favorite-added"),_.addEventListener("click",()=>o(a));let v=m.querySelector(".cart-button");v.addEventListener("click",()=>y.handleCartAddition(v)),i.appendChild(m),f()},s=(a,c)=>{let i=t();i.includes(a)||(i.push(a),n(i),e(a,c))},l=a=>{let c=a.closest(".slider-catalog__card"),i=c.querySelector(".cart-button").dataset.productId;a.classList.contains("slider-catalog__card-button--favorite-added")?o(i):(s(i,c),a.classList.remove("slider-catalog__card-button--favorite-add"),a.classList.add("slider-catalog__card-button--favorite-added"))},u=()=>{document.querySelectorAll(".favorite-button").forEach(c=>{c.addEventListener("click",()=>l(c))})},d=()=>{t().forEach(c=>{let i=document.querySelector(`[data-product-id="${c}"]`);i&&(i.querySelector(".favorite-button").classList.remove("slider-catalog__card-button--favorite-add"),i.querySelector(".favorite-button").classList.add("slider-catalog__card-button--favorite-added"),e(c,i))}),f()};return{init:()=>{u(),d()}}})();var x=(()=>{let t=()=>{document.querySelectorAll(".slider-catalog__card--sale").forEach(e=>{let s=e.querySelector(".slider-catalog__card-properties-item-value--sale"),l=e.querySelector(".slider-catalog__card-image-superscript-text--sale"),u=e.querySelector(".slider-catalog__card-properties-item-value--sale-price");if(s&&l&&u){let d=parseFloat(s.textContent),r=parseFloat(l.textContent.replace(/[^0-9.-]+/g,""));r=Math.abs(r);let a=d*(r/100),c=d-a;c=Math.round(c/10)*10,u.textContent=`${c} rsd`}})};return{init:()=>{t()}}})();var C=(()=>{let t=document.querySelector(".main-header__category-slider"),n=()=>{let s=t.scrollWidth-t.clientWidth;t.scrollLeft>=s-5?t.style.setProperty("--shadow-end-opacity","0"):t.style.setProperty("--shadow-end-opacity","1"),t.scrollLeft<=5?t.style.setProperty("--shadow-start-opacity","0"):t.style.setProperty("--shadow-start-opacity","1")},o=()=>{t.addEventListener("scroll",n)};return{init:()=>{n(),o()}}})();var M=(()=>{let t=document.querySelector(".hero"),n=document.querySelector(".hero__button"),o=-.2,e=()=>{let u=window.scrollY,d=u*o;t.style.backgroundPositionY=`${d}px`;let r=(u-15)/90;r=Math.max(0,Math.min(r,1)),n.style.opacity=r,n.style.pointerEvents=r>0?"auto":"none"},s=()=>{window.addEventListener("scroll",e)};return{init:()=>{s()}}})();var I=(()=>{let t=s=>{s.classList.toggle("visually-hidden")},n=s=>{let l=s.nextElementSibling;t(l),s.classList.toggle("faq__card-title--opened")},o=()=>{document.querySelectorAll(".faq__card-title").forEach(l=>{l.addEventListener("click",()=>n(l))})};return{init:()=>{o()}}})();document.addEventListener("DOMContentLoaded",()=>{L.init(),S.init(),y.init(),q.init(),E.init(),x.init(),f(),C.init(),M.init(),I.init()});