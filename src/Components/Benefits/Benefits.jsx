import React from "react";
import "./Benefits.scss";
import centerImg from "../../Assets/Images/benefits-img.png";
const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container berenfits__comtainer">
        <h2 className="benefits__title">Преимущества мобильного шиномонтажа</h2>
        <div className="benefits__wrap">
          <ul className="benefits__list">
            <li className="benefits__item">Онлайн запись</li>
            <li className="benefits__item">Бесконтактное обслуживание</li>
            <li className="benefits__item">
              Сертифицированное оборудование и мастера
            </li>
            <li className="benefits__item">
              Гарантия на все виды работ 365 дней
            </li>
          </ul>

          <img className="benefits__img" src={centerImg} alt="Image of tire" />

          <ul className="benefits__list">
            <li className="benefits__item">Все типы оплат</li>
            <li className="benefits__item">Без очередей</li>
            <li className="benefits__item">В удобном месте</li>
            <li className="benefits__item">В удобном месте</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
