import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./common.css"

export default function Form () {
const navigate = useNavigate();

let [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    age: "",
    city: ""
}
);

let handleInputChange = (event)=>{
    setForm((curr)=>{
        return {...curr,[event.target.name]:event.target.value};
    })
};

let handleSubmit = async (event)=>{
   
event.preventDefault();

if(!form.fullname||!form.email||!form.password||!form.phonenumber||!form.age||!form.city){
    alert("Please fill all the fields!");
    return;
}

try{
    const response = await axios.post("http://localhost:5000/signup",form);
if(response.status===201||response.status===200){
    setForm(
    {
        fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    age: "",
    city: ""
});
navigate("/dashboard");
}

} catch(err){
    console.error(err);
}
};

return (
    <>
    <div className="diary-page">
        <br></br>

        <br></br><br></br>

        <form onSubmit={handleSubmit} className="horror-form">
               <hr></hr>
               <h1 className="creepy-title">Welcome to Shadow Tales</h1>
               <hr></hr>
               <br></br><br></br>
             <h2 className="creepy-title">Fill this form to:  SignUp</h2>
             <br></br><br></br>

             <div className="input-group">
            <input type="text"  className="ink-input" placeholder="Full Name" value={form.fullname} onChange={handleInputChange} name="fullname" autoComplete="off"/>
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

             <div className="input-group">
            <input type="tel" className="ink-input" placeholder="Phone Number" value={form.phonenumber} onChange={handleInputChange} name="phonenumber" minLength={10} maxLength={10} autoComplete="off"/>
             </div>
            <br></br>

             <div className="input-group">
            <input type="number" className="ink-input" placeholder="Age" value={form.age} onChange={handleInputChange} name="age" autoComplete="off"/>
            </div>
            <br></br>

             <div className="input-group">
            <input type="text" className="ink-input" placeholder="City" value={form.city} onChange={handleInputChange} name="city" autoComplete="off"/>
            </div>
            <br></br>

            <button type="submit" className="seal-button">Signup</button>


        </form>
           
    </div>
    </>
);
}