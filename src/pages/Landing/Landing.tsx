import './Landing.scss';
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CardsHolder } from "./components/CardsHolder/CardsHolder";
import { SidebarFilters } from "./components/SideBarFiltres/SidebarFilters";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCards, setPagination, setLoading, setError } from '@/store/cardsSlice';
import { RootState } from '@/store/store';
import { useGetCardsQuery } from '@/store/cardsApi'

export function Landing() {
    const dispatch = useDispatch();
    const filters = useSelector((state: RootState) => state.cards.filters);
    // Получаем данные с использованием RTK Query
    const { data, isLoading, error } = useGetCardsQuery(filters);
    const cardsData = data?.cards ?? [];
    const pagination = data?.pagination;

    useEffect(() => {
        if (cardsData.length > 0) {
            console.log(cardsData);
            dispatch(setCards(cardsData));  // Диспатчим карточки
        }
        if (pagination) {
            console.log(pagination);
            dispatch(setPagination(pagination));  // Диспатчим пагинацию
        }
        dispatch(setLoading(isLoading));
        if (error) {
            dispatch(setError(error));
        }
    }, [cardsData, isLoading, error, dispatch]);

    return (
        <div className="landing">
            <p className="description">Discover new awesome <span>Arts</span>!</p>
            <SearchBar />
            <div className='layout-row'>
                <SidebarFilters />
                <CardsHolder />
            </div>

        </div>
    )

}