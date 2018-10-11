

// This function is run onload of the page

window.onload = function () {
    var veggieList = ["carrots", "beans", "peas", "potato", "spinach", "tomatoes"];
    var CurrentWord = veggieList[Math.floor(Math.random() * veggieList.length)];
    var GuessCounter = 10;
    document.getElementById("GuessesLeft").innerHTML = GuessCounter;
    document.getElementById("WinCount").innerHTML = 0;
    console.log("CurrentVeggie is " + CurrentWord);
    console.log("length of veggie is  " + CurrentWord.length);
    console.log("GuessesLeft is " + GuessCounter);
    //var image;
    var WordChoice = [];
    var LetterGuessed = [];
    var AllGuesses = [];
    var TempArray = [];
    var WinCount = 0;
    var wins=0;
    

    //image = getImage(CurrentWord);


    for (var i = 0; i < CurrentWord.length; i++) {


        WordChoice[i] = "-"


    }
    document.getElementById("WordChoice").innerHTML = WordChoice;
    console.log("The wins so far are : " + wins);
    document.getElementById("WinCount").innerHTML = wins;

    console.log("The Word Choice is  " + WordChoice);

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
            else
                AllGuesses.push(userGuess);
        }

        console.log("All Guesses array is " + AllGuesses);
        //uniqueItems = Array.from(new Set(items))
        TempArray = Array.from(new Set(AllGuesses));
        LetterGuessed = TempArray.filter(function (n) { return !this.has(n) }, new Set(WordChoice));

        //LetterGuessed=difference(WordChoice,TempArray);

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
            if (WordChoice[i] !== "-")
                check = 1;
            else
                check = 0;
        }

        console.log("The value of check is " + check);
        if (check == 1 && GuessCounter > 0) {
            if (wins > WinCount) {
                WinCount = wins + 1;
                sessionStorage.setItem(wins, WinCount);
                console.log("The wins so far are :" + wins);
                document.getElementById("WinCount").innerHTML = wins;
                location.reload();
            }
            else {
                WinCount = WinCount + 1;
                sessionStorage.setItem(wins, WinCount);
                document.getElementById("WinCount").innerHTML = wins;
                location.reload();
            }
        }else 
            {
                if (check == 0 && GuessCounter == 0) {
                    //sessionStorage.setItem(wins, WinCount);
                    document.getElementById("WinCount").innerHTML = sesionStorage.getItem(wins);
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

