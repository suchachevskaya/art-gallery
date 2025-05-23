import "../CardPage/cardPage.scss";
import notFound from "@/assets/notFound.png";
import { useGetCardByIdQuery } from "@/store/cardsApi";
import { useParams } from "react-router";
import { createImgSource } from "@/utils/createImgSource";
import { LoadingIndicator } from "@/components/AsyncStatus/LoadingIndicator"; 
import { ErrorIndicator } from "@/components/AsyncStatus/ErrorIndicator";
import { DEFAULT_LQIP_PLACEHOLDER } from "@/constants/placeholders"; 


export function CardPage() {
  const { cardId } = useParams();
  const {
    data: fetchedCard,
    error,
    isLoading,
  } = useGetCardByIdQuery(Number(cardId));


  if (isLoading) return <LoadingIndicator/>

  if (error || !fetchedCard) return <ErrorIndicator/>

  return (
    <div className="card-page">
      <figure className="card-page__figure">
        <div className="card-page__wrapper">
        <img className="card-page__img"
          src={createImgSource(fetchedCard.image_id, 800)}
          alt={DEFAULT_LQIP_PLACEHOLDER  || notFound}
        />
        </div>
   
      </figure>
      <figcaption className="card-page__caption">
        <hgroup className="card-page__header">
          <h2 className="card-page__title">{fetchedCard.title}</h2>
          <p className="card-page__subtitle">{fetchedCard.place_of_origin}</p>
        </hgroup>
        <hgroup className="card-page__overview">
          <h1 className="card-page__overview-title">Overview</h1>
          <div className="card-page__detail">
            <h3 className="card-page__section-title">Basic Information</h3>
            <p className="card-page__detail-title">
              Artist: <span>{fetchedCard.artist_title}</span>
            </p>
            <p className="card-page__detail-title">
              Year of Creation: <span>{fetchedCard.date_display}</span>
            </p>
            <p className="card-page__detail-title">
              Credit: <span>{fetchedCard.credit_line}</span>
            </p>
          </div>
          <div className="card-page__detail">
            <h3 className="card-page__section-title">Technical Details</h3>
            <p className="card-page__detail-title">
              Dimensions: <span>{fetchedCard.dimensions}</span>
            </p>
            <p className="card-page__detail-title">
              Description:
              <span>
                {fetchedCard.thumbnail?.alt_text || "No description available"}
              </span>
            </p>
          </div>
          <p className="card-page__status">Public Domain</p>
        </hgroup>
      </figcaption>
    </div>
  );
}
