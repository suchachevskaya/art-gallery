import { describe, it, expect } from 'vitest';
import { toggleItemInList } from '../utils/toggleItemInList';

describe('toggleItemInList', () => {
  it('should add item if not present', () => {
    const list = [1, 2, 3];
    const result = toggleItemInList(list, 4);

    expect(result).toEqual([4, 1, 2, 3]);
  });

  it('should remove item if present', () => {
    const list = [1, 2, 3];
    const result = toggleItemInList(list, 2);

    expect(result).toEqual([1, 3]);
  });

  it('should return a new array (not mutate original)', () => {
    const list = [1, 2, 3];
    const result = toggleItemInList(list, 4);

    expect(result).not.toBe(list); // другая ссылка
  });

  it('should work with strings', () => {
    const list = ['a', 'b'];
    const result = toggleItemInList(list, 'c');

    expect(result).toEqual(['c', 'a', 'b']);
  });

  it('should remove string if present', () => {
    const list = ['a', 'b', 'c'];
    const result = toggleItemInList(list, 'b');

    expect(result).toEqual(['a', 'c']);
  });

  it('should handle empty list', () => {
    const result = toggleItemInList([], 'x');

    expect(result).toEqual(['x']);
  });

  it('should remove exact object reference, not deep equal', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 1 }; // same content, different reference
    const list = [obj1];

    const result = toggleItemInList(list, obj2);

    expect(result).toEqual([obj2, obj1]); // не удаляется, т.к. !== по ссылке
  });

  it('should remove same object by reference', () => {
    const obj = { id: 1 };
    const list = [obj];
    const result = toggleItemInList(list, obj);
    
    expect(result).toEqual([]);
  });
});
