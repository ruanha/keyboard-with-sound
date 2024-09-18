import Key from "./Key";

function Keyboard() {
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Æ", "Ø"],
    ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "-"],
  ];
  const audio = new Audio("/t-rex-roar.mp3");
  return (
    <div className="flex-col space-y-2">
      {keyboard.map((row, i) => (
        <div key={i} className="flex space-x-2">
          {row.map((key) => (
            <Key key={key} audio={audio}>
              {key}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
