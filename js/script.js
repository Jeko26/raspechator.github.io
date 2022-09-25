const header = document.createElement('header');
header.classList.add('header');

const container = document.createElement('div')
header.appendChild(container);
container.classList.add('container', 'header__container')

const header__bigLogo = document.createElement('div');
container.appendChild(header__bigLogo);
document.body.appendChild(header);
header__bigLogo.classList.add('header__bigLogo');

const header__logoText = document.createElement('div');
header__bigLogo.appendChild(header__logoText);
header__logoText.classList.add('header__logoText');

const header__descr = document.createElement('p');
header__logoText.appendChild(header__descr);
header__descr.classList.add('header__descr', 'simple-text');
header__descr.innerText = 'Rybinsk Projects Company';

const header__descr2 = document.createElement('p');
header__logoText.appendChild(header__descr2);
header__descr2.classList.add('header__descr', 'simple-text', 'header__descr--purple');
header__descr2.innerText = 'Больше, чем просто компания';

const img = document.createElement('img');
header__bigLogo.appendChild(img);
img.classList.add('header__image');
img.src = 'image/logo.png'

const header__links = document.createElement('ul');
container.appendChild(header__links);
header__links.classList.add('header__group', 'header__group--burger');

const header__link1 = document.createElement('li');
header__links.appendChild(header__link1);
header__link1.classList.add('header__link', 'simple-text');
header__link1.innerText = 'Обо мне';

const header__link2 = document.createElement('li');
header__links.appendChild(header__link2);
header__link2.classList.add('header__link', 'simple-text');
header__link2.innerText = 'О компании';

const header__link3 = document.createElement('li');
header__links.appendChild(header__link3);
header__link3.classList.add('header__link', 'simple-text');
header__link3.innerText = 'План';

const header__link4 = document.createElement('li');
header__links.appendChild(header__link4);
header__link4.classList.add('header__link', 'simple-text');
header__link4.innerText = 'Система “Свой”';

const header__link5 = document.createElement('li');
header__links.appendChild(header__link5);
header__link5.classList.add('header__link', 'simple-text');
header__link5.innerText = 'Контакты';

const headerBurger = document.createElement('ul');
container.appendChild(headerBurger);
headerBurger.classList.add('header__burger', 'burger', 'burger--desable');

const header__burger = document.createElement('li');
headerBurger.appendChild(header__burger);
header__burger.classList.add('burger__line');

const header__burger2 = document.createElement('li');
headerBurger.appendChild(header__burger2);
header__burger2.classList.add('burger__line');

const header__burger3 = document.createElement('li');
headerBurger.appendChild(header__burger3);
header__burger3.classList.add('burger__line');
// секция full-screen

const fullScreen = document.createElement('section');
fullScreen.classList.add('full-screen');
document.body.appendChild(fullScreen);

const container2 = document.createElement('div');
fullScreen.appendChild(container2);
container2.classList.add('container', 'full-screen__container');

const fullScrean__title = document.createElement('h1');
container2.appendChild(fullScrean__title);
fullScrean__title.classList.add('full-screen__title')
fullScrean__title.innerText = 'Rybinsk Projects Company';

const fullScrean__miniTitle = document.createElement('h2');
container2.appendChild(fullScrean__miniTitle);
fullScrean__miniTitle.classList.add('full-screen__mini-title', 'main-medium-heading');
fullScrean__miniTitle.innerText = 'Наш девиз четыре слова: нет дорог построим реки';

const fullScrean__btn = document.createElement('a');
container2.appendChild(fullScrean__btn);
fullScrean__btn.classList.add('full-screen__btn','btn');
fullScrean__btn.innerText = 'Заплыть в бухту';
fullScrean__btn.href = '#';


// секция about

const about = document.createElement('section');
about.classList.add('about');
document.body.appendChild(about);

const container3 = document.createElement('div');
about.appendChild(container3);
container3.classList.add('container', 'about__container');

const about__miniTitle = document.createElement('h2');
container3.appendChild(about__miniTitle);
about__miniTitle.classList.add('about__mini-title', 'main-medium-heading');
about__miniTitle.innerText = 'Кто я такой?';

const about__contentBox = document.createElement('div');
about__contentBox.classList.add('about__content-box');
container3.appendChild(about__contentBox);

const about__image = document.createElement('img');
about__image.classList.add('about__image');
about__contentBox.appendChild(about__image);
about__image.src = 'image/jM5NSLPpKUs.png'

const about__textBox = document.createElement('div');
about__textBox.classList.add('about__text-box');
about__contentBox.appendChild(about__textBox);

const about__descr = document.createElement('p');
about__descr.classList.add('about__descr', 'simple-text');
about__textBox.appendChild(about__descr);
about__descr.innerText = 'Меня зовут Женя (Рыбинский). Я занимаюсь веб-разработкой и физикой.';

const about__descr2 = document.createElement('p');
about__descr2.classList.add('about__descr', 'simple-text');
about__textBox.appendChild(about__descr2);
about__descr2.innerText = 'Сейчас я собираю команду для совместных разработок, поскольку в одиночку я не справлюсь со своими амбициями и планами';


// секция company

const company = document.createElement('section');
company.classList.add('company');
document.body.appendChild(company);

const container4 = document.createElement('div');
company.appendChild(container4);
container4.classList.add('container', 'company__container');

const company__miniTitle = document.createElement('h2');
container4.appendChild(company__miniTitle);
company__miniTitle.classList.add('company__mini-title', 'main-medium-heading');
company__miniTitle.innerText = 'О компании';

const company__descr = document.createElement('p');
container4.appendChild(company__descr);
company__descr.classList.add('company__descr', 'simple-text');
company__descr.innerText = 'Компания создана для улучшения уровня жизни жителей города Рыбинска. Я не доволен, что в Рыбинске с каждым годом уменьшается число жителей и хотел бы это исправить. Для этого я разработал особый план “Спасение Рыбинска”. Всё просто - нам необходимо сделать игру “Рыбинский аллигатор”, благодаря которой я стану известным. Далее я буду баллотироваться на должность мэра Рыбинска, чтобы взять ситуацию под личный контроль. Оказавшись в кресле мэра я начну реформы по заранее подготовленному проекту (ознакомиться можно здесь___). ';


// operation

const operation = document.createElement('section');
operation.classList.add('operation');
document.body.appendChild(operation);

const container5 = document.createElement('div');
operation.appendChild(container5);
container5.classList.add('container', 'operation__container');

const operation__miniTitle = document.createElement('h2');
container5.appendChild(operation__miniTitle);
operation__miniTitle.classList.add('operation__mini-title', 'main-medium-heading');
operation__miniTitle.innerText = 'Операция “Спасение рыбинска”';

const operation__imageBox = document.createElement('ul');
container5.appendChild(operation__imageBox);
operation__imageBox.classList.add('operation__image-box');

// карточка плана начало
const operation__card = document.createElement('li');
operation__imageBox.appendChild(operation__card);
operation__card.classList.add('operation__card');

const operation__cardContent = document.createElement('div');
operation__card.appendChild(operation__cardContent);
operation__cardContent.classList.add('operation__card-content');

const operation__arrow = document.createElement('img');
operation__card.appendChild(operation__arrow);
operation__arrow.classList.add('operation__arrow');
operation__arrow.src = 'image/Arrow 1.png';

const operation__descr = document.createElement('p');
operation__cardContent.appendChild(operation__descr);
operation__descr.classList.add('operation__descr', 'simple-text');
operation__descr.innerText = 'Собираем команду';

const operation__image = document.createElement('img');
operation__cardContent.appendChild(operation__image);
operation__image.classList.add('operation__image');
operation__image.src = 'image/48c8.png';
// карточка плана конец

// карточка плана начало 2
const operation__card2 = document.createElement('li');
operation__imageBox.appendChild(operation__card2);
operation__card2.classList.add('operation__card', 'operation__card-2');

const operation__cardContent2 = document.createElement('div');
operation__card2.appendChild(operation__cardContent2);
operation__cardContent2.classList.add('operation__card-content');

const operation__arrow2 = document.createElement('img');
operation__card2.appendChild(operation__arrow2);
operation__arrow2.classList.add('operation__arrow', 'operation__arrow-2');
operation__arrow2.src = 'image/Arrow 1.png';

const operation__descr2 = document.createElement('p');
operation__cardContent2.appendChild(operation__descr2);
operation__descr2.classList.add('operation__descr', 'simple-text');
operation__descr2.innerText = 'Разрабатываем Рыбинского алигатора';

const operation__image2 = document.createElement('img');
operation__cardContent2.appendChild(operation__image2);
operation__image2.classList.add('operation__image');
operation__image2.src = 'image/maxresdefault 1.png';
// карточка плана конец

// карточка плана начало 3
const operation__card3 = document.createElement('li');
operation__imageBox.appendChild(operation__card3);
operation__card3.classList.add('operation__card', 'operation__card--low');

const operation__cardContent3 = document.createElement('div');
operation__card3.appendChild(operation__cardContent3);
operation__cardContent3.classList.add('operation__card-content');

const operation__arrow3 = document.createElement('img');
operation__card3.appendChild(operation__arrow3);
operation__arrow3.classList.add('operation__arrow', 'operation__arrow--low');
operation__arrow3.src = 'image/Arrow 1.png';

const operation__descr3 = document.createElement('p');
operation__cardContent3.appendChild(operation__descr3);
operation__descr3.classList.add('operation__descr', 'simple-text');
operation__descr3.innerText = 'Становимся богатыми и известными';

const operation__image3 = document.createElement('img');
operation__cardContent3.appendChild(operation__image3);
operation__image3.classList.add('operation__image');
operation__image3.src = 'image/16812593_original 1.png';
// карточка плана конец

// карточка плана начало 4
const operation__card4 = document.createElement('li');
operation__imageBox.appendChild(operation__card4);
operation__card4.classList.add('operation__card');

const operation__cardContent4 = document.createElement('div');
operation__card4.appendChild(operation__cardContent4);
operation__cardContent4.classList.add('operation__card-content');

const operation__arrow4 = document.createElement('img');
operation__card4.appendChild(operation__arrow4);
operation__arrow4.classList.add('operation__arrow', 'operation__arrow--left');
operation__arrow4.src = 'image/Arrow 1.png';

const operation__descr4 = document.createElement('p');
operation__cardContent4.appendChild(operation__descr4);
operation__descr4.classList.add('operation__descr', 'simple-text');
operation__descr4.innerText = 'Наслаждаемся';

const operation__image4 = document.createElement('img');
operation__cardContent4.appendChild(operation__image4);
operation__image4.classList.add('operation__image');
operation__image4.src = 'image/2377357288 1.png';
// карточка плана конец

// карточка плана начало 5
const operation__card5 = document.createElement('li');
operation__imageBox.appendChild(operation__card5);
operation__card5.classList.add('operation__card');

const operation__cardContent5 = document.createElement('div');
operation__card5.appendChild(operation__cardContent5);
operation__cardContent5.classList.add('operation__card-content');

const operation__arrow5 = document.createElement('img');
operation__card5.appendChild(operation__arrow5);
operation__arrow5.classList.add('operation__arrow', 'operation__arrow--left');
operation__arrow5.src = 'image/Arrow 1.png';

const operation__descr5 = document.createElement('p');
operation__cardContent5.appendChild(operation__descr5);
operation__descr5.classList.add('operation__descr', 'simple-text');
operation__descr5.innerText = 'Проводим реформы';

const operation__image5 = document.createElement('img');
operation__cardContent5.appendChild(operation__image5);
operation__image5.classList.add('operation__image');
operation__image5.src = 'image/1519e954ae6bd629544356cae3e51766_XL 1.png';
// карточка плана конец

// карточка плана начало 6
const operation__card6 = document.createElement('li');
operation__imageBox.appendChild(operation__card6);
operation__card6.classList.add('operation__card');

const operation__cardContent6 = document.createElement('div');
operation__card6.appendChild(operation__cardContent6);
operation__cardContent6.classList.add('operation__card-content');

const operation__descr6 = document.createElement('p');
operation__cardContent6.appendChild(operation__descr6);
operation__descr6.classList.add('operation__descr', 'simple-text');
operation__descr6.innerText = 'Мама, я мэр Рыбинска';

const operation__image6 = document.createElement('img');
operation__cardContent6.appendChild(operation__image6);
operation__image6.classList.add('operation__image');
operation__image6.src = 'image/me`r 1.png';
// карточка плана конец

// swiper

const Swiperr = document.createElement('section');
Swiperr.classList.add('Swiper');
document.body.appendChild(Swiperr);

const container6 = document.createElement('div');
Swiperr.appendChild(container6);
container6.classList.add('container', 'swiper__container', 'swiper');

const swiper__textBox = document.createElement('div');
container6.appendChild(swiper__textBox);
swiper__textBox.classList.add('swiper__text-box');

const swiper__Title = document.createElement('h2');
swiper__textBox.appendChild(swiper__Title);
swiper__Title.classList.add('swiper__title', 'main-medium-heading');
swiper__Title.innerText = 'Система “Свой”';

const swiper__descr = document.createElement('p');
swiper__textBox.appendChild(swiper__descr);
swiper__descr.classList.add('swiper__descr', 'simple-text');
swiper__descr.innerText = 'Если вас заинтересовала моя идея и вы хотите помочь жителем Рыбинска, то я приглашаю вас в свою команду.  ';

const swiper__descr2 = document.createElement('p');
swiper__textBox.appendChild(swiper__descr2);
swiper__descr2.classList.add('swiper__descr', 'simple-text');
swiper__descr2.innerText = 'Что от вас требуется:';

const swiperWrapper = document.createElement('div');
container6.appendChild(swiperWrapper);
swiperWrapper.classList.add('swiper-wrapper')

const swiperPagination = document.createElement('div');
container6.appendChild(swiperPagination);
swiperPagination.classList.add('swiper-pagination')

// const swiperButtonNext = document.createElement('div');
// container6.appendChild(swiperButtonNext);
// swiperButtonNext.classList.add('swiper-button-next')

// const swiperButtonPrev = document.createElement('div');
// container6.appendChild(swiperButtonPrev);
// swiperButtonPrev.classList.add('swiper-button-prev')

// cлайд 
const swiperSlide = document.createElement('div');
swiperWrapper.appendChild(swiperSlide);
swiperSlide.classList.add('swiper-slide')

const swiper__miniTitle = document.createElement('p');
swiperSlide.appendChild(swiper__miniTitle);
swiper__miniTitle.classList.add('swiper__mini-title', 'simple-text')
swiper__miniTitle.innerText = '1. Желание заниматься программированием'

const swiper__image = document.createElement('img');
swiperSlide.appendChild(swiper__image);
swiper__image.classList.add('swiper__image');
swiper__image.src = 'image/swip1.png';

// cлайд 2
const swiperSlide2 = document.createElement('div');
swiperWrapper.appendChild(swiperSlide2);
swiperSlide2.classList.add('swiper-slide')

const swiper__miniTitle2 = document.createElement('p');
swiperSlide2.appendChild(swiper__miniTitle2);
swiper__miniTitle2.classList.add('swiper__mini-title', 'simple-text')
swiper__miniTitle2.innerText = '2. Компьютер или ноутбук'

const swiper__image2 = document.createElement('img');
swiperSlide2.appendChild(swiper__image2);
swiper__image2.classList.add('swiper__image');
swiper__image2.src = 'image/swip2.png';

// cлайд 3
const swiperSlide3 = document.createElement('div');
swiperWrapper.appendChild(swiperSlide3);
swiperSlide3.classList.add('swiper-slide')

const swiper__miniTitle3 = document.createElement('p');
swiperSlide3.appendChild(swiper__miniTitle3);
swiper__miniTitle3.classList.add('swiper__mini-title', 'simple-text')
swiper__miniTitle3.innerText = '3. Социальная сеть для связи (вк, телеграм) и желательно дискорд'

const swiper__image3 = document.createElement('img');
swiperSlide3.appendChild(swiper__image3);
swiper__image3.classList.add('swiper__image');
swiper__image3.src = 'image/swip3.png';

// cлайд 4
const swiperSlide4 = document.createElement('div');
swiperWrapper.appendChild(swiperSlide4);
swiperSlide4.classList.add('swiper-slide')

const swiper__miniTitle4 = document.createElement('p');
swiperSlide4.appendChild(swiper__miniTitle4);
swiper__miniTitle4.classList.add('swiper__mini-title', 'simple-text')
swiper__miniTitle4.innerText = '4. Готовность работать за идею'

const swiper__image4 = document.createElement('img');
swiperSlide4.appendChild(swiper__image4);
swiper__image4.classList.add('swiper__image');
swiper__image4.src = 'image/swip4.png';

// footer

const footer = document.createElement('footer');
footer.classList.add('footer');
document.body.appendChild(footer);

const container7 = document.createElement('div');
footer.appendChild(container7);
container7.classList.add('container', 'footer__container');

const footer__textBox = document.createElement('div');
container7.appendChild(footer__textBox);
footer__textBox.classList.add('footer__text-box');

const footer__group = document.createElement('div');
container7.appendChild(footer__group);
footer__group.classList.add('footer__group');

const footer__btn = document.createElement('a');
footer__group.appendChild(footer__btn);
footer__btn.classList.add('footer__btn','btn');
footer__btn.innerText = 'Заплыть в бухту';
footer__btn.href = '#';

const footer__number = document.createElement('p');
footer__group.appendChild(footer__number);
footer__number.classList.add('footer__number');
footer__number.innerText = '89203689477';

const footer__descr = document.createElement('a');
footer__textBox.appendChild(footer__descr);
footer__descr.classList.add('footer__descr')
footer__descr.innerText = 'Мой vk'
footer__descr.href = 'https://vk.com/evgenik26'

const footer__descr2 = document.createElement('a');
footer__textBox.appendChild(footer__descr2);
footer__descr2.classList.add('footer__descr')
footer__descr2.innerText = 'Мой tg'
footer__descr2.href = 'https://t.me/Evgenik_26'

const footer__descr3 = document.createElement('a');
footer__textBox.appendChild(footer__descr3);
footer__descr3.classList.add('footer__descr')
footer__descr3.innerText = 'Мой discord'
footer__descr3.href = 'https://discordapp.com/users/779671502714306570/'



var swiper = new Swiper(".swiper__container", {
    cssMode: true,
    loop: true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    mousewheel: true,
    keyboard: true,
  });

let burger = document.querySelector('.burger');
let links = document.querySelector('.header__group--burger');
burger.addEventListener('click', function () {
	links.classList.toggle('burger--open');
	burger.classList.toggle('burger--cross');
});