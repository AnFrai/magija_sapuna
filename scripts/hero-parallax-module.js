var i=(()=>{let e=document.querySelector(".hero"),t=document.querySelector(".hero__button"),r=-.2,c=()=>{let n=window.scrollY,s=n*r;e.style.backgroundPositionY=`${s}px`;let o=(n-15)/90;o=Math.max(0,Math.min(o,1)),t.style.opacity=o,t.style.pointerEvents=o>0?"auto":"none"},l=()=>{window.addEventListener("scroll",c)};return{init:()=>{l()}}})();export{i as heroParallaxModule};
