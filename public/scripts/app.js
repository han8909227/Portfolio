'use strict';


let portfolio = [];
let liEle = $('#imgUl li');
let count = liEle.length;
let width = liEle.width();
let height = liEle.height();
let ulWidth = count * width;

function Portfolio (rawDataObj) {
  this.title = rawDataObj.title;
  this.body = rawDataObj.body;
}

Portfolio.handle = function() {
  $('nav').on('click', 'li', function(){
    let $showThis = $(this).data('content');
    $('section#page').hide();
    $('section.' + $showThis).show();
  });
};

Portfolio.handleClick = function(){
  $('i#menu').on('click', function() {
    $('.menu').toggle('500');
  });
};


Portfolio.leftArr = function() {
  $('#imgUl').animate({
    left: + width
  }, 200, function () {
    $('#imgUl li:last-child').prependTo('#imgUl');
    $('#imgUl').css('left', '');
  });
};

Portfolio.rightArr = function() {
  $('#imgUl').animate({
    left: - width
  }, 200, function () {
    $('#imgUl li:first-child').appendTo('#imgUl');
    $('#imgUl').css('left', '');
  });
};

Portfolio.initAnimate = function(){
  $('.slide').css({ width: width, height: height });
  $('#imgUl').css({ width: ulWidth, marginLeft: - width });
  $('#imgUl li:last-child').prependTo('#imgUl');
  $('a#prev').click(function () {
    Portfolio.leftArr();
  });
  $('a#next').click(function () {
    Portfolio.rightArr();
  });
  let imgWidth = $('#imgUl li.img').width();
  let parentWidth = $('#imgUl li').width();
  if (imgWidth > parentWidth) {
    $('#imgUl li.img').css('width', '100%');
    $('#imgUl li img').css('height','100%');
  }
};


$(document).ready(function(){
  Portfolio.handle();
  // Portfolio.handleClick();
  Portfolio.initAnimate();
});
