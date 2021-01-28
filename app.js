let express = require("express"),
    bodyParser = require("body-parser"),
    nodemon  = require("nodemon"),
    app = express();

const port = 80;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    const signal = 1;
    res.render("home",{signal:signal});
});

app.get("/members", (req, res) => {
    res.render("members", {
        members: {
            "2019": [
                {
                    name: 'Harsh'
                }
            ]
        }
    });
});

app.get("/hangar",(req,res)=>{
    res.render("hangar", {
        hangar: [
            {
                src: "./tarrot.png",
                name: "Aarush X1",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "left"
            },
            {
                src: "./optimized-btni.png",
                name: "Aarush X2",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "left"
            },
            {
                src: "./tarrot.png",
                name: "Tarrot",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "right"
            },
            {
                src: "./optimized-btni.png",
                name: "Aarush X2",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "left"
            },
            {
                src: "./tarrot.png",
                name: "Tarrot",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use.",
                side: "right"
            }
        ]
    })
})
app.listen(port,()=>{
    console.log("app is listening");
});