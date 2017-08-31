'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('.project');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };


  let render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    ui();

    $('.project ul').append(
      app.repos.with('name').map(render))
  };

  module.repoView = repoView;
})(app);
