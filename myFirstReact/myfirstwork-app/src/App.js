import Tickets from "./pages/tickets/tickets";
import Sidebar from './containers/Sidebar/sidebar';
import "./assets/styles/main.scss";

const App = () => {
  return (
    <div className="App">
    
      <Sidebar/>
      <Tickets/>
      
    </div>
  );
}

export default App;
