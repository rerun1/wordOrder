var userInput = "";
var userWords = [];




$(document).ready(function(){

  $("div#userSentence").empty();

  $("form#items").submit(function(event){
    event.preventDefault();

    $("div#userSentenceIntro").show();

    userInput = $("textarea#sentence").val();

    console.log(userInput);

    userWords = userInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ");


    console.log(userWords);

    var countedWords = userWords.reduce(function (allWords, word) {
        if (word in allWords) {
          allWords[word]++;
        } else {
          allWords[word] = 1;
        }
        return allWords;},{});

    console.log(countedWords);

    // 
    // var test = countedWords.reduce(function(keys, values) {return key + value;});
    //
    // console.log(test);

  });

});
