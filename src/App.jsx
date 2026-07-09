import { useEffect, useMemo, useRef, useState } from "react";
import { cells, finalCellId } from "./gameData.js";

// Casual privacy only: this client-side passcode is visible in the bundled code
// and should not be treated as real security or authentication.
const MAGIC_WORD = "birthday";
const ACCESS_STORAGE_KEY = "anvikaverseAccessGranted";
const BACKGROUND_MUSIC_SRC = "/audio/background.mp3";
const VICTORY_MUSIC_SRC = "/audio/victory.mp3";
const AVATAR_SRC = "/images/anvika-avatar.png";

const clampStep = (step) => Math.max(1, Math.min(finalCellId, step));

function StepImage({ cell }) {
  const [imageMissing, setImageMissing] = useState(false);

  useEffect(() => {
    setImageMissing(false);
  }, [cell.image]);

  if (imageMissing) {
    return (
      <div className="imagePlaceholder" aria-label="Magical placeholder art">
        <span className="placeholderMoon" />
        <span className="placeholderSparkle one" />
        <span className="placeholderSparkle two" />
        <span className="placeholderSparkle three" />
      </div>
    );
  }

  return (
    <img
      className="stepImage"
      src={cell.image}
      alt=""
      onError={() => setImageMissing(true)}
    />
  );
}

function AvatarOverlay() {
  const [avatarMissing, setAvatarMissing] = useState(false);

  if (avatarMissing) {
    return (
      <div className="stepAvatarFallback" aria-label="Anvika avatar">
        AV
      </div>
    );
  }

  return (
    <img
      className="stepAvatarImage"
      src={AVATAR_SRC}
      alt="Anvika avatar"
      onError={() => setAvatarMissing(true)}
    />
  );
}

function GeneratedScene({ theme }) {
  const safeTheme = theme ?? "birthday";

  return (
    <div
      className={`generated-scene generated-scene--${safeTheme}`}
      aria-label={`${safeTheme} generated illustration`}
    >
      <span className="sceneShape skyGlow" />
      <span className="sceneShape floatOne" />
      <span className="sceneShape floatTwo" />
      <span className="sceneShape floatThree" />
      <span className="sceneShape ground" />

      {safeTheme === "birthday" && (
        <>
          <span className="sceneShape balloon balloonOne" />
          <span className="sceneShape balloon balloonTwo" />
          <span className="sceneShape candle candleOne" />
          <span className="sceneShape candle candleTwo" />
          <span className="sceneShape sprinkle sprinkleOne" />
          <span className="sceneShape sprinkle sprinkleTwo" />
        </>
      )}

      {safeTheme === "school" && (
        <>
          <span className="sceneShape blackboard" />
          <span className="sceneShape chalkLine chalkOne" />
          <span className="sceneShape chalkLine chalkTwo" />
          <span className="sceneShape notebook" />
          <span className="sceneShape pencil" />
        </>
      )}

      {safeTheme === "garden" && (
        <>
          <span className="sceneShape tree treeOne" />
          <span className="sceneShape tree treeTwo" />
          <span className="sceneShape flower flowerOne" />
          <span className="sceneShape flower flowerTwo" />
          <span className="sceneShape leaf leafOne" />
          <span className="sceneShape leaf leafTwo" />
        </>
      )}

      {safeTheme === "beach" && (
        <>
          <span className="sceneShape sun" />
          <span className="sceneShape wave waveOne" />
          <span className="sceneShape wave waveTwo" />
          <span className="sceneShape umbrella" />
          <span className="sceneShape shell" />
        </>
      )}

      {safeTheme === "chess" && (
        <>
          <span className="sceneShape chessBoard" />
          <span className="sceneShape chessPiece king">K</span>
          <span className="sceneShape chessPiece pawn">P</span>
          <span className="sceneShape chessSpark chessSparkOne" />
          <span className="sceneShape chessSpark chessSparkTwo" />
        </>
      )}

      {safeTheme === "movies" && (
        <>
          <span className="sceneShape filmStrip" />
          <span className="sceneShape spotlight spotlightOne" />
          <span className="sceneShape spotlight spotlightTwo" />
          <span className="sceneShape movieStar movieStarOne" />
          <span className="sceneShape movieStar movieStarTwo" />
          <span className="sceneShape playBadge">PLAY</span>
        </>
      )}

      {safeTheme === "books" && (
        <>
          <span className="sceneShape bookStack bookOne" />
          <span className="sceneShape bookStack bookTwo" />
          <span className="sceneShape bookStack bookThree" />
          <span className="sceneShape bookmark" />
          <span className="sceneShape pageLine pageOne" />
          <span className="sceneShape pageLine pageTwo" />
        </>
      )}

      {safeTheme === "space" && (
        <>
          <span className="sceneShape planet planetOne" />
          <span className="sceneShape planet planetTwo" />
          <span className="sceneShape moon" />
          <span className="sceneShape orbit" />
          <span className="sceneShape star starOne" />
          <span className="sceneShape star starTwo" />
        </>
      )}

      {safeTheme === "music" && (
        <>
          <span className="sceneShape stageLight stageLightOne" />
          <span className="sceneShape stageLight stageLightTwo" />
          <span className="sceneShape note noteOne">A</span>
          <span className="sceneShape note noteTwo">B</span>
          <span className="sceneShape note noteThree">G</span>
          <span className="sceneShape musicBar musicBarOne" />
          <span className="sceneShape musicBar musicBarTwo" />
        </>
      )}

      {safeTheme === "math" && (
        <>
          <span className="sceneShape graph" />
          <span className="sceneShape curve" />
          <span className="sceneShape equation equationOne">2+2</span>
          <span className="sceneShape equation equationTwo">x=y</span>
          <span className="sceneShape equation equationThree">f(x)</span>
        </>
      )}
    </div>
  );
}

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 42 }, (_, index) => {
        const width = 7 + (index % 3) * 2;
        const height = 12 + (index % 4) * 2;
        const duration = 2.4 + (index % 5) * 0.28;
        const delay = (index % 9) * -0.2;
        const drift = index % 2 === 0 ? "-14px" : "14px";

        return (
          <span
            key={index}
            style={{
              "--i": index,
              "--x": `${(index * 37) % 100}%`,
              "--w": `${width}px`,
              "--h": `${height}px`,
              "--duration": `${duration}s`,
              "--delay": `${delay}s`,
              "--drift": drift
            }}
          />
        );
      })}
    </div>
  );
}

function App() {
  const backgroundAudioRef = useRef(null);
  const victoryAudioRef = useRef(null);
  const musicStartedRef = useRef(false);
  const [hasAccess, setHasAccess] = useState(
    () => window.sessionStorage.getItem(ACCESS_STORAGE_KEY) === "true"
  );
  const [magicWord, setMagicWord] = useState("");
  const [gateMessage, setGateMessage] = useState(
    "A little sparkle is waiting for the right word."
  );
  const [step, setStep] = useState(1);
  const [isWon, setIsWon] = useState(false);
  const [result, setResult] = useState("Roll the dice and let the birthday magic decide.");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [diceValue, setDiceValue] = useState("?");
  const [cardKey, setCardKey] = useState(1);
  const [musicOn, setMusicOn] = useState(true);
  const [backgroundMusicUnavailable, setBackgroundMusicUnavailable] = useState(false);
  const [victoryMusicUnavailable, setVictoryMusicUnavailable] = useState(false);

  const cell = cells[step - 1];
  const progress = useMemo(() => Math.round((step / finalCellId) * 100), [step]);

  useEffect(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = 0.22;
    }

    if (victoryAudioRef.current) {
      victoryAudioRef.current.volume = 0.34;
    }
  }, []);

  useEffect(() => {
    if (!musicOn && backgroundAudioRef.current) {
      backgroundAudioRef.current.pause();
    }

    if (musicOn && musicStartedRef.current && !isWon) {
      playBackgroundMusic();
    }
  }, [musicOn, isWon]);

  const playBackgroundMusic = () => {
    const audio = backgroundAudioRef.current;

    if (!audio || !musicOn || backgroundMusicUnavailable || isWon) return;

    audio.play().catch(() => {
      setBackgroundMusicUnavailable(true);
    });
  };

  const startMusicAfterInteraction = () => {
    if (musicStartedRef.current) return;

    musicStartedRef.current = true;
    playBackgroundMusic();
  };

  const playVictoryMusic = () => {
    const audio = victoryAudioRef.current;

    if (!audio || !musicOn || victoryMusicUnavailable) return;

    audio.currentTime = 0;
    audio.play().catch(() => {
      // Audio files are optional and browser playback can be blocked.
      // The game should keep celebrating silently if victory music cannot play.
    });
  };

  const stopBackgroundMusic = () => {
    const audio = backgroundAudioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  };

  const moveTo = (nextStep, message) => {
    if (nextStep >= finalCellId) {
      stopBackgroundMusic();
      setStep(finalCellId);
      setIsWon(true);
      setResult(message);
      playVictoryMusic();
      return;
    }

    setStep(clampStep(nextStep));
    setResult(message);
  };

  useEffect(() => {
    setSelectedOption(null);
    setCardKey((key) => key + 1);

    if (cell.type === "boost") {
      setResult(`A portal shimmers with +${cell.move} steps.`);
    } else if (cell.type === "detour") {
      setResult(`A curious detour swirls for ${cell.move} steps.`);
    } else if (cell.type === "quiz") {
      setResult("Choose an answer to unlock the next path.");
    } else {
      setResult("Roll the dice and let the birthday magic decide.");
    }
  }, [cell]);

  const rollDice = () => {
    if (isRolling) return;

    startMusicAfterInteraction();
    setIsRolling(true);
    setDiceValue("...");

    window.setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setDiceValue(roll);
      setIsRolling(false);
      moveTo(step + roll, `Destiny Dice rolled ${roll}. You skipped ahead through stardust.`);
    }, 700);
  };

  const enterPortal = () => {
    startMusicAfterInteraction();
    const direction = cell.move > 0 ? "forward" : "back";
    const distance = Math.abs(cell.move);
    moveTo(
      step + cell.move,
      `${cell.title} moved you ${direction} ${distance} ${distance === 1 ? "step" : "steps"}.`
    );
  };

  const answerQuiz = (optionIndex) => {
    if (selectedOption !== null) return;

    startMusicAfterInteraction();
    const isCorrect = optionIndex === cell.answerIndex;
    const move = isCorrect ? cell.correctMove : cell.wrongMove;
    const text = isCorrect ? cell.correctText : cell.wrongText;

    setSelectedOption(optionIndex);
    setResult(text);

    window.setTimeout(() => {
      moveTo(step + move, `${text} You moved ${move} ${move === 1 ? "step" : "steps"}.`);
    }, 900);
  };

  const restart = () => {
    if (victoryAudioRef.current) {
      victoryAudioRef.current.pause();
      victoryAudioRef.current.currentTime = 0;
    }

    setStep(1);
    setIsWon(false);
    setResult("Roll the dice and let the birthday magic decide.");
    setDiceValue("?");

    if (musicStartedRef.current && musicOn) {
      playBackgroundMusic();
    }
  };

  const primaryLabel =
    cell.type === "normal"
      ? "Roll Destiny Dice"
      : cell.type === "quiz"
        ? "Choose an Answer"
        : "Enter Portal";

  const unlockVerse = (event) => {
    event.preventDefault();

    if (magicWord.trim().toLowerCase() === MAGIC_WORD.toLowerCase()) {
      window.sessionStorage.setItem(ACCESS_STORAGE_KEY, "true");
      setHasAccess(true);
      return;
    }

    setGateMessage("That spell fizzled into confetti. Try the magic word again.");
    setMagicWord("");
  };

  const toggleMusic = () => {
    if (backgroundMusicUnavailable) return;

    setMusicOn((current) => !current);
  };

  return (
    <main className={`appShell ${isWon ? "isWon" : ""}`}>
      <audio
        ref={backgroundAudioRef}
        src={BACKGROUND_MUSIC_SRC}
        preload="metadata"
        loop
        onError={() => setBackgroundMusicUnavailable(true)}
      />
      <audio
        ref={victoryAudioRef}
        src={VICTORY_MUSIC_SRC}
        preload="metadata"
        onError={() => {
          setVictoryMusicUnavailable(true);
          // Victory music is optional; missing files should not affect play.
        }}
      />
      {isWon && <Confetti />}

      {!hasAccess ? (
        <section className="gatePanel" aria-live="polite">
          <div className="gateCard">
            <div className="gateBadge" aria-hidden="true">
              AV
            </div>
            <p className="eyebrow">Secret birthday doorway</p>
            <h1>AnvikaVerse</h1>
            <h2>Enter the magic word to enter AnvikaVerse</h2>
            <p>{gateMessage}</p>
            <form className="gateForm" onSubmit={unlockVerse}>
              <label htmlFor="magic-word">Magic word</label>
              <input
                id="magic-word"
                type="password"
                value={magicWord}
                onChange={(event) => setMagicWord(event.target.value)}
                autoComplete="off"
                autoFocus
              />
              <button className="primaryButton" type="submit">
                Open the Birthday Portal
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section className="gamePanel" aria-live="polite">
        <header className="topBar">
          <div>
            <p className="eyebrow">Birthday journey</p>
            <h1>AnvikaVerse</h1>
          </div>
          <div className="headerActions">
            <button
              className={`musicToggle ${musicOn && !backgroundMusicUnavailable ? "isOn" : ""}`}
              type="button"
              onClick={toggleMusic}
              disabled={backgroundMusicUnavailable}
              aria-pressed={musicOn && !backgroundMusicUnavailable}
            >
              {backgroundMusicUnavailable ? "Music Off" : musicOn ? "Music On" : "Music Off"}
            </button>
            <div className="avatar" aria-label="Anvika avatar">
              <span>AV</span>
            </div>
          </div>
        </header>

        <div className="progressWrap" aria-label={`Progress ${progress}%`}>
          <div className="progressLabels">
            <span>Step {step}</span>
            <span>{progress}%</span>
          </div>
          <div className="progressTrack">
            <div className="progressFill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {isWon ? (
          <div className="winScreen">
            <div className="winBadge">100</div>
            <h2>You reached the Birthday Star!</h2>
            <p>
              The AnvikaVerse opens its grand finale: candles, wishes, ribbons,
              and a whole sky full of celebration.
            </p>
            <button className="primaryButton" type="button" onClick={restart}>
              Play Again
            </button>
          </div>
        ) : (
          <article className={`stepCard ${cell.type}`} key={cardKey}>
            <div className="stepMeta">
              <span>Step {cell.id} of 100</span>
              <span>{cell.type}</span>
            </div>

            <div className="imageStage">
              {cell.usesGeneratedArt ? (
                <GeneratedScene theme={cell.visualTheme} />
              ) : (
                <StepImage cell={cell} />
              )}
              <AvatarOverlay />
            </div>

            <div className="storyBlock">
              <h2>{cell.title}</h2>
              <p>{cell.caption}</p>
            </div>

            <div className={`resultBox ${isRolling ? "rolling" : ""}`}>
              <div className="dice" aria-label={`Dice result ${diceValue}`}>
                {diceValue}
              </div>
              <p>{result}</p>
            </div>

            {cell.type === "quiz" && (
              <div className="quizOptions">
                <p className="question">{cell.question}</p>
                {cell.options.map((option, index) => {
                  const isSelected = selectedOption === index;
                  const isAnswer = cell.answerIndex === index;
                  const className =
                    selectedOption === null
                      ? ""
                      : isSelected && isAnswer
                        ? "correct"
                        : isSelected
                          ? "wrong"
                          : "";

                  return (
                    <button
                      className={className}
                      type="button"
                      key={option}
                      onClick={() => answerQuiz(index)}
                      disabled={selectedOption !== null}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}

            <button
              className="primaryButton"
              type="button"
              onClick={cell.type === "normal" ? rollDice : enterPortal}
              disabled={cell.type === "quiz" || isRolling}
            >
              {primaryLabel}
            </button>
          </article>
        )}
      </section>
      )}
    </main>
  );
}

export default App;
