<template>
  <v-app>
    <v-app-bar color="success lighten-1" app dark>
      <v-toolbar-title>図鑑</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">ホーム</v-btn>
        <v-btn text to="/editor">図鑑追加</v-btn> 
      </v-toolbar-items>
    </v-app-bar>

    <!--/* v-content要素の中のコンテンツはサイドメニューの動作に連動する */-->
    <v-content>
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        height="all"
      >
        <router-view />
      </v-parallax>
    </v-content>

    <Footer />

  </v-app>
</template>

<script>
import Footer from './components/Footer';

export default {
  components: {
     Footer
  },
}
</script>



