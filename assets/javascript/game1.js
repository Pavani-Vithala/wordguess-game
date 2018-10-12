

// This function is run onload of the page

window.onload = function () {
    var wins = 0;
    var WordChoice = [];
    var LetterGuessed = [];
    var GuessCounter = 10;
    document.getElementById("WinCount").innerHTML = wins;
    CurrentWord = Refresh();
    document.onkeyup = function (event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        console.log(userGuess);



        //GuessesLeft = GuessCounter;
        var t = 0;
        console.log("Entered Keypress function and current word is :" + CurrentWord);
        for (var j = 0; j < CurrentWord.length; j++) {
            if (userGuess === CurrentWord[j]) {
                WordChoice[j] = userGuess;
                document.getElementById("WordChoice").innerHTML = WordChoice;
                console.log("The word Choice is :" + WordChoice);
                t = 1;
            }
        }

        if (t !== 1) {
            LetterGuessed.push(userGuess);
            document.getElementById("LettersGuessed").innerHTML = LetterGuessed;
            console.log("The Letters Guessed is :" + LetterGuessed);
        }

        GuessCounter = GuessCounter - 1;
        document.getElementById("GuessesLeft").innerHTML = GuessCounter;

        console.log("Guess Counter is  " + GuessCounter);
        console.log("Word Choice is " + WordChoice);
        console.log("CurrentWord is " + CurrentWord);
        var check = 0;
        //var img = document.getElementById("veggiepic").innerHTML;
        var check1 = 0;
        var check2 = 0;
        for (i = 0; i < WordChoice.length; i++) {
            if (WordChoice[i] == "-") {
                check1 = check1 + 1;

            }
            else
                check2 = check2+1;
        }

        //console.log("The value of check is " + check);
        if (check1 >= 1 && GuessCounter == 0) {
            document.getElementById("WinCount").innerHTML = wins;
            console.log("Your Wincount is :" + wins);
            Refresh(CurrentWord);

        }

        if (check2 >= 1 && check1 == 0) {
            console.log("Entered the CounterCheck if");
            wins = wins + 1;
            //sessionStorage.setItem("wins", parseInt(wins));
            document.getElementById("WinCount").innerHTML = wins;

            GuessCounter = 10;
            Refresh(CurrentWord);

        }


        document.getElementById("Exit").onclick = function () {

            var exit = prompt("Are you sure you want to stop the fun?(Y/N)");
            if (exit == "Y") {
                alert("good bye.See you soon");
                close();
            }
            else
                Refresh();


        }
        

        /*function getImage(str1){
        
        var x = document.createElement("IMG");
            if (str1=="beans")
            {
                x.setAttribute("src","assets/images/beans.jpg");
            }
        return(x);*/
    }
    function Refresh() {
        console.log("Entered Refresh function:");
        var veggieList = ["carrots", "beans", "peas", "potato", "spinach", "tomatoes"];
        var CurrentWord = veggieList[Math.floor(Math.random() * veggieList.length)];
        //var GuessCounter = 10;
        LetterGuessed = [];
        WordChoice = [];
        for (var i = 0; i < CurrentWord.length; i++) {
            WordChoice[i] = "-"
        }
        var GuessCounter = 10;
        document.getElementById("LettersGuessed").innerHTML = LetterGuessed;
        document.getElementById("GuessesLeft").innerHTML = GuessCounter;
        document.getElementById("WordChoice").innerHTML = WordChoice;
        console.log("The current WordChoice is :" + WordChoice);
        console.log("The current Veggie is :" + CurrentWord);
        return (CurrentWord);
    }


};

