import { useEffect, useState } from "react";


function Suggestion(){

    const [profile,setProfile] = useState([])
    const [suggestion,setSuggestion] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/Profile')
        .then((pro)=>pro.json())
        .then((pro)=>setProfile(pro))
        .catch((err)=>console.log(err.message))
    
    
        fetch('http://localhost:3000/suggestions')
        .then((sug)=>sug.json())
        .then((sug)=> setSuggestion(sug))
        .catch((err)=> console.log(err.message))
    
    
    },[]);

    return(
        <div className="w-75 ms-5 suggestion">
            {
                profile.length >0 && suggestion.length>0 ? (
                    <>
                    {
                        profile.map((newprofile)=>
                        <div  key={newprofile.id} >
                                <div className="d-flex justify-content-center gap-2 align-items-center mt-3">
                                    <img style={{borderRadius:"50%",width:"60px",height:"60px"}} src={newprofile.profilePhoto} alt="profilePic" />
                                    <h6 className="pb-3">{newprofile.username}</h6>
                                    <h6 style={{paddingBottom:"12px"}}>{newprofile.isVerified && (<i 
                                                                        className="bi bi-patch-check-fill"
                                                                        style={{ color: "dodgerblue", marginLeft: "-3px", fontSize:"13px"}}
                                                                    ></i>)}</h6>
                                <h6 className="text-primary ms-auto" style={{fontSize:"15px", marginTop:"8px"}}><b>Switch</b></h6>
                                </div>
                                <div>
                                    <h6 style={{position:"relative", left:"4.3rem", bottom:"1.8rem", color:"rgb(83, 88, 83)"}}>{newprofile.username}</h6>
                                </div>
                                <div className="d-flex">
                                    <h6><b>Suggested for you</b></h6>
                                    <h6 className="ms-auto">See all</h6>
                                </div>
                        </div>
                        )
                    }
                    {
                        suggestion.map((newsug)=>
                            <div key={newsug.id} style={{position:"relative", top:"5px", marginBottom:"-15px"}}>
                                <div className="d-flex flex-direction-column gap-2 align-items-center">
                                    <img style={{borderRadius:"50%", width:"60px",height:"60px"}} src={newsug.profilePhoto} alt="sugprofile" />
                                    <h6  style={{paddingBottom:"12px"}}>{newsug.username}</h6>
                                    <h6 style={{paddingBottom:"12px"}}>{newsug.isVerified && (<i 
                                                                        className="bi bi-patch-check-fill"
                                                                        style={{ color: "dodgerblue", marginLeft: "-3px", fontSize:"13px"}}
                                                                    ></i>)}</h6>
                                    <h6 className="text-primary ms-auto" style={{fontSize:"15px", marginTop:"8px"}}><b>Follow</b></h6>
                                </div>
                                <div>
                                    <h6 style={{position:"relative", left:"4.3rem", bottom:"1.8rem", color:"rgb(83, 88, 83)"}}>Suggested for you</h6>
                                </div>
                            </div>
                            )
                    }
                    </>
                        ):(
                            <div>
                                <h5>Loading...</h5>
                            </div>
                        )
                        
                    }  
                     <div>
                        <h6 className="position-relative mt-5 ms-5" style={{color:"rgb(59, 59, 59)"}}>© 2026 Instagram from Meta</h6>
                    </div> 
        </div>



    )
}

export default Suggestion;