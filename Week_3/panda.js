function Panda(name,sex){
	this.name = name;
	this.sex = sex;
	this.weight = 20;
	this.isLazy = false;
}

Panda.prototype.toString = function(){
	return this.name +" is a "+ this.sex + " panda which weighs " + this.weight + "kg";
}

Panda.prototype.IsMale = function(){
	var result;
	if (this.sex === "Male") {
		result = true;
	}else{
		result = false;		
	}
	return result;
}

Panda.prototype.IsFemale = function(){
	var vresult;
	if (this.sex === "Male") {
		vresult = false;
	} else {
		vresult = true;		
	}
	return vresult;
}

Panda.prototype.eat = function(bamboo){
	this.weight += (bamboo/2);
	if (this.weight >= 80 && !this.isLazy){
		this.name = "Lazy Panda " + this.name;
		this.isLazy = true;
	}
}

Panda.prototype.mate = function(anotherPanda){
	var newSex = ""
	var newName = ""
	if (this.sex == anotherPanda.sex){
		throw "Cannot mate pandas!"
	}
	if (Math.floor((Math.random() * 2) + 1) == 1){
		newSex = "Male";
		newName = this.name + " " + anotherPanda.name
	}else{
		newSex = "Female";
		newName = anotherPanda.name +" "+this.name
	}

	return new Panda(newName,newSex);
}

var ivo = new Panda("Ivo", "male");

console.log(ivo.weight); 
console.log(ivo.IsMale()); 
console.log(ivo.IsFemale());
console.log(ivo.toString());
ivo.eat(80)
console.log(ivo.weight == 60)
ivo.eat(80)
console.log(ivo.weight)
console.log(ivo.name)


var ivan = new Panda("Ivan", "male");
var ivanka = new Panda("Ivanka", "female");

var baby = ivan.mate(ivanka);

console.log(baby.name);