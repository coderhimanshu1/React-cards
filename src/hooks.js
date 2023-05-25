import { useState } from "react";

const useFlip = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState((oldState) => !oldState);
  };
  return [state, toggleState];
};

export default useFlip;
