import './Header.scss';
import Logo from '../../assets/images/logo';
import { Link } from 'react-router-dom';
import Plus from '../../assets/images/Plus';

const Header = () => {
    return(
        <header className="">
            <div className="container header">
                <div className="header-top">
                    <Logo/>
                    <div className="header-top-left">
                        <div className="header-top-left-language">
                            <Link to="/" className="header-top-left-language_link">Uz</Link>
                            <span>|</span>
                            <Link to="/"  className="header-top-left-language_link">Ru</Link>
                        </div>
                        <div className="header-top-right-registration">
                            <Link to="registration" className="header-top-right-registration_reglink">Вход </Link>
                            <span>|</span>    
                            <Link to="registration" className="header-top-right-registration_reglink">Регистрация</Link>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <form className="header-bottom-form">
                        <select className="header-bottom-form_select">
                            <option>Любая категория</option>
                            <option>По всей Узбекистану</option>
                            <option>Selection 3</option>
                            <option>Selection 4</option>
                        </select>
                        <input type="text" className="header-bottom-form_input" placeholder="Что будем искать ?"/>
                        <div className="header-bottom-form-selection">
                            <select className="header-bottom-form-selection-select">
                                <option>По всей Узбекистану</option>
                                <option>Любая категория</option>
                                <option>Selection 3</option>
                                <option>Selection 4</option>
                            </select>
                            <button className="header-bottom-form-selection-btn">Найти</button>
                        </div>
                    </form>
                    <div className="header-bottom-btn">
                        <button className="header-bottom-btn-icon">
                            <Plus/>
                        </button>
                        <div className="header-bottom-btn-text">
                            <h3>Добавить обьявления</h3>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;