class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkLIst {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length ++;
        return this;
    }

    pop() {
        if(this.head === null) return null;
        const temp = this.tail;
        if(this.length ===1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null
        }
        this.length --;
        return temp;
    }

    shift() {
        if(this.head === null) return null;
        const temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = temp.next;
            temp.next = null;
            this.head.prev = null;
        }
        this.length --;
        return temp;
    }

    unshift(val) {
        const node = new Node(val);
        if(this.length == 0) {
            this.head = node;
            this.tail = node;
        }  else {
            node.next = this.head
            this.head.prev = node;
            this.head = node
        }
        this.length ++;
        return this;
    }

    get(index) {
        if(index < 0 || index > this.length) return null;
        else if(index == 1) {
            return this.head;
        }
        else {
            let count = 1;
            const temp = this.head;
            while(count === index) {
                temp = temp.next;
                count ++;
            }
            return temp;
        }
    }

    set(index, val) {
        const foundIndex = this.get(index);
        if(foundIndex != null) {
            foundIndex.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return null;
        else if(index == 0) {
            return this.unshift(val)
        }
        else if(index == this.length ) {
            return this.push(val);
        } else {
            const newNode =  new Node(val);
            const foundNode  = this.get(index-1);
            const nextNode  = foundNode.next;
            foundNode.next = newNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            this.length ++;
            return this; 
        }
    }

    remove(index, val) {
        if(index < 0 || index > this.length) return null;
        else if(index == 0) {
            return this.shift(val);
        } else if(index == this.length-1) {
            return this.pop(val);
        } else {
            const foundNode  = this.get(index);
            const prevnode = foundNode.prev;
            const nextNode = foundNode.next;
            prevnode.next = nextNode;
            nextNode.prev = prevnode;
            foundNode.next = null;
            foundNode.prev = null;
            this.length --;

            return this;
        }
    }


};