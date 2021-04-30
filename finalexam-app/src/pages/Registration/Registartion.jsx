import {Link} from 'react-router-dom';
import './Registartion.scss';
import RegRight from '../../components/kiwipage/RegRight'

const Registartion = () =>{
    return(
        <div className="container registration">
            <div className="registration-left">
                <form className="registration-left-form">
                    <h1>Бесплатная регистрация</h1>
                    <input type="text" name="" id="" placeholder="Темиров Зухриддин"/>
                    <Link to="/regphonecode" className="registration-left-form-button colorfff">Далее</Link>
                    <p>или</p>
                    <Link className="registration-left-form_link" to="/regphonecode">Войдите в систему, если у вас уже есть аккаунт kivi.uz</Link>
                </form>
            </div>
            <RegRight/>
            
        </div>
    )
}

export default Registartion;