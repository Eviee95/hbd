import { useState, useEffect } from "react";
import loginIcon from "../assets/tolt.png";
import nyilIcon from "../assets/nyil.png";
import menuIcon from "../assets/menu.png";
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
import thirtyNinthPageImage from "../assets/39.png";
import fortiethPageImage from "../assets/40.png";
import fortyFirstPageImage from "../assets/41.png";
import fortySecondPageImage from "../assets/42.png";
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
// Import chapter képek
import chapter1Image from "../assets/chapter1.png";
import chapter2Image from "../assets/chapter2.png";
import chapter3Image from "../assets/chapter3.png";
import chapter4Image from "../assets/chapter4.png";
import chapter5Image from "../assets/chapter5.png";
// Import vicc képek
import vicc1Image from "../assets/vicc1.png";
import vicc2Image from "../assets/vicc2.png";
import vicc3Image from "../assets/vicc3.png";
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

  // Vicc megjelenítő state-ek
  const [showJoke, setShowJoke] = useState(false);
  const [currentJoke, setCurrentJoke] = useState("");

  // Jelszó láthatóság state
  const [showPassword, setShowPassword] = useState(false);

  // Hungarian letters for keyboard
  const hungarianLetters = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz".split("");

  // VIEWPORT FIX - FEHÉR SÁV MEGOLDÁS
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
    
    setViewportHeight();

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  // Vicc időzítő
  useEffect(() => {
    const jokeInterval = setInterval(() => {
      const jokes = [vicc1Image, vicc2Image, vicc3Image];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setCurrentJoke(randomJoke);
      setShowJoke(true);
    }, 4 * 60 * 1000); // 4 perc

    return () => clearInterval(jokeInterval);
  }, []);

  useEffect(() => {
    if (currentPage === 11) {
      initializeCards();
    }
    
    if (currentPage === 36) {
      initializeHangman();
    }

    // Amikor chapter4-re (28. oldal) navigálunk, reseteljük a kő-papír-olló játékot
    if (currentPage === 28) {
      setPlayerChoice(null);
      setComputerChoice(null);
      setGameResult("");
      setScores({ player: 0, computer: 0 });
      setGameFinished(false);
      setShowComputerChoice(false);
    }
  }, [currentPage]);

  useEffect(() => {
    if ((scores.player === 3 || scores.computer === 3) && currentPage === 29 && !gameFinished) {
      setGameFinished(true);
    }
  }, [scores, currentPage, gameFinished]);

  // Hangman game logic
  const initializeHangman = () => {
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

  // Vicc bezárása
  const handleCloseJoke = () => {
    setShowJoke(false);
  };

  // Jelszó láthatóság váltása
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const handleMenuClick = () => {
    console.log("Menu clicked - navigálás a menu.png-re");
    setCurrentPage(43);
  };

  const handleChapterClick = (chapter: number) => {
    switch (chapter) {
      case 1:
        setCurrentPage(2);
        break;
      case 2:
        setCurrentPage(10);
        break;
      case 3:
        setCurrentPage(14);
        break;
      case 4:
        setCurrentPage(28);
        break;
      case 5:
        setCurrentPage(35);
        break;
      default:
        setCurrentPage(3);
    }
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
    } else if (currentPage > 0 && currentPage < 24 && currentPage !== 6 && currentPage !== 11 && currentPage !== 28 && currentPage !== 29 && currentPage !== 31 && currentPage !== 32 && currentPage !== 33 && currentPage !== 34 && currentPage !== 35 && currentPage !== 36 && currentPage !== 37 && currentPage !== 38 && currentPage !== 39 && currentPage !== 40 && currentPage !== 41 && currentPage !== 42 && currentPage !== 43) {
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
      if (gameFinished) {
        if (scores.player === 3) {
          setCurrentPage(31);
        } else if (scores.computer === 3) {
          setCurrentPage(32);
        }
      }
    } else if (currentPage === 30) {
      setCurrentPage(0);
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
      setShowPassword(false);
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
      if (hangmanWon) {
        setCurrentPage(37);
      } else if (hangmanGameOver) {
        initializeHangman();
      }
    } else if (currentPage === 37) {
      setCurrentPage(38);
    } else if (currentPage === 38) {
      setCurrentPage(39);
    } else if (currentPage === 39) {
      setCurrentPage(40);
    } else if (currentPage === 40) {
      setCurrentPage(41);
    } else if (currentPage === 41) {
      setCurrentPage(42);
    } else if (currentPage === 42) {
      setCurrentPage(43);
    } else if (currentPage === 43) {
      return;
    }
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
        return thirtyFifthPageImage;
      case 36:
        return thirtySixthPageImage;
      case 37:
        return thirtySeventhPageImage;
      case 38:
        return thirtyEighthPageImage;
      case 39:
        return thirtyNinthPageImage;
      case 40:
        return fortiethPageImage;
      case 41:
        return fortyFirstPageImage;
      case 42:
        return fortySecondPageImage;
      case 43:
        return menuIcon;
      default:
        return loginIcon;
    }
  };

  const shouldShowMenuCircle = () => {
    return currentPage >= 2 && currentPage <= 42;
  };

const shouldShowArrow = () => {
  if (currentPage === 43) return false;
  
  if (currentPage === 11) {
    return gameCompleted;
  }
  
  if (currentPage === 24) {
    return false;
  }
  
  if (currentPage === 25 || currentPage === 26 || currentPage === 27) {
    return true;
  }
  
  // 29.png-re SEMMIKOR ne jelenjen meg nyíl - csak a "Tovább" gomb van
  if (currentPage === 29) {
    return false;
  }
  
  if (currentPage === 31 || currentPage === 32 || currentPage === 33 || currentPage === 34) {
    return true;
  }
  
  // 35.png-re IS jelenjen meg nyíl
  if (currentPage === 35) {
    return true;
  }
  
  // 36.png-re NE jelenjen meg nyíl - ott a hangman játék van
  if (currentPage === 36) {
    return false;
  }
  
  // 37.png-től 42.png-ig JELENJEN MEG nyíl
  if (currentPage === 37 || currentPage === 38 || currentPage === 39 || currentPage === 40 || currentPage === 41 || currentPage === 42) {
    return true;
  }
  
  return (
    currentPage === 1 || currentPage === 2 || currentPage === 3 || currentPage === 4 || 
    currentPage === 5 || currentPage === 7 || currentPage === 8 || currentPage === 9 || 
    currentPage === 10 || currentPage === 12 || currentPage === 13 || currentPage === 14 || 
    currentPage === 15 || currentPage === 16 || currentPage === 17 || currentPage === 18 || 
    currentPage === 19 || currentPage === 20 || currentPage === 21 || currentPage === 22 || 
    currentPage === 23 || currentPage === 28
  );
};

  if (currentPage > 0) {
    return (
      <div className="app-container">
        {/* Vicc overlay */}
        {showJoke && (
          <div className="joke-overlay active">
            <div className="joke-container">
              <div className="close-joke" onClick={handleCloseJoke}>×</div>
              <img className="joke-image" src={currentJoke} alt="Vicc" />
            </div>
          </div>
        )}
        
        {currentPage === 29 ? (
          <div className={`card ${gameResult ? 'blurred-background' : ''}`}>
            <div className="page-image-container">
              <img src={getCurrentImage()} alt={`page ${currentPage + 1}`} />
            </div>
            
            {shouldShowMenuCircle() && (
              <div className="menu-circle" onClick={handleMenuClick}>
                {/* ÜRES KÖR - NINCS KÉP */}
              </div>
            )}
            
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

              {/* NYÍL CSAK AKKOR, HA A SZÁMÍTÓGÉP NYERT */}
              {shouldShowArrow() && (
                <div className="arrow-bottom" onClick={handleArrowClick}>
                  <img src={nyilIcon} alt="arrow" />
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 36 ? (
          <div className={`card ${hangmanWon || hangmanGameOver ? 'blurred-background' : ''}`}>
            <div className="page-image-container">
              <img src={getCurrentImage()} alt="36.png háttér" />
            </div>
            
            {shouldShowMenuCircle() && (
              <div className="menu-circle" onClick={handleMenuClick}>
                {/* ÜRES KÖR - NINCS KÉP */}
              </div>
            )}
            
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
                  <button className="play-again-btn" onClick={() => setCurrentPage(37)}>
                    Tovább
                  </button>
                </div>
              )}

              {hangmanGameOver && (
                <div className="hangman-result lost">
                  <div className="result-text">😔 Vége a játéknak! A szó: {currentHangmanWord}</div>
                  <button className="play-again-btn" onClick={initializeHangman}>
                    Új szó
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 35 ? (
          // 35-ös oldal - most már van nyíl
          <div className="card">
            <div className="page-image-container">
              <img src={getCurrentImage()} alt="35.png háttér" />
            </div>
            
            {shouldShowMenuCircle() && (
              <div className="menu-circle" onClick={handleMenuClick}>
                {/* ÜRES KÖR - NINCS KÉP */}
              </div>
            )}
            
            {/* NINCS TOVÁBB GOMB - CSAK NYÍL */}
            {shouldShowArrow() && (
              <div className="arrow-bottom" onClick={handleArrowClick}>
                <img src={nyilIcon} alt="arrow" />
              </div>
            )}
          </div>
        ) : currentPage === 43 ? (
          // Menu.png oldal - CHAPTER KÉPEKKEL
          <div className="card">
            <div className="page-image-container">
              <img src={getCurrentImage()} alt="menu" />
            </div>
            
            {/* Chapter képek */}
            <div className="chapter-images-container">
              <div className="chapter-image-wrapper" onClick={() => handleChapterClick(1)}>
                <img src={chapter1Image} alt="Chapter 1" className="chapter-image" />
              </div>
              <div className="chapter-image-wrapper" onClick={() => handleChapterClick(2)}>
                <img src={chapter2Image} alt="Chapter 2" className="chapter-image" />
              </div>
              <div className="chapter-image-wrapper" onClick={() => handleChapterClick(3)}>
                <img src={chapter3Image} alt="Chapter 3" className="chapter-image" />
              </div>
              <div className="chapter-image-wrapper" onClick={() => handleChapterClick(4)}>
                <img src={chapter4Image} alt="Chapter 4" className="chapter-image" />
              </div>
              <div className="chapter-image-wrapper" onClick={() => handleChapterClick(5)}>
                <img src={chapter5Image} alt="Chapter 5" className="chapter-image" />
              </div>
            </div>
            
            {/* NINCS NYÍL A MENU.PNG-N */}
          </div>
        ) : (
          <div className="card">
            <div className="page-image-container">
              <img src={getCurrentImage()} alt={`page ${currentPage + 1}`} />
            </div>

            {shouldShowMenuCircle() && (
              <div className="menu-circle" onClick={handleMenuClick}>
                {/* ÜRES KÖR - NINCS KÉP */}
              </div>
            )}

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
                <button className="restart-btn" onClick={handleArrowClick}>
                  Újrakezdés
                </button>
              </div>
            )}

            {shouldShowArrow() && (
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
      {/* Vicc overlay */}
      {showJoke && (
        <div className="joke-overlay active">
          <div className="joke-container">
            <div className="close-joke" onClick={handleCloseJoke}>×</div>
            <img className="joke-image" src={currentJoke} alt="Vicc" />
          </div>
        </div>
      )}
      
      <div className="card">
        <div className="page-image-container">
          <img src={loginIcon} alt="login" />
        </div>

        <div className="main-content">
          <div className="password-box">
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="password-input"
                placeholder="Üsse be a jelszót!"
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
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