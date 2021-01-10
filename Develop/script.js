// Assignment Code
  // GIVEN I need a new, secure password
  // need a button or link to get a new password
  // need to show the password on the page

  var generateBtn = document.querySelector("#generate");

  var LowArr = "abcdefghijklmnopqrstuvwxyz";
  var UprArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var NumArr = "0123456789";
  var SpecialArr = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
  var passwordLength;
  // var lowercaseCheck;
  var uppercaseCheck;
  var numberCheck;
  var specialCheck;

//Function used to determine the length of the password (at least 8 characters and no more than 128 characters)
function determineLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }
    return passwordLength;
}
// Function used to determine whether the user wants to iunclude lowercase characters in the password
// function determineLowercase(){
//   lowercaseCheck = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
//   lowercaseCheck = lowercaseCheck.toLowerCase();

//     if (lowercaseCheck === null || lowercaseCheck === ""){
//       alert("Please answer Yes or No");
//       determineLowercase();

//     }else if (lowercaseCheck === "yes" || lowercaseCheck ==="y"){
//       lowercaseCheck = true;
//       return lowercaseCheck;

//     }else if (lowercaseCheck === "no" || lowercaseCheck ==="n"){
//       lowercaseCheck = false;
//       return lowercaseCheck;
    
//     }else {
//       alert("Please answer Yes or No");
//       determineLowercase();
//     }
//     return lowercaseCheck;
// }
//Function used to determine whether the user wants to include uppercase characters in the password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

//Function used to determine whether the user wants to include numbers in the password
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

//Function used to determine whether the user wants to include special characters in the password
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

 //Function used to take all the input from the previous functions and generate a password using a random number generator and 
 //the charAt method 
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  // determineLowercase();
  // console.log(lowercaseCheck);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = LowArr;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters+= UprArr + NumArr + SpecialArr;

}else if (uppercaseCheck && numberCheck){
  characters += UprArr + NumArr;

}else if (numberCheck && specialCheck){
  characters += NumArr + SpecialArr;

}else if (uppercaseCheck && specialCheck){
  characters += UprArr + SpecialArr;

}else if (uppercaseCheck){
  characters += UprArr;

}else if(numberCheck){
  characters += NumArr;

}else if (specialCheck){
  characters += SpecialArr;

}else{
  characters === LowArr;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);