<template>
  <v-app>
    <v-app-bar color="success" app dark>
      <v-toolbar-title>図鑑</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">ホーム</v-btn>
        <v-btn text to="/editor">図鑑追加</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="success" app dark class="justify-center">
      ©Copyright 2021 sample
    </v-footer>
  </v-app>
</template>


