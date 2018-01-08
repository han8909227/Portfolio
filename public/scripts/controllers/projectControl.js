'use strict';

var app = app || {};

(function(module) {
  const projectControl = {};

  projectControl.init = function() {
    $('#project').show().siblings().hide();
    $('#particles-js').css('z-index', '-1');

    app.Project.fetchAll(app.repoView.index);
  }

  module.projectControl = projectControl;
})(app);
