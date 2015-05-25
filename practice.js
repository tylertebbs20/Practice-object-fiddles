//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: "Tyler",
  age: 29
}

alert(me.age);



//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.


var favoriteThings = {
  band: "Ed Sheeran",
  food: "Mexican",
  person: "Dad",
  book: "Wheel Of Time",
  movie: "Lord of the Rings",
  holiday: "Christmas"
}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings["car"] = "Bugatti veyron";
favoriteThings["brand"] = "Nike";



//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings["food"] = "Lettuce";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backpack = {}

var item = "firstPocket"

backpack["item"] = "chapstick";

backpack.color = "red";

//After you do the above, alert your entire backPack object.

alert(backpack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backpack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: "Tyler",
  age: 29,
  height: "6'2",
  gender: "male",
  married: "No",
  eyeColor: "hazel",
  hairColor: "brown"
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var key in me) {
  alert(me[key]);
}





//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  one: "two minutes",
  two: "four minutes",
  three: "three minutes",
  four: "five minutes",
  five: "six minutes"
}

//Now, loop through your album object alerting every song title individually.

for (var key in album) {
 alert([key]);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

 var states = {
  utah: 2000000,
  california: 20000000,
  texas: 15000000,
  arkansas: 400,
  arizona: 4000000
 }

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (var key in states) {
  if (states[key] > 30000) {
 alert([key]); 
 }
}




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (var key in user) {
 if (!user[key]) {
   delete (user[key]);
 }
}


//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user["name"] = "Tyler Tebbs";
user["username"] = "tylertebbs20";





//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user["name"] = "Tyler S. McGinnis";
user["email"] = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {}

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection["alerthello"] = function() {
  alert("hello");
};

methodCollection["loghello"] = function() {
  console.log("hello");
};

//nowcall your alerthellow and loghello

methodCollection.alerthello();
methodCollection.loghello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

var MakePerson = function(name, birthday, ssn) {
  var newObject = {
    name: name,
    birthday: birthday,
    ssn: ssn
  }
  return newObject;
};

MakePerson("Tyler", "11/28/1985", "ssn#");

//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, 
//you get a brand new credit card.

var MakeCard = function(name, number expiration, cvv) {
  var newObj = {
    name: name,
    number: number,
    expiration: expiration,
    cvv: cvv
  }
  return newObj;
};

MakeCard("Tyler", "893838399", "12/24", "301");

  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

var bindCard = function(MakePerson, MakeCard) {
  for (var key in bindCard) {
    MakePerson["key"] = "";
    MakeCard["key"} = "";
  }
}



