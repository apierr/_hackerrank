// You’re given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer, insert this node at the head of the linked list and return the new head node. The head pointer given may be null meaning that the initial list is empty.

// head = |data, next| -> |data, next| -> |data, next| = tail

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
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        console.log(String(node.data));

        node = node.next;
    }
}

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedList {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtHead(head, data) {
    const node = new SinglyLinkedListNode(data);
    return head === null ? node : (node.next = head) && node;
}

function main() {
    const llistItem = [383, 484, 392, 975, 321];
    let llist = new SinglyLinkedList();

    llistItem.forEach(v => {
        const llist_head = insertNodeAtHead(llist.head, v);
        llist.head = llist_head;
    });

    printSinglyLinkedList(llist.head);
}

main();
