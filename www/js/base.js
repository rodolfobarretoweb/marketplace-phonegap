Module('Base', function(Base){
  // CONSTANTS
  var BASE_URL     = 'http://secondjob.com.br/marketplace/',
      BASE_URL_API = BASE_URL + 'api-v1/';

  Base.fn.compileTemplate = function(html, data, container){
    var template = Handlebars.compile(html);

    if(container === undefined) {
      container = $('#content');
    }

    // inserts environment variables    
    $.extend(data, {base_url : BASE_URL});

    container.html(template(data));
  };

  Base.fn.setUrlAPI = function(target){
    return BASE_URL_API + target;
  };

  // events
  Base.fn.deviceReady = function(callback) {
    document.addEventListener("deviceready", callback, false);
  };

  Base.fn.backButton = function(callback){
    document.addEventListener("backbutton", callback, false);
  };

  Base.fn.onResume = function(callback){
    document.addEventListener("resume", callback, false);
  };

  Base.fn.typeConnection = function() {
    var network_status = navigator.connection.type,
        states = {};

    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return states[network_status];
  };

  Base.fn.hasConnection = function(calbackSuccess, callbackError) {
    if(this.typeConnection() != 'No network connection') {
      calbackSuccess();
    } else {
      if(callbackError === undefined) {
        window.location.href = "connectionless.html";
      } else {
        callbackError();
      }
    }
  };

  Base.fn.getPosition = function(callback) {
    navigator.geolocation.getCurrentPosition(
      function(position){
        callback(position, null);
      },

      function(error) {
        callback(null, error.message);
      },

      { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
    );
  };
});