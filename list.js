function Element(data){
    this.data = data;
    this.prev = null;
    this.next = null;
}

function List(){
    this.size = 0;
    this.root = null;
}

List.prototype.add = function(elem){
    if(!this.root){
        this.root = elem;
        this.size++;
    }else{
        var point = this.root;
        while(point.next){
            point = point.next;
        }
        point.next = elem;
        point.next.prev = point;
        this.size++;
    }
};
List.prototype.pop = function(){
    if(this.root){
        var deletedElem = this.root;
        this.root.next.prev = null;
        this.root = this.root.next;
        this.size--;
        return deletedElem;
    }
};
List.prototype.print = function(){

    if(this.root){
        var curElem = this.root;
        while(curElem){
            console.log(curElem.data);
            curElem = curElem.next;
        }
    }
};
List.prototype.remove = function(elem){
    var prev = elem.prev;
    var next = elem.next;
    prev.next = next;
    next.prev = prev;
    delete elem;
};

var list = new List();
list.add(new Element(4));
list.add(new Element("4"));
var a = new Element("e");
list.add(a);
list.add(new Element(21321));
list.add(new Element(-9));
list.remove(a);
list.print();