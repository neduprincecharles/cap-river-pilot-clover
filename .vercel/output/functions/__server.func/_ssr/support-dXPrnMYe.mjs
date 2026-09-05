import { r as CONTACT } from "./site-Cky9mEFO.mjs";
import { H as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-chrome-VmjZqRFL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/support-dXPrnMYe.js
var import_jsx_runtime = require_jsx_runtime();
var FAQS = [
	{
		q: "How do I open the vault?",
		a: "Use access code 1847 on the home page."
	},
	{
		q: "Can I send real money?",
		a: "No. Transfers stay between demo sleeves."
	},
	{
		q: "Who do I call?",
		a: `${CONTACT.phoneDisplay} or WhatsApp ${CONTACT.whatsappDisplay}.`
	},
	{
		q: "Where are you?",
		a: "Desks in Lagos, Abuja, Port Harcourt, and Enugu — demonstration addresses."
	},
	{
		q: "I froze a card by mistake.",
		a: "Open Cards in the vault and unfreeze."
	},
	{
		q: "Balances look wrong.",
		a: "Lock the vault and unlock again, or keep using the stored demo ledger."
	}
];
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "/support" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl",
						children: "Support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: [
							"Desk hours ",
							CONTACT.hours,
							". Same human on phone, WhatsApp, and mail."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "rounded-md bg-accent px-4 py-3 font-medium text-accent-fg",
								href: CONTACT.whatsappHref,
								target: "_blank",
								rel: "noreferrer",
								children: "WhatsApp the desk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "rounded-md bg-elevated px-4 py-3 shadow-border",
								href: `tel:${CONTACT.phoneTel}`,
								children: ["Call ", CONTACT.phoneDisplay]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-md bg-elevated px-4 py-3 shadow-border",
								children: "Contact form"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 space-y-4",
						children: FAQS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border-b border-border pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: f.a
							})]
						}, f.q))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Support as component };
