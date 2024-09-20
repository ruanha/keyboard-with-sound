import "./App.css";
import { useRef } from "react";
import Keyboard from "./Keyboard";

function App() {
  const textarea = useRef<HTMLTextAreaElement>(null);
  document.addEventListener("keydown", () => {
    textarea.current?.focus();
  });
  return (
    <>
      <textarea ref={textarea} rows={1} cols={80}></textarea>
      <Keyboard />
    </>
  );
}

export default App;
