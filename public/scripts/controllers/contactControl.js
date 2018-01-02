var app = app || {};

(function(module) {
  const contactControl = {};

  contactControl.init = function() {
    $('#contact').show().siblings().hide()
  }

  module.contactControl = contactControl;
})(app);
