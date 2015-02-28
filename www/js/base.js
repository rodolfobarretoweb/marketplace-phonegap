Module('Base', function(Base){
  // CONSTANTS
  var BASE_URL     = 'http://secondjob.com.br/marketplace/',
      BASE_URL_API = BASE_URL + 'api/';

  Base.fn.template = function(file, data){
    var template = TPL['views/' + file];
    $.extend(data, {base_url : BASE_URL});

    $('.content').html(template(data));
  };

  Base.fn.deviceReady = function(callback) {
    document.addEventListener("deviceready", callback, false);
  };

  Base.fn.setUrlAPI = function(target){
    return BASE_URL_API + target;
  };
});