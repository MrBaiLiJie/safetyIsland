(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/safetyKnowledge/safeKnowledgeDetail"],{"5a8f":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{}},methods:{openPdf:function(){console.log("pdf"),n.downloadFile({url:"https://example.com/somefile.pdf",success:function(e){var t=e.tempFilePath;n.openDocument({filePath:t,success:function(n){console.log("打开文档成功")}})}})}}};e.default=t}).call(this,t("543d")["default"])},"77ec":function(n,e,t){"use strict";var c=t("9b6b"),u=t.n(c);u.a},9087:function(n,e,t){"use strict";t.r(e);var c=t("5a8f"),u=t.n(c);for(var o in c)"default"!==o&&function(n){t.d(e,n,(function(){return c[n]}))}(o);e["default"]=u.a},"9b6b":function(n,e,t){},ca8f:function(n,e,t){"use strict";(function(n){t("ccc2");c(t("66fd"));var e=c(t("f58a"));function c(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},d454:function(n,e,t){"use strict";var c;t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return c}));var u=function(){var n=this,e=n.$createElement;n._self._c},o=[]},f58a:function(n,e,t){"use strict";t.r(e);var c=t("d454"),u=t("9087");for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);t("77ec");var a,f=t("f0c5"),r=Object(f["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);e["default"]=r.exports}},[["ca8f","common/runtime","common/vendor"]]]);