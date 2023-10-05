//Question1
document.write("<b>Question 1"+"<br><br></b>")
let character=prompt("Enter character ");
if (!isNaN(character)){
    document.write("its a number"+"<br><br>")
}
else if(character>='A' && character<='Z'){
    document.write("Uppercase letter"+"<br><br>")
}
else if(character>='a' && character<='z'){
    document.write("Lowercase letter"+"<br><br>")
}
//QUESTION 2
document.write("<b>Question 2"+"<br><br></b>")
let int1=+prompt("Enter integer 1")
let int2=+prompt("Enter integer 2")
if (int1>int2){
    document.write("Integer 1 is greater than integer 2"+"<br><br>")
}
else if(int2>int1){
    document.write("Integer 2 is greater than integer 1"+"<br><br>")
}
else if(int1===int2){
    document.write("both are equal"+"<br><br>")
}
else{
    document.write("must be integer value"+"<br><br>")
}

//QUESTION 3
document.write("<b>Question 3"+"<br><br></b>")
let num=+prompt("Enter number to check whether it is positive or negative")
if(num>0){
    document.write("Positive number"+"<br><br>")
}
else if(num<0){
    document.write("Negative number"+"<br><br>")
}
else if(num==0){
    document.write("Zero"+"<br><br>")
}
//QUESTION 4
document.write("<b>Question 4"+"<br><br></b>")
let char=prompt("Enter char to check either it is Vowels or not")
let array=['a','e','i','o','u']
isVowel=false
for(i=0;i<array.length;i++){
    if(char===array[i]){
        isVowel=true;
        break;
    }
}
if(char.length===1){


if(isVowel){
    document.write("True"+"<br><br>")
}
else{
    document.write("False"+"<br><br>")
}
}
else{
    document.write("Enter single character"+"<br><br>")
}
//QUESTION 5
document.write("<b>Question 5"+"<br><br></b>")
let cpass= 'hamza'
let pass=prompt("Enter Password")

if (pass===cpass){
    alert("Correct! The password you entered matches the original password")
    document.write("Correct Password"+"<br><br>")
}
else{
    alert("Incorrect password")
    document.write("Incorrect Password"+"<br><br>")
}
//QUESTION 6
document.write("<b>Question 6"+"<br><br></b>")
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
//QUESTION 7
document.write("<b>Question 7"+"<br><br></b>")
let time=+prompt("Enter time")
if(time>=0 && time<1200){
document.write("Good morning"+"<br><br>")
}
else if(time>=1200 && time<1700){
document.write("Good afternoon"+"<br><br>")
}
else if(time>=1700 && time<2100){
    document.write("Good evening"+"<br><br>")
    }
else if(time>=2100 && time<2359){
        document.write("Good night"+"<br><br>")
}


