import "./SideBarFilters.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setAuthors } from '@/store/cardsSlice';
import { RootState } from "@/store/store";
import { ArtistsData } from './constants'



type FilterItem = {
  name: string;
  count: number;
  artist_id: number;
};

export function SidebarFilters() {
  const dispatch = useDispatch();
  const authors = useSelector((state: RootState) => state.cards.filters.artist_id);

  const handleAuthorToggle = (artist_id: number) => {
    const updated = authors.includes(artist_id)
      ? authors.filter((a) => a !== artist_id)
      : [...authors, artist_id];
    
    dispatch(setAuthors(updated));
  };

  return (
    <aside className="sidebar-filters">
      <FilterBlock
        title="Artists"
        placeholder="Find Artists"
        items={ArtistsData}
        selectedItems={authors}
        onToggle={handleAuthorToggle}
      />
      {/* аналогично для Places, Artwork Type и т.д. */}
    </aside>
  );
}

function FilterBlock({
  title,
  placeholder,
  items,
  selectedItems,
  onToggle,
}: {
  title: string;
  placeholder: string;
  items: FilterItem[];
  selectedItems: number[];
  onToggle: (artist_id: number) => void;
}) {
  return (
    <div className="filter-block">
      <h3>{title}</h3>
      <input className="filter-search" placeholder={placeholder} />
      <ul className="filter-list">
        {items.map((item) => (
          <li key={item.name}>
            <label>
              <input
                type="checkbox"
                onChange={() => onToggle(item.artist_id)}
                checked={selectedItems.includes(item.artist_id)}
              />
              <span>{item.name}</span>
              <span className="count">({item.count})</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
