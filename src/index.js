let matrix = [
    [8,0,1,0,2,6,0,4,0],
    [0,0,9,8,0,0,0,2,6],
    [0,5,0,0,7,3,8,9,1],
    [1,3,2,0,8,0,0,7,9],
    [0,0,0,0,0,4,0,0,0],
    [7,6,0,0,1,0,5,0,0],
    [4,0,0,0,0,0,9,1,0],
    [9,0,0,3,4,0,0,0,7],
    [0,8,3,0,9,0,0,5,4]
]
const solve = () => { 
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(matrix[i][j] == 0) {
                for(let n = 1; n <= 9; n++) {
                    if(coordinates(i, j, n)) {
                        matrix[i][j] = n
                        solve()
                    }
                }
                return matrix
            }
        }
    }
    
}
const coordinates = (y, x, n) => {
    for(let i = 0; i < 9; i++) {
        if(matrix[y][i] == n) return false
    }
    for(let i = 0; i < 9; i++) {
        if(matrix[i][x] == n) return false
    }
    let x0 = Math.floor(x/3)*3
    let y0 = Math.floor(y/3)*3
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(matrix[y0+i][x0+j] == n) return false
        }
    }
    return true
}
console.log(solve())