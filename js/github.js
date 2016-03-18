var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
 $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
   var repos = response;
   console.log(repos);
   for(var i = 0; i < response.length; i++)
      $("#repoName").append("<li>" + response[i].name + "</li>");
   for(var i = 0; i < response.length; i++)
      $("#repoDescription").append("<li>" + response[i].description + "</li>");

  }).fail(function(error){
   console.log(error.responseJSON.message);
  });
 };
