import { Dispatch, SetStateAction } from "react";

export interface ButtonProps {
  name: any;
  type: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
