
const solution = (maze, startRow, startCol, destRow, destCol) => {
    if(maze[startRow][startCol] == 1 || maze[destRow][destCol] == 1) return false;
    maze[destRow][destCol] = 2;
    let found = false;
    const traverse = (column, row) => {
        console.log(`traverse(${column},${row})`);
        if(column >= maze.length || row >= maze[column].length) {
            return false;
        }
        if(maze[column][row] == 2) {
           found = true;
        } else if(maze[column][row] == 0) {
            maze[column][row] = 9;
            console.log(maze);
            if(column < maze.length) {
                traverse(column + 1, row);
            }
            if(row < maze[column].length) {
                traverse(column, row + 1);
            }
            if(column > 0 && column < maze.length) {
                traverse(column - 1, row);
            }
            if(row > 0 && row < maze[column].length) {
                traverse(column, row - 1);
            }
        }
    }
    traverse(startRow, startCol);
    return found;
};

