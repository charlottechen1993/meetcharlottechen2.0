app.controller("portfolioCtrl", function($scope) {
    $scope.categoryName = "";
    
    $scope.categories = [
        {
            Name: "All",
            Number: 3
        },{
            Name: "Drawing",
            Number: 1
        },{
            Name: "Web",
            Number: 0
        },{
            Name: "Layout",
            Number: 2
        }
    ]
    
    $scope.projects = [
        {
            Title: "A Girl",
            Category: "Drawing",
            Image: "portrait.jpg"
        },{
            Title: "Lantern Night",
            Category: "Layout",
            Image: "lantern-night.jpg"
        },{
            Title: "Formal",
            Category: "Layout",
            Image: "formal-2014.jpg"
        },{
            Title: "Bella Notte",
            Category: "Layout",
            Image: "bella-notte.jpg"
        },{
            Title: "A Girl",
            Category: "Drawing",
            Image: "portrait.jpg"
        },{
            Title: "A Girl",
            Category: "Drawing",
            Image: "portrait.jpg"
        },{
            Title: "A Girl",
            Category: "Drawing",
            Image: "portrait.jpg"
        }
    ]
    
    $scope.setCategoryName = function(cat){
        $scope.categoryName = cat;
    }
});