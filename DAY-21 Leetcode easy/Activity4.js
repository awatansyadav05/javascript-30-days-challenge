function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
function mergeTwoLists(l1, l2) {
  // Create a dummy node to help with the merge process
  let dummy = new ListNode(0);
  let current = dummy;

  // Traverse both lists and append the smaller value to the merged list
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // If there are remaining elements in either list, append them
  if (l1 !== null) {
    current.next = l1;
  } else if (l2 !== null) {
    current.next = l2;
  }

  // Return the merged list, which starts from dummy.next
  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(' -> '));
}

// Test cases
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(list1, list2);

console.log("Merged list:");
printLinkedList(mergedList);