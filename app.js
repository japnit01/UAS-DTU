let express = require("express"),
    bodyParser = require("body-parser"),
    nodemon  = require("nodemon"),
    app = express();

const port = 80;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/hangar",(req,res)=>{
    res.render("hangar", {
        hangar: [
            {
                src: "./tarrot.png",
                title: "Aarush X1",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "left"
            },
            {
                src: "./optimized-btni.png",
                title: "Aarush X2",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "left"
            },
            {
                src: "./tarrot.png",
                title: "Tarrot",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "right"
            },
            {
                src: "./optimized-btni.png",
                title: "Aarush X2",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "left"
            },
            {
                src: "./tarrot.png",
                title: "Tarrot",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "right"
            }
        ]
    })
})
app.listen(port,()=>{
    console.log("app is listening");
});