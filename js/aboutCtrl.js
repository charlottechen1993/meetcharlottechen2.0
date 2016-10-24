app.controller("aboutCtrl", function($scope) {
    $scope.skills = [
        {
            Name: "Capabilities"
        },{
            Name: "Programming"
        },{
            Name: "Design"
        },{
            Name: "Language"
        }
    ]
    
    $scope.levels=[
        {
            level: "Expert"
        },{
            level: "Advanced"
        },{
            level: "Intermediate"
        },{
            level: "Novice"
        },{
            level: ""
        }
    ]
    
    $scope.lang_levels=[
        {
            level: "Native/Bilingual"
        },{
            level: "Professional"
        },{
            level: "Proficient"
        },{
            level: "Elementary"
        },{
            level: ""
        }
    ]
    
    $scope.capabilties = [
        {
            CName: "UI/UX Design",
            CScore: 70
        },{
            CName: "Frontend Development",
            CScore: 50
        },{
            CName: "Graphic Design",
            CScore: 60
        },{
            CName: "Agile Scrum Methodology",
            CScore: 75
        },{
            CName: "Photography",
            CScore: 25
        }
    ]
     
     $scope.programming = [
        {
            PName: "Java",
            SubCat: [],
            PScore: 60
        },{
            PName: "Python",
            SubCat: [],
            PScore: 70
        },{
            PName: "C",
            SubCat: [],
            PScore: 50
        },{
            PName: "CSS",
            SubCat: ["SASS", "Bootstrap"],
            PScore: 75
        },{
            PName: "JavaScript",
            SubCat: ["JQuery", "AngularJS", "Isotope"],
            PScore: 50
        }
    ]
     
    $scope.designs = [
        {
            DName: "Photoshop",
            DScore: 50
        },{
            DName: "Illustrator",
            DScore: 75
        },{
            DName: "Indesign",
            DScore: 75
        },{
            DName: "Axure",
            DScore: 50
        },{
            DName: "Final Cut Pro",
            DScore: 25
        }
    ]
    
    $scope.languages = [
        {
            Language: "English",
            Proficiency: 100
        },{
            Language: "Mandarin Chinese",
            Proficiency: 100
        },{
            Language: "French",
            Proficiency: 50
        }
    ]
    
    $scope.jobs = [
        {
            Company: "Booz Allen Hamilton-SIG",
            Position: "Software Engineer",
            Image: "",
            Duration: "August 2016-Now",
        },{
            Company: "Pittsburgh Quantum Institute",
            Position: "UI Designer",
            Image: "pitt.jpg",
            Duration: "September 2015-April 2015",
        },{
            Company: "Booz Allen Hamilton-DIG",
            Position: "Software Engineering Intern",
            Image: "booz-intern.jpg",
            Duration: "May 2015-August 2015",
        },{
            Company: "Tsinghua University Academy of Arts & Design",
            Position: "Design Intern",
            Image: "tsinghua.jpg",
            Duration: "June 2013-July 2013",
        },{
            Company: "Chesapeake Bay Candle Company",
            Position: "Graphic Design Intern",
            Image: "chesapeake.jpg",
            Duration: "June 2012-July 2012",
        }
    ]
});