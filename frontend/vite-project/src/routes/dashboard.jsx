import "../pages/dashboard.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate()
   const handleDelete = async ()=>{
   const confirmDelete = window.confirm("Do you really want to delete your account?");
   if(confirmDelete){
    try{
      const idValue = localStorage.getItem("myUserId");
      const response = await axios.post("http://localhost:5000/api/user/delete",{id: idValue});
      if(response.status === 200 || response.status === 201){
        alert("Account deleted");
        localStorage.clear();
       navigate("/");
      }
    }catch(err){
      console.log(err);
      alert("Error in deleting account");
    }
   }
   }

    return (

  <>
  <div className="dashboard-wrapper">
    
    <div className="diary-container">
  <h1 className="diary-title">SHADOW TALES </h1>
     <h3 className="diary-subtitle">Because every place hides a story....</h3>
        
        <div className="diary-content">
        <p>Welcome to Shadow Tales- a place where reality bends and stories comes alive. Dive into chilling
          urban legends from different states of india or become an author and share your own
          spooky tales.
        </p>
        
        <p>Every place has secrets. Some whispers.... some screams, because some stories are written....
          others are experienced.
        </p>
       
        <p>The choice is yours - read what others fear, or write what others will.</p>
         
         <p>Shadow Tales is built as a space for storytellers and explorers alike.
          Whether you are here to uncover eerie tales from different states or to
          contribute your own imagination, this platform connects stories to places.
          Each state holds a collection of voices - some inspired by real urban legends, 
          others born from pure creativity. As an author, your story becomes a part of 
          that map, waiting to be discovered by curious minds.
         </p>
         </div>
         </div>
     </div>
     <br></br>
             <hr></hr>
             <hr></hr>
             <div className="danger-div">
              <h2 className="danger-zone">DANGER ZONE</h2>
              <button className="delete-btn" onClick={handleDelete}>Delete Account</button>
             </div>

      </>
    );
};

export default Dashboard