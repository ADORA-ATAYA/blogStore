const mongoose = require('mongoose')
// const database = "mongodb+srv://tayal21:tayal@cluster0.bxtzdao.mongodb.net/tayal?retryWrites=true&w=majority"

const url = "mongodb://127.0.0.1:27017/blogStore"


const connectDB =()=>{
    return mongoose.connect(url)

    .then(()=>{
        console.log("Database connected...")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports = connectDB