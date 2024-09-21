import { ElementType } from "react";

export interface Specifications {
  DPI: number;
  "Connection Type": string;
  OperatingRange: string;
  Battery: string;
  Dimensions: string;
  Weight: string;
  Compatibility: string[];
  Microphone: string;
  Resolution: string;
  Lighting: string;
  "Switch Type": string;
  Sound: string;
  Connectivity: string[];
  "Panel Type": string;
  "Refresh Rate": string;
  "Screen Size": string;
  Capacity: string;
  Interface: string;
  "Output Power": string;
  "Battery Life": string;
  "Waterproof Rating": string;
  Material: string;
  "Fan Size": string;
  "Fan Speed": string;
  "Power Source": string;
  "HDMI Resolution": string;
  Ports: string[];
}
export interface SpecificationItemProps {
  icon: ElementType;
  title: string;
  values: number | string | string[];
}
