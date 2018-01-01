'use strict';

var app = app || {};

(function(module) {
  const projectControl = {};

  projectControl.init = function() {
    $('#project').show().siblings().hide();

    app.repos.requestRepos(app.repoView.index);
  }

  module.projectControl = projectControl;
})(app);
