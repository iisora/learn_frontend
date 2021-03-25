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
                    v-model="height"
                    label="身長"
                    required
                >
                </v-text-field>
                <v-text-field
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
import { apiService } from '../common/api.service'
export default {
    name: "bookEditor",
    props: {
        id: {
            type: Number,
            required: false
        }
    },
    data() {
        return {
            name: null,
            weight: null,
            height: null,
            Habitat: null,
            job: null,
            description: null
        }
    },
    methods: {
        onSubmit() {
            let endpoint = "/api/books/";
            let method = "POST";
            // idが既に存在していれば更新処理をする
            if (this.id !== undefined) {
                endpoint += `${this.id}/`;
                method = `PUT`;
            }
            apiService(endpoint, method, {
                name: this.name,
                weight: this.weight,
                height: this.height,
                Habitat: this.Habitat,
                job: this.job,
                description: this.description
            }).then(book_data => {
                this.$router.push({
                    name: "book",
                    params: { id: book_data.id }
                })
            })
        }
    },
    async beforeRouteEnter (to, from, next) {
        if (to.params.id !== undefined) {
            let endpoint = `/api/books/${ to.params.id }/`;
            let data = await apiService(endpoint);
            return next(vm => {
                (vm.name = data.name,
                vm.weight = data.weight,
                vm.height = data.height,
                vm.Habitat = data.Habitat,
                vm.job = data.job,
                vm.description = data.description)
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
