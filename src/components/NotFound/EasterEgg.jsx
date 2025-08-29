import React, { useState, useEffect } from "react";

const shapes = [
  [[1, 1]], // 2-block horizontal
  [[1], [1], [1]], // 3-block vertical
  [
    [1, 1],
    [1, 1],
  ], // square
  [
    [1, 0],
    [1, 1],
  ], // L shape
];

function checkAndClear(board) {
  const newBoard = board.map((row) => [...row]);

  // Clear full rows
  newBoard.forEach((row, rowIndex) => {
    if (row.every((cell) => cell === 1)) {
      newBoard[rowIndex] = Array(10).fill(0);
    }
  });

  // Clear full columns
  for (let col = 0; col < 10; col++) {
    const isFull = newBoard.every((row) => row[col] === 1);
    if (isFull) {
      newBoard.forEach((row) => (row[col] = 0));
    }
  }

  return newBoard;
}

function canPlaceShape(board, shape, row, col) {
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (shape[r][c] === 1) {
        const boardRow = row + r;
        const boardCol = col + c;

        if (
          boardRow >= board.length ||
          boardCol >= board[0].length ||
          board[boardRow][boardCol] === 1
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

function hasValidMove(board, pieces) {
  for (let piece of pieces) {
    for (let row = 0; row <= board.length - piece.length; row++) {
      for (let col = 0; col <= board[0].length - piece[0].length; col++) {
        if (canPlaceShape(board, piece, row, col)) return true;
      }
    }
  }
  return false;
}

const EasterEgg = () => {
  const [board, setBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );
  const [pieces, setPieces] = useState([]);
  const [draggedShape, setDraggedShape] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    generateNewPieces();
  }, []);

  const generateNewPieces = () => {
    const newPieces = Array(3)
      .fill(null)
      .map(() => shapes[Math.floor(Math.random() * shapes.length)]);
    setPieces(newPieces);
  };

  const handleDragStart = (e, shape) => {
    setDraggedShape(shape);
  };

  const handleDrop = (e, dropRow, dropCol) => {
    e.preventDefault();
    if (!draggedShape || !canPlaceShape(board, draggedShape, dropRow, dropCol))
      return;

    const newBoard = board.map((row) => [...row]);
    for (let r = 0; r < draggedShape.length; r++) {
      for (let c = 0; c < draggedShape[r].length; c++) {
        if (draggedShape[r][c] === 1) {
          newBoard[dropRow + r][dropCol + c] = 1;
        }
      }
    }

    const clearedBoard = checkAndClear(newBoard);
    setBoard(clearedBoard);

    const remainingPieces = pieces.filter((p) => p !== draggedShape);
    setPieces(remainingPieces);
    setDraggedShape(null);

    // If no pieces left, generate more
    if (remainingPieces.length === 0) {
      const newSet = Array(3)
        .fill(null)
        .map(() => shapes[Math.floor(Math.random() * shapes.length)]);
      setPieces(newSet);

      // Check for game over
      if (!hasValidMove(clearedBoard, newSet)) {
        setGameOver(true);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center" }}>🎮 Easter Egg Puzzle</h2>

      <div style={styles.board}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, rowIndex, colIndex)}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: cell ? "#007bff" : "#fff",
                border: "1px solid #ccc",
              }}
            />
          ))
        )}
      </div>

      <div style={styles.pieceTray}>
        {pieces.map((shape, i) => (
          <div
            key={i}
            draggable
            onDragStart={(e) => handleDragStart(e, shape)}
            style={styles.piece}
          >
            {shape.map((row, rIdx) => (
              <div key={rIdx} style={{ display: "flex" }}>
                {row.map((cell, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: cell ? "#007bff" : "transparent",
                      border: cell ? "1px solid #333" : "1px dashed #ccc",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {gameOver && (
        <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          <h3>🛑 Game Over! No more valid moves.</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 30px)",
    gridGap: "2px",
    backgroundColor: "#333",
    padding: "5px",
    marginBottom: "20px",
  },
  pieceTray: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "10px",
  },
  piece: {
    padding: "5px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    cursor: "grab",
  },
};

export default EasterEgg;
