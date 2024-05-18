import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
// App Component
export default function App() {
  // states
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePreviousButton() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNextButton() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950F2", color: "#fff" }}
                onClick={handlePreviousButton}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950F2", color: "#fff" }}
                onClick={handleNextButton}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
