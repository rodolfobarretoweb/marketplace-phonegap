<section>
  {{#ifCond response 'success'}}
    {{#each data}}
      <div class="card">
        {{#ifNot photo_name_shopping null}}
          <div class="card-img">
            <img src="{{../../base_url}}assets/img/uploads/{{get_thumb photo_name_shopping}}" class="img-responsive">
          </div>
        {{/ifNot}}
        
        <div class="card-header">
          <h3>{{character_limit name_shopping 50}}</h3>
        </div>
   
        <div class="card-content">
          <div role="tabpanel">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#location-{{id_shopping}}" aria-controls="location" role="tab" data-toggle="tab">
                  <span class="glyphicon glyphicon-map-marker"></span>
                </a>
              </li>
              
              <li role="presentation">
                <a href="#parking-{{id_shopping}}" aria-controls="parking-{{id_shopping}}" role="tab" data-toggle="tab"><span class="glyphicon glyphicon-road"></span></span>
                </a>
              </li>

              <li role="presentation">
                <a href="#description-{{id_shopping}}" aria-controls="description-{{id_shopping}}" role="tab" data-toggle="tab">
                  <span class="glyphicon glyphicon-list-alt"></span>
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="location-{{id_shopping}}">
                {{# ifNot email_shopping ''}}
                  <div><b>Email: </b>{{email_shopping}}</div>
                {{/ifNot}}

                {{# ifNot contact_number_shopping ''}}
                  <div><b>Telefone: </b>{{contact_number_shopping}}</div>
                {{/ifNot}}

                {{# ifNot address_shopping ''}}
                  <div><b>Localidade: </b>{{address_shopping}}</div>
                {{/ifNot}}

                {{# ifNot city_shopping ''}}
                  <div><b>Cidade: </b>{{city_shopping}}</div>
                {{/ifNot}}

                {{# ifNot state_shopping ''}}
                  <div><b>Estado: </b>{{state_shopping}}</div>
                {{/ifNot}}

                <br><br>

                <div class="btn-group">
                  <button class="btn btn-default call-external-service" data-service="map" data-param="{{address_shopping}}, {{city_shopping}}, {{state_shopping}}">
                    <span class="glyphicon glyphicon-map-marker"></span> Mapa
                  </button>

                  {{#ifNot contact_number_shopping ''}}
                    <button class="btn btn-default call-external-service" data-service="phone" data-param="{{contact_number_shopping}}">
                      <span class="glyphicon glyphicon-earphone"></span> Ligar
                    </button>
                  {{/ifNot}}

                  {{#ifNot email_shopping ''}}
                    <button class="btn btn-default call-external-service" data-service="email" data-param="{{email_shopping}}">
                      <span class="glyphicon glyphicon-envelope"></span> Enviar email
                    </a>
                  {{/ifNot}}
                </div>
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

              <div role="tabpanel" class="tab-pane" id="description-{{id_shopping}}">
                <p>
                  {{#ifCond description_shopping ''}}
                    Sem descrição
                  {{else}}
                    {{nl2br description_shopping}}
                  {{/ifCond}}
                </p>
              </div>
            </div>
          </div>
        </div> <!-- card-content -->
      </div> <!-- card -->
    {{/each}}

  {{else}}
    <p>Infelizmente não conseguimos localizar nenhum registro. :(</p>
  {{/ifCond}}
</section>