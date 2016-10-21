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
            PName: "HTML",
            SubCat: [],
            PScore: 75
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
});