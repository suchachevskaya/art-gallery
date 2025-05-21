import './Landing.scss';
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CardsHolder } from "./components/CardsHolder/CardsHolder";
import { SidebarFilters } from "./components/SideBarFiltres/SidebarFilters";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';
import { setCards, setPagination, setError, setFetching, clearError } from '@/store/cardsSlice';
import { useGetCardsQuery } from '@/store/cardsApi'
import { getFilters } from '@/store/selectors';
import { Pagination } from '@/components/Pagination/Pagination';
import { useSafeTotalPages } from '@/hooks/useSafeTotalPages';
import { hasFilters } from '@/utils/checkFiltersExistence';
import { useSearchParams } from 'react-router-dom';

export function Landing() {
    const dispatch = useDispatch();
    const filters = useSelector(getFilters);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page") || 1);

    // сбрасываем страницу при смене фильтров
    useEffect(() => {
        // сохраняем старые параметры, но сбрасываем page
        const newParams = new URLSearchParams(searchParams);

        newParams.set("page", "1");
        setSearchParams(newParams);
    }, [filters]);

    // Получаем данные с использованием RTK Query
    const { data: apiResponse, isLoading, isFetching, error } = useGetCardsQuery({
        page: currentPage, // Передаем параметр page отдельно
        ...filters
    });
    const cardsData = useMemo(() => apiResponse?.cards ?? [], [apiResponse]);
    const cardsRef = useRef(cardsData);
    const pagination = apiResponse?.pagination;
    const safeTotalPages = useSafeTotalPages(filters, pagination?.total_pages);

    // Функция для обработки изменения страницы
    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    useEffect(() => {
        if (cardsRef.current !== cardsData) {
            dispatch(setCards(cardsData));
            cardsRef.current = cardsData
            dispatch(clearError())
        }

        if (pagination) {
            dispatch(setPagination(pagination));
        }

        dispatch(setFetching(isFetching));

        if (error) {
            dispatch(setError(error));
        }
    }, [cardsData, pagination, isFetching, isLoading, error, dispatch]);

    return (
        <div className="landing">
            <p className="description">Discover new awesome <span>Arts</span>!</p>
            <SearchBar
                placeholderText={hasFilters(filters) ? 'Search by art title(only exact match)' : 'Search art, artist...'} />
            <div className='layout-row'>
                <SidebarFilters />
                <CardsHolder />
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={safeTotalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )

}