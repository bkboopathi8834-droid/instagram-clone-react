import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Story(){

    const [story,setStory] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:3000/stories')
        .then((data)=>data.json())
        .then((data)=>setStory(data))
        .catch((err)=>console.log(err))
    },[])

    return(
        <div className="StoryView">
            {
                story.length > 0? (
                    <div className="styimage">
                        {
                            story.map((storydata)=>(
                                <div key={storydata.id} onClick={()=>{
                                    navigate(`/story/${storydata.id}`)
                                }}>
                                    <img src={storydata.profilePhoto} alt="propic" />
                                    <p className="text-truncate">{storydata.username}</p>
                                </div>
                            ))
                        }
                    </div>
                ):(
                    <div>

                    </div>
                )
            }
        </div>
    );
}
export default Story;