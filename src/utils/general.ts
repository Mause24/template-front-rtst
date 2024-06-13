export const sleep = (ms: number) => {
	const waitUntil = new Date().getTime() + ms
	while (new Date().getTime() < waitUntil) continue
}
