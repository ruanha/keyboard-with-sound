import { useState } from "react";

function Key({ audio, value, children }: { audio: HTMLAudioElement, value: string, children: string }) {
  const [active, setActive] = useState(false);
  document.addEventListener("keydown", (event) => {
    if (event.key === value.toLocaleLowerCase()) {
      setActive(true);
      audio.play();
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.key === value.toLocaleLowerCase()) {
      setActive(false);
    }
  });
  let className = active ? " outline" : "";
  if (children === "A") {
    className += " ml-3";
  } else if (children === "Z") {
    className += " ml-10";
  } else if (children === "SPACE") {
    className += " ml-40 w-64";
  }

  return <button className={"rounded-lg py-2.5 px-5 font-medium bg-slate-100" + className}>{children}</button>;
}

export default Key;
