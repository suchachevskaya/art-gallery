import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type CardData = {
    id: number;  // ID картины
    title: string;  // Название картины
    artist_title: string;  // Название художника
    date_display: string;  // Год или дата отображения
    date_start: number;
    date_end: number;
    image_id: string | null;  // ID изображения
    place_of_origin:string;//Место происхождения
    credit_line:string;//Указание коллекции или дарителя
    dimensions:string;//Размеры
    thumbnail: {  // Информация о миниатюре изображения
        lqip: string;  // Base64 изображение
        width: number;  // Ширина изображения
        height: number;  // Высота изображения
        alt_text: string;  // Альтернативный текст для изображения
    } | null;
};

export type Pagination = {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
};

export type CardsData = {
    cards: CardData[];  // Массив карточек
    pagination: Pagination;  // Пагинация
};

// Тип для всего ответа от API
export type ApiResponse = {
    preference: string;
    data: CardData[];  // Массив карточек
    pagination: Pagination;  // Пагинация
    info: string;
    config: string;
};
export type SingleCardResponse={
    preference: string;
    data:CardData;//Одна карточка
    info:string;
    config:string;
}

export type Filters = {
    artist_id: number[];
    places: string[];
    types: string[];
    searchValue?: string;
};

export type CardsState = {
    filters: Filters;
    cards: PreviewCard[];
    pagination: Pagination;
    isLoading: boolean;
    isFetching: boolean;
    error: FetchBaseQueryError | SerializedError | null;
};

export type GetCardsQueryArgs = {
    page?: number
} & Filters;

export type PreviewCard = {
  id: number;
  title: string;
  artist_title: string;
  image_id: string | null;
  thumbnail?: {
    alt_text: string;
    lqip: string;
  };
};