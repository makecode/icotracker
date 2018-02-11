//=include libs/jquery.js
//=include libs/owl.carousel.min.js
'use strict';

$(document).ready(function() {
  $('.carousel').owlCarousel({
    items: 4,
    margin: 20,
    loop: true,
    pagination: false,
    nav: true,
    navText: ['<img class="btn-prev" src="../img/arrow-left.png" />','<img class="btn-next" src="../img/arrow-right.png" />']
  });
});
