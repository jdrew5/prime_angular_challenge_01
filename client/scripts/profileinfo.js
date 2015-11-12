myApp.directive('profileInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "assets/views/profileinfo.html"
        }
    }
);