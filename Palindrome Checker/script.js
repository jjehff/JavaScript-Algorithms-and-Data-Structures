const submitBtn = document.getElementById("check-btn");
const textEntered = document.getElementById("text-input");
const result = document.getElementById("result");
submitBtn.addEventListener("click", palindromeChecker);


function palindromeChecker() {
  const textValue = textEntered.value;
  const fixedValue = fixString(textValue);
  if (textValue == "") {
    alert("Please input a value");
    result.innerText = "Waiting for a word...."
    return;
  }
  else if (fixedValue.length == 1) {
    result.innerText = textValue + " is a palindrome."
    return;
  }
  else {
    for (let i = 0, j = fixedValue.length-1; i < fixedValue.length, j > 0; i++, j--) {
      if (fixedValue[i] != fixedValue[j]) { 
        result.innerText = textValue + " is not a palindrome.";
        return;
      }
        else if (i == j && fixedValue[i] == fixedValue[j]) {
        result.innerText = textValue + " is a palindrome.";
        return;
      }
      else if (i > j) {
        result.innerText = textValue + " is a palindrome.";
        return;
      }
    }
  }
}

function fixString(str) {
  str = str.toLowerCase();
  return str.replace(/[\W_]+/g, "");
}
