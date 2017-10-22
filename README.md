# WWALoader
WWA( http://wwajp.com )のマップデータを解析した結果をJavaScriptのオブジェクトとして返すプログラムです。
WebWorkers対応版( wwaload.js )と WebWorkers非対応版( wwaload.noworker.js )があります。

参考までに、WWA Wingでは「wwaload.js」を、WWA Phoenixでは「wwaload.noworker.js」を使っています。用途に応じて使い分けてください。

## ライセンス
- MIT License (Expat)。詳しくは「LICENSE」ファイルを参照。

### 同梱物のライセンスについて
テスト用にスタンダードマップのデータ「wwamap.dat」を同梱していますが、このファイルの著作権の取り扱いについてはキャラバンサークル
( http://wwajp.com )で定める通りとします。

## とりあえず触りたい人へ
- src ディレクトリにすべての元になっているTypeScriptソースがあります。
- ビルドはこのREADMEがあるディレクトリで、端末等から<code>make</code>でできます。 
- 成果物は、 `./lib/wwaload.js` (WebWorkers バージョン)と、`./lib/wwaload.noworker.js` です。
- uglifyがかかっていないバージョンもあります (ファイル名に `long` が含まれているものです。)

## その他
不具合を発見された場合は、issuesかPull Requestまで。Githubのアカウントを持っていない場合はバグ報告板( http://jbbs.shitaraba.net/netgame/14732/ )まで。

WWA Wing - http://wwawing.com
