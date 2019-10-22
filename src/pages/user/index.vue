<template>
  <div class="storeWrapper">
    <div class="storeTop">
      <img class="storeTop-img" src="../../assets/user.jpg" alt="logo">
      <div class="storeTop-info">
        <h1>肥肥的店（zch）</h1>
        <p>公示：热烈庆祝肥肥生日庆典，即刻开始享受生日大礼包，先到先得哦~</p>
      </div>
    </div>
    <div class="noticeBar">
      <span class="em">满减</span>
      <span class="info">在线支付满520加13，满521加14</span>
    </div>
    <div class="countBar">
      <div class="icon">100</div>
      <div class="price">
        <p>￥100</p>
        <p>无需配送费</p>
      </div>
      <div class="button">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style scoped>
.storeWrapper {}
.storeTop {
  width: 100vw;
  padding: 3vw;
  background-image: linear-gradient(#000, rgba(0,0,0,.9), rgba(0,0,0,.84));
  display: flex;
  box-sizing: border-box;
}
.storeTop-info {
  padding-left: 3vw;
  color: #fff;
  flex: 1;
}
.storeTop-info h1 {
  font-size: 5vw;
}
.storeTop-info p {
  font-size: 3vw;
  color: #ccc;
  word-break: break-all;
  width: 100%;
  margin-top: 1em;
}
.storeTop-img {
  width: 20vw;
  height: 20vw;
}
.noticeBar {
  font-size: 3vw;
  background-color: rgba(0,0,0,.86);
  color: #ddd;
  padding: .6em 3vw;
}
.noticeBar .em {
  background-color: #c03;
  padding: .1em .3em;
  font-size: 2.6vw;
}
.noticeBar .info {
  padding-left: .6em;
}
.countBar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 3vw;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #eee;
}
.countBar .icon {}
.countBar .price {
  flex: 1;
  padding-left: .6em;
  font-weight: bold;
  color: #ff2d2d;
  font-size: 4vw;
}
.countBar .price p:last-child {
  font-size: 2.6vw;
  color: #ccc;
  font-weight: normal;
}
.countBar .button {
  background-color: #ff2d2d;
  color: #fff;
  padding: 1em 2.4em;
}
</style>
