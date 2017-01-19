

 
   zoombeiApp.controller('service-controller',function(network,$scope)
   {
    network.get("https://www.flickr.com/cameraroll").then(function(success){

                            if(!success){
                                $scope.success = false;
                                $scope.message = "No record found.";
                            }else{                              
                                $scope.commissionrates=success.content;                             
                                $scope.totalElements=success.totalElements;
                                $scope.numberOfElements=success.numberOfElements;
                                
                            }
                            
                            },function(failure){
                                    $scope.success = false;
                                    $scope.message = "We are experiencing some error. Try Again!";
                                }
                                
                              ); 
   }); 
// Configure the application
