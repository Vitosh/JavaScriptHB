var Queue = function() {

    var items;

    this.push = function(item) {

        if (typeof(items) === 'undefined') {

            items = [];   

        }

        items.push(item);                       

    }

    this.pop = function() {

        return items.shift();                                                

    }
}






Queue.prototype.isEmpty = function() {
    if (this.length == 0) {
        return true;
    } else {
        return false;
    }
};

var a = new Queue();
a.push(1);
console.log(a);
a.push(100);
a.push(210);
a.push(310);


console.log(a);
a.pop();
console.log(a);

console.log(a);
console.log();
console.log("Is empty test is here:");
console.log(a.isEmpty());