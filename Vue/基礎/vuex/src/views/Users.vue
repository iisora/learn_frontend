<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1" class="link">USER1</router-link>
    <router-link to="/users/2" class="link">USER2</router-link>
    <hr />
    <!-- <h1>URLのパラメータ： {{ $route.params.unkoman }}</h1> -->
    <h1>URLのパラメータ：{{ unkoman }}</h1>
    <!-- :toだと動的な値にできる Thymeleafで言うth:みたいな -->
    <router-link
      :to="
        '/users/' + (Number(unkoman) + 1) + '/profile?carot=orange#next-user'
      "
      >Next Users</router-link
    >
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link
      id="next-user"
      :to="{
        name: 'users-profile',
        params: { unkoman: Number(unkoman) + 1 },
        query: { nasubi: 'purple', stone: 'radius' },
        hash: '#next-user',
      }"
      >Next Users</router-link
    >
    <div style="height: 1400px;"></div>
  </div>
</template>

<script>
export default {
  props: ["unkoman"],
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next((vm) => {
      console.log(vm.unkoman);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    const isLeave = window.confirm("本当にこのページを離れますか？");
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },
  //   watch: {
  //     $route(to, from) {
  //       console.log(to);
  //       console.log(from);
  //     },
  //   },
};
</script>

<style scoped>
.link {
  padding-right: 10px;
}
</style>
