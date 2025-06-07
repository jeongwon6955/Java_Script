const reviews = [
    {
        id: 1,
        name: '토트넘',
        achievement: '유로파 우승',
        text: '유로파 결승에서 맨유를 1대0으로 잡으며 17년간에 무관을 깨고 우승하였다',
        img: 'https://thumb.mt.co.kr/06/2025/05/2025052206293494449_3.jpg',
    },
    {
        id: 2,
        name: '리버풀',
        achievement: '프리미어리그 우승',
        text: '리버풀 EPL리그 20번째로 우승하였다',
        img: 'https://i.namu.wiki/i/rlB2IkveqNoAiuYhifvtabAwNiTnVjyETGvMHocJDnI1j-uJmP2qNxvZwRsjy7Ins9IJNiL_8jWeALbbLLbyow.webp',
    },
    {
        id: 3,
        name: '파리생제르망',
        achievement: '챔피언스리그 우승',
        text: '구단사상 최초로 챔피언스리그를 우승하였다',
        img: 'https://www.chosun.com/resizer/v2/FRJFYKZNRZI45NB2YYKIZBCOHM.jpg?auth=8a95d245c700921cc487866b5341b203d130a1b20bfed22f486e146fa02768ec&width=616',
    },
    {
        id: 4,
        name: '첼시',
        achievement: '컨퍼런스리그 우승',
        text: '컨퍼런스리그 우승으로 UEFA 최초로 모든 유럽 대항전 트로피를 보유하고있다',
        img: 'https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2025%2F5%2F29%2F7314889%2Fhigh.jpg&w=1920&q=75'
    },
];

const names = document.querySelector('.title');
const img = document.querySelector('img');
const texts = document.querySelector('.text');
const achievements = document.querySelector('.little-title');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const random = document.querySelector('.surprise-button');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    names.textContent = item.name;
    texts.textContent = item.text;
    achievements.textContent = item.achievement;
});

function show(person) {
    const item = reviews[person];
    img.src = item.img;
    names.textContent = item.name;
    texts.textContent = item.text;
    achievements.textContent = item.achievement;
    if(currentItem === 1) {
        names.style.color = 'red';
        achievements.style.color = 'purple';
    }else if(currentItem === 2) {
        names.style.color = 'darkblue';
        achievements.style.color = 'blue';
    }else if(currentItem === 3) {
        names.style.color = 'blue';
        achievements.style.color = 'green';
    }else {
        names.style.color = '#000a3c';
        achievements.style.color = '#ff6900';
    }
};

next.addEventListener('click', function() {
    currentItem++
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    };

    show(currentItem);
});

prev.addEventListener('click', function() {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length -1;
    };

    show(currentItem);
});

random.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);

    show(currentItem)
});