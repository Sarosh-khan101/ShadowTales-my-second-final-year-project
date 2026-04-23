import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./common.css"


export default function Signin(){
    const navigate = useNavigate();
const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: ""
});

const [errorMessage, setErrorMessage] = useState("");

const handleInputChange = (event)=>{
    setForm((curr)=>{
        return{...curr,[event.target.name]:event.target.value};
    })
}; 

const handleSubmit = async (event)=>{
   event.preventDefault();
   setErrorMessage("");

const {fullName,email,password} = form; 

   if(!fullName || !email ||!password){
    alert("Please fill all the fields!");
    return;
   }

    try{
     const response = await axios.post("http://localhost:5000/signin",form);
     if(response.status===201 || response.status===200){
        setForm(
            {
                fullName:"",
                email:"",
                password:""
            });
             if(response.data.userId){
                localStorage.setItem("myUserId",response.data.userId);
            }
            navigate("/dashboard");
     }
    }catch(err){
        console.error(err);
        console.log(err);
        if(err.response && err.response.data){
            setErrorMessage(err.response.data.message);
        }else{
            setErrorMessage("Something went wrong please try again later.");
        }
    }
};

    

    return(
<>
 <div className="diary-page">
        <br></br>

        <br></br><br></br>

        <form onSubmit={handleSubmit} className="horror-form">
            
               <hr></hr>
               <h1 className="creepy-title">Welcome to Shadow Tales</h1>
               <hr></hr>
               <br></br><br></br>
             <h2 className="creepy-title">Fill this form to:  SignIn</h2>
             <br></br><br></br>

             <div className="input-group">
            <input type="text"  className="ink-input" placeholder="Full Name" value={form.fullName} onChange={handleInputChange} name="fullName" autoComplete="off"/>
            </div>
            <br></br>

               <div className="input-group">
            <input type="text" className="ink-input" placeholder="E-mail" value={form.email} onChange={handleInputChange} name="email" autoComplete="off"/>
           </div>
            <br></br>

            <div className="input-group">
            <input type="Password" className="ink-input" placeholder="Password" value={form.password} onChange={handleInputChange} name="password" minLength={8} maxLength={12} autoComplete="off"/>
            </div>
            <br></br>

            <br></br>

             {errorMessage && (
                <div style={{ 
                    color: "#ff4d4d", 
                    backgroundColor: "rgba(255, 77, 77, 0.1)", 
                    padding: "10px", 
                    borderRadius: "5px",
                    marginBottom: "15px",
                    border: "1px solid #ff4d4d",
                    textAlign: "center"
                }}>
                    {errorMessage}
                </div>
            )}

            <button type="submit" className="seal-button">SignIn</button>


        </form>
           
    </div>
</>
    );
}
