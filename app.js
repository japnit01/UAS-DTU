let express = require("express"),
    bodyParser = require("body-parser"),
    nodemon  = require("nodemon"),
    app = express();

const port = 80;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.static( "public" ));

app.get("/",(req,res)=>{
    const signal = 1;
    res.render("home",{signal:signal});
});

app.get("/hangar",(req,res)=>{
    res.render("hangar")
})
app.listen(port,()=>{
    console.log("app is listening");
});

