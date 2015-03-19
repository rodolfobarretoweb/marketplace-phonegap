Module('Search', function(Search){
  var  search_template = $('#search-template'),
       main            = new Main(),
       base            = new Base();

  Search.fn.initialize = function(){
    this.seachShoppings();
  };

  Search.fn.seachShoppings = function() {
    var main_header_search_field = $("#main-header-search-field");

    $('#main-header-search').submit(function(){
      main_header_search_field.blur();

      main.getShoppings({
        'query' : $.trim(main_header_search_field.val())
      }, function(json){
        base.compileTemplate(search_template.html(), json);
      });

      return false;
    });
  };
});

Module.run('Search');