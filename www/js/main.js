Module('Main', function(Main){
  var base = new Base();

  Main.fn.initialize = function() {
    this.getShoppings();
  };

  Main.fn.getShoppings = function() {
    $.ajax({
      url      : base.setUrlAPI('shopping'),
      type     : 'get',
      dataType : 'json',
      cache    : true,
      success  : function(json) {
        base.template('main.tpl', json);
      }
    });
  };
});

Module.run('Main');