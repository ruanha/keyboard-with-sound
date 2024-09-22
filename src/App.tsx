import "./App.css";
import { useRef } from "react";
import Keyboard from "./Keyboard";
import { useGetKeyboard } from "./useGetKeyboard";

function App() {
  const keyboard = useGetKeyboard();
  const textarea = useRef<HTMLTextAreaElement>(null);
  document.addEventListener("keydown", () => {
    textarea.current?.focus();
  })

  return (
    <div className="flex flex-col items-center space-y-6">
      <textarea className="resize-none" ref={textarea} rows={10} cols={80}></textarea>
      <Keyboard keyboard={keyboard} />
    </div>
  );
}

export default App;
