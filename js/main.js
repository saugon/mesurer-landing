document.addEventListener("DOMContentLoaded", function () {
  let scrollPos = -10000;

  new Glide("#team", {
    type: "carousel",
    perView: 3,
    peek: { before: 0, after: 150 },
    breakpoints: {
      500: {
        perView: 2,
        peek: { before: 0, after: 100 },
        gap: 20,
      },
    },
  }).mount();

  window.addEventListener("scroll", function () {
    if (document.body.getBoundingClientRect().top < scrollPos && document.body.getBoundingClientRect().top < -30) {
      document.getElementsByTagName("header")[0].classList.add("scroll-hide");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("scroll-hide");
    }
    scrollPos = document.body.getBoundingClientRect().top;
  });

  const menuTrigger = document.getElementById("menu-trigger");
  menuTrigger.addEventListener("click", () => {
    document.getElementById("menu").classList.add("show");
  });

  const closeMenu = document.getElementById("close-menu");
  closeMenu.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("show");
  });

  const menuLinks = document.querySelectorAll("#menu .links a");
  menuLinks.forEach((elem) => {
    elem.addEventListener("click", () => {
      document.getElementById("menu").classList.remove("show");
      setTimeout(() => {
        document.getElementsByTagName("header")[0].classList.add("scroll-hide");
      }, 100);
    });
  });
});
