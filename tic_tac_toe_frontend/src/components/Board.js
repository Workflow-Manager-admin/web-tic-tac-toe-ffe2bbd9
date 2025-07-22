import React from 'react';

// PUBLIC_INTERFACE
const Board = ({ squares, onSquareClick }) => {
  /**
   * Renders a 3x3 game board with clickable squares
   * @param {Array} squares - Array of 9 elements containing 'X', 'O', or null
   * @param {Function} onSquareClick - Callback function when a square is clicked
   */
  const renderSquare = (i) => (
    <button
      className="square"
      onClick={() => onSquareClick(i)}
      disabled={squares[i]}
    >
      {squares[i]}
    </button>
  );

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
