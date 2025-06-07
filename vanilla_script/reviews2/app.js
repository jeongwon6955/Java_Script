const probtn = document.querySelector('.title-btn');
const pro = document.querySelector('.pro');
const pro1 = document.querySelector('.pro1')

const reviews = [
    {
        id: 1,
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXuxd0gGbKqr-2_my9PtkdDv9QtHfd8wAwzJLWkNRYTlctPoqWmjeUcSBQ2pCgxkGmvi1aLhOVwDga7GegnsBQ0sq1q4tE_-LPQsleL9pXTiuXH7nAPih-oXFrpVRKaYmoDVTXMMXFx8ytoYlU3rXXR78.svg',
        text: '젠지',
    },
    {
        id: 1,
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu09xxgFQ8vba2-NFFCYPnXchVJXbh1GuCvucLL5DkGwMPOhyI1LR8SuE84gMurGMd2XNJQ-OXgnOCf84Fr7Tzn_PwRBadmOf7LL3wJYkp0lET1URM6IvpWcnMZEtLfKulmdfTSAxE2uAQqdC2vLuI7I.svg',
        text: 'T1'
    },
];

const img = document.querySelector('.logo');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    probtn.textContent = item.text;
});

function show(person) {
    const item = reviews[person];
    img.src = item.img;
    probtn.textContent = item.text;
};

prev.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length -1
    }
    show(currentItem);
    pro.classList.remove('show-pro');
    pro1.classList.remove('show-pro1');
});


next.addEventListener('click', function() {
    currentItem++
    if(currentItem > reviews.length -1) {
        currentItem = 0
    }
    show(currentItem)
    pro.classList.remove('show-pro');
    pro1.classList.remove('show-pro1');
})

probtn.addEventListener('click', function() {
    if(currentItem === 0) {
        pro.classList.toggle('show-pro');
    }else {
        pro1.classList.toggle('show-pro1');
    }
});


