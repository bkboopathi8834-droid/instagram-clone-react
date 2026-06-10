import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mobnav from "./Mobnav";

function Create(){

    const [ postimage,setPostimage] = useState("");
    const navigate = useNavigate();

    const handlepost=()=>{

        if(postimage.trim() == ""){
            alert("Please enter valid path!")
            return;
        }

        else{
            const newpost={
            id: Date.now().toString(),
            image:postimage
        }

        axios.post('/db.json/post',newpost)
        .then(()=>{
            alert("Post Created")
            navigate('/home/profile')
            setPostimage("")
        })
        }
    }

    return(
        <div>
                <div className="createpost">
                    <h2>Create New Post</h2>
                    <input type="text" value={postimage} placeholder="Enter Post Path"  onChange={(e)=> setPostimage(e.target.value)} />
                    <h6>{postimage}</h6>
                    <button onClick={handlepost}>Create Post</button>

                </div>
        <Mobnav/>
        </div>
        
    );
}

export default Create;