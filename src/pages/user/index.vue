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
          <li v-for="(item, index) in menuList" :key="index" :class="{active: index === activeMenuIndex, num: item.listNum !== 0}" :data-num="item.listNum" @click="activeMenuIndex=index">{{ item.title }}</li>
        </ul>
      </div>
      <div class="mainBar-content">
        <ul>
          <li v-for="(item, key) in menuList" :key="key">
            <p>{{ item.title }}</p>
            <div v-for="product in item.list" :key="product.subTitle">
              <img :src="product.img">
              <div>
                <strong>{{ product.subTitle }}</strong>
                <p>{{ product.info }}</p>
                <div>
                  <span>￥{{ product.price }}</span>
                  <div>
                    <button class="minus" @click="calculate(product, 'minus')">-</button>
                    <span>{{ product.num }}</span>
                    <button class="add" @click="calculate(product, 'add')">+</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="countBar">
      <div class="icon">
        <img :data-totalNum="countTotalNum" src="../../assets/cart.png">
      </div>
      <div class="price">
        <p>￥{{ calculateTotalPrice }}</p>
        <p>无需配送费</p>
      </div>
      <div class="button">去结算</div>
    </div>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      activeMenuIndex: 0,
      menuList: [
        { title: '🔥热销', listNum: 0, list: [
          { img: require('../../assets/love (6).jpg'), subTitle: '说爱我', info: '这么久没腻歪，赶紧说爱我~', price: 2019, num: 0 },
          { img: require('../../assets/love (5).jpg'), subTitle: '揉揉肩', info: '上班一天可真辛苦鸭~', price: 9, num: 0 },
          { img: require('../../assets/love (7).jpg'), subTitle: '捏捏腿', info: '天天在运动减肥，怎么就不见人来捏捏腿，=。=', price: 27, num: 0 },
        ]},
        { title: '要亲亲', listNum: 0, list: [
          { img: require('../../assets/love (1).jpg'), subTitle: '要亲亲', info: '要亲亲~来亲亲迷人的晓嘴唇', price: 520, num: 0 },
          { img: require('../../assets/love (11).jpg'), subTitle: '要花花', info: '同事们都收到漂亮的fua fua了，我的呢~', price: 13.14, num: 0 },
        ]},
        { title: '要抱抱', listNum: 0, list: [
          { img: require('../../assets/love (9).jpg'), subTitle: '要抱抱', info: '要抱抱~来抱抱晓可爱的小细腿', price: 521, num: 0 },
          { img: require('../../assets/love (12).jpg'), subTitle: '喵喵喵', info: '撒个娇，卖个萌，别撸代码了，来撸撸乖巧的晓可爱~', price: 1.12, num: 0 },
        ]},
        { title: '举高高', listNum: 0, list: [
          { img: require('../../assets/love (4).jpg'), subTitle: '举高高', info: '要举高高~长再大也是小公举，也要抱抱举高高，快来挑战一下举重极限', price: 13, num: 0 },
          { img: require('../../assets/love (3).jpg'), subTitle: '做饭饭', info: '给你个小爱心，赶紧去老娘做美味的大餐吧~', price: 14, num: 0 },
        ]},
        { title: '哄哄我', listNum: 0, list: [
          { img: require('../../assets/love (2).jpg'), subTitle: '哄哄我', info: '也不哄哄人家，人家超想哭的，最后的机会，不然你也要完蛋', price: 5.21, num: 0 },
        ]}
      ]
    }
  },
  computed: {
    calculateTotalPrice() {
      let total = 0
      this.menuList.map(v => {
        v.list.map(list => {
          total += list.price * list.num
        })
      })
      return total
    },
    countTotalNum() {
      let total = 0
      this.menuList.map(v => {
        v.list.map(list => {
          total += list.num
        })
      })
      return total
    }
  },
  watch: {
    menuList: {
      deep: true,
      handler: function () {
        this.menuList.map(v => {
          let total = 0
          v.list.map(item => {
            total += item.num
          })
          v.listNum = total
        })
      },
      immediate: true
    }
  },
  onPageScroll(ev) {
    this.scrollTop = ev.scrollTop
  },
  methods: {
    listNum(item) {
      let total = 0
      item.list.map(v => {
        total += v.num
      })
      return total
    },
    calculate(product, operator) {
      if (operator === 'minus') {
        product.num -= 1
        if (product.num <= 0) {
          product.num = 0
        }
      } else if (operator === 'add') {
        product.num += 1
      }
    }
  }
}
</script>

<style scoped>
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
  position: relative;
  font-weight: 500;
}
.mainBar-menu li.active {
  background-color: #fff;
  color: #000;
}
.mainBar-menu li.active::before, .mainBar-menu li.num::after, .countBar .icon img::after {
  content: '';
  position: absolute;
}
.mainBar-menu li.active::before {
  width: .2em;
  height: 100%;
  background-color: #ff2d2d;
  left: 0;
  top: 0;
}
.mainBar-menu li.num::after, .countBar .icon img::after {
  width: 1em;
  height: 1em;
  content: attr(data-num);
  border-radius: 50%;
  background-color: #ff2d2d;
  color: #fff;
  text-align: center;
  padding: .3em;
  font-size: 2vw;
  line-height: 1;
}
.mainBar-content {
  max-height: calc(100vh - 48vw);
  overflow-y: scroll;
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
  border-bottom: 1px solid #eee;
}
.mainBar-content li > div:last-child {
  border-bottom: none;
}
.mainBar-content li > div > img {
  width: 5em;
  height: 5em;
}
.mainBar-content li > div > div {
  font-size: 3.2vw;
  padding-left: .8em;
  flex: 1;
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
.countBar .icon img {
  color: #ff2d2d;
  width: 1.8em;
  height: 1.8em;
  position: relative;
  overflow: visible;
}
.countBar .icon img::after {
  content: attr(data-totalNum);
  border: 1px solid #fff;
  font-size: 1.8vw;
  right: -.2em;
  top: 0;
  line-height: 1;
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
