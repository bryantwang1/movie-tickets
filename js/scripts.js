var firstReleases = ["Sausage Party", "Fleabag", "Rogue One"];
var postMatineeTimes = ["6pm", "8pm", "10pm"];
var ratedRMovies = ["Enter the Void", "Sausage Party", "Fleabag"]
var ratedPG13Movies = ["Unbreakable", "Rogue One", "Man On wire"]
// Constructor for a Ticket object
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = 10;
}
// Creates a priceAdjuster method for Ticket objects that adjusts the price depending on the other properties.
Ticket.prototype.priceAdjuster = function() {
  if(firstReleases.includes(this.movie) === false) {
    this.price -= 2;
  }

  if(postMatineeTimes.includes(this.time) === false) {
    this.price -= 2;
  }

  if(this.age === "under12") {
    this.price -= 1;
  }
  if(this.age === "senior") {
    this.price -= 2;
  }
  if(this.age === "superSenior") {
    this.price = 0;
  }
}
// Checks if the user's age is appropriate for the movie selected.
function ageChecker (age, movie) {
  if(age === "under12" && ratedRMovies.includes(movie) || age === "under12" && ratedPG13Movies.includes(movie)) {
    $("#age-warning").text("You're way too young for this movie, youngster!");
  } else if(age === "teen" && ratedRMovies.includes(movie)) {
    $("#age-warning").text("You'll have to bring your mommy or daddy to watch this.");
  } else if(age === "superSenior") {
    $("#age-warning").text("Enjoy your free movie; you've earned it, old-timer.")
  } else {
    $("#age-warning").text("");
  }
}
// Checks if inputs are blank and shows the relevant warning messages if they are.
function blankChecker(movie, time, age)

// UI below this line.
$(function() {
  $("#ticket-select").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("select#movie").val();
    var inputtedTime = $("select#time").val();
    var inputtedAge = $("select#age").val();

    ageChecker(inputtedAge, inputtedMovie);
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
