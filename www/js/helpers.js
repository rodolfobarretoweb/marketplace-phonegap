Handlebars.registerHelper('ifCond', function(param1, param2, options) {
  if(param1 == param2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('ifNot', function(param1, param2, options) {
  if(param1 != param2) {
    return options.fn(this);
  }
});

Handlebars.registerHelper('date_format', function(date) {
  date = date.split('-');
  date = date[2] + '/' + date[1] + '/' + date[0];

  return date;
});

Handlebars.registerHelper('now', function(){
  var date  = new Date(),
      year  = date.getFullYear(),
      month = date.getMonth(),
      day   = date.getDate();

  if(month < 9){
    month = '0' + month;
  }

  if(month >= 0) {
    month = '01';
  }

  if(day < 9){
    day = '0' + day;
  }

  return day + '/' + month + '/' + year;
});

Handlebars.registerHelper('character_limit', function(str, limit) {
  if (str.length > limit) {
    return str.substring(0, limit) + '...';
  }

  return str;
});

Handlebars.registerHelper('get_thumb', function(photo){
  if(photo !== null) {
    var thumb = photo.split('.jpg');
    thumb = thumb[0] + '_thumb.jpg';

    return thumb;
  }

  return '';
});

Handlebars.registerHelper('nl2br', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
    return new Handlebars.SafeString(nl2br);
});