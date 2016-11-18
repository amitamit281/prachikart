
   app = angular.module('zoombie', ['restangular']);

// Configure the application
app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl(
    'http://angularized.getsandbox.com');
  // Note that we run everything on the localhost
});

// Define the controller
app.controller('service-controller', function($scope, Restangular) {
  var vm = this;
  Restangular.all('titles').getList().then(function(result) {
    vm.titles = result;
  });
});

// Standardize data format (extract from meta-data where needed)
app.config(function(RestangularProvider) {
  // add a response intereceptor
  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    var extractedData;
    // .. to look for getList operations
    if (operation === "getList") {
      // .. and handle the data and meta data
      extractedData = data.photoset.photo;
    } else {
      extractedData = data;
    }
    return extractedData;
  });
});