"use strict";

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

function printSinglyLinkedList(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let currNode = head;
    let currPosition = 1;
    const newNode = new SinglyLinkedListNode(data);
    while (currPosition < position) {
        currPosition++;
        currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
    return head;
}

function main() {
    let llist = new SinglyLinkedList();
    const [llistItems, data, position] = [[16, 13, 7], 1, 2];
    llistItems.forEach(v => llist.insertNode(v));

    let llist_head = insertNodeAtPosition(llist.head, data, position);

    printSinglyLinkedList(llist_head);
}

main();
