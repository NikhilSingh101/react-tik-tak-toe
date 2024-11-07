import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner.js";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true => O , false => X
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }

    const win = isWinner(board, turn ? "O" : "X");
    // if (win) {
      setWinner(win);
    // }

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }

  return (
    <div className="grid-wrapper">
      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset Game
          </button>
        </>
      )}
      <h1 className="turn-highlight">Current Turn : {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((ele, idx) => (
          <Card key={idx} gameEnd={winner ? true : false} onPlay={play} player={ele} index={idx} />
        ))}
      </div>
    </div>
  );
}
export default Grid;

// function Grid({ numberOfCards }) {
//     const [board, setBoard] = useState(Array(numberOfCards).fill(''));
//     const [turn, setTurn] = useState(true); // true => O , false => X
//     const [winner, setWinner] = useState(null);

//     function play(index) {
//         if(turn == true) board[index] = 'O';
//         else board[index] = 'X';

//         let win = isWinner(board, turn ? 'O' : 'X');
//         setWinner(win);

//         setBoard([...board]);
//         setTurn(!turn);
//     }

//     function reset() {
//         setBoard(Array(numberOfCards).fill(''));
//         setTurn(true);
//         setWinner(null);
//     }

//     return (
//         <div className="wrapper-grid">
//             { winner && (
//                 <>
//                     <h1 className="turn-highlight">Winner is {winner}</h1>
//                     <button className="reset" onClick={reset}>Reset Button</button>
//                 </>
//             )}
//             <h1 className="turn-highlight">Current Turn : {turn ? 'O' : 'X'}</h1>
//             <div className="grid">
//                 {board.map((ele, idx) => (
//                     <Card key={idx} onPlay={play} player={ele} index={idx}/>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Grid;

