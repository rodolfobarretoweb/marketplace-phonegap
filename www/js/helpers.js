Handlebars.registerHelper('empty', function(conditional, options) {
  if(conditional == ' ') {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('ifCond', function(param1, param2, options) {
  if(param1 == param2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
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