import { useState } from "react";

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return initialState;
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : initialState;
    } catch (err) {
      console.trace(err);
    }
  });
  const setLocalStorage = (value) => {
    try {
      setState(value);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      console.trace(err);
    }
  };
  return [state, setLocalStorage];
};

export default useLocalStorage;
