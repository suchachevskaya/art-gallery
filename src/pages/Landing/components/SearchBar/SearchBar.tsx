import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '@/store/cardsSlice';
import "./Searchbar.scss"

export function SearchBar() {

    const dispatch = useDispatch();
    const [searchValue, localSetSearchValue] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setSearchValue(searchValue));
        }, 300);
        return () => clearTimeout(timeout);
    }, [searchValue, dispatch]);

    return (
        <div className="search-wrapper">
            <div className="search-filt">
                <input
                    type="text"
                    placeholder="Search, art, artist, work..."
                    value={searchValue}
                    onChange={(e) => localSetSearchValue(e.target.value)}
                />
            </div>
        </div>
    )
}