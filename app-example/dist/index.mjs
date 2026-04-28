//#region \0rolldown/runtime.js
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
//#endregion
//#region ../lib-example/src/symbol.ts
var symbol$1;
var init_symbol$1 = __esmMin((() => {
	symbol$1 = Symbol("hello");
}));
//#endregion
//#region ../lib-example/lib/index.js
var init_lib = __esmMin((() => {
	init_symbol$1();
}));
//#endregion
//#region ../lib-example/lib/symbol.js
var symbol;
var init_symbol = __esmMin((() => {
	symbol = Symbol("hello");
}));
//#endregion
//#region src/index.js
var require_src = /* @__PURE__ */ __commonJSMin((() => {
	init_lib();
	init_symbol();
	console.log("Symbol from #src is" + !(symbol$1 === symbol) ? "" : " *not* equal to itself!");
}));
//#endregion
export default require_src();
