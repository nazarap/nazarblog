/**
 * Created by nazarco on 2/5/17.
 */
(function () {
    angular.module("mainApp")
        .factory("$background", function () {

            var backgroundList = [
                "background",
                "background2",
                "background3",
                "background4",
                "background5",
                "background6"
            ];

            return {
                get: function () {
                    return backgroundList[Math.floor(Math.random() * backgroundList.length)];
                }
            }
        })
})();
