import "./App.css";
import { useRef } from "react";
import Keyboard from "./Keyboard";

function App() {
  const textarea = useRef<HTMLTextAreaElement>(null);
  document.addEventListener("keydown", () => {
    textarea.current?.focus();
  });
  return (
    <div className="flex flex-col items-center space-y-6">
      <textarea className="resize-none" ref={textarea} rows={1} cols={80}></textarea>
      <Keyboard />
    </div>
  );
}

export default App;
