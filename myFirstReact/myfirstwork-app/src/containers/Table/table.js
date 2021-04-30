import './table.scss';
import TableItem from '../../components/TableItem/tableItem';
import VetnamliBrat from '../../assets/images/joningdan.jpg';

const TableInfoArr = [
    {
        id: 0,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    },
    {
        id: 1,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    },
    {
        id: 2,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    },
    {
        id: 3,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    },
    {
        id: 4,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    },
    {
        id: 5,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    },
    {
        id: 6,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    },
    {
        id: 7,
        subject: 'Contact Email not Linked',
        updateDay: 'Updated 1 day ago',
        customerName: 'Tom Cruise',
        customerDate: 'on 24.05.2019',
        dateDay:  'May 26, 2019',
        dateHour: '6:30 PM',
        status: 'High',
        imgLink: VetnamliBrat,
    }
]

const Table = () =>{
    return(
        <div className="table">
            <div className="table-header">
                <h1>All tickets</h1>
                <div className="table-header-left">
                    <span className="table-header-left__firstItem">Sort</span>
                    <span className="table-header-left__secondItem">Filter</span>
                </div>
            </div>
            {
                TableInfoArr.map((item) => (
                    <TableItem
                    id={item.id}
                    subject={item.subject}
                    updateDay={item.updateDay}
                    dateDay={item.dateDay}
                    customerName={item.customerName}
                    customerDate={item.customerDate}
                    dateHour={item.dateHour}
                    status={item.status}
                    imgLink={item.imgLink}
                    /> 
                ))
            }
        </div>
    )
}

export default Table;