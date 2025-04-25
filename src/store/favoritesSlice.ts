// src/store/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteCard {
    image_id: string | null;
    title: string;
    author: string;
}

interface FavoritesState {
    items: FavoriteCard[];
}

const initialState: FavoritesState = {
    items: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites(state, action: PayloadAction<FavoriteCard>) {
            state.items.push(action.payload);
        },
        removeFromFavorites(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.image_id !== action.payload);
        },
        setFavorites(state, action: PayloadAction<FavoriteCard[]>) {
            state.items = action.payload;
        },
    },
});

export const { addToFavorites, removeFromFavorites, setFavorites } = favoritesSlice.actions;

