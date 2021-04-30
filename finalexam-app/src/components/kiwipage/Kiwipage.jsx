import { Link } from 'react-router-dom';
import Badroom from './images/badroom.jpg';
import Bitmap from './images/Bitmap.jpg';
import Hotel from './images/hotel.jpg';
import Kitchen from './images/kitchen.jpg';

import './Kiwipage.scss';

const Kiwipage = () => {
    const kiwipageData = [
        {
            img: Bitmap,
            heading: 'Светодиодная лампа с фронтальным стеклом 10шт',
            time: 'Вчера 22:55',
            price: '39 000 000 сум'
        },
        {
            img: Hotel,
            heading: 'Коттедж 424 м² на участке 22.6 сот.',
            time: 'Вчера 22:55',
            price: '39 000 000 сум'
        },
        {
            img: Kitchen,
            heading: '2-к квартира, 55 м², 3/5 эт.',
            time: 'Вчера 22:55',
            price: '39 000 000 сум'
        },
        {
            img: Badroom,
            heading: 'Кровать с закроватным модулем+ матрас Вита 160',
            time: 'Вчера 22:55',
            price: '39 000 000 сум'
        }
    ]
    return(
        <div className="kiwipage">
            {
                kiwipageData.map((item) =>(
                    <Link className="kiwipage-card">
                        <img src={item.img} alt=""/>
                        <div className="kiwipage-card-text">
                            <h3>{item.heading}</h3>
                            <span>{item.time}</span>
                            <p>{item.price}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Kiwipage;