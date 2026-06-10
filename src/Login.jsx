import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

        const navigate=useNavigate();

        const [logusername,setLogusername]=useState("");
        const [logpass,setLogpass]=useState("");

        const handlelogin=async()=>{

         if(!logusername || !logpass){
            if(!logusername && !logpass){
                alert("Username & Password is required!")
            }
            else if(!logusername){
                alert("Username is required!")
            }
            else{
                
                alert("Password is required!")
            }
            return;
         }

         try{
           const savedUser = {
                        loguser: "bkboopathi",
                        logpassword: "BKBoopathi@8834"
                    };
           
           const validuser= logusername.trim()===savedUser.loguser;
           const validpass= logpass.trim()===savedUser.logpassword;

           if(validuser && validpass){
            localStorage.setItem("user", JSON.stringify(logusername));
            navigate('/home')
           } else{
            alert("invalid username/password")
           }
            
        } catch(err){
            console.log(err);
        }
    }

    return(

        <div className="login-Page">

            <h2>Log into Instagram</h2>

            <div className="Form">
                <input type="text" name="username" id="" placeholder="username" value={logusername} onChange={(e)=> setLogusername(e.target.value)}/>
                <input type="password" name="password" id="" placeholder="password" value={logpass} onChange={(e)=> setLogpass(e.target.value)}/>
                <button onClick={handlelogin}>Log in</button>
            </div>

        </div>
    );
}
export default Login;