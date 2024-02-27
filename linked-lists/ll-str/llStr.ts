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

  /** _getNodeAt(idx): retrieve node at idx.
   *
   * Returns null if not found.
   **/

  private _getNodeAt(idx: number): NodeStr | null {
    let curr: NodeStr | null = this.head;
    let count = 0;

    while (curr !== null && count !== idx) {
      count++;
      curr = curr.next;
    }

    return curr;
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    return this.insertAt(this.length, val);
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    return this.insertAt(0, val);
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    if (idx < 0 || idx >= this.length) {
      throw new IndexError("Index out of bounds");
    }

    return this._getNodeAt(idx)!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    if (idx >= this.length || idx < 0) {
      throw new IndexError("Index out of bounds");
    }

    let cur = this._getNodeAt(idx);
    cur!.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if (idx < 0 || idx > this.length) {
      throw new IndexError("Index out of bounds");
    }

    const newNode = new NodeStr(val);

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

  removeAt(idx: number): string {
    if (idx < 0 || idx > this.length) {
      throw new IndexError("Index out of bounds");
    }

    // shift
    if (idx === 0) {
      const me = this.head!;
      this.head = me.next;
      if (this.head === null) this.tail = null;
      this.length--;
      return me.val;
    }

    // general case
    else {
      const prev = this._getNodeAt(idx - 1);
      const me = prev!.next!;
      prev!.next = me.next;
      if (idx === this.length - 1) this.tail = prev;
      this.length--;
      return me.val;
    }
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out: string[] = [];
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