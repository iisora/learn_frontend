const correct = { template: '<div><font color="#F75940">正解です</font></div>' }
const incorrect = { template: '<div><font color="#3DC7BE">不正解です</font></div>' }

const comment1 = '<h4>解説</h4>'
const comment2 = 'NAT(Network Address Translation)とは、プライベートIPアドレスとグローバルIPアドレスを1対1で相互に変換する技術です。複数のホストが同時にインターネットに接続する場合には、それに対応する数のグローバルIPアドレスが必要になります。<br>'
const comment3 = 'ア　正しい。NATの説明です。<br>'
const comment4 = 'イ　プロキシなどが持つキャッシュ機能の説明です。<br>'
const comment5 = 'ウ　ウィルスソフトやWAFなどがもつパターンマッチング機能の説明です。<br>'
const comment6 = 'エ　ルータやファイアウォールが持つパケットフィルタリング機能の説明です。<br>'
const comments = { template: '<div>' + comment1 + comment2 + comment3 + comment4 + comment5 + comment6 + '</div>' }

const routes = [
    {
        path: '/answer1',
        components: {
            default: correct,
            c: comments,
        },
    },
    {
        path: '/answer2',
        components: {
            default: incorrect,
            c: comments,
        },
    },
    {
        path: '/answer3',
        components: {
            default: incorrect,
            c: comments,
        },
    },
    {
        path: '/answer4',
        components: {
            default: incorrect,
            c: comments,
        },
    }
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    el: "#app",
    router,
})