<section>
  {{#ifCond response 'success'}}
    {{#each data}}
      <div class="card">
        <div class="card-header">
          <hgroup>
            <h3>{{character_limit name_shopping 50}}</h3>
            <h4>{{city_shopping}}</h4>
          </hgroup>
        </div>
   
        <div class="card-content">
          {{#ifNot photo_name_shopping null}}
            <div class="card-img">
              <img src="{{../../base_url}}assets/img/uploads/{{get_thumb photo_name_shopping}}" class="img-responsive">
            </div>
          {{/ifNot}}

          <div id="call-external-service" class="row">
            <div class="col-xs-3 col-sm-3">
              <button data-service="map" data-param="{{address_shopping}}, {{city_shopping}}, {{state_shopping}}" {{#ifCond address_shopping ''}}disabled="yes" class="service-disabled"{{/ifCond}}>
                <span class="glyphicon glyphicon-map-marker"></span> 
              </button>
            </div>

            <div class="col-xs-3 col-sm-3">
              <button data-service="phone" data-param="{{contact_number_shopping}}" {{#ifCond contact_number_shopping ''}}disabled="yes" class="service-disabled"{{/ifCond}}>
                <span class="glyphicon glyphicon-earphone"></span> 
              </button>
            </div>
          
            <div class="col-xs-3 col-sm-3">
              <button data-service="email" data-param="{{email_shopping}}" {{#ifCond email_shopping ''}}disabled="yes" class="service-disabled"{{/ifCond}}>
                <span class="glyphicon glyphicon-envelope"></span> 
              </button>
            </div>

            <div class="col-xs-3 col-sm-3">
              <button data-service="website" data-param="{{website_shopping}}" {{#ifCond website_shopping ''}}disabled="yes" class="service-disabled"{{/ifCond}}>
                <span class="glyphicon glyphicon-link"></span> 
              </button>
            </div>
        </div> <!-- call external service -->

          <div role="tabpanel">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#description-{{id_shopping}}" aria-controls="description-{{id_shopping}}" role="tab" data-toggle="tab">Descrição</a>
              </li>

              <li role="presentation">
                <a href="#parking-{{id_shopping}}" aria-controls="parking-{{id_shopping}}" role="tab" data-toggle="tab">Estacionamento</a>
              </li>
            </ul>

            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="description-{{id_shopping}}">
                <p>
                  {{#ifCond description_shopping ''}}
                    Sem descrição
                  {{else}}
                    {{nl2br description_shopping}}
                  {{/ifCond}}
                </p>
              </div>

              <div role="tabpanel" class="tab-pane" id="parking-{{id_shopping}}">
                <p>
                  {{#ifCond observation_parking_shopping ''}}
                    Sem informações
                  {{else}}
                    {{nl2br observation_parking_shopping}}
                  {{/ifCond}}
                </p>
              </div>
            </div>
          </div> <!-- tab -->
        </div> <!-- card-content -->
      </div> <!-- card -->
    {{/each}}

  {{else}}
    <p>Infelizmente não conseguimos localizar nenhum registro. :(</p>
  {{/ifCond}}
</section>