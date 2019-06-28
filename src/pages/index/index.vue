<template>
  <div>
    <h1>我的小程序</h1>
    <h1>{{motto}}</h1>
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
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },
  created () {
    console.log(getApp())
  }
}
</script>

<style scoped>

</style>
