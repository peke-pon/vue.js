# Vue CLI

[![](https://i.imgur.com/15HAzgE.png)](https://cli.vuejs.org/)

## インストール

#### グローバルインストール

```
npm install -g @vue/cli
```


#### バージョンの確認

```
vue -V
```

#### グローバルにインストールできたかを確認

```
npm list -g --depth=0
```

## プロジェクト作成

#### プロジェクト名を指定して作成

```
vue create vuecli
```

#### プリセットの選択

```
Vue CLI v4.2.3
? Please pick a preset:
❯ default (babel, eslint)
  Manually select features
```

## プロジェクト確認


#### プロジェクトフォルダへ移動と確認

```
cd vuecli
ls
```

#### フォルダ構成

```
node_modules
public
 ├ favicon.ico
 └ index.html
src
 ├ assets
 ├ components
 ├ App.vue
 ├ main.js
.gitignore
babel.config.js
package.json
README.md
yarn.lock
```

## 開発コマンド

#### サーバー起動

```
yarn serve
http://localhost:8080/
```

#### リントツール

```
yarn lint
```

#### ビルドコマンド

```
yarn build
```