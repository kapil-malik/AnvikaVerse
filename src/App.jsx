import { useEffect, useMemo, useState } from "react";
import { cells, finalCellId } from "./gameData.js";

// Casual privacy only: this client-side passcode is visible in the bundled code
// and should not be treated as real security or authentication.
const MAGIC_WORD = "birthday";
const ACCESS_STORAGE_KEY = "anvikaverseAccessGranted";

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

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 28 }, (_, index) => (
        <span key={index} style={{ "--i": index }} />
      ))}
    </div>
  );
}

function App() {
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

  const cell = cells[step - 1];
  const progress = useMemo(() => Math.round((step / finalCellId) * 100), [step]);

  const moveTo = (nextStep, message) => {
    if (nextStep >= finalCellId) {
      setStep(finalCellId);
      setIsWon(true);
      setResult(message);
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
    const direction = cell.move > 0 ? "forward" : "back";
    const distance = Math.abs(cell.move);
    moveTo(
      step + cell.move,
      `${cell.title} moved you ${direction} ${distance} ${distance === 1 ? "step" : "steps"}.`
    );
  };

  const answerQuiz = (optionIndex) => {
    if (selectedOption !== null) return;

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
    setStep(1);
    setIsWon(false);
    setResult("Roll the dice and let the birthday magic decide.");
    setDiceValue("?");
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

  return (
    <main className={`appShell ${isWon ? "isWon" : ""}`}>
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
          <div className="avatar" aria-label="Anvika avatar">
            <span>AV</span>
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

            <StepImage cell={cell} />

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
