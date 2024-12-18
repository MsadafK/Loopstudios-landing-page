document.addEventListener("DOMContentLoaded", (event) => {
  // retrieving DOM elements
  const hamburger_icon = document.querySelector(
    ".header__hero-section__logo-and-navbar-icon-container__hamburger-icon"
  );

  const close_icon = document.querySelector(
    ".header__hero-section__logo-and-navbar-icon-container__close-icon"
  );

  const mobile_navbar = document.querySelector(
    ".header__hero-section__mobile-navbar"
  );

  hamburger_icon.addEventListener("click", handleClick);
  close_icon.addEventListener("click", handleClick);

  function handleClick() {
    event.preventDefault();
    hamburger_icon.classList.toggle("active");
    close_icon.classList.toggle("active");
    mobile_navbar.classList.toggle("active");
  }
});
