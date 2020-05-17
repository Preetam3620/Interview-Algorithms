const recursion = require("./index");

beforeEach(() => {
	jest.spyOn(console, "log");
});

afterEach(() => {
	console.log.mockRestore();
});

test("recursion is a function", () => {
	expect(typeof recursion).toEqual("function");
});

test("recursion called with n = 5", () => {
	recursion(5);
	expect(console.log.mock.calls[0][0]).toEqual(1);
	expect(console.log.mock.calls[1][0]).toEqual(2);
	expect(console.log.mock.calls[2][0]).toEqual(3);
	expect(console.log.mock.calls[3][0]).toEqual(4);
	expect(console.log.mock.calls[4][0]).toEqual(5);
	expect(console.log.mock.calls.length).toEqual(5);
});

test("recursion called with n = 10", () => {
	recursion(10);
	expect(console.log.mock.calls[0][0]).toEqual(1);
	expect(console.log.mock.calls[1][0]).toEqual(2);
	expect(console.log.mock.calls[2][0]).toEqual(3);
	expect(console.log.mock.calls[3][0]).toEqual(4);
	expect(console.log.mock.calls[4][0]).toEqual(5);
	expect(console.log.mock.calls[5][0]).toEqual(6);
	expect(console.log.mock.calls[6][0]).toEqual(7);
	expect(console.log.mock.calls[7][0]).toEqual(8);
	expect(console.log.mock.calls[8][0]).toEqual(9);
	expect(console.log.mock.calls[9][0]).toEqual(10);
	expect(console.log.mock.calls.length).toEqual(10);
});
