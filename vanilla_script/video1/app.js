const video = document.querySelector('.video-box');
const btn = document.querySelector('.button-box');
// console.log(btn)

btn.addEventListener('click', function() {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    }else {
        btn.classList.remove('slide');
        video.play();
    }
});