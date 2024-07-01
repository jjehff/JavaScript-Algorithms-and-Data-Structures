const number = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", converter);

function converter() {
  if (number.value === "") {
  output.innerText = "Please enter a valid number";
}
else if (number.value < 0) {
  output.innerText = "Please enter a number greater than or equal to 1";
}
else if (number.value > 3999) {
  output.innerText = "Please enter a number less than or equal to 3999";
}
else {
  let num = parseInt(number.value);
    let romNum = "";
    while (num != 0) {
      if (num % 1000 != num) {
        romNum += "M".repeat(Math.floor(num / 1000));
        num %= (Math.floor(num / 1000) * 1000);
      }
      else if (num % 900 != num) {
        romNum += "CM";
        num %= 900;
      }
      else if (num % 500 != num) {
        romNum += "D";
        num %= 500;
      }
      else if (num % 400 != num) {
        romNum += "CD";
        num %= 400;
      }
      else if (num % 100 != num) {
        romNum += "C".repeat(Math.floor(num / 100));
        num %= (Math.floor(num / 100) * 100);
      }
      else if (num % 90 != num) {
        romNum += "XC";
        num %= 90;
      }
      else if (num % 50 != num) {
        romNum += "L";
        num %= 50;
      }
      else if (num % 40 != num) {
        romNum += "XL";
        num %= 40;
      }
      else if (num % 10 != num) {
        romNum += "X".repeat(Math.floor(num / 10));
        num %= (Math.floor(num / 10) * 10);
      }
      else if (num % 9 != num) {
        romNum += "IX";
        num %= 9;
      }
      else if (num % 5 != num) {
        romNum += "V";
        num %= 5;
      }
      else if (num % 4 != num) {
        romNum += "IV";
        num %= 4;
      }
      else {
        romNum += "I".repeat(Math.floor(num / 1));
        num %= (Math.floor(num / 1));
      }
    }
    output.innerText = romNum;
  }
}
