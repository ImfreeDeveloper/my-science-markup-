/* eslint-disable */
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
