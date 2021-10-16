import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div style={{ textAlign: "center" }}>
      {count}
      <button onClick={() => handleClick()}>+1</button>
    </div>
  );
}

export default App;
