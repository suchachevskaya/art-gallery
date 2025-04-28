import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '@/store/cardsSlice';
import "./Searchbar.scss"

type SearchBarProps = {
    placeholderText: string
}

export function SearchBar({placeholderText}: SearchBarProps) {

    const dispatch = useDispatch();
    const [searchValue, setLocalSearchValue] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setSearchValue(searchValue));
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchValue, dispatch]);


    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearchValue(e.target.value)
    }

    return (
        <div className="search-wrapper">
            <div className="search-filt">
                <input
                    type="text"
                    placeholder={placeholderText}
                    value={searchValue}
                    onChange={handleSearchInput}
                />
            </div>
        </div>
    )
}