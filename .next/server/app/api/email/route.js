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
exports.id = "app/api/email/route";
exports.ids = ["app/api/email/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.tsx&appDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.tsx&appDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_jr_Documents_GitHub_Projects_hackathon_landing_src_app_api_email_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/email/route.tsx */ \"(rsc)/./src/app/api/email/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/email/route\",\n        pathname: \"/api/email\",\n        filename: \"route\",\n        bundlePath: \"app/api/email/route\"\n    },\n    resolvedPagePath: \"/Users/jr/Documents/GitHub Projects/hackathon-landing/src/app/api/email/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_jr_Documents_GitHub_Projects_hackathon_landing_src_app_api_email_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZlbWFpbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZW1haWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZlbWFpbCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZqciUyRkRvY3VtZW50cyUyRkdpdEh1YiUyMFByb2plY3RzJTJGaGFja2F0aG9uLWxhbmRpbmclMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGanIlMkZEb2N1bWVudHMlMkZHaXRIdWIlMjBQcm9qZWN0cyUyRmhhY2thdGhvbi1sYW5kaW5nJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2lDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLWxhbmRpbmcvPzE0N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2pyL0RvY3VtZW50cy9HaXRIdWIgUHJvamVjdHMvaGFja2F0aG9uLWxhbmRpbmcvc3JjL2FwcC9hcGkvZW1haWwvcm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9lbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2VtYWlsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9lbWFpbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9qci9Eb2N1bWVudHMvR2l0SHViIFByb2plY3RzL2hhY2thdGhvbi1sYW5kaW5nL3NyYy9hcHAvYXBpL2VtYWlsL3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9lbWFpbC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.tsx&appDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/email/route.tsx":
/*!*************************************!*\
  !*** ./src/app/api/email/route.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* harmony import */ var _components_email_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/email/ContactForm */ \"(rsc)/./src/components/email/ContactForm.tsx\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process__WEBPACK_IMPORTED_MODULE_3__.env.NEXT_PUBLIC_RESEND_API_KEY);\nasync function POST(req, res) {\n    const { name, email } = await req.json();\n    try {\n        const existingEmail = await prisma.email.findUnique({\n            where: {\n                email: email\n            }\n        });\n        if (existingEmail) {\n            return Response.json({\n                msg: \"Email already exists in the database\"\n            }, {\n                status: 400\n            });\n        }\n        await prisma.email.create({\n            data: {\n                name,\n                email\n            }\n        });\n        resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: \"elrincondeldev.business@gmail.com\",\n            subject: \"Hello World\",\n            html: \"<p>Congrats on sending your <strong>first email</strong>!</p>\",\n            react: (0,_components_email_ContactForm__WEBPACK_IMPORTED_MODULE_1__.EmailTemplate)({\n                name,\n                email\n            })\n        });\n        return Response.json({\n            msg: \"Email sent successfully\",\n            name\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        return Response.json({\n            msg: \"Something went wrong\"\n        }, {\n            status: 400\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9lbWFpbC9yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNnQztBQUMrQjtBQUVqQjtBQUNoQjtBQUU5QixNQUFNSSxTQUFTLElBQUlGLHdEQUFZQTtBQUUvQixNQUFNRyxTQUFTLElBQUlMLDBDQUFNQSxDQUFDRyx3Q0FBR0EsQ0FBQ0csMEJBQTBCO0FBRWpELGVBQWVDLEtBQUtDLEdBQWdCLEVBQUVDLEdBQW9CO0lBQy9ELE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNSCxJQUFJSSxJQUFJO0lBRXRDLElBQUk7UUFDRixNQUFNQyxnQkFBZ0IsTUFBTVQsT0FBT08sS0FBSyxDQUFDRyxVQUFVLENBQUM7WUFDbERDLE9BQU87Z0JBQ0xKLE9BQU9BO1lBQ1Q7UUFDRjtRQUVBLElBQUlFLGVBQWU7WUFDakIsT0FBT0csU0FBU0osSUFBSSxDQUNsQjtnQkFBRUssS0FBSztZQUF1QyxHQUM5QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTWQsT0FBT08sS0FBSyxDQUFDUSxNQUFNLENBQUM7WUFDeEJDLE1BQU07Z0JBQ0pWO2dCQUNBQztZQUNGO1FBQ0Y7UUFFQU4sT0FBT2dCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQ2pCQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsU0FBUztZQUNUQyxNQUFNO1lBQ05DLE9BQU8xQiw0RUFBYUEsQ0FBQztnQkFBRVM7Z0JBQU1DO1lBQU07UUFDckM7UUFFQSxPQUFPSyxTQUFTSixJQUFJLENBQ2xCO1lBQUVLLEtBQUs7WUFBMkJQO1FBQUssR0FDdkM7WUFBRVEsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT1UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsT0FBT1osU0FBU0osSUFBSSxDQUFDO1lBQUVLLEtBQUs7UUFBdUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEUsU0FBVTtRQUNSLE1BQU1kLE9BQU8wQixXQUFXO0lBQzFCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXRob24tbGFuZGluZy8uL3NyYy9hcHAvYXBpL2VtYWlsL3JvdXRlLnRzeD9iZDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gJ3Jlc2VuZCc7XG5pbXBvcnQgeyBFbWFpbFRlbXBsYXRlIH0gZnJvbSAnQC9jb21wb25lbnRzL2VtYWlsL0NvbnRhY3RGb3JtJztcbmltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAncHJvY2Vzcyc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChlbnYuTkVYVF9QVUJMSUNfUkVTRU5EX0FQSV9LRVkpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZXhpc3RpbmdFbWFpbCA9IGF3YWl0IHByaXNtYS5lbWFpbC5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdFbWFpbCkge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgbXNnOiAnRW1haWwgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLmVtYWlsLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICBmcm9tOiAnb25ib2FyZGluZ0ByZXNlbmQuZGV2JyxcbiAgICAgIHRvOiAnZWxyaW5jb25kZWxkZXYuYnVzaW5lc3NAZ21haWwuY29tJyxcbiAgICAgIHN1YmplY3Q6ICdIZWxsbyBXb3JsZCcsXG4gICAgICBodG1sOiAnPHA+Q29uZ3JhdHMgb24gc2VuZGluZyB5b3VyIDxzdHJvbmc+Zmlyc3QgZW1haWw8L3N0cm9uZz4hPC9wPicsXG4gICAgICByZWFjdDogRW1haWxUZW1wbGF0ZSh7IG5hbWUsIGVtYWlsIH0pLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1zZzogJ0VtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5JywgbmFtZSB9LFxuICAgICAgeyBzdGF0dXM6IDIwMCB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG1zZzogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVzZW5kIiwiRW1haWxUZW1wbGF0ZSIsIlByaXNtYUNsaWVudCIsImVudiIsInByaXNtYSIsInJlc2VuZCIsIk5FWFRfUFVCTElDX1JFU0VORF9BUElfS0VZIiwiUE9TVCIsInJlcSIsInJlcyIsIm5hbWUiLCJlbWFpbCIsImpzb24iLCJleGlzdGluZ0VtYWlsIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiUmVzcG9uc2UiLCJtc2ciLCJzdGF0dXMiLCJjcmVhdGUiLCJkYXRhIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwicmVhY3QiLCJlcnJvciIsImNvbnNvbGUiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/email/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/components/email/ContactForm.tsx":
/*!**********************************************!*\
  !*** ./src/components/email/ContactForm.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailTemplate: () => (/* binding */ EmailTemplate)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst EmailTemplate = ({ name, email })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                name,\n                \" Se ha registrado en la hackathon del dev, su email es: \",\n                email,\n                \"!\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jr/Documents/GitHub Projects/hackathon-landing/src/components/email/ContactForm.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jr/Documents/GitHub Projects/hackathon-landing/src/components/email/ContactForm.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29tcG9uZW50cy9lbWFpbC9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGdCQUFnQixDQUFDLEVBQzVCQyxJQUFJLEVBQ0pDLEtBQUssRUFJTixpQkFDQyw4REFBQ0M7a0JBQ0MsNEVBQUNDOztnQkFDRUg7Z0JBQUs7Z0JBQXlEQztnQkFBTTs7Ozs7Ozs7Ozs7a0JBR3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLWxhbmRpbmcvLi9zcmMvY29tcG9uZW50cy9lbWFpbC9Db250YWN0Rm9ybS50c3g/NjJiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRW1haWxUZW1wbGF0ZSA9ICh7XG4gIG5hbWUsXG4gIGVtYWlsLFxufToge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59KSA9PiAoXG4gIDxkaXY+XG4gICAgPHA+XG4gICAgICB7bmFtZX0gU2UgaGEgcmVnaXN0cmFkbyBlbiBsYSBoYWNrYXRob24gZGVsIGRldiwgc3UgZW1haWwgZXM6IHtlbWFpbH0hXG4gICAgPC9wPlxuICA8L2Rpdj5cbik7XG4iXSwibmFtZXMiOlsiRW1haWxUZW1wbGF0ZSIsIm5hbWUiLCJlbWFpbCIsImRpdiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/components/email/ContactForm.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/entities","vendor-chunks/domutils","vendor-chunks/js-beautify","vendor-chunks/htmlparser2","vendor-chunks/peberminta","vendor-chunks/domhandler","vendor-chunks/dom-serializer","vendor-chunks/selderee","vendor-chunks/resend","vendor-chunks/parseley","vendor-chunks/leac","vendor-chunks/html-to-text","vendor-chunks/domelementtype","vendor-chunks/@selderee","vendor-chunks/@react-email","vendor-chunks/deepmerge"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.tsx&appDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjr%2FDocuments%2FGitHub%20Projects%2Fhackathon-landing&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();