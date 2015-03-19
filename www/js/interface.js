Module('Interface', function(Interface){
  var loading  = $('#loading'),
      _this;

  Interface.fn.createLoading = function() {
    loading.fadeIn();
  };

  Interface.fn.destroyLoading = function() {
    loading.fadeOut();
  };

  Interface.fn.toast = function(message) {
    window.plugins.toast.showLongCenter(
      message,

      function(a){},

      function(b){
        window.alert(message);
      }
    );
  };
});