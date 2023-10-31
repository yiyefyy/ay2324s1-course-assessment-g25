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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liveblocks/node */ \"(rsc)/./node_modules/@liveblocks/node/dist/index.mjs\");\n\n// SET UP AN AUTHENTICATION ENDPOINT\nconst API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;\nconst liveblocks = new _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__.Liveblocks({\n    secret: API_KEY\n});\nasync function POST(request) {\n    // Get the current user's unique id from your database\n    // TO BE CHANGED\n    const user = {\n        id: \"charlielayne@example.com\",\n        info: {\n            name: \"Charlie Layne\",\n            color: \"#D583F0\",\n            picture: \"https://liveblocks.io/avatars/avatar-1.png\"\n        }\n    };\n    // const user = __getUserFromDB__(request);\n    // Create a session for the current user\n    const session = liveblocks.prepareSession(user.id, {\n        userInfo: user.info\n    });\n    // Give the user access to the room\n    const { room } = await request.json();\n    session.allow(room, session.FULL_ACCESS);\n    // Authorize the user and return the result\n    const { body, status } = await session.authorize();\n    return new Response(body, {\n        status\n    });\n// // Identify the user and return the result\n// const { status, body } = await liveblocks.identifyUser({\n//   userId: user.id,\n//   groupIds, // Optional\n// });\n// return new Response(body, { status });\n} // const USER_INFO = [\n //   {\n //     name: \"Charlie Layne\",\n //     color: \"#D583F0\",\n //     picture: \"https://liveblocks.io/avatars/avatar-1.png\",\n //   },\n //   {\n //     name: \"Mislav Abha\",\n //     color: \"#F08385\",\n //     picture: \"https://liveblocks.io/avatars/avatar-2.png\",\n //   },\n //   {\n //     name: \"Tatum Paolo\",\n //     color: \"#F0D885\",\n //     picture: \"https://liveblocks.io/avatars/avatar-3.png\",\n //   },\n //   {\n //     name: \"Anjali Wanda\",\n //     color: \"#85EED6\",\n //     picture: \"https://liveblocks.io/avatars/avatar-4.png\",\n //   },\n //   {\n //     name: \"Jody Hekla\",\n //     color: \"#85BBF0\",\n //     picture: \"https://liveblocks.io/avatars/avatar-5.png\",\n //   },\n //   {\n //     name: \"Emil Joyce\",\n //     color: \"#8594F0\",\n //     picture: \"https://liveblocks.io/avatars/avatar-6.png\",\n //   },\n //   {\n //     name: \"Jory Quispe\",\n //     color: \"#85DBF0\",\n //     picture: \"https://liveblocks.io/avatars/avatar-7.png\",\n //   },\n //   {\n //     name: \"Quinn Elton\",\n //     color: \"#87EE85\",\n //     picture: \"https://liveblocks.io/avatars/avatar-8.png\",\n //   },\n // ];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saXZlYmxvY2tzLWF1dGgvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFJOUMsb0NBQW9DO0FBQ3BDLE1BQU1DLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0FBRWpELE1BQU1DLGFBQWEsSUFBSUwsd0RBQVVBLENBQUM7SUFDaENNLFFBQVFMO0FBQ1Y7QUFFTyxlQUFlTSxLQUFLQyxPQUFnQjtJQUN6QyxzREFBc0Q7SUFFdEQsZ0JBQWdCO0lBQ2hCLE1BQU1DLE9BQU87UUFDWEMsSUFBSTtRQUNKQyxNQUFNO1lBQ0pDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxTQUFTO1FBQ1g7SUFDRjtJQUVBLDJDQUEyQztJQUUzQyx3Q0FBd0M7SUFDeEMsTUFBTUMsVUFBVVYsV0FBV1csY0FBYyxDQUFDUCxLQUFLQyxFQUFFLEVBQUU7UUFDakRPLFVBQVVSLEtBQUtFLElBQUk7SUFDckI7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTSxFQUFFTyxJQUFJLEVBQUUsR0FBRyxNQUFNVixRQUFRVyxJQUFJO0lBQ25DSixRQUFRSyxLQUFLLENBQUNGLE1BQU1ILFFBQVFNLFdBQVc7SUFFdkMsMkNBQTJDO0lBQzNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNUixRQUFRUyxTQUFTO0lBQ2hELE9BQU8sSUFBSUMsU0FBU0gsTUFBTTtRQUFFQztJQUFPO0FBRW5DLDZDQUE2QztBQUM3QywyREFBMkQ7QUFDM0QscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQixNQUFNO0FBRU4seUNBQXlDO0FBQzNDLEVBSUEsc0JBQXNCO0NBQ3RCLE1BQU07Q0FDTiw2QkFBNkI7Q0FDN0Isd0JBQXdCO0NBQ3hCLDZEQUE2RDtDQUM3RCxPQUFPO0NBQ1AsTUFBTTtDQUNOLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsNkRBQTZEO0NBQzdELE9BQU87Q0FDUCxNQUFNO0NBQ04sMkJBQTJCO0NBQzNCLHdCQUF3QjtDQUN4Qiw2REFBNkQ7Q0FDN0QsT0FBTztDQUNQLE1BQU07Q0FDTiw0QkFBNEI7Q0FDNUIsd0JBQXdCO0NBQ3hCLDZEQUE2RDtDQUM3RCxPQUFPO0NBQ1AsTUFBTTtDQUNOLDBCQUEwQjtDQUMxQix3QkFBd0I7Q0FDeEIsNkRBQTZEO0NBQzdELE9BQU87Q0FDUCxNQUFNO0NBQ04sMEJBQTBCO0NBQzFCLHdCQUF3QjtDQUN4Qiw2REFBNkQ7Q0FDN0QsT0FBTztDQUNQLE1BQU07Q0FDTiwyQkFBMkI7Q0FDM0Isd0JBQXdCO0NBQ3hCLDZEQUE2RDtDQUM3RCxPQUFPO0NBQ1AsTUFBTTtDQUNOLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsNkRBQTZEO0NBQzdELE9BQU87Q0FDUCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1jb2RlbWlycm9yLy4vc3JjL2FwcC9hcGkvbGl2ZWJsb2Nrcy1hdXRoL3JvdXRlLnRzPzA0MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl2ZWJsb2NrcyB9IGZyb20gXCJAbGl2ZWJsb2Nrcy9ub2RlXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5cbi8vIFNFVCBVUCBBTiBBVVRIRU5USUNBVElPTiBFTkRQT0lOVFxuY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkxJVkVCTE9DS1NfU0VDUkVUX0tFWTtcblxuY29uc3QgbGl2ZWJsb2NrcyA9IG5ldyBMaXZlYmxvY2tzKHtcbiAgc2VjcmV0OiBBUElfS0VZISxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIC8vIEdldCB0aGUgY3VycmVudCB1c2VyJ3MgdW5pcXVlIGlkIGZyb20geW91ciBkYXRhYmFzZVxuXG4gIC8vIFRPIEJFIENIQU5HRURcbiAgY29uc3QgdXNlciA9IHtcbiAgICBpZDogXCJjaGFybGllbGF5bmVAZXhhbXBsZS5jb21cIixcbiAgICBpbmZvOiB7XG4gICAgICBuYW1lOiBcIkNoYXJsaWUgTGF5bmVcIixcbiAgICAgIGNvbG9yOiBcIiNENTgzRjBcIixcbiAgICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTEucG5nXCIsXG4gICAgfSxcbiAgfTtcblxuICAvLyBjb25zdCB1c2VyID0gX19nZXRVc2VyRnJvbURCX18ocmVxdWVzdCk7XG5cbiAgLy8gQ3JlYXRlIGEgc2Vzc2lvbiBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICBjb25zdCBzZXNzaW9uID0gbGl2ZWJsb2Nrcy5wcmVwYXJlU2Vzc2lvbih1c2VyLmlkLCB7XG4gICAgdXNlckluZm86IHVzZXIuaW5mbyxcbiAgfSk7XG5cbiAgLy8gR2l2ZSB0aGUgdXNlciBhY2Nlc3MgdG8gdGhlIHJvb21cbiAgY29uc3QgeyByb29tIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgc2Vzc2lvbi5hbGxvdyhyb29tLCBzZXNzaW9uLkZVTExfQUNDRVNTKTtcblxuICAvLyBBdXRob3JpemUgdGhlIHVzZXIgYW5kIHJldHVybiB0aGUgcmVzdWx0XG4gIGNvbnN0IHsgYm9keSwgc3RhdHVzIH0gPSBhd2FpdCBzZXNzaW9uLmF1dGhvcml6ZSgpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIHsgc3RhdHVzIH0pO1xuXG4gIC8vIC8vIElkZW50aWZ5IHRoZSB1c2VyIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICAvLyBjb25zdCB7IHN0YXR1cywgYm9keSB9ID0gYXdhaXQgbGl2ZWJsb2Nrcy5pZGVudGlmeVVzZXIoe1xuICAvLyAgIHVzZXJJZDogdXNlci5pZCxcbiAgLy8gICBncm91cElkcywgLy8gT3B0aW9uYWxcbiAgLy8gfSk7XG5cbiAgLy8gcmV0dXJuIG5ldyBSZXNwb25zZShib2R5LCB7IHN0YXR1cyB9KTtcbn1cblxuXG5cbi8vIGNvbnN0IFVTRVJfSU5GTyA9IFtcbi8vICAge1xuLy8gICAgIG5hbWU6IFwiQ2hhcmxpZSBMYXluZVwiLFxuLy8gICAgIGNvbG9yOiBcIiNENTgzRjBcIixcbi8vICAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci0xLnBuZ1wiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogXCJNaXNsYXYgQWJoYVwiLFxuLy8gICAgIGNvbG9yOiBcIiNGMDgzODVcIixcbi8vICAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci0yLnBuZ1wiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogXCJUYXR1bSBQYW9sb1wiLFxuLy8gICAgIGNvbG9yOiBcIiNGMEQ4ODVcIixcbi8vICAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci0zLnBuZ1wiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogXCJBbmphbGkgV2FuZGFcIixcbi8vICAgICBjb2xvcjogXCIjODVFRUQ2XCIsXG4vLyAgICAgcGljdHVyZTogXCJodHRwczovL2xpdmVibG9ja3MuaW8vYXZhdGFycy9hdmF0YXItNC5wbmdcIixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG5hbWU6IFwiSm9keSBIZWtsYVwiLFxuLy8gICAgIGNvbG9yOiBcIiM4NUJCRjBcIixcbi8vICAgICBwaWN0dXJlOiBcImh0dHBzOi8vbGl2ZWJsb2Nrcy5pby9hdmF0YXJzL2F2YXRhci01LnBuZ1wiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogXCJFbWlsIEpveWNlXCIsXG4vLyAgICAgY29sb3I6IFwiIzg1OTRGMFwiLFxuLy8gICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTYucG5nXCIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBuYW1lOiBcIkpvcnkgUXVpc3BlXCIsXG4vLyAgICAgY29sb3I6IFwiIzg1REJGMFwiLFxuLy8gICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTcucG5nXCIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBuYW1lOiBcIlF1aW5uIEVsdG9uXCIsXG4vLyAgICAgY29sb3I6IFwiIzg3RUU4NVwiLFxuLy8gICAgIHBpY3R1cmU6IFwiaHR0cHM6Ly9saXZlYmxvY2tzLmlvL2F2YXRhcnMvYXZhdGFyLTgucG5nXCIsXG4vLyAgIH0sXG4vLyBdO1xuIl0sIm5hbWVzIjpbIkxpdmVibG9ja3MiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIkxJVkVCTE9DS1NfU0VDUkVUX0tFWSIsImxpdmVibG9ja3MiLCJzZWNyZXQiLCJQT1NUIiwicmVxdWVzdCIsInVzZXIiLCJpZCIsImluZm8iLCJuYW1lIiwiY29sb3IiLCJwaWN0dXJlIiwic2Vzc2lvbiIsInByZXBhcmVTZXNzaW9uIiwidXNlckluZm8iLCJyb29tIiwianNvbiIsImFsbG93IiwiRlVMTF9BQ0NFU1MiLCJib2R5Iiwic3RhdHVzIiwiYXV0aG9yaXplIiwiUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/liveblocks-auth/route.ts\n");

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