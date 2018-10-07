
   
    var veggieList = ["carrots", "beans", "peas","potato","spinach","tomatoes"];

    // Creating variable to hold the number of wins
    var wins = 0;
    

    // Create variables that hold references to the places in the HTML where we want to display things.
    var WinCount = document.getElementById("WinCount");
   var WordChoice = document.getElementById("WordChoice");
    var GuessesLeft = document.getElementById("GuessesLeft");
    var LettersGuessed = document.getElementById("LettersGuessed");
    var GuessedSoFar=[];
    //LettersGuessed=document.getElementById("LettersGuessed");
   

    // This function is run whenever the user presses a key.
    window.addEventListener('load', function() {
    
    var GuessesLeft = veggieList.length;
    var WinCount = wins;
    var CurrentWord = veggieList[Math.floor(Math.random() * veggieList.length)];
    console.log("CurrentVeggie is "+CurrentWord);
    console.log("lenght of veggie is  "+CurrentWord.length);
    
    /*for (var i=0;i<CurrentWord.length;i++)
    {
        //var nextChar = str.charAt(i);
        var btn= document.createElement("button");
        btn[i] = btn[i]+str[i];
        //console.log(btn[i]);
       
        document.getElementById("WordChoice").textContent = btn;

    }*/
        
  for (i=0;i<GuessesLeft;i++)
   {
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      console.log(userGuess);
      
      for(j=0;j<CurrentWord.length;j++)
      {
      if  (userGuess === CurrentWord[j])
        
         WordChoice[j] = CurrentWord[j];
       
        else
            LettersGuessed[j] = userGuess;

            GuessesLeft = (GuessesLeft -1);

      }
            
     }
    }
      
      });
 
