import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: count % 2 == 0 ? "red" : "green" }}>{count}</p>
      <button onClick={() => handleClick()}>+1</button>
    </div>
  );
}

export default App;
