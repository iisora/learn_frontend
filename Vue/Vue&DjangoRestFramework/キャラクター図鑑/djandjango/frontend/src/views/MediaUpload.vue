<template>
  <v-container>
    <v-file-input
      ref="fileInput"
      label="画像"
      accept="image/*"
      :clearable="clearable"
      @click="clearFileName"
      @change="inputFile"
    ></v-file-input>
    <div>
      <img :src="previewSrc" alt="" width="300" />
    </div>
    <v-btn @click="clearFile">Clear File</v-btn>
    <!-- <v-btn large color="primary" @click="sendForm">Post</v-btn> -->
  </v-container>
</template>

<script>
// import { fileUpload } from '../common/api.service';
const reader = new FileReader();
export default {
  props: ["media", "src"],
  data() {
    return {
      file: null,
      fileName: '',
      previewSrc: '',
      clearable: true,
    };
  },
  methods: {
    inputFile: function(e) {
      reader.onload = e => {
        this.previewSrc = e.target.result;
      };
      console.log("e", e);
      reader.readAsDataURL(e);
      this.file = e;
      this.fileName = e.name;
      /** 
      v-on:change で取得出来る event から File を取得し、
      FormData を利用してファイルを POST する
      **/
      // TODO: this.fileをemitして、親コンポーネントでfileDataを利用してPOSTする
      console.log("emit this file", this.file);
      this.$emit("file", this.file);
    },
    clearFile: function() {
      this.file = null;
      this.fileName = '';
      this.previewSrc = '';
      this.$refs.fileInput.lazyValue = '';
    },
    clearFileName: function(e) {
      e.target.value = '';
    },
    // sendForm: function(id) {

    //   const params = new FormData();
    //   params.append('file', this.file);
    //     console.log("fileUpload:id", id);
    //     fileUpload('books', params, id).then(response => {
    //     // アップロード成功したら
    //     if (response.payload.status === 201) {
    //       this.fileName = '';
    //       this.previewSrc = '';
    //       this.$refs.fileInput.lazyValue = '';
    //     }
    //   });
    // },
  },
};
</script>