var heads = 0;
var tails = 0;


function prepLetters(str) {
  return str.split('').filter(x => /[a-z0-9]/i.test(x));
}

function crypto2(str) {
  console.log("CRYPTO 2");
  var letterArray = prepLetters(str);
  var arrayLength = letterArray.length;
  var newArray = [];
  x = Math.floor(Math.sqrt(arrayLength));
  y = Math.ceil(Math.sqrt(arrayLength));
  for (var i = 0; i < y; i++) {
    for(var j = i; j < letterArray.length; j+=x){
      if (!letterArray[j] ) {
        newArray.push('');
      } else {
        newArray.push(letterArray[j]);
      }
    }
  }
  var result = "";
  var word = ""
  var letterCount = 0;

  for (var i = 0; i < newArray.length; i++) {
    if (letterCount === arrayLength) {
      result += (word);
      return result;
    } else if (word.length === 4) {
      word += newArray[i];
      letterCount++;
      result += (word + " ");
      word = "";
    } else {
      word += newArray[i];
      letterCount++;
    }
  }

  return result;
}

function crypto(str) {
  console.log("CRYPTO 1");
  var letterArray = prepLetters(str);
  var col = Math.floor(Math.sqrt(letterArray.length));
  var row = Math.ceil(Math.sqrt(letterArray.length));

  var matrix = [];

  for (let i = 0; i < row; i++) {
  	var thisRow = [];
  	for (let j = 0; j < col; j++) {
      thisRow.push((letterArray.length < 1) ? "" : letterArray.shift());
    }
    matrix.push(thisRow);
  }

  let code = '';
  let word = '';
  for (let i = 0; i < col; i++) {
  	for (let j = 0; j < row; j++) {
      if (word.length === 4 && matrix[j][i] != "") {
        word += matrix[j][i];
        code += (word + " ");
        word = "";
      } else {
        word += matrix[j][i];
      }
  	}
  }
  if (word.length < 4) {
    code += (word);
  }

  return code;
}


function getCrypto() {
  var functionNumber = Math.round(Math.random());
  if (functionNumber === 0) {
    tails++;
    return crypto2;
  } else {
    heads++;
    return crypto;
  }
}




$(document).ready(function() {

  $("#userInputForm").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
    var userText = $("#userText").val();
    $("#userText").val('');
    var cryptoFunction = getCrypto();
    var result = cryptoFunction(userText);
    $("#encriptedResult").text(result);
    $("#result").fadeIn();
    $("#heads").text(heads);
    $("#tails").text(tails);
  });

});
