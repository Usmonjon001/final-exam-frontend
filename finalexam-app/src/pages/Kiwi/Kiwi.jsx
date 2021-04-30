import { Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import KiwiSinglePage from '../KiwiSinglePage';
import './Kiwi.scss';

// Image

import iPhone from '../../assets/images/kiwipageImg/iphone.jpg';
import ITCompany from '../../assets/images/kiwipageImg/ITcompany.jpg';
import Hotel from '../../assets/images/kiwipageImg/hotel.jpg';
import Bicycle from '../../assets/images/kiwipageImg/bicycle.jpg';
import Newbicycle from '../../assets/images/kiwipageImg/newbicycle.jpg';
import IceSniker from '../../assets/images/kiwipageImg/iceSniker.jpg';
import Oldbicycle from '../../assets/images/kiwipageImg/oldbicycle.jpg';
import Shkaf from '../../assets/images/kiwipageImg/shkaf.jpg';
import KFC from '../../assets/images/kiwipageImg/kfc.jpg';
import Metal from '../../assets/images/kiwipageImg/metal.jpg';
import Car from '../../assets/images/kiwipageImg/car.jpg';
import Bike from '../../assets/images/kiwipageImg/bike.jpg';
import Oboy from '../../assets/images/kiwipageImg/oboy.jpg';
import Tool from '../../assets/images/kiwipageImg/tool.jpg';
import Foods from '../../assets/images/kiwipageImg/foods.jpg';


import Airplane from '../../assets/icons/KiwipageIcon/Airplane.png';
import Home from '../../assets/icons/KiwipageIcon/Home.png';
import Computer from '../../assets/icons/KiwipageIcon/Computer.png';
import Work from '../../assets/icons/KiwipageIcon/Work.png';
import Price from '../../assets/icons/KiwipageIcon/Price.png';
import Garden from '../../assets/icons/KiwipageIcon/Garden.png';
import Repairing from '../../assets/icons/KiwipageIcon/Repairing.png';
import Gaming from '../../assets/icons/KiwipageIcon/Gaming.png';
import Man from '../../assets/icons/KiwipageIcon/Man.png';

import Kiwipage from '../../components/kiwipage';







const kiwiCardtypes = [
    {
        img: Airplane,
        text: 'Автомобили'
    },
    {
        img: Home,
        text: 'Автомобили'
    },
    {
        img: Computer,
        text: 'Автомобили'
    },
    {
        img: Work,
        text: 'Автомобили'
    },
    {
        img: Price,
        text: 'Автомобили'
    },
    {
        img: Garden,
        text: 'Автомобили'
    },
    {
        img: Repairing,
        text: 'Автомобили'
    },
    {
        img: Gaming,
        text: 'Автомобили'
    },
    {
        img: Man,
        text: 'Автомобили'
    },
]


const kiwiPageData = [
    {
        img: iPhone,
        text: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: ITCompany,
        text: 'Маркетолог. Консультирование. Настройка рекламы',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Hotel,
        text: 'Требуется администратор в Отел',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Bicycle,
        text: 'Велосипед Merida Big Seven 70 D',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Newbicycle,
        text: 'Женский, комфортный велосипед из Германии',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: IceSniker,
        text: 'Коньки раздвижные Galaxy р-р 36-39',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Oldbicycle,
        text: 'Продам свою гоночный байк Mongoose',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Shkaf,
        text: '1-к квартира, 47 м², 7/18 эт.',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: KFC,
        text: 'Торговое помещение, 10 м²',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Metal,
        text: 'Двигатели моторы головки кпп турбины тнвд гарантия',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Car,
        text: 'Toyota Camry, 2002',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Shkaf,
        text: 'Toyota Camry, 2002',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Bike,
        text: 'Toyota Camry, 2002',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Oboy,
        text: 'Плиточник',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Tool,
        text: 'Мастер регулировка дверей замена замков',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    },
    {
        img: Foods,
        text: 'Овощная компания. Доставка свежих овощей и фруктов',
        date: 'Вчера 22:55',
        price: '39 000 000 сум'
    }
];

const Kiwi = () =>{
    const { path, url } = useRouteMatch();
    console.log("Mana =>",path);
    console.log("Mana =>",url);
    return(
        <div>
                <div className="container kiwicard">
                <div className="kiwicard-cardtypes">
                        {
                            kiwiCardtypes.map((item) =>(
                                <div className="kiwicard-cardtypes-container">
                                    <div className="kiwicard-cardtypes-container-card">
                                        <img src={item.img} alt="photo"/>
                                    </div>
                                    <p className="kiwicard-cardtypes-container-text">{item.text}</p>
                                </div>
                            ))
                        }
                            <ul className="computer-togle">
                                <li>Телефоны</li>
                                <li>Компьютеры</li>
                                <li>Фото / видео</li>
                                <li>Тв / видеотехника</li>
                                <li>Аудиотехника</li>
                                <li>Игры и игровые приставки</li>
                                <li>Техника для дома</li>
                                <li>Техника для кухни</li>
                                <li>Климатическое оборудование</li>
                                <li>Индивидуальный уход</li>
                                <li>Аксессуары и комплектующие</li>
                                <li>Телефоны</li>
                                <li>Компьютеры</li>
                                <li>Фото / видео</li>
                                <li>Тв / видеотехника</li>
                                <li>Игры и игровые приставки</li>
                                <li>Техника для дома</li>
                                <li>Техника для кухни</li>
                                <li>Климатическое оборудование</li>
                                <li>Игры и игровые приставки</li>
                                <li>Техника для дома</li>
                            </ul>

                            {/* <ul className="computer-togle">
                                <li>Настольные</li>
                                <li>Ноутбуки</li>
                                <li>Планшетные компьютеры </li>
                                <li>Серверы</li>
                                <li>Аксессуары</li>
                                <li>Комплектующие</li>
                                <li>Периферийные устройства</li>
                                <li>Мониторы</li>
                                <li>Внешние накопители </li>
                                <li>Расходные материалы </li>
                                <li>Другое </li>
                            </ul> */}
                </div>
                <div className="kiwicard-navigation">

                </div>
                <div className="border-bottom">
                    {
                        kiwiPageData.map((item) =>(
                            <Link to='/kiwisinglepage' className="kiwicard-item">
                                <img src={item.img} alt="photo"/>
                                <h1>{item.text}</h1>
                                <p className="kiwicard-item_date">{item.date}</p>
                                <p className="kiwicard-item_price">{item.price}</p>
                            </Link>
                        ))
                    }
                </div>

                <div className="displayMore">
                    <Link to="/" className="displayMore-link">Покозать еще</Link>
                </div>

            </div>

            <div>
                <div className="section4">
                    <div className="container kiwicard-popularside">
                        <div className="kiwicard-popularside-card">
                            <div className="kiwicard-popularside-card-text">
                                <h1>Техника Apple по доступным ценам</h1>
                                <Link className="kiwicard-popularside-card-text_link">987 обьявлениий</Link>
                            </div>
                        </div>
                        <div className="kiwicard-popularside-card">
                            <div className="kiwicard-popularside-card-text">
                                <h1>Техника Apple по доступным ценам</h1>
                                <Link className="kiwicard-popularside-card-text_link">987 обьявлениий</Link>
                            </div>
                        </div>
                        <div className="kiwicard-popularside-card">
                            <div className="kiwicard-popularside-card-text">
                                <h1>Техника Apple по доступным ценам</h1>
                                <Link className="kiwicard-popularside-card-text_link">987 обьявлениий</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container kiwicard-shortadvetisement">

                    <div className="kiwicard-shortadvetisement-direction">
                        <Link exact to={`${url}`} className="kiwicard-shortadvetisement-direction_link" activeClassName="homeNavActive">Просмотренные</Link>
                        <Link to={`${url}/kiwiselect`} className="kiwicard-shortadvetisement-direction_link" activeClassName="homeNavActive">Выбор редакции</Link>
                        <Link to={`${url}/kiwiprice`} className="kiwicard-shortadvetisement-direction_link" activeClassName="homeNavActive">Сниженные цены</Link>
                    </div>

                    <Switch>
                            <Route exact path={`${path}`} component={Kiwipage}>
                                <Kiwipage/>
                            </Route>
                            <Route path={`${path}/kiwiselect`} component={Kiwipage}>
                                <h1 className="">Выбор редакции</h1>
                            </Route>
                            <Route path={`${path}/kiwiprice`} component={Kiwipage}>
                                <h1 className="">Сниженные цены</h1>
                            </Route>
                    </Switch>

                    <div className="seemore">
                        <Link className="seemore_link">Покозать еще</Link>
                    </div>
            </div>
        </div>
    )
}

export default Kiwi;