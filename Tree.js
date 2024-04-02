module.exports = class Tree {
    constructor(root) {
        this.root = root;
    }

    knightMoves(endPos, startPos = this.root) {
        const startNode = startPos;
        const MAX_MOVES = 64;
        let queueArr = [startNode];
        let index = 0;

        while (this.depth(queueArr[index]) < MAX_MOVES) {
            queueArr[index].createChildren()
            for (let i = 0; i < queueArr[index].children.length; i++) {
                queueArr.push(queueArr[index].children[i]);
                if (queueArr[index].children[i].x === endPos[0] && queueArr[index].children[i].y === endPos[1]) {
                    const steps = this.showSteps(queueArr[index].children[i]);
                    return this.niceKnightOutput(steps);
                }
            }
            index += 1;
        }
        return null;
    }

    depth(node, root = this.root) {
        let current = node;
        let count = 0;
        while (current != root) {
            if (current === null) {
                return null
            }
            current = current.parent;
            count += 1;
        }
        return count;
    }

    showSteps(node, root = this.root) {
        let current = node;
        let steps = [];
        while (current != root) {
            if (current === null) {
                return null
            }
            steps.unshift([current.x, current.y]);
            current = current.parent;
        }
        steps.unshift([root.x, root.y])
        return steps;
    }

    niceKnightOutput(steps) {
        let output = `=> You made it in ${steps.length - 1} steps!\n`;
        for (let i = 0; i < steps.length; i++) {
            output += `[${steps[i]}]\n`
        }
        return output
    }

}