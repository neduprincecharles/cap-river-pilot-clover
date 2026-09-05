import { H as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as totalBalance, r as useBank } from "./router-C2Rh02Sy.mjs";
import { t as DemoBanner } from "./demo-banner-Qup-rIKl.mjs";
import { n as formatMoney } from "./format-gGJsW2ar.mjs";
import { t as TxRow } from "./tx-row-C8hcWQrH.mjs";
import { t as Button } from "./button-BcSMDuzj.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vault-48zee1bd.js
var import_jsx_runtime = require_jsx_runtime();
function lastDays(n, txs) {
	const days = [];
	const now = /* @__PURE__ */ new Date();
	for (let i = n - 1; i >= 0; i--) {
		const d = new Date(now);
		d.setDate(now.getDate() - i);
		const key = d.toISOString().slice(0, 10);
		days.push({
			key,
			label: d.toLocaleDateString("en-US", { weekday: "narrow" }),
			spent: 0
		});
	}
	const map = new Map(days.map((d) => [d.key, d]));
	for (const tx of txs) {
		if (tx.amount >= 0) continue;
		const key = tx.date.slice(0, 10);
		const bucket = map.get(key);
		if (bucket) bucket.spent += Math.abs(tx.amount);
	}
	return days;
}
function SpendChart({ txs }) {
	const data = lastDays(14, txs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-48 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data,
				margin: {
					top: 8,
					right: 0,
					left: -24,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "label",
						tick: {
							fill: "#9a958c",
							fontSize: 11
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fill: "#6e6a64",
							fontSize: 10
						},
						axisLine: false,
						tickLine: false,
						width: 48
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						cursor: { fill: "rgba(236,232,225,0.04)" },
						contentStyle: {
							background: "#1c2228",
							border: "1px solid #2a3036",
							borderRadius: 8,
							color: "#ece8e1",
							fontSize: 12
						},
						formatter: (value) => [formatMoney(Number(value ?? 0)), "Spent"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "spent",
						fill: "#c5cdc8",
						radius: [
							4,
							4,
							0,
							0
						],
						maxBarSize: 18
					})
				]
			})
		})
	});
}
function Overview() {
	const accounts = useBank((s) => s.accounts);
	const txs = useBank((s) => s.transactions);
	const session = useBank((s) => s.session);
	const net = totalBalance(accounts);
	const recent = [...txs].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-muted",
					children: ["Good evening, ", session?.holder.split(" ")[0]]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-medium tracking-tight",
					children: "Overview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: "Total across sleeves"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl tabular-nums tracking-tight",
					children: formatMoney(net)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/vault/move",
					className: "mt-4 inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Move money" })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: accounts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/vault/accounts",
					className: "rounded-lg bg-surface p-4 shadow-border transition-[box-shadow] duration-[var(--motion-quick)] hover:shadow-border-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							a.name,
							" · ",
							a.last4
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl tabular-nums",
						children: formatMoney(a.balance)
					})]
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-lg bg-surface p-4 shadow-border md:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Fourteen-day spend"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "Debits only"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpendChart, { txs })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "Recent activity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/vault/activity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						children: "View all"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-surface px-4 shadow-border",
				children: recent.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TxRow, { tx }, tx.id))
			})] })
		]
	});
}
//#endregion
export { Overview as component };
