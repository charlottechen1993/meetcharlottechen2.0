app.controller("portfolioCtrl", function($scope) {
    $scope.categoryName = "";
    
    $scope.categories = [
        {
            Name: "All",
            Number: 3,
            fa: "fa-paint-brush",
        },{
            Name: "Drawing",
            Number: 1,
            fa: "fa-paint-brush",
        },{
            Name: "Web",
            Number: 0,
            fa: "fa fa-file-code-o",
        },{
            Name: "Layout",
            Number: 2,
            fa: "fa fa-file-code-o",
        }
    ]
    
    $scope.projects = [
        {
            Title: "Kim So-Hyun Portrait",
            Category: "Drawing",
            Image: "portrait.jpg",
            Area: "Sketch"
        },{
            Title: "Lantern Night",
            Category: "Layout",
            Image: "lantern-night.jpg",
            Area: ""
        },{
            Title: "Formal",
            Category: "Layout",
            Image: "formal-2014.jpg",
            Area: ""
        },{
            Title: "Bella Notte",
            Category: "Layout",
            Image: "bella-notte.jpg",
            Area: ""
        }
    ]
    
    $scope.setCategoryName = function(cat){
        $scope.categoryName = cat;
    }
});