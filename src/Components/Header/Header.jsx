import React from 'react';
import './Header.scss'
import logo from '../../../logo.svg';
import racing from '../../Lib/Icons/btn-icon.svg';
import menu from '../../Assets/Images/menu-hamburger.png';
import sedan from '../../Lib/Icons/repair-icon-1.svg';
import jeep from '../../Lib/Icons/repair-icon-2.svg';
import truck from '../../Lib/Icons/repair-icon-3.svg';
import close from '../../Lib/Icons/close-icon.svg';
import carPark from '../../Assets/Images/stock-img.jpg';

const Header = () => {

  function add() {
    let menu = (document.querySelector(".menuk"));
    menu.classList.remove("hide")
  }
  function remove() {
    let menu = (document.querySelector(".menuk"));
    menu.classList.add("hide")
  }
  function added() {
    let menu = (document.querySelector(".tellcall"));
    menu.classList.remove("hiden")
  }
  function removed() {
    let menu = (document.querySelector(".tellcall"));
    menu.classList.add("hiden")
  }
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <img src={logo} alt="" className="logo" />
          <ul className="list desktop">
            <li className="item"><a href="#" className='link'>Услуги</a></li>
            <li className="item"><a href="#" className='link'>Преимущества</a></li>
            <li className="item"><a href="#" className='link'>Работы</a></li>
            <li className="item"><a href="#" className='link'>Цены</a></li>
          </ul>
          <ul className="right_list desktop">
            <li className="right_item"><a href="#" className="right_link number_phone">8 (800) 555-13-26</a></li>
            <li className="right_item"><a href="#" className="right_link"><button className='nav_btn'>Заказать звонок
            </button></a></li>
          </ul>
          <button className='btnnnnn' onClick={() => {
            add()
          }}><img src={menu} alt="menu" className='menu' /></button>
        </nav>
        <h1 className="mobilny">
          Мобильный <br />
          ШИНОМОНТАЖ №1
        </h1>
        <p className='text'>В интернет-магазине шин Шины Мигом вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто</p>
        <button className='racing_btn' onClick={() => added()}>
          Вызвать шиномонтаж
          <img src={racing} alt="" />
        </button>
      </div>
      <div className="container">
        <div className="wrapper">


          <div className="mob">
            <div className="div">
              <div className="stoi">
                Стоимость
              </div>
              <div>
                <div className="container">
                  <h5 className='koles'>
                    МОБИЛЬНЫЙ РЕМОНТ И ЗАМЕНА КОЛЕС
                    <div className="kalta"></div>
                  </h5>
                </div>
                <div className="container">
                  <p className='uslugi'>Услуги выездного шиномонтажа в СПб и ЛО для транспортных средств</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cars">
            <div className="narx_cars">от 199₽ </div>
            <h5 className='legkovie'>
              Легковые автомобили
            </h5>
            <img src={sedan} alt="" className="sedan" />
          </div>
          <div className="carsd">
            <div className="narx_carsd">от 299₽ </div>
            <h5 className='legkovie width'>
              Кроссоверы, джипы, минивены
            </h5>
            <img src={jeep} alt="" className="jeep" />
          </div>
          <div className="carsn">
            <div className="narx_carsd nnnvv">от 299₽ </div>
            <h5 className='legkovie width'>
              Коммерческий транспорт
            </h5>
            <img src={truck} alt="" className="jeep" />
          </div>
        </div>

      </div>
      <div className="menuk hide">
        <img src={logo} alt="" className="logo_menu" />
        <button onClick={() => remove()}>
          <img src={close} alt="close" className='close' /></button>
        <ul className="list_menu">
          <li className="item_menu"><a href="#" className='link_menu'>Услуги</a></li>
          <li className="item_menu"><a href="#" className='link_menu'>Преимущества</a></li>
          <li className="item_menu"><a href="#" className='link_menu'>Работы</a></li>
          <li className="item_menu"><a href="#" className='link_menu'>Цены</a></li>
        </ul>
        <ul className="right_list_menu">
          <li className="right_item_menu"><a href="#" className="right_link_menu">8 (800) 555-13-26</a></li>
          <li className="right_item_menu"><a href="#" className="right_link_menu"><button className='nav_btn_menu'>Заказать звонок
          </button></a></li>
        </ul>
      </div>
      <h1 className='dlya'>
        Для юридических лиц
      </h1>
      <h3 className='aksiya'><mark>Акция!</mark>   Первое авто бесплатно!</h3>
      <div className="aside">
        <div className="Tepaga">
          <div className="divtek">

            <img src={carPark} alt="" className='carPark' />
            <div className="divcha">
              <div className="salom">
                <div className="div">
                  <div className="Tepaga1"></div>
                  <div className="Tepaga2"></div>
                  <div className="Tepaga3"></div>
                  <div className="Tepaga4"></div>
                </div>

                <h4 className='rabota'>
                  Работа с НДС <br />
                  Комплексное обслуживание автопарков<br />
                  Заключение договора<br />
                  Оплата после выполнения работ<br />
                </h4>
              </div>

              <h6 className='vash'>
                Ваш телефон
              </h6>
              <input type="number" className='inputNumbur' placeholder='+7 ( _ _ _ )   _ _ _    _ _    _ _' />
              <button className="callNumber">
                Оформить заявку
              </button>
            </div>
          </div>





          <div className='tellcall hiden'>
            <button className='btncall' onClick={() => {
              removed()
            }}>
              <img src={close} alt="" />
            </button>
            <h1 className='tellcalltitle'>
              МОБИЛЬНЫЙ ШИНОМОНТАЖ 24 ЧАСА В СУТКИ
            </h1>
            <p className='tellcalltitlebash'>
              Ваш телефон
            </p>
            <input type="text" placeholder='+7 ( _ _ _ )   _ _ _    _ _    _ _' className='tellcalltitleinput' />

          </div>
        </div>

      </div>
    </header>

  );
};

export default Header;