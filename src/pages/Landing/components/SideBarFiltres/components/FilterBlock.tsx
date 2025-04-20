import type { FilterItem } from "../types";

export function FilterBlock({
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
  