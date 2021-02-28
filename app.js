const express=require("express")
const ejs=require("ejs")
const bodyParser=require("body-parser")



const app=express();
var items=["rooti","kapda","makan"];
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{

var today=new Date();
var option={
    weekday:"long",
    day:"numeric",
    month:"long",
};

var day=today.toLocaleDateString("en-US", option)
res.render("list",{kindOfDay:day,
    newListItems:items});
});

app.post("/",(req,res)=>{
 var item=  req.body.newItem;
 items.push(item)
 console.log(item);
 res.redirect("/")
});

app.listen(3000,()=>{
    console.log("3000 server is running")
});