var guess = document.getElementById("guess");
var result = document.getElementById("result");
var playAgain = document.getElementById("play-again");

function guessNumber() {
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  var guessedNumber = parseInt(guess.value);
  var message = "";

  if (isNaN(guessedNumber) || guessedNumber > 10 || guessedNumber < 1) {
    message = "Please enter a valid number";
  } else if (guessedNumber < randomNumber) {
    message = "Too low!";
  } else if (guessedNumber > randomNumber) {
    message = "Too high!";
  } else {
    message = "You guessed it!";
    result.style.color = "green";
    playAgain.style.display = "inline-block";
    document.getElementById("submit").style.display = "none";
    playAgain.addEventListener("click", function() {
      location.reload();
    });
  }

  result.innerHTML = message;
}
