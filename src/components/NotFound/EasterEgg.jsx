import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";

const shapes = [
  [
    [1, 1],
    [0, 1],
  ], // 2-block horizontal
  [
    [1, 1],
    [1, 1],
  ], // square
  [
    [1, 1],
    [1, 0],
  ], // square
  [
    [1, 0],
    [1, 1],
  ], // L shape
  [
    [0, 1],
    [1, 1],
  ], // reverse L shape
  [
    [1, 1, 1],
    [0, 1, 0],
  ], // T shape
  [
    [1, 1, 0],
    [0, 1, 1],
  ], // S shape
  [
    [0, 1, 1],
    [1, 1, 0],
  ], // Z shape
  [
    [1, 1, 1],
    [0, 0, 1],
  ], // 3-block horizontal
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
        if (
          !draggedShape ||
          !canPlaceShape(board, draggedShape, dropRow, dropCol)
        )
          return;
      }
    }
  }
  return false;
}

const EasterEgg = () => {
  const [board, setBoard] = useState(
    Array.from({ length: 5 }, () => Array(10).fill(0))
  );
  const [pieces, setPieces] = useState([]);
  const [draggedShape, setDraggedShape] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

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
      {/* Game blur wrapper */}
      <div
        style={{
          ...styles.gameWrapper,
          filter: !gameStarted ? "blur(4px)" : "none",
          pointerEvents: !gameStarted ? "none" : "auto",
        }}
      >
        <div style={styles.board}>
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const isHovered =
                hoveredCell &&
                hoveredCell[0] === rowIndex &&
                hoveredCell[1] === colIndex;

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    if (
                      draggedShape &&
                      canPlaceShape(board, draggedShape, rowIndex, colIndex)
                    ) {
                      setHoveredCell([rowIndex, colIndex]);
                    } else {
                      setHoveredCell(null);
                    }
                  }}
                  onDragLeave={() => setHoveredCell(null)}
                  onDrop={(e) => handleDrop(e, rowIndex, colIndex)}
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: cell
                      ? "#0f0f0f"
                      : isHovered
                      ? "#df9e9eff"
                      : "#fff",
                    border: "1px solid #ccc",
                  }}
                />
              );
            })
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
                        backgroundColor: cell ? "#0f0f0f" : "transparent",
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

      {/* Overlay on top of gameWrapper */}
      {!gameStarted && (
        <div style={styles.overlay}>
          <div style={styles.overlayContent}>
            <h2
              style={{
                marginBottom: "10px",
                fontSize: "20px",
                textAlign: "left",
              }}
            >
              Press
            </h2>
            <button
              onClick={() => setGameStarted(true)}
              style={styles.playButton}
            >
              <FaPlay size={20} />
            </button>
            <h2
              style={{
                marginTop: "10px",
                fontSize: "20px",
                textAlign: "right",
              }}
            >
              Play
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#eee",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
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
  gameWrapper: {
    position: "relative",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  overlayContent: {
    textAlign: "center",
    width: "40%",
    background: "white",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },

  playButton: {
    padding: "7px 14px",
    fontSize: "12px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: "#0f0f0f",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default EasterEgg;
