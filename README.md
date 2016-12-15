Yaruo-Extension
====

やる夫系したらば掲示板用Userscriptです。  
なんとフォント調整機能はありません。

## 説明
今のところyoutubeをやる夫スレに埋め込めます。お節介なことに自動再生します。

## 利用者向け
### インストール
1. Userscript用の拡張機能を入れる。
 1. Firefox - [Greasemonkey](https://addons.mozilla.org/ja/firefox/addon/greasemonkey/)
 1. Chrome - 原則必要なしだが、したらば外で起動してほしいサイトがあれば[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)を入れる。
 1. Android - Sleipnir Mobile, Opera Mobileで対応しているらしい。
 1. iOS、専ブラ - 頑張れ。
1. これをインストール [yaruo-extension.user.js](https://github.com/Duct-and-rice/yaruo-extension/raw/master/yaruo-extension.user.js)
1. したらば外で起動してほしいサイトがあったら適当に追加。

これはGithubからrawgit経由で直接最新コードをロードしているので、Githubの乗っ取りやら恒心教徒の急襲やらが怖い人はforkしてyaruo-extension.user.jsを修正して下さい。

### 使用法
そのままで使えますが、短編スレで使う場合は以下の設定をしてください。

1. 右上のoptionをクリック。
1. テキストエリアに、使いたい作者の名前を入力し保存。

## 製作者向け
### YouTube埋め込み機能
    <youtube [VIDEO_ID] [TIME]>
    例:<youtube LIlZCmETvsY 2:08>  
例のような形式で、[https://www.youtube.com/watch?v=LIlZCmETvsY](https://www.youtube.com/watch?v=LIlZCmETvsY)が2:08から再生されます。  
このスクリプトは、上記が一個でもあるレスは容赦なく埋め込みとみなします。複数ある場合は最初のタグを参照しますが、一応1つにするようにしたほうがベターです。  
また、XSS対策で該当レスと>>1と名前が一致していないとやってくれない仕様なはずなので、短編スレでは効きません。

## 開発してくれる人向け

webpackでやってますので、node、npmとwebpackをまず入れてください。script.jsをbundle.jsに変換し、それをyaruo-extension.user.jsで読み込んでます。  

    cd yaruo-extension  
    npm install  
ってやって依存するライブラリをnpmでインストール。  

    webpack -w
とやると監視して自動でwebpackしてくれます。
あとはこれをhttpserverでlocalhostにぶちまけてyaruo-extension.user.jsを弄ったもので拾えば良いでしょう。

## ToDo
1. 他にも埋め込めるものを増やす。
1. まとめブログ用にスクリプトを書く。
1. そもそも新作を書く。

## ライセンス
[MIT](https://github.com/Duct-and-rice/yaruo-extension/blob/master/LICENCE)

## 作者および連絡先
恒心教やる夫路線  
代表:[ダクト飯(◆mtwlx/9P3UwK)](https://twitter.com/duct_and_rice)
