let currentIndex = 0;
const slides = document.querySelectorAll('.box');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slides');

//console.log(totalSlides)

let direction = 1;

function showNextSlide() {
  slideContainer.style.transform = `translateX(-${currentIndex * 600}px)`;
  
  currentIndex += direction;

  if(currentIndex === totalSlides -1){
    direction = -1
  }else if (currentIndex === 0) {
    direction = 1
  }
}
showNextSlide();

// 3초마다 자동으로 다음 슬라이드로 이동
setInterval(showNextSlide, 2000);