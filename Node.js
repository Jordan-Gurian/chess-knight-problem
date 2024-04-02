const allowableMoves = require('./allowableMoves');

module.exports = class Node {
    constructor(x, y, parent = null, children = null) {
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.children = children;
    }

    createChildren() {
        this.children = allowableMoves(this.x, this.y);
        for (let i = 0; i < this.children.length; i++) {
            this.children[i] = new Node(this.children[i][0], this.children[i][1], this)
        }        
    }
}