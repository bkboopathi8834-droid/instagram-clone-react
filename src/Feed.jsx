import Story from "./Story";
import Post from "./Post";
import Mobnav from "./Mobnav";

function Feed(){
    
    return(
        <div className="feed">
            <div>
                <Story/>
                <Post/>
                <Mobnav/>
            </div>
        </div>
    );
}
export default Feed;