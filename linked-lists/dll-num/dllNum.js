import { IndexError } from "../common/ll";
/**
 * DLLNodeNum: node for a doubly-linked list of numbers.
 *
 * - val
 * - next: next DLLNodeNum or null
 * - prev: previous DLLNodeNum or null
 */
class DLLNodeNum {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
/**
 * Doubly-Linked list of numbers.
 */
class DLLNum {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        for (const val of vals)
            this.push(val);
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
        return 42;
    }
    /** shift(): return & remove first item.
     *
     * Throws IndexError on empty list.
     **/
    shift() {
        return 42;
    }
    /** getAt(idx): get val at idx.
     *
     * Throws IndexError if not found.
     **/
    getAt(idx) {
        return 42;
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
        return 42;
    }
}
export { DLLNum, IndexError };
