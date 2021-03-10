<template>
    <div class="container-fluid">
        <h3>コメント掲示板</h3>
        <div class="form-group">
            <label for="name">名前：
            </label>
            <input type="text" id="name" v-model="name" class="form-control comment-form"><br>

            <label for="comment">コメント：</label>
            <textarea id="comment" v-model="comment" class="form-control comment-form" rows="3"></textarea><br>
            <button class="btn btn-primary mt-3" @click="submitPosts">投稿する</button><br><br>
            <h3>投稿一覧</h3>
            <!-- nameをキーにしてデータを表示する -->
            <div class="card comment-list">
                <ul v-for="post in posts" :key="post.name" class="list-group list-group-flush">
                    <li class="list-group-item">                        
                        <div>名前： {{ post.fields.name.stringValue }}</div>
                        <div>コメント： {{ post.fields.comment.stringValue }}</div>            
                        <div class="list-createdAt">{{ post.fields.createdAt.timestampValue | moment }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios' // FirebaseのSDKではなくREST APIでデータの送受信を行う
import moment from 'moment';
export default {
    data() {
        return {
            name: '',
            comment: '',
            createdAt: '',
            posts: ''
        }
    },
    created() {
        console.log("created!!")
        this.getPosts();
    },
    methods: {
        submitPosts() {
            axios.post("/comments",
            {
                fields: {
                    name: {
                        stringValue: this.name
                    },
                    comment: {
                        stringValue: this.comment
                    },
                    createdAt: {
                        timestampValue: new Date()
                    }
                }
            }
            )
            .then(response => {
                console.log(response);
                this.name="";
                this.comment="";
                // リロードせずに画面に反映させる(非同期処理)
                this.getPosts();
            })
            .catch(error => {
                console.log(error);
            });

        },
        getPosts() {
            // commentsコレクション内のdocumentを全て取得する
            axios.get("/comments")
            .then(res => {
                console.log(res);
                console.log(res.data.documents);
                this.posts = res.data.documents;
            });
        },
    },
    filters: {
        moment(createdAt) {
            return moment(createdAt).format('YYYY/MM/DD HH:mm');
        },
    }
}
</script>

<style scoped>
.comment-form {
    max-width: 900px;
}
.comment-list {
    max-width: 900px;
}
.list-createdAt {
    max-width: 900px;
}
</style>