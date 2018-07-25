
var link=document.querySelector(".letter-button");
var popup=document.querySelector(".modal-login");      
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    });