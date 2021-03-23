Django + Webpack ���g����Vue�𓮂������@

Django�ADjango REST �t���[�����[�N�AVue.js ���g�p���āAREST API �o�b�N�G���h�� Vue.js �t�����g�G���h�ŃA�v���P�[�V�������J������BAPI �� Axios�iHTTP �N���C�A���g���C�u�����j�̏����� Vue.js �t�����g�G���h�ŏ���B

�t�����g�G���h��Django�ƓƗ������ă}�l�W�����g�ł���悤��webpack��ǉ�����

webpack�Ƃ́A���W���[���o���h���B
���W���[���o���h���Ƃ́A
�����̃t�@�C�����P�ɂ܂Ƃ߂ďo�͂��Ă����c�[���̂��ƁB
�i�����t�@�C�����܂Ƃ߂邱�Ƃ��ubandle(���ɂ���)�v�ƌĂԁj

Java Springboot+vue.js�ł������������Ă݂����ˁB

���\��
�t�����g�G���h�FVue.js 
�o�b�N�G���h�FDjango
Vue.js����API���N�G�X�g��DjangoRestFramework�Ŏ󂯎��Json�`����Ԃ��A�����Vue.js�ŉ�ʂɕ\������

��Python3�����\�z
�Epython���̗L���m�F
python3 --version

�E�����Ȃ�����_�E�����[�h�y�[�W�ŃC���X�g�[���iver3.90����Windows7�ł̓C���X�g�[���ł��Ȃ��̂őO��version���C���X�g�[��)
�_�E�����[�h�y�[�W
https://www.python.org/downloads/

Windows x86-64 executable installer�@���_�E�����[�h���A�Ǘ��Ҍ����Ŏ��s�B
�p�X�Ƃ��Ă�D:\Users\xxxx\AppData\Local\Programs\Python\Python�Z�Z\�ɔz�u�����B

�� �Ȃ��C���X�g�[���[�� Python ���C���X�g�[���������� Add Python 3.8 to PATH �Ƀ`�F�b�N�����Ă����ꍇ�ɂ͎����I�� PATH ���ݒ肳��Ă��܂��̂Œǉ��Őݒ�͕s�v�ł��B

��Python���z���쐬�E�N��
venv ���W���[���iPython 3 �W�����C�u�����̈ꕔ�j�̓v���W�F�N�g�Ɍy�ʉ��z������邱�Ƃ��ł���B����� Python �v���W�F�N�g���ƂɓƗ��������������Ƃ��ł���B�i�Ⴆ�΁A�ˑ��֌W�̓v���W�F�N�g���ƂɃV�X�e���S�̂̃p�b�P�[�W����Ɨ����Ă���̂ŋ����̐S�z�͂���Ȃ��j�B

# �v���W�F�N�g�̃f�B���N�g�����쐬����
$ mkdir django-vue

# �J�[�\��������Ɉړ�����
$ cd django-vue

$ python3 -m venv myvenv(���z����)
���z���ւ̐؂�ւ�
Linux��
$ source myvenv/bin/activate

�R�}���h�v�����v�g(Scripts\activate.bat �����s)
$ myvenv\Scripts\activate.bat

��Django�{DjangoRestFramework�C���X�g�[��
requirements.txt�ɉ��L�L��
Django~=2.2.10
djangorestframework~=3.11.0

$ pip3 install -r requirements.txt

��project�쐬
django-admin startproject �Z�Z(project��) .

�Esetting.py�̐ݒ�E���{�Ή�
LANGUAGE_CODE = 'ja'
TIME_ZONE = 'Asia/Tokyo'

�EDB�̃Z�b�g�A�b�v
$ python3 manage.py migrate

�EWeb�T�[�o�N���E�m�F
$ python3 manage.py runserver
���u�C���X�g�[���������܂����I���߂łƂ��������܂��v�̉�ʂɂȂ�����OK

���A�v���P�[�V�����쐬
$ python3 manage.py startapp �Z�Z(�A�v���P�[�V������)

�E�Ǘ����[�U�[�쐬
$ python3 manage.py createsuperuser
�����[�U�[���E�p�X���[�h�E���[���A�h���X��ݒ�B�K���ł������Ǌo���Ă����K�v�͂���B

�Esetting.py�̐ݒ�
INSTALLED_APPS��'rest_framework','(�A�v���P�[�V������)'��ǉ�

�Emodels.py�̕ҏW
DB�̃t�B�[���h���L�ڂ��Ă����B

�E���f����ҏW������DB�̍č\�z(����͊֌W�Ȃ����Ǔ��ڂ̕ҏW�����not null�̐ݒ�����Ȃ��ƒǉ��ł��Ȃ�)
$ python3 manage.py makemigrations
$ python3 manage.py migrate


�EDjango�v���W�F�N�g��urls.py��ҏW
���[�e�B���O�ݒ�

�E�A�v���P�[�V�����t�H���_�̒���api�t�H���_���쐬���Ĉȉ��̎菇���s���B
1.urls.py���쐬���A���[�e�B���O�ݒ�
2.serializer.py���쐬�B(Serializer�Ƃ́A�N�G���Z�b�g�⃂�f���C���X�^���X�̂悤�ȕ��G�ȃf�[�^��Json�`���̃t�H�[�}�b�g�ɕϊ�)
3.views.py���쐬���A��ʏ����L�ڂ��Ă����B
4.�y�[�W�l�[�V�����̐ݒ�(setting.py�ɋL��)

�EWEB�T�[�o���N�����AAPI���m�F����B���[�e�B���O�m�F
$ python3 manage.py runserver

�E��ʂŃf�[�^��POST���Ă݂�B(�ꊇ�łł�����@������̂ł���ׂĂ���)

��Vue�v���W�F�N�g�쐬
Node��VueCLI�̓C���X�g�[������Ă����Ԃ�z��
���ĂȂ��Ȃ�ANode�͌����_�E�����[�h�y�[�W�ŃC���X�g�[�����AVueCLI�͈ȉ��̃R�}���h�ŃC���X�g�[������B
$ npm install -g vue-cli

$ vue create �Z�Z(Vue�v���W�F�N�g��)
��Manually Select Features��I�����A�J�X�^������B
Router��version 2x(�����ŋ߂͂��̃t�F�[�Y����)��y��ESLint + Prettier��Lint on save��N

cd �Z�Z(�쐬�����v���W�F�N�g)

django-webpack-tracker���C���X�g�[������B
$ npm install webpack-bundle-traker@0.4.3

��őʖڂȂ炱��Ŏ����Ă݂�
$ npm install --save-dev webpack-bundle-tracker@0.4.3

�E�T�[�o�[�N���E�m�F(Vue�̏�����ʂ��\������Ă����OK�A�܂�����Ȃ�django-webpack-loader���C���X�g�[�������܂�������
���Ȃ��\��������)
$ npm run serve

���y�[�W�쐬(�t�����g)
�EDjango��url.py��ҏW(���[�e�B���O�ݒ�)
������ʂ̃��[�e�B���O�ݒ��ǉ�����B�i�ȉ��̎菇�Őݒ肷��urls.py�̐ݒ���Q�Ƃ���B���[�e�B���O�����������߂邽�ߊK�w�\��)
�E�A�v���P�[�V������urls.py��ҏW����
������ʂ̃��[�e�B���O�ݒ��ǉ�����B(IndexView�Ƃ���\��������悤�ɐݒ�)
�E�A�v���P�[�V������views.py��ݒ肷��B
�O�̎菇�Őݒ肵��IndexView���쐬����B
�E�A�v���P�[�V�����t�H���_��templates/�Z�Z(�A�v���P�[�V������)/index.html���쐬����B
inedx.html�́A�K���Ƀt�H�[�}�b�g�쐬���Ă����B

�EDjango��Web�T�[�o�[���N�����āA��ʊm�F
$ cd ..
$ python3 manage.py runserver

��Webpack����
django-webpack-loader�̃C���X�g�[��
pip install django-webpack-loader

settings.py��ݒ肷��

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': os.path.join(BASE_DIR, '(Vue�̃v���W�F�N�g�t�H���_��)', 'webpack-stats.json'),
    }
}

...

INSTALLED_APPS = (
 ...
 'webpack_loader',
)

���e���v���[�g�̐ݒ�(webpack_loader���g����悤�ɂ���)
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

��webpack�̐ݒ�t�@�C���ł���vue.config.js��ҏW����
$ cd �Z�Z(Vue�v���W�F�N�g�̃f�B���N�g����)
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

����ʊm�F
Vue�̃T�[�o�[�N��
$ cd �Z�Z(vue�v���W�F�N�g�̃f�B���N�g����)
$ npm run serve

������^�[�~�i���J����Django��Web�T�[�o�[�̂ق����N��
$ python3 manage.py runserver

Django��Web�T�[�o�[��URL���J���āA��ʂ��A������Ă����琬���B

��Vuetify�C���X�g�[��
Vue.js�ŃC���X�g�[�������t�@�C�����㏑������Ă��܂��̂ŁAvue.config.js�̒��g�̓R�s�[���Ă���

$ vue add vuetify

Still proceed?�ɑ΂���Yes����́�Default
vue.config.js������������Ă���̂ŃR�s�[���Ă��������e��\��t���Ĉȉ��̈�s��ǉ�����B
transpileDependencies: ["vuetify"],

�EVuetify������ɃC���X�g�[�����ꂽ����ʂ��m�F����B
$ npm run serve

��Vue�֘A�̃t�@�C���ҏW�E�쐬
�E�R���|�[�l���g�ҏW
1.App.vue��V���ɍ�蒼��
�Erouter�̕ҏW�B
router/index.js�̕s�K�v�ȉӏ����폜�Bbase�I�u�W�F�N�g�Ȃ�
�Esrc/common�t�H���_���쐬
common�t�H���_��csrf_token.js��api.service.js���쐬

�����ꂼ��̐���
csrf_token.js
CSRF�Ƃ̓N���X�T�C�g���N�G�X�g�t�H�[�W�F���̗��B
�g�[�N���𗘗p����CSRF�΍􂷂�
�΍����@�́u�g�[�N���𗘗p���Đ��������N�G�X�g�ł��邩���`�F�b�N����v���Ƃł��B
hidden�ƃZ�b�V�����Ƀg�[�N���l���Z�b�g���Ă����܂��B
POST�ő��M���ꂽ�g�[�N���ƃZ�b�V�����ɕۑ����Ă���g�[�N���̒l����v���Ă���ΐ��������N�G�X�g�Ɣ��f�ł��܂��B
�g�[�N���l�����قȂ�ꍇ�̓G���[�Ƃ��ď������ł���̂ł��B

Spring�ɂ́ACORS�iCross-Origin Resource Sharing�j���Ă����@�\������A�g�[�N���n���Ȃ��Ă������CSRF������ł���B

api.service.js
API�̎擾���s��


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

�Eviews�̃t�@�C�����C��
Home.vue About.vue 
{ apiService }��import���� 
endpoint��n���āA���\�b�h���Ăяo���B




