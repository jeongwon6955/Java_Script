const menu = [
    {
        id: 1,
        category: 'PAC',
        name: 'GEN',
        fullname: 'GEN.G',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXuxd0gGbKqr-2_my9PtkdDv9QtHfd8wAwzJLWkNRYTlctPoqWmjeUcSBQ2pCgxkGmvi1aLhOVwDga7GegnsBQ0sq1q4tE_-LPQsleL9pXTiuXH7nAPih-oXFrpVRKaYmoDVTXMMXFx8ytoYlU3rXXR78.svg',
    },
    {
        id: 2,
        name: 'TH',
        category: 'EMEA',
        fullname: 'Team Heretics',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu2VQ4mY2c343TCD6_v7_BAMYVx29OgPBj8zMgsv14hu6FTXyNwtN5EOOVaxSIP0eQ99o-iRZqu1Q8vamz8tCgbLFGvdNH_Vmi7OFaH4wzXgCVZsyBJ4GGq32lICVEtaq3xjQKM9iu-zAr0FnWESfcyc.svg',
    },
    {
        id: 3,
        name: 'SEN',
        category: 'AMER',
        fullname: 'Sentinels',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu1bpF7JGZZ1PGm3XLkLTuXCxcZLIl_fNll5v_HLahEo01Y6rn4Po_i-ZGmYgL02As8q1xcfWPWgSbfphVlivLbg.svg',
    },
    {
        id: 4,
        name: 'EDG',
        category: 'CN',
        fullname: 'Edward Gaming',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu2R5G7XMn5LEPQHq8GIkZw1nH4K8PT8A4ilEhaIcTKktEHuJ4rXoVulc0TKQRkRXQHlXGfpfgq5KSTxkRyRV8A4.svg',
    },
    {
        id: 5,
        name: 'DRX',
        category: 'PAC',
        fullname: 'DRX',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu-www0Psl-fedY8_wN7fORFMWkn7XdoFfZlK_Sw4QrHixepFtxIeNgEQGu0xWmepMiC7ZKN7UqgsUtpPAhtaeiw.svg',
    },
    {
        id: 6,
        name: 'T1',
        category: 'PAC',
        fullname: 'T1',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu09xxgFQ8vba2-NFFCYPnXchVJXbh1GuCvucLL5DkGwMPOhyI1LR8SuE84gMurGMd2XNJQ-OXgnOCf84Fr7Tzn_PwRBadmOf7LL3wJYkp0lET1URM6IvpWcnMZEtLfKulmdfTSAxE2uAQqdC2vLuI7I.svg',
    },
    {
        id: 7,
        name: 'FNC',
        category: 'EMEA',
        fullname: 'Fnatic',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu6NQEsqtxXndzgtQ-Vt2302djUDGki8R0l-8xr099xn-5c-8Qqtp5_O1tOgSbvBg-ZVWsyqcAC2_4TgpcNMNsbfefLKnw8qcPTj0PijmJAkKWbEzOD3GGFkJw5PAO5zj_Mc0UaJKTjr3ObVf1PQd_Qc.svg',
    },
    {
        id: 8,
        name: 'G2',
        category: 'AMER',
        fullname: 'G2 Esports',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu2uaNeB20x4vXy4tfidaT79jJ_wuBqwRbyXVSUmvZxazj-HpmoYTWGGpaV0R6ZNqPCxD6wWf_bRbZsioZTtJ_Pve_w21nITqoe35fLMx3pKjvDFReIhNldZ8l1YcwbGeaigUURLS5TFKr2XXXo1Ee9k.svg',
    },
    {
        id: 9,
        name: 'NS',
        category: 'PAC',
        fullname: 'Nongshim RedForce',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu3LY2w268SgXjyrah0Qw8M3mr47AKrMewQIEEvTcGba-FyhCWby1aAXHG6kkA8JbCiW0ersEP8_YgfCWrjIc_4R9A7NaQdfpSLxyHs1o5cdxQtznSUWcQsZ44HPLfNCT9swJmNWwVUuT0T7UDSjlTYA.svg',
    },
    {
        id: 10,
        name: 'TL',
        category: 'EMEA',
        fullname: 'Team Liquid',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu6xp2KgHf8Ep5ZdQeazG4UGWjqDqiyHaGhdKe_IifLOkFfnXyngHiMAEQVD59YSWNFnf7Y-BAg7jevq4fNnTfiBnoFpz4SnSJzV3P_vaicROcs9OKOGTkah2nYuQOPqbUXFNH-obZN70h_64xvHxuTs.webp',
    },
    {
        id: 11,
        name: 'VIT',
        category: 'EMEA',
        fullname: 'Team Vitality',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXuxeH-OG654pYzWy5ghlkLLpWLefW40Ir-5ZzX36HeNKVmbAIV5lkgRUypNlMt5-mBJIFgNuul8ZnBhxOlUnAOws.svg',
    },
    {
        id: 12,
        name: 'LOUD',
        category: 'AMER',
        fullname: 'LOUD',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu5qCBr16L_JT3B6EqH-0Aq_bpZVaNKM8yGlLOvBV-zvt0gzrAWQiql-LLgDXlMJ3FaLoRCDWNKSx1709oIL1FsR85oIIwuics9uAdWvyDeRLVU60URocKAMCEds28NTJ52L86jhVOcnpxABFALzY85Y.svg',
    },
    {
        id: 13,
        name: 'XLG',
        category: 'CN',
        fullname: 'XLG Esports',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu1F6xUe27VZZE9GiTaK4Iz1LKb1Pf0tD-mTPopnN1W7ClX7S8OI442QLw9PB_JrpJj4ZqX1QHquY1hHN-vXzrXbW6N4yjOM0gOOzgCJ8I7xhISlIZPCi1V0z6dITz57WKLs8MmWMVXCrjSm9aagt5Q0.webp',
    },
    {
        id: 14,
        name: 'BLG',
        category: 'CN',
        fullname: 'Bilibili Gaming',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu_bO4cDRUxNR9Lpj0bKJvYMxW9WBbSMW658mopPRRw0vxCBOzqc36AWujL00DCpHJ207AMOn9rojNa8vV7VPNiY.svg',
    },
    {
        id: 15,
        name: 'FPX',
        category: 'CN',
        fullname: 'FunPlus Phoenix',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu39onts1gnwX-9ZiXYXWUItGlIvW4PNRtXNZCw7tPRoRq2V9ngTyKkm9Wf32Lh3oD0-c9D4Mslx6rRmMO23QHLsJQf79jBv5lReP_0ZcwPf7ir3O1UTkOeEGokhKqiYO3w6OT-qSgIZj3SNHl_8mpBE.svg',
    },
    {
        id: 16,
        name: 'MIBR',
        category: 'AMER',
        fullname: 'Made in Brazil',
        img: 'https://i.namu.wiki/i/uA9MMH409RAEk5Wn7AoXu3SdYhfZPMLn-BcOBfGizrYHRDPrNbn2h1c1eVBDqp0pPfg1sg5t8q3wiGdpb0DFgFdG6AlJMX4jJu7QV3qrxd7XMyDas94nQ2X1AvKV-cQ2UD0wxRDLkGCWku8b37b9HWZ20tSANd-Y4Bw8w-8MjdE.svg',
    },
];

const menucontainer = document.querySelector('.container')
const btncontainer = document.querySelector('.btn-container')
//console.log(btncontainer)

window.addEventListener('DOMContentLoaded', function() {
    displaymenuitem(menu);
    displayMenuButtons();
});

function displaymenuitem(menuitem) {
    const showmenu = menuitem.map(function(item) {
        return  `<div class="team">
                <img src="${item.img}" alt="">
                <div class="name-box">
                    <div class="team-name">
                        ${item.name}
                    </div>
                    <div class="full-name">
                        ${item.fullname}
                    </div>
                </div>
            </div>`;
    })
    .join('');

    menucontainer.innerHTML = showmenu;
};

function displayMenuButtons() {
    // console.log('hello')
    const categories = menu.reduce(
        function(value, index) {
            if(!value.includes(index.category)) {
                value.push(index.category)
            }
            return(value)
        },
        ['All']
    );
    const categoriesbtn = categories
    .map(function(category) {
        return `<button type="button" class="filter-btn" id="${category}">${category}</button>`
    })
    .join('');

    btncontainer.innerHTML = categoriesbtn;
    const filterbtn = btncontainer.querySelectorAll('.filter-btn');
    // console.log(filterbtn)
    filterbtn.forEach(function (btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.id;
            const menucategory = menu.filter(function(menuitem) {
                if(menuitem.category === category) {
                    return menuitem;
                }
            });
            if (category === 'All') {
                displaymenuitem(menu);
            }else {
                displaymenuitem(menucategory);
            }
        });
    });
};