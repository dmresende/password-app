## PROJETO ESTUDOS REACT-NATIVE

. Instalado as dependencias necessárias
. Criado um projeto react-native simnples com expo
`npx create-expo-app my-app`
<br>

## INTALAÇÃO DE BIBLIOTECA

<br>

### SLIDER

Uma biblioteca de componentes React Native que fornece acesso à IU do sistema para um controle deslizante.
`https://docs.expo.dev/versions/latest/sdk/slider/`
<br>

### CLIPBOARD

Uma biblioteca universal que permite obter e configurar o conteúdo da área de transferência.
`https://docs.expo.dev/versions/latest/sdk/clipboard/`
<br>

### ASYNC-STORAGE

Uma biblioteca que fornece uma API de armazenamento de valor-chave assíncrona, não criptografada e persistente.
`https://docs.expo.dev/versions/latest/sdk/async-storage/`
<br>

### REACT-NAVIGATION

Roteamento e navegação para aplicativos Expo e React Native..
`https://reactnavigation.org/docs/getting-started`
<br>

### BOTTOM TABS NAVIGATIOR

Uma barra de guias simples na parte inferior da tela que permite alternar entre diferentes rotas. As rotas são inicializadas lentamente - seus componentes de tela não são montados até que sejam focados primeiro.
`https://reactnavigation.org/docs/bottom-tab-navigator`
<br>

### HOOKS

`https://pt-br.legacy.reactjs.org/docs/hooks-overview.html`

Primero a ser utilizado UseState
Muda o estado sem precisar 'relodar' a pagina.
Recebe doid parametros sendo o primeiro a variavel que armazena o valor atual, e o segundo uma função que é resposável por alterar o estado baseando-se , por exemplo, em uma ação.

<br>

### BUILD ANDROID

### Version e VersionCode

Sempre lembrar de alterar a version e a versionCoda quando Buildar.

`https://docs.expo.dev/build-reference/apk/`
`eas build -p android --profile preview`

### CHECK APP

`npx expo-doctor@latest`

### CASO TENHA PROBLEMA COM EXPO EAS CLI

Expo EAS pode solicitar suas credenciais para uso.

Limpe de Sessão Expo:
Tente limpar a sessão Expo. Execute o seguinte comando para limpar a sessão e, em seguida, tente novamente o expo eas login:

`expo logout`
`expo login`

Isso vai desconectar você e, em seguida, fazer o login novamente.

Atualização do Expo CLI:
Certifique-se de que está usando a versão mais recente do Expo CLI. Você pode atualizar o Expo CLI com o seguinte comando:

`npm install -g expo-cli`

### Cores em teste
#EBFF00
#392DE9
#4979B1
#734AB6
#7142BA
#F3F3F3FF


Paleta 2:
#2D3142
#4F5D75
#BFC0C0
#FFFFFF
#EF8354

//refatorando . . . .

Ajustar idioma.

