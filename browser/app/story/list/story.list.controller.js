'use strict';

app.controller('StoryListCtrl', function ($scope, stories, Story, users, LoginFactory) {
  $scope.stories = stories;
  $scope.users = users;
  $scope.currentUser = LoginFactory.getCurrentUser();
  $scope.newStory = new Story();

  $scope.removeStory = function (story) {
    story.destroy()
    .then(function () {
      var idx = $scope.stories.indexOf(story);
      $scope.stories.splice(idx, 1);
    });
  };

  $scope.isAuthor = function(story) {
    return story.author_id === $scope.currentUser.id;
  }

  $scope.addStory = function () {
    $scope.newStory.save()
    .then(function (created) {
      // created.author = $scope.newStory.author;
      $scope.newStory = new Story();
      $scope.stories.unshift(created);
    });
  };
});
