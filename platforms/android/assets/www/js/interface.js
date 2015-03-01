Module('Interface', function(Interface){
  var loading = $('#loading'),
      base    = new Base();

  Interface.fn.initialize = function() {
    this.actionsSubNav();
  };

  Interface.fn.createLoading = function() {
    loading.fadeIn();
  };

  Interface.fn.destroyLoading = function() {
    loading.fadeOut();
  };

  Interface.fn.actionsSubNav = function() {
    var sub_nav = $('#main-sub-nav');

    function openSubNav() {
      sub_nav.css('display','block').animate({left:'0%'}, 150);
    }

    function closeSubNav() {
      sub_nav.animate({left:'-100%'}, 150, function() {
        sub_nav.css('display','none');
      });
    }

    if(sub_nav.css('display') == 'none') {
      base.backButton(function(){
        closeSubNav();
      });

      $('body').swipeleft(function(){
        closeSubNav();
      });
    }

    $('#trigger-main-sub-nav').click(function(){
      if(sub_nav.css('display') == 'none') {
        openSubNav();
      } else {
        closeSubNav();
      }

      return false;
    });
  };
});