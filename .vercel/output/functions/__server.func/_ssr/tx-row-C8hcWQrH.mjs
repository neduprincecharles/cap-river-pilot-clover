import { H as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as formatSigned, t as formatDate } from "./format-gGJsW2ar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tx-row-C8hcWQrH.js
var import_jsx_runtime = require_jsx_runtime();
function TxRow({ tx }) {
	const credit = tx.amount > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 border-b border-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-sm text-fg",
				children: tx.merchant
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					formatDate(tx.date),
					" · ",
					tx.category,
					tx.status === "pending" ? " · Pending" : ""
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("shrink-0 text-sm tabular-nums", credit ? "text-credit" : "text-fg"),
			children: formatSigned(tx.amount)
		})]
	});
}
//#endregion
export { TxRow as t };
