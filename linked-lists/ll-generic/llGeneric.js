/** IndexError: raised when index not found. */
class IndexError extends Error {
}
/**
 * LLNode: node for a singly-linked list of numbers.
 *
 * - val
 * - next: next LLNode or null
 */
class LLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * Linked list of numbers.
 */
class LL {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /** push(val): add new value to end of list. */
    push(val) {
    }
    /** unshift(val): add new value to start of list. */
    unshift(val) {
    }
    /** pop(): return & remove last item.
     *
     * Throws IndexError on empty list.
     **/
    pop() {
        return "todo";
    }
    /** shift(): return & remove first item.
     *
     * Throws IndexError on empty list.
     **/
    shift() {
        return "todo";
    }
    /** getAt(idx): get val at idx.
     *
     * Throws IndexError if not found.
     **/
    getAt(idx) {
        return "todo";
    }
    /** setAt(idx, val): set val at idx to val.
     *
     * Throws IndexError if not found.
     **/
    setAt(idx, val) {
    }
    /** insertAt(idx, val): add node w/val before idx.
     *
     * Throws IndexError if not found.
     **/
    insertAt(idx, val) {
    }
    /** removeAt(idx): return & remove item at idx,
     *
     * Throws IndexError if not found.
     **/
    removeAt(idx) {
        return "todo";
    }
    /** toArray (useful for tests!) */
    toArray() {
        return [];
    }
}
// as a convenience for students who may not be familiar with the
// syntax to use the generic LL<T> class, here are pre-made versions
// for strings and numbers:
class LLStr extends LL {
}
class LLNum extends LL {
}
class LLNodeStr extends LLNode {
}
class LLNodeNum extends LLNode {
}
export { IndexError, LL, LLStr, LLNum, LLNodeStr, LLNodeNum, LLNode, };
