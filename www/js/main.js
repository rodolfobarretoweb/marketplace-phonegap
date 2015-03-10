Module('Main', function(Main){
  var base      = new Base(),
      interface = new Interface(),
      _this;

  Main.fn.initialize = function() { 
    this.callExternalServiceLoading();

    // get reference of object
    _this = this;

    base.deviceReady(function(){
      base.hasConnection(function(){
        // call all methods when device is ready
        interface.createLoading();
        _this.getShoppingsByPosition();
        _this.seachShoppings();
      });
    });
        
    base.onResume(function(){
      interface.destroyLoading();
    });
  };

  Main.fn.seachShoppings = function() {
    _this = this;

    var main_header_search_field = $("#main-header-search-field");

    $('#main-header-search').submit(function(){
      _this.getShoppings({
        'query' : $.trim(main_header_search_field.val())
      });
      
      main_header_search_field.blur();

      return false;
    });
  };

  Main.fn.getShoppingsByPosition = function(){
    base.getPosition(function(position, error){

      if(error == null) {
        _this.getShoppings({
          'lat' : position.coords.latitude, 
          'lng' : position.coords.longitude
        });
      } else {
        _this.getShoppings({
          'limit' : 20
        })
      }  
    });
  };

  Main.fn.getShoppings = function(filters) {
    $.ajax({
      url        : base.setUrlAPI('shopping/get/'),
      type       : 'get',
      dataType   : 'json',
      data       : filters,
      cache      : true,
      ifModified : true,

      beforeSend : function(){
        interface.createLoading();
      },

      complete : function() {
        interface.destroyLoading();
      },

      error: function() {
        interface.destroyLoading();
      },

      success  : function(json) {
        base.template('main.tpl', json);
      } 
    });
  };

  // Show loading interface when external service is called
  Main.fn.callExternalServiceLoading = function() {
    $(document).on('click', '.call-external-service', function(){
      interface.createLoading();
    });
  };
});

Module.run('Main');