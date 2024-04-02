const Node = require('./Node');
const Tree = require('./Tree');

const myNode = new Node(3, 4);
const myTree = new Tree(myNode);
console.log(myTree.knightMoves([2, 4]));