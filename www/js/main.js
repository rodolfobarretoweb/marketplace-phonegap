Module('Main', function(Main){
  var base      = new Base(),
      interface = new Interface(),
      _this;

  Main.fn.initialize = function() { 
    this.callExternalServiceLoading();

    _this = this;

    base.deviceReady(function(){
      base.hasConnection(function(){
        _this.getShoppings();
      });
    });
        
    base.onResume(function(){
      interface.destroyLoading();

      base.hasConnection(function(){
        _this.getShoppings();
      });
    });
  };

  Main.fn.getShoppings = function() {
    $.ajax({
      url      : base.setUrlAPI('shopping'),
      type     : 'get',
      dataType : 'json',
      cache    : true,

      beforeSend : function() {
        interface.createLoading();
      },

      complete : function() {
        interface.destroyLoading();
      },

      success  : function(json) {
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