var c={showMessage:a=>{let e=a.closest(".slider-catalog__card").querySelector(".slider-catalog__card-message"),s=e.querySelector(".slider-catalog__card-message-text");s.classList.add("slider-catalog__card-message-text--added"),setTimeout(()=>{s.classList.remove("slider-catalog__card-message-text--added")},500),e.classList.contains("slider-catalog__card-message--animate")?(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(()=>{e.classList.remove("slider-catalog__card-message--animate")},4e3)):(e.classList.add("slider-catalog__card-message--animate"),e.timeoutId=setTimeout(()=>{e.classList.remove("slider-catalog__card-message--animate")},4e3))}};export{c as animationModule};
