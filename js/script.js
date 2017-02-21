 var link = document.querySelector(".address");
 var popup = document.querySelector(".feedback");
 var close = popup.querySelector(".feedback-close");
 var login = document.querySelector(".user-login");
 var login_popup = document.querySelector(".hide-login");

 link.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.add("feedback-show");
});

 close.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.remove("feedback-show");
});

 login.addEventListener("click", function(event) {
   event.preventDefault();
   login_popup.classList.add("hide-login-show");
});
