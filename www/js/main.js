Module('Main', function(Main){
  var base      = new Base(),
      interface = new Interface();

  Main.fn.initialize = function() {
    this.getShoppings();
    this.callExternalServiceLoading();
  };

  Main.fn.getShoppings = function() {
    //base.deviceReady(function(){
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
    //});
  };

  Main.fn.callExternalServiceLoading = function() {
    $(document).on('click', '.call-external-service', function(){
      interface.createLoading();
    });
  };
});

Module.run('Main');