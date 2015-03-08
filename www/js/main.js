Module('Main', function(Main){
  var base      = new Base(),
      interface = new Interface(),
      _this;

  Main.fn.initialize = function() { 
    this.callExternalServiceLoading();

    // get reference of object
    _this = this;

    base.deviceReady(function(){
      // call all methods when device is ready
      _this.getShoppingsByPosition();
      _this.seachShoppings();
    });
        
    base.onResume(function(){
      interface.destroyLoading();
    });
  };

  Main.fn.seachShoppings = function() {
    _this = this;

    $('#main-header-search').submit(function(){
      _this.getShoppings({'query' : $("#main-header-search-field").val()});

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
    base.hasConnection(function(){
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
    });
  };

  Main.fn.callExternalServiceLoading = function() {
    $(document).on('click', '.call-external-service', function(){
      interface.createLoading();
    });
  };
});

Module.run('Main');