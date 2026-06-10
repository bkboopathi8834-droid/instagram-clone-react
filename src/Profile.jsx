import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mobnav from "./Mobnav";

function Profile(){

    const [profile,setProfile] = useState([]);
    const [post,setPost] = useState([]);

    const navigate =useNavigate();

    useEffect(()=>{
        fetch('http://localhost:3000/Profile')
        .then((data)=> data.json())
        .then((data)=> setProfile(data))
        .catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        fetch('http://localhost:3000/post')
        .then((pdata)=> pdata.json())
        .then((pdata)=> setPost(pdata))
        .catch((err)=>console.log(err))
    },[])

    return(
        <>
        { profile.length >0 && post.length>0 ? (
            <div className="overall-profile">
                {profile.map((pro)=>(
                    <div key={pro.id} className="profile-page">
                        <div className="d-flex py-4 justify-content-center align-items-center profile gap-5">
                            <img src={pro.profilePhoto} alt="Profile" />
                            <div className="id ">
                                <h4>{pro.username}</h4> 
                                <h6>{pro.name}</h6>
                                <div className="d-flex gap-4">
                                    <h6>{pro.post} </h6>
                                    <h6>{pro.followers}</h6>
                                    <h6>{pro.following}</h6>
                                </div>
                                <div className="mt-1">
                                    <h6 style={{color:"rgb(108, 108, 108)"}}>{pro.type}</h6>
                                    <h6>{pro.about}</h6>
                                    <h6>{pro.sabout}</h6>
                                </div>
                                
                            </div>
                        </div>
                        <div className="d-flex gap-2 p-box-width">
                            <div className="p-box" onClick={()=>navigate('/home/editprofile')}>
                                <h5>Edit profile</h5>
                            </div>
                            <div className="p-box">
                                <h5>View archive</h5>
                            </div>
                        </div>
                        <div className="grid">
                            <i className="bi bi-grid-3x3"></i>
                        </div>
                    </div>
                ))}
                 <div className="newpost">
                        {post.map((postimage)=>(
                            <div key={postimage.id}>
                                <div className="post-images"><img src={postimage.image} alt="" onClick={()=>navigate(`/home/viewpost/${postimage.id}`)} /></div>  
                            </div>
                 ))}
                </div>
               
                 </div>):(
                    <div>
                        <p>
                            Loading...
                        </p>
                    </div>
                 )
            } 
              <Mobnav/>
            
        </>
    );
}

export default Profile;