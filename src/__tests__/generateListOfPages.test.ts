import { generateListOfPages } from '@/utils/generateListOfPages';
import { describe, expect, it } from 'vitest';

describe('generateListOfPages', () => {
  it('verifies that 5 returns an array from 1 to 5', () => {
   const pageNumbers=5;
   
    expect(generateListOfPages (pageNumbers)).toEqual([1, 2, 3, 4, 5]);
  });
  it('verifies that 0 return empty array', () => {
    const pageNumbers=0;
    
     expect(generateListOfPages (pageNumbers)).toEqual([]);
   });
});
