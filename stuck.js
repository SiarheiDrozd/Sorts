function Stack(){
    this.size = 0;
    this.data = {};
}
Stack.prototype.push = function(element){
    console.log(this.size);
    var size = ++this.size;
    this.data[size] = element;
};
Stack.prototype.pop = function(){
    var size = this.size;
    if(size > 0){
        var deletedData = this.data[size];
        delete this.data[size];
        this.size--;

        return deletedData;
    }
};
Stack.prototype.print = function(){
    var i = 1;
    while(this.data[i]){
        console.log(this.data[i]);
        i++;
    }
};

var stack = new Stack();
stack.push(1);
stack.push(43);
stack.push(12);
stack.print();
stack.pop();
stack.print();