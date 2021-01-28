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
            "2k19": [
                {
                    name: "HARSH PANWAR",
                    rank: "Project Manager"
                },
                {
                    name: "SUVI VARSHNEY",
                    rank: "Student Advisor"
                },
                {
                    name: "AKSHATH SINGHAL",
                    rank: "Student Advisor"
                }
            ],
            "2k18": [
                {
                    name: "Pransh Rana",
                    rank: "Project Manager"
                },
                {
                    name: "Akash Garg",
                    rank: "Student Advisor "
                },
                {
                    name: "Harsh Raj Chauhan",
                    rank: "Student Advisor "
                },
                {
                    name: "Rishabh Dagur",
                    rank: "Student Advisor "
                }
            ],
            "2k17": [
                {
                    name: "Rohan Pratap Singh ",
                    rank: "Student Advisor"
                }
            ],
            "2k16": [
                {
                    name: "A.L.G Prasad",
                    rank: "Student Advisor"
                },
                {
                    name: "Divya Sanghi",
                    rank: "Student Advisor"
                },
                {
                    name: "Parth Chopra",
                    rank: "Student Advisor"
                }
            ],
            "2k15": [
                {
                    name: "Devesh Sharma",
                    rank: "Student Advisor"
                },
                {
                    name: "Shivam Gautam ",
                    rank: "Student Advisor"
                },
                {
                    name: "Vipul Aggarwal",
                    rank: "Student Advisor"
                }
            ],
            "2k14": [
                {
                    name: "Bhavya Narain Gupta  ",
                    rank: "Student Advisor"
                },
                {
                    name: "Harsh Aggarwal",
                    rank: "Student Advisor"
                },
                {
                    name: "Lakshay Chauhan ",
                    rank: "Student Advisor"
                },
                {
                    name: "Shivang Baweja ",
                    rank: "Student Advisor"
                }
            ],
            "2k13": [
                {
                    name: "Jayant Malani ",
                    rank: "Student Advisor"
                },
                {
                    name: "KVSR Hareen",
                    rank: "Student Advisor"
                },
                {
                    name: "Raghvendra Gautam",
                    rank: "Student Advisor"
                },
                {
                    name: "Rishi Raj Chopra",
                    rank: "Student Advisor"
                },
                {
                    name: "Vaibhav Chauhan",
                    rank: "Student Advisor"
                }
            ],
            "2k12": [
                {
                    name: "Gaurav Gupta",
                    rank: "Student Advisor"
                },
                {
                    name: "Kumar Shaurya Shankar ",
                    rank: "Student Advisor"
                },
                {
                    name: "Nihar Khurana ",
                    rank: "Student Advisor"
                },
                {
                    name: "Subhashish Sasmal ",
                    rank: "Student Advisor"
                }
            ],
            "2k11": [
                {
                    name: "Abhay Kaul  ",
                    rank: "Student Advisor"
                },
                {
                    name: "Arjit Arora ",
                    rank: "Student Advisor"
                },
                {
                    name: "Gautam Madaan",
                    rank: "Student Advisor"
                },
                {
                    name: "Rochak Chadha",
                    rank: "Student Advisor"
                },
                {
                    name: "Sahil Kapoor ",
                    rank: "Student Advisor"
                },
                
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