import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { name, type, value, setValue } = props;

  const deleteEvent = () => {
    let newValue = value;
    newValue = newValue.slice(0, -1);
    setValue(newValue);
  };

  const specialCharacterEvent = (val: string) => {
    if (value.length === 0 && val !== "-") return;
    if (value.length === 0 && val === "-") {
      setValue(val);
    } else if (value[value.length - 1].match(/\d/)) setValue(value + val);
    else if (value.length > 1) {
      let newValue = value;
      newValue = newValue.replace(/.$/, val);
      setValue(newValue);
    }
  };

  const handleEvent = (e: any) => {
    const val = e.type === "click" ? name : e.key;
    if (
      (type === "delete" && val === "Backspace") ||
      (type === "delete" && typeof val === "object" && val.iconName && val.iconName === "delete-left")
    )
      deleteEvent();
    else if (val === "AC") setValue("");
    else if (type === "equals" && (val === "Enter" || val === name)) console.log(name);
    else if (type === "count" && val === name) specialCharacterEvent(val);
    else if (name === "x" && val === "*") specialCharacterEvent("x");
    else if (val === name) setValue(value + name);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEvent);
    return () => window.removeEventListener("keydown", handleEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <button className={`button button-${type}`} onClick={handleEvent}>
      {type === "delete" ? <FontAwesomeIcon icon={name} /> : name}
    </button>
  );
};
