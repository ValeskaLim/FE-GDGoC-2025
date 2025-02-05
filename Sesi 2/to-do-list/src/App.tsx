import { useState } from "react";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClicks = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="mx-auto bg-gray-100 rounded-xl p-5">
        <h1 className="text-5xl">Form</h1>
        <Form />
        <div className="bg-green-400 rounded-md w-fit">
          <button
            type="button"
            onClick={count < 10 ? handleClicks : undefined}
            className={`p-3 ${
              count >= 10 ? "bg-gray-200 rounded-md" : "active:bg-green-700"
            }`}
            disabled={count >= 10}
          >
            Try click me: {count}
          </button>
        </div>
        {count == 10 && <p className="text-red-500 font-bold">You clicked 10 times!</p>}
      </div>
    </>
  );
};

export default App;
