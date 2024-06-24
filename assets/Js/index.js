
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



/*========== section textSlide */



/*========== section walk  */



/*========== section pogle */



/*========== section textAni */



/*========== section best */



/*========== section magazine */



/*========== section sale */



/*========== section cutePuppy */
// gsap.to(".cutePuppy", {
//   scrollTrigger: {
//     trigger: '.cutePuppy img',//객체기준범위
//     start: "50% 20%",//시작 지점
//     end: "200% 10%",//끝 지점
//     scrub: 1,//부드러운 스크러빙
//    // markers: true,개발가이드선
//   },
//   x: -200,
//   y: 400,
// });

/*========== footer */