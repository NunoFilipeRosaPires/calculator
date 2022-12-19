import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { name, type } = props;

  const handleEvent = (e: any) => {
    const val = e.type === "click" ? name : e.key;
    if (type === "delete" && val === "Backspace") console.log(name);
    else if (type === "equals" && val === "Enter") console.log(name);
    else if (name === "x" && val === "*") console.log(name);
    else if (val === name) console.log(name);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEvent);
    return () => window.removeEventListener("keydown", handleEvent);
  }, []);

  return (
    <button className={`button button-${type}`} onClick={handleEvent}>
      {type === "delete" ? <FontAwesomeIcon icon={name} /> : name}
    </button>
  );
};
