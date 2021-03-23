Django + Webpack を使ってVueを動かす方法

Django、Django REST フレームワーク、Vue.js を使用して、REST API バックエンドと Vue.js フロントエンドでアプリケーションを開発する。API は Axios（HTTP クライアントライブラリ）の助けで Vue.js フロントエンドで消費。

フロントエンドをDjangoと独立させてマネジメントできるようにwebpackを追加する

webpackとは、モジュールバンドラ。
モジュールバンドラとは、
複数のファイルを１つにまとめて出力してくれるツールのこと。
（複数ファイルをまとめることを「bandle(束にする)」と呼ぶ）

Java Springboot+vue.jsでも何かしら作ってみたいね。

■構成
フロントエンド：Vue.js 
バックエンド：Django
Vue.jsからAPIリクエストをDjangoRestFrameworkで受け取りJson形式を返し、それをVue.jsで画面に表示する

■Python3環境を構築
・python環境の有無確認
python3 --version

・無いなら公式ダウンロードページでインストール（ver3.90からWindows7ではインストールできないので前のversionをインストール)
ダウンロードページ
https://www.python.org/downloads/

Windows x86-64 executable installer　をダウンロードし、管理者権限で実行。
パスとしてはD:\Users\xxxx\AppData\Local\Programs\Python\Python〇〇\に配置される。

※ なおインストーラーで Python をインストールした時に Add Python 3.8 to PATH にチェックをしていた場合には自動的に PATH が設定されていますので追加で設定は不要です。

■Python仮想環境作成・起動
venv モジュール（Python 3 標準ライブラリの一部）はプロジェクトに軽量仮想環境を作ることができる。これは Python プロジェクトごとに独立した環境を持つことができる。（例えば、依存関係はプロジェクトごとにシステム全体のパッケージから独立しているので競合の心配はいらない）。

# プロジェクトのディレクトリを作成する
$ mkdir django-vue

# カーソルをそれに移動する
$ cd django-vue

$ python3 -m venv myvenv(仮想環境名)
仮想環境への切り替え
Linux環境
$ source myvenv/bin/activate

コマンドプロンプト(Scripts\activate.bat を実行)
$ myvenv\Scripts\activate.bat

■Django＋DjangoRestFrameworkインストール
requirements.txtに下記記載
Django~=2.2.10
djangorestframework~=3.11.0

$ pip3 install -r requirements.txt

■project作成
django-admin startproject 〇〇(project名) .

・setting.pyの設定・日本対応
LANGUAGE_CODE = 'ja'
TIME_ZONE = 'Asia/Tokyo'

・DBのセットアップ
$ python3 manage.py migrate

・Webサーバ起動・確認
$ python3 manage.py runserver
→「インストール成功しました！おめでとうございます」の画面になったらOK

■アプリケーション作成
$ python3 manage.py startapp 〇〇(アプリケーション名)

・管理ユーザー作成
$ python3 manage.py createsuperuser
→ユーザー名・パスワード・メールアドレスを設定。適当でいいけど覚えておく必要はある。

・setting.pyの設定
INSTALLED_APPSに'rest_framework','(アプリケーション名)'を追加

・models.pyの編集
DBのフィールドを記載していく。

・モデルを編集したらDBの再構築(初回は関係ないけど二回目の編集からはnot nullの設定をしないと追加できない)
$ python3 manage.py makemigrations
$ python3 manage.py migrate


・Djangoプロジェクトのurls.pyを編集
ルーティング設定

・アプリケーションフォルダの中にapiフォルダを作成して以下の手順を行う。
1.urls.pyを作成し、ルーティング設定
2.serializer.pyを作成。(Serializerとは、クエリセットやモデルインスタンスのような複雑なデータをJson形式のフォーマットに変換)
3.views.pyを作成し、画面情報を記載していく。
4.ページネーションの設定(setting.pyに記載)

・WEBサーバを起動し、APIを確認する。ルーティング確認
$ python3 manage.py runserver

・画面でデータをPOSTしてみる。(一括でできる方法もあるのでしらべておく)

■Vueプロジェクト作成
NodeとVueCLIはインストールされている状態を想定
してないなら、Nodeは公式ダウンロードページでインストールし、VueCLIは以下のコマンドでインストールする。
$ npm install -g vue-cli

$ vue create 〇〇(Vueプロジェクト名)
→Manually Select Featuresを選択し、カスタムする。
Router→version 2x(多分最近はこのフェーズ無し)→y→ESLint + Prettier→Lint on save→N

cd 〇〇(作成したプロジェクト)

django-webpack-trackerをインストールする。
$ npm install webpack-bundle-traker@0.4.3

上で駄目ならこれで試してみて
$ npm install --save-dev webpack-bundle-tracker@0.4.3

・サーバー起動・確認(Vueの初期画面が表示されていればOK、まっさらならdjango-webpack-loaderをインストールがうまくいって
いない可能性がある)
$ npm run serve

■ページ作成(フロント)
・Djangoのurl.pyを編集(ルーティング設定)
初期画面のルーティング設定を追加する。（以下の手順で設定するurls.pyの設定を参照する。ルーティングも可視性を高めるため階層構造)
・アプリケーションのurls.pyを編集する
初期画面のルーティング設定を追加する。(IndexViewとかを表示させるように設定)
・アプリケーションのviews.pyを設定する。
前の手順で設定したIndexViewを作成する。
・アプリケーションフォルダにtemplates/〇〇(アプリケーション名)/index.htmlを作成する。
inedx.htmlは、適当にフォーマット作成しておく。

・DjangoのWebサーバーを起動して、画面確認
$ cd ..
$ python3 manage.py runserver

■Webpack導入
django-webpack-loaderのインストール
pip install django-webpack-loader

settings.pyを設定する

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(BASE_DIR, '(Vueのプロジェクトフォルダ名)', 'webpack-stats.json'),
    }
}

...

INSTALLED_APPS = (
 ...
 'webpack_loader',
)

■テンプレートの設定(webpack_loaderを使えるようにする)
{% load render_bundle from webpack_loader %} 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Job Board</title>
  </head>
  <body>
    <div id="app"></div>
    {% render_bundle 'app' %}
  </body>
</html>

■webpackの設定ファイルであるvue.config.jsを編集する
$ cd 〇〇(Vueプロジェクトのディレクトリ名)
vue.config.js
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    // Mac publishPath: "http://0.0.0.0:8080"
    publicPath: "http://127.0.0.1:8080/",
    outputDir: "./dist/",

    chainWebpack: config => {
        config.plugin("BundleTracker").use(BundleTracker, [{ filename: "./webpack-stats.json"}]);
        config.output.filename("bundle.js");
        config.optimization.splitChunks(false);
        config.resolve.alias.set("__STATIC__", "static");
        config.devServer
            .hotOnly(true)
            .watchOptions({ poll: 1000 })
            .https(false)
            .disableHostCheck(true)
            .headers({ "Access-Control-Allow-Origin": ["*"] });
    }
};

■画面確認
Vueのサーバー起動
$ cd 〇〇(vueプロジェクトのディレクトリ名)
$ npm run serve

もう一つターミナル開いてDjangoのWebサーバーのほうも起動
$ python3 manage.py runserver

DjangoのWebサーバーのURLを開いて、画面が連結されていたら成功。

■Vuetifyインストール
Vue.jsでインストールしたファイルが上書きされてしまうので、vue.config.jsの中身はコピーしておく

$ vue add vuetify

Still proceed?に対してYesを入力→Default
vue.config.jsが書き換わっているのでコピーしておいた内容を貼り付けて以下の一行を追加する。
transpileDependencies: ["vuetify"],

・Vuetifyが正常にインストールされたか画面を確認する。
$ npm run serve

■Vue関連のファイル編集・作成
・コンポーネント編集
1.App.vueを新たに作り直す
・routerの編集。
router/index.jsの不必要な箇所を削除。baseオブジェクトなど
・src/commonフォルダを作成
commonフォルダにcsrf_token.jsとapi.service.jsを作成

○それぞれの説明
csrf_token.js
CSRFとはクロスサイトリクエストフォージェリの略。
トークンを利用してCSRF対策する
対策方法は「トークンを利用して正しいリクエストであるかをチェックする」ことです。
hiddenとセッションにトークン値をセットしておきます。
POSTで送信されたトークンとセッションに保存しているトークンの値が一致していれば正しいリクエストと判断できます。
トークン値が空や異なる場合はエラーとして処理ができるのです。

Springには、CORS（Cross-Origin Resource Sharing）っていう機能があり、トークン渡さなくてもこれでCSRFを回避できる。

api.service.js
APIの取得を行う


csrf_token.js
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";")
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var CSRF_TOKEN = getCookie("csrftoken");

export { CSRF_TOKEN };

api.service.js
import { CSRF_TOKEN } from "./csrf_token";

function handleResponse(rensponse) {
    if (response.status === 204) {
        return "";
    } else if (response.status === 404) {
        return null;
    } else {
        return response.json();
    }
}

function apiService(endpoint, method, data) {
    const config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data) : null,
        headers: {
            "content-type": "application/json",
            "X-CSRFTOKEN": CSRF_TOKEN
        }
    };
    return fetch(endpoint, config).then(handleResponse);
}

export { apiService };

・viewsのファイルを修正
Home.vue About.vue 
{ apiService }をimportする 
endpointを渡して、メソッドを呼び出す。




