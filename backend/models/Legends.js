const mongoose =require("mongoose");

const storySchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    author : {
        type : String,
        required : true
    },

    description : {
        type :String,
        required :true
    },

    stateTag : {
        type : String,
        required : true
    },
     likes: {
        type: Number
    }
});

const Legends = mongoose.model("story", storySchema, "stories" );

module.exports = Legends;