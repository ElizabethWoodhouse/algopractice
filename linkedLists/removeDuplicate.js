/* prompt: 
  You're given the head of a Singly Linked List whose nodes are in sorted order
  with respect to their values. Write a function that returns a modified version
  of the Linked List that doesn't contain any nodes with duplicate values. The
  Linked List should be modified in place (i.e., you shouldn't create a brand
  new list), and the modified Linked List should still have its nodes sorted
  with respect to their values.
  Each LinkedList node has an integer value as well as a next node pointing 
  to the next node in the list or to None / null if it's the tail of the list.
*/

/* my pseudocode
    input: linkedList
    output: modified linkedList List without nodes that contain duplicate values (sorted order)
    note: use linkedList being in order to my advantage
    how: 
        iterate through linkedList to get each node (use while loop condition is linkedList is not null)
            if this current node value is equal to the next node value
                update the pointers/connection from current node to connect to next next node (removes any connection to duplicated node)
            else 
                move currentNode to next node to continue traversing through linkedList
        return updated linkedList
    time: O(n), due to traversing each node
    space: O(1), just saving linkedList that was given
*/

function removeDuplicatesFromLinkedList(linkedList) {
	let currentNode = linkedList;
	while (currentNode) {
		if (currentNode.value === currentNode.next) {
			currentNode.next.next === undefined
				? (currentNode.next = null)
				: (currentNode.next = currentNode.next.next);
		} else {
			currentNode = currentNode.next;
		}
	}
	return linkedList;
}

//test case
//how do I get my test cases to work?
const testList = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);


removeDuplicatesFromLinkedList(testList);

//expected output