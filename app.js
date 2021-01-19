// Chapter-31-34






//  Q1


// var date = new Date()
// document.write(date)



//   Q2


// var date = new Date()
// var arr = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
// var currentMonth = date.getMonth()
// document.write("<h1>"+ "Current Month Is :" + " " + arr[currentMonth] + "</h1>") 


//   Q3

// var date = new Date()
// var a =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
// var day = date.getDay()
// document.write( "<h1>"+ "Today is :"+" "+a[day]+"</h1>")


//  Q4


// var date = new Date();
// var a = date.getDay();

// switch(a){
// case 0:
//     document.write("It's fun day");
// case 6:
//     document.write("It's fun day");
// }


//   Q5


// var date = new Date();
// var a = date.getDate();
// if(a >= 1 && a <= 15){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last days of the month")
// }



//   Q6



// var date = new Date();
// var a = date.getTime();
// var b = a/(1000*60);
// document.write("<h1>Current Date : "+ date +"</h1>");
// document.write("<h1>Elapsed miliseconds since January,1970 : "+ a +"</h1>")
// document.write("<h1>Elapsed minutes since January,1970 : "+ b +"</h1>")




//    Q7



// var date = new Date();
// var a = date.getHours();

// if(a >= 0 && a <= 11){
//     document.write("Its" +" "+  a  +" "+   "AM");
// }else if(a >= 12 && a <= 23){
//     document.write("Its" +" "+ (a-12 ) +" "+  "PM")
// }



//   Q8



// var date = new Date();
// date.setHours(0)
// date.setMinutes(0);
// date.setSeconds(0);
// date.setFullYear(2021);
// date.setMonth(11);
// date.setDate(31)
// document.write("<h1>Later Date : "+ date +"</h1>");



//    Q9



// var date = new Date();
// var a = new Date("June 18,2020")
// var b = date.getTime();
// var c = a.getTime();
// var d = b-c
// var e = d/(1000*60*60*24);
// var f = Math.round(e)
// document.write(f +" Days have passed away since 1st ramadan 2020")
 


//    Q10



// var date = new Date();
// var a = new Date("January 1,2021");
// var b  = date.getTime();
// var c  = a.getTime();
// var d  = (b-c)/1000;
// var e = Math.round(d)
// document.write("On refrence date " + date + "<br />" + e +" seconds had passed since begining of 2021");



//    Q11




// var date = new Date();
// var a = new Date();
// var b = date.getHours();
// a.setHours(b-1);
// document.write("Current Date : "+ date + "<br />" + "1 hour ago, It was "+ a);




//  Q12



// var date = new Date();
// var b = new Date();
// var c = b.getFullYear();
// b.setFullYear(c-100);
// document.write("Current Date : "+date  + "<br />" + "100 years back , it was : "    + b);



//    Q13



// var a = prompt("Enter your birth date","April 19,1999");
// var b = new Date();
// var c = new Date(a);
// var d = b.getTime()-c.getTime();
// var e = d/(1000*60*60*24*365);
// var f = Math.round(e);
// var g = c.getFullYear();
// document.write("Your age is : "+ f + "<br /> Your birthyear is "+ g);



//    Q14




// var a = new Date();
// var b = a.getMonth();
// var c = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = 410;
// var e = 18; 
// var f = d*e;
// var g = f+500;
// document.write("<h1> K-Electric Bill </h1>" + "<br />" + "Company name : ABC Company" + "<br />" + "Month : " + c[b] + "<br />" + "Number of units: " + d + "<br />" + "Charges per units : " + e + "<br />" + "<br />" + "Net amount payable (with in due date) : " + f + "<br />" + "Gross amount payable (after due date) : "+ g +"<br />");







//_________________________________________________end_____________________________________________________________________________________
//_________________________________________________end________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________



//         Chapter-35-38



//    Q1



// function date(){
//      var a = new Date();
//      document.write(a)
// }
// date();




//     Q2
 


// function userName(){
//     var firstName = prompt("Enter First name");
//     var lastName = prompt("Enter Last name");
//     var fullName = firstName + " " + lastName;
//     document.write("Hi ! " + " " + fullName);
// }
//  userName();



//    Q3




// function add(){
//         var fN = +prompt("Enter First Number");
//         var lN = +prompt("Enter last Number");
//         var sum =  fN + lN;
//         return sum;
// }

// document.write(add());




//    Q4




// function compute(fN,sN,wants){
//    if(wants === '+'){
//     alert(fN + sN);
// }else if(wants === '-'){
//     alert(fN - sN);
// }else if(wants === '*'){
//     alert(fN * sN);
// }else if(wants === '/'){
//     alert(fN / sN);
// }else if(wants === '%'){
//     alert(fN % sN);
// }
// }
// compute(+prompt("Enter First Number"),+prompt("Enter Second Number"),prompt("What you want"))





//     Q5




// function  square(a){
//     alert(a*a);
// }

// square(prompt("Enter the number"));



// Q-7
 
// function counting(){
//     var a = +prompt("Enter First Number")
//     var b = +prompt("Enter Last Number")
//     for(var i = a; i <= b; i++ ){
//     document.write(i + "<br />")
// }
// }

// counting();

// Q-8

// var base = +prompt("Enter the base");
// var perpendicular = +prompt("Enter the perpendicular");
// var hypotenuse = (base*base)+(perpendicular*perpendicular);
// function hypoSquare(){
// var a = hypotenuse;
// var b = Math.sqrt(a)
// alert(b);
// }

//  hypoSquare();



//    Q9

 


// function area(width,height){
//     var a = width*height;
// document.write("Area of Rectangle is " + a );
// }

// area(+prompt("Enter Width"),+prompt("Enter  Height"));




//    Q11



//   function uppercase(a){
//   var b = a.split(' ');
//   var c = [];
    
//   for(var i = 0; i < b.length; i++){
//       c.push(b[i].charAt(0).toUpperCase()+b[i].slice(1));
//   }
//   return c.join(' ');
// }
// document.write("Example String : " + " "  + "the quick brown fox" + " <br />");
// document.write("Example Output : " + " "  + uppercase("the quick brown fox"));




//     Q12



// function longestWord(a){
//   var b = a.match(/\w[a-z]{0,}/gi);
//   var c = b[0];

//   for(var i = 1 ; i < b.length ; i++)
//   {
//     if(c.length < b[i].length)
//     {
//     c = b[i];
//     } 
//   }
//   return c;
// }
// document.write(longestWord('Web Development Tutorial'));





//     Q13




// function count(para, letter) 
// {
//  var a = 0;
//  for (var i = 0; i < para.length; i++){
//     if (para.charAt(i) == letter) {
//       a += 1;
//       }
//   }
//   return a;
// }
// document.write(count(prompt("Enter first"),prompt("Enter second")));



//    Q14


// function calcCircumference(){
//     var r = +prompt("Enter Your Radius");
//     c = 2*(3.14)*(r);
//     document.write("The circumference is "+ c +"<br />");

// }
// calcCircumference();


// function calcArea(){
//     var r = +prompt("Enter Your Radius");
//     var a = (3.14)*(r*r);
//     document.write("The area is " + a);
// }


// calcArea();





// _________________________________________________________________________end________________________________________________________________________________________
// _________________________________________________________________________end________________________________________________________________________________________



//     Chaptet-38-42
  


//    Q1



// function custom(){
//     var a = +prompt("Enter first number");
// var b = +prompt("Enter the power");
// var c =  Math.pow(a,b);
// document.write(c)
// }
// custom();




//    Q2




// function leap(){
// var a = prompt("Enter Full Year");
// if(  (  (a % 4 == 0)  &&  (a % 100 != 0) ) || (a % 400 == 0)  ){
// alert("Leap year")
// }else{
// alert("not leap year") 
// }
// }
// leap();




//    Q3




// var a = +prompt("Enter length of first side");
// var b = +prompt("Enter length of second side");
// var c = +prompt("Enter length of third side");
// function section(){
//     var s = (a+b+c)/2;
//     return s;
// }

// var d = section();
// function area(){
//     var e = (d)*(d-a)*(d-b)*(d-c);
//     alert(e)
// }

// area();





//     Q4




// var a = +prompt("Enter  marks of first subject");
// var b = +prompt("Enter  marks of second subject");
// var c = +prompt("Enter  marks of third subject");
// function average(){
//     var d = (a+b+c)/3;
//     return d;
// }

// var e = average();

// function percentage(){
//     var f = ((a+b+c)/300)*100;
//     return f;
// }

// var g = percentage();

// function result(){
//     document.write("Average marks is : " + e + "<br />" + "Percentage is : " + g + " % ")
// }

// result();




//    Q5





// var a = "My name is Junaid";
// function indexOn(b){
// for(var i = 0 ; i <= a.length ; i++){
//     if(a[i] === b){
//         return i;
//     }
// }
// }
// var c = indexOn("J");
// document.write(c)




//    Q6




// var a = "Today is monday";
// var b = a.replace(/a/g,"").replace(/e/g,"").replace(/i/g,"").replace(/o/g,"").replace(/u/g,"")
// document.write("With vowels : " + a + "<br />" + "Without vowels : "+ b);





//    Q7




// var a = "Pleases read this application and give me gratuity";
// function twoVowels() {
//     for (var i = 0; i <= a.length; i++) {
//         if (a.charAt(i) === "a" || a.charAt(i) === "e" || a.charAt(i) === "i" || a.charAt(i) === "o" || a.charAt(i) === "u") {
//             if (a.charAt(i + 1) === "a" || a.charAt(i + 1) === "e" || a.charAt(i + 1) === "i" || a.charAt(i + 1) === "o" || a.charAt(i + 1) === "u") {
//                 document.write(a.charAt(i) + a.charAt(i + 1)+",");
//             }
//         }
//     }
// }

// document.write(a + "<br /> Occurences are : ");
// twoVowels();





//     Q8




// var km = +prompt("Enter distance in km");
// function metre(){
//     var m = km*1000;
//     return m;
// }
// var a = metre();

// function centimetre(){
//     var cm = a*100;
//     return cm;
// }

// var b = centimetre();

// function feet(){
//     var f = b*30.48;
//     return f;
// }

// var c = feet();

// function inch(){
//     var i = c*12;
//     return i;
// }

// var d = inch();

// function main(){
//     document.write("Metres : "+a + "<br />")
//     document.write("Centimetres : "+b + "<br />")
//     document.write("Feets : "+c + "<br />")
//     document.write("Inches : "+d + "<br />")
// }

// main();





//     Q9





// var a = +prompt("Enter the working hours");
// if(a > 40){
//     var b = a - 40;
//     var c = b*12;
//     document.write("The payment of overtime is : " + c);
// }else{
//     document.write("There is no overtime payment")
// }





//     Q10





// var a = +prompt("Enter withdrawn amount");
// var b = Math.floor(a / 100);
// var c = Math.floor((a % 100) / 50);
// var d = Math.floor(((a % 100) % 50) / 10);


// document.write("You will have" + " " + b + " " + "notes of Hundred" + " " + c + " " + "notes of Fifty" + " " + d + " " + "notes of Ten" )




// _________________________________________________________________________end________________________________________________________________________________________
// _________________________________________________________________________end________________________________________________________________________________________

// +"<br />"   +