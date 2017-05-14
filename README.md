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
1. したらば普通シェルター外で起動してほしいサイトがあったら適当に追加。

これはGithubからrawgit経由で直接最新コードをロードしているので、Githubの乗っ取りやら恒心教徒の急襲やらが怖い人はforkしてyaruo-extension.user.jsを修正して下さい。

### 使用法
そのままで使えますが、短編スレ&普通のやる夫板で使う場合は以下の設定をしてください。

1. 右上のoptionをクリック。
1. テキストエリアに、使いたい作者の名前のトリップを入力し保存(改行で区切れます)。

## 製作者向け
### YouTube埋め込み機能
    <youtube [VIDEO_ID] [TIME]>
    例:<youtube LIlZCmETvsY 2:08>  
例のような形式で、該当レスが表示された時[https://www.youtube.com/watch?v=LIlZCmETvsY](https://www.youtube.com/watch?v=LIlZCmETvsY)が2:08から再生されます。

該当レスが画面外にある場合はスクロールで表示された時再生されます。

このスクリプトは、上記が一個でもあるレスは容赦なく埋め込みとみなします。複数ある場合は最初のタグを参照しますが、一応1つにするようにしたほうがベターです。

また、XSS対策で該当レスと>>1と名前が一致していないとやってくれない仕様なはずなので、短編スレでは効きません。また同様の理由で普通のやる夫板でも効かないので、optionを使用してください。

### ドガベン機能
    <dokaben nokomaochi|nobig|nofont|s<ミリ秒> "[内容]">
    例:<dokaben "ドカベン">
    例:<dokaben nokomaochi s1000 "コマ落ちなしで1秒周期">
でドガベン風になる。""内では改行はできませんが\\nができます。

この機能はXSS対策がついていないので頑張ろう。

### 歌詞引用機能
    <lyrics http://blog.livedoor.jp/mukankei961/archives/51964366.html レス番>
    例:<lyrics http://blog.livedoor.jp/mukankei961/archives/51964366.html 2>
で歌詞引用が出来ます。

確かこれだと法的にはリンク／無罪になるはずなので、著作権違反にはならないはず。

## 開発してくれる人向け

webpackでやってますので、node、npmとwebpackをまず入れてください。script.jsをbundle.jsに変換し、それをyaruo-extension.user.jsで読み込んでます。  

    cd yaruo-extension  
    npm install  
ってやって依存するライブラリをnpmでインストール。  

    webpack -w
とやると監視して自動でwebpackしてくれます。

デバッグしたければこれをhttpserverでlocalhostにぶちまけてyaruo-extension.user.jsを弄ったもので拾えば良いでしょう。

## ToDo
1. 他にも埋め込めるものを増やす。
1. まとめブログ用にスクリプトを書く。
1. そもそも新作を書く。

## ライセンス
[MIT](https://github.com/Duct-and-rice/yaruo-extension/blob/master/LICENCE)

また、このUserscriptは[totoraj930](https://github.com/totoraj930)氏の[dokaben-css](https://github.com/totoraj930/dokaben-css)を使用しています。使いやすかったからね、しょうがないね。

## 作者および連絡先
恒心教やる夫路線

代表:[ダクト飯(◆mtwlx/9P3UwK)](https://twitter.com/duct_and_rice)

## 連絡
### シェルターデバッグさせてください。
