import './Landing.scss';
import { SearchBar } from "./components/SearchBar";
import { CardsHolder } from "./components/CardsHolder";

export function Landing() {
    return (
        <div className="landing">
            <p className="description">Discover new awesome <span>Arts</span>!</p>
            <SearchBar></SearchBar>
            <CardsHolder></CardsHolder>
        </div>
    )

}