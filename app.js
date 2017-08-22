'use strict';

/*globals $,document:false */

var portfolio = {};
var liEle = $('#imgUl li');
var count = liEle.length;
var width = liEle.width();
var height = liEle.height();
var ulWidth = count * width;

portfolio.handle = function() {
  $('nav').on('click', 'li', function(){
    var $showThis = $(this).data('content');
    $('section#page').hide();
    $('section.' + $showThis).show();
  });
};

portfolio.handleClick = function(){
  $('i#menu').on('click', function() {
    $('.menu').toggle('500');
  });
};



portfolio.leftArr = function() {
  $('#imgUl').animate({
    left: + width
  }, 200, function () {
    $('#imgUl li:last-child').prependTo('#imgUl');
    $('#imgUl').css('left', '');
  });
};

portfolio.rightArr = function() {
  $('#imgUl').animate({
    left: - width
  }, 200, function () {
    $('#imgUl li:first-child').appendTo('#imgUl');
    $('#imgUl').css('left', '');
  });
};

portfolio.initAnimate = function(){
  $('#slide').css({ width: width, height: height });
  $('#imgUl').css({ width: ulWidth, marginLeft: - width });
  $('#imgUl li:last-child').prependTo('#imgUl');
  $('a#prev').click(function () {
    portfolio.leftArr();
  });
  $('a#next').click(function () {
    portfolio.rightArr();
  });
  var imgWidth = $('#imgUl li.img').width();
  var parentWidth = $('#imgUl li').width();
  if (imgWidth > parentWidth) {
    $('#imgUl li.img').css('width', '100%');
    $('#imgUl li img').css('height','100%');
  }
};



$(document).ready(function(){
  portfolio.handle();
  portfolio.handleClick();
  portfolio.initAnimate();
});
