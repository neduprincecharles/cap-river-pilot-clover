import { i as __toESM } from "../_runtime.mjs";
import { n as BRAND, r as CONTACT } from "./site-Cky9mEFO.mjs";
import { H as require_jsx_runtime, V as require_react, x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-chrome-VmjZqRFL.mjs";
import { a as PiggyBank, d as CreditCard, f as Building2, p as ArrowRight, r as Smartphone, s as Lock, t as Wallet, u as Landmark } from "../_libs/lucide-react.mjs";
import { i as DEMO_PIN, r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as Input } from "./input-CAj2j6TP.mjs";
import { t as Button } from "./button-BcSMDuzj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2vKN0MD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRODUCTS = [
	{
		icon: Wallet,
		title: "Everyday current",
		body: "Salary in, bills out, card spend in one sleeve."
	},
	{
		icon: PiggyBank,
		title: "Reserve savings",
		body: "Interest posted monthly on idle cash."
	},
	{
		icon: Landmark,
		title: "Horizon book",
		body: "Long-horizon holdings beside your cash ledger."
	},
	{
		icon: Building2,
		title: "Business current",
		body: "Vendor payouts and payroll in a dedicated book."
	},
	{
		icon: CreditCard,
		title: "Debit and travel cards",
		body: "Freeze from the vault. Linked to Everyday."
	},
	{
		icon: Smartphone,
		title: "Instant transfers",
		body: "Move between sleeves the same minute."
	}
];
var STATS = [
	{
		k: "Desks",
		v: "4 cities"
	},
	{
		k: "Sleeves",
		v: "Personal + business"
	},
	{
		k: "Hours",
		v: CONTACT.hours
	},
	{
		k: "Channel",
		v: "WhatsApp + phone"
	}
];
function Home() {
	const navigate = useNavigate();
	const hydrated = useBank((s) => s.hydrated);
	const session = useBank((s) => s.session);
	const signIn = useBank((s) => s.signIn);
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const code = String(new FormData(e.currentTarget).get("pin") ?? "");
		const result = signIn(code);
		if (!result.ok) {
			setError(result.error);
			return;
		}
		navigate({ to: "/vault" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { current: "/" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 pb-16 pt-12 md:pt-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted",
							children: "Nigeria · demonstration bank"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl",
							children: [BRAND, ". Quiet capital at scale."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base text-muted md:text-lg",
							children: "Personal, reserve, and business ledgers in one vault. Browse products, rates, desks, and support — then unlock the demo with a four-digit code."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#vault",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									children: ["Open the vault", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									variant: "secondary",
									children: "Talk to the desk"
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4",
						children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg px-5 py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: s.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl",
								children: s.v
							})]
						}, s.k))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl",
							children: "A full product shelf"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-muted",
							children: "Six desks under one name. Open any of them in the vault."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hidden text-sm text-accent md:inline",
							children: "All products"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg bg-surface p-5 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-5 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: p.body
								})
							]
						}, p.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5 text-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl",
								children: "Custody with a visible lock"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "Freeze cards, inspect pending spend, and lock the vault when you step away. Security notes live on their own page."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/security",
								className: "mt-6 inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									children: "Read security"
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: "Reach the desk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "Phone, WhatsApp, and mail go to Chinedu — same numbers on every page."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "hover:underline",
										href: `tel:${CONTACT.phoneTel}`,
										children: CONTACT.phoneDisplay
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "hover:underline",
										href: CONTACT.whatsappHref,
										target: "_blank",
										rel: "noreferrer",
										children: ["WhatsApp ", CONTACT.whatsappDisplay]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "hover:underline",
										href: `mailto:${CONTACT.email}`,
										children: CONTACT.email
									}) })
								]
							})
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "vault",
					className: "mx-auto max-w-6xl px-4 py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-6 shadow-border md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.18em] text-muted",
								children: "Member access"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-medium",
								children: "Open the vault"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 max-w-lg text-sm text-muted",
								children: [
									"Demonstration code ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg tabular-nums",
										children: DEMO_PIN
									}),
									". Not a real institution."
								]
							}),
							!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm text-muted",
								children: "Preparing the vault…"
							}) : session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-fg",
									children: [
										"Signed in as ",
										session.holder,
										"."
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/vault",
									className: "mt-4 inline-flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "lg",
										children: ["Continue to overview", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit,
								className: "mt-8 max-w-xs space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted",
										htmlFor: "pin",
										children: "Access code"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "pin",
										name: "pin",
										inputMode: "numeric",
										autoComplete: "one-time-code",
										placeholder: "Four digits",
										defaultValue: "",
										maxLength: 4,
										onChange: () => setError(""),
										"aria-invalid": Boolean(error)
									}),
									error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-debit",
										children: error
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										size: "lg",
										className: "w-full",
										children: "Unlock"
									})
								]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
