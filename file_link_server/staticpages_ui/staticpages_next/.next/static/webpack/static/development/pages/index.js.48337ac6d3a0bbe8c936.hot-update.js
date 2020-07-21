webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Navbar.tsx":
/*!*************************************!*\
  !*** ./pages/components/Navbar.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ButtonAppBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"../../../node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"../../../node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"../../../node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"../../../node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"../../../node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"../../../node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ \"../../../node_modules/@material-ui/core/esm/colors/index.js\");\nvar _jsxFileName = \"/mnt/c/Users/#2/Desktop/FileLink_V2/file_link_server/staticpages_ui/staticpages_next/pages/components/Navbar.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n    root: {\n      flexGrow: 1\n    },\n    menuButton: {\n      marginRight: theme.spacing(2)\n    },\n    title: {\n      flexGrow: 1\n    }\n  });\n});\nfunction ButtonAppBar() {\n  _s();\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    position: \"static\",\n    style: {\n      position: \"fixed\",\n      top: 0,\n      left: 0,\n      margin: 0\n    },\n    color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__[\"lime\"][100],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n    justify: \"space-between\" // Add it here :)\n    ,\n    container: true,\n    spacing: 24,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"https://file-link.s3.us-east-2.amazonaws.com/FileLinklogo.svg\",\n    style: {\n      height: \"35px\",\n      width: \"197.6px\"\n    },\n    className: classes.menuButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    color: \"inherit\",\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"button\",\n    onClick: function onClick() {\n      location.href = \"http://localhost:8000/login/\";\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 19\n    }\n  }, \"Login\")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    color: \"inherit\",\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"button\",\n    onClick: function onClick() {\n      location.href = \"http://localhost:8000/register/\";\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 19\n    }\n  }, \"Register\"))))))));\n}\n\n_s(ButtonAppBar, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = ButtonAppBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"ButtonAppBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL05hdmJhci50c3g/ZmRkNCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJCdXR0b25BcHBCYXIiLCJjbGFzc2VzIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWFyZ2luIiwibGltZSIsImhlaWdodCIsIndpZHRoIiwibG9jYXRpb24iLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FESztBQUlYQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQURILEtBSkQ7QUFPWEMsU0FBSyxFQUFFO0FBQ0xKLGNBQVEsRUFBRTtBQURMO0FBUEksR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQWNlLFNBQVNLLFlBQVQsR0FBd0I7QUFBQTs7QUFDckMsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRVcsT0FBTyxDQUFDUCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLFlBQVEsRUFBQyxRQURYO0FBRUUsU0FBSyxFQUFFO0FBQUVRLGNBQVEsRUFBRSxPQUFaO0FBQXFCQyxTQUFHLEVBQUUsQ0FBMUI7QUFBNkJDLFVBQUksRUFBRSxDQUFuQztBQUFzQ0MsWUFBTSxFQUFFO0FBQTlDLEtBRlQ7QUFHRSxTQUFLLEVBQUVDLDZEQUFJLENBQUMsR0FBRCxDQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRSxNQUFDLHNEQUFEO0FBQ0UsV0FBTyxFQUFDLGVBRFYsQ0FDMEI7QUFEMUI7QUFFRSxhQUFTLE1BRlg7QUFHRSxXQUFPLEVBQUUsRUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQ0QsK0RBRko7QUFJRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLE1BREg7QUFFTEMsV0FBSyxFQUFFO0FBRkYsS0FKVDtBQVFFLGFBQVMsRUFBRVAsT0FBTyxDQUFDTCxVQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQWtCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQXdCLGFBQVMsRUFBRUssT0FBTyxDQUFDRixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFdBQU8sRUFBQyxRQURWO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JVLGNBQVEsQ0FBQ0MsSUFBVCxHQUFnQiw4QkFBaEI7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURGLEVBV0UsTUFBQyxnRUFBRDtBQUFRLFNBQUssRUFBQyxTQUFkO0FBQXdCLGFBQVMsRUFBRVQsT0FBTyxDQUFDRixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLFdBQU8sRUFBQyxRQURWO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JVLGNBQVEsQ0FBQ0MsSUFBVCxHQUFnQixpQ0FBaEI7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FYRixDQURGLENBbEJGLENBSEYsQ0FMRixDQURGLENBREY7QUF5REQ7O0dBNUR1QlYsWTtVQUNOVixTOzs7S0FETVUsWSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IGxpbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XHJcbiAgY3JlYXRlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkFwcEJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcclxuICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IDAsIGxlZnQ6IDAsIG1hcmdpbjogMCB9fVxyXG4gICAgICAgIGNvbG9yPXtsaW1lWzEwMF19XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIHsvKiBTY2FsZTogNS42NDU1NyAqL31cclxuXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIC8vIEFkZCBpdCBoZXJlIDopXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBzcGFjaW5nPXsyNH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZmlsZS1saW5rLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL0ZpbGVMaW5rbG9nby5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTk3LjZweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvbG9naW4vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9yZWdpc3Rlci9cIjtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar.tsx\n");

/***/ })

})