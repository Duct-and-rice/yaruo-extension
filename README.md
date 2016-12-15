# やる夫系掲示板用拡張機能
## 利用者向け
### インストール
1. Userscript用の拡張機能を入れる。
 1. Firefox - [Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)
 1. Chrome - 原則必要なしだが、したらば外で起動してほしいサイトがあれば[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)を入れる。
 1. Android - Sleipnir Mobile, Opera Mobileで対応しているらしい。
 1. iOS、専ブラ - 頑張れ。
1. これをインストール [yaruo-extension.user.js](https://github.com/Duct-and-rice/yaruo-extension/raw/master/yaruo-extension.user.js)
1. したらば外で起動してほしいサイトがあったら適当に追加。

## 製作者向け
### YouTube埋め込み機能
    <youtube [VIDEO_ID] [TIME]>
    例:<youtube LIlZCmETvsY 2:08>
このスクリプトは、上記が一個でもあるレスは容赦なく埋め込みとみなします。複数ある場合は最初のタグを参照しますが、一応1つにするようにしたほうがベターです。  
また、該当レスと>>1と名前が一致していないとやってくれない仕様なはずなので、短編スレでは効きません。

## 開発してくれる人向け

webpackでやってますので、node、npmとwebpackをまず入れてください。script.jsをbundle.jsに変換し、それをyaruo-extension.user.jsで読み込んでます。  

    cd yaruo-extension  
    npm install  
ってやって依存するライブラリをnpmでインストール。  

    webpack -w
とやると監視して自動でwebpackしてくれます。
あとはこれをhttpserverでlocalhostにぶちまけてyaruo-extension.user.jsを弄ったもので拾えば良いでしょう。
