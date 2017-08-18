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

var t = setInterval(function(){
  $("ul").animate({marginLeft:-500},1000,function(){
	  $(this).find("li:last").after($(this).find("li:first"));
	 $(this).attr('class','sliding');
  });
},3000);



$(document).ready(function(){
  portfolio.handle();
  portfolio.handleClick();
  t;
});
