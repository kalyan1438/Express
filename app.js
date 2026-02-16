import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello Server");
});
app.get("/info",(req,res)=>{
    res.send("Request Method:");
    console.log(req.method);
    console.log(req.url);

})
app.get("/greet",(req,res)=>{
    const name = req.query.name;
    const roll = req.query.roll;
    res.send(`Hello ${name}, your roll is ${roll}`);  

})
app.listen(3000,()=>{})