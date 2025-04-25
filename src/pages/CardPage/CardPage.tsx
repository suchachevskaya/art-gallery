import "../CardPage/cardPage.scss";
import { ReactComponent as FavIcon } from "@/assets/FavIcon.svg?react";
import styles from "@/components/FavIcon/FavIcon.module.scss";
import notFound from "@/assets/notFound.png";
import { hgroupItem } from "./constants";


export function CardPage() {

  return (
    <div className="card-page">
      <figure className="card-page__figure">
        <div className="card-page__wrapper">
          <img src={notFound} alt="notFound" />
        </div>
       <FavIcon className={`card-page__fav-icon ${styles.favIcon}`} />  {/* При реализации функционала избранного будет создан отдельный компонент для кнопки */}
      </figure>

      <figcaption className="card-page__caption">
        <hgroup className="card-page__header">
          <h2 className="card-page__title">Punch Pot</h2>
          <p className="card-page__subtitle">England, Stalfordshire</p>
        </hgroup>
        <hgroup className="card-page__overview">
          <h1 className="card-page__overview-title">Overview</h1>
          {hgroupItem.map((item) => (
            <div key={item.id} className="card-page__detail">
              <p className="card-page__detail-title">{item.title}</p>
              <p className="card-page__detail-text"> {item.text}</p>
            </div>
          ))}
          <p className="card-page__status">Public</p>
        </hgroup>
      </figcaption>
    </div>
  );
}
