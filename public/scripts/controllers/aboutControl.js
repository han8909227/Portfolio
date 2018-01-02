var app = app || {};

(function(module) {
  const aboutControl = {};

  aboutControl.init = function() {
    $('#about').show().siblings().hide();
    $('#particles-js').css('z-index', 'auto');

  }

  module.aboutControl = aboutControl;
})(app);
