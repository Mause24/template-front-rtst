export const sleep = (ms: number): void => {
	const waitUntil = new Date().getTime() + ms
	while (new Date().getTime() < waitUntil) continue
}
