import { test, expect, vi } from "vitest"

test("should log the messages in the correct language tag", async () => {
	const consoleMock = vi.spyOn(console, "log").mockImplementation(() => {})
	await import("./src/main.js")
	expect(consoleMock).toHaveBeenCalledTimes(4)

	expect(consoleMock.mock.calls[0][0]).toBe('The current language tag is "en".')
	expect(consoleMock.mock.calls[1][0]).toBe("Welcome Samuel! You have 5 messages.")

	expect(consoleMock.mock.calls[2][0]).toBe('Der aktuelle Sprachtag ist "de".')
	expect(consoleMock.mock.calls[3][0]).toBe("Hallo Samuel! Du hast 5 Nachrichten.")
})
