import style from './Card.module.scss';
import {FavIcon} from './FavIcon';


type ArtCardProps = {
    title: string;
    author: string;
    imageUrl: string;
};

export function Card({ title, author, imageUrl }: ArtCardProps) {
    return (
        <div className={style.card}>
        <img src={imageUrl} alt={title} className={style.Art} />
        <div className={style.content}>
          <div className={style.header}>
            <div>
              <h2 className={style.title}>{title}</h2>
              <p className={style.author}>{author}</p>
            </div>
            <button className={style.favButton} aria-label="Добавить в избранное"><FavIcon ></FavIcon></button>
          </div>
        </div>
      </div>
    )
}

