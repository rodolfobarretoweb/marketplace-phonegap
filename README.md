### INSTALAÇÃO
  
  1° Possuir o android instalado
  2° Configurar o android na variável de ambiente
     
     export JAVA_HOME=/usr/lib/jvm/java-8-oracle/
     ANDROID_HOME=/your/path/android-sdk/
     export ANDROID_HOME=$ANDROID_HOME

     PATH=$PATH:$ANDROID_HOME/tools
     PATH=$PATH:$ANDROID_HOME/platform-tools
     PATH=$PATH:$ANDROID_HOME/build-tools


  3° npm install
  4° phonegap run <plataforma> ou phonegap build <plataforma>
  
  5° Instalar plugin network information: 
     
     cordova plugin add org.apache.cordova.network-information