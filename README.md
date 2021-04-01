# TypeScriptTraining
TypeScriptの学習用リポジトリ



## 環境構築



### Node.jsのインストール

公式のWebページからNode.jsをインストールする。

`$ node -v` でバージョン確認をして、インストールができることを確認する。



### npm(Node Package Manager)のインストール

`$ sudo npm install -g npm `でnpmをインストールする。

`$ npm -v`でバージョン確認をして、インストールができることを確認する。



### TypeScriptコンパイラをインストール

`$ npm install -g typescript`でTypeScriptコンパイラをインストールする。

`$ tsc -v`でバージョン確認をして、インストールができることを確認する。



## コンパイル

hello.tsをコンパイルする場合

`$ tsc hello.ts`

コンパイルが成功すると、hello.js が生成される。



## Node.jsで実行する

コンパイル結果として生成されたjsファイルをNode.jsで実行する。

`$ node.js`



## package.jsonを生成

`$ npm init --y`を実行する。

以下のようなjsonファイルが生成される。

```
{
  "name": "training-002",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

version, description, authorなどは、任意の内容に書き換える。

