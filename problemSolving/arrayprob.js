





const solution = (pot) => {
    if (pot.length == 1) {
        if (pot[0].length == 1) {
            if (pot[0] == 1) {
                return false;
            } else {
                return true;
            }
        } else {
            if (pot[0].some(el => el == 0)) return true;
        }
    }
    for (let i = 0; i < pot.length; i++) {
        if (pot[i].every(el => el == 1)) return false;
    }
    let row = 0, col = 0;
    let startCell = [row, col];
    while (row <= pot.length - 1 && col <= pot[0].length - 1) {
        console.log(row, ':', col);
        if (!pot[row][col]) {
            if (row == pot.length - 1) return true;
            if (!pot[row + 1][col]) {
                pot[row][col] = '*';
                row++;
            } else if (!pot[row][col + 1]) {
                pot[row][col] = '*';
                col++;
            }
            continue;
        }
        else {
            pot[row][col] = 'v';
            col++;
            continue;
        }

    }
    return false;

};
