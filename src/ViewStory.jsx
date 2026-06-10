import { useEffect, useState } from "react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";

function ViewStory() {

    const { id } = useParams();
    const newid = Number(id);
    const navigate = useNavigate();

    const [story, setStory] = useState(null);

    useEffect(() => {

        fetch(`/db.json/stories/${id}`)
            .then(data => {
                if(!data.ok){
                    navigate('/home')
                }
                return data.json();
            })
            .then(data => setStory(data))
            .catch(err => console.log(err));

    }, [id]);

    return (
        <>
            <div>

                {
                    story ?
                        <div className="storyview d-flex justify-content-center align-items-center gap-3">
                            <Link to={`/story/${newid - 1}`}> <i className="bi bi-arrow-left-circle-fill fs-1"></i></Link>
                            <img src={story.storyPhoto} alt="story" className="vh-100"
                            />
                            <Link to={`/story/${newid + 1}`}><i className="bi bi-arrow-right-circle-fill fs-1"></i></Link>
                            <div className="position-absolute top-0 end-0 m-3">
                                <Link to={'/home'} className="fs-1"><i class="bi bi-x"></i></Link>
                            </div>
                        </div>

                        :

                        <div>Loading....</div>
                }

            </div>
        </>
    );
}

export default ViewStory;