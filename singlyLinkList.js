class  Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        const node = new Node(val);
        if(this.head == null) {
            this.head = node;
            this.tail = this.head;
           
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length ++;
        return this;
    }

    pop() {
        if(this.head === null) {
            return false;
        } else {
             let current = this.head;
             let newTail = current;
             while(current.next) {
                 newTail = current;
                current = current.next;

             }
             this.tail = newTail;
             this.tail.next = null;
             this.length --;
             if(length === 0) {
                this.head = null;
                this.tail = null;
             }
             return current;
        }
    }

    shift() {
        if(this.head === null) {
            return null;
        } else {
            let current = this.head;
            this.head = current.next;
            this.length --;
            if(this.length === 0) {
                this.tail = null
            }
            return current;
        }
        
    }

    unsift (val) {
        const node = new Node(val);
        if(head === null) {
            this.head = node;
            this.tail = this.head
        } else {
            node.next = this.head;
            this.head = node;
            
        }
        this.length ++;
        return this;
    }

    getIntro (index) {
        if(index < 1 || index > this.length) {
            return null
        } else {
            let current = this.head;
            let count = 1;
            while(count < index) {
                current = current.next;
                c++;
            }
            return current;
        }
    }
    set(value, index) {
        const result = this.getIntro(index);
        if(result) {
            result.val = value;
            return true;
        } else {
            return false;
        }
    }
    insert(value, index) {
        if(index < 0 || index > this.length){
            return false;
        } else if(index == 0) {
            this.unsift(value);
            return true;
        } else if(index === this.length) {
            this.push(value);
            return true;
        } else {
            const node = this.getIntro(index-1);
            const newNode = new Node(value);
            newNode.next = node.next;
            node.next = newNode
            this.length ++;
            return true;
        }
    }
    remove(index) {
        if(index < 1 || index > this.length){
            return false;
        } 
        if(index === 1){
            this.shift();
            return true
        } else if(index === this.length) {
            this.pop();
            return true;
        } else {
            const node = this.getIntro(index-1);
            node = node.next.next;
            this.length --;
            return true;
        }
    }

    reverse() {
         let current = null;
         let newCurrent = null;
         while(this.head) {
            newCurrent = this.head.next;
            this.head.next = current;
            current = this.head;
            this.head = newCurrent;
         }
         this.head.next = current;  
         return this;
    }
}

const singly = new SinglyList();
