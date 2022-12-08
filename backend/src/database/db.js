import mongoose from "mongoose"

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
},{timestamps:true})

 const todoDB =mongoose.model('task',todoSchema)

 export default todoDB