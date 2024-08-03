//ADD TWO NUMBERS
class listnode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next;
  }
}

function addTwonumber(l1, l2) {
  let dummyhead = new listnode(0);
  let p = l1, q = l2, current = dummyhead
  let carry = 0;
  while (p !== null || q !== null) {
    let x = (p !== null) ? p.val : 0;
    let y = (q !== null) ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new listnode(sum % 10);
    current = current.next;
    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }
  if (carry > 0) {
    current.next = new listnode(carry)
  }
  return dummyhead.next
}

function printLinkedlist(node) {
  let current = node;
  let res = [];
  while (current !== null) {
    res.push(current.val)
    current = current.next;
  }
  console.log(res.join(" ->"));

}
//testcase 1
let l1 = new listnode(2, new listnode(4, new listnode(3)))
let l2 = new listnode(5, new listnode(6, new listnode(4)))
let result = addTwonumber(l1, l2)
printLinkedlist(result);

let l1_1 = new listnode(0);
let l1_2 = new listnode(0);
let result2 = addTwonumber(l1_1, l1_2);
printLinkedlist(result2);

let l1_3 = new listnode(9, new listnode(9, new listnode(9)))
let l2_3 = new listnode(1);
let result3 = addTwonumber(l1_3, l2_3)
printLinkedlist(result3)