class Counter {
    constructor(length) {
        this.index = 0;
        this.length = length;
    }

    changeBy(val) {
        this.index = (this.index + val + this.length) % this.length;
    }
}

const changeContent = (idx) => {
    avatar.setAttribute('src', reviews[idx].avatar);
    name.textContent = reviews[idx].name;
    text.textContent = reviews[idx].text;
};

const reviews = [
    {
        avatar: 'https://tva1.sinaimg.cn/large/87c01ec7gy1fsnqqwn4vvj21kw0w04fx.jpg',
        name: 'Vito Carrie',
        text: 'Television near into land position. Everyone necessary employee bill him. Sign to treat find several name final.' +
            'Per anyone return tend build something employee language. Difference gun present memory just.',
    },
    {
        avatar: 'https://tva4.sinaimg.cn/large/87c01ec7gy1fsnqqelvgkj21kw0w0qgi.jpg',
        name: 'Colby Betsy',
        text: 'Candidate admit property spring at above. Marriage station key different deep structure cost. Brother partner industry yes particular.' +
            'Sort son entire again. Return rest score note argue fill hope market.',
    },
    {
        avatar: 'https://tva4.sinaimg.cn/large/87c01ec7gy1fsnqqp0vyrj21kw0w0h0v.jpg',
        name: 'Neil Gunter',
        text: 'Stock language health of write PM. Toward perhaps pick future finish race.' +
            'Budget write physical. Say home together serious.' +
            'Bag organization fast while picture. Eight show factor price.',
    },
    {
        avatar: 'https://tva2.sinaimg.cn/large/87c01ec7gy1fsnqr5aks2j21kw0w07of.jpg',
        name: 'Allen Laurie',
        text: 'Walk evidence economic. True employee history market wonder traditional spend. Treat about allow you maintain establish yeah part.' +
            'Left agent food population yes floor. Special only middle world like.'
    }
];

const avatar = document.querySelector('.img-container > img');
const name = document.querySelector('.review > h3');
const text = document.querySelector('.review > p');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const randomButton = document.querySelector('.random-btn');
const counter = new Counter(reviews.length);

// initialize
changeContent(counter.index);


leftButton.addEventListener('click', () => {
    counter.changeBy(-1);
    changeContent(counter.index);
});

rightButton.addEventListener('click', () => {
    counter.changeBy(1);
    changeContent(counter.index);
});

randomButton.addEventListener('click', () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    while (counter.index === newIndex) {
        newIndex = Math.floor(Math.random() * reviews.length);
    }
    counter.index = newIndex;
    changeContent(counter.index);
});