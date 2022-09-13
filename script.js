const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav__items');
const moreBtn = document.querySelector('.program__btn');
const row = document.querySelector('.row');
const story = document.getElementsByClassName('program__story');
console.log(story);

const speakers = [
  {
    name: 'Lila Trekitov',
    position: 'Executive Director of Wikimedia Foundation',
    achieviements:
      'Lila Trekitov is the executive director of Wikimedia Foundation, the none-profit organization that operates Wikipedia. Wikipedia is free available in 290 languages and used by nearly half a billion people every month',
    img: 'img/lila.jpg',
  },
  {
    name: 'Kilman Chon',
    position: '',
    achieviements:
      'Kilman Chon helped bring the Internet into Asia and became an advocate for and digital commons. In 2012, he was inducted into the inugral class of the Internet community (ISOC) hall of fame',
    img: 'img/kilman.jpg',
  },
  {
    name: 'Julia leda',
    position: 'President of Young Pirates of Europe',
    achieviements:
      'Europian inegration, political democracy and participation iof youth through online as a major condern, Reda report outlining potential changes to EU copyrights law was approved by the parliament Office',
    img: 'img/julia.jpg',
  },
  {
    name: 'Ryan Merkley',
    position: 'CEO creatice commons, ex COO of mozilla foundation',
    achieviements:
      'Ryan has been leading open source projects at the Mozilla Foundation, such as the open source movement',
    img: 'img/ryan.jpg',
  },
];

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navItems.classList.toggle('mobile');
});

const renderMarkup = (e) => {
  // row.innerHTML = '';
  const markup = `
  <div class="program__story">
  <div class="program__shape">
    <img src="${speakers[e].img}" alt="Author" class="program__img" />
  </div>
  <div class="program__text">
    <h1 class="program__name">${speakers[e].name}</h1>
    <h3 class="program__position">
    ${speakers[e].position}
    </h3>
    <p class="program__achievement">
    ${speakers[e].achieviements}
    </p>
  </div>
  `;
  row.insertAdjacentHTML('beforeend', markup);
};

moreBtn.addEventListener('click', function (e) {
  console.log(story.length);

  if (story.length === 2) {
    for (let i = 0; i < speakers.length; i++) {
      renderMarkup(i);
    }
  } else if (story.length > 5) {
    row.innerHTML = ` <div class="program__story">
    <div class="program__shape">
      <img src="img/benkler.png" alt="Author" class="program__img" />
    </div>
    <div class="program__text">
      <h1 class="program__name">Yochai Benkler</h1>
      <h3 class="program__position">
        Berkman Professor of Entrepreneurial Legal Studies at Harvard Law
        School
      </h3>
      <p class="program__achievement">
        Benkler, studies common-based peer production, and published his
        seminar book the Wealth of Networks in 2006
      </p>
    </div>
  </div>
  <div class="program__story">
    <div class="program__shape">
      <img src="img/so-yun.jpg" alt="Author" class="program__img" />
    </div>
    <div class="program__text">
      <h1 class="program__name">sohYeonng Noh</h1>
      <h3 class="program__position">
        Director of Art centre Nabi and a board member of CC Korea
      </h3>
      <p class="program__achievement">
        As the main venue for new media art production in Korea, Nabi
        promotes cross disciplinary prodections and understanding among
        science and technology, humanities, and the Art
      </p>
    </div>
  </div>`;
  }
});
