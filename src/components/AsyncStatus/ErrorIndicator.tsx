import errorLoading from "@/assets/error.gif";
import "../AsyncStatus/AsyncStatus.scss"
export function ErrorIndicator() {
  return (
     <figure className="indicator">
       <img className="indicator__img" src={errorLoading} alt="not found" />
       <figcaption className="indicator__error">Loading error</figcaption>
     </figure>
  );
}