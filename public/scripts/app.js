'use strict';

/*globals $,document:false */

var portfolio = [];


var liEle = $('#imgUl li');
var count = liEle.length;
var width = liEle.width();
var height = liEle.height();
var ulWidth = count * width;

function Portfolio (rawDataObj) {
  this.title = rawDataObj.title;
  this.body = rawDataObj.body;
}

Portfolio.handle = function() {
  $('nav').on('click', 'li', function(){
    var $showThis = $(this).data('content');
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
  var imgWidth = $('#imgUl li.img').width();
  var parentWidth = $('#imgUl li').width();
  if (imgWidth > parentWidth) {
    $('#imgUl li.img').css('width', '100%');
    $('#imgUl li img').css('height','100%');
  }
};

// rawData.forEach(function(obj) {
//   portfolio.push(new Portfolio(obj));
// });
//
// portfolio.forEach(function(article){
//   $('#articles').append(article.toHtml());
// });
//
//
// Portfolio.toHtml = function() {
//   var template = Handlebars.compile($('#article-template').text());
//   return template(this);
// };


$(document).ready(function(){
  Portfolio.handle();
  // Portfolio.handleClick();
  Portfolio.initAnimate();
});
