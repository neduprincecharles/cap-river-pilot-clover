//#region node_modules/.nitro/vite/services/ssr/assets/format-gGJsW2ar.js
var money = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD"
});
function formatMoney(n) {
	return money.format(n);
}
function formatSigned(n) {
	const abs = money.format(Math.abs(n));
	if (n > 0) return `+${abs}`;
	if (n < 0) return `−${abs}`;
	return abs;
}
function formatDate(iso) {
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric"
	}).format(new Date(iso));
}
//#endregion
export { formatMoney as n, formatSigned as r, formatDate as t };
