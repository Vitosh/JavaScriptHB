String.prototype.capitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.isBlank = function(){
	var result = this.trim();
	if (result.length>0){
		result = false;
	} else {
		result = true;
	}
	return result
}

String.prototype.words = function(){

	return this.split(/[ ]{1,}/);
}

String.prototype.format = function(){
	
}

Array.prototype.head = function(){
	return this[0];
}

Array.prototype.tail = function(){
	var mirror = this
	var result = mirror.shift();
	return this;
}

var b = "vitosh".capitalize();
console.log(b.isBlank());
b = "        ";
console.log(b.isBlank());
b = "123";
console.log(b.isBlank());
b = "";
console.log(b.isBlank());
b = "This is a very                  clever    sentence";
console.log(b.words());

var a = [1, 2, 3];

console.log(a.head());
console.log(a.tail());
// a.last() == [3]
