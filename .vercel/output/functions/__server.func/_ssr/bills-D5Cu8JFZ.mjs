import { i as __toESM } from "../_runtime.mjs";
import { H as require_jsx_runtime, V as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as DemoBanner } from "./demo-banner-Qup-rIKl.mjs";
import { n as formatMoney } from "./format-gGJsW2ar.mjs";
import { t as Button } from "./button-BcSMDuzj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bills-D5Cu8JFZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BILLS = [
	{
		id: "b1",
		name: "Ikeja Electric",
		due: "12 Sep",
		naira: 18400
	},
	{
		id: "b2",
		name: "Spectranet",
		due: "18 Sep",
		naira: 22500
	},
	{
		id: "b3",
		name: "DSTV Compact",
		due: "20 Sep",
		naira: 15700
	}
];
function Bills() {
	const accounts = useBank((s) => s.accounts);
	const payBill = useBank((s) => s.payBill);
	const [fromId, setFromId] = (0, import_react.useState)("chk");
	const [paid, setPaid] = (0, import_react.useState)([]);
	function pay(e, id, name, naira) {
		e.preventDefault();
		const usd = Math.round(naira / 1500 * 100) / 100;
		const result = payBill(fromId, name, usd);
		if (!result.ok) {
			toast.error(result.error);
			return;
		}
		setPaid((p) => [...p, id]);
		toast.success(`${name} marked paid in the demo`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: "Bills"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Naira labels. The vault ledger posts a USD equivalent debit."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs text-muted",
				htmlFor: "from-bill",
				children: "Pay from"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: "from-bill",
				value: fromId,
				onChange: (e) => setFromId(e.target.value),
				className: "h-11 w-full max-w-md rounded-md bg-elevated px-3 text-sm text-fg shadow-border",
				children: accounts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: a.id,
					children: [
						a.name,
						" · ",
						formatMoney(a.balance)
					]
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: BILLS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => pay(e, b.id, b.name, b.naira),
					className: "flex flex-wrap items-center justify-between gap-3 rounded-lg bg-surface p-4 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: b.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"Due ",
							b.due,
							" · ₦",
							b.naira.toLocaleString("en-NG")
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "sm",
						disabled: paid.includes(b.id),
						children: paid.includes(b.id) ? "Paid" : "Pay in demo"
					})]
				}, b.id))
			})
		]
	});
}
//#endregion
export { Bills as component };
