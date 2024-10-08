import React, { useState } from "react";

const MobileScreen = ({ onPlayerJoin, question, onSubmitAnswer }) => {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleJoin = () => {
    onPlayerJoin(playerName);
    setSubmitted(true);
  };

  const handleAnswerSubmit = () => {
    onSubmitAnswer(selectedAnswer, playerName);
  };

  return (
    <div>
      {!submitted ? (
        <div>
          <h1>Join the Game</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleJoin}>Join</button>
        </div>
      ) : (
        <div>
          <h2>{question.text}</h2>
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
              />
              {option}
            </div>
          ))}
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  );
};

export default MobileScreen;
