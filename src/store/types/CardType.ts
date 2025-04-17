export type CardData = {
    id: number;  // ID картины
    title: string;  // Название картины
    artist_title: string;  // Название художника
    thumbnail: {  // Информация о миниатюре изображения
        lqip: string;  // Base64 изображение
        width: number;  // Ширина изображения
        height: number;  // Высота изображения
        alt_text: string;  // Альтернативный текст для изображения
    } | null;
    date_display: string;  // Год или дата отображения
    date_start: number;
    date_end: number;
    image_id: string;  // ID изображения
};

export type CardsData = {
    cards: CardData[];  // Массив карточек
    pagination: {
      total: number;
      limit: number;
      offset: number;
      total_pages: number;
      current_page: number;
      next_url: string;
    };
  };
export type Filters = {
    searchValue?: string;
    artist_id: number[];
    places: string[];
    types: string[];
};

export type CardsState = {
    filters: Filters;
    cards: CardData[];
    pagination: CardsData['pagination'];
    isLoading: boolean;
    error: any;
};
