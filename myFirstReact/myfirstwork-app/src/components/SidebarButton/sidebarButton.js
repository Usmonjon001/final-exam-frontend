import './sidebarButton.scss';

const SidebarButton = ({title, icon}) => {
    return(
        
            <button className="sidebar-btn">
                <div className="btn-icon">
                    {icon}
                </div>
                <span>{title}</span>
            </button>
        
    );
}

export default SidebarButton;