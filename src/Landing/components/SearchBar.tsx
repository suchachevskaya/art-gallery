export function SearchBar() {
    return (
        <div className="search-wrapper">
            <div className="search-filt">
                <input type="text" placeholder="Search, art, artist, work..."  />
                <select name="category" id="filter">
                    <option value="default">Choose option</option>
                    <option value="year">Year</option>
                </select>
            </div>
        </div>
    )
}