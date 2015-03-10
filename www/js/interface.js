Module('Interface', function(Interface){
  var loading  = $('#loading'),
      _this;

  /* Global use of methods */
  Interface.fn.initialize = function() {
    this.actionsTopBar();
    this.refreshOffline();
  };

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

  /* Specific use of methods */

  // Actions of top bar
  Interface.fn.actionsTopBar = function() {
    var main_header_topbar = $('#main-header-topbar'),
        main_header_search = $('#main-header-search'),
        content            = $('#content'),
        main_content;

    _this = this;

    $('#trigger-main-search').click(function(){
      main_header_topbar.addClass('hidden');
      main_header_search.removeClass('hidden');

      // Get content of main template
      main_content = content.html();

      $('#main-header-search-field').focus();
    });

    $('#main-header-search-back-button').click(function(){
      main_header_topbar.removeClass('hidden');
      main_header_search.addClass('hidden');

      content.html(main_content);
    });
  };

  Interface.fn.refreshOffline = function() {
    _this = this;

    var main    = new Main(),
        base    = new Base();
    
    $(document).on('click', '#refresh-offline', function(){
      base.hasConnection(
        function(){
          _this.createLoading();
          main.getShoppingsByPosition();
        },

        function(){
          _this.toast('Infelizmente não há conexão de internet para atualizar.');
        }
      );
    });
  };
});