Module('Connectionless', function(Connectionless){
  var interface = new Interface(),
      base      = new Base();

  Connectionless.fn.initialize = function(){
    this.checkConnection();
  };

  Connectionless.fn.checkConnection = function(){
    $(document).on('click', '#connectionless-check-connection-button', function(){
      base.hasConnection(function(){
        interface.toast("Conexão estabelecida, procurando shoppings...");
        interface.createLoading();

        window.setTimeout(function(){
          window.location.href = "main.html";
        }, 100);
      }, function(){
        interface.toast("Ainda sem conexão...");
      });

      return false;
    });
  };
});

Module.run('Connectionless');