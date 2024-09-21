import {
  PuzzlePieceIcon,
  ShareIcon,
  CubeIcon,
  MicrophoneIcon,
  ComputerDesktopIcon,
  ScaleIcon,
  LinkIcon,
  SpeakerWaveIcon,
  WifiIcon,
  DeviceTabletIcon,
  TvIcon,
  PowerIcon,
  FilmIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  CircleStackIcon,
  ArrowPathIcon,
  PlayCircleIcon,
  Cog6ToothIcon,
  Battery100Icon,
  BoltIcon,
  BeakerIcon,
  ViewColumnsIcon,
  CubeTransparentIcon,
  ArrowPathRoundedSquareIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Product } from "../types/Product";
import { Battery0Icon } from "@heroicons/react/20/solid";

export const specificationsList = (product: Product) => [
  { label: "DPI", icon: Cog6ToothIcon, value: product?.specifications?.DPI },
  {
    label: "Connection Type",
    icon: ShareIcon,
    value: product?.specifications?.["Connection Type"],
  },
  {
    label: "Operating Range",
    icon: DevicePhoneMobileIcon,
    value: product?.specifications?.OperatingRange,
  },
  {
    label: "Battery",
    icon: Battery0Icon,
    value: product?.specifications?.Battery,
  },
  {
    label: "Dimensions",
    icon: CubeIcon,
    value: product?.specifications?.Dimensions,
  },
  { label: "Weight", icon: ScaleIcon, value: product?.specifications?.Weight },
  {
    label: "Compatibility",
    icon: PuzzlePieceIcon,
    value: product?.specifications?.Compatibility,
  },
  {
    label: "Microphone",
    icon: MicrophoneIcon,
    value: product?.specifications?.Microphone,
  },
  {
    label: "Resolution",
    icon: ComputerDesktopIcon,
    value: product?.specifications?.Resolution,
  },
  {
    label: "Lighting",
    icon: LightBulbIcon,
    value: product?.specifications?.Lighting,
  },
  {
    label: "Switch Type",
    icon: PowerIcon,
    value: product?.specifications?.["Switch Type"],
  },
  {
    label: "Sound",
    icon: SpeakerWaveIcon,
    value: product?.specifications?.Sound,
  },
  {
    label: "Connectivity",
    icon: WifiIcon,
    value: product?.specifications?.Connectivity,
  },
  {
    label: "Panel Type",
    icon: DeviceTabletIcon,
    value: product?.specifications?.["Panel Type"],
  },
  {
    label: "Refresh Rate",
    icon: ArrowPathIcon,
    value: product?.specifications?.["Refresh Rate"],
  },
  {
    label: "Screen Size",
    icon: TvIcon,
    value: product?.specifications?.["Screen Size"],
  },
  {
    label: "Capacity",
    icon: CircleStackIcon,
    value: product?.specifications?.Capacity,
  },
  {
    label: "Interface",
    icon: LinkIcon,
    value: product?.specifications?.Interface,
  },
  {
    label: "Output Power",
    icon: BoltIcon,
    value: product?.specifications?.["Output Power"],
  },
  {
    label: "Battery Life",
    icon: Battery100Icon,
    value: product?.specifications?.["Battery Life"],
  },
  {
    label: "Waterproof Rating",
    icon: BeakerIcon,
    value: product?.specifications?.["Waterproof Rating"],
  },
  {
    label: "Material",
    icon: ViewColumnsIcon,
    value: product?.specifications?.Material,
  },
  {
    label: "Fan Size",
    icon: CubeTransparentIcon,
    value: product?.specifications?.["Fan Size"],
  },
  {
    label: "Fan Speed",
    icon: ArrowPathRoundedSquareIcon,
    value: product?.specifications?.["Fan Speed"],
  },
  {
    label: "Power Source",
    icon: ArrowRightStartOnRectangleIcon,
    value: product?.specifications?.["Power Source"],
  },
  {
    label: "HDMI Resolution",
    icon: FilmIcon,
    value: product?.specifications?.["HDMI Resolution"],
  },
  {
    label: "Ports",
    icon: PlayCircleIcon,
    value: product?.specifications?.Ports,
  },
];
