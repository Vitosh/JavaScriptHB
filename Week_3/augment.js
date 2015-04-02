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


String.prototype.format = function(dict) {
  var result = this;

  if(typeof(dict) === "object") {
    Object.keys(dict).forEach(function(key) {
      result = result.replace("{" + key + "}", dict[key]);
    });
    return result;
  }

  var args = [];
  var n = arguments.length;
  var i = 0;

  for(i; i < n; i+=1) {
    args.push(arguments[i]);
  }

  args.forEach(function(arg) {
    result = result.replace("{}", arg);
  });

  return result;
}



Array.prototype.head = function(){
	return this[0];
}


Array.prototype.tail = function(){
	var mirror = this
	var result = mirror.shift();
	return this;
}


Array.prototype.range = function(iStart,iEnd){
	var newRange = [];

	for (var i = iStart; i <= iEnd; i++) {
		newRange.push(i);
	};
	return newRange
}

Array.prototype.sum = function(myArray){
	var myResult = 0;

	var n = this.length;
	var i = 0;

	for(i; i < n; i+=1) {
		myResult += this[i];
	}

	return myResult;
}


Array.prototype.product = function(myArray){
	var myResult = this[0];

	var n = this.length;
	var i = 1;

	for(i; i < n; i+=1) {
		myResult *= this[i] ;
	}

	return myResult;
}

Array.prototype.compact = function(myArray){
	var myResult = [];
	var myForbidden = [false, 0, "",null,undefined, NaN];
	var n = this.length;
	var i = 0;

	for(i; i<n; i+=1){
		if (Boolean(this[i]) != false){
			myResult.push(this[i]);
		}
	}
	return myResult
}

Array.prototype.take = function(firstN){
	var myResult = [];
	var i = 0;

	for (i; i<firstN; i+=1){
		myResult.push(this[i])
	}
	return myResult;
}

Array.prototype.drop= function(LastN){
	var myResult = [];
	var i = this.length-1;

	for (i; LastN!=0; i--, LastN--){
		myResult.push(this[i]);
	}
	return myResult;
}

Array.prototype.dedup = function(myArray){
	myResult = [];
	var n = this.length;
	var i = 0;
	
	for (i; i <n; i+=1) {
		if (myResult.indexOf(this[i]) <= -1){
			myResult.push(this[i]);
		}
	}
	return myResult;
}

Array.prototype.sample = function(){
	var max = this.length-1;
	var min = 0;
	
	var myRandomPosition = Math.floor(Math.random()*(max-min+1)+min);
	return this[myRandomPosition];
}


//The tests start here:
var a = [1,2,3];
var b = [1,2,3,4,5,6,7,8,9,10,100,"TPAKTOP"];
var c = [4];

console.log(a.sample());
console.log(b.sample());
console.log(c.sample());

var a = [1, "a" ,"a" ,1 ,1, 2, 3, 3, 3, 4, 1, 1].dedup()
console.log(a);
var a = [].range(1, 10);
var z = a.take(2);
var zz = a.drop(3);
console.log(a);
console.log(z);
console.log(zz);
console.log(a.drop(5));
var t = [false, true, 0, "", null, 5, undefined, NaN, "JavaScript"].compact();
console.log(t);
var k = [1, 2, 3, 50, 0.1].product();
var z = [1, 2, 3, 100, 1000].sum();
console.log(k);
var result = [].range(1, 10);
console.log(result)
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
console.log("{} {} {}".format("one", "two", "three"));
console.log("Hello {name}, I am {friend}".format({
  "name": "IVan",
  "friend": "ivAN"
}));
