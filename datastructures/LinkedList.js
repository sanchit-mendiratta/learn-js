class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertAtHead(data) {
        this.head = new Node(data, this.head);
    }

    insertAtEnd(data) {

    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
}

let listA = new LinkedList();

listA.insertAtHead(5);
listA.insertAtHead(6);
listA.insertAtHead(7);
listA.insertAtHead(8);
listA.printList();
