import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse, CardData, CardsData, SingleCardResponse, GetCardsQueryArgs } from './types/CardType';
import { hasFilters } from '@/utils/checkFiltersExistence';
import { ROUTES } from '@/constants/routes';
import { FIELDS } from '@/constants/params';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: ROUTES.BASEURL }),
  endpoints: (builder) => ({
    getCards: builder.query<CardsData, GetCardsQueryArgs>({
      query: ({ page = 1, ...filters }) => {
        const params = new URLSearchParams();
       
        if (filters.searchValue?.trim()) {
          params.set('q', filters.searchValue.trim());
        }

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
          size: 12,
          from: (page - 1) * 12
        };

        // Обязательные поля
        params.set(
          'fields',
          FIELDS
        );
        params.set('limit', '12');
        params.set('page', page.toString());


        if (hasFilters(filters)) {
          return {
            url: `${ROUTES.ALLARTWORKS}${ROUTES.ARTSEARCH}`,
            method: 'POST',
            body,
          };
        }

        return `${ROUTES.ALLARTWORKS}${filters.searchValue?.trim() ? `${ROUTES.ARTSEARCH}` : ''}?${params.toString()}`;
      },
      transformResponse: (response: ApiResponse) => ({

        cards: response.data,
        pagination: response.pagination,
      }),
    }),

    getCardById: builder.query<CardData, number>({
      query: (id) => ({
        url: `${ROUTES.ALLARTWORKS}/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: SingleCardResponse) => response.data,
    })

  }),
});

export const { useGetCardsQuery, useGetCardByIdQuery } = cardsApi;
