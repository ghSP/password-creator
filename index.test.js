const Password = require('.');
// eslint-disable
describe('Password', () => {
  test('Length is correct', () => {
    expect(Password(10).length).toBe(10);
  });
  test('Too large of number returns null', () => {
    expect(Password(Number.MAX_VALUE)).toBeNull();
  });
  test('Invalid type returns null', () => {
    expect(Password({})).toBeNull();
  });
  test('Invalid number returns null', () => {
    expect(Password(-23)).toBeNull();
  });
});
