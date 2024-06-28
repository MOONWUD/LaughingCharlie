/*========== header */
const mainPc = $('main').offset().top - 50;
$(window).on('scroll', ()=>{
  if(scrollY > mainPc) {
    $('.header_pc').addClass('active');
  } else {
    $('.header_pc').removeClass('active');
  }
});
const mainMo = $('main').offset().top - 50;
$(window).on('scroll', ()=>{
  if(scrollY > mainMo) {
    $('.header_mo').addClass('active');
  } else {
    $('.header_mo').removeClass('active');
  }
});
const navSwiper = new Swiper(".navSwiper", {
  slidesPerView: 6, // 한 번에 표시할 슬라이드 수
  spaceBetween: 10, // 슬라이드 간의 간격  
  loop: false, //슬라이드 루프(무한 회전) 활성화
  mousewheel: false,
});

$(function () {
  $('.hmbrgMenu .hmbrgBtn').on('click', () => {
    $('.hmbrgMenu').toggleClass('active');
  });
});


/*========== section main */
const swiper = new Swiper(".mySwiper", {
  speed: 2000,
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
    start: "0% 90%",
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
    start: "0% 88%",
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
$(function () {
  $('.walk .right .btnWrapper .left').on('click', () => {
    // 제일 마지막에 있는 이미지가 제일 처음으로 이동
    $('.walk .right .productList .product').last().prependTo('.walk .right .productList');
  });
  $('.walk .right .btnWrapper .right').on('click', () => {
    // 제일 처음에 있는 이미지가 제일 마지막으로 이동
    $('.walk .right .productList .product').first().appendTo('.walk .right .productList');
  });
});


/*========== section pogle */
$(function () {
  $('.pogle .left .btnWrapper .left').on('click', () => {
    // 제일 마지막에 있는 이미지가 제일 처음으로 이동
    $('.pogle .left .productList .product').last().prependTo('.pogle .left .productList');
  });
  $('.pogle .left .btnWrapper .right').on('click', () => {
    // 제일 처음에 있는 이미지가 제일 마지막으로 이동
    $('.pogle .left .productList .product').first().appendTo('.pogle .left .productList');
  });
});


/*========== section textAni */



/*========== section best */
const bestSwiper = new Swiper(".bestSwiper", {
  slidesPerView: 2, // 한 번에 표시할 슬라이드 수
  spaceBetween: 10, // 슬라이드 간의 간격  
  loop: false, //슬라이드 루프(무한 회전) 활성화
  mousewheel: false,
});


/*========== section magazine */



/*========== section sale */



/*========== section new */

// 가로 드래그
const newSwiper = new Swiper(".newSwiper", {
  slidesPerView: 2, // 한 번에 표시할 슬라이드 수
  spaceBetween: 50, // 슬라이드 간의 간격  
  loop: true, //슬라이드 루프(무한 회전) 활성화
  mousewheel: false,
});


// 마우스 커서
var cursor = document.querySelector(".cursor");
var img_slide = document.querySelectorAll(".new .contentWrapper");
function cursorEvent(e){
    cursor.style.top = e.pageY - scrollY + "px";
    cursor.style.left = e.pageX + "px";
}
window.addEventListener('mousemove', cursorEvent);
img_slide.forEach(link =>{
    if ( link !== img_slide ){
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("on");
        });
        link.addEventListener("mouseover", () => {
            cursor.classList.add("on");
        });
    }  
});




/*========== section cutePuppy */
gsap.to(".cutePuppy .puppy", {
  scrollTrigger: {
    trigger: '.cutePuppy',
    start: "0% 50%",
    end: "100% 0%",
    scrub: 1,
  // markers: true,
  },
  x: 0,
  y: `80vh`,
  scle: 1.2,
});



/*========== footer */