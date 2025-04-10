import {Description} from "./components/Description";
import './Landing.scss';
import {SearchBar} from "./components/SearchBar";
import {CardsHolder} from "./components/CardsHolder";

export function Landing() {
    return (
        <div className="landing">
            <Description></Description>
            <SearchBar></SearchBar>
            <CardsHolder></CardsHolder>
        </div>
    )

}