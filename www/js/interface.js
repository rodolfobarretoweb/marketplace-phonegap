Module('Interface', function(Interface){
  var loading = $('.loading');

  Interface.fn.createLoading = function() {
    loading.fadeIn();
  };

  Interface.fn.destroyLoading = function() {
    loading.fadeOut();
  };
});