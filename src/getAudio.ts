export const useGetAudio = (s: string) => new Audio(`/${s.toLowerCase()}.mp3`);