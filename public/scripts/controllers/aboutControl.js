var app = app || {};

(function(module) {
  const aboutControl = {};

  aboutControl.init = function() {
    $('#page').hide();
    $('.about').show();
  }

  module.aboutControl = aboutControl;
})(app);
