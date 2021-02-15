let express = require("express"),
    bodyParser = require("body-parser"),
    // nodemon = require("nodemon"),
    app = express();

const port = process.env.PORT || 80;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("home");
});


app.get("/check",(req,res)=>{
    res.render("check");
});

app.get("/about-us",(req,res)=>{
    res.render("about");
});

app.get("/past-members", (req, res) => {
    res.render("past-members", {
        members: {
            "2k20": [
                {
                    name: "Rohan Pratap Singh",
                    rank: "Student Advisor",
                    src: "Rohan Pratap Singh_2017.png"
                }
            ],
            "2k19": [
                {
                    name: "Harsh Panwar",
                    rank: "Project Manager"
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
                    rank: "Student Advisor"
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
                    rank: "Student Advisor"
                },
                {
                    name: "Lakshay Chauhan",
                    rank: "Student Advisor",
                    src: "Lakshay Chauhan_2014.png"
                },
                {
                    name: "Shivang Baweja",
                    rank: "Student Advisor"
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
                    rank: "Student Advisor"
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
                    rank: "Student Advisor"
                }               
            ]
        }
    });
});

app.get("/mentors", (req, res) => {
    res.render('mentors', {
        mentors: [
            {
                name: `Dr. N.S. Raghava`,
                rank: `Professor`,
                desc: `Department of I.T.
                Delhi Technological University
                Faculty Advisor`
            }, {
                name: `Madan`,
                rank: `Professor`,
                desc: `Department of Mechanical Engineering
                Delhi Technological University
                Faculty Advisor`
                }, {
            name: `Dr. Vikas Rastogi`,
            rank: `Professor`,
            desc: `Department of Mechanical Engineering
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
            "4-yrs": [{
                name: "Aniket Gupta",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Saurav Ahlawat",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Joyraj Bhowmick",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Parth Mahajan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Anurag Singh",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            }
            ],
            "3-yrs": [{
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            }
            ],
            "software": [{
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            }
            ],
            "avionics": [{
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            }
            ],
            "airframe": [{
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            }
            ],
            "corporate": [{
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Aman Virmani",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Tushant Verma",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nishkarsh Pandey",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            },
            {
                name: "Nitin Chauhan",
                rank: "lorem ipsum dolor sit amet",
                img: "",
                lkdn: "",
                mail: ""
            }
            ]
        }
    });
});

app.get("/systems",(req,res)=>{
    res.render("system");
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
                name: "Aarush-M",
                src: "/m2.jpg",
                desc: "Aarush-M is the younger sibling of Aarush. Drawing upon the same design philosophy to retain the precise and dependable flight experience, while featuring a smaller footprint and with reduced fuel consumption, this UAV is meant for missions where vehicle size matters."
            },
            {
                name: "Aquila 160",
                src: "/Aquila1.jpeg",
                desc: "Aquila 160 is a robust model, the proof of which can be seen in it’s long flying range which extends up to more than 100 Kilometers accompanied by multiple Fail-safes and endurance of up to 3 hours which is a result of it’s Hybrid Power System."
            },
            {
                name: "Avniel",
                src: "/plain.jpg",
                desc: " Avniel aims to explore the hyper spectral remote sensing applications in characterizing plant and soils for quantitative assessment. Plausible results have been obtained by flight testing of a fixed wing UAV and a multi-rotor boarded with infrared and visible wavelength ranged sensors. "
            },
            {
                name: "Castor",
                src: "/castor.jpg",
                side: 'right',
                desc: "Castor is a very structured and systematic model which is used for navigation or way-finding in areas denied of GPS. It has an efficient ‘Encrypted Wireless GCS Communication’ system which helps in its smooth  working. SLAM has a robust system due to which it can endure weather adversity, with multiple failsafes which makes it really user friendly.",
                specs: [
                    "Flight time: 40 min",
                    "Power system: Hybrid",
                    "Takeoff weight: 22 kgs",
                    "Payload: 1 kg",
                    "Delivery system: Autonomous",
                    "Navigation: GPS denied, Encrypted Wireless GCS communication",
                    "Endurance: 3 hrs"
                ]
            },
            {
                name: "Garuda",
                src: "/garuda.png",
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
                src: "/v1.jpg",
                desc: "Vihaan is a UAS which was developed for primary purpose for competing in SUAS competition in the year 2014. It incorporates a COTS airframe, Skywalker X-8 and uses a dedicated catapult launch system designed and developed in house for short take offs. The stock airframe was reinforced with carbon fibre for making the system more robust and sustain the elements.  ",
                side: "right"
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

app.get("/upcomin-projects", (req, res) => {
    res.render("upcomin_projects", {
        projs: [
            {
                name: "FPGA based UAV Controller",
                desc: "A Field Programmable Gate Array (FPGA) is essentially a re-programmable integrated circuit in the form of a chip. In contrast to a traditional Central Processing Unit (CPU), an FPGA can carry out various basic operations at the same time without competing for resources. Due to its reliability and flexibility, the FPGA is particularly suited for use in critical and high risk applications."
            },
            {
                name: "GPS Spoofing",
                desc: "GPS spoofing is an attack in which a radio transmitter located near the target is used to interfere with a legitimate GPS signals. The attacker can transmit no data at all or could transmit inaccurate coordinates. Recently, GPS spoofing attack on UAV has attracted widespread research interests due to the vulnerability of civilian GPS signal. GPS spoofing ensures that the UAV remains undetected and this is useful for UAV used in defense."
            },
            {
                name: "Morphed Wing UAVs",
                desc: "Morphing wings are changeable wing applications developed as a result of the need for a different lift and drag forces in various phases of the flight of aircraft. It is an application that enables altering the wing aspect ratio, wing airfoil, wing airfoil camber ratio, wing reference area etc. UAVs with morphing wing technology; may increase its payload ratio, may achieve a shorter take-off distance, may land and stop in shorter distance, may take-off where runway clearance is limited, has more efficient altitude change at lower engine RPMs, can obtain higher cruise speeds, may decrease its stall speed, may lower its drag if necessary, thus; saving energy and time."
            },
            {
                name: "Aggressive Control of UAVs",
                desc: "Well-developed features of autonomous UAV control include Aggressive Control which ensures that the UAV is able to maneuver testing conditions like constrained spaces, between trees etc. with no or  minimum human intervention. This technology is especially important since it is projected that the no of drones is going to increase exponentially and drones should be able to control themselves automatically."
            },
            {
                name: "Mechanical Arm on UGV",
                desc: "A 6DOF Robotic Arm and Unmanned Ground Vehicle (UGV) setup is being developed to revolutionize the field of soft-crop agriculture by automating crop harvesting and management interventions through implementation of visual-based crop detection deep learning models on the setup. The team is further looking forward to implement its existing swarming capabilities to create a swarm of crop harvesting UGV in the later stages of the project."
            },
            {
                name: "Mechanical Arm on UAV",
                desc: "The crew aims to develop an AI-based integrated system between the UAV and Robotic Arm, capable of object detection, tracking, and pick and drop capabilities (i.e collecting objects from water surfaces, twisting a doorknob, plucking fruit from trees, etc.)"
            },
            {
                name: "Aggressive Control of UAVs: Passing through constrained spaces",
                desc: "UAVs capable of aggressive maneuvres to conduct task-specific activities (i.e throwing a ball through a window) along with the ability to fly across heavily constrained and restricted areas (i.e In between circular loops, tree branches, and cable wires). These applications of minimum snap trajectory control will be highly beneficial in conducting multi-variant tasks and rapid collection of Intelligence, Surveillance, and Reconnaissance (ISR) information in the urban areas."
            },
            {
                name: "Designing and Fabrication of fixed-wing UAV having Morphing Characteristics",
                desc: "We are working towards equipping our UAVs with Morphing characteristic designs in the near future. The wings of these UAVs would be having the provision to change their shape seamlessly in order to provide optimal performance according to external conditions and also to adapt themselves for mission-specific tasks in order to achieve optimum endurance."
            }
        ]
    })
});

app.get('/upcoming_events',(req,res)=>{
    res.render("upcomin_events");
});

app.get('/:id', (req, res) => {
    let uavs = [
        {   
            name: "Aarush X1",
            img: "/x1c.jpg",
            svg: "/transparents/17.png",
            desc: "Fully Autonomous Navigation System.Robust NLOS C2  over L band and S Band COFDM based technology. High definition real-time surveillance with 40x zoom capability. Operational in cross-winds of 37 km/h and gusts of 46 km/h. Mid-air restart in case of engine failure.",
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
                "Autopilot: Piccollo-II",
                "Take-off distance: 80 m (260 ft.)",
                "Landing distance: 70 m (230 ft.)",
                "DashSpeed: 130 kph (80 mph)",
                "Data Link: 2.4 Ghz C2  over COFDM based link"
            ]
        },
        {
            name: "Aarush X2",
            img: "/x2a.jpg",
            svg: "/transparents/18.png",
            desc: "Aarush X2 is the optimized version of Aarush X1. Drawing upon the same design philosophy to retain the precise and dependable flight experience, while featuring a smaller footprint and with reduced fuel consumption, this UAV is meant for missions where vehicle size matters.It features significant improvements over Aarush X1 in terms of structural design and the use of lightweight composite sandwitch structure for its construction. It also has a more efficent low-drag fuselage design over Aarush X1. Another feature of Aarush X2 is that it can deploy either an electric propulsion system or a gas engine for its propulsion depending on mission requirements, making Aarush X2 a versatile UAV.",
            specs: [
                "Setup time: 30 minutes",
                "Endurance Gas Engine: 6-8 hours",
                "Endurance Electric Motor: 40 min ",
                "Wingspan: 122 inches ",
                "Payload: 14 pounds ",
                "Gross takeoff weight: 40 pounds"            
            ]
        },
        {
            name: "Aarush-M",
            img: "/m2.jpg",
            svg: "/m2.jpg",
            desc: "Aarush-M is the younger sibling of Aarush. Drawing upon the same design philosophy to retain the precise and dependable flight experience, while featuring a smaller footprint and with reduced fuel consumption, this UAV is meant for missions where vehicle size matters.",
            specs: [
                "Wheelbase : 650mm",
                "GTOW: 2.5 kg ",
                "Payload: 1.5 kg ",
                "Endurance: 20 minutes ",
                "Cruise speed: 15 kmph"            
            ]
        },
        {
            name: "Aquila 160",
            img: "/gaia2.jpg",
            svg: "/transparents/19.png",
            desc: "Aquila 160 is a robust model, the proof of which can be seen in it’s long flying range which extends up to more than 100 Kilometers accompanied by multiple Fail-safes and endurance of up to 3 hours which is a result of it’s Hybrid Power System. The aircraft has a maximum takeoff weight of 22 Kilograms and a payload weight of 1 kilogram with Safe Autonomous Payload Delivery System. It is also capable of Human Detection and Geotagging irrespective of the time. It maintains complete autonomy in mission execution with the use of Artificial Intelligence complimented by GPS Denied Navigation. Moreover, it also has a wide range of Swarm Capabilities that can be controlled by more than one entity with a large scalability.",
            specs: [
                "Flying range > 100 kms",
                "Power system: Hybrid",
                "Takeoff weight: 22 kgs",
                "Payload: 1 kg",
                "Delivery system: Autonomous",
                "Navigation: GPS denied",
                "Endurance: 3 hrs"
            ]
        },
        {
            name: "Avniel",
            img: '',
            svg: "/transparents/8.png",
            desc: "The project aims to explore the hyper spectral remote sensing applications in characterizing plant and soils for quantitative assessment. Plausible results have been obtained by flight testing of a fixed wing UAV and a multi-rotor boarded with infrared and visible wavelength ranged sensors.",
            specs: [
                "GTOW: 8kg",
                "Payload: 3.5kg",
                "Wingspan: 2m",
                "Takeoff dist< 60ft",
                "Cruise speed: 13m/s",
                "Wood and aluminium framework"            
            ]
        },
        {
            name: "Castor",
            img: "/castor.jpg",
            svg: "/transparents/13.png",
            desc: "Castor is a very structured and systematic model which is used for navigation or way-finding in areas denied of GPS. It has an efficient ‘Encrypted Wireless GCS Communication’ system which helps in its smooth  working. It has a flight time of as much as 40 min, a coherent and compact design which makes it capable of high precision in locating and precise manoeuvring. The UAV includes localisation of a target and tracking it in 3D system, obstacle detection and avoidance which makes convenient to use. SLAM has a robust system due to which it can endure weather adversity, with multiple failsafes which makes it really user friendly.",
            specs: [
                "Flight time: 40 min",
                "Power system: Hybrid",
                "Takeoff weight: 22 kgs",
                "Payload: 1 kg",
                "Delivery system: Autonomous",
                "Navigation: GPS denied, Encrypted Wireless GCS communication",
                "Endurance: 3 hrs"
            ]
        },
        {
            name: "Garuda",
            img: "/garuda.png",
            svg: "/transparents/7.png",
            desc: "GARUDA, a modified Sig Rascal 110 R/C aircraft along with its Ground Control System is capable of performing autonomous flight & navigation, simultaneously gathering actionable surveillance data using optical sensors. The system includes commercially available autopilot system, Piccolo II for control & navigation with a customized imagery system capable of capturing & transmitting high definition images of the hostile territory simultaneously processing it to deliver actionable intelligence. The Ground Control Station (GCS) and the aircraft communicate in real time to provide situational awareness and safe and reliable flight. Modular in design the entire system can be brought to a flying state in less than 20 minutes.",
            specs: [
                "Wingspan: 110 Inches",
                "Empty weight: 18.7 lbs",
                "Launch Weight: 24.2 lbs",
                "Propulsion: Hacker A60 20x10 prop",
                "Power: 10s 5000mAh Thunder Power Li-Po",
                "Endurance: 23 min",
                "Cruise speed: 29 Knots",
                "Range: 1.6 mile LOS",
                "Wireless link: 2.4 Mhz (Data telemetry)",
                "5 Mhz (Imagery)",
                "Camera Canon G10, gimbal stabilized."            
            ]
        },
        {
            name: "Lazarus",
            img: "/tarrot.png",
            svg: "/transparents/8.png",
            desc: "Lazarus,controlled by the ArduPilot Mega, an open-source autopilot is capable of following dynamically changing waypoints. Lazarus  provides real time reconnaissance to an Imagery terminal on ground using a gimbal stabilized point and shoot camera. The transmission of captured images takes place on a 2.4GHz secured wireless link. The received images are then processed for actionable intelligence. Modular in design,Lazarus can be brought to flying state in less than 40 minutes. Safety being of paramount importance in all aspects of UAS operations, anaconda   can be controlled by its Mission Control Centre over a 2.4 GHz secured wireless link as a Remotely Piloted Vehicle (RPV) and also by a 2.4 GHz Radio transmitter remote under full manual control.",
            specs: [
                "GTOW : 15.84 lbs",
                "Wingspan: 2.5metres",
                "Power: 10s Lipo 8000Mah",
                "Cruise Velocity: 14m/s",
                "Endurance: 35 minutes"
            ]
        },
        {
            name: "Tarrot",
            img: "tt3.jpg",
            svg: "/transparents/15.png",
            desc: "Fully Autonomous Navigation System. High definition real-time video downlink with 20x Zoom Capability. Operational in temperatures till 50oC. Returns to home in case of link loss. Auto Land in case of low battery.",
            specs: [
                "Wheelbase : 650mm",
                "GTOW: 2.5 kg ",
                "Payload: 1.5 kg ",
                "Endurance: 20 minutes ",
                "Cruise speed: 3.8m/s",
                "Communication range:10km",
                "Take-Off: VTOL",
                "Propulsion: 380KV 150W BLDC",
                "Autopilot: Pixhawk"
            ]
        },
        {
            name: "Vihaan",
            img: "/v1.jpg",
            svg: "/transparents/16.png",
            desc: "Vihaan is a UAS which was developed for primary purpose for competing in SUAS competition in the year 2014. It incorporates a COTS airframe, Skywalker X-8 and uses a dedicated catapult launch system designed and developed in house for short take offs. The stock airframe was reinforced with carbon fibre for making the system more robust and sustain the elements. It is used by the team for testing and evaluation of avionics and mechanical subsystems.",
            specs: [
                "Wingspan: 2.1 m",
                "Setup time: 1 hour",
                "Gross Takeoff Weight: 6 KGS",
                "Take Off: Catapult launcher",
                "Mechanical Range: 35 Km",
                "Payload: 2.5 Kg",
                "Endurance: 40 minutes",
                "Communication Range: 10 Km",
                "Landing: Belly landing",
                "Cruise Speed: 15 m/s",
                "Cieling: 2.5 Km",
                "Propulsion: BLDC Electric"
            ]
        }
    ];

    res.render('uav', { info: uavs[+req.params.id] }); 
});

app.listen(port,()=>{
    console.log("app is listening");
});
process.on("uncaughtException", () => console.log("error"));