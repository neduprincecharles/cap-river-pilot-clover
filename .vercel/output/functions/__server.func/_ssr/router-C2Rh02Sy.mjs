import { i as __toESM } from "../_runtime.mjs";
import { H as require_jsx_runtime, S as useRouter, V as require_react, _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C2Rh02Sy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function daysAgo(n, hour = 12) {
	const d = /* @__PURE__ */ new Date();
	d.setHours(hour, n % 50, 0, 0);
	d.setDate(d.getDate() - n);
	return d.toISOString();
}
var DEMO_PIN = "1847";
var DEMO_HOLDER = "Alex Rivera";
var seedAccounts = [
	{
		id: "chk",
		name: "Everyday",
		type: "checking",
		last4: "4412",
		balance: 12480.22
	},
	{
		id: "sav",
		name: "Reserve",
		type: "savings",
		last4: "9021",
		balance: 84210
	},
	{
		id: "biz",
		name: "Business",
		type: "business",
		last4: "7740",
		balance: 31050.4
	}
];
var seedCards = [{
	id: "c1",
	name: "Everyday Debit",
	last4: "4412",
	network: "Visa",
	frozen: false,
	accountId: "chk",
	expiry: "08/28"
}, {
	id: "c2",
	name: "Travel",
	last4: "8891",
	network: "Mastercard",
	frozen: false,
	accountId: "chk",
	expiry: "03/29"
}];
var seedTransactions = [
	{
		id: "t1",
		accountId: "chk",
		merchant: "Northfield Market",
		category: "Groceries",
		amount: -86.4,
		date: daysAgo(0, 18),
		status: "pending"
	},
	{
		id: "t2",
		accountId: "chk",
		merchant: "Atlas Transit",
		category: "Transit",
		amount: -3.5,
		date: daysAgo(0, 9),
		status: "posted"
	},
	{
		id: "t3",
		accountId: "chk",
		merchant: "Payroll · Quantum Labs",
		category: "Income",
		amount: 4820,
		date: daysAgo(1, 8),
		status: "posted"
	},
	{
		id: "t4",
		accountId: "chk",
		merchant: "Lumen Cafe",
		category: "Dining",
		amount: -14.2,
		date: daysAgo(1, 13),
		status: "posted"
	},
	{
		id: "t5",
		accountId: "sav",
		merchant: "Interest credit",
		category: "Income",
		amount: 42.18,
		date: daysAgo(2, 0),
		status: "posted"
	},
	{
		id: "t6",
		accountId: "chk",
		merchant: "Harbor Utilities",
		category: "Home",
		amount: -128.9,
		date: daysAgo(3, 10),
		status: "posted"
	},
	{
		id: "t7",
		accountId: "chk",
		merchant: "Kinfolk Books",
		category: "Shopping",
		amount: -32,
		date: daysAgo(4, 16),
		status: "posted"
	},
	{
		id: "t8",
		accountId: "chk",
		merchant: "Transfer to Reserve",
		category: "Transfer",
		amount: -1500,
		date: daysAgo(5, 11),
		status: "posted"
	},
	{
		id: "t9",
		accountId: "sav",
		merchant: "Transfer from Everyday",
		category: "Transfer",
		amount: 1500,
		date: daysAgo(5, 11),
		status: "posted"
	},
	{
		id: "t10",
		accountId: "chk",
		merchant: "Oak + Ember",
		category: "Dining",
		amount: -64.8,
		date: daysAgo(6, 19),
		status: "posted"
	},
	{
		id: "t11",
		accountId: "inv",
		merchant: "Dividend · Horizon ETF",
		category: "Income",
		amount: 118.4,
		date: daysAgo(7, 6),
		status: "posted"
	},
	{
		id: "t12",
		accountId: "chk",
		merchant: "City Health",
		category: "Health",
		amount: -45,
		date: daysAgo(8, 14),
		status: "posted"
	},
	{
		id: "t13",
		accountId: "chk",
		merchant: "Aether Fuel",
		category: "Transit",
		amount: -52.3,
		date: daysAgo(9, 17),
		status: "posted"
	},
	{
		id: "t14",
		accountId: "chk",
		merchant: "Sable Atelier",
		category: "Shopping",
		amount: -210,
		date: daysAgo(11, 15),
		status: "posted"
	},
	{
		id: "t15",
		accountId: "chk",
		merchant: "Westline Rent",
		category: "Home",
		amount: -2400,
		date: daysAgo(12, 9),
		status: "posted"
	},
	{
		id: "t16",
		accountId: "chk",
		merchant: "Payroll · Quantum Labs",
		category: "Income",
		amount: 4820,
		date: daysAgo(15, 8),
		status: "posted"
	},
	{
		id: "t17",
		accountId: "chk",
		merchant: "Nova Air",
		category: "Travel",
		amount: -386.2,
		date: daysAgo(18, 7),
		status: "posted"
	},
	{
		id: "t18",
		accountId: "inv",
		merchant: "Contribution",
		category: "Transfer",
		amount: 750,
		date: daysAgo(20, 10),
		status: "posted"
	},
	{
		id: "t19",
		accountId: "chk",
		merchant: "Contribution to Horizon",
		category: "Transfer",
		amount: -750,
		date: daysAgo(20, 10),
		status: "posted"
	},
	{
		id: "t20",
		accountId: "chk",
		merchant: "Field Day Market",
		category: "Groceries",
		amount: -71.15,
		date: daysAgo(21, 12),
		status: "posted"
	},
	{
		id: "t21",
		accountId: "biz",
		merchant: "Vendor · Atlas Print",
		category: "Business",
		amount: -640,
		date: daysAgo(2, 11),
		status: "posted"
	},
	{
		id: "t22",
		accountId: "biz",
		merchant: "Client receipt · Northfield",
		category: "Income",
		amount: 2800,
		date: daysAgo(4, 9),
		status: "posted"
	},
	{
		id: "t23",
		accountId: "biz",
		merchant: "Payroll out",
		category: "Business",
		amount: -1200,
		date: daysAgo(10, 8),
		status: "posted"
	}
];
function cloneSeed() {
	return {
		accounts: seedAccounts.map((a) => ({ ...a })),
		transactions: seedTransactions.map((t) => ({ ...t })),
		cards: seedCards.map((c) => ({ ...c }))
	};
}
var useBank = create()(persist((set, get) => ({
	hydrated: false,
	session: null,
	...cloneSeed(),
	markHydrated: () => set({ hydrated: true }),
	signIn: (pin) => {
		if (pin.replace(/\D/g, "") !== "1847") return {
			ok: false,
			error: "That code is not recognized."
		};
		set({ session: {
			holder: DEMO_HOLDER,
			memberSince: "2019"
		} });
		return { ok: true };
	},
	signOut: () => set({ session: null }),
	resetDemo: () => set({ ...cloneSeed() }),
	transfer: (fromId, toId, amount, memo) => {
		if (fromId === toId) return {
			ok: false,
			error: "Choose two different accounts."
		};
		if (!Number.isFinite(amount) || amount <= 0) return {
			ok: false,
			error: "Enter an amount greater than zero."
		};
		const cents = Math.round(amount * 100) / 100;
		const accounts = get().accounts.map((a) => ({ ...a }));
		const from = accounts.find((a) => a.id === fromId);
		const to = accounts.find((a) => a.id === toId);
		if (!from || !to) return {
			ok: false,
			error: "Account not found."
		};
		if (from.balance < cents) return {
			ok: false,
			error: "Insufficient funds."
		};
		from.balance = Math.round((from.balance - cents) * 100) / 100;
		to.balance = Math.round((to.balance + cents) * 100) / 100;
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const note = memo.trim();
		set({
			accounts,
			transactions: [
				{
					id: `tx-${crypto.randomUUID()}`,
					accountId: fromId,
					merchant: note ? `${note} · to ${to.name}` : `Transfer to ${to.name}`,
					category: "Transfer",
					amount: -cents,
					date: now,
					status: "posted"
				},
				{
					id: `tx-${crypto.randomUUID()}`,
					accountId: toId,
					merchant: note ? `${note} · from ${from.name}` : `Transfer from ${from.name}`,
					category: "Transfer",
					amount: cents,
					date: now,
					status: "posted"
				},
				...get().transactions
			]
		});
		return { ok: true };
	},
	payBill: (fromId, merchant, amount) => {
		if (!Number.isFinite(amount) || amount <= 0) return {
			ok: false,
			error: "Enter an amount greater than zero."
		};
		const cents = Math.round(amount * 100) / 100;
		const accounts = get().accounts.map((a) => ({ ...a }));
		const from = accounts.find((a) => a.id === fromId);
		if (!from) return {
			ok: false,
			error: "Account not found."
		};
		if (from.balance < cents) return {
			ok: false,
			error: "Insufficient funds."
		};
		from.balance = Math.round((from.balance - cents) * 100) / 100;
		set({
			accounts,
			transactions: [{
				id: `tx-${crypto.randomUUID()}`,
				accountId: fromId,
				merchant,
				category: "Home",
				amount: -cents,
				date: (/* @__PURE__ */ new Date()).toISOString(),
				status: "posted"
			}, ...get().transactions]
		});
		return { ok: true };
	},
	toggleFreeze: (cardId) => set({ cards: get().cards.map((c) => c.id === cardId ? {
		...c,
		frozen: !c.frozen
	} : c) })
}), {
	name: "quantum-ledger-vault",
	skipHydration: true,
	partialize: (s) => ({
		session: s.session,
		accounts: s.accounts,
		transactions: s.transactions,
		cards: s.cards
	}),
	onRehydrateStorage: () => () => {
		useBank.getState().markHydrated();
	}
}));
function totalBalance(accounts) {
	return accounts.reduce((sum, a) => sum + a.balance, 0);
}
var styles_default = "/assets/styles-SaHUm6Dn.css";
var APP_NAME = "Quantum Ledger";
function HydrateBank() {
	(0, import_react.useEffect)(() => {
		useBank.persist.rehydrate();
	}, []);
	return null;
}
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0b0e10"
			},
			{
				name: "description",
				content: "Quantum Ledger — demonstration banking for personal, reserve, and business ledgers."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateBank, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "top-center"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$14 = () => import("./routes-C2vKN0MD.mjs");
var Route$14 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./about-C5HW4Xoj.mjs");
var Route$13 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./contact-BhH-rRYm.mjs");
var Route$12 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./products-CuP8w8NZ.mjs");
var Route$11 = createFileRoute("/products")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./rates-sBbnegEd.mjs");
var Route$10 = createFileRoute("/rates")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./security-HtgAROzg.mjs");
var Route$9 = createFileRoute("/security")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./support-dXPrnMYe.mjs");
var Route$8 = createFileRoute("/support")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./vault-BVHH_4rX.mjs");
var Route$7 = createFileRoute("/vault")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./vault-48zee1bd.mjs");
var Route$6 = createFileRoute("/vault/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./accounts-CW4_IJlU.mjs");
var Route$5 = createFileRoute("/vault/accounts")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./activity-WYWSeBal.mjs");
var Route$4 = createFileRoute("/vault/activity")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./bills-D5Cu8JFZ.mjs");
var Route$3 = createFileRoute("/vault/bills")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./cards-DI4nS327.mjs");
var Route$2 = createFileRoute("/vault/cards")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./help-FnFsaoFA.mjs");
var Route$1 = createFileRoute("/vault/help")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./move-ChbVEDHw.mjs");
var Route = createFileRoute("/vault/move")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$13.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$12.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var ProductsRoute = Route$11.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$15
});
var RatesRoute = Route$10.update({
	id: "/rates",
	path: "/rates",
	getParentRoute: () => Route$15
});
var SecurityRoute = Route$9.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$15
});
var SupportRoute = Route$8.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => Route$15
});
var VaultRoute = Route$7.update({
	id: "/vault",
	path: "/vault",
	getParentRoute: () => Route$15
});
var VaultIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => VaultRoute
});
var VaultRouteChildren = {
	VaultAccountsRoute: Route$5.update({
		id: "/accounts",
		path: "/accounts",
		getParentRoute: () => VaultRoute
	}),
	VaultActivityRoute: Route$4.update({
		id: "/activity",
		path: "/activity",
		getParentRoute: () => VaultRoute
	}),
	VaultBillsRoute: Route$3.update({
		id: "/bills",
		path: "/bills",
		getParentRoute: () => VaultRoute
	}),
	VaultCardsRoute: Route$2.update({
		id: "/cards",
		path: "/cards",
		getParentRoute: () => VaultRoute
	}),
	VaultHelpRoute: Route$1.update({
		id: "/help",
		path: "/help",
		getParentRoute: () => VaultRoute
	}),
	VaultMoveRoute: Route.update({
		id: "/move",
		path: "/move",
		getParentRoute: () => VaultRoute
	}),
	VaultIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ProductsRoute,
	RatesRoute,
	SecurityRoute,
	SupportRoute,
	VaultRoute: VaultRoute._addFileChildren(VaultRouteChildren)
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { DEMO_PIN as i, totalBalance as n, useBank as r, router_exports as t };
