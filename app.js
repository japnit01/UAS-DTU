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
            name: `Dr. Vikas Rastogi`,
            rank: `Professor`,
            desc: `Department of Mechanical Engineering
            Delhi Technological University
            Faculty Advisor`
            }, {
            name: `Dr. N.S. Raghava`,
            rank: `Professor`,
            desc: `Department of I.T.
            Delhi Technological University
            Faculty Advisor`
            }, {
            name: `Prof. P.B. Sharma`,
            rank: `Former Vice Chancellor`,
            desc: `Delhi Technological University`
            }, {
            name: `Prakash M. Sesha`,
            rank: `Program Manager`,
            desc: `Lockheed Martin Corporate
            Engineering & Technology, USA`
            }, {
            name: `Dr. D.S. Nagesh`,
            rank: `Professor`,
            desc: `Department of Mechanical Engineering
            Delhi Technological University`
            }, {
            name: `John Sheeshan`,
            rank: `Sr. Systems Engineer`,
            desc: `Lockheed Martin Corporate
            Engineering & Technology
            USA`
            }, {
            name: `Guy Bradley`,
            rank: `Manager`,
            desc: `Northrop Grumman Corporation
            Former Avionics Chief
            US Navy`
            }, {
            name: `Peter Drewes`,
            rank: `Senior Manager, Corporate`,
            desc: `Engineering & Technology
            Lockheed Martin Corporate
            Engineering & Technology, USA`
            }
        ]
    });
});

app.get("/curr-members", (req, res) => {
    res.render("curr-members", {
        members: {
            "4-yrs": [
                {
                    name: "Saurav Ahlawat",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Aniket Gupta",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Saurav Ahlawat",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Aniket Gupta",
                    rank: "lorem ipsum dolor sit amet"
                }
            ],
            "3-yrs": [
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                }
            ],
            "2-yrs": [
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                }
            ],
            "1-yrs": [
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Aman Virmani",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Tushant Verma",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nishkarsh Pandey",
                    rank: "lorem ipsum dolor sit amet"
                },
                {
                    name: "Nitin Chauhan",
                    rank: "lorem ipsum dolor sit amet"
                }
            ]
        }
    });
});

app.get("/hangar",(req,res)=>{
    res.render("hangar", {
        hangar: [
            {
                name: "Aarush X1",
                src: "/aarush1_front.jpg",
                desc: "Aarush is a prototype of the UAV developed with financial resources and engineering mentoring support from Lockheed Martin Corporation. Traffic Management, Geomatics, Mining Surveillance, Border patrol are just some of the areas in which this UAV can be put to effective, efficient use."
            },
            {
                name: "Aarush X2",
                src: "/aarush2_front2.png",
                desc: "Aarush X2 is the optimized version of Aarush X1. Drawing upon the same design philosophy to retain the precise and dependable flight experience, while featuring a smaller footprint and with reduced fuel consumption, this UAV is meant for missions where vehicle size matters."
            },
            {
                name: "Avniel",
                src: "/plain.jpg",
                desc: " Avniel aims to explore the hyper spectral remote sensing applications in characterizing plant and soils for quantitative assessment. Plausible results have been obtained by flight testing of a fixed wing UAV and a multi-rotor boarded with infrared and visible wavelength ranged sensors. "
            },
            {
                name: "Garuda",
                src: "/plain.jpg",
                desc: "GARUDA, a modified Sig Rascal 110 R/C aircraft along with its Ground Control System is capable of performing autonomous flight & navigation, simultaneously gathering actionable surveillance data using optical sensors. "
            },
            {
                name: "Lazarus",
                src: "/plain.jpg",
                desc: "Lazarus, designed to meet the objectives of AUVSI student UAS competition. Lazarus is a modified Sig Rascal 110 R/C aircraft controlled by the ArduPilot Mega, an open-source autopilot. Capable of following dynamically changing waypoints, ANACONDA  provides real time reconnaissance to an Imagery terminal on ground using a gimbal stabilized point and shoot camera."
            },
            {
                name: "Tarrot",
                src: "/tarrot.png",
                desc: "The project aims to explore the hyper spectral remote sensing applications in characterizing plant and soils for quantitative assessment. Plausible results have been obtained by flight testing of a fixed wing UAV and a multi-rotor boarded with infrared and visible wavelength ranged sensors. "
            },
            {
                name: "Vihaan",
                src: "/plain.jpg",
                desc: "Vihaan is a UAS which was developed for primary purpose for competing in SUAS competition in the year 2014. It incorporates a COTS airframe, Skywalker X-8 and uses a dedicated catapult launch system designed and developed in house for short take offs. The stock airframe was reinforced with carbon fibre for making the system more robust and sustain the elements.  "
            }            
        ]
    });
});

app.get('/achievements', (req, res) => {
    res.render('achievements', {
        achievs: [
            {
            name: "Drone Olympics 2019",
            desc: "The team ranked 1st in the Formation Flying category and was awarded a cash prize of Rs.5 Lakh"
            }, {
            name: "AUVSI SUAS 2018",
            desc: "The team ranked 2nd in the Design amongst a total of 63 teams worldwide with a cash barrel of $1600."
            }, {
            name: "SAE INDIA 2018",
            desc: "The team secured 1st position overall in both Regular and Micro classes. The competition was held in the presence of officials from DRDO and ISRO. "
            }, {
            name: "SAE INDIA 2017",
            desc: "In SAE INDIA Aero Design Challenge UAS DTU achieved 1st position in Regular Class. Also had best Technical Presenation "
            }, {
            name: "TATA UAV Launchpad",
            desc: "UAS DTU achieved 2nd position."
            }, {
            name: "UAV Flytron",
            desc: "Team UAS-DTU won the third prize in UAV Flytron organized by PEC, Chandigarh on 25-26 February 2017. The team was awarded a cash prize of Rs. 40000."
            }
        ]
    })
});

app.get('/:id', (req, res) => {
    let uavs = [
        {
            name: "Aarush X1",
            img: "/gaia2.jpg",
            svg: "/transparents/Gaia.svg",
            desc: "Fully Autonomous Navigation System. Robust NLOS C2  over L band and S Band COFDM based technology. High definition real-time surveillance with 40x zoom capability. Operational in cross-winds of 37 km/h and gusts of 46 km/h. Mid-air restart in case of engine failure.",
            specs: [
                "Span: 12 ft. (3.6 m)",
                "GTOW: 37 kg (75 lbs.) ",
                "Payload: 5-10 kg (15 lbs) ",
                "Endurance: 6 hrs ",
                "Cruise speed: 70 kph (43 mph)",
                "Propulsion: 50 cc, 5 HP 2-stroke gas engine with 500 watt on-board starter",
                "Weight: 10kg(22 lbs)",
                "Mechanical Range: 400 km (250 mi)",
                "Communication Range: 1 km NLOS and 30 km LOS",
                "Autopilot: Piccollo -II",
                "Take-off distance: 80 m (260 ft.)",
                "Landing distance: 70 m (230 ft.)",
                "DashSpeed: 130 kph (80 mph)",
                "Data Link: 2.4 Ghz C2  over COFDM based link"
            ]
        },
        {
            name: "Tarrot",
            img: "/tarrot.png",
            desc: "Fully Autonomous Navigation System. High definition real-time video downlink with 20x Zoom Capability. Operational in temperatures till 50oC. Returns to home in case of link loss. Auto Land in case of low battery.",
            specs: [
                "Wheelbase: 650mm",
                "GTOW: 2.5 kg ",
                "Payload: 1.5 kg ",
                "Endurance: 20 minutes ",
                "Cruise speed: 3.8m/s",
                "Communication range: 10km",
                "Take-Off: VTOL",
                "Propulsion: 380KV 150W BLDC",
                "Autopilot: Pixhawk"
            ]
        }
    ];

    res.render('uav', { info: uavs[+req.params.id % 2] }); 
});

app.listen(port,()=>{
    console.log("app is listening");
});