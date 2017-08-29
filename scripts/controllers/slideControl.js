var app = app || {};

(function(module) {
  const slideControl = {};

  slideControl.init = function() {
    $('#page').hide();
    $('.slide').show();
  }

  module.slideControl = slideControl;
})(app);
