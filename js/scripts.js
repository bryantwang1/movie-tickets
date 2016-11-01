var firstReleases = ["Sausage Party", "Fleabag", "Rogue One"];
var postMatineeTimes = ["6pm", "8pm", "10pm"];

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = 10;
}
Ticket.prototype.priceAdjuster = function() {
  if(firstReleases.includes(this.movie) === false) {
    this.price -= 2;
  }

  if(postMatineeTimes.includes(this.time) === false) {
    this.price -= 2;
  }

  if(age === "under12") {
    this.price -= 1;
  }
  if(age === "senior") {
    this.price -= 2;
  }
  if(age === "superSenior") {
    this.price = 0;
  }
}

// UI below this line.
$(function() {
  $("#ticket-select").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("select#movie").val();
    var inputtedTime = $("select#time").val();
    var inputtedAge = $("select#age").val();

    var userTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    console.log(userTicket);
    userTicket.priceAdjuster();
    console.log("After processing: $" + userTicket.price);

    $(".results").show();
    $("#movie-name").text(userTicket.movie);
    $("#movie-time").text(userTicket.time);
    $("#movie-price").text(userTicket.price);
  });
});
