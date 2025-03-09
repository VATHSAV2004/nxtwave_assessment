const express=require("express");
const app=express()
app.use(express.json())
const {v4}=require("uuid")

let arr=[{id:1,title:"title1",description:"description1"}];

//api1

app.post("/tasks",(req,res)=>{

    const {id,title,description}=req.body;
    arr=[...arr,{id:arr.length+1,title,description}];
    res.send(arr);

})

//api 2
app.get("/tasks",(req,res)=>{

 res.send(arr);

})

//api3
app.get("/tasks/:id",(req,res)=>{
    
    const id=req.params.id;
    console.log(id);
    const data=arr.find((each)=>each.id==id)
    res.send(data);
   
   })

//api4

app.put("/tasks/:id",(req,res)=>{
    
    const id=req.params.id;
    const {title,description}=req.body;

    arr.map((each)=>{if(each.id==id){each.title=title;each.description=description;}})
    
   app.send("updated")
   })


//api 5

app.delete("/tasks/:id",(req,res)=>{
    
    const id=req.params.id;
    
   
   })


app.listen(3001,()=>{console.log("app running on port 3001")})


