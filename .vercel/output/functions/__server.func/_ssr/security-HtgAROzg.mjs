import { H as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-chrome-VmjZqRFL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/security-HtgAROzg.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		t: "Vault lock",
		d: "Sign out from any screen. The next visitor needs the access code."
	},
	{
		t: "Card freeze",
		d: "Travel and Everyday cards freeze independently."
	},
	{
		t: "Matching books",
		d: "Every internal transfer writes a debit and a credit."
	},
	{
		t: "Local ledger",
		d: "Demo data stays in this browser. It is not a shared bank database."
	},
	{
		t: "No live rails",
		d: "No NIP, no card network, no real settlement."
	},
	{
		t: "Plain language",
		d: "Every page repeats that this is a demonstration."
	}
];
function Security() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "/security" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl",
						children: "Security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Controls you can see. This is product theatre, not a regulated control framework."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: ITEMS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg bg-surface p-5 shadow-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: i.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: i.d
							})]
						}, i.t))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Security as component };
