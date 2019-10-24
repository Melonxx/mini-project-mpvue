<template>
  <div class="wrapper">
    <div class="payImg">
      <img src="../../assets/pay.png" alt="mimi">
    </div>
    <h1>支付成功</h1>
    <p>请及时找商家核销</p>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
  padding-top: 30vw;
}
span {
  position: fixed;
  top: 0;
  color: #fff;
  left: 3vw;
  font-size: 4vw;
  background-color: #aaa;
  padding: 0 .2em;
}
.payImg img {
  width: 30vw;
  height: 30vw;
  margin: 0 auto;
}
h1 {
  margin-top: 3vw;
}
p {
  color: #ddd;
  font-size: 3vw;
}
</style>
