const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config();


const app = express()
const port = 8000;
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to mongodb")
}).catch((error)=>{
    console.log("error connecting to mongodb",error)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });