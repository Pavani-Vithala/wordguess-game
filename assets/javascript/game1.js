//Declaration of Global Variables
var wins = 0;
var wordChoice = [];
var letterGuessed = [];
var guessCounter = 10;
// This function is run onload of the page
window.onload = function () {

    document.getElementById("WinCount").innerHTML = wins;
    document.getElementById("GuessesLeft").innerHTML = guessCounter;
    currentWord = Refresh();
    //Function executes when ever a key is pressed
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log("user choice is " + userGuess);
        guessCounter = guessCounter - 1;
        document.getElementById("GuessesLeft").innerHTML = guessCounter;
        var t = 0;

        for (var j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === userGuess) {
                wordChoice[j] = userGuess;
                document.getElementById("WordChoice").innerHTML = wordChoice;
                t = 1;
            }
        }
            if (t === 0) {
                var dup = 0;

                for (var x = 0; x < letterGuessed.length; x++) {
                    if (letterGuessed[x] === userGuess) {
                        dup = dup + 1;

                    }
                }

                if (dup === 0) {
                    letterGuessed.push(userGuess);
                    document.getElementById("LettersGuessed").innerHTML = letterGuessed;
                }


            }

            document.getElementById("GuessesLeft").innerHTML = guessCounter;


            var check1 = 0;
            var check2 = 0;
            for (var i = 0; i < wordChoice.length; i++) {
                if (wordChoice[i] == "-") {
                    check1 = check1 + 1;

                }
                else
                    check2 = check2 + 1;

            }


            if (check1 >= 1 && guessCounter == 0) {
                document.getElementById("WinCount").innerHTML = wins;
                currentWord = Refresh();

            } else {

                if (check2 >= 1 && check1 == 0) {
                    wins = wins + 1;
                    document.getElementById("WinCount").innerHTML = wins;
                    guessCounter = 10;
                    currentWord = Refresh();

                }

            }

        
        }
        document.getElementById("Exit").onclick = function () {
            var exit = prompt("Are you sure you want to stop the fun?(Y/N)");
            if (exit == "Y") {
                var ok;
                ok = confirm("good bye.See you soon");
                console.log("Value of OK is :" + ok);
                if (ok) {
                    //This is not working as the security loop is fixed by Google. But just gave it to project my idea.
                    window.close();

                }
                else {
                    guessCounter = 10;
                    currentWord = Refresh();
                }
            }
        }
        //This is the function to reset all the elements on the page except wins and image
        function Refresh() {
            console.log("Entered Refresh function:");
            var veggieList = ["carrots", "beans", "peas", "potato", "spinach", "tomatoes"];
            currentWord = veggieList[Math.floor(Math.random() * veggieList.length)];
            guessCounter = 10;
            letterGuessed = [];
            wordChoice = [];
            for (var i = 0; i < currentWord.length; i++) {
                wordChoice[i] = "-"
            }
            document.getElementById("LettersGuessed").innerHTML = letterGuessed;
            document.getElementById("GuessesLeft").innerHTML = guessCounter;
            document.getElementById("WordChoice").innerHTML = wordChoice;
            console.log("The current WordChoice is :" + wordChoice);
            console.log("The current Veggie is :" + currentWord);
            return (currentWord);
        }


    };

