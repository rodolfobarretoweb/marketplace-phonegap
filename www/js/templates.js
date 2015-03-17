this["TPL"] = this["TPL"] || {};

this["TPL"]["www/views/main.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <hgroup>\n            <h3>"
    + escapeExpression((helper = helpers.character_limit || (depth0 && depth0.character_limit),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name_shopping), 50, options) : helperMissing.call(depth0, "character_limit", (depth0 && depth0.name_shopping), 50, options)))
    + "</h3>\n            <h4>";
  if (helper = helpers.city_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n          </hgroup>\n        </div>\n   \n        <div class=\"card-content\">\n          ";
  stack1 = (helper = helpers.ifNot || (depth0 && depth0.ifNot),options={hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth1),data:data},helper ? helper.call(depth0, (depth0 && depth0.photo_name_shopping), (depth0 && depth0.null), options) : helperMissing.call(depth0, "ifNot", (depth0 && depth0.photo_name_shopping), (depth0 && depth0.null), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n          <div id=\"call-external-service\" class=\"row\">\n            <div class=\"col-xs-3 col-sm-3\">\n              <button data-service=\"map\" data-param=\"";
  if (helper = helpers.address_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.city_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.state_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.state_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.address_shopping), "", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.address_shopping), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <span class=\"glyphicon glyphicon-map-marker\"></span> \n              </button>\n            </div>\n\n            <div class=\"col-xs-3 col-sm-3\">\n              <button data-service=\"phone\" data-param=\"";
  if (helper = helpers.contact_number_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contact_number_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.contact_number_shopping), "", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.contact_number_shopping), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <span class=\"glyphicon glyphicon-earphone\"></span> \n              </button>\n            </div>\n          \n            <div class=\"col-xs-3 col-sm-3\">\n              <button data-service=\"email\" data-param=\"";
  if (helper = helpers.email_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.email_shopping), "", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.email_shopping), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <span class=\"glyphicon glyphicon-envelope\"></span> \n              </button>\n            </div>\n\n            <div class=\"col-xs-3 col-sm-3\">\n              <button data-service=\"website\" data-param=\"";
  if (helper = helpers.website_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.website_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.website_shopping), "", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.website_shopping), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n                <span class=\"glyphicon glyphicon-link\"></span> \n              </button>\n            </div>\n        </div> <!-- call external service -->\n\n          <div role=\"tabpanel\">\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n              <li role=\"presentation\" class=\"active\">\n                <a href=\"#description-";
  if (helper = helpers.id_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" aria-controls=\"description-";
  if (helper = helpers.id_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" role=\"tab\" data-toggle=\"tab\">Descrição</a>\n              </li>\n\n              <li role=\"presentation\">\n                <a href=\"#parking-";
  if (helper = helpers.id_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" aria-controls=\"parking-";
  if (helper = helpers.id_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" role=\"tab\" data-toggle=\"tab\">Estacionamento</a>\n              </li>\n            </ul>\n\n            <div class=\"tab-content\">\n              <div role=\"tabpanel\" class=\"tab-pane active\" id=\"description-";
  if (helper = helpers.id_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <p>\n                  ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.description_shopping), "", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.description_shopping), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </p>\n              </div>\n\n              <div role=\"tabpanel\" class=\"tab-pane\" id=\"parking-";
  if (helper = helpers.id_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                <p>\n                  ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.observation_parking_shopping), "", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.observation_parking_shopping), "", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </p>\n              </div>\n            </div>\n          </div> <!-- tab -->\n        </div> <!-- card-content -->\n      </div> <!-- card -->\n    ";
  return buffer;
  }
function program3(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div class=\"card-img\">\n              <img src=\""
    + escapeExpression(((stack1 = (depth2 && depth2.base_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "assets/img/uploads/"
    + escapeExpression((helper = helpers.get_thumb || (depth0 && depth0.get_thumb),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.photo_name_shopping), options) : helperMissing.call(depth0, "get_thumb", (depth0 && depth0.photo_name_shopping), options)))
    + "\" class=\"img-responsive\">\n            </div>\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "disabled=\"yes\" class=\"service-disabled\"";
  }

function program7(depth0,data) {
  
  
  return "\n                    Sem descrição\n                  ";
  }

function program9(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    "
    + escapeExpression((helper = helpers.nl2br || (depth0 && depth0.nl2br),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.description_shopping), options) : helperMissing.call(depth0, "nl2br", (depth0 && depth0.description_shopping), options)))
    + "\n                  ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\n                    Sem informações\n                  ";
  }

function program13(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                    "
    + escapeExpression((helper = helpers.nl2br || (depth0 && depth0.nl2br),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.observation_parking_shopping), options) : helperMissing.call(depth0, "nl2br", (depth0 && depth0.observation_parking_shopping), options)))
    + "\n                  ";
  return buffer;
  }

function program15(depth0,data) {
  
  
  return "\n    <p>Infelizmente não conseguimos localizar nenhum registro. :(</p>\n  ";
  }

  buffer += "<section>\n  ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.program(15, program15, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.response), "success", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.response), "success", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>";
  return buffer;
  });

this["TPL"]["www/views/no_connection.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p class=\"text-center\">\n  Infelizmente você não está conectado a internet :(\n</p>\n\n<br>\n\n<button class=\"btn btn-default btn-lg btn-block\" id=\"refresh-offline\">Atualizar</button>\n";
  });