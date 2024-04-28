<template>
  <div ref="details" class="details">
    <img @click="handleGo" class="log" src="../assets/Logo1.png" alt="" />
    <img class="imgs" src="../assets/seek1.png" alt="" />
    <img class="imgs" src="../assets/seek2.png" alt="" />
    <img class="imgs" src="../assets/seek3.png" alt="" />
  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.scrollTop = 0;
  },
  methods: {
    handleGo() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.details {
  width: 100%;
  height: 100%;
  position: relative;
  .log {
    width: 150px;
    position: absolute;
    cursor: pointer;
    top: 10px;
    left: 10px;
  }
  img {
    width: 100%;
  }
}
</style>