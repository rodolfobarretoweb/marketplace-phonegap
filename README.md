# Environment variables that need to be configured
export JAVA_HOME=/path/you/java/jdk
ANDROID_HOME=/your/path/android-sdk/
export ANDROID_HOME=$ANDROID_HOME

PATH=$PATH:$ANDROID_HOME/tools
PATH=$PATH:$ANDROID_HOME/platform-tools
PATH=$PATH:$ANDROID_HOME/build-tools

------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------

# Steps to publish in play store
keytool -genkey -v -keystore <nome-do-arquivo-da-chave>.keystore -alias <alias-do-nome-da-chave> -keyalg RSA -keysize 2048 -validity <validade-da-chave>

cordova build --release android

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore apps-key.keystore your/path/my-app.apk alias_name

your/path/android-sdk/build-tools/last-android-version/zipalign -v 4 your/path/my-app.apk your/path/my-new-app.apk