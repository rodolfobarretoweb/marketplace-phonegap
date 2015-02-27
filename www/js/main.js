Module('Main', function(Main){

  Main.fn.initialize = function() {
    var base = new Base();

    base.template('main.tpl', '');
  }
});

Module.run('Main');