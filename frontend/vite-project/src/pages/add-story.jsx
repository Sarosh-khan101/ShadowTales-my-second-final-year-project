import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./add-story.css";

export default function AddStrory() {
    const navigate = useNavigate();

    let [form, setForm] = useState({
        author: "",
        stateName: "",
        title: "",
        description: ""
    });

    const handleInputChange = (event)=>{
        setForm((curr)=>{
            return{...curr,[event.target.name]:event.target.value};
        }) 
    };

    const handleSubmit = async (event)=>{
       event.preventDefault();
       const targetState = form.stateName.toLowerCase().trim();

       if(!form.author || !form.stateName || !form.title || !form.description){
        alert("Please fill all the fields");
        return;
       }

         try{
        const response  = await axios.post("http://localhost:5000/api/add-legend",{ 
            title: form.title,
            author: form.author,
            description: form.description,
            stateTag: targetState
        })
        if(response.status===200||response.status===201){
            setForm({
                 author: "",
                 stateName: "",
                 title: "",
                 description: ""
            })
            navigate(`/legends/${targetState}`);
        }
    }catch(err){
        
        console.log(err);
    }
}
    


    return (
       <>
   <div className="add-story-container">
            <div className="glass-panel">
                <h1 className="horror-title">Submit Your Legend / Story</h1>
                <p className="subtitle">Some stories are better left in the dark. Are you brave enough to ink yours ?</p>

                <form onSubmit={handleSubmit} className="story-form">
                  
                    <div className="input-group">
                        <label htmlFor="author">Author Name</label>
                        <input 
                            type="text" 
                            name="author" 
                            placeholder="Who is telling this tale?" 
                            value={form.author} 
                            onChange={handleInputChange} 
                            autoComplete="off"
                            id="author"
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="stateTag">Select State / Region</label>
                        <select 
                            name="stateName" 
                            value={form.stateName} 
                            onChange={handleInputChange} 
                            autoComplete="off"
                            id="stateTag"
                            required
                            className="horror-dropdown"
                        >
                            <option value="">-- Choose a State --</option>
                            <option value="up">Uttar Pradesh</option>
                            <option value="punjab">Punjab</option>
                            <option value="bihar">Bihar</option>
                            <option value="west bengal">West Bengal</option>
                            <option value="odisha">Odisha</option>
                            <option value="rajasthan">Rajasthan</option>
                            <option value="madhya pradesh">Madhya Pradesh</option>
                            <option value="himachal">Himachal Pradesh</option>
                            <option value="uttarakhand">Uttarakhand</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="kerala">Kerala</option>
                            <option value="assam">Assam</option>
                            <option value="arunachal">Arunachal Pradesh</option>
                            <option value="meghalaya">Meghalaya</option>
                            <option value="manipur">Manipur</option>
                            <option value="goa">Goa</option>
                        </select>
                    </div>

                  
                    <div className="input-group">
                        <label htmlFor="title">Legend Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Give it a creepy name" 
                            value={form.title} 
                            onChange={handleInputChange} 
                            autoComplete="off"
                            id="title"
                            required 
                        />
                    </div>

                    
                    <div className="input-group">
                        <label htmlFor="description">The Story</label>
                        <textarea 
                            name="description" 
                            placeholder="Describe the horror in detail..." 
                            value={form.description} 
                            onChange={handleInputChange} 
                            rows="8" 
                            maxLength={20000}
                            autoComplete="off"
                            id="description"
                            required 
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Save the story
                    </button>
                </form>
            </div>
        </div>
       </>
    );
}