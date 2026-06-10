import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestion from "./Suggestion";
import { Outlet, useLocation } from "react-router-dom";
function App(){

    const location = useLocation();
    const Homepage = location.pathname ==='/home';
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        navigate("/login");
    }

    return(
        <div>
            <div className=" d-flex vh-100">
                <div className="w-20"> <Sidebar/> </div>
                <div className={Homepage ? "width50" : "width70" }><Outlet/></div>
                {Homepage && <div className="w-30"><Suggestion/></div>}
            </div>
        </div>
    );
}
export default App;