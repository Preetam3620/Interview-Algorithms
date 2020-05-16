const countlen = require('./index');

test('countlen handles empty string ', () => {
    expect(countlen("")).toEqual(0);
});

test('countlen counts length of the string', () => {
    expect(countlen("hello")).toEqual(5);
    expect(countlen("hellohello")).toEqual(10);
    expect(countlen("countlen")).toEqual(8);
});
