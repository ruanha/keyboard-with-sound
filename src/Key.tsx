import { useState } from "react";

function Key({
  children,
  audio,
}: {
  children: string;
  audio: HTMLAudioElement;
}) {
  const [active, setActive] = useState(false);
  document.addEventListener("keydown", (event) => {
    if (event.key === children.toLocaleLowerCase()) {
      console.log(children);
      setActive(true);
      audio.play();
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.key === children.toLocaleLowerCase()) {
      setActive(false);
    }
  });
  let className = active ? "outline" : "";
  if (children === "A") {
    className += " ml-3";
  } else if (children === "Z") {
    className += " ml-10";
  }
  return <button className={className}>{children}</button>;
}

export default Key;
