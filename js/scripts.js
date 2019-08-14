var userInput = "";
var userWords = [];


$(document).ready(function(){

  $("div#userSentence").empty();

  $("form#items").submit(function(event){
    event.preventDefault();

    $("div#userSentenceIntro").show();

    userInput = $("textarea#sentence").val();

    console.log(userInput);

    userWords = userInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]\r\R/g,"").split(" ");


    console.log(userWords);

  });

});
