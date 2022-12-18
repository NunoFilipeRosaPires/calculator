import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";

export const Keyboard = () => {
  return (
    <div className="keyboard background">
      {buttons.flat().map((button, index) => {
        return <Button key={index} {...button} />;
      })}
    </div>
  );
};

const buttons = [
  [
    { name: "AC", type: "special" },
    { name: faDeleteLeft, type: "delete" },
    { name: "%", type: "special" },
    { name: "/", type: "count" },
  ],
  [
    { name: "7", type: "normal" },
    { name: "8", type: "normal" },
    { name: "9", type: "normal" },
    { name: "x", type: "count" },
  ],
  [
    { name: "4", type: "normal" },
    { name: "5", type: "normal" },
    { name: "6", type: "normal" },
    { name: "-", type: "count" },
  ],
  [
    { name: "1", type: "normal" },
    { name: "2", type: "normal" },
    { name: "3", type: "normal" },
    { name: "+", type: "count" },
  ],
  [
    { name: "0", type: "normal" },
    { name: ".", type: "normal" },
    { name: "=", type: "equals" },
  ],
];
