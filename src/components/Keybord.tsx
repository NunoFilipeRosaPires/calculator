import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";

export const Keybord = () => {
  return (
    <div className="keybord background">
      {buttons.flat().map((button, index) => {
        return <Button key={index} {...button} />;
      })}
    </div>
  );
};

const buttons = [
  [
    { name: "AC", type: "special" },
    { name: faDeleteLeft.prefix, type: "special" },
    { name: "%", type: "special" },
    { name: "/", type: "special" },
  ],
  [
    { name: "7", type: "normal" },
    { name: "8", type: "normal" },
    { name: "9", type: "normal" },
    { name: "x", type: "special" },
  ],
  [
    { name: "4", type: "normal" },
    { name: "5", type: "normal" },
    { name: "6", type: "normal" },
    { name: "-", type: "special" },
  ],
  [
    { name: "1", type: "normal" },
    { name: "2", type: "normal" },
    { name: "3", type: "normal" },
    { name: "+", type: "special" },
  ],
  [
    { name: "0", type: "normal" },
    { name: ".", type: "normal" },
    { name: "=", type: "equals" },
  ],
];
