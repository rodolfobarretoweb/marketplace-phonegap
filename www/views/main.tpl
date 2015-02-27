{{#ifCond response 'success'}}
  {{#each data}}
    <div class="card">
      <div class="card-header">
        <h3>
          <a href="#" data-id="{{id_shopping}}">{{character_limit name_shopping 50}}</a>
        </h3>
      </div>

      <div class="card-content">
        <p>{{character_limit description_shopping 200}}</p>
      </div>
    </div>
  {{/each}}
{{/ifCond}}