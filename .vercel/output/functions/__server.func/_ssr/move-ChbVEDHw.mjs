import { i as __toESM } from "../_runtime.mjs";
import { H as require_jsx_runtime, V as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as DemoBanner } from "./demo-banner-Qup-rIKl.mjs";
import { n as formatMoney } from "./format-gGJsW2ar.mjs";
import { t as Input } from "./input-CAj2j6TP.mjs";
import { t as Button } from "./button-BcSMDuzj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/move-ChbVEDHw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MoveMoney() {
	const accounts = useBank((s) => s.accounts);
	const transfer = useBank((s) => s.transfer);
	const navigate = useNavigate();
	const [fromId, setFromId] = (0, import_react.useState)(accounts[0]?.id ?? "chk");
	const [toId, setToId] = (0, import_react.useState)(accounts[1]?.id ?? "sav");
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const amt = Number(fd.get("amount"));
		const memo = String(fd.get("memo") ?? "");
		const result = transfer(fromId, toId, amt, memo);
		if (!result.ok) {
			setError(result.error);
			return;
		}
		toast.success("Transfer posted");
		navigate({ to: "/vault/activity" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: "Move money"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Internal only. Posts to both sleeves at once."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-4 rounded-lg bg-surface p-5 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "From",
						htmlFor: "from",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "from",
							value: fromId,
							onChange: setFromId
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "To",
						htmlFor: "to",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "to",
							value: toId,
							onChange: setToId
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Amount",
						htmlFor: "amount",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "amount",
							name: "amount",
							inputMode: "decimal",
							placeholder: "0.00",
							onChange: () => setError("")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Memo (optional)",
						htmlFor: "memo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "memo",
							name: "memo",
							placeholder: "What is this for?"
						})
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-debit",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "w-full",
						children: "Post transfer"
					})
				]
			})
		]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "text-xs font-medium text-muted",
			children: label
		}), children]
	});
}
function Select({ id, value, onChange }) {
	const accounts = useBank((s) => s.accounts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		id,
		value,
		onChange: (e) => onChange(e.target.value),
		className: "h-11 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
		children: accounts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
			value: a.id,
			children: [
				a.name,
				" · ",
				formatMoney(a.balance)
			]
		}, a.id))
	});
}
//#endregion
export { MoveMoney as component };
