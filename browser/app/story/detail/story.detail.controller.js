'use strict';

app.controller('StoryDetailCtrl', function ($scope, story, users) {
  $scope.story = story;
  $scope.users = users;
  $scope.currentUser = LoginFactory.getCurrentUser();
  $scope.$watch('story', function () {
    $scope.story.save();
  }, true);
});
