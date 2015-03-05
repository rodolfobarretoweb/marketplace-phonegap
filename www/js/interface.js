Module('Interface', function(Interface){
  var loading  = $('#loading'),
      nav_open = false,
      base    =  new Base();

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
      sub_nav.removeClass('close_sub_nav_animation');
      sub_nav.addClass('open_sub_nav_animation');

      nav_open = true;
    }

    function closeSubNav() {
      sub_nav.removeClass('open_sub_nav_animation');
      sub_nav.addClass('close_sub_nav_animation');

      nav_open = false;
    }

    $('body').swipeleft(function(){
      if(nav_open === true){
        closeSubNav();
      }
    });

    $('#trigger-main-sub-nav').click(function(){
      if(nav_open === false) {
        openSubNav();
      } else {
        closeSubNav();
      }

      return false;
    });
  };
});