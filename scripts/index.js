document.addEventListener("DOMContentLoaded",()=>{let o=document.getElementById("search-open-button"),r=document.getElementById("search-activation-button"),d=document.getElementById("search"),u=document.querySelector(".user-communication__button-wrapper--cart");o.addEventListener("click",()=>{r.classList.toggle("visually-hidden"),d.classList.toggle("visually-hidden"),o.classList.toggle("icon-button--user-communication-search-opened"),o.classList.toggle("user-communication__button--search-opened"),u.classList.toggle("visually-hidden")});let s=document.querySelector(".user-communication__menu-button"),c=document.querySelector(".main-nav__list");s.addEventListener("click",()=>{s.classList.toggle("icon-button--header-menu-button-opened"),s.classList.toggle("icon-button--header-menu-button-closed"),c.classList.toggle("main-nav__list--mobile-opened"),c.classList.toggle("main-nav__list--mobile-closed")});let m=document.querySelectorAll(".main-nav__main-list-text--list-down"),a=document.querySelector(".main-nav__sublist"),l=document.querySelector(".main-nav__main-list");m.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),a.classList.toggle("main-nav__sublist--closed"),a.classList.toggle("main-nav__sublist--opened"),l.classList.toggle("main-nav__main-list--mobile-closed"),l.classList.toggle("main-nav__main-list--mobile-opened")})});let g=document.querySelector("header"),_=document.querySelector("main"),y=g.offsetHeight;_.style.paddingTop=`${y}px`;let L=document.querySelector(".hero"),h=-.7;window.addEventListener("scroll",()=>{let n=window.scrollY*h;L.style.backgroundPositionY=`${n}px`});let e=document.querySelector(".main-header__category-slider");function i(){let t=e.scrollWidth-e.clientWidth;e.scrollLeft>=t-5?e.style.setProperty("--shadow-end-opacity","0"):e.style.setProperty("--shadow-end-opacity","1"),e.scrollLeft<=5?e.style.setProperty("--shadow-start-opacity","0"):e.style.setProperty("--shadow-start-opacity","1")}i(),e.addEventListener("scroll",i),document.querySelectorAll(".favorite-button").forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("catalog__card-button--favorite-add"),t.classList.toggle("catalog__card-button--favorite-added")})}),document.querySelectorAll(".cart-button").forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("catalog__card-button--add-to-cart"),t.classList.toggle("catalog__card-button--added-to-cart")})})});