const head = document.querySelector('.header');
let lastscroll = 0;
const delayThreshold = 101; // 효과가 일어나기 위한 최소 거리(px)

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const diff = Math.abs(currentScroll - lastscroll); // 차이 계산

  console.log('last', lastscroll);
  console.log('current', currentScroll);
  console.log('diff', diff); 

  if (diff >= delayThreshold) {
    if (currentScroll > lastscroll) {
      // 아래로 스크롤
      head.classList.add('show-header');
    } else if (currentScroll < lastscroll) {
      // 위로 스크롤
      head.classList.remove('show-header');
    }

    // 위치 업데이트 (조건 충족한 경우에만)
    lastscroll = currentScroll; 
  }
});