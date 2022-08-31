var swiper = new Swiper(".swiper__container", {
    cssMode: true,
    loop: true,
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

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [43.127183, 131.940255],
            zoom: 11,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([43.127183, 131.940255], {
            hintContent: 'Рыбинск?',
            balloonContent: 'Рыбинск!'
        }, {
            iconLayout: 'default#image',
            iconImageSize: [40, 40],
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
        .add(myPlacemark)
});

let burger = document.querySelector('.burger');
let links = document.querySelector('.header__group--burger');
burger.addEventListener('click', function () {
	links.classList.toggle('burger--open');
	burger.classList.toggle('burger--cross');
});