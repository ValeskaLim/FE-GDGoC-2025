import { useState } from "react";
import Form from "./components/Form";
import "./App.css";

const App = ()  => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto bg-gray-100 rounded-xl p-5">
        <h1 className="text-5xl">Form</h1>
        <Form />
      </div>
    </>
  );
}

export default App;
