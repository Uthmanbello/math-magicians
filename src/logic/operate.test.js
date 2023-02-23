import operate from './operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate('2', '3', '+')).toEqual('5');
  });

  test('subtracts two numbers', () => {
    expect(operate('5', '2', '-')).toEqual('3');
  });

  test('multiplies two numbers', () => {
    expect(operate('2', '3', 'x')).toEqual('6');
  });

  test('divides two numbers', () => {
    expect(operate('6', '3', '÷')).toEqual('2');
  });

  test('handles division by zero', () => {
    expect(operate('6', '0', '÷')).toEqual("Can't divide by 0.");
  });

  test('calculates modulo of two numbers', () => {
    expect(operate('7', '4', '%')).toEqual('3');
  });

  test('handles modulo with divisor of zero', () => {
    expect(operate('7', '0', '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  test('throws an error for unknown operation', () => {
    expect(() => operate('2', '3', 'invalid')).toThrow("Unknown operation 'invalid'");
  });
});
