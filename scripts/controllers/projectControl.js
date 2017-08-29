var app = app || {};

(function(module) {
  const projectControl = {};

  projectControl.init = function() {
    $('#page').hide();
    $('.project').show();
  }

  module.projectControl = projectControl;
})(app);
