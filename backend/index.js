const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const mongoose =require("mongoose");
const Signup =require("./models/Signup.js");
const Legends =require("./models/Legends.js");
const Story = require("./models/Story.js");
const Questions = require("./models/Questions.js");

app.use(cors());
app.use(express.json());
//----------------------------------------------------------------------------------------
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ShadowTalesDB');
}

//----------------------------------------------------------------------------------------
app.post("/signup", async(req,res)=>{
     try{
        const newUser = new Signup(req.body);
        await newUser.save();
        res.status(200).json({message:"User Created Successfully!"});
     } catch (error){
        console.log("Backend Error:",error.message);
        res.status(400).json({error:"Failed to save user"});
     }
});

//----------------------------------------------------------------------------------------
app.get("/api/legends/:stateName", async (req,res)=>{
   try{
    const state = req.params.stateName.toLowerCase();
    const data = await Legends.find({stateTag: state});

    res.json(data);
   }catch(err){
    res.status(500).send("No data found");
   }
});

//----------------------------------------------------------------------------------------
app.post("/api/add-legend", async(req,res)=>{
   const {title, author, stateTag, description} = req.body;

   try{
      const newStory = new Story({
      title,
      author,
      stateTag,
      description
   });

   await newStory.save();
   res.status(201).json({message:"Story Added"});
   }catch(err){
      console.log("DB save error:", err.message);
      res.status(500).json({error:"Server Error"});
   }
});

//----------------------------------------------------------------------------------------
app.post("/signin", async(req,res)=>{
   const { email, password } = req.body;
   try{
      const user = await Signup.findOne({email: email});
      if(!user){
         return res.status(404).json({message:"User does not exist! Please Signup first"});
      }
      if(user.password === password){
         const userId = user._id;
         res.status(200).json({message:"Welcome back!", userId})

      }
      else{
         res.status(401).json({message:"Incorrect password or email! Please try again"});
      }
      }catch(err){
         console.error(err);
         res.status(500).json({message:"Server error", err: err.message});
         console.log(err);
      }
});
//----------------------------------------------------------------------------------------

app.get("/api/questions", async (req,res)=>{
  try{
    const questions = await Questions.find();
   res.json(questions);
  }catch(err){
   res.status(500).json({message:"Question not found"});
  }
});
//----------------------------------------------------------------------------------------

app.post("/api/user/delete", async(req,res)=>{
   try{
      const userId = req.body.id;
      if(!userId){
         return res.status(400);
      }

      const deleteUser = await Signup.findByIdAndDelete(userId);
      if(deleteUser){
         return res.status(200).json({message: "Deleted successfully"});
          
      }else{
         return res.status(404);
      }
   }catch(err){
      console.error(err,"Server error status (500)");
   }
})

//----------------------------------------------------------------------------------------
app.post("/api/lcount", async (req,res)=>{
   try{
      const storyId = req.body.id;
   const newCount = req.body.likes;

   const response = await Story.findByIdAndUpdate(storyId, {likes:newCount}, {new:true});
  return res.status(200).json({message:"Likes saved"});
   }catch(err){
   return res.status(500).json({messsage:"problem",err: err.message});
   }
})

//----------------------------------------------------------------------------------------
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})