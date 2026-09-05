import { n as BRAND, r as CONTACT } from "./site-Cky9mEFO.mjs";
import { H as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LedgerMark } from "./mark-B7F1QU7J.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-chrome-VmjZqRFL.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/rates",
		label: "Rates"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/security",
		label: "Security"
	},
	{
		to: "/support",
		label: "Support"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2 text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerMark, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg tracking-tight md:text-xl",
					children: BRAND
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted",
				children: [LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: cn("min-h-11 inline-flex items-center hover:text-fg", current === l.to && "text-fg"),
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "vault",
					className: "inline-flex min-h-11 items-center rounded-md bg-accent px-3 text-sm font-medium text-accent-fg",
					children: "Open vault"
				})]
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 font-display text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerMark, { className: "size-4" }), BRAND]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "A demonstration bank for personal, business, and reserve ledgers."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-2 block text-sm text-fg hover:underline",
						href: `mailto:${CONTACT.email}`,
						children: CONTACT.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-1 block text-sm text-fg hover:underline",
						href: `tel:${CONTACT.phoneTel}`,
						children: CONTACT.phoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "mt-1 block text-sm text-fg hover:underline",
						href: CONTACT.whatsappHref,
						target: "_blank",
						rel: "noreferrer",
						children: ["WhatsApp ", CONTACT.whatsappDisplay]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Explore"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "mt-2 block text-sm text-muted hover:text-fg",
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rates",
						className: "mt-1 block text-sm text-muted hover:text-fg",
						children: "Rates"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/security",
						className: "mt-1 block text-sm text-muted hover:text-fg",
						children: "Security"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: "Notice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-subtle",
					children: "Product demonstration only. Not a licensed bank. Not NDIC or FDIC insured. Not financial advice."
				})] })
			]
		})
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
