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
        <p>{{character_limit description_shopping 200}}</p>

        <div role="tabpanel">
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
              <a href="#location-{{id_shopping}}" aria-controls="location" role="tab" data-toggle="tab">Localização</a>
            </li>
            
            <li role="presentation">
              <a href="#parking-{{id_shopping}}" aria-controls="parking-{{id_shopping}}" role="tab" data-toggle="tab">Estacionamento</a>
            </li>
          </ul>

          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="location-{{id_shopping}}">
              <span><b>Email: </b>{{email_shopping}}</span><br>
              <span><b>Telefone: </b>{{contact_number_shopping}}</span><br>
              <span><b>Endereço: </b>{{address_shopping}}</span><br>
              <span><b>Cidade: </b>{{city_shopping}}</span><br>
              <span><b>Estado: </b>{{state_shopping}}</span>

              <br><br>

              <div class="btn-group">
                <a href="http://maps.google.com/maps?q={{address_shopping}}, {{city_shopping}}, {{state_shopping}}" class="btn btn-default call-external-service">
                  <span class="glyphicon glyphicon-map-marker"></span> Mapa
                </a>

                {{#ifNot contact_number_shopping ''}}
                  <a href="tel:{{contact_number_shopping}}" class="btn btn-default call-external-service">
                    <span class="glyphicon glyphicon-earphone"></span> Ligar
                  </a>
                {{/ifNot}}

                {{#ifNot email_shopping ''}}
                  <a href="mailto:{{email_shopping}}" class="btn btn-default call-external-service">
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
          </div>
        </div>
      </div> <!-- card-content -->
    </div> <!-- card -->
  {{/each}}

{{else}}
  <p>Infelizmente não conseguimos localizar nenhum registro. :(</p>
{{/ifCond}}