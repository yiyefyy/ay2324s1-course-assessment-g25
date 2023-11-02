"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/liveblocks-auth/route";
exports.ids = ["app/api/liveblocks-auth/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_wangxinyi_Desktop_3219_Assignment_collaboration_service_src_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/liveblocks-auth/route.ts */ \"(rsc)/./src/app/api/liveblocks-auth/route.ts\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/liveblocks-auth/route\",\n        pathname: \"/api/liveblocks-auth\",\n        filename: \"route\",\n        bundlePath: \"app/api/liveblocks-auth/route\"\n    },\n    resolvedPagePath: \"/Users/wangxinyi/Desktop/3219 Assignment/collaboration-service/src/app/api/liveblocks-auth/route.ts\",\n    nextConfigOutput,\n    userland: _Users_wangxinyi_Desktop_3219_Assignment_collaboration_service_src_app_api_liveblocks_auth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/liveblocks-auth/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXZlYmxvY2tzLWF1dGglMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpdmVibG9ja3MtYXV0aCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRndhbmd4aW55aSUyRkRlc2t0b3AlMkYzMjE5JTIwQXNzaWdubWVudCUyRmNvbGxhYm9yYXRpb24tc2VydmljZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ3YW5neGlueWklMkZEZXNrdG9wJTJGMzIxOSUyMEFzc2lnbm1lbnQlMkZjb2xsYWJvcmF0aW9uLXNlcnZpY2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDZ0k7QUFDaEksNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbGl2ZWJsb2Nrcy1leGFtcGxlcy9uZXh0anMteWpzLWNvZGVtaXJyb3IvP2NmZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvd2FuZ3hpbnlpL0Rlc2t0b3AvMzIxOSBBc3NpZ25tZW50L2NvbGxhYm9yYXRpb24tc2VydmljZS9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHNcIjtcbmNvbnN0IEFwcFJvdXRlUm91dGVNb2R1bGUgPSBtb2R1bGUuQXBwUm91dGVSb3V0ZU1vZHVsZTtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xpdmVibG9ja3MtYXV0aC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xpdmVibG9ja3MtYXV0aFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3dhbmd4aW55aS9EZXNrdG9wLzMyMTkgQXNzaWdubWVudC9jb2xsYWJvcmF0aW9uLXNlcnZpY2Uvc3JjL2FwcC9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2xpdmVibG9ja3MtYXV0aC9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/liveblocks-auth/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/liveblocks-auth/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liveblocks/node */ \"(rsc)/./node_modules/@liveblocks/node/dist/index.mjs\");\n\n// Authenticating your Liveblocks application\n// https://liveblocks.io/docs/rooms/authentication/access-token-permissions/nextjs\nconst API_KEY = \"sk_dev_CxrBmRYqoOpD3xeml5E5TdmByRZdV_Ksalfaq5wEhzale2U0GJy1TYAvwdL6XJpj\";\nconst liveblocks = new _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__.Liveblocks({\n    secret: API_KEY\n});\nasync function POST(request) {\n    // Get the current user's unique id from your database\n    const userId = Math.floor(Math.random() * 10000);\n    // Create a session for the current user\n    // userInfo is made available in Liveblocks presence hooks, e.g. useOthers\n    const session = liveblocks.prepareSession(`user-${userId}`, {\n        userInfo: USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length]\n    });\n    // Give the user access to the room\n    const { room } = await request.json();\n    session.allow(room, session.FULL_ACCESS);\n    // Authorize the user and return the result\n    const { body, status } = await session.authorize();\n    return new Response(body, {\n        status\n    });\n}\nconst USER_INFO = [\n    {\n        name: \"Charlie Layne\",\n        color: \"#D583F0\",\n        picture: \"https://liveblocks.io/avatars/avatar-1.png\"\n    },\n    {\n        name: \"Mislav Abha\",\n        color: \"#F08385\",\n        picture: \"https://liveblocks.io/avatars/avatar-2.png\"\n    },\n    {\n        name: \"Tatum Paolo\",\n        color: \"#F0D885\",\n        picture: \"https://liveblocks.io/avatars/avatar-3.png\"\n    },\n    {\n        name: \"Anjali Wanda\",\n        color: \"#85EED6\",\n        picture: \"https://liveblocks.io/avatars/avatar-4.png\"\n    },\n    {\n        name: \"Jody Hekla\",\n        color: \"#85BBF0\",\n        picture: \"https://liveblocks.io/avatars/avatar-5.png\"\n    },\n    {\n        name: \"Emil Joyce\",\n        color: \"#8594F0\",\n        picture: \"https://liveblocks.io/avatars/avatar-6.png\"\n    },\n    {\n        name: \"Jory Quispe\",\n        color: \"#85DBF0\",\n        picture: \"https://liveblocks.io/avatars/avatar-7.png\"\n    },\n    {\n        name: \"Quinn Elton\",\n        color: \"#87EE85\",\n        picture: \"https://liveblocks.io/avatars/avatar-8.png\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFHOUMsNkNBQTZDO0FBQzdDLGtGQUFrRjtBQUVsRixNQUFNQyxVQUFVO0FBRWhCLE1BQU1DLGFBQWEsSUFBSUYsd0RBQVVBLENBQUM7SUFDaENHLFFBQVFGO0FBQ1Y7QUFFTyxlQUFlRyxLQUFLQyxPQUFvQjtJQUM3QyxzREFBc0Q7SUFDdEQsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7SUFFMUMsd0NBQXdDO0lBQ3hDLDBFQUEwRTtJQUMxRSxNQUFNQyxVQUFVUixXQUFXUyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUVMLE9BQU8sQ0FBQyxFQUFFO1FBQzFETSxVQUFVQyxTQUFTLENBQUNOLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLE1BQU1JLFVBQVVDLE1BQU0sQ0FBQztJQUN4RTtJQUVBLG1DQUFtQztJQUNuQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1WLFFBQVFXLElBQUk7SUFDbkNOLFFBQVFPLEtBQUssQ0FBQ0YsTUFBTUwsUUFBUVEsV0FBVztJQUV2QywyQ0FBMkM7SUFDM0MsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1WLFFBQVFXLFNBQVM7SUFDaEQsT0FBTyxJQUFJQyxTQUFTSCxNQUFNO1FBQUVDO0lBQU87QUFDckM7QUFFQSxNQUFNUCxZQUFZO0lBQ2hCO1FBQ0VVLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztJQUNYO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbGl2ZWJsb2Nrcy1leGFtcGxlcy9uZXh0anMteWpzLWNvZGVtaXJyb3IvLi9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHM/MDQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXZlYmxvY2tzIH0gZnJvbSBcIkBsaXZlYmxvY2tzL25vZGVcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbi8vIEF1dGhlbnRpY2F0aW5nIHlvdXIgTGl2ZWJsb2NrcyBhcHBsaWNhdGlvblxuLy8gaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2RvY3Mvcm9vbXMvYXV0aGVudGljYXRpb24vYWNjZXNzLXRva2VuLXBlcm1pc3Npb25zL25leHRqc1xuXG5jb25zdCBBUElfS0VZID0gXCJza19kZXZfQ3hyQm1SWXFvT3BEM3hlbWw1RTVUZG1CeVJaZFZfS3NhbGZhcTV3RWh6YWxlMlUwR0p5MVRZQXZ3ZEw2WEpwalwiO1xuXG5jb25zdCBsaXZlYmxvY2tzID0gbmV3IExpdmVibG9ja3Moe1xuICBzZWNyZXQ6IEFQSV9LRVkhLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIC8vIEdldCB0aGUgY3VycmVudCB1c2VyJ3MgdW5pcXVlIGlkIGZyb20geW91ciBkYXRhYmFzZVxuICBjb25zdCB1c2VySWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG5cbiAgLy8gQ3JlYXRlIGEgc2Vzc2lvbiBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAvLyB1c2VySW5mbyBpcyBtYWRlIGF2YWlsYWJsZSBpbiBMaXZlYmxvY2tzIHByZXNlbmNlIGhvb2tzLCBlLmcuIHVzZU90aGVyc1xuICBjb25zdCBzZXNzaW9uID0gbGl2ZWJsb2Nrcy5wcmVwYXJlU2Vzc2lvbihgdXNlci0ke3VzZXJJZH1gLCB7XG4gICAgdXNlckluZm86IFVTRVJfSU5GT1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgJSBVU0VSX0lORk8ubGVuZ3RoXSxcbiAgfSk7XG5cbiAgLy8gR2l2ZSB0aGUgdXNlciBhY2Nlc3MgdG8gdGhlIHJvb21cbiAgY29uc3QgeyByb29tIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgc2Vzc2lvbi5hbGxvdyhyb29tLCBzZXNzaW9uLkZVTExfQUNDRVNTKTtcblxuICAvLyBBdXRob3JpemUgdGhlIHVzZXIgYW5kIHJldHVybiB0aGUgcmVzdWx0XG4gIGNvbnN0IHsgYm9keSwgc3RhdHVzIH0gPSBhd2FpdCBzZXNzaW9uLmF1dGhvcml6ZSgpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIHsgc3RhdHVzIH0pO1xufVxuXG5jb25zdCBVU0VSX0lORk8gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkNoYXJsaWUgTGF5bmVcIixcbiAgICBjb2xvcjogXCIjRDU4M0YwXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWlzbGF2IEFiaGFcIixcbiAgICBjb2xvcjogXCIjRjA4Mzg1XCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMi5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGF0dW0gUGFvbG9cIixcbiAgICBjb2xvcjogXCIjRjBEODg1XCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItMy5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQW5qYWxpIFdhbmRhXCIsXG4gICAgY29sb3I6IFwiIzg1RUVENlwiLFxuICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTQucG5nXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkpvZHkgSGVrbGFcIixcbiAgICBjb2xvcjogXCIjODVCQkYwXCIsXG4gICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItNS5wbmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW1pbCBKb3ljZVwiLFxuICAgIGNvbG9yOiBcIiM4NTk0RjBcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci02LnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKb3J5IFF1aXNwZVwiLFxuICAgIGNvbG9yOiBcIiM4NURCRjBcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci03LnBuZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJRdWlubiBFbHRvblwiLFxuICAgIGNvbG9yOiBcIiM4N0VFODVcIixcbiAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci04LnBuZ1wiLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJMaXZlYmxvY2tzIiwiQVBJX0tFWSIsImxpdmVibG9ja3MiLCJzZWNyZXQiLCJQT1NUIiwicmVxdWVzdCIsInVzZXJJZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNlc3Npb24iLCJwcmVwYXJlU2Vzc2lvbiIsInVzZXJJbmZvIiwiVVNFUl9JTkZPIiwibGVuZ3RoIiwicm9vbSIsImpzb24iLCJhbGxvdyIsIkZVTExfQUNDRVNTIiwiYm9keSIsInN0YXR1cyIsImF1dGhvcml6ZSIsIlJlc3BvbnNlIiwibmFtZSIsImNvbG9yIiwicGljdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/liveblocks-auth/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@liveblocks","vendor-chunks/fast-sha256","vendor-chunks/@stablelib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fliveblocks-auth%2Froute&page=%2Fapi%2Fliveblocks-auth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fliveblocks-auth%2Froute.ts&appDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fwangxinyi%2FDesktop%2F3219%20Assignment%2Fcollaboration-service&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();