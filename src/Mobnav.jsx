import { Navigate, useNavigate } from "react-router-dom";


function Mobnav(){
    
    const navigate = useNavigate();

    return(
        <div className="mob-width">
            <div onClick={() => navigate('/home')}><i className="bi bi-house-fill"></i></div>

            <div onClick={() => navigate('create')}><i className="bi bi-plus-square-fill"></i></div>

            <div onClick={() => navigate('profile')}><i className="bi bi-person-circle"></i></div>
        </div>
    );
}
export default Mobnav;