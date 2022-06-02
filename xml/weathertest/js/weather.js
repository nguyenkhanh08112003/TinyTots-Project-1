'use strict';

var weatherApp = angular.module('weatherApp', []);
var lat;
var lon;

weatherApp.controller('WeatherCtrl', function ($scope, $http){
    $scope.Run = function () {
        lat = document.getElementById("lat").value;
        lon = document.getElementById("lon").value;
        $http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=c5fa5112984ef1d54f8eb90a645bba36&units=metric")
            .success(function (data) {
                if (data) {
                    $scope.current = data.main.temp;
                    $scope.temp_min = data.main.temp_min;
                    $scope.temp_max = data.main.temp_max;
                    $scope.wind_speed = data.wind.speed;
                    $scope.city = data.name;
                    $scope.lat = data.coord.lat;
                    $scope.lon = data.coord.lon;
                    $scope.country = data.sys.country;
                    $scope.icon = 'http://openweathermap.org/img/wn/10d@2x.png';
                    $scope.clouds = data.clouds ? data.clouds.all : undefined;

                    var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                    if ($scope.clouds < 20) {
                        $scope.img_url = baseUrl + 'sunny.png';
                    } else if ($scope.clouds < 90) {
                        $scope.img_url = baseUrl + 'partly_cloudy.png';
                    } else {
                        $scope.img_url = baseUrl + 'cloudy.png';
                    }
                }
            })
            .error(function (data, status) {
                console.log(data);
            })
    }
})