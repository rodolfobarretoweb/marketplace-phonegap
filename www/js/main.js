Module('Main', function(Main){
  var base          = new Base(),
      interface     = new Interface(),
      main_template = $('#main-template'),
      _this;

  Main.fn.initialize = function() {
    this.callExternalServiceLoading();

    // get reference of object
    _this = this;

    base.deviceReady(function(){
      if(main_template.length > 0) {
        base.hasConnection(function(){
          _this.getShoppingsByPosition();
          _this.seachShoppings();
        });
      }
    });

    base.onResume(function(){
      interface.destroyLoading();
    });
  };

  Main.fn.getShoppingsByPosition = function(){
    // Call loading (long operation)
    interface.createLoading();

    base.getPosition(function(position, error){
      if(error === null) {
        _this.getShoppings({
          'lat' : position.coords.latitude,
          'lng' : position.coords.longitude
        }, function(json){
          base.compileTemplate(main_template.html(), json);
        });

      } else {
        interface.toast("GPS desativado, buscando shoppings aleatórios");

        _this.getShoppings({
          'limit' : 20
        }, function(json){
          base.compileTemplate(main_template.html(), json);
        });
      }
    });
  };

  Main.fn.seachShoppings = function() {
    var main_header_search_field = $("#main-header-search-field");

    $('#main-header-search').submit(function(){
      main_header_search_field.blur();

      _this.getShoppings({
        'query' : $.trim(main_header_search_field.val())
      }, function(json){
        base.compileTemplate(main_template.html(), json);
      });

      return false;
    });
  };

  Main.fn.getShoppings = function(filters, callback) {
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
        callback(json);
        interface.goToTop();
      }
    });
  };

  // Show loading interface when external service is called
  Main.fn.callExternalServiceLoading = function() {
    $(document).on('click', '#call-external-service button', function(){
      interface.createLoading();

      var service = $(this).data('service'),
          param   = $(this).data('param'),
          application_package_name = [];

      switch(service) {
        case 'map':
          action = ["action", "VIEW"];
          param  = "http://maps.google.com/maps?q=" + param;
        break;

        case 'phone':
          action = ["action", "DIAL"];
          param  = "tel:" + param;
        break;

        case 'email':
          action = ["action", "VIEW"];
          param  = "mailto:" + param;
        break;

        case 'website':
          action = ["action", "VIEW"];
          param  = param;
        break;
      }

      navigator.startApp.start([action, [param]], function(message) {},

      function(error) {
        interface.destroyLoading();
        interface.toast("Não foi possível executar essa aplicação");
      });
    });
  };
});

Module.run('Main');