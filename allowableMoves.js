module.exports = function allowableMoves(x,y) {
    const lowerLim = 0;
    const upperLim = 7;

    if (x < lowerLim || x > upperLim ||
        y < lowerLim || y > upperLim) {
            return [];
    } 

    let arr = [[x - 1, y + 2], 
        [x + 1, y + 2],
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x - 2, y - 1],
        [x - 2, y + 1]]
    let i = 0;
    while (i < arr.length) {
        if (arr[i][0] < lowerLim || arr[i][0] > upperLim ||
            arr[i][1] < lowerLim || arr[i][1] > upperLim) {
                arr.splice(i, 1);
            } else {
                i += 1;
            }
    }
    return arr
}