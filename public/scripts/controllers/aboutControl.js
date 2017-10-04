var app = app || {};

(function(module) {
  const aboutControl = {};

  aboutControl.init = function() {
    $('#about').show().siblings().hide()
  }

  module.aboutControl = aboutControl;
})(app);
