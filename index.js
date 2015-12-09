$(document).ready(function(){
  var getter = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      method: "GET",
      dataType: "json"
    });
var albums = [];
  getter.done(function(response){
    for (var i = 0; i < 3; i++) {
      var j = Math.round(Math.random()*4);
      console.log(j);
      albums.push(response["results"][j].cover_art.toString());
      $("#album"+i).append("<img src=images/" + albums[i] + ">")
    }
  })
})
