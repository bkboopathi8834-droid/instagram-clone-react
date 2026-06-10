import { useState,useEffect } from "react";
import axios, { Axios } from "axios";
import Mobnav from "./Mobnav";

function EditProfile(){

    const [username,setUsername]=useState("");
    const [about,setAbout]=useState("");
    const [name,setName] = useState("");
    const [sabout, setSabout] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:3000/Profile/300')
        .then((Response)=> {
            setUsername(Response.data.username);
            setAbout(Response.data.about);
            setName(Response.data.name);
            setSabout(Response.data.sabout);
            console.log(Response.data);
        })
        .catch((err)=> console.log(err));
    },[])

    const handleupdate=()=>{
        axios.patch("http://localhost:3000/Profile/300",{
            username,
            about,
            name,
            sabout
        }).then(()=> alert("Profile Updated!"))
        .catch((err)=> console.log(err) )
    };

    return(
        <>     
            <div className="editfont" >
                <h2>{username}</h2>
                <input type="text" value={username} name="username" onChange={(e)=> setUsername(e.target.value)}/>
                <h2>{name}</h2>
                <input type="text" value={name} name="name" onChange={(e)=> setName(e.target.value)}/>
                <h2>{about}</h2>
                <input type="text" value={about} name="about" onChange={(e)=> setAbout(e.target.value)} />
                <h2>{sabout}</h2>
                <input type="text" value={sabout} name="sabout" onChange={(e)=> setSabout(e.target.value)} />

                <button className="btn btn-primary" onClick={handleupdate}>
                    Update
                </button>
            </div>
              <Mobnav/>
        </>

    );
}
export default EditProfile;