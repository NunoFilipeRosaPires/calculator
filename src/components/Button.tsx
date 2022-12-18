import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { name, type } = props;

  useEffect(() => {
    const handleEvent = (e: KeyboardEvent) => {
      if (type === "delete" && e.key === "Backspace") console.log(name);
      else if (type === "equals" && e.key === "Enter") console.log(name);
      else if (name === "x" && e.key === "*") console.log(name);
      else if (name === "x") return;
      else if (e.key === name) console.log(name);
    };
    window.addEventListener("keydown", handleEvent);
    return () => window.removeEventListener("keydown", handleEvent);
  }, []);

  return (
    <button className={`button button-${type}`} onClick={() => console.log(name)}>
      {type === "delete" ? <FontAwesomeIcon icon={name} /> : name}
    </button>
  );
};
