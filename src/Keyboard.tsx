import Key from "./Key";
import { useGetKeyboard } from "./useGetKeyboard";

function Keyboard({ keyboard }: { keyboard: ReturnType<typeof useGetKeyboard> }) {

  return (
    <div className="flex-col space-y-2">
      {keyboard.layout.map((row, i) => (
        <div key={i} className="flex space-x-2">
          {row.map((key) => (
            <Key 
              key={key.value} 
              value={key.value}
              audio={keyboard.audio[key.value]}
            >
                {key.representation ? key.representation.toUpperCase() : key.value.toUpperCase()}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
