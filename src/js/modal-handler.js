(function () {
  window.onload = function () {
    const loginBtn = document.querySelector(".js-login-btn");
    const siteModal = document.querySelector(".js-site-modal");
    const loginForm = siteModal.querySelector(`.${loginBtn.dataset.showModal}`);
    loginBtn.onclick = function (event) {
      event.preventDefault();
      siteModal.classList.add("show");
      loginForm.classList.add("show");
    };
    siteModal.onclick = function (event) {
      siteModal.classList.remove("show");
      for (let modal of siteModal.children) {
        modal.classList.remove("show");
      }
    };
  };
})();
