const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const RegisterModels=require('./models/register')
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/trilokattamaker")
app.post('/login',(req, res)=>{
    const {email,password}= req.body;
    RegisterModels.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")

            }else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("no record existed")
        }
    
    })
        
})
app.post('/register',(req,res)=>{
    RegisterModels.create(req.body)
    .then(register=>res.json(register))
    .catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running.");
})






























// const express= require('express'),
// http=require('http');
// const hostname ='localhost';
// const port=8080;
// const app=express();
// app.use((req,res)=>{
//     console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body><h1>Register yourself</h1></body></html>');
// });
// const server=http.createServer(app);
// server.listen(port,hostname,()=>{
    
//     console.log(`server is running at http://${hostname}:${port}/`);})
