import { evaluate } from "mathjs";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const backspaceInput = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };


  const Buttons = [
    "AC", "%", "⌫","÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    ".", "0", "=",
  ]

  return (
    <div
      className={`h-screen flex justify-center items-center ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`w-80 p-5 rounded-2xl shadow-xl ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <button
            className={`text-lg font-bold ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
            onClick={() => setDarkMode(false)}
          >
            ☀️
          </button>
          <button
            className={`text-lg font-bold ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
            onClick={() => setDarkMode(true)}
          >
            🌙
          </button>
        </div>

        <div
          className={`rounded-lg p-4 mb-4 text-3xl font-semibold ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"
          }`}
        >
          {input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {Buttons.map((btn) => {
            if (btn === "AC") {
              return (
                <button
                  key={btn}
                  onClick={clearInput}
                  className={`rounded-lg p-3 text-lg font-bold ${
                    darkMode
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-400 text-white hover:bg-green-500"
                  }`}
                >
                  {btn}
                </button>
              );
            }
            if (btn === "⌫") {
              return (
                <button
                  key={btn}
                  onClick={backspaceInput}
                  className={`rounded-lg p-3 text-lg font-bold ${
                    darkMode
                      ? "bg-yellow-600 text-white hover:bg-yellow-700"
                      : "bg-yellow-400 text-white hover:bg-yellow-500"
                  }`}
                >
                  {btn}
                </button>
              );
            }
            if (btn === "=") {
              return (
                <button
                  key={btn}
                  onClick={calculateResult}
                  className={`col-span-2 rounded-lg p-3 text-lg font-bold ${
                    darkMode
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {btn}
                </button>
              );
            }
            if (["÷", "×", "-", "+"].includes(btn)) {
              return (
                <button
                  key={btn}
                  onClick={() => handleClick(btn.replace("÷", "/").replace("×", "*"))}
                  className={`rounded-lg p-3 text-lg font-bold ${
                    darkMode
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-red-400 text-white hover:bg-red-500"
                  }`}
                >
                  {btn}
                </button>
              );
            }
            return (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                className={`rounded-lg p-3 text-lg font-bold ${
                    darkMode
                      ? "bg-gray-600 text-white hover:bg-gray-700"
                      : "bg-gray-300 text-black hover:bg-gray-400"
                  }`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;




