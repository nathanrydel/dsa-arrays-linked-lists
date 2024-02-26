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
        for (const val of vals)
            this.push(val);
    }
    /** _getNodeAt(idx): retrieve node at idx.
     *
     * Returns null if not found.
     **/
    _getNodeAt(idx) {
        let cur = this.head;
        let count = 0;
        while (cur !== null && count !== idx) {
            count += 1;
            cur = cur.next;
        }
        return cur;
    }
    /** push(val): add new value to end of list. */
    push(val) {
        return this.insertAt(this.length, val);
    }
    /** unshift(val): add new value to start of list. */
    unshift(val) {
        return this.insertAt(0, val);
    }
    /** pop(): return & remove last item.
     *
     * Throws IndexError on empty list.
     **/
    pop() {
        return this.removeAt(this.length - 1);
    }
    /** shift(): return & remove first item.
     *
     * Throws IndexError on empty list.
     **/
    shift() {
        return this.removeAt(0);
    }
    /** getAt(idx): get val at idx.
     *
     * Throws IndexError if not found.
     **/
    getAt(idx) {
        if (idx >= this.length || idx < 0) {
            throw new IndexError();
        }
        return this._getNodeAt(idx).val;
    }
    /** setAt(idx, val): set val at idx to val.
     *
     * Throws IndexError if not found.
     **/
    setAt(idx, val) {
        if (idx >= this.length || idx < 0) {
            throw new IndexError();
        }
        let cur = this._getNodeAt(idx);
        cur.val = val;
    }
    /** insertAt(idx, val): add node w/val before idx.
     *
     * Throws IndexError if not found.
     **/
    insertAt(idx, val) {
        if (idx > this.length || idx < 0) {
            throw new IndexError();
        }
        const newNode = new LLNode(val);
        // unshift
        if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (this.length === 0)
                this.tail = newNode;
        }
        // push
        else if (idx === this.length) {
            const prev = this._getNodeAt(idx - 1);
            newNode.next = prev.next;
            prev.next = newNode;
            this.tail = newNode;
        }
        // general case
        else {
            const prev = this._getNodeAt(idx - 1);
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.length += 1;
    }
    /** removeAt(idx): return & remove item at idx,
     *
     * Throws IndexError if not found.
     **/
    removeAt(idx) {
        if (idx >= this.length || idx < 0) {
            throw new IndexError();
        }
        // shift
        if (idx === 0) {
            const me = this.head;
            this.head = me.next;
            if (this.head === null)
                this.tail = null;
            this.length -= 1;
            return me.val;
        }
        // general case
        else {
            const prev = this._getNodeAt(idx - 1);
            const me = prev.next;
            prev.next = me.next;
            if (idx === this.length - 1)
                this.tail = prev;
            this.length -= 1;
            return me.val;
        }
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
