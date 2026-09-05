import { H as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-chrome-VmjZqRFL.mjs";
import { t as Button } from "./button-BcSMDuzj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CuP8w8NZ.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		title: "Everyday current",
		who: "Salary, rent, cards",
		points: [
			"Naira and dollar sleeves in the vault demo",
			"Debit card freeze",
			"Bill pay from the vault"
		]
	},
	{
		title: "Reserve savings",
		who: "Idle cash",
		points: [
			"Monthly interest credit",
			"Internal transfer in minutes",
			"No lock-in in the demo"
		]
	},
	{
		title: "Horizon book",
		who: "Longer money",
		points: [
			"Dividend lines",
			"Contribution from Everyday",
			"Held beside cash, not mixed"
		]
	},
	{
		title: "Business current",
		who: "Operators and desks",
		points: [
			"Vendor payouts",
			"Payroll memo transfers",
			"Separate last-four from personal"
		]
	},
	{
		title: "Cards",
		who: "Everyday + travel",
		points: [
			"Visa and Mastercard faces",
			"Freeze / unfreeze",
			"Linked to Everyday"
		]
	},
	{
		title: "Desk support",
		who: "Members",
		points: [
			"Phone and WhatsApp",
			"Four city desks",
			"Same contact on every page"
		]
	}
];
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "/products" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl",
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "A retail and business shelf. Figures in the vault are demonstration balances, not deposits."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg bg-surface p-6 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-muted",
									children: item.who
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-2xl",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2 text-sm text-muted",
									children: item.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: p }, p))
								})
							]
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "vault",
						className: "mt-10 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							children: "Open the vault"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Products as component };
