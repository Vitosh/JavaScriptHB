var Queue = function() {
    this.first = null;
    this.size = 0;
};

var Node = function(data) {
    this.data = data;
    this.next = null;
};

Queue.prototype.push = function(data) {
    var node = new Node(data);

    if (!this.first){
        this.first = node;
    } else {
        n = this.first;

        while (n.next) {
            n = n.next;
        }
        n.next = node;
    }

    this.size += 1;
    return node;
};

Queue.prototype.pop = function() {
    temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
};

Queue.prototype.isEmpty = function() {
    if (this.size == 0) {
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