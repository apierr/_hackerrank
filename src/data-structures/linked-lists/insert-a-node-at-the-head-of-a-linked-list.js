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
    const pNewNode = new SinglyLinkedListNode(data);

    if (head == null) {
        head = pNewNode;
        return head;
    } else {
        pNewNode.next = head;
        return pNewNode;
    }
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
