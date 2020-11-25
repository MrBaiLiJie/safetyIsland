<<<<<<< HEAD
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-ec-canvas/uni-ec-canvas"],{

/***/ 328:
/*!*************************************************************************************************************!*\
  !*** G:/cst/2020/November/11-18/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-ec-canvas.vue?vue&type=template&id=77bf01da& */ 329);
/* harmony import */ var _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-ec-canvas.vue?vue&type=script&lang=js& */ 331);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_ec_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& */ 334);
/* harmony import */ var _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/uni-ec-canvas/uni-ec-canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 329:
/*!********************************************************************************************************************************************!*\
  !*** G:/cst/2020/November/11-18/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=template&id=77bf01da& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-ec-canvas.vue?vue&type=template&id=77bf01da& */ 330);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_template_id_77bf01da___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 330:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/cst/2020/November/11-18/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=template&id=77bf01da& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 331:
/*!**************************************************************************************************************************************!*\
  !*** G:/cst/2020/November/11-18/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-ec-canvas.vue?vue&type=script&lang=js& */ 332);
/* harmony import */ var _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 332:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/cst/2020/November/11-18/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









var _wxCanvas = _interopRequireDefault(__webpack_require__(/*! ./wx-canvas */ 333));
var echarts = _interopRequireWildcard(__webpack_require__(/*! ./echarts */ 161));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
var ctx;function wrapTouch(event) {for (var i = 0; i < event.touches.length; ++i) {var touch = event.touches[i];touch.offsetX = touch.x;touch.offsetY = touch.y;}
  return event;
}var _default2 =

{
  props: {
    canvasId: {
      type: String,
      default: function _default() {
        return "ec-canvas";
      } },

    ec: {
      type: Object },

    forceUseOldCanvas: {
      type: Boolean,
      value: false } },


  data: function data() {
    return {
      $curChart: {},
      toHandleList: [],
      isUseNewCanvas: true };

  },
  watch: {
    "ec.option": {
      deep: true,
      handler: function handler(val, oldVal) {
        this.setOption(val);
      } } },


  onReady: function onReady() {
    if (!this.ec) {
      console.warn(
      '组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" ' +
      'canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>');

      return;
    }
    if (!this.ec.lazyLoad) {
      this.init();
    }
  },
  methods: {
    compareVersion: function compareVersion(v1, v2) {
      v1 = v1.split(".");
      v2 = v2.split(".");
      var len = Math.max(v1.length, v2.length);

      while (v1.length < len) {
        v1.push("0");
      }
      while (v2.length < len) {
        v2.push("0");
      }

      for (var i = 0; i < len; i++) {
        var num1 = parseInt(v1[i]);
        var num2 = parseInt(v2[i]);

        if (num1 > num2) {
          return 1;
        } else if (num1 < num2) {
          return -1;
        }
      }
      return 0;
    },
    init: function init(callback) {
      var version = wx.getSystemInfoSync().SDKVersion;

      var canUseNewCanvas = this.compareVersion(version, "2.9.0") >= 0;
      if (this.forceUseOldCanvas) {
        if (canUseNewCanvas) console.warn("开发者强制使用旧canvas,建议关闭");
        canUseNewCanvas = false;
      }
      this.isUseNewCanvas = canUseNewCanvas && !this.forceUseOldCanvas;
      if (this.isUseNewCanvas) {
        console.log('微信基础库版本大于2.9.0，开始使用<canvas type="2d"/>');
        // 2.9.0 可以使用 <canvas type="2d"></canvas>
        this.initByNewWay(callback);
      } else {
        var isValid = this.compareVersion(version, "1.9.91") >= 0;
        if (!isValid) {
          console.error(
          "微信基础库版本过低，需大于等于 1.9.91。" +
          "参见：https://github.com/ecomfe/echarts-for-weixin" +
          "#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82");

          return;
        } else {
          console.warn(
          "建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能");

          this.initByOldWay(callback);
        }
      }
    },
    initByOldWay: function initByOldWay(callback) {
      // 1.9.91 <= version < 2.9.0：原来的方式初始化
      ctx = wx.createCanvasContext(this.canvasId, this);
      var canvas = new _wxCanvas.default(ctx, this.canvasId, false);
      var that = this;
      echarts.setCanvasCreator(function () {
        return canvas;
      });
      // const canvasDpr = wx.getSystemInfoSync().pixelRatio // 微信旧的canvas不能传入dpr
      var canvasDpr = 1;
      var query = wx.createSelectorQuery().in(this);
      query.
      select(".ec-canvas").
      boundingClientRect(function (res) {
        if (typeof callback === "function") {
          that.$curChart = callback(canvas, res.width, res.height, canvasDpr);
        } else if (that.ec) {
          that.initChart(canvas, res.width, res.height, canvasDpr);
        } else {
          that.triggerEvent("init", {
            canvas: canvas,
            width: res.width,
            height: res.height,
            devicePixelRatio: canvasDpr // 增加了dpr，可方便外面echarts.init
          });
        }
      }).
      exec();
    },
    initByNewWay: function initByNewWay(callback) {
      var that = this;
      // version >= 2.9.0：使用新的方式初始化
      var query = wx.createSelectorQuery().in(this);
      query.
      select(".ec-canvas").
      fields({
        node: true,
        size: true }).

      exec(function (res) {
        var canvasNode = res[0].node;

        var canvasDpr = wx.getSystemInfoSync().pixelRatio;
        var canvasWidth = res[0].width;
        var canvasHeight = res[0].height;

        var ctx = canvasNode.getContext("2d");

        var canvas = new _wxCanvas.default(ctx, that.canvasId, true, canvasNode);
        echarts.setCanvasCreator(function () {
          return canvas;
        });

        if (typeof callback === "function") {
          that.$curChart = callback(
          canvas,
          canvasWidth,
          canvasHeight,
          canvasDpr);

        } else if (that.ec) {
          that.initChart(canvas, canvasWidth, canvasHeight, canvasDpr);
        } else {
          that.triggerEvent("init", {
            canvas: canvas,
            width: canvasWidth,
            height: canvasHeight,
            devicePixelRatio: canvasDpr });

        }
      });
    },
    setOption: function setOption(val) {
      if (!this.$curChart || !this.$curChart.setOption) {
        this.toHandleList.push(val);
      } else {
        this.$curChart.setOption(val);
      }
    },
    canvasToTempFilePath: function canvasToTempFilePath(opt) {var _this = this;
      if (this.isUseNewCanvas) {
        // 新版
        var query = wx.createSelectorQuery().in(this);
        query.
        select(".ec-canvas").
        fields({
          node: true,
          size: true }).

        exec(function (res) {
          var canvasNode = res[0].node;
          opt.canvas = canvasNode;
          wx.canvasToTempFilePath(opt);
        });
      } else {
        // 旧的
        if (!opt.canvasId) {
          opt.canvasId = this.canvasId;
        }
        ctx.draw(true, function () {
          wx.canvasToTempFilePath(opt, _this);
        });
      }
    },

    touchStart: function touchStart(e) {
      if (this.ec.stopTouchEvent) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      this.$emit("touchstart", e);
      if (this.$curChart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.$curChart.getZr().handler;
        if (handler) {
          handler.dispatch("mousedown", {
            zrX: touch.x,
            zrY: touch.y });

          handler.dispatch("mousemove", {
            zrX: touch.x,
            zrY: touch.y });

          handler.processGesture(wrapTouch(e), "start");
        }
      }
    },

    touchMove: function touchMove(e) {
      if (this.ec.stopTouchEvent) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      this.$emit("touchmove", e);
      if (this.$curChart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.$curChart.getZr().handler;
        if (handler) {
          handler.dispatch("mousemove", {
            zrX: touch.x,
            zrY: touch.y });

          handler.processGesture(wrapTouch(e), "change");
        }
      }
    },

    touchEnd: function touchEnd(e) {
      if (this.ec.stopTouchEvent) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      this.$emit("touchend", e);
      if (this.$curChart) {
        var touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = this.$curChart.getZr().handler;
        if (handler) {
          handler.dispatch("mouseup", {
            zrX: touch.x,
            zrY: touch.y });

          handler.dispatch("click", {
            zrX: touch.x,
            zrY: touch.y });

          handler.processGesture(wrapTouch(e), "end");
        }
      }
    },

    initChart: function initChart(canvas, width, height, canvasDpr) {
      this.$curChart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: canvasDpr });

      canvas.setChart(this.$curChart);
      this.$curChart.setOption(this.ec.option);
    } } };exports.default = _default2;

/***/ }),

/***/ 334:
/*!***********************************************************************************************************************************************!*\
  !*** G:/cst/2020/November/11-18/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& */ 335);
/* harmony import */ var _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_ec_canvas_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 335:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/cst/2020/November/11-18/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ec-canvas/uni-ec-canvas"],{331:
/*!********************************************************************************************!*\
  !*** E:/GitLab/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue ***!
  \********************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! ./uni-ec-canvas.vue?vue&type=template&id=77bf01da& */332),i=n(/*! ./uni-ec-canvas.vue?vue&type=script&lang=js& */334);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(/*! ./uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& */337);var c,s=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),o=Object(s["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);o.options.__file="components/uni-ec-canvas/uni-ec-canvas.vue",e["default"]=o.exports},332:
/*!***************************************************************************************************************************!*\
  !*** E:/GitLab/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=template&id=77bf01da& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-ec-canvas.vue?vue&type=template&id=77bf01da& */333);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},333:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GitLab/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=template&id=77bf01da& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return c})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=!1,c=[];i._withStripped=!0},334:
/*!*********************************************************************************************************************!*\
  !*** E:/GitLab/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-ec-canvas.vue?vue&type=script&lang=js& */335),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},335:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GitLab/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,i=o(n(/*! ./wx-canvas */336)),a=s(n(/*! ./echarts */197));function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function s(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=r?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function o(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=0;e<t.touches.length;++e){var n=t.touches[e];n.offsetX=n.x,n.offsetY=n.y}return t}var h={props:{canvasId:{type:String,default:function(){return"ec-canvas"}},ec:{type:Object},forceUseOldCanvas:{type:Boolean,value:!1}},data:function(){return{$curChart:{},toHandleList:[],isUseNewCanvas:!0}},watch:{"ec.option":{deep:!0,handler:function(t,e){this.setOption(t)}}},onReady:function(){this.ec?this.ec.lazyLoad||this.init():console.warn('组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>')},methods:{compareVersion:function(t,e){t=t.split("."),e=e.split(".");var n=Math.max(t.length,e.length);while(t.length<n)t.push("0");while(e.length<n)e.push("0");for(var r=0;r<n;r++){var i=parseInt(t[r]),a=parseInt(e[r]);if(i>a)return 1;if(i<a)return-1}return 0},init:function(t){var e=wx.getSystemInfoSync().SDKVersion,n=this.compareVersion(e,"2.9.0")>=0;if(this.forceUseOldCanvas&&(n&&console.warn("开发者强制使用旧canvas,建议关闭"),n=!1),this.isUseNewCanvas=n&&!this.forceUseOldCanvas,this.isUseNewCanvas)console.log('微信基础库版本大于2.9.0，开始使用<canvas type="2d"/>'),this.initByNewWay(t);else{var r=this.compareVersion(e,"1.9.91")>=0;if(!r)return void console.error("微信基础库版本过低，需大于等于 1.9.91。参见：https://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82");console.warn("建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能"),this.initByOldWay(t)}},initByOldWay:function(t){r=wx.createCanvasContext(this.canvasId,this);var e=new i.default(r,this.canvasId,!1),n=this;a.setCanvasCreator((function(){return e}));var c=1,s=wx.createSelectorQuery().in(this);s.select(".ec-canvas").boundingClientRect((function(r){"function"===typeof t?n.$curChart=t(e,r.width,r.height,c):n.ec?n.initChart(e,r.width,r.height,c):n.triggerEvent("init",{canvas:e,width:r.width,height:r.height,devicePixelRatio:c})})).exec()},initByNewWay:function(t){var e=this,n=wx.createSelectorQuery().in(this);n.select(".ec-canvas").fields({node:!0,size:!0}).exec((function(n){var r=n[0].node,c=wx.getSystemInfoSync().pixelRatio,s=n[0].width,o=n[0].height,u=r.getContext("2d"),h=new i.default(u,e.canvasId,!0,r);a.setCanvasCreator((function(){return h})),"function"===typeof t?e.$curChart=t(h,s,o,c):e.ec?e.initChart(h,s,o,c):e.triggerEvent("init",{canvas:h,width:s,height:o,devicePixelRatio:c})}))},setOption:function(t){this.$curChart&&this.$curChart.setOption?this.$curChart.setOption(t):this.toHandleList.push(t)},canvasToTempFilePath:function(t){var e=this;if(this.isUseNewCanvas){var n=wx.createSelectorQuery().in(this);n.select(".ec-canvas").fields({node:!0,size:!0}).exec((function(e){var n=e[0].node;t.canvas=n,wx.canvasToTempFilePath(t)}))}else t.canvasId||(t.canvasId=this.canvasId),r.draw(!0,(function(){wx.canvasToTempFilePath(t,e)}))},touchStart:function(t){if(this.ec.stopTouchEvent)return t.preventDefault(),void t.stopPropagation();if(this.$emit("touchstart",t),this.$curChart&&t.touches.length>0){var e=t.touches[0],n=this.$curChart.getZr().handler;n&&(n.dispatch("mousedown",{zrX:e.x,zrY:e.y}),n.dispatch("mousemove",{zrX:e.x,zrY:e.y}),n.processGesture(u(t),"start"))}},touchMove:function(t){if(this.ec.stopTouchEvent)return t.preventDefault(),void t.stopPropagation();if(this.$emit("touchmove",t),this.$curChart&&t.touches.length>0){var e=t.touches[0],n=this.$curChart.getZr().handler;n&&(n.dispatch("mousemove",{zrX:e.x,zrY:e.y}),n.processGesture(u(t),"change"))}},touchEnd:function(t){if(this.ec.stopTouchEvent)return t.preventDefault(),void t.stopPropagation();if(this.$emit("touchend",t),this.$curChart){var e=t.changedTouches?t.changedTouches[0]:{},n=this.$curChart.getZr().handler;n&&(n.dispatch("mouseup",{zrX:e.x,zrY:e.y}),n.dispatch("click",{zrX:e.x,zrY:e.y}),n.processGesture(u(t),"end"))}},initChart:function(t,e,n,r){this.$curChart=a.init(t,null,{width:e,height:n,devicePixelRatio:r}),t.setChart(this.$curChart),this.$curChart.setOption(this.ec.option)}}};e.default=h},337:
/*!******************************************************************************************************************************!*\
  !*** E:/GitLab/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& */338),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},338:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GitLab/trustsafeislandweb/safetyIsland/components/uni-ec-canvas/uni-ec-canvas.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
>>>>>>> 4288fb6a3d0d833b65cad3b2a98c5b44c355b3a7
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-ec-canvas/uni-ec-canvas.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ec-canvas/uni-ec-canvas-create-component',
    {
        'components/uni-ec-canvas/uni-ec-canvas-create-component':(function(module, exports, __webpack_require__){
<<<<<<< HEAD
            __webpack_require__('1')['createComponent'](__webpack_require__(328))
=======
            __webpack_require__('1')['createComponent'](__webpack_require__(331))
>>>>>>> 4288fb6a3d0d833b65cad3b2a98c5b44c355b3a7
        })
    },
    [['components/uni-ec-canvas/uni-ec-canvas-create-component']]
]);
