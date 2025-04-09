import Card from "../../components/Card";

export default function CardsHolder() {
    const cardsData = [1, 2, 3, 4, 5]; // Массив, можно заменить на данные из API, стейта и т.п.

    return (
        <div className="cards-holder-wrapper">
            <div className="card-holder">
                {cardsData.map((data, index) => (
                    <Card key={index} /> // Лучше, если будет уникальный ключ
                ))}
            </div>
            <button className="show-all-button">Показать все</button>
        </div>

    );
}


