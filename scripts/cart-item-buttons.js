function s(n){let a=document.querySelectorAll(".cart__checkbox-radio-container-dropdown"),i=document.querySelectorAll(".cart__quantity-control");a.forEach(t=>{t.addEventListener("click",function(){this.closest("li").querySelectorAll(".cart__option-wrapper").forEach(r=>{r.classList.toggle("visually-hidden")}),t.classList.toggle("cart__checkbox-radio-container-dropdown--opened")})}),i.forEach(t=>{let c=t.querySelector(".cart__quantity-button--increase"),r=t.querySelector(".cart__quantity-button--decrease"),e=t.querySelector(".cart__quantity-input");c.addEventListener("click",()=>{let o=parseInt(e.value,10);e.value=o+1,typeof n=="function"&&n()}),r.addEventListener("click",()=>{let o=parseInt(e.value,10);o>1&&(e.value=o-1,typeof n=="function"&&n())})})}export{s as initCartDropdowns};