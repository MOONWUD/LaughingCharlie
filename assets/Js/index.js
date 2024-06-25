/*========== header */
const main = $('main').offset().top - 50;
$(window).on('scroll', ()=>{
  if(scrollY > main) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  }
});



/*========== section main */
const swiper = new Swiper(".mySwiper", {
  speed: 1000,
  loop:true,
  parallax: true, // 시간차 움직임
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/*========== section textSlide */
gsap.to(".textSlide .firstText", {
  scrollTrigger: {
    trigger: '.textSlide .firstText',
    start: "0% 100%",
    end: "100% 80%",
    scrub: 1,
  // markers: true,
  },
  x: 0,
  opacity: 1,
});
gsap.to(".textSlide .firstText img", {
  scrollTrigger: {
    trigger: '.textSlide .firstText',
    start: "0% 98%",
    end: "100% 80%",
    scrub: 1,
  // markers: true,
  },
  y: 0,
  opacity: 1,
});


gsap.to(".textSlide .secondText", {
  scrollTrigger: {
    trigger: '.textSlide .secondText',
    start: "0% 100%",
    end: "100% 80%",
    scrub: 1,
  // markers: true,
  },
  x: 0,
  opacity: 1,
});
gsap.to(".textSlide .secondText img", {
  scrollTrigger: {
    trigger: '.textSlide .secondText',
    start: "0% 98%",
    end: "100% 80%",
    scrub: 1,
  // markers: true,
  },
  opacity: 1,
});


gsap.to(".textSlide .lastText", {
  scrollTrigger: {
    trigger: '.textSlide .lastText',
    start: "0% 110%",
    end: "100% 80%",
    scrub: 1,
  // markers: true,
  },
  x: 0,
  opacity: 1,
});
gsap.to(".textSlide .lastText img", {
  scrollTrigger: {
    trigger: '.textSlide .lastText',
    start: "0% 108%",
    end: "100% 80%",
    scrub: 1,
  // markers: true,
  },
  y: 0,
  opacity: 1,
});


/*========== section walk  */



/*========== section pogle */



/*========== section textAni */



/*========== section best */



/*========== section magazine */



/*========== section sale */



/*========== section cutePuppy */
gsap.to(".cutePuppy img", {
  scrollTrigger: {
    trigger: '.cutePuppy',
    start: "0% 50%",
    end: "100% 0%",
    scrub: 1,
  // markers: true,
  },
  x: 0,
  y: 800,
});

/*========== footer */