require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(14);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ee654148_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
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

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 16:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      scrollTop: 0,
      menuList: [{ title: '新鲜水果', list: [{ img: __webpack_require__(23), subTitle: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }, { img: __webpack_require__(23), subTitle: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }] }, { title: '水果拼盘', list: [{ img: __webpack_require__(23), subTitle: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }] }, { title: '鲜切水果', list: [{ img: __webpack_require__(23), subTitle: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }] }, { title: '进口水果', list: [{ img: __webpack_require__(23), subTitle: '特级有机牛奶草莓', info: '有机农场种植，纯天然无污染，个头大，非常爆满', price: 38, num: 0 }] }]
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
    }
  },
  mounted: function mounted() {},
  onPageScroll: function onPageScroll(ev) {
    this.scrollTop = ev.scrollTop;
  },

  methods: {
    listNum: function listNum(item) {
      return item.reduce(function (a, b) {
        return a.num + b.num;
      }, 0);
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
    initScroll: function initScroll() {
      console.log(1111);
    }
  }
});

/***/ }),

/***/ 17:
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
      attrs: {
        "num": _vm.listNum(item.list)
      }
    }, [_vm._v(_vm._s(item.title + _vm.listNum(item.list)))])
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
          "eventid": '0_' + key + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.calculate(product, 'minus')
          }
        }
      }, [_vm._v("-")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(product.num))]), _vm._v(" "), _c('button', {
        staticClass: "add",
        attrs: {
          "eventid": '1_' + key + '-' + index
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
  }, [_vm._v("100")]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_c('p', [_vm._v("￥" + _vm._s(_vm.calculateTotalPrice))]), _vm._v(" "), _c('p', [_vm._v("无需配送费")])], 1), _vm._v(" "), _c('div', {
    staticClass: "button"
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

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user.jpg";

/***/ })

},[13]);