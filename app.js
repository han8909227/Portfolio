'use strict';

/*globals $,document:false */

var portfolio = {};
var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

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

portfolio.slideLeft = function() {
  $('#slider ul').animate({
    left: + slideWidth
  }, 200, function () {
    $('#slider ul li:last-child').prependTo('#slider ul');
    $('#slider ul').css('left', '');
  });
};

portfolio.slideRight = function() {
  $('#slider ul').animate({
    left: - slideWidth
  }, 200, function () {
    $('#slider ul li:first-child').appendTo('#slider ul');
    $('#slider ul').css('left', '');
  });
};

// var t = setInterval(function(){
//   $("ul").animate({marginLeft:-500},1000,function(){
//
// 	 $(this).find("li:last").after($(this).find("li:first"));
// 	 $(this).attr('class','sliding');
//   });
// },3000);

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
      moveRight();
    }, 3000);
  });



  	$('#slider').css({ width: slideWidth, height: slideHeight });

  	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');



      $('a.control_prev').click(function () {
          portfolio.slideLeft();
      });

    $('a.control_next').click(function () {
        portfolio.slideRight();
    });

});




//




$(document).ready(function(){
  portfolio.handle();
  portfolio.handleClick();
  t;



});
