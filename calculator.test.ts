import { test, expect, describe } from 'vitest';
import { calculate } from './calculator.js';
import { debugAST } from './debug-helpers.js';

describe('Calculator', () => {
  test('simple addition', () => {
    expect(calculate('1 + 2')).toBe(3);
  });

  test('simple subtraction', () => {
    expect(calculate('5 - 3')).toBe(2);
  });

  test('chain operations', () => {
    expect(calculate('10 + 5 - 3')).toBe(12);
  });

  test('handles extra whitespace', () => {
    expect(calculate('  1   +   2  ')).toBe(3);
  });

  test('handles syntax error', () => {
    expect(() => calculate('1 + nonsense')).toThrow(
      "Expected number got 'nonsense'"
    );
  });

  test('handles unexpected end of input', () => {
    expect(() => calculate('1 +')).toThrow('Unexpected end of line');
  });

  test('simple multiplication', () => {
    expect(calculate('3 * 2')).toBe(6);
  });

  test('simple division', () => {
    expect(calculate('10 / 2')).toBe(5);
  });

  test('handles precedence', () => {
    expect(calculate('2 + 3 * 4')).toBe(14);
  });
});

describe('Debugging tools', () => {
  test('can debug basic AST', () => {
    expect(debugAST('1 + 2 - 3')).toEqual('(- (+ 1 2) 3)');
  });
});
