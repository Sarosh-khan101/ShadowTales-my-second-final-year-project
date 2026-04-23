   import { useState } from "react";
   import axios from "axios";

   export default function LikeButton({storyId, initialLikes}){
 
    const[heart, setHeart] = useState(false);
    const[count, setCount] = useState(initialLikes || 0);

    const toggle = async ()=>{
        setHeart(!heart);
        let newCount;
        if(heart){
             newCount = count-1 ;
            setCount(newCount);
        }else{
             newCount = count+1;
            setCount(newCount);
        }
        try{
        
                 await axios.post(`http://localhost:5000/api/lcount`,{likes:newCount, id: storyId});
            
        }catch(err){
                console.log(err);
        }
        }
    
 const color = {color:"red"};

    return(
        <>
        <div>
                     <span
                        onClick={toggle}>
                       {heart ? (
                            <i className="fa-solid fa-heart" style={color}></i>
                       ):(
                           <i className="fa-regular fa-heart"></i>
                       )}
                    &nbsp;
                     Likes = {count} </span>
                
        </div>
        </>
    )
   }
                