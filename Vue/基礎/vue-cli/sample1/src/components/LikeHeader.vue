<template>
  <div>
    <slot></slot>
    <hr />
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
  data() {
    return {
      user: {
        firstName: "Yamada",
        lastName: "Taro",
      },
    };
  },
};
</script>
