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
function walk() {
  let imgWt = $(".walk .right .productList .product").width() + 10;
  let currentMarginLeft = 0;
  let rightClickCount = 0;
  let leftClickCount = 0;

  // 오른쪽 버튼 클릭 이벤트 핸들러
  $('.walk .right .btnWrapper .right').on('click', function() {
    if (rightClickCount < 2) { // 두 번 클릭까지만 허용
      rightClickCount++;
      currentMarginLeft -= imgWt;
      $('.walk .right .productList').animate({ marginLeft: currentMarginLeft + 'px' }, 'linear');
    }
    
    if (rightClickCount === leftClickCount) { // 클릭 수가 같으면 .left 버튼 다시 활성화
      $('.walk .right .btnWrapper .left').on('click', leftButtonClickHandler);
    }

    if (rightClickCount === 2) { // 오른쪽 버튼은 한 번만 실행 후 비활성화
      $(this).off('click');
    }
  });
  
  // 왼쪽 버튼 클릭 이벤트 핸들러
  function leftButtonClickHandler() {
    if (leftClickCount < 2) { // 두 번 클릭까지만 허용
      leftClickCount++;
      currentMarginLeft += imgWt;
      $('.walk .right .productList').animate({ marginLeft: currentMarginLeft + 'px' }, 'linear');
    }
    
    if (leftClickCount === rightClickCount) { // 클릭 수가 같으면 .right 버튼 다시 활성화
      $('.walk .right .btnWrapper .right').on('click', rightButtonClickHandler);
    }

    if (leftClickCount === 2) { // 왼쪽 버튼은 한 번만 실행 후 비활성화
      $(this).off('click');
    }
  }

  // 처음에 .left 버튼 클릭 이벤트 핸들러 등록
  $('.walk .right .btnWrapper .left').on('click', leftButtonClickHandler);
  
}

walk();





/*========== section pogle */
function pogle() {
  let imgWt = $(".pogle .left .productList .product").width() + 10;
  let currentMarginLeft = 0;
  let rightClickCount = 0;
  let leftClickCount = 0;

  // 오른쪽 버튼 클릭 이벤트 핸들러
  $('.pogle .left .btnWrapper .right').on('click', function() {
    if (rightClickCount < 2) { // 두 번 클릭까지만 허용
      rightClickCount++;
      currentMarginLeft -= imgWt;
      $('.pogle .left .productList').animate({ marginLeft: currentMarginLeft + 'px' }, 'linear');
    }
    
    if (rightClickCount === leftClickCount) { // 클릭 수가 같으면 .left 버튼 다시 활성화
      $('.pogle .left .btnWrapper .left').on('click', leftButtonClickHandler);
    }

    if (rightClickCount === 2) { // 오른쪽 버튼은 한 번만 실행 후 비활성화
      $(this).off('click');
    }
  });
  
  // 왼쪽 버튼 클릭 이벤트 핸들러
  function leftButtonClickHandler() {
    if (leftClickCount < 2) { // 두 번 클릭까지만 허용
      leftClickCount++;
      currentMarginLeft += imgWt;
      $('.pogle .left .productList').animate({ marginLeft: currentMarginLeft + 'px' }, 'linear');
    }
    
    if (leftClickCount === rightClickCount) { // 클릭 수가 같으면 .right 버튼 다시 활성화
      $('.pogle .left .btnWrapper .right').on('click', rightButtonClickHandler);
    }

    if (leftClickCount === 2) { // 왼쪽 버튼은 한 번만 실행 후 비활성화
      $(this).off('click');
    }
  }

  // 처음에 .left 버튼 클릭 이벤트 핸들러 등록
  $('.pogle .left .btnWrapper .left').on('click', leftButtonClickHandler);
}

 pogle();





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


$(window).on('scroll', () => {
  let footprint1Ht = $('.cutePuppy .footprintWrapper .footprint1').offset().top - 400;
  if (scrollY > footprint1Ht) {
    $('.cutePuppy .footprintWrapper .footprint1').addClass('show');
    
  } else {
    $('.cutePuppy .footprintWrapper .footprint1').removeClass('show');
  }
})
$(window).on('scroll', () => {
  let footprint2Ht = $('.cutePuppy .footprintWrapper .footprint2').offset().top - 400;
  if (scrollY > footprint2Ht) {
    $('.cutePuppy .footprintWrapper .footprint2').addClass('show');
    
  } else {
    $('.cutePuppy .footprintWrapper .footprint2').removeClass('show');
  }
})
$(window).on('scroll', () => {
  let footprint3Ht = $('.cutePuppy .footprintWrapper .footprint3').offset().top - 400;
  if (scrollY > footprint3Ht) {
    $('.cutePuppy .footprintWrapper .footprint3').addClass('show');
    
  } else {
    $('.cutePuppy .footprintWrapper .footprint3').removeClass('show');
  }
})
$(window).on('scroll', () => {
  let footprint4Ht = $('.cutePuppy .footprintWrapper .footprint4').offset().top - 400;
  if (scrollY > footprint4Ht) {
    $('.cutePuppy .footprintWrapper .footprint4').addClass('show');
    
  } else {
    $('.cutePuppy .footprintWrapper .footprint4').removeClass('show');
  }
})



/*========== footer */