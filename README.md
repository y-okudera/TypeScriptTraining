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



## 開発に使用するツール群をインストール

`$ npm install typescript ts-loader webpack webpack-cli webpack-dev-server -D`



| 名称               | 説明                                   |
| ------------------ | -------------------------------------- |
| typescript         | TypeScriptコンパイラ。                 |
| ts-loader          | TypeScript用のローダー。               |
| webpack            | JavaScriptモジュールバンドラー。       |
| webpack-cli        | CLIでWebpackを動作させるためのツール。 |
| webpack-dev-server | 開発環境用のWebサーバー。              |



## webpack-dev-serverを起動

package.jsonのscriptsに"start"を定義してあるため、`$ npm start`のみでwebpack-dev-serverを起動できる。

webpack-dev-serverを起動後、ブラウザでローカルホストを確認する。

http://localhost:8080/



webpack-dev-serverを起動中にTypeScriptのソースコードを変更すると、自動的にRecompileしてブラウザのReloadが行われます。



## ExpressでWebAPI開発



### Express開発環境構築

`$ npm init --y`でpackage.jsonを生成する。



必要なパッケージをインストールする

```
$ npm install express
$ npm install -D typescript @types/node @types/express ts-node ts-node-dev rimraf npm-run-all
```



package.jsonにscriptsを追加する。

```json
{
  "name": "training-003",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "clean": "rimraf dist",
    "tsc": "tsc",
    "build": "npm-run-all clean tsc",
    "start": "node ."
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.5",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "@types/cookie-parser": "^1.4.2",
    "@types/express": "^4.17.11",
    "@types/node": "^14.14.37",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "ts-node": "^9.1.1",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.2.3"
  }
}

```



TypeScriptの設定ファイル（tsconfig.json）を生成する。

`$ npx tsc --init`



tsconfig.jsonを以下のように変更する。

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
}
```



### 実行と動作確認

- 開発時

  `$ npm run dev`

  curlなどで、APIを実行して、動作確認することができる。

  e.g.

  ```
  $ curl -X POST -H "Content-Type: application/json" -d '{"name":"Taro", "age":30}' http://localhost:3000/v1/users
  ```

- デプロイ用のビルド

  `$ npm run build`

- デプロイ後の実行

  `$ npm run start`

