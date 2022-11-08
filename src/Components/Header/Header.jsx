import React from 'react';
import './style.css'
import logo from '../../../public/Logo.png';
import racing from '../../../public/racing1.png';
import menu from '../../../public/menu.png';
import sedan from '../../../public/001-sedan.png';
import jeep from '../../../public/002-jeep 1.png';
import truck from '../../../public/003-truck.png';
import close from '../../../public/close.png';

const Header = () => {
    function add() {
        let menu = (document.querySelector(".menuk"));
        menu.classList.remove("hide")
    }
    function remove() {
        let menu = (document.querySelector(".menuk"));
        menu.classList.add("hide")
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
                        <li className="right_item"><a href="#" className="right_link"><button  className='nav_btn'>Заказать звонок
                        </button></a></li>
                    </ul>
                    <button className='btnnnnn' onClick={()=>{
                        add()
                    }}><img src={menu} alt="menu" className='menu' /></button>
                </nav>
                <h1 className="mobilny">
                    Мобильный <br />
                    ШИНОМОНТАЖ №1
                </h1>
                <p className='text'>В интернет-магазине шин Шины Мигом вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто</p>
                <button className='racing_btn'>
                    Вызвать шиномонтаж
                    <img src={racing} alt="" />
                </button>
            </div>
            <div className="container">
                <div className="mob">
                    <div className="stoi">
                        Стоимость
                    </div>
                    <div>
                        <h5 className='koles'>
                            МОБИЛЬНЫЙ РЕМОНТ И ЗАМЕНА КОЛЕС
                            <div className="kalta"></div>
                        </h5>
                        <p className='uslugi'>Услуги выездного шиномонтажа в СПб и ЛО для транспортных средств</p>
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
                <button onClick={()=>remove()}>
                <img src={close} alt="close" className='close'/></button>
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
        </header>
    );
};

export default Header;