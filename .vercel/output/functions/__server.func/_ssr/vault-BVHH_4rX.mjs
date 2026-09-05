import { H as require_jsx_runtime, b as Navigate, f as useRouterState, h as Outlet, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LedgerMark } from "./mark-B7F1QU7J.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { c as LifeBuoy, d as CreditCard, i as Receipt, l as LayoutGrid, m as ArrowLeftRight, o as LogOut, t as Wallet } from "../_libs/lucide-react.mjs";
import { r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as Button } from "./button-BcSMDuzj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vault-BVHH_4rX.js
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/vault",
		label: "Overview",
		icon: LayoutGrid
	},
	{
		to: "/vault/accounts",
		label: "Accounts",
		icon: Wallet
	},
	{
		to: "/vault/activity",
		label: "Activity",
		icon: ArrowLeftRight
	},
	{
		to: "/vault/cards",
		label: "Cards",
		icon: CreditCard
	},
	{
		to: "/vault/bills",
		label: "Bills",
		icon: Receipt
	},
	{
		to: "/vault/help",
		label: "Desk",
		icon: LifeBuoy
	}
];
function VaultShell() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const session = useBank((s) => s.session);
	const signOut = useBank((s) => s.signOut);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden w-56 shrink-0 flex-col border-r border-border px-4 py-6 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/vault",
						className: "mb-8 flex items-center gap-2 px-2 text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerMark, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg tracking-tight",
							children: "Quantum Ledger"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-1 flex-col gap-1",
						children: [NAV.map((item) => {
							const active = pathname === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex min-h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors duration-[var(--motion-quick)]", active ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), item.label]
							}, item.to);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/vault/move",
							className: cn("mt-3 flex min-h-11 items-center justify-center rounded-md bg-accent px-3 text-sm font-medium text-accent-fg", pathname === "/vault/move" && "opacity-90"),
							children: "Move money"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t border-border pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-2 text-sm text-fg",
								children: session?.holder
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "px-2 text-xs text-muted",
								children: ["Member since ", session?.memberSince]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								className: "mt-2 w-full justify-start text-muted",
								onClick: signOut,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), "Lock vault"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col pb-24 md:pb-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between border-b border-border px-4 py-4 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/vault",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerMark, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg",
							children: "Quantum Ledger"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "Lock vault",
						onClick: signOut,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 px-4 py-6 md:px-8 md:py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-6",
				children: NAV.map((item) => {
					const active = pathname === item.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-[11px]", active ? "text-fg" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), item.label]
					}, item.to);
				})
			})
		})]
	});
}
function VaultLayout() {
	const hydrated = useBank((s) => s.hydrated);
	const session = useBank((s) => s.session);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-muted",
		children: "Preparing the vault…"
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VaultShell, {});
}
//#endregion
export { VaultLayout as component };
