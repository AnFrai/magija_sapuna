var p=(()=>{let s=document.getElementById("search-open-button"),o=document.getElementById("search-activation-button"),n=document.getElementById("clear-input-button"),e=document.getElementById("search"),i=document.querySelector(".user-communication__button-wrapper--cart"),c=!1,l=e.value,a=t=>{t.classList.toggle("visually-hidden")};function u(){a(o),a(e),a(i),s.classList.remove("icon-button--user-communication-search-opened"),s.classList.remove("user-communication__button--search-opened"),c=!1,n.classList.add("visually-hidden")}let r=t=>{c&&!e.contains(t.target)&&!s.contains(t.target)&&!n.contains(t.target)&&u()},d=()=>{a(o),a(e),a(i),s.classList.toggle("icon-button--user-communication-search-opened"),s.classList.toggle("user-communication__button--search-opened"),c=!0,c&&e.focus(),n.classList.toggle("visually-hidden",e.value.trim()==="")},h=t=>{t.stopPropagation(),e.value="",e.focus(),n.classList.add("visually-hidden"),localStorage.setItem("searchValue",l)},m=()=>{!e.classList.contains("visually-hidden")&&(n.classList.toggle("visually-hidden",e.value.trim()===""),e.value.trim()!==""?localStorage.setItem("searchValue",e.value):localStorage.removeItem("searchValue"))},g=()=>{document.addEventListener("click",r),s.addEventListener("click",d),n.addEventListener("click",h),e.addEventListener("input",m)};return{init:()=>{e.value=localStorage.getItem("searchValue")||l,g()}}})();export{p as searchModule};
