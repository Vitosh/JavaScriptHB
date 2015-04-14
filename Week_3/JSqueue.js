queue : function() {
    var elements;
    
    this.push = function(element) {
        if (typeof(elements) === 'undefined') {
            elements = [];   
        }
        elements.push(element);                       
    }

    this.pop = function() {
        return elements.shift();                                                
    }

    this.peek = function(){
        return elements[0];                  
    }
}

a = queue();
a.push(10);
a.push(20);
a.push(30);
console.log(a);
