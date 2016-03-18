var apiKey = require('./../.env').apiKey;
var git = require('./../js/github.js');

$(document).ready(function() {
  $("#search").click( function() {
    var username = $("#username").val();
    git.getRepos(username);
    event.preventDefault();
  });
});
