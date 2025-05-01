import { hasFilters } from '@/utils/checkFiltersExistence';
import { describe, expect, it } from 'vitest';

describe('hasFilters', () => {
  it('return false, if all fields are empty', () => {
   const filters={
    artist_id:[],
    places:[],
    types:[],
   }
   
    expect(hasFilters(filters)).toBe(false);
  });
  it('return true, if ту field is not empty', () => {
    const filters={
     artist_id:[1],
     places:[],
     types:[],
    }
    
     expect(hasFilters(filters)).toBe(true);
   });
});
