import React, { useState } from 'react'
import { Box } from './Box'

export const Board = () => {
  let clearArr =[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
  let arr = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
  const [board,setBoard] =useState(clearArr)

  const handleUpdate = (i,j, num) => {
    if(num>9 || num<0){
        alert("0 to 9 only current cell will be set to empty")
    }
    const newBoard = [...board];
    if(num==0 || num>9 || num<0){
        newBoard[i][j] = 0;
    }else{
        newBoard[i][j] = parseInt(num);
    }
    setBoard(newBoard);
  }

  const solve = ()=>{
    setBoard((num) => [...solveSudoku(num)]);
  }

  var solveSudoku = function (board) {
    dfs(board, 0, 0)
    let board2 = board
    return board2;
  };
  
  let isValid = (board, row, column, value) => {
    let n = board.length;
  
    if (board[row].includes(value)) return false;
  
    for (let i = 0; i < n; i++) {
      if (board[i][column] === value) return false;
    }
  
    let [top, left] = [Math.floor(row / 3) * 3, Math.floor(column / 3) * 3];
  
    for (let i = top; i < top + 3; i++) {
      for (let j = left; j < left + 3; j++) {
        if (board[i][j] === value) return false;
      }
    }
  
    return true;
  }
  
  let dfs = (board, row, column) => {
    if (row === 9) return true;
    if (column === 9) return dfs(board, row + 1, 0);
    if (board[row][column] !== 0) return dfs(board, row, column + 1);
  
    for (let i = 1; i < 10; i++) {
      if (isValid(board, row, column, i)) {
        board[row][column] = i;
        if (dfs(board, row, column + 1)) return true;
        board[row][column] = 0;
      }
    }
  
    return false;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <main>
        <div className='board'>
            {board.map((x,i)=> x.map((y,j)=> <Box num={y} row={i} col={j} handleUpdate ={handleUpdate}/> ))}
        </div>
        <button onClick={()=>{solve()}} className='btn'>Solve</button>
        <button onClick={refreshPage} className='btn'>Reset</button>
    </main>

  )
}
