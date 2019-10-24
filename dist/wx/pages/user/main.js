require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([0],Array(18).concat([
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(19);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ee654148_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(32);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ee654148"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ee654148_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\user\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ee654148", Component.options)
  } else {
    hotAPI.reload("data-v-ee654148", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      scrollTop: 0,
      activeMenuIndex: 0,
      menuList: [{ title: '🔥热销', listNum: 0, list: [{ img: __webpack_require__(22), subTitle: '说爱我', info: '这么久没腻歪，赶紧说爱我~', price: 2019, num: 0 }, { img: __webpack_require__(23), subTitle: '揉揉肩', info: '上班一天可真辛苦鸭~', price: 9, num: 0 }, { img: __webpack_require__(24), subTitle: '捏捏腿', info: '天天在运动减肥，怎么就不见人来捏捏腿，=。=', price: 27, num: 0 }] }, { title: '要亲亲', listNum: 0, list: [{ img: __webpack_require__(25), subTitle: '要亲亲', info: '要亲亲~来亲亲迷人的晓嘴唇', price: 520, num: 0 }, { img: __webpack_require__(26), subTitle: '要花花', info: '同事们都收到漂亮的fua fua了，我的呢~', price: 13.14, num: 0 }] }, { title: '要抱抱', listNum: 0, list: [{ img: __webpack_require__(27), subTitle: '要抱抱', info: '要抱抱~来抱抱晓可爱的小细腿', price: 521, num: 0 }, { img: __webpack_require__(28), subTitle: '喵喵喵', info: '撒个娇，卖个萌，别撸代码了，来撸撸乖巧的晓可爱~', price: 1.12, num: 0 }] }, { title: '举高高', listNum: 0, list: [{ img: __webpack_require__(29), subTitle: '举高高', info: '要举高高~长再大也是小公举，也要抱抱举高高，快来挑战一下举重极限', price: 13, num: 0 }, { img: __webpack_require__(30), subTitle: '做饭饭', info: '给你个小爱心，赶紧去老娘做美味的大餐吧~', price: 14, num: 0 }] }, { title: '哄哄我', listNum: 0, list: [{ img: __webpack_require__(31), subTitle: '哄哄我', info: '也不哄哄人家，人家超想哭的，最后的机会，不然你也要完蛋', price: 5.21, num: 0 }] }]
    };
  },

  computed: {
    calculateTotalPrice: function calculateTotalPrice() {
      var total = 0;
      this.menuList.map(function (v) {
        v.list.map(function (list) {
          total += list.price * list.num;
        });
      });
      return total;
    },
    countTotalNum: function countTotalNum() {
      var total = 0;
      this.menuList.map(function (v) {
        v.list.map(function (list) {
          total += list.num;
        });
      });
      return total;
    }
  },
  watch: {
    menuList: {
      deep: true,
      handler: function handler() {
        this.menuList.map(function (v) {
          var total = 0;
          v.list.map(function (item) {
            total += item.num;
          });
          v.listNum = total;
        });
      },
      immediate: true
    }
  },
  onPageScroll: function onPageScroll(ev) {
    this.scrollTop = ev.scrollTop;
  },

  methods: {
    listNum: function listNum(item) {
      var total = 0;
      item.list.map(function (v) {
        total += v.num;
      });
      return total;
    },
    calculate: function calculate(product, operator) {
      if (operator === 'minus') {
        product.num -= 1;
        if (product.num <= 0) {
          product.num = 0;
        }
      } else if (operator === 'add') {
        product.num += 1;
      }
    },
    payment: function payment() {
      wx.navigateTo({
        url: '../pay/main'
      });
    }
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (6).jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (5).jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (7).jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (1).jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (11).jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (9).jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (12).jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (4).jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (3).jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/love (2).jpg";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "storeWrapper"
  }, [_c('div', {
    staticClass: "storeTopWrapper"
  }, [_c('div', {
    ref: "storeTop",
    staticClass: "storeTop"
  }, [_c('img', {
    staticClass: "storeTop-img",
    attrs: {
      "src": "../../assets/user.jpg",
      "alt": "logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "storeTop-info"
  }, [_c('h1', [_vm._v("肥肥的店（zch）")]), _vm._v(" "), _c('p', [_vm._v("公告：热烈庆祝肥肥生日庆典，即刻开始享受生日大礼包，先到先得哦~")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "noticeBar"
  }, [_c('span', {
    staticClass: "em"
  }, [_vm._v("满减")]), _vm._v(" "), _c('span', {
    staticClass: "info"
  }, [_vm._v("在线支付满520加13，满521加14")])])]), _vm._v(" "), _c('div', {
    staticClass: "mainBar"
  }, [_c('div', {
    staticClass: "mainBar-menu"
  }, [_c('ul', _vm._l((_vm.menuList), function(item, index) {
    return _c('li', {
      key: index,
      class: {
        active: index === _vm.activeMenuIndex, num: item.listNum !== 0
      },
      attrs: {
        "data-num": item.listNum,
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.activeMenuIndex = index
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "mainBar-content"
  }, [_c('ul', _vm._l((_vm.menuList), function(item, key) {
    return _c('li', {
      key: key
    }, [_c('p', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _vm._l((item.list), function(product, index) {
      return _c('div', {
        key: product.subTitle
      }, [_c('img', {
        attrs: {
          "src": product.img
        }
      }), _vm._v(" "), _c('div', [_c('strong', [_vm._v(_vm._s(product.subTitle))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(product.info))]), _vm._v(" "), _c('div', [_c('span', [_vm._v("￥" + _vm._s(product.price))]), _vm._v(" "), _c('div', [_c('button', {
        staticClass: "minus",
        attrs: {
          "eventid": '1_' + key + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.calculate(product, 'minus')
          }
        }
      }, [_vm._v("-")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(product.num))]), _vm._v(" "), _c('button', {
        staticClass: "add",
        attrs: {
          "eventid": '2_' + key + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.calculate(product, 'add')
          }
        }
      }, [_vm._v("+")])], 1)])], 1)])
    })], 2)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "countBar"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('img', {
    attrs: {
      "data-totalNum": _vm.countTotalNum,
      "src": "../../assets/cart.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_c('p', [_vm._v("￥" + _vm._s(_vm.calculateTotalPrice))]), _vm._v(" "), _c('p', [_vm._v("无需配送费")])], 1), _vm._v(" "), _c('div', {
    staticClass: "button",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.payment
    }
  }, [_vm._v("去结算")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ee654148", esExports)
  }
}

/***/ })
]),[18]);