import './Landing.scss';
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CardsHolder } from "./components/CardsHolder/CardsHolder";
import { SidebarFilters } from "./components/SideBarFiltres/SidebarFilters";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { setCards, setPagination, setLoading, setError } from '@/store/cardsSlice';
import { useGetCardsQuery } from '@/store/cardsApi'
import { getFilters } from '@/store/selectors';

export function Landing() {
    const dispatch = useDispatch();
    const filters = useSelector(getFilters);
    // Получаем данные с использованием RTK Query
    const { data: apiResponse, isLoading, error } = useGetCardsQuery(filters);
    const cardsData = useMemo(() => apiResponse?.cards ?? [], [apiResponse]);

    const pagination = apiResponse?.pagination;

    useEffect(() => {
        if (cardsData.length > 0) {
            dispatch(setCards(cardsData));
        }

        if (pagination) {
            dispatch(setPagination(pagination));
        }

        dispatch(setLoading(isLoading));
        
        if (error) {
            dispatch(setError(error));
        }
    }, [cardsData, pagination, isLoading, error, dispatch]);

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