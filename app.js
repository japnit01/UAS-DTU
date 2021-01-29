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

app.get("/past-members", (req, res) => {
    res.render("past-members", {
        members: {
            "2k19": [
                {
                    name: "Harsh Panwar",
                    rank: "Project Manager",
                    src: "Harsh Panwar_2019.png"
                },
                {
                    name: "Suvi Varshney",
                    rank: "Student Advisor",
                    src: "Suvi Varshney_2019.png"
                },
                {
                    name: "Akshath Singhal",
                    rank: "Student Advisor",
                    src: "Akshath Singhal_2019.png"
                }
            ],
            "2k18": [
                {
                    name: "Pransh Rana",
                    rank: "Project Manager",
                    src: "Pransh Rana_2018.png"
                },
                {
                    name: "Akash Garg",
                    rank: "Student Advisor",
                    src: "Akash Garg_2018.png"
                },
                {
                    name: "Harsh Raj Chauhan",
                    rank: "Student Advisor",
                    src: "Harsh Raj Chauhan_2018.png"
                },
                {
                    name: "Rishabh Dagur",
                    rank: "Student Advisor",
                    src: "Rishabh Dagur_2018.png"
                }
            ],
            "2k17": [
                {
                    name: "Rohan Pratap Singh",
                    rank: "Student Advisor",
                    src: "Rohan Pratap Singh_2017.png"
                }
            ],
            "2k16": [
                {
                    name: "A.L.G Prasad",
                    rank: "Student Advisor",
                    src: "ALG Prasad_2016.png"
                },
                {
                    name: "Divya Sanghi",
                    rank: "Student Advisor",
                    src: "Divya Sanghi_2016.png"
                },
                {
                    name: "Parth Chopra",
                    rank: "Student Advisor",
                    src: "Parth Chopra_2016.png"
                }
            ],
            "2k15": [
                {
                    name: "Devesh Sharma",
                    rank: "Student Advisor",
                    src: "Devesh Sharma_2015.png"
                },
                {
                    name: "Shivam Gautam",
                    rank: "Student Advisor",
                    src: "Shivam Gautam_2015.png"
                },
                {
                    name: "Vipul Aggarwal",
                    rank: "Student Advisor",
                    src: "Vipul Aggarwal_2015.png"
                }
            ],
            "2k14": [
                {
                    name: "Bhavya Narain Gupta",
                    rank: "Student Advisor",
                    src: "Bhavya Narain Gupta_2014.png"
                },
                {
                    name: "Harsh Aggarwal",
                    rank: "Student Advisor",
                    src: "Harsh Aggarwal_2014.png"
                },
                {
                    name: "Lakshay Chauhan",
                    rank: "Student Advisor",
                    src: "Lakshay Chauhan_2014.png"
                },
                {
                    name: "Shivang Baweja",
                    rank: "Student Advisor",
                    src: "Shivang Baweja_2014.png"
                }
            ],
            "2k13": [
                {
                    name: "Jayant Malani",
                    rank: "Student Advisor",
                    src: "Jayant Malani_2013.png"
                },
                {
                    name: "KVSR Hareen",
                    rank: "Student Advisor",
                    src: "KVSR Hareen_2013.png"
                },
                {
                    name: "Raghvendra Gautam",
                    rank: "Student Advisor",
                    src: "Raghvendra Gautam_2013.png"
                },
                {
                    name: "Rishi Raj Chopra",
                    rank: "Student Advisor",
                    src: "Rishi Raj Chopra_2013.png"
                },
                {
                    name: "Vaibhav Chauhan",
                    rank: "Student Advisor",
                    src: "Vaibhav Chauhan_2013.png"
                }
            ],
            "2k12": [
                {
                    name: "Gaurav Gupta",
                    rank: "Student Advisor",
                    src: "Gaurav Gupta_2012.png"
                },
                {
                    name: "Kumar Shaurya Shankar",
                    rank: "Student Advisor",
                    src: "Kumar Shaurya Shankar_2012.png"
                },
                {
                    name: "Nihar Khurana",
                    rank: "Student Advisor",
                    src: "Nihar Khurana_2012.png"
                },
                {
                    name: "Subhashish Sasmal",
                    rank: "Student Advisor",
                    src: "Subhashish Sasmal_2012.png"
                }
            ],
            "2k11": [
                {
                    name: "Abhay Kaul",
                    rank: "Student Advisor",
                    src: "Abhay Kaul_2011.png"
                },
                {
                    name: "Arjit Arora",
                    rank: "Student Advisor",
                    src: "Arjit Arora_2011.png"
                },
                {
                    name: "Gautam Madaan",
                    rank: "Student Advisor",
                    src: "Gautam Madaan_2011.png"
                },
                {
                    name: "Rochak Chadha",
                    rank: "Student Advisor",
                    src: "Rochak Chadha_2011.png"
                },
                {
                    name: "Sahil Kapoor",
                    rank: "Student Advisor",
                    src: "Sahil Kapoor_2011.png"
                }               
            ]
        }
    });
});

app.get("/mentors", (req, res) => {
    res.render('mentors', {
        mentors: [
            {
                name: ""
            }
        ]
    });
});

app.get("/curr-members", (req, res) => {
    res.render("curr-members", {
        members: [
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            },
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            },
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            },
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            },
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            },
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            },
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            },
            {
                name: "Aman Virmani",
                rank: "Team Captain"
            }
        ]
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
    });
});

app.listen(port,()=>{
    console.log("app is listening");
});