import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClickIncrement = () => {
    setCount(count + 1);
  };

  const handleClickDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: count % 2 == 0 ? "red" : "green" }}>{count}</p>
      <button onClick={() => handleClickIncrement()}>+1</button>
      <button onClick={() => handleClickDecrement()}>-1</button>
    </div>
  );
}

export default App;
