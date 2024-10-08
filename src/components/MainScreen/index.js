import React, { useState, useEffect } from "react";
import { QRCode } from "qrcode.react";
import QuestionComponent from "./QuestionComponent";
import PlayerComponent from "./PlayerComponent";

const MainScreen = () => {
  const [players, setPlayers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const handlePlayerJoin = (player) => {
    setPlayers([...players, player]);
  };

  const handleCorrectAnswer = (playerName) => {
    setCorrectAnswer(true);
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCorrectAnswer(false);
    }, 3000);
  };

  return (
    <div>
      <h1>KBC Game</h1>
      <QRCode value={window.location.href + "/mobile"} />
      {players.length > 0 && <h2>Players:</h2>}
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <QuestionComponent
        currentQuestionIndex={currentQuestionIndex}
        onCorrectAnswer={handleCorrectAnswer}
      />
      {correctAnswer && <h2>Congratulations!</h2>}
    </div>
  );
};

export default MainScreen;
