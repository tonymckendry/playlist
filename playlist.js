$(document).ready(function(){
  var getter = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object",
      method: "GET",
      dataType: "json"
    });
    console.log(getter)
    var albums = [];
      getter.done(function(response){
        console.log(response)
        for (var i = 0; i < response["results"].length; i++) {
          albums.push(response["results"][i].cover_art.toString());
          $("#top").append("<img id=album" + i + " src=images/" + albums[i] + ">")
          console.log(albums);
        }
        $("#album0").click(function(){
          $("#text").append("\nThe Police: Ghost in the Machine\n\n");
          $("#album0").remove()
          console.log("clicked")
        })
        $("#album1").click(function(){
          $("#text").append("Black Uhuru: Red\n\n")
          $("#album1").remove()
          console.log("clicked")
        })
        $("#album2").click(function(){
          $("#text").append("Pink Floyd: The Division Bell\n\n")
          $("#album2").remove()
          console.log("clicked")
        })
        $("#album3").click(function(){
          $("#text").append("Michael Jackson: Thriller\n\n")
          $("#album3").remove()
          console.log("clicked")
        })
        $("#album4").click(function(){
          $("#text").append("Adelle: 21\n\n")
          $("#album4").remove()
          console.log("clicked")
        })
      })
    })
$("#clearTracks").click(function(){
  location.reload();
})

$("#submitBin").click(function(){
    var sender = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/post",
      method: "POST"
    });
    sender.done(function(response){
      console.log(response);
      alert(response);
    })

      // console.log(sender);
})
