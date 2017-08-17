'use strict';

var portfolio = {};

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

$(document).ready(function(){
  portfolio.handle();
  portfolio.handleClick();
});
