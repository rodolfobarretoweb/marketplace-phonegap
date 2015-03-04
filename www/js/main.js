Module('Main', function(Main){
  var base        = new Base(),
      interface   = new Interface(),
      loaded_view = false,
      _this;

  Main.fn.initialize = function() { 
    this.callExternalServiceLoading();

    // get reference of object
    _this = this;

    base.deviceReady(function(){
      base.hasConnection(function(){
        _this.getShoppings();
        _this.seachShoppings();
      });
    });
        
    base.onResume(function(){
      interface.destroyLoading();
    });
  };

  Main.fn.seachShoppings = function() {
    _this = this;

    $('#main-search').submit(function(){
      _this.getShoppings($("input[name='search']").val());

      return false;
    });
  };

  Main.fn.getShoppings = function(search) {
    if(search === undefined) { search = '';}

    $.ajax({
      url        : base.setUrlAPI('shopping/get/' + search),
      type       : 'get',
      dataType   : 'json',
      cache      : true,
      ifModified : true,

      beforeSend : function() {
        interface.createLoading();
      },

      complete : function() {
        interface.destroyLoading();
      },

      error: function() {
        interface.destroyLoading();
      },

      success  : function(json) {
        loaded_view = true;
        base.template('main.tpl', json);
      } 
    });
  };

  Main.fn.callExternalServiceLoading = function() {
    $(document).on('click', '.call-external-service', function(){
      interface.createLoading();
    });
  };
});

Module.run('Main');