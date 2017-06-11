zoombeiApp.controller('product', function ($scope, $filter) {
    // $scope.init = function () {
        $scope.all_list = [
            {name: 'Electronics ', list: 'E1', price: 1000},
            {name: 'Electronic ', list: 'E2', price: 120},
            {name: 'Electronic ', list: 'E3', price: 850},
            {name: 'Fashion ', list: 'F1', price: 770},
            {name: 'Fashion ', list: 'F2', price: 560},
            {name: 'Fashion ', list: 'F3', price: 440},
            {name: 'Home ', list: 'H1', price: 340},
            {name: 'Home ', list: 'H2', price: 990},
            {name: 'Home ', list: 'H3', price: 450},
            {name: 'Books ', list: 'B1', price: 560},
            {name: 'Books ', list: 'B2', price: 770},
            {name: 'Books ', list: 'B3', price: 110},
            {name: 'Toys ', list: 'T1', price: 900},
            {name: 'Toys ', list: 'T2', price: 550},
            {name: 'Toys ', list: 'T3', price: 760}
        ];
        //////////////////////////search sort logic//////////////////
    $scope.filterParams = {
        nameSearch: '',
        order: ['price', 'list'],
        priceRange: {
            start: 0,
            end: 0
        }
    };
    $scope.priceRangeOptions = [
        {start: 100, end: 200},
        {start: 200, end: 300},
        {start: 300, end: 400},
        {start: 400, end: 500},
        {start: 500, end: 600},
        {start: 600, end: 700},
        {start: 700, end: 800},
        {start: 800, end: 900},
        {start: 900, end: 1000}
    ];

    $scope.priceRangeDisplayOptions = [
        '100 - 200', '200 - 300', '300 - 400'
    ];


    $scope.updateFilter = function () {
        var filtered;
        filtered = $filter('filter')($scope.all_list, {name: $scope.filterParams.nameSearch});
        filtered = $filter('orderBy')(filtered, $scope.filterParams.order);
        // filtered = $filter('byPriceRange')($scope.all_list, 'price', $scope.filterParams.priceRange);
        $scope.filteredList = filtered;
    };

    $scope.$watchCollection('filterParams', function (newNames, oldNames) {
        $scope.updateFilter();
    });
    $scope.updateFilter();
    $scope.filterByPriceRange = function() {
        var modelIndex = $scope.priceRangeDisplayOptions.indexOf($scope.priceRange);
        var selectedStartRange = $scope.priceRangeOptions[modelIndex].start, selectedEndRange = $scope.priceRangeOptions[modelIndex].end;
        if(selectedStartRange ===0 && selectedEndRange === 0) {
            return;
        }
        return function predicateFunc(obj) {
            return selectedStartRange <= obj['price'] && obj['price'] <= selectedEndRange;
        };
    };

    // $scope.byPriceRange = function(fieldName, priceRange) {
    //     var selectedStartRange = priceRange.start, selectedEndRange = priceRange.end;
    //     if(selectedStartRange ===0 && selectedEndRange === 0) {
    //         return;
    //     }
    //     return function predicateFunc(obj) {
    //         return selectedStartRange <= obj[fieldName] && obj[fieldName] <= selectedEndRange;
    //     };
    // };

});

