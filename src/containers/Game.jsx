import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import "./Game.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const gameId = "default-game";

  useEffect(() => {
    const gameRef = doc(db, "games", gameId);

    const unsubscribe = onSnapshot(gameRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setBoard(data.board);
        setIsXNext(data.isXNext);
      }
    });

    return () => unsubscribe();
  }, [gameId]);

  const handleClick = async (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);

    await setDoc(doc(db, "games", gameId), {
      board: newBoard,
      isXNext: !isXNext,
    });
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const resetGame = async () => {
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
    setIsXNext(true);

    await setDoc(doc(db, "games", gameId), {
      board: newBoard,
      isXNext: true,
    });
  };

  return (
    <div className="game" id="game">
      <div className="w-full flex items-center justify-center py-24">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-25"
          >
            <img src={Leaf1} className="w-6 h-auto object-contain" alt="Leaf 1" />
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-sunrise-light via-sunrise to-sunset-dark">
              Game
            </p>
            <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf 2" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="board">
        {board.map((_, index) => renderSquare(index))}
      </div>
      <div className="status">
        {calculateWinner(board)
          ? `Winner: ${calculateWinner(board)}`
          : `Next player: ${isXNext ? "X" : "O"}`}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Game;
