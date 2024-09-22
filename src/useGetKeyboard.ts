import { useGetAudio as getAudio } from "./getAudio";

type Keyboard = {
  layout: string[][],
  audio: Record<string, HTMLAudioElement>,
}

export const useGetKeyboard = () => {
  const layout = [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      ["z", "x", "c", "v", "b", "n", "m", ",", "."],
  ];
  
  const audio = layout.flat().reduce((acc, key) => {
    acc[key] = getAudio(key);
    return acc;
  }, {} as Record<string, HTMLAudioElement>);
  
  const keyboard: Keyboard = {
    layout: layout,
    audio: audio,
  };

  return keyboard;
}