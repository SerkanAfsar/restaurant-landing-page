console.log("Hello World");

const navToggle = document.getElementById("nav-toggle"),
  asideClose = document.querySelector(".aside-menu-close"),
  header = document.querySelector("header");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("mobile-visible");
});

asideClose.addEventListener("click", () => {
  document.body.classList.toggle("mobile-visible");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > header.clientHeight);
  header.classList.toggle("shadow", window.scrollY > header.clientHeight);
});

$(".specials-container").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: false,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".hero-mainimg").tilt();

$(".testimonials-slide").slick({
  slidesToShow: 1.5,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: true,
  speed: 600,
  autoplay: true,
  autoPlaySpeed: 1000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
