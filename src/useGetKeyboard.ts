import { useGetAudio as getAudio } from "./getAudio";

type Keyboard = {
  layout: { value: string, name?: string, representation?: string }[][],
  audio: Record<string, HTMLAudioElement>,
}

export const useGetKeyboard = () => {
  const layout = [
      [{value: "q"}, {value: "w"}, {value: "e"}, {value: "r"}, {value: "t"}, {value: "y"}, {value: "u"}, {value: "i"}, {value: "o"}, {value: "p"}],
      [{value: "a"}, {value: "s"}, {value: "d"}, {value: "f"}, {value: "g"}, {value: "h"}, {value: "j"}, {value: "k"}, {value: "l"}],
      [{value: "z"}, {value: "x"}, {value: "c"}, {value: "v"}, {value: "b"}, {value: "n"}, {value: "m"}, {value: ",", name: "colon"}, {value: ".", name: "period"}],
      [{value: " ", name: "space", representation: "space"}],
  ];
  
  const audio = layout.flat().reduce((acc, key) => {
    acc[key.value] = getAudio(key.name || key.value);
    return acc;
  }, {} as Record<string, HTMLAudioElement>);
  
  const keyboard: Keyboard = {
    layout: layout,
    audio: audio,
  };

  return keyboard;
}