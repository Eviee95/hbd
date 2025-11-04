import { useState, useEffect } from "react";
import loginIcon from "../assets/tolt.png";
import nyilIcon from "../assets/nyil.png";
import nextPageImage from "../assets/2.png";
import thirdPageImage from "../assets/3.png";
import fourthPageImage from "../assets/4.png";
import fifthPageImage from "../assets/5.png";
import sixthPageImage from "../assets/6.png";
import seventhPageImage from "../assets/7.png";
import eighthPageImage from "../assets/8.png";
import ninthPageImage from "../assets/9.png";
import tenthPageImage from "../assets/10.png";
import eleventhPageImage from "../assets/11.png";
import twelfthPageImage from "../assets/12.png";
import thirteenthPageImage from "../assets/13.png";
import fourteenthPageImage from "../assets/14.png";
import fifteenthPageImage from "../assets/15.png";
import sixteenthPageImage from "../assets/16.png";
import seventeenthPageImage from "../assets/17.png";
import eighteenthPageImage from "../assets/18.png";
import nineteenthPageImage from "../assets/19.png";
import twentiethPageImage from "../assets/20.png";
import twentyFirstPageImage from "../assets/21.png";
import twentySecondPageImage from "../assets/22.png";
import twentyThirdPageImage from "../assets/23.png";
import twentyFourthPageImage from "../assets/24.png";
import twentyFifthPageImage from "../assets/25.png";
import twentySixthPageImage from "../assets/26.png";
import twentySeventhPageImage from "../assets/27.png";
import twentyEighthPageImage from "../assets/28.png";
import twentyNinthPageImage from "../assets/29.png";
import thirtiethPageImage from "../assets/30.png";
import thirtyFirstPageImage from "../assets/31.png";
import thirtySecondPageImage from "../assets/32.png";
import thirtyThirdPageImage from "../assets/33.png";
import thirtyFourthPageImage from "../assets/34.png";
import thirtyFifthPageImage from "../assets/35.png";
import thirtySixthPageImage from "../assets/36.png";
import thirtySeventhPageImage from "../assets/37.png";
import thirtyEighthPageImage from "../assets/38.png";
import cardImage from "../assets/card.png";
import card1Image from "../assets/card1.png";
import card2Image from "../assets/card2.png";
import card3Image from "../assets/card3.png";
import userstoneImage from "../assets/userstone.png";
import userpaperImage from "../assets/userpaper.png";
import userscissorImage from "../assets/userscissor.png";
import oppstoneImage from "../assets/oppstone.png";
import opppaperImage from "../assets/opppaper.png";
import oppscissorImage from "../assets/oppscissor.png";
import akasztImage from "../assets/akaszt.png";
import akaszt1Image from "../assets/akaszt1.png";
import akaszt2Image from "../assets/akaszt2.png";
import akaszt3Image from "../assets/akaszt3.png";
import akaszt4Image from "../assets/akaszt4.png";
import akaszt5Image from "../assets/akaszt5.png";
import akaszt6Image from "../assets/akaszt6.png";
import akaszt7Image from "../assets/akaszt7.png";
import akaszt8Image from "../assets/akaszt8.png";
import akaszt9Image from "../assets/akaszt9.png";
import akaszt10Image from "../assets/akaszt10.png";
import akaszt11Image from "../assets/akaszt11.png";
import "./Card.css";

interface CardType {
  id: number;
  image: string;
  type: string;
  uniqueId: number;
}

export default function Card() {
  const [showHint, setShowHint] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showQuestionResult, setShowQuestionResult] = useState("");
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [gameResult, setGameResult] = useState("");
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const [gameFinished, setGameFinished] = useState(false);
  const [showComputerChoice, setShowComputerChoice] = useState(false);
  
  // Hangman game states
  const [hangmanWords] = useState(["trozsák", "miafasz"]);
  const [currentHangmanWord, setCurrentHangmanWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [hangmanGameOver, setHangmanGameOver] = useState(false);
  const [hangmanWon, setHangmanWon] = useState(false);

  // Hungarian letters for keyboard
  const hungarianLetters = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz".split("");

  useEffect(() => {
    if (currentPage === 11) {
      initializeCards();
    }
    
    if (currentPage === 36) {
      initializeHangman();
    }
  }, [currentPage]);

  useEffect(() => {
    // Ellenőrizzük, hogy valaki elérte-e a 3 pontot
    if ((scores.player === 3 || scores.computer === 3) && currentPage === 29 && !gameFinished) {
      setGameFinished(true);
    }
  }, [scores, currentPage, gameFinished]);

  // Hangman game logic
  const initializeHangman = () => {
    // Véletlenszerű szó kiválasztása
    const randomWord = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    setCurrentHangmanWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setHangmanGameOver(false);
    setHangmanWon(false);
  };

  const handleLetterGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || hangmanGameOver || hangmanWon) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);

    if (!currentHangmanWord.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);

      if (newWrongGuesses >= 11) {
        setHangmanGameOver(true);
      }
    } else {
      // Check if word is completely guessed
      const wordGuessed = currentHangmanWord.split('').every(char => 
        newGuessedLetters.includes(char)
      );
      if (wordGuessed) {
        setHangmanWon(true);
      }
    }
  };

  const getHangmanImage = () => {
    switch (wrongGuesses) {
      case 0: return akasztImage;
      case 1: return akaszt1Image;
      case 2: return akaszt2Image;
      case 3: return akaszt3Image;
      case 4: return akaszt4Image;
      case 5: return akaszt5Image;
      case 6: return akaszt6Image;
      case 7: return akaszt7Image;
      case 8: return akaszt8Image;
      case 9: return akaszt9Image;
      case 10: return akaszt10Image;
      case 11: return akaszt11Image;
      default: return akasztImage;
    }
  };

  const displayWord = () => {
    return currentHangmanWord.split('').map((letter, index) => (
      <span key={index} className="word-letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  const initializeCards = () => {
    const cardTypes = [
      { id: 1, image: card1Image, type: "card1" },
      { id: 2, image: card2Image, type: "card2" },
      { id: 3, image: card3Image, type: "card3" }
    ];
    
    const allCards = [...cardTypes, ...cardTypes];
    
    const shuffledCards = allCards
      .map(card => ({ ...card, uniqueId: Math.random() }))
      .sort(() => Math.random() - 0.5);
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setGameCompleted(false);
  };

  const handleCardClick = (cardId: number, cardType: string) => {
    if (flippedCards.length === 2 || flippedCards.includes(cardId) || matchedPairs.includes(cardType)) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const firstCard = cards.find(card => card.uniqueId === newFlippedCards[0]);
      const secondCard = cards.find(card => card.uniqueId === newFlippedCards[1]);

      if (firstCard && secondCard && firstCard.type === secondCard.type) {
        setMatchedPairs([...matchedPairs, firstCard.type]);
        setFlippedCards([]);
        
        if (matchedPairs.length + 1 === 3) {
          setGameCompleted(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (message) setMessage("");
  };

  const checkPassword = () => {
    if (password.toLowerCase() === "szeg") {
      setMessage("Helyes jelszó! ✓");
      setIsSuccess(true);
      
      setTimeout(() => {
        setCurrentPage(1);
      }, 1000);
    } else {
      setMessage("Hibás jelszó! Próbáld újra.");
      setIsSuccess(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  };

  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    
    if (answer === "C") {
      setShowQuestionResult("correct");
      setTimeout(() => {
        setCurrentPage(25);
      }, 1000);
    } else {
      setShowQuestionResult("incorrect");
      setTimeout(() => {
        setCurrentPage(26);
      }, 1000);
    }
  };

  const handleChoiceSelect = (choice: string) => {
    if (playerChoice || gameFinished) return;

    setPlayerChoice(choice);
    
    const choices = ['stone', 'paper', 'scissor'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice);

    setTimeout(() => {
      setShowComputerChoice(true);
      determineWinner(choice, randomChoice);
    }, 300);
  };

  const determineWinner = (player: string, computer: string) => {
    let result;
    if (player === computer) {
      result = "draw";
    } else if (
      (player === 'stone' && computer === 'scissor') ||
      (player === 'paper' && computer === 'stone') ||
      (player === 'scissor' && computer === 'paper')
    ) {
      result = "win";
      setScores(prev => ({ ...prev, player: prev.player + 1 }));
    } else {
      result = "lose";
      setScores(prev => ({ ...prev, computer: prev.computer + 1 }));
    }
    setGameResult(result);
  };

  const playAgain = () => {
    if (gameFinished) return;
    setPlayerChoice(null);
    setComputerChoice(null);
    setGameResult("");
    setShowComputerChoice(false);
  };

  const restartGameFromResults = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setGameResult("");
    setScores({ player: 0, computer: 0 });
    setGameFinished(false);
    setShowComputerChoice(false);
    setCurrentPage(29);
  };

  const handleArrowClick = () => {
    if (currentPage === 0 && !isSuccess) {
      checkPassword();
    } else if (currentPage === 0 && isSuccess) {
      setCurrentPage(1);
    } else if (currentPage > 0 && currentPage < 24 && currentPage !== 6 && currentPage !== 11 && currentPage !== 28 && currentPage !== 29 && currentPage !== 31 && currentPage !== 32 && currentPage !== 33 && currentPage !== 34 && currentPage !== 35 && currentPage !== 36 && currentPage !== 37) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 11 && gameCompleted) {
      setCurrentPage(12);
    } else if (currentPage === 24) {
      return;
    } else if (currentPage === 25) {
      setCurrentPage(27);
    } else if (currentPage === 26) {
      setSelectedAnswer(null);
      setShowQuestionResult("");
      setCurrentPage(24);
    } else if (currentPage === 27) {
      setCurrentPage(28);
    } else if (currentPage === 28) {
      setCurrentPage(29);
    } else if (currentPage === 29) {
      if (scores.player === 3) {
        setCurrentPage(31);
      }
    } else if (currentPage === 30) {
      setCurrentPage(0);
      resetAllGames();
    } else if (currentPage === 31) {
      setCurrentPage(33);
    } else if (currentPage === 32) {
      restartGameFromResults();
    } else if (currentPage === 33) {
      setCurrentPage(34);
    } else if (currentPage === 34) {
      setCurrentPage(35);
    } else if (currentPage === 35) {
      setCurrentPage(36);
    } else if (currentPage === 36) {
      // Ha nyert az akasztófában, megy tovább
      if (hangmanWon) {
        setCurrentPage(37);
      } else if (hangmanGameOver) {
        initializeHangman(); // Új szóval kezdi
      }
    } else if (currentPage === 37) {
      setCurrentPage(38);
    } else if (currentPage === 38) {
      setCurrentPage(0);
      resetAllGames();
    }
  };

  const resetAllGames = () => {
    setPassword("");
    setMessage("");
    setIsSuccess(false);
    setSelectedAnswer(null);
    setShowQuestionResult("");
    setPlayerChoice(null);
    setComputerChoice(null);
    setGameResult("");
    setScores({ player: 0, computer: 0 });
    setGameFinished(false);
    setShowComputerChoice(false);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setHangmanGameOver(false);
    setHangmanWon(false);
  };

  const handleCircleClick = () => {
    if (currentPage === 6) {
      setCurrentPage(7);
    }
  };

  const getComputerChoiceImage = () => {
    if (!computerChoice) return null;
    
    switch (computerChoice) {
      case 'stone':
        return oppstoneImage;
      case 'paper':
        return opppaperImage;
      case 'scissor':
        return oppscissorImage;
      default:
        return null;
    }
  };

  const getCurrentImage = () => {
    switch (currentPage) {
      case 0:
        return loginIcon;
      case 1:
        return nextPageImage;
      case 2:
        return thirdPageImage;
      case 3:
        return fourthPageImage;
      case 4:
        return fifthPageImage;
      case 5:
        return sixthPageImage;
      case 6:
        return seventhPageImage;
      case 7:
        return eighthPageImage;
      case 8:
        return ninthPageImage;
      case 9:
        return tenthPageImage;
      case 10:
        return eleventhPageImage;
      case 11:
        return twelfthPageImage;
      case 12:
        return thirteenthPageImage;
      case 13:
        return fourteenthPageImage;
      case 14:
        return fifteenthPageImage;
      case 15:
        return sixteenthPageImage;
      case 16:
        return seventeenthPageImage;
      case 17:
        return eighteenthPageImage;
      case 18:
        return nineteenthPageImage;
      case 19:
        return twentiethPageImage;
      case 20:
        return twentyFirstPageImage;
      case 21:
        return twentySecondPageImage;
      case 22:
        return twentyThirdPageImage;
      case 23:
        return twentyFourthPageImage;
      case 24:
        return twentyFifthPageImage;
      case 25:
        return twentySixthPageImage;
      case 26:
        return twentySeventhPageImage;
      case 27:
        return twentyEighthPageImage;
      case 28:
        return twentyNinthPageImage;
      case 29:
        return thirtiethPageImage;
      case 30:
        return thirtyFirstPageImage;
      case 31:
        return thirtySecondPageImage;
      case 32:
        return thirtyThirdPageImage;
      case 33:
        return thirtyFourthPageImage;
      case 34:
        return thirtyFifthPageImage;
      case 35:
        return thirtySixthPageImage;
      case 36:
        return thirtySixthPageImage; // 36.png - itt jelenik meg az akasztófa játék
      case 37:
        return thirtySeventhPageImage;
      case 38:
        return thirtyEighthPageImage;
      default:
        return loginIcon;
    }
  };

  if (currentPage > 0) {
    return (
      <div className="app-container">
        {currentPage === 29 ? (
          // Kő-papír-olló játék - 30.png
          <div className={`card ${gameResult ? 'blurred-background' : ''}`}>
            <div className="login-button">
              <img src={getCurrentImage()} alt={`page ${currentPage + 1}`} />
            </div>
            
            <div className="game-container">
              {!gameResult && !gameFinished && (
                <div className="choices-container">
                  <button 
                    className={`choice-btn ${playerChoice === 'stone' ? 'selected' : ''}`}
                    onClick={() => handleChoiceSelect('stone')}
                    disabled={playerChoice !== null || gameFinished}
                  >
                    <img src={userstoneImage} alt="Kő" />
                  </button>
                  <button 
                    className={`choice-btn ${playerChoice === 'paper' ? 'selected' : ''}`}
                    onClick={() => handleChoiceSelect('paper')}
                    disabled={playerChoice !== null || gameFinished}
                  >
                    <img src={userpaperImage} alt="Papír" />
                  </button>
                  <button 
                    className={`choice-btn ${playerChoice === 'scissor' ? 'selected' : ''}`}
                    onClick={() => handleChoiceSelect('scissor')}
                    disabled={playerChoice !== null || gameFinished}
                  >
                    <img src={userscissorImage} alt="Olló" />
                  </button>
                </div>
              )}

              {showComputerChoice && computerChoice && (
                <div className="computer-choice-container">
                  <div className="computer-choice-label">Azahriah választása</div>
                  <div className="computer-choice">
                    <img src={getComputerChoiceImage() || ''} alt={computerChoice} />
                  </div>
                </div>
              )}

              <div className="scoreboard">
                <div className="score-title">Scoreboard</div>
                <div className="scores">
                  <div className="player-score">
                    <div className="player-name">Letta</div>
                    <div className="score-value">{scores.player}</div>
                  </div>
                  <div className="vs-separator">VS</div>
                  <div className="player-score">
                    <div className="player-name">Azahriah</div>
                    <div className="score-value">{scores.computer}</div>
                  </div>
                </div>
              </div>

              {gameFinished ? (
                <>
                  {scores.player === 3 ? (
                    <>
                      <div className="game-result final-result">
                        🎉 Megnyerted a játékot! 🎉
                      </div>
                      <button className="play-again-btn" onClick={() => setCurrentPage(31)}>
                        Tovább
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="game-result final-result">
                        😔 Azahriah megnyerte a játékot!
                      </div>
                      <button className="play-again-btn" onClick={() => setCurrentPage(32)}>
                        Tovább
                      </button>
                    </>
                  )}
                </>
              ) : gameResult && (
                <>
                  <div className={`game-result ${gameResult}`}>
                    {gameResult === "win" && "✓ Győzelem! Nyertél!"}
                    {gameResult === "lose" && "✗ Vereség! Azahriah nyert!"}
                    {gameResult === "draw" && "○ Döntetlen!"}
                  </div>
                  <button className="play-again-btn" onClick={playAgain}>
                    Újra játszom
                  </button>
                </>
              )}
            </div>
          </div>
        ) : currentPage === 36 ? (
          // Akasztófa játék - 36.png háttérrel
          <div className={`card ${hangmanWon || hangmanGameOver ? 'blurred-background' : ''}`}>
            <div className="login-button">
              <img src={getCurrentImage()} alt="36.png háttér" />
            </div>
            
            {/* Akasztófa játék komponens */}
            <div className="hangman-game">
              <div className="hangman-image">
                <img src={getHangmanImage()} alt={`akasztófa ${wrongGuesses} hibával`} />
              </div>
              
              <div className="word-display">
                {displayWord()}
              </div>
              
              <div className="keyboard">
                {hungarianLetters.map((letter) => (
                  <button
                    key={letter}
                    className={`keyboard-key ${
                      guessedLetters.includes(letter) 
                        ? currentHangmanWord.includes(letter) ? 'correct' : 'wrong'
                        : ''
                    }`}
                    onClick={() => handleLetterGuess(letter)}
                    disabled={guessedLetters.includes(letter) || hangmanGameOver || hangmanWon}
                  >
                    {letter}
                  </button>
                ))}
              </div>

              {hangmanWon && (
                <div className="hangman-result won">
                  <div className="result-text">🎉 Ez az Chris életben maradt!</div>
                  <button className="play-again-btn" onClick={handleArrowClick}>
                    Tovább
                  </button>
                </div>
              )}

              {hangmanGameOver && (
                <div className="hangman-result lost">
                  <div className="result-text">😔 Vége a játéknak! A szó: {currentHangmanWord}</div>
                  <button className="play-again-btn" onClick={handleArrowClick}>
                    Új szó
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 37 || currentPage === 38 ? (
          // 37.png és 38.png - csak a kép és a nyíl
          <div className="card">
            <div className="login-button">
              <img src={getCurrentImage()} alt={`page ${currentPage + 1}`} />
            </div>
            
            <div className="arrow-bottom" onClick={handleArrowClick}>
              <img src={nyilIcon} alt="arrow" />
            </div>
          </div>
        ) : currentPage === 31 || currentPage === 32 || currentPage === 33 || currentPage === 34 || currentPage === 35 ? (
          // Győztes képek
          <div className="card">
            <div className="login-button">
              <img src={getCurrentImage()} alt={`page ${currentPage + 1}`} />
            </div>
            
            <div className="arrow-bottom" onClick={handleArrowClick}>
              <img src={nyilIcon} alt="arrow" />
            </div>
          </div>
        ) : (
          // Minden más oldal
          <div className="card">
            <div className="login-button">
              <img src={getCurrentImage()} alt={`page ${currentPage + 1}`} />
            </div>

            {currentPage === 6 && (
              <>
                <div 
                  className="circle circle-1" 
                  onClick={handleCircleClick}
                ></div>
                <div 
                  className="circle circle-2" 
                  onClick={handleCircleClick}
                ></div>
                <div 
                  className="circle circle-3" 
                  onClick={handleCircleClick}
                ></div>
              </>
            )}

            {currentPage === 11 && (
              <div className="cards-container">
                {cards.map((card) => (
                  <div 
                    key={card.uniqueId}
                    className={`card-item ${flippedCards.includes(card.uniqueId) || matchedPairs.includes(card.type) ? 'flipped' : ''}`}
                    onClick={() => handleCardClick(card.uniqueId, card.type)}
                  >
                    <img 
                      src={flippedCards.includes(card.uniqueId) || matchedPairs.includes(card.type) ? card.image : cardImage} 
                      alt={flippedCards.includes(card.uniqueId) || matchedPairs.includes(card.type) ? `card ${card.type}` : "card back"} 
                    />
                  </div>
                ))}
              </div>
            )}

            {currentPage === 24 && (
              <div className="question-bubble-container">
                <div className="question-bubble">
                  <p className="question-text">Hány napja nem volt Farden onlien?</p>
                  <div className="answers-container">
                    <button 
                      className={`answer-btn ${selectedAnswer === "A" ? (showQuestionResult === "correct" ? "correct" : "incorrect") : ""}`}
                      onClick={() => handleAnswerSelect("A")}
                      disabled={selectedAnswer !== null}
                    >
                      A) 4
                    </button>
                    <button 
                      className={`answer-btn ${selectedAnswer === "B" ? (showQuestionResult === "correct" ? "correct" : "incorrect") : ""}`}
                      onClick={() => handleAnswerSelect("B")}
                      disabled={selectedAnswer !== null}
                    >
                      B) 7
                    </button>
                    <button 
                      className={`answer-btn ${selectedAnswer === "C" ? (showQuestionResult === "correct" ? "correct" : "incorrect") : ""}`}
                      onClick={() => handleAnswerSelect("C")}
                      disabled={selectedAnswer !== null}
                    >
                      C) 6
                    </button>
                    <button 
                      className={`answer-btn ${selectedAnswer === "D" ? (showQuestionResult === "correct" ? "correct" : "incorrect") : ""}`}
                      onClick={() => handleAnswerSelect("D")}
                      disabled={selectedAnswer !== null}
                    >
                      D) 5
                    </button>
                  </div>
                  {showQuestionResult && (
                    <div className={`question-result ${showQuestionResult}`}>
                      {showQuestionResult === "correct" ? "✓ Helyes válasz!" : "✗ Helytelen válasz!"}
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentPage === 30 && (
              <div className="final-message">
                <h2 className="final-title">Köszönjük a játékot!</h2>
                <p className="final-text">
                  Reméljük, élvezte ezt a kis kalandot! Köszönjük, hogy velünk tartott.
                </p>
                <button className="restart-btn" onClick={handleArrowClick}>
                  Újrakezdés
                </button>
              </div>
            )}

            {currentPage !== 28 && currentPage !== 6 && currentPage !== 29 && currentPage !== 30 && currentPage !== 31 && currentPage !== 32 && currentPage !== 33 && currentPage !== 34 && currentPage !== 35 && currentPage !== 36 && currentPage !== 37 && currentPage !== 38 && (
              <div className="arrow-bottom" onClick={handleArrowClick}>
                <img src={nyilIcon} alt="arrow" />
              </div>
            )}

            {currentPage === 28 && (
              <div className="arrow-bottom" onClick={handleArrowClick}>
                <img src={nyilIcon} alt="arrow" />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="card">
        <div className="login-button" onClick={handleLogin}>
          <img src={loginIcon} alt="login" />
        </div>

        <div className="main-content">
          <div className="password-box">
            <input
              type="text"
              className="password-input"
              placeholder="Üsse be a jelszót!"
              value={password}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className={`message ${message ? (isSuccess ? "correct" : "incorrect") : ""}`}>
            {message || " "}
          </div>

          <div className="question-section">
            <button className="question-btn" onClick={() => setShowHint(!showHint)}>
              ?
            </button>

            {showHint && (
              <p className="hint-text">Ez volt Évi jele az oviban.</p>
            )}
          </div>
        </div>

        <div className="arrow-bottom" onClick={handleArrowClick}>
          <img src={nyilIcon} alt="arrow" />
        </div>
      </div>
    </div>
  );
}