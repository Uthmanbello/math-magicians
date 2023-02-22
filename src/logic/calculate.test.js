import calculate from './calculate';

describe('calculate', () => {
  it('should clear the calculator if buttonName is "AC"', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should update the next value if buttonName is a number', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({ total: '10', next: '52', operation: '+' });
  });

  it('should handle decimal point button correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });
  });

  it('should handle "=" button correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('should handle "+/-" button correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });
  });

  it('should handle operations correctly', () => {
    let result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toEqual({ total: '15', next: null, operation: '-' });

    result = calculate({ total: '10', next: '5', operation: '+' }, '*');
    expect(result).toEqual({ total: '15', next: null, operation: '*' });

    result = calculate({ total: '10', next: '5', operation: '+' }, '/');
    expect(result).toEqual({ total: '15', next: null, operation: '/' });

    result = calculate({ total: null, next: '5', operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });

    result = calculate({ total: '10', next: '5', operation: '+' }, '+');
    expect(result).toEqual({ total: '15', next: null, operation: '+' });
  });

  it('should handle cases when obj.next is undefined', () => {
    let result = calculate({ total: '10', operation: '+' }, '5');
    expect(result).toEqual({ total: '10', next: '5', operation: '+' });

    result = calculate({ total: '10', next: null, operation: '+' }, '5');
    expect(result).toEqual({ total: '10', next: '5', operation: '+' });
  });

  it('should handle unknown buttonName', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'unknown');
    expect(result).toEqual({ total: '15', next: null, operation: 'unknown' });
  });
});
