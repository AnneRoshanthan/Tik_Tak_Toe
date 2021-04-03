import "./App.css";
import { useState } from "react";

function App() {
  const [playerOne, setplayerOne] = useState("X");
  const [playerTwo, setplayerTwo] = useState("O");
  const [gameOver, setgameOver] = useState(false);
  const [currentplayer, setcurrentplayer] = useState(playerOne);
  const [plays, setplays] = useState(1);
  const [draw, setdraw] = useState(false);
  const [result, setResult] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  function checkResult() {
    setplays(plays + 1);
    if (checkVertical() || checkHorizontal() || checkDiagonal()) {
      setgameOver(true);
      return;
    }
    setcurrentplayer(currentplayer === playerOne ? playerTwo : playerOne);

    if (plays >= 9) {
      setgameOver(true);
      setdraw(true);
      return;
    }
  }

  function checkVertical() {
    for (let i = 0; i < 3; i++) {
      const arr = [result[0][i], result[1][i], result[2][i]];
      const uniques = Array.from(new Set(arr));
      if (uniques.length === 1 && uniques[0]) {
        return(true);
      }
    }
  }

  function checkHorizontal() {
    for (let i = 0; i < 3; i++) {
      const arr = [...result[i]];
      const uniques = Array.from(new Set(arr));
      if (uniques.length === 1 && uniques[0]) {
        return(true);
      }
    }
  }

  function checkDiagonal() {
    const diagLeft = [result[0][0], result[1][1], result[2][2]];
    const diagRight = [result[0][2], result[1][1], result[2][0]];

    const uniqueLeft = Array.from(new Set(diagLeft));
    const uniqueRight = Array.from(new Set(diagRight));

    if (
      (uniqueLeft.length === 1 && uniqueLeft[0]) ||
      (uniqueRight.length === 1 && uniqueRight[0])
    ) {
      return(true);
    }
  }
  function restart() {
    window.location.reload();
  }

  function handlePlay(e) {
    const element = e.target;
    if (!element.innerHTML && !gameOver) {
      const span = document.createElement("span");
      span.classList.add("fade-in");
      span.innerHTML = currentplayer;

      const col = element.getAttribute("data-col");
      const row = element.parentElement.getAttribute("data-row");
      const tempArr = [...result];
      tempArr[row - 1][col - 1] = currentplayer;
      setResult(tempArr);
      element.appendChild(span);

      checkResult();
    }
  }
  return (
    <div className="App">
      <div className="inner-container">
        <h1>Tic Tak Toe</h1>
        <p>{!gameOver && `${currentplayer} it's your turn`} </p>
        {gameOver && (
          <h2 className="game-over">
            Game Over!{" "}
            {draw ? " It's a draw" : `${currentplayer} is the winner!`}
          </h2>
        )}
        <table>
          <tr data-row="1">
            <td data-col="1" onClick={handlePlay}></td>
            <td data-col="2" onClick={handlePlay}></td>
            <td data-col="3" onClick={handlePlay}></td>
          </tr>
          <tr data-row="2">
            <td data-col="1" onClick={handlePlay}></td>
            <td data-col="2" onClick={handlePlay}></td>
            <td data-col="3" onClick={handlePlay}></td>
          </tr>
          <tr data-row="3">
            <td data-col="1" onClick={handlePlay}></td>
            <td data-col="2" onClick={handlePlay}></td>
            <td data-col="3" onClick={handlePlay}></td>
          </tr>
        </table>
        {gameOver && <button className="restart-btn" onClick={restart}>Restart</button>}
      </div>
    </div>
  );
}

export default App;
