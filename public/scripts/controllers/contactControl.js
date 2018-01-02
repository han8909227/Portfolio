var app = app || {};

(function(module) {
  const contactControl = {};

  contactControl.init = function() {
    $('#contact').show().siblings().hide()
    $('#particles-js').css('z-index', 'auto');

  }

  module.contactControl = contactControl;
})(app);
