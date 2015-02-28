this["TPL"] = this["TPL"] || {};

this["TPL"]["views/main.tpl"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>\n          <a href=\"#\" data-id=\"";
  if (helper = helpers.id_shopping) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id_shopping); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression((helper = helpers.character_limit || (depth0 && depth0.character_limit),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.name_shopping), 50, options) : helperMissing.call(depth0, "character_limit", (depth0 && depth0.name_shopping), 50, options)))
    + "</a>\n        </h3>\n      </div>\n\n      <div class=\"card-content\">\n        <p>"
    + escapeExpression((helper = helpers.character_limit || (depth0 && depth0.character_limit),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.description_shopping), 200, options) : helperMissing.call(depth0, "character_limit", (depth0 && depth0.description_shopping), 200, options)))
    + "</p>\n      </div>\n    </div>\n  ";
  return buffer;
  }

  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.response), "success", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.response), "success", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });