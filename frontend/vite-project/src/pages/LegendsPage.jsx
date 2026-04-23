import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./LegendsPage.css";
import LikeButton from "./Likebutton";

export default function LegendsPage(){
    const {stateName} = useParams();

    const[stories, setStories] = useState([]); 

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/legends/${stateName}`)
        .then((res)=>{
            setStories(res.data);
        }).catch((err)=>{
            console.log("Fetching error:", err);
        });
        },[stateName]);


        return(
            <>
          <div className="legends-container">
        
        
        <h1 className="page-title">Stories of {stateName}</h1>

        
        {stories.map(function(item) {
              return (
                <div key={item._id} className="story-card">
                    <h2 className="story-title">{item.title}</h2>
                    <h3 className="story-author">By: {item.author}</h3>
                    <hr></hr>
                    <br></br>
                    <p className="story-desc">{item.description}</p>
                     <LikeButton storyId={item._id}
                                initialLikes={item.likes}/>
                </div>
            );

        })}
         
    </div>
                
            </>
        )
    }

