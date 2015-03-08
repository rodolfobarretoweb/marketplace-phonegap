Module('Interface', function(Interface){
  var loading  = $('#loading'),
      _this;

  Interface.fn.initialize = function() {
    this.actionsTopBar();
  };

  Interface.fn.createLoading = function() {
    loading.fadeIn();
  };

  Interface.fn.destroyLoading = function() {
    loading.fadeOut();
  };

  // Actions of top bar
  Interface.fn.actionsTopBar = function() {
    var main_header_topbar = $('#main-header-topbar'),
        main_header_search = $('#main-header-search'),
        main               = new Main(),
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
});