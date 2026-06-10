import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import Post from "./Post";
import axios from "axios";

function Postview() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [viewpost, setViewpost] = useState(null);

    useEffect(() => {
        fetch(`/db.json/post/${id}`)
            .then((res) => res.json())
            .then((data) => setViewpost(data))
            .catch((err) => console.log(err));
    }, [id]);

    const handledelete=(id)=>{
        axios.delete(`/db.json/post/${id}`)
        .then(()=> {
            alert("Post Deleted!")
            navigate('/home/profile')

        }).catch((err)=> console.log(err))
    }

    if (!viewpost) {
        return <h2>Loading...</h2>;
    }

    return (
    <div
        className="d-flex justify-content-center align-items-center w-100 profilepost" style={{position: "fixed",inset: 0,width: "100vw",height: "100vh"}}>
        <img
            src={viewpost.image}
            alt="post"
            style={{
                maxWidth: "100%",
                maxHeight: "100vh",
                objectFit: "contain"
            }}/>

            <div className="position-absolute top-0 end-0 m-3 d-flex post-viewbtn">
                <button style={{border:"none", width:"55px", fontSize:"25px", color:"rgb(11, 76, 150)"}} onClick={()=> handledelete(viewpost.id)}><i class="bi bi-trash3"></i></button>
                <Link to={'/home/Profile'} className="fs-1"><i class="bi bi-x"></i></Link>
            </div>
    </div>
);
}

export default Postview;