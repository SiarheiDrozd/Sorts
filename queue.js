function Queue(){
    this.size = 0;
    this.data = {};
}

Queue.prototype.add = function(data){
    var size = ++this.size;
    this.data[size] = data;
};

Queue.prototype.pop = function(){
    var size = this.size;

    if(size > 0){
        var firstElem = this.data[1];
        for(var i = 1; i <= size; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[size];
        this.size--;
        return firstElem;
    }
};
Queue.prototype.print = function(){
    var size = this.size;
    for(var i = 1; i <= size; i++){
        console.log(this.data[i]);
    }
};

var queue = new Queue();
queue.add(1);
queue.add(23);
queue.print();
queue.add("asd");
queue.add(1);
queue.pop();
queue.add("asd11");
queue.print();