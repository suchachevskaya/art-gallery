import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse, CardData, CardsData, Filters } from './types/CardType';
import { hasFilters } from '@/utils/checkFiltersExistence';
import { ROUTES } from '@/constants/routes';
import { FIELDS } from '@/constants/params';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: ROUTES.BASEURL }),
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
            FIELDS
          ],
          size: 12
        };

        // Обязательные поля
        params.set(
          'fields',
          FIELDS
        );
        params.set('limit', '12');

        if (hasFilters(filters)) {
          return {
            url: ROUTES.ARTSEARCH,
            method: 'POST',
            body,
          };
        }

        return `${ROUTES.ALLARTWORKS}?${params.toString()}`;
      },
      transformResponse: (response: ApiResponse) => ({
        cards: response.data,
        pagination: response.pagination,
      }),
    }),
    getCardsByIds: builder.query<CardData[], number[]>({
      query: (ids) => {
        const body = {
          query: {
            bool: {
              should: ids.map(id => ({
                term: { id }
              })),
              minimum_should_match: 1,
            },
          },
          fields: [FIELDS],
          size:ids.length
        };

        return {
          url: ROUTES.ARTSEARCH,
          method: 'POST',
          body,
        };
      },
      transformResponse: (response: ApiResponse) => response.data,
    }),
  }),
});

export const { useGetCardsQuery,useGetCardsByIdsQuery  } = cardsApi;
