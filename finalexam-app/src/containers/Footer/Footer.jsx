import FooterLogo from '../../assets/images/kiwipageImg/FooterLogo.png';
import Appstore from '../../assets/images/kiwipageImg/AppStore.png';
import PlayMarket from '../../assets/images/kiwipageImg/playmarket.png';

// Images

import {
    Down,
    RedRight,
    YellowRight,
    PinkRight,
    OrangeRight,
    BlueRight,
} from '../../assets/images/Footer';

import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
               <div className="container footerTop">
                   <div className="footerTop-logo">
                        <img src={FooterLogo} alt=""/>
                        <h1>Продай, найди, купи все что ты пожелаешь</h1>
                   </div>
                    <p>Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления</p>
                    
                    <div>
                        <Link className="footerMidleside-row_link"> <img src={Appstore} alt=""/> </Link>  
                        <Link className="footerMidleside-row_link"> <img src={PlayMarket} alt=""/> </Link>  
                    </div> 
                </div>


            </div>

            <div className="footer-midleside">
                <div className="footerMidleside container">
                    <div className="footerMidleside-row">
                        <h4>Автомобили</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row">
                        <h4>Недвижимость</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row">
                        <h4>Электроника</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row">
                        <h4>Личные вещи</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row">
                        <h4>Дом и Сад</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row">
                        <h4>Товары стройки и ремонта</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row">
                        <h4>Хобби, Отдых и Спорт</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row">
                        <h4>Бизнес и услуги</h4>
                        <Link className="footerMidleside-row_link">Легковые авто</Link>
                        <Link className="footerMidleside-row_link">Мото</Link>
                        <Link className="footerMidleside-row_link">Автобусы</Link>
                        <Link className="footerMidleside-row_link">Грузовые авто</Link>
                        <Link className="footerMidleside-row_link">Сельхозтехника</Link>
                        <Link className="footerMidleside-row_link">Запчасти и Аксессуары</Link>
                        <Link className="footerMidleside-row_link">Прицепы и Спецтехника</Link>
                        <Link className="footerMidleside-row_link">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footerMidleside-row-seemore">
                        <Link className="footerMidleside-row-seemore_item">Покозать еще</Link>
                    </div>
                </div>
                <div className="container footerBottom-nav">
                    <Link>Подать объявление</Link>
                    <Link>Объявления</Link>
                    <Link>Магазины</Link>
                    <Link>Помощь</Link>
                    <Link>Реклама на сайте </Link>
                    <Link>О компании</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;