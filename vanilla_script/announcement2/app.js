const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
let total = slide.length;

function showslide(index) {
    const slideWidth = slide[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
};

setInterval( () => { 
    currentIndex = (currentIndex + 1) % total;
    if(currentIndex === 0) {
        slides.style.transition = 'none'
    }else {
        slides.style.transition = 'all 0.3s ease-in-out'
    }
    showslide(currentIndex);
}, 2000);

const questions = document.querySelectorAll('.announcement');
//console.log(questions)

questions.forEach(function(question) {
   const btn = question.querySelector('.question');
   //console.log(btn)

   btn.addEventListener('click', function() {
    //console.log('hello', question)

        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-answer');
            };
        });
        question.classList.toggle('show-answer');
    });
});