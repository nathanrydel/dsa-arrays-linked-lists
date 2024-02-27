/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * LLNode: node for a singly-linked list of numbers.
 *
 * - val
 * - next: next LLNode or null
 */

class LLNode<T> {
  val: T;
  next: LLNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LL<T> {
  head: LLNode<T> | null;
  tail: LLNode<T> | null;
  length: number;

  constructor(vals: T[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** _getNodeAt(idx): retrieve node at idx.
   *
   * Returns null if not found.
   **/

  _getNodeAt(idx: number): LLNode<T> | null {
    let curr: LLNode<T> | null = this.head;
    let count = 0;

    while (curr !== null && count !== idx) {
      count++;
      curr = curr.next;
    }

    return curr;
  }

  /** push(val): add new value to end of list. */

  push(val: T): void {
    return this.insertAt(this.length, val);
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: T): void {
    return this.insertAt(0, val);
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): T {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): T {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): T {
    if (idx >= this.length || idx < 0) {
      throw new IndexError();
    }

    return this._getNodeAt(idx)!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: T): void {
    if (idx >= this.length || idx < 0) {
      throw new IndexError();
    }

    let curr = this._getNodeAt(idx);
    curr!.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: T): void {
    if (idx > this.length || idx < 0) {
      throw new IndexError();
    }

    const newNode = new LLNode(val);

    // unshift
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
    }

    // push
    else if (idx === this.length) {
      const prev = this._getNodeAt(idx - 1);
      newNode.next = prev!.next;
      prev!.next = newNode;
      this.tail = newNode;
    }

    // general case
    else {
      const prev = this._getNodeAt(idx - 1);
      newNode.next = prev!.next;
      prev!.next = newNode;
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): T {
    if (idx >= this.length || idx < 0) {
      throw new IndexError();
    }

    // shift
    if (idx === 0) {
      const curr = this.head!;
      this.head = curr.next;
      if (this.head === null) this.tail = null;
      this.length--;
      return curr.val;
    }

    // general case
    else {
      const prev = this._getNodeAt(idx - 1);
      const curr = prev!.next!;
      prev!.next = curr.next;

      if (idx === this.length - 1) this.tail = prev;

      this.length--;
      return curr.val;
    }
  }

  /** toArray (useful for tests!) */

  toArray(): T[] {
    const out: T[] = [];
    let curr = this.head;

    while (curr) {
      out.push(curr.val);
      curr = curr.next;
    }
    return out;
  }
}

// as a convenience for students who may not be familiar with the
// syntax to use the generic LL<T> class, here are pre-made versions
// for strings and numbers:

class LLStr extends LL<string> { }

class LLNum extends LL<number> { }

class LLNodeStr extends LLNode<string> { }

class LLNodeNum extends LLNode<number> { }

export {
  IndexError,
  LL,
  LLStr,
  LLNum,
  LLNodeStr,
  LLNodeNum,
  LLNode,
};
