import { H as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as DemoBanner } from "./demo-banner-Qup-rIKl.mjs";
import { t as Button } from "./button-BcSMDuzj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-DI4nS327.js
var import_jsx_runtime = require_jsx_runtime();
function Cards() {
	const cards = useBank((s) => s.cards);
	const accounts = useBank((s) => s.accounts);
	const toggle = useBank((s) => s.toggleFreeze);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: "Cards"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Freeze instantly. Linked to Everyday."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: cards.map((card) => {
					const account = accounts.find((a) => a.id === card.accountId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("relative aspect-[1.68/1] overflow-hidden rounded-xl p-5 text-accent-fg", card.frozen ? "bg-elevated text-muted" : "bg-accent"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.16em]",
									children: card.network
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-8 font-display text-2xl tracking-wide",
									children: ["···· ···· ···· ", card.last4]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-5 left-5 right-5 flex items-end justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-wider opacity-70",
										children: "Holder"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: "Alex Rivera"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] uppercase tracking-wider opacity-70",
											children: "Exp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm tabular-nums",
											children: card.expiry
										})]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg",
								children: card.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [account?.name, card.frozen ? " · Frozen" : ""]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: card.frozen ? "primary" : "secondary",
								size: "sm",
								onClick: () => toggle(card.id),
								children: card.frozen ? "Unfreeze" : "Freeze"
							})]
						})]
					}, card.id);
				})
			})
		]
	});
}
//#endregion
export { Cards as component };
