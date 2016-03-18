var apiKey = require("./../.env").apiKey;
var getRepos = require("./../js/github.js").getRepos;

$(document).ready(function() {
  $('#search').click(function() {
    var username = $('#username').val();
    var repos = getRepos(username);
    console.log(repos);

  });
});
