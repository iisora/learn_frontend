<template>
  <div class="container-fluid all-css">
    <!-- Binginning of Header Section -->
    <section id="header">
      <!-- <router-view name="header"></router-view> -->
      <Header/>
    </section>
    <!-- End of Header Section -->
    <!-- Binginning of Main Section -->
    <section id="main" class="img-fluid">
        <hr>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <hr>
    </section>
    <!-- End of Main Section -->
  </div>
</template>

<script>
import Header from './views/Header.vue';
export default {
  components : {
    Header,
  }
}
</script>

<style lang="scss">
.all-css {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // margin-top: 60px;  color: #2c3e50;

}

#header {
  margin-bottom: 5px;
}

#main {
  width: 100%;
  height: 700px;
  margin: auto;
  padding-top: 50px;
  /* background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeldL9CJbBnPsLIzpnOm2jMT_NXegNz2cGg&usqp=CAU) no-repeat; 
  background-size: cover;  */
}

/* Animation */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>