Module('Base', function(Base){
  
  Base.fn.template = function(file, data){
    var template = TPL['views/' + file];
    $('.content').html(template(data));
  };
});