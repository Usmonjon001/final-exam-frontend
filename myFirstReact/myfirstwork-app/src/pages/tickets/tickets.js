import Table from '../../containers/Table/table';
import "./tickets.scss";
import SearchIcon from '../../assets/images/search'
import LittleBell from '../../assets/images/qungiroqcha'

const Tickets = () =>{
    return(
        <div className="tickets-page">
            <div className="tickets-page-header">
                <h1 className="tickets-page-header">Tickets</h1>
                <div className="tickets-page-header-leftSide">
                    <div>
                        <SearchIcon/>
                        <LittleBell/>
                    </div>
                    <div>
                        <h3>Jones Ferdinand</h3>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
            <Table/>
        </div>
    );
}

export default Tickets;