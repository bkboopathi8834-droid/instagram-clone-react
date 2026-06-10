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
           const response= await axios.get('http://localhost:3000/Log');
           const data=response.data;
           console.log(data);
           
           const validuser= logusername.trim()===data.loguser;
           const validpass= logpass.trim()===data.logpassword;


           console.log("Entered Username:", logusername);
           console.log("DB Username:", data.loguser);

            console.log("Entered Password:", logpass);
            console.log("DB Password:", data.logpassword);

            console.log("validuser:", validuser);
            console.log("validpass:", validpass);

           if(validuser && validpass){
            localStorage.setItem("isLoggedIn","true");
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