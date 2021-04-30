import {Link} from 'react-router-dom';
import './RegPhoneCode.scss';

import RegRight from '../../components/kiwipage/RegRight'

const RegPhoneCode = () =>{
    return(
        <div className="container registration">
            <div className="regphone-left">
                <form className="regphone-left-form">
                    <h1>Бесплатная регистрация</h1>
                    <h5>Код отправлен в виде смс на указанный номер телефона</h5>
                    <h5>Введите ваш номер телефона</h5>
                    <div className="regphoneflex">
                        <input type="tel:" name="" id="" placeholder="998 91 234 56 78" className="regCode-input"/>
                        <div className="interval">
                            90s
                        </div>
                    </div>
                    <input type="text" name="" id="" placeholder="Введите код подтверждения" className="regCode-inputwo"/>
                    <Link to="/" className="regphone-left-form-button colorfff">Далее</Link>
                    <p>или</p>
                    <Link className="regphone-left-form_link" to="/">Войдите в систему, если у вас уже есть аккаунт kivi.uz</Link>
                </form>
            </div>
            <RegRight/>
            
        </div>
    )
}

export default RegPhoneCode;