Module('Main', function(Main){
  var base      = new Base(),
      interface = new Interface();

  Main.fn.initialize = function() {
    this.getShoppings();
  };

  Main.fn.getShoppings = function() {
    base.deviceReady(function(){
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
    });
  };
});

Module.run('Main');