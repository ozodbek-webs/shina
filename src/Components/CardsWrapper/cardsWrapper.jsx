import "./cardsWrapper.scss";
import Card from "../card/card";
import uklonIcon from "../../Assets/Images/partners/uklon-logo.png";
import ozonIcon from "../../Assets/Images/partners/ozon-logo.png";
import esomiaIcon from "../../Assets/Images/partners/esomia-logo.png";
import artelIcon from "../../Assets/Images/partners/artel-logo.png";
import samsungIcon from "../../Assets/Images/partners/samsung-logo.png";
import zalandoIcon from "../../Assets/Images/partners/zalando-logo.png";
import arrowIcon from "../../Lib/Icons/arrow-icon.svg";

const CardsWrapper = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards__container">
          <h3 className="cards__heading">Наши партнеры</h3>
          <div className="cards__wrapper">
            <Card src={uklonIcon} />
            <Card src={ozonIcon} />
            <Card src={esomiaIcon} />
            <Card src={artelIcon} />
            <Card src={samsungIcon} />
            <Card src={esomiaIcon} />
            <Card src={artelIcon} />
            <Card src={samsungIcon} />
            <Card src={ozonIcon} />
            <Card src={zalandoIcon} />
          </div>

          <div className="cards__arrow">
            <span className="cards__arrow__left">
              <img src={arrowIcon} alt="Arrow" width={14} height={14} />
            </span>
            <span className="cards__arrow__right">
              <img src={arrowIcon} alt="Arrow" width={14} height={14} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsWrapper;
