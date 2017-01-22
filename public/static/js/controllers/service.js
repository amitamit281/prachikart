

 
   zoombeiApp.controller('service-controller',function(network,$scope)
   {
    network.get("https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=2c0b0037d18b40910bd9afdae9aa85c2&user_id=147719802@N07&per_page=12&page=4&format=json&jsoncallback=?").then(function(success){

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
