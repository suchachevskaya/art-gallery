import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse, CardsData, Filters } from './types/CardType';
import { hasFilters } from '@/utils/checkFiltersExistence';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/' }),
  endpoints: (builder) => ({
    getCards: builder.query<CardsData, Filters>({
      query: (filters) => {
        const params = new URLSearchParams();

        const body = {
          query: {
            bool: {
              should: filters.artist_id.map(id => ({
                term: { artist_id: id }
              })),
              minimum_should_match: 1,
              must: filters.searchValue?.trim() ? [{
                match: { title: filters.searchValue.trim() }
              }] : []
            }
          },
          fields: [
            "id", "title", "artist_title", "image_id", "thumbnail", "date_display", "date_start", "date_end"
          ],
          size: 12
        };



        // // Преобразуем другие фильтры, если они есть
        // filters.places.forEach(place => {
        //   params.append('query[term][place_of_origin]', place);
        // });

        // filters.types.forEach(type => {
        //   params.append('query[term][artwork_type_title]', type);
        // });

        // Обязательные поля
        params.set(
          'fields',
          'id,title,artist_title,image_id,thumbnail,date_display,date_start,date_end'
        );
        params.set('limit', '12');

        if (hasFilters(filters)) {
          return {
            url: 'artworks/search',
            method: 'POST',
            body,
          };
        }

        return `artworks?${params.toString()}`;
      },
      transformResponse: (response: ApiResponse) => ({
        cards: response.data,
        pagination: response.pagination,
      }),
    }),

  }),
});

export const { useGetCardsQuery } = cardsApi;
