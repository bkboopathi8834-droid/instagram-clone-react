import { useNavigate } from "react-router-dom";

function Sidebar(){

    const navigate = useNavigate();

   return(
    <div className="sidebar-m position-fixed">
        <div >
            <img className="logo_text" src="\src\assets\Logo_font.png" alt="insta_logo" />
            <div className="icon d-flex flex-column gap-4 mx-4 mt-5 sidebar-dev">
                <div onClick={()=> navigate('/home')}><i className="bi bi-house-door "></i>Home</div>
                <div><i className="bi bi-play-btn"></i>Reels</div>
                <div><i className="bi bi-send-arrow-up"></i>Messages</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-heart"></i>Notifications</div>
                <div onClick={()=> navigate('/home/create')}><i className="bi bi-plus-lg"></i>Create</div>
                <div><i className="bi bi-clipboard-data"></i>Dashboard</    div>
                <div onClick={()=> navigate('profile')}><i className="bi bi-person"></i>Profile</div>
            </div>
        </div>

        <div className="s-icon d-flex flex-column gap-3 mx-4 position-fixed bottom-0 mb-5">
            <div><i className="bi bi-list"></i>More</div>
            <div><i className="bi bi-boxes"></i>Also from Meta</div>
        </div>
    </div>
   );
}
export default Sidebar;