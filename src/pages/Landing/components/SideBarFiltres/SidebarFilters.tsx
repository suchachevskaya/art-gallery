import "./SideBarFilters.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setAuthors } from '@/store/cardsSlice';
import { ArtistsData } from './constants'
import { getAuthorIdFilter } from "@/store/selectors";
import { FilterBlock } from "./components/FilterBlock"
import { toggleItemInList } from "@/utils/toggleItemInList";

export function SidebarFilters() {
  const dispatch = useDispatch();
  const authors = useSelector(getAuthorIdFilter);

  const handleAuthorToggle = (artist_id: number) => {
    const updated = toggleItemInList(authors, artist_id)

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

