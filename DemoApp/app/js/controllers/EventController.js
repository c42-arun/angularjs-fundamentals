'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {                    
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 2,
                    level: 'Advanced',
                    abstract: 'In this session you will learn all about directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 1,
                    level: 'Beginner',
                    abstract: 'A closer lok at scopes',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controller',
                    creatorName: 'Jane Smith',
                    duration: 3,
                    level: 'Intermediate',
                    abstract: 'Controlers are your friends!',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);