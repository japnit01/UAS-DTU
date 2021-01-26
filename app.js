let express = require("express"),
    bodyParser = require("body-parser"),
    nodemon  = require("nodemon"),
    app = express();

const port = 80;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/hangar",(req,res)=>{
    res.render("hangar")
})
app.listen(port,()=>{
    console.log("app is listening");
});

