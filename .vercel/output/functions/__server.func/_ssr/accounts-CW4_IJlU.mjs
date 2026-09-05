import { i as __toESM } from "../_runtime.mjs";
import { H as require_jsx_runtime, V as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as DemoBanner } from "./demo-banner-Qup-rIKl.mjs";
import { n as formatMoney } from "./format-gGJsW2ar.mjs";
import { t as TxRow } from "./tx-row-C8hcWQrH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/accounts-CW4_IJlU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LABELS = {
	checking: "Spending",
	savings: "Reserve",
	invest: "Invested",
	business: "Operating"
};
function Accounts() {
	const accounts = useBank((s) => s.accounts);
	const txs = useBank((s) => s.transactions);
	const [id, setId] = (0, import_react.useState)(accounts[0]?.id ?? "chk");
	const selected = accounts.find((a) => a.id === id) ?? accounts[0];
	const list = txs.filter((t) => t.accountId === selected?.id).sort((a, b) => +new Date(b.date) - +new Date(a.date));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: "Accounts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Three sleeves. One relationship."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: accounts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setId(a.id),
					className: cn("flex min-h-16 items-center justify-between rounded-lg px-4 text-left shadow-border", a.id === selected?.id ? "bg-elevated" : "bg-surface"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: a.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							LABELS[a.type],
							" · ···",
							a.last4
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tabular-nums",
						children: formatMoney(a.balance)
					})]
				}, a.id))
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-2 font-display text-xl",
				children: [selected.name, " activity"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-surface px-4 shadow-border",
				children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-8 text-sm text-muted",
					children: "No activity on this sleeve."
				}) : list.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxRow, { tx }, tx.id))
			})] }) : null
		]
	});
}
//#endregion
export { Accounts as component };
