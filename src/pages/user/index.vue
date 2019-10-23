<template>
  <scroll-view class="storeWrapper">
    <div class="storeTopWrapper">
      <div ref="storeTop" class="storeTop">
        <img class="storeTop-img" src="../../assets/user.jpg" alt="logo">
        <div class="storeTop-info">
          <h1>肥肥的店（zch）</h1>
          <p>公告：热烈庆祝肥肥生日庆典，即刻开始享受生日大礼包，先到先得哦~</p>
        </div>
      </div>
      <div class="noticeBar">
        <span class="em">满减</span>
        <span class="info">在线支付满520加13，满521加14</span>
      </div>
    </div>
    <div class="mainBar">
      <div class="mainBar-menu">
        <ul>
          <li v-for="(item, key) in menuList" :key="key">{{ key }}</li>
        </ul>
      </div>
      <div class="mainBar-content">
        <ul>
          <li v-for="(item, key) in menuList" :key="key">
            <p>{{ key }}</p>
            <div v-for="product in item" :key="product.title">
              <img :src="item.img">
              <div>
                <strong>{{ product.title }}</strong>
                <p>{{ product.info }}</p>
                <div>
                  <span>￥{{ product.price }}</span>
                  <div>
                    <button class="minus">-</button>
                    <span>{{ product.num }}</span>
                    <button class="add">+</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="countBar">
      <div class="icon">100</div>
      <div class="price">
        <p>￥100</p>
        <p>无需配送费</p>
      </div>
      <div class="button">去结算</div>
    </div>
  </scroll-view>
</template>

<script>
import img from "../../assets/user.jpg";

export default {
  data() {
    return {
      scrollTop: 0,
      menuList: {
        '新鲜水果': [{ img: require('../../assets/user.jpg'), title: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }],
        '水果拼盘': [{ img: '../../assets/user.jpg', title: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }],
        '鲜切水果': [{ img: img, title: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }],
        '进口水果': [{ img: '', title: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }]
        }
    }
  },
  mounted() {
  },
  onPageScroll(ev) {
    this.scrollTop = ev.scrollTop
  },
  methods: {
    initScroll() {
      console.log(1111)
    }
  }
}
</script>

<style scoped>
.storeWrapper {
  padding-bottom: 3.6em;
}
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
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.noticeBar .em {
  background-color: #c03;
  padding: .1em .3em;
  font-size: 2.6vw;
}
.noticeBar .info {
  padding-left: .6em;
}
.mainBar {
  display: flex;
  position: sticky;
  top: 0;
}
.mainBar-menu {
  background-color: #f8f8f8;
}
.mainBar-menu li {
  white-space: nowrap;
  padding: 1em;
  color: #8f8e8e;
  border-top: 1px solid #eee;
  font-size: 3.4vw;
}
.mainBar-content li > p {
  background-color: #f8f8f8;
  color: #777575;
  font-size: 3.2vw;
  padding: .4em .8em;
}
.mainBar-content li > div {
  font-size: 3.2vw;
  padding: .8em;
  display: flex;
}
.mainBar-content li > div > img {
  width: 5em;
  height: 5em;
}
.mainBar-content li > div > div {
  font-size: 3.2vw;
  padding-left: .8em;
}
.mainBar-content li > div > div > strong {
  font-size: 4vw;
  font-weight: bold;
}
.mainBar-content li > div > div > p {
  color: #aaa;
  font-size: 3vw;
  margin-top: 1em;
  margin-bottom: 1em;
}
.mainBar-content li > div > div > div {
  display: flex;
  justify-content: space-between;
}
.mainBar-content li > div > div > div > span {
  color: #ff2d2d;
  font-size: 3.6vw;
  font-weight: bold;
}
.mainBar-content li > div > div > div > div {
  display: flex;
  align-items: center;
}
.mainBar-content li > div > div > div > div > span {
  margin: 0 .8em;
}
.mainBar-content li > div > div > div > div > button {
  border-radius: 50%;
  width: .6em;
  height: .6em;
  padding: .2em;
  line-height: .4;
  box-sizing: content-box;
  font-weight: bold;
}
.mainBar-content li > div > div > div > div > button.minus {
  border: 1px solid #aeaead;
  color:#ff2d2d;
}
.mainBar-content li > div > div > div > div > button.add {
  border: 1px solid #ff2d2d;
  background-color: #ff2d2d;
  color:#fff;
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
  background-color: #fff;
}
.countBar .icon {
  color: #ff2d2d;
}
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
