Module('Interface', function(Interface){
  var loading  = $('#loading'),
      _this;

   /* Global use of methods */
  Interface.fn.initialize = function() {
    this.actionsTopBar();
  };

  Interface.fn.createLoading = function() {
    loading.fadeIn();
  };

  Interface.fn.destroyLoading = function() {
    loading.fadeOut();
  };

   /* Specific use of methods */

  // Actions of top bar
  Interface.fn.actionsTopBar = function() {
    var main_header_topbar = $('#main-header-topbar'),
        main_header_search = $('#main-header-search'),
        main               = new Main();

    _this = this;

    $('#trigger-main-search').click(function(){
      main_header_topbar.addClass('hidden');
      main_header_search.removeClass('hidden');

      $('#main-header-search-field').focus();
    });

    $('#main-header-search-back-button').click(function(){
      main_header_topbar.removeClass('hidden');
      main_header_search.addClass('hidden');

      main.getShoppingsByPosition();
    });
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