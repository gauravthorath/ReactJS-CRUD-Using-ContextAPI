import React, { useState } from "react";

function useStateHook() {
  const [counter, setCounter] = useState(0);

  let handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Counter : {counter}</button>
    </div>
  );
}
export default useStateHook;
