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
        },{
            Name: "Photo",
            Number: 0
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
        }
    ]
    
    $scope.setCategoryName = function(cat){
        if(cat=="All")
            $scope.categoryName = "";
        else
            $scope.categoryName = cat;
    }
});