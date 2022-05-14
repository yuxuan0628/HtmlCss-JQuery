$(document).ready(function() {
  //下拉選單  
  $('.dropdown').click(function (e) { 
    e.preventDefault(); //取消a連結的事件
    $('.dropdown').toggleClass('active'); //li點擊後dropdown的a連結會變成active的css樣式
    $('.dropdown-open').slideToggle(); //點擊後第一層ul會被打開  
 });
  
 //照片輪播
 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed:500,
  loop: true,
  autoplay: {
    delay: 1500, //自動輪播
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 });

  //lightbox圖片出現秒數，千分之毫秒
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  //top-button回到起始點
  $('.top-button a').click(function(event) {
    event.preventDefault(); //先使a連結取消預設連結功能
    $('html,body').animate({
      scrollTop: 0 //用animate動畫的捲軸效果使畫面回到0的位置，用1000毫秒
    }, 1000);
   });


 
    
});