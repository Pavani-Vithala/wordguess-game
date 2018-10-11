

// This function is run onload of the page

window.onload = function () {
    var veggieList = ["carrots", "beans", "peas", "potato", "spinach", "tomatoes"];
    var CurrentWord = veggieList[Math.floor(Math.random() * veggieList.length)];
    var GuessCounter = 10;
    document.getElementById("GuessesLeft").innerHTML = GuessCounter;
    console.log("CurrentVeggie is " + CurrentWord);
    console.log("length of veggie is  " + CurrentWord.length);
    console.log("GuessesLeft is " + GuessCounter);
    //var image;
    var WordChoice = [];
    var LetterGuessed = [];
    var AllGuesses = [];
    var TempArray = [];
    var wins = sessionStorage.getItem("wins");

    if (wins == null) {
        document.getElementById("WinCount").innerHTML = 0;
        this.sessionStorage.setItem("wins", 0);
    }
    else {
        wins = parseInt(sessionStorage.getItem("wins"));
        document.getElementById("WinCount").innerHTML = parseInt(wins);
    }


    for (var i = 0; i < CurrentWord.length; i++) {
        WordChoice[i] = "-"
    }

    document.getElementById("WordChoice").innerHTML = WordChoice;

    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log(userGuess);

        //GuessesLeft = GuessCounter;

        for (var j = 0; j < CurrentWord.length; j++) {
            if (userGuess === CurrentWord[j]) {
                WordChoice[j] = userGuess;
                document.getElementById("WordChoice").innerHTML = WordChoice;
                console.log("The word Choice is :" + WordChoice);
            }
            else {
                AllGuesses.push(userGuess);
            }

        }

        console.log("All Guesses array is " + AllGuesses);
        TempArray = Array.from(new Set(AllGuesses));
        LetterGuessed = TempArray.filter(function (n) { return !this.has(n) }, new Set(WordChoice));


        console.log("Letters Guessed " + LetterGuessed);
        document.getElementById("LettersGuessed").innerHTML = LetterGuessed;


        GuessCounter = GuessCounter - 1;
        document.getElementById("GuessesLeft").innerHTML = GuessCounter;

        console.log("Guess Counter is  " + GuessCounter);
        console.log("Word Choice is " + WordChoice);
        console.log("CurrentWord is " + CurrentWord);
        var check = 0;
        //var img = document.getElementById("veggiepic").innerHTML;
        for (i = 0; i < WordChoice.length; i++) {
            if (WordChoice[i] == "-"){
                check = 0;
                break;
            }
            else
                check = 1;
        }

        console.log("The value of check is " + check);

        if (check == 1) {
            console.log("Entered the CounterCheck if");
            wins = parseInt(sessionStorage.getItem("wins")) + 1;
            sessionStorage.setItem("wins", parseInt(wins));
            document.getElementById("WinCount").innerHTML = parseInt(wins);
            location.reload();

        } else {
            if (check == 0 && GuessCounter == 0) {
                document.getElementById("WinCount").innerHTML = parseInt(sessionStorage.getItem(wins));
                console.log("Your Wincount is :" + wins);
                location.reload();
            }

        }



    }


    document.getElementById("Exit").onclick = function () {

        var exit = prompt("Are you sure you want to stop the fun?(Y/N)");
        if (exit == "Y")

            alert("good bye.See you soon");

        else
            location.reload();


    }


    /*function getImage(str1){
    
    var x = document.createElement("IMG");
        if (str1=="beans")
        {
            x.setAttribute("src","assets/images/beans.jpg");
        }
    return(x);
    }*/

};

