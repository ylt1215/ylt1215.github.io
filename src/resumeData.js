let resumeData = {
  name: "Yi-Lin (Jolin) Tsai",
  role: "Student @ Paul G. Allen School of Computer Science and Engineering, University of Washington",
  linkedinId:"yi-lin-tsai",
  //skypeid: "jolintsai1215",
  //roleDescription: "I am a student majoring in computer science at the University of Washington - Seattle, 2022 graduation expected.",
  socialLinks:[
      {
        name:"linkedin",
        url:"https://www.linkedin.com/in/yi-lin-tsai",
        className:"fa fa-linkedin"
      },
      // {
      //   name:"github",
      //   url:"http://github.com/",
      //   className:"fa fa-github"
      // },
      // {
      //   name:"skype",
      //   url:"http://skype.com",
      //   className:"fa fa-skype"
      // }
    ],
  aboutme:"I am pursuing B.S. in computer science at the University of Washington. I am interested in but not limited to software engineering, machine learning, and computational biology. Currently, I am looking for software engineer internships and research opportunities involved in using techniques of computer science on problems in medicine.",
  education:[
    {
      UniversityName:"University of Washington",
      specialization:"Computer Science",
      MonthOfPassing:"September",
      YearOfPassing:"2019",
      MonthOfGraduation:"June",
      YearOfGraduation:"2022",
      Achievements:""
    }
  ],
  work:[
    {
      CompanyName:"First Code Academy",
      specialization:"Coding Instructor",
      MonthOfStarting:"June",
      YearOfStarting:"2018",
      MonthOfLeaving:"August",
      YearOfLeaving:"2018",
      description1:"Taught elementary and middle school students the fundamentals of programming and app development using App Inventor.",
      description2:"Refined the course content for the Python class to make it more suitable for middle schoolers."
    }
  ],
  projects:[
    {
      projectName:"SpamOrHam",
      description1:"Applied Naive Bayes Theorem to classify emails are spam or not in Java.",
      description2:"Calculated the probability of spam and ham for each word in training data and stored each word and its corresponding probability in two HashMap data structure.",
      description3:"Outputed the test email as spam if its probability of spam is greater than 0.5."
    },
    {
      projectName:"Tetris Game",
      description1:"Developed a classic tetris game in Java utilizing the concepts of class relationships, 2d array, and unit testing.",
      description2:"Implemented the Tetris pieces inherited from the abstract piece class with its own features.",
      description3:"Created tests for the rotation of a piece and the elimination of a full row."
    },
    {
      projectName:"SnapShop",
      description1:"Developed a Photoshop-like program for image processing in Java.",
      description2:"Provided different filters for the user to apply on the uploaded image.",
      description3:"Used 2d array as a matrix transformation to change the property of each image pixel."
    }
  ],

  skillsDescription:"",
  skills:[
    {
      skillname:"Reactjs",
      level:90,
    },
    {
      skillname:"HTML5",
      level:70,
    },
    {
      skillname:"CSS",
      level: 80,
    },
  ]
}

export default resumeData
