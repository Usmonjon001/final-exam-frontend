import { Link, Switch, Route } from "react-router-dom";
import Kiwipage from '../../components/kiwipage'
import SinglePhoto from '../../assets/images/popularside/Group23.jpg';
import './KiwiSinglePage.scss';

const KiwiSinglePage = () =>{
    return(
        <div className="container singlepage">
            <Link>Объявления   /   Ташкент Недвижимость   /   Ташкент Квартиры   /   Ташкент Продажа   /   Новостройки Ташкент</Link>
            <div className="singlepage-info">
                <h1>Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5</h1>
                <div className="singlepage-info-card">
                    <img src={SinglePhoto} alt="photo" className="singlepage-info-card_img"/>
                    <div className="singlepage-info-card-text">
                        <div className="singlepage-info-card-text_data">
                            <span>Артикул: 4418970</span>                                                    <span>обновлено: 28.04.17 добавлено: 28.04.17</span> 
                        </div>
                        <h3>70 000 у.е.</h3>
                        <Link className="singlepage-info-card-text-addres">Ташкент, Ташкентская область, Юнусабадский район </Link>
                        <div className="singlepage-info-card-text-phone">
                            <span>99891 166 ****</span>
                            <button>Покозать польностю</button>
                        </div><br/>
                        <div className="singlepage-info-card-text-phone">
                            <span>99891 166 ****</span>
                            <button>Покозать польностю</button>
                        </div>
                        <div className="singlepage-info-card-text-author">
                            <span>Автор обьявлении: </span>
                            <Link>Зухриддин Темиров</Link>
                        </div>
                        <div className="singlepage-info-card-text-connect">
                            <button>Написать автору</button>
                            <button>Предложить свою цену</button>
                        </div>
                        <table>
                            <tr className="bottom">
                                <td>Количество комнат: 6</td> 
                                <td>Общая площадь: 40M2</td> 
                                <td>Этаж: 32</td> 
                            </tr>

                            <tr className="bottom">
                                <td>Этажность дома: 6</td> 
                                <td>Состояние квартиры: Первая сдача </td> 
                                <td>Этаж: 32</td> 
                            </tr>

                            <tr className="bottom">
                                <td>Планировка: 6</td> 
                                <td><Link>Раздельная</Link></td> 
                                <td>Ремонт: Авторский проект</td> 
                            </tr>

                            <tr className="bottom">
                                <td>Санузел: <Link>2 санузла и более</Link></td> 
                                <td>Меблирована: <Link>Да</Link></td> 
                                <td>Высота потолков: 32</td> 
                            </tr>

                            <tr>
                                <td colspan="3">Рядом есть:<br></br> <Link>Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе</Link></td>
                            </tr>
                        </table>
                        
                        <div className="singlepage-info-card-text-paragrif">
                            <p>Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый. </p>

                            <p>Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.</p>
                        </div>

                        <div className="singlepage-info-card-text-viewers">
                            <span>Просмотры:10958</span>						<Link>Пожаловатся</Link>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="singlepage-bottom">
                <Kiwipage/>
            </div>
        </div>
    )
}

export default KiwiSinglePage;