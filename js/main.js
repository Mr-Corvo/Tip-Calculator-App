document.querySelector("body").classList.remove("no-js"),document.querySelector(".notification-turn-js").remove();var body=document.querySelector("body"),wrapper=document.querySelector(".wrapper");function calculator(){let e=document.querySelector(".calculator-block__input_bill"),t=document.querySelectorAll(".calculator-block__options-body"),r=document.querySelector(".calculator-block__input_options"),o=document.querySelector(".calculator-block__input_number"),l=document.querySelector(".calculator-block__button"),a=document.querySelector(".calculator-block__number_1 span"),n=document.querySelector(".calculator-block__number_2 span");for(let s=0;s<t.length;s++){let d=t[s];function c(){i(),this!=r&&u()}function i(){let t=document.querySelector(".calculator-block__options-body._active");if(null==document.querySelector("_error")&&"0"!=e.value&&0!=e.value&&"0"!=o.value&&0!=o.value&&t){let l=e.value,c=t.getAttribute("data-value-opt")??r.value,i=o.value,u=l*(c/100)/i;const s=new Intl.NumberFormat("en-US",{maximumFractionDigits:2});let d=l/i+u;"NaN"!=s.format(u)&&"NaN"!=s.format(d)&&"∞"!=s.format(u)&&"∞"!=s.format(d)&&(a.innerHTML=s.format(u),n.innerHTML=s.format(d))}let l=document.querySelectorAll("[data-error]");for(let e=0;e<l.length;e++){let t=l[e];if("0"==t.value){t.classList.add("_error"),t.parentElement.classList.add("_error");let e=t.parentElement.parentElement.querySelector(".calculator-block__error");e&&t.parentElement.parentElement.removeChild(e),t.parentElement.parentElement.classList.add("calculator-block__item_error");let r=t.getAttribute("data-error");r&&""!=r&&t.parentElement.insertAdjacentHTML("beforebegin",'<div class="calculator-block__error form__error">'+r+"</div>")}else{t.classList.remove("_error"),t.parentElement.classList.remove("_error"),t.parentElement.parentElement.classList.remove("calculator-block__item_error");let e=t.parentElement.parentElement.querySelector(".calculator-block__error");e&&t.parentElement.parentElement.removeChild(e)}}}function u(){l.classList.add("_active"),0!=e.value||0!=o.value||0!=r.value||d.classList.contains("_active")||l.classList.remove("_active")}d.addEventListener("click",(function(e){d.classList.add("_active"),d.classList.contains("_active")&&(tipActive=!0);let t=d.closest(".calculator-block__option").querySelectorAll(".calculator-block__options-body");for(let e=0;e<t.length;e++){let r=t[e];r!=d&&r.classList.remove("_active")}})),d.addEventListener("click",c),e.addEventListener("keyup",c),r.addEventListener("keyup",i),r.addEventListener("keyup",u),o.addEventListener("keyup",c),r.addEventListener("click",i)}l.addEventListener("click",(function(t){e.value="",r.value="",o.value="";let c=[e,r,o];for(let e=0;e<c.length;e++){const t=c[e];t.hasAttribute("data-placeholder")&&inputFocusRemove(t)}document.querySelector(".calculator-block__options-body._active")&&document.querySelector(".calculator-block__options-body._active").classList.remove("_active"),a.innerHTML="0.00",n.innerHTML="0.00",l.classList.remove("_active")}))}calculator();var ua=window.navigator.userAgent,msie=ua.indexOf("MSIE "),isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};function isIE(){return(ua=navigator.userAgent).indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1}function formValidateInput(e){let t=0,r=e.getAttribute("data-value");if("email"==e.getAttribute("name")||e.classList.contains("_email")){if(e.value!=r){let t=e.value.replace(" ","");e.value=t}emailTest(e)||e.value==r?(formAddError(e),t++):formRemoveError(e)}else"checkbox"==e.getAttribute("type")&&0==e.checked||""==e.value||e.value==r?(formAddError(e),t++):formRemoveError(e);return t}function formAddError(e){e.classList.add("_error"),e.parentElement.classList.add("_error");let t=e.parentElement.querySelector(".form__error");t&&e.parentElement.removeChild(t);let r=e.getAttribute("data-error");r&&""!=r&&e.parentElement.insertAdjacentHTML("beforeend",'<div class="form__error">'+r+"</div>")}function formRemoveError(e){e.classList.remove("_error"),e.parentElement.classList.remove("_error"),e.parentElement.parentElement.classList.remove("calculator-block__item_error");let t=e.parentElement.querySelector(".form__error");t&&(e.parentElement.removeChild(t),e.parentElement.parentElement.removeChild(t))}function formClean(e){let t=e.querySelectorAll("input,textarea");for(let e=0;e<t.length;e++){const r=t[e];r.parentElement.classList.remove("_focus"),r.classList.remove("_focus"),r.value=r.getAttribute("data-value")}}isIE()&&document.querySelector("body").classList.add("_ie"),isMobile.any()?(document.querySelector("body").classList.add("_touch"),dropDownArrow()):document.querySelector("body").classList.add("_mouse"),console.log("The site is coded Mr.Corvo\nhttps://www.weblancer.net/users/MrCorvo/"),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);let inputs=document.querySelectorAll("input[data-value],textarea[data-value]");function inputsInit(e){if(e.length>0)for(let t=0;t<e.length;t++){const r=e[t],o=r.getAttribute("data-value");inputPlaceholderAdd(r),""!=r.value&&r.value!=o&&inputFocusAdd(r),r.addEventListener("focus",(function(e){r.value==o&&(inputFocusAdd(r),r.value=""),formRemoveError(r)})),r.addEventListener("blur",(function(e){""==r.value&&(r.value=o,inputFocusRemove(r))}))}}function inputPlaceholderAdd(e){const t=e.getAttribute("data-value");""==e.value&&""!=t&&(e.value=t)}function inputFocusAdd(e){e.classList.add("_focus"),e.parentElement.classList.add("_focus");let t=e.getAttribute("placeholder");e.setAttribute("data-placeholder",t),e.removeAttribute("placeholder")}function inputFocusRemove(e){e.classList.remove("_focus"),e.parentElement.classList.remove("_focus");let t=e.getAttribute("data-placeholder");e.setAttribute("placeholder",t),e.removeAttribute("data-placeholder")}inputsInit(inputs),wrapper&&wrapper.classList.add("_loaded");