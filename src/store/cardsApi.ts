import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardsData, Filters } from './types/CardType';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/' }),
  endpoints: (builder) => ({
    getCards: builder.query<CardsData, Filters>({
      query: (filters) => {
        const params = new URLSearchParams();

        // Добавляем параметры поиска только если они есть
        if (filters.searchValue?.trim()) {
          params.set('q', filters.searchValue.trim());
        }

        // Преобразуем массивы фильтров в query[term][...] формат
        filters.artist_id.forEach(id => {
          params.append('query[term][artist_id]', `${id}`);
        });

        filters.places.forEach(place => {
          params.append('query[term][place_of_origin]', place);
        });

        filters.types.forEach(type => {
          params.append('query[term][artwork_type_title]', type);
        });

        // Обязательные поля
        params.set(
          'fields',
          'id,title,artist_title,image_id,thumbnail,date_display,date_start,date_end'
        );
        params.set(
          'limit',
          '12'
        );

        // Проверка наличия активных фильтров
        const hasFilters = [
          filters.searchValue,
          filters.artist_id,
          filters.places,
          filters.types,
        ].some(field => {
          if (Array.isArray(field)) return field.length > 0;
          if (typeof field === 'string') return field.trim() !== '';
          return false;
        });
        

        // Если есть фильтры — ищем через /search
        return `artworks${hasFilters ? '/search' : ''}?${params.toString()}`;
      },
      transformResponse: (response: any) => ({
        cards: response.data,
        pagination: response.pagination,
      }),
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
