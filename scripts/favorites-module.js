var L={showMessage:c=>{let o=c.closest(".catalog__card").querySelector(".catalog__card-message"),n=o.querySelector(".catalog__card-message-text");n.classList.add("catalog__card-message-text--added"),setTimeout(()=>{n.classList.remove("catalog__card-message-text--added")},500),o.classList.contains("catalog__card-message--animate")?(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(()=>{o.classList.remove("catalog__card-message--animate")},4e3)):(o.classList.add("catalog__card-message--animate"),o.timeoutId=setTimeout(()=>{o.classList.remove("catalog__card-message--animate")},4e3))}};function g(r,c,o){let n="";if(o){let s=new Date;s.setTime(s.getTime()+o*24*60*60*1e3),n=`; expires=${s.toUTCString()}`}document.cookie=`${r}=${c||""}${n}; path=/`}function m(r){let c=`${r}=`,o=document.cookie.split(";");for(let n=0;n<o.length;n++){let s=o[n];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(c)===0)return s.substring(c.length,s.length)}return null}var S=(()=>{let r=document.querySelector(".user-communication__button--cart"),c=document.querySelector(".user-communication__button-counter--cart"),o=parseInt(m("cartItemCount"),10)||0,n=()=>{o>0?(r.classList.add("icon-button--user-communication-cart-added"),c.classList.remove("visually-hidden"),c.textContent=o,r.title=`Artikala u korpi: ${o}`):(r.classList.remove("icon-button--user-communication-cart-added"),c.classList.add("visually-hidden"),r.title="Nema artikala u korpi"),g("cartItemCount",o,7)},s=d=>{let t=d.dataset.productId;d.classList.add("catalog__card-button--added-to-cart"),d.classList.remove("catalog__card-button--add-to-cart"),g(`product_${t}_added`,"true",7);let e=parseInt(m(`product_${t}_count`),10)||0;e+=1,g(`product_${t}_count`,e,7);let a=d.querySelector(".catalog__card-button-counter--cart");a.textContent=e;let i=document.querySelector(`#favoriteList [data-product-id="${t}"]`);if(i){let l=i.querySelector(".catalog__card-button-counter--cart");l.textContent=e}let u=document.querySelector(`.catalog__list [data-product-id="${t}"]`);if(u){let l=u.querySelector(".catalog__card-button-counter--cart");l.textContent=e}o++,n(),L.showMessage(d)},v=()=>{document.querySelectorAll(".cart-button").forEach(t=>{t.addEventListener("click",()=>s(t))})},f=(d,t)=>{m(`product_${t}_added`)==="true"&&(d.classList.add("catalog__card-button--added-to-cart"),d.classList.remove("catalog__card-button--add-to-cart"))};return{init:()=>{v(),o=parseInt(m("cartItemCount"),10)||0,n(),document.querySelectorAll(".cart-button").forEach(t=>{let e=t.dataset.productId,a=parseInt(m(`product_${e}_count`),10)||0,i=t.querySelector(".catalog__card-button-counter--cart");i.textContent=a,f(t,e)})},handleCartAddition:s}})();function _(){let r=document.getElementById("favoriteList"),c=document.querySelector(".catalog-favorite__message");r&&c&&(r.children.length>0?c.classList.add("visually-hidden"):c.classList.remove("visually-hidden"))}var k=(()=>{let r=()=>JSON.parse(localStorage.getItem("favorites"))||[],c=t=>{localStorage.setItem("favorites",JSON.stringify(t))},o=t=>{let e=r();e=e.filter(u=>u!==t),c(e);let a=document.querySelector(`#favoriteList [data-product-id="${t}"]`);a&&a.remove();let i=document.querySelector(`.catalog__list [data-product-id="${t}"] .favorite-button`);i&&(i.classList.remove("catalog__card-button--favorite-added"),i.classList.add("catalog__card-button--favorite-add")),_()},n=(t,e)=>{let a=document.getElementById("favoriteList"),i=e.cloneNode(!0),u=i.querySelector(".favorite-button");u.classList.remove("catalog__card-button--favorite-add"),u.classList.add("catalog__card-button--favorite-added"),u.addEventListener("click",()=>o(t));let l=i.querySelector(".cart-button");l.addEventListener("click",()=>S.handleCartAddition(l)),a.appendChild(i),_()},s=(t,e)=>{let a=r();a.includes(t)||(a.push(t),c(a),n(t,e))},v=t=>{let e=t.closest(".catalog__card"),a=e.querySelector(".cart-button").dataset.productId;t.classList.contains("catalog__card-button--favorite-added")?o(a):(s(a,e),t.classList.remove("catalog__card-button--favorite-add"),t.classList.add("catalog__card-button--favorite-added"))},f=()=>{document.querySelectorAll(".favorite-button").forEach(e=>{e.addEventListener("click",()=>v(e))})},p=()=>{r().forEach(e=>{let a=document.querySelector(`[data-product-id="${e}"]`);a&&(a.querySelector(".favorite-button").classList.remove("catalog__card-button--favorite-add"),a.querySelector(".favorite-button").classList.add("catalog__card-button--favorite-added"),n(e,a))}),_()};return{init:()=>{f(),p()}}})();export{k as favoritesModule};
