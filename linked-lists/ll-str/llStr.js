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
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * Linked list of numbers.
 */
class LLStr {
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
        return "x";
    }
    /** shift(): return & remove first item.
     *
     * Throws IndexError on empty list.
     **/
    shift() {
        return "x";
    }
    /** getAt(idx): get val at idx.
     *
     * Throws IndexError if not found.
     **/
    getAt(idx) {
        return "x";
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
        return "x";
    }
    /** toArray (useful for tests!) */
    toArray() {
        const out = [];
        let current = this.head;
        while (current) {
            out.push(current.val);
            current = current.next;
        }
        return out;
    }
}
export { IndexError, LLStr, NodeStr, };
