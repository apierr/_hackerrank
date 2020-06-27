// The first line of input contains , the number of elements in the linked list.
// The next  lines contain one element each, which are the elements of the linked list.

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    if (head) {
        console.log(head.data);
        printLinkedList(head.next);
    }
}

function main() {
    let llist = new SinglyLinkedList();

    listItems = [17, 19, 5, 12];
    listItems.forEach(e => {
        llist.insertNode(e);
    });

    printLinkedList(llist.head); // ->17, 19, 5, 12
}

main();
