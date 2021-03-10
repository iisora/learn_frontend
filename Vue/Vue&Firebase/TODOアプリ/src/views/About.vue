<template>
    <div class="container-fluid">
        <h3>このサイトについて</h3>

        <pre>
            VueCLIの学習のために作成した簡単なTODOアプリ。

            使用方法：
                ・HOMEでTODOを登録する。(複数登録したい場合は追加して登録)
                ・ListでTODOリストを確認でき、更新と削除ができる。
            
            課題：
                ・掲示板のページネーション(Cloud Firestore SDK)・コメント削除機能(自分のコメントだけ)
                ・TODO一覧を日付順にソート
        </pre>
    </div>
</template>

<style scoped>
.priority {
    color: red;
    font-size: 15px;
    font-weight: bold;
}
</style>