import './sidebar.scss';
import SidebarButton from "../../components/SidebarButton/sidebarButton";
import {
    OverviewIcon,
    TicketsIcon,
    IdeasIcon,
    AgentsIcon,
    ArticlesIcon,
    ContactsIcon,
    SettingsIcon,
    SubscriptionIcon
} from '../../assets/icons/icons';
import SidebarLogoIcon from '../../assets/images/logo.svg';

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <a href="javascript:void(0)" className="sidebar-logo">
                <img src={SidebarLogoIcon} alt=""/>
                <h2>Dashboard Kit</h2>
            </a>
            <SidebarButton title="Overview" icon={<OverviewIcon/>}/>
            <SidebarButton title="Tickets" icon={<TicketsIcon/>}/>
            <SidebarButton title="Ideas" icon={<IdeasIcon/>}/>
            <SidebarButton title="Contacts" icon={<ContactsIcon/>}/>
            <SidebarButton title="Articles" icon={<ArticlesIcon/>}/>
            <SidebarButton title="Articles" icon={<AgentsIcon/>}/>
            <SidebarButton title="Settings" icon={<SettingsIcon/>}/>
            <SidebarButton title="Subscription" icon={<SubscriptionIcon/>}/>
        </div>
    )
}

export default Sidebar;
