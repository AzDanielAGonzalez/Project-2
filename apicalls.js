$(document).on("click","#icon-vcard", function(){
    
    $(".card-body").empty();
    event.preventDefault;
    var queryUrl = "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=496e966f5c324e3080abd07b9111c5c3";
  $.ajax({
    url: queryUrl,
    method: "GET"
  })
   .then(function(response) {
     var results = response.articles;
     console.log(results[0]["description"]);
 
          $('#newsDiv').append('<p>Title: ' + results[0]["description"] + "</p>");
         
     });
 
    
   });