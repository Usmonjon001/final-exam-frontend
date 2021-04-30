import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './assets/styles/main.scss';
import './assets/Fonts/transfonter.org-20210425-065929/stylesheet.css';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Kiwi from './pages/Kiwi';
import Registration from './pages/Registration';
import KiwiSinglePage from './pages/KiwiSinglePage';
import Page404 from './pages/Page404';
import RegPhoneCode from './pages/RegPhoneCode';
import RegTakingPhone from './pages/RegTakingPhone';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Kiwi}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/kiwisinglepage" component={KiwiSinglePage}/>
          <Route path="/regphonecode" component={RegPhoneCode}/>
          <Route path="*" component={Page404}/> 
          <Route path="/regphone"/>
          <Route path="/regtakingphone" component={RegTakingPhone}/>

        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
