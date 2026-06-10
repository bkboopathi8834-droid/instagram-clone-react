import axios from "axios";
import { useEffect, useState } from "react";


function Post(){

    const [post,setPost] = useState([])

    useEffect(()=>{

        fetch('http://localhost:3000/Data')
        .then((ndata)=>ndata.json())
        .then((ndata)=> setPost(ndata))
        .catch((err)=>console.log(err))
    },[])

    const handlelike = (currentid, currentlike, currentisliked) => {
        const updatedLikes = currentisliked ? currentlike - 1 : currentlike + 1;
        const updatedIsLiked = !currentisliked;
        axios.patch(`http://localhost:3000/Data/${currentid}`,{ 
            likes: updatedLikes, 
            isliked: updatedIsLiked
        })
            .then(() => {setPost( post.map((item) =>item.id === currentid ? {
                            ...item, likes: updatedLikes, isliked: updatedIsLiked
                        }: item))
            })
            .catch((err) => console.log(err));
    }

    return(
        <div className="post-style">
            {
                post.length > 0 ? (
                    <div className="post-style-part">
                        {post.map((newpost)=>(
                            <div key={newpost.id}>
                                <div className="d-flex py-2 post-id">
                                    <img className="profileimage" src={newpost.profilePic} alt="profilepicture" />
                                    <h5 className="mt-2 mx-2">{newpost.username} {newpost.isVerified && (<i 
                                                        className="bi bi-patch-check-fill"
                                                        style={{ color: "dodgerblue", marginLeft: "4px", fontSize:"15px" }}
                                                    ></i>)}</h5>
                                    <h6 className="posttime">{newpost.timeAgo}</h6>
                                </div>

                                <div className="postimage height-5">
                                    <img src={newpost.postImage} alt="postimage" />
                                </div>

                                <div className="like-icon d-flex gap-3">
                                    <div onClick={() =>handlelike(newpost.id,newpost.likes,newpost.isliked)}><i className={newpost.isliked? "bi bi-heart-fill text-danger": "bi bi-heart"}></i></div>
                                    <div className="d-flex align-item-center"><i className="bi bi-chat"><span style={{fontSize:"15px",fontWeight:"bold", marginLeft:"4px", position:"relative", bottom:"3px"}}>{newpost.comments}</span></i></div>
                                    <div><i className="bi bi-send"></i></div>
                                    <div className="save-icon"><i className="bi bi-bookmark"></i></div>
                                </div>

                                <div>
                                    <b className="fs-likes">{newpost.likes} Likes</b>
                                    <p className="mx-2"><b>{newpost.username}</b> {newpost.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                    <div>
                        loading
                    </div>
                )
            }

        </div>
    );
}
export default Post;