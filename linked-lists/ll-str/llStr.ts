/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);
    newNode.next = this.head;
    this.head = newNode;

    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = this.head;

    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    if (this.head === null) throw new IndexError();

    let current = this.head;
    let previousNode: NodeStr | null = null;

    while (current.next !== null) {
      previousNode = current;
      current = current.next;
    }

    if (previousNode !== null) {
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      this.tail = null;
      this.head = null;
    }

    this.length--;

    return current.val;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if (this.head === null) throw new IndexError("Cannot shift from empty list!");

    const removedVal = this.head.val;
    this.head = this.head.next;

    if (this.head === null) this.tail = null;

    this.length--;

    return removedVal;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    if (idx < 0 || idx >= this.length) throw new IndexError("Index out of bounds");

    let current = this.head;
    let currentIdx = 0;

    while (currentIdx < idx && current !== null) {
      current = current.next;
      currentIdx++;
    }

    if (current === null) throw new IndexError("Index not found");

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    if (idx < 0 || idx >= this.length) throw new IndexError("Index out of bounds");

    let current = this.head;
    let currentIdx = 0;

    while (currentIdx < idx && current !== null) {
      current = current.next;
      currentIdx++;
    }

    if (current === null) throw new IndexError("Index not found");

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if (idx < 0 || idx > this.length) throw new IndexError("Index out of bounds");

    let current = this.head;
    let currentIdx = 0;

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    while (currentIdx < idx - 1 && current !== null) {
      current = current.next;
      currentIdx++;
    }

    if (current === null) throw new IndexError("Index not found");

    const newNode = new NodeStr(val);
    newNode.next = current.next;
    current.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if (idx < 0 || idx > this.length) throw new IndexError("Index out of bounds");

    let current = this.head;
    let previousNode: NodeStr | null = null;
    let currentIdx = 0;

    while (currentIdx < idx && current !== null) {
      previousNode = current;
      current = current.next;
      currentIdx++;
    }

    if (current === null) throw new IndexError("Index not found");

    if (previousNode !== null) {
      previousNode.next = current.next;
    } else {
      this.head = current.next;
    }

    if (current === this.tail) {
      this.tail = previousNode;
    }

    this.length--;

    return current.val;
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};