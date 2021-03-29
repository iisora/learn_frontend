<template>
    <div>
        <v-container>
            <form @submit.prevent="onSubmit">
                <v-text-field
                    v-model="name"
                    label="名前"
                    required
                >
                </v-text-field>
                <v-text-field
                    type="number"
                    v-model="height"
                    label="身長"
                    required
                >
                </v-text-field>
                <v-text-field
                    type="number"
                    v-model="weight"
                    label="体重"
                    required
                >
                </v-text-field>
                <v-text-field
                    v-model="Habitat"
                    label="出身地"
                    required
                >
                </v-text-field>
                <v-text-field
                    v-model="job"
                    label="職業"
                    required
                >
                </v-text-field>
                <v-text-field
                    v-model="description"
                    label="概要"
                    required
                >
                </v-text-field>
                <!-- 受け取った値をそのまま使う場合は$eventで受け取る -->
                <MediaUpload ref="media" :media="file" :src="src" @file="file = $event" />

                <div class="text-center">
                    <v-btn
                        color="success"
                        type="submit"
                    >送信
                    </v-btn>
                </div>
            </form>
        </v-container>
    </div>
</template>

<script>
import { apiService } from '../common/api.service'; 
import { fileUpload } from '../common/api.service'; 
import MediaUpload from './MediaUpload.vue';
export default {
    name: "bookEditor",
    props: {
        id: {
            type: Number,
            required: false
        },
        src: {
            type: String,
            required: false
        },
    },
    components: {
        MediaUpload
    },
    data() {
        return {
            name: null,
            weight: null,
            height: null,
            Habitat: null,
            job: null,
            description: null,
            file: null
        }
    },
    methods: {
        onSubmit() {
            let endpoint = "/api/book_list/";
            // let method = "POST";
            // idが既に存在していれば更新処理をする
            if (this.id !== undefined) {
                endpoint += `${this.id}/`;
                // method = `PUT`;
                console.log("更新を行います!");
            }

            // apiService(endpoint, method, {
            //     name: this.name,
            //     weight: this.weight,
            //     height: this.height,
            //     Habitat: this.Habitat,
            //     job: this.job,
            //     description: this.description,
            //     formData
            
            console.log("this.file", this.file, typeof this.file);
            if (this.id !== undefined) {
                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('weight', this.weight);
                formData.append('height', this.height);
                formData.append('Habitat', this.Habitat);
                formData.append('job', this.job);
                formData.append('description', this.description);
                // フォームで画像をアップロードしたときにのみ追加する
                if (this.file && typeof this.file === 'object') {
                    formData.append('file', this.file);
                }
                // models.pyでnullとblank許容していても、nullを送るとリクエストエラーになるっぽい^^;
                // } else {
                //     formData.append('file', null);
                // }
                // TODO: FormDataとJSONを混在させることはできない
                fileUpload(endpoint, formData, this.id)
                .then(response => {
                    console.log("response", response);
                    this.$router.push({
                        name: "book",
                        // params: { id: response.id }
                        params: { id: response.payload.data.id }
                    })
                }).catch(error => {
                    return { error };
                });
                // this.$refs.media.sendForm(this.id);
            } else {
                // TODO: POST時、モデルフィールドに追加されない
                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('weight', this.weight);
                formData.append('height', this.height);
                formData.append('Habitat', this.Habitat);
                formData.append('job', this.job);
                formData.append('description', this.description);
                // フォームで画像をアップロードしたときにのみ追加する
                if (this.file && typeof this.file === 'object') {
                    formData.append('file', this.file);
                }
                // const params = {
                //     "name": this.name,
                //     "weight": Number(this.weight),
                //     "height": Number(this.height),
                //     "Habitat": this.Habitat,
                //     "job": this.job,
                //     "description": this.description,
                //     "file": (this.file && typeof this.file === 'object') ? this.file : null} 
                fileUpload(endpoint, formData, this.id)
                // fileUpload(endpoint, formData, this.id)
                .then(response => {
                    // if (response.payload.status === 201) {
                        this.$router.push({
                            name: "book",
                            // params: { id: response.id }
                            params: { id: response.payload.data.id }
                        })
                    // }
                }).catch(error => {
                    return { error };
                });
            }
        },
    },
    async beforeRouteEnter (to, from, next) {
        if (to.params.id !== undefined) {
            let endpoint = `/api/book_list/${ to.params.id }/`;
            let data = await apiService(endpoint);
            return next(vm => {
                (vm.name = data.name,
                vm.weight = data.weight,
                vm.height = data.height,
                vm.Habitat = data.Habitat,
                vm.job = data.job,
                vm.description = data.description,
                vm.file = data.file
                )
            })
        } else {
            return next();
        }
    },
    created() {
        document.title = "Editor - book";
    }

}
</script>
