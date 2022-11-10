import { Button } from "../Buttons/Buttons";
import React from "react";
import "./Contact.scss";
const Contact = () => {
  const HandleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <section className="contact">
      <div className="container contact__container">
        <h2 className="contact__title">МОБИЛЬНЫЙ ШИНОМОНТАЖ 24 ЧАСА В СУТКИ</h2>
        <form className="contact__form" onSubmit={HandleSubmit}>
          <label className="contact__label" htmlFor="phone-num">
            Ваш телефон
          </label>

          <input
            className="contact__input"
            type="tel"
            name="phone-num"
            id="phone-num"
            placeholder="+7 ( _ _ _ )   _ _ _    _ _    _ _"
          />
          <Button text={"Оформить заявку"} Btntype={"black contact__btn"} />
        </form>
      </div>
    </section>
  );
};
export default Contact;
