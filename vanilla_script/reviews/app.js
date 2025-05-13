const reviews = [
{
    id: 1,
    name: 'KOREA',
    job: 'ASIA',
    img: 'https://png.pngtree.com/png-clipart/20230120/original/pngtree-south-korea-flag-icon-png-image_8923123.png',
    text: "Korea is a country with good semiconductor technology.",
},
{
    id: 2,
    name: 'USA',
    job: 'AMERICA',
    img: 'https://png.pngtree.com/png-clipart/20230821/original/pngtree-american-flag-icon-template-picture-image_8142643.png',
    text: 'America is the number one country in the world.',
},
{
    id: 3,
    name: 'FRANCE',
    job: 'EU',
    img: 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-france-nation-flag-round-vector-png-image_12256117.png',
    text: 'It is a country with a lot of wonderful cultural heritage.',
},
{
    id: 4,
    name: 'AUSTRALIA',
    job: 'OCEANIA',
    img: 'https://png.pngtree.com/png-vector/20221130/ourmid/pngtree-australian-flag-icon-png-image_6484464.png',
    text: 'It is a country with lots of kangaroos.',
  },
];

const img = document.getElementById('img');
const names = document.querySelector('.author');
const job = document.querySelector('.job');
const info = document.getElementById('info');

const btn1 = document.querySelector('#btns');
const btn2 = document.querySelector('#btns1');
const btn = document.querySelector('.btn'); 

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    names.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    names.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

btn2.addEventListener('click', function() {
    currentItem++
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})
 
btn1.addEventListener('click', function() {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length -1
    }
    showPerson(currentItem)
})

btn.addEventListener('click', function() {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})
