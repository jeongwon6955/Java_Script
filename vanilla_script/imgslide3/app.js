const slides = document.querySelector('.slides');
  const slideImages = document.querySelectorAll('.slide');
  const totalSlides = slideImages.length;
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = slideImages[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  // 자동 슬라이드 (3초마다)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 3000);

  // 윈도우 크기 변경 시에도 슬라이드 위치 재계산
  window.addEventListener('resize', () => {
    showSlide(currentIndex);
  });

  // 초기 위치 세팅
  showSlide(currentIndex);