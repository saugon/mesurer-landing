document.addEventListener("DOMContentLoaded", function () {
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
});
