<template>
  <div>
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { partyNight } from "@/partyNight";

export default {
  mixins: [partyNight],
  created() {
    console.log("created in component");
  },
};
</script>
