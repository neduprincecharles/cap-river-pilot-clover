import { i as __toESM } from "../_runtime.mjs";
import { H as require_jsx_runtime, V as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as DemoBanner } from "./demo-banner-Qup-rIKl.mjs";
import { t as TxRow } from "./tx-row-C8hcWQrH.mjs";
import { t as Input } from "./input-CAj2j6TP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activity-WYWSeBal.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"Income",
	"Transfer",
	"Dining",
	"Home",
	"Travel",
	"Business"
];
function Activity() {
	const txs = useBank((s) => s.transactions);
	const accounts = useBank((s) => s.accounts);
	const [q, setQ] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return [...txs].sort((a, b) => +new Date(b.date) - +new Date(a.date)).filter((t) => filter === "All" ? true : t.category === filter).filter((t) => {
			if (!query) return true;
			const account = accounts.find((a) => a.id === t.accountId)?.name ?? "";
			return `${t.merchant} ${t.category} ${account}`.toLowerCase().includes(query);
		});
	}, [
		txs,
		q,
		filter,
		accounts
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: "Activity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Search merchants, categories, or sleeves."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search activity",
				"aria-label": "Search activity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f),
					className: cn("h-10 rounded-full px-4 text-sm", filter === f ? "bg-accent text-accent-fg" : "bg-elevated text-muted"),
					children: f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-surface px-4 shadow-border",
				children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-8 text-sm text-muted",
					children: "No matching activity."
				}) : list.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxRow, { tx }, tx.id))
			})
		]
	});
}
//#endregion
export { Activity as component };
