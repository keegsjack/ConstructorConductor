//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.


String.prototype.thing = function() {
	return this.split("").reverse().join("");
}

var keegan = "hi my name is Keegan"

keegan.thing();

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here