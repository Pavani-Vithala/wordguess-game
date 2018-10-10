

// This function is run onload of the page
window.onload = function () {
    var veggieList = ["carrots", "beans", "peas", "potato", "spinach", "tomatoes"];
    var CurrentWord = veggieList[Math.floor(Math.random() * veggieList.length)];
    var GuessesLeft=10;
    var wins = document.getElementById("WinCount");
    //var ChosenWord = document.getElementById("WordChoice");
    //var GuessCounter = document.getElementById("GuessesLeft");
    //GuessCounter = GuessesLeft;
   // var GuessedSofar = document.getElementById("LettersGuessed");
    document.getElementById("GuessesLeft").innerHTML = GuessesLeft;
    document.getElementById("WinCount").innerHTML = 0;
    console.log("CurrentVeggie is " + CurrentWord);
    console.log("length of veggie is  " + CurrentWord.length);
    console.log("GuessesLeft is " + GuessesLeft)
    // console.log("WinsCount "+wins);
    var WordChoice = [];
    var LetterGuessed = [];
    
    var Space = [""]
    for (var i = 0; i < CurrentWord.length; i++) {
        
           
            WordChoice[i] = "-"
           
       
    }
    document.getElementById("WordChoice").innerHTML = WordChoice;
    
    console.log("The Word Choice is  "+WordChoice);
    
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;
        console.log(userGuess);

        for (var j = 0; j < CurrentWord.length; j++) {
            if (userGuess === CurrentWord[j]) {
                WordChoice[j] = userGuess;
                document.getElementById("WordChoice").innerHTML = WordChoice;
                //WordChoice[j] = CurrentWord[j];
                document.getElementById("GuessesLeft").innerHTML=GuessesLeft;
            }
            else {
                LettersGuessed[j] = userGuess;
                document.getElementById("LettersGuessed").innerHTML = LettersGuessed[j];
                document.getElementById("GuessesLeft").innerHTML=GuessesLeft;
            }

            GuessesLeft=Guessesleft-1;

        }

    };


};

