<template>
  <div class="wrapper">
    <p>肥肥的爱心小店</p>
    <div class="userAvatar">
      <img src="../../assets/user.jpg" alt="mimi">
    </div>
    <button @click="goIn">欢迎小可爱进入</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello miniprograme'
    }
  },
  methods: {
    goIn() {
      wx.navigateTo({
        url: '../user/main'
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
  .userAvatar {
    text-align: center;
  }
  .userAvatar img {
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
  }
  p {
    text-align: center;
    margin-bottom: 2em;
  }
  button {
    width: 80vw;
    margin-top: 2em;
  }
</style>
