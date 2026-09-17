import type { SVGProps } from "react";

export type CellIconName =
  | "engine"
  | "spark"
  | "gears"
  | "wrench"
  | "gauge"
  | "leaf"
  | "cube"
  | "structure"
  | "wind"
  | "layers"
  | "brake"
  | "seat"
  | "circuit"
  | "simulation"
  | "code"
  | "cable"
  | "signal"
  | "chart"
  | "camera"
  | "handshake"
  | "users"
  | "wallet"
  | "package"
  | "megaphone";

const commonProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export default function CellIcon({ name, className = "" }: { name: CellIconName; className?: string }) {
  let drawing;

  switch (name) {
    case "engine":
      drawing = <><path d="M5 9h2l2-3h6l2 3h2v8H5z"/><path d="M2 11v4M22 11v4M9 12h6M11 3h2v3"/></>;
      break;
    case "spark":
      drawing = <><path d="m13 2-7 11h6l-1 9 7-12h-6z"/><path d="M4 5l2 2M18 17l2 2"/></>;
      break;
    case "gears":
      drawing = <><circle cx="9" cy="10" r="3"/><circle cx="17" cy="16" r="2.5"/><path d="M9 4v2M9 14v2M3 10h3M12 10h3M4.8 5.8l1.4 1.4M11.8 12.8l1.4 1.4M17 11v2.5M17 18.5V21M12.5 16H15M19.5 16H22"/></>;
      break;
    case "wrench":
      drawing = <><path d="M14.5 6.5a4 4 0 0 0-5-5l2.2 2.2-2.8 2.8-2.2-2.2a4 4 0 0 0 5 5L20 18l-2 2-8.3-8.5"/><circle cx="17.9" cy="18.1" r=".6"/></>;
      break;
    case "gauge":
      drawing = <><path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 14 4-4M7 17h10"/><circle cx="12" cy="14" r="1"/></>;
      break;
    case "leaf":
      drawing = <><path d="M20 4C11 4 5 8 5 14c0 3 2 5 5 5 6 0 10-6 10-15Z"/><path d="M4 21c2-6 6-9 12-12"/></>;
      break;
    case "cube":
      drawing = <><path d="m12 2 8 4.5v10L12 22l-8-5.5v-10z"/><path d="m4 6.5 8 5 8-5M12 11.5V22"/></>;
      break;
    case "structure":
      drawing = <><path d="M3 20 8 4h8l5 16M5 15h14M7 9h10M12 4v16"/></>;
      break;
    case "wind":
      drawing = <><path d="M3 8h11c3 0 3-4 0-4-1.2 0-2 .7-2.4 1.5M3 12h16c3 0 3 4 0 4-1.2 0-2-.7-2.4-1.5M3 16h8"/></>;
      break;
    case "layers":
      drawing = <><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>;
      break;
    case "brake":
      drawing = <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v5M20 12h-5M12 20v-5M4 12h5"/></>;
      break;
    case "seat":
      drawing = <><path d="M8 3v8l3 4h7v6M8 9H5v6l3 6M11 15l-3 6M14 4v6"/></>;
      break;
    case "circuit":
      drawing = <><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5M15 1v5M9 18v5M15 18v5M1 9h5M18 9h5M1 15h5M18 15h5M10 10h4v4h-4z"/></>;
      break;
    case "simulation":
      drawing = <><path d="M3 12h3l2-7 4 14 3-10 2 3h4"/><path d="M3 3v18h18"/></>;
      break;
    case "code":
      drawing = <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></>;
      break;
    case "cable":
      drawing = <><path d="M7 3v5a5 5 0 0 0 10 0V5M5 3h4M15 3h4M12 13v8M9 21h6"/></>;
      break;
    case "signal":
      drawing = <><circle cx="12" cy="18" r="1"/><path d="M8.5 14.5a5 5 0 0 1 7 0M5 11a10 10 0 0 1 14 0M2 7.5a15 15 0 0 1 20 0"/></>;
      break;
    case "chart":
      drawing = <><path d="M4 20V10M10 20V4M16 20v-7M22 20V7M2 20h21"/></>;
      break;
    case "camera":
      drawing = <><rect x="3" y="6" width="18" height="14" rx="2"/><path d="m8 6 1.5-3h5L16 6"/><circle cx="12" cy="13" r="4"/></>;
      break;
    case "handshake":
      drawing = <><path d="m8 12 3-3 2 2c1 1 2 1 3 0l1-1M3 8l4-3 4 2M21 8l-4-3-4 2M4 9l-2 6 4 2 2-2 5 5c2 2 4-1 2-2 2 1 4-2 2-3 2 1 4-2 2-3l-3-3"/></>;
      break;
    case "users":
      drawing = <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2-7 6-7s6 3 6 7M15 14c3 0 5 2 5 6"/></>;
      break;
    case "wallet":
      drawing = <><path d="M3 6h16a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2z"/><path d="m5 6 11-3 1 3M15 11h6v4h-6a2 2 0 0 1 0-4Z"/></>;
      break;
    case "package":
      drawing = <><path d="m12 2 9 5-9 5-9-5zM3 7v10l9 5 9-5V7M12 12v10M7.5 4.5l9 5"/></>;
      break;
    case "megaphone":
      drawing = <><path d="M4 10v5h4l9 4V6L8 10zM8 15l2 6h3l-2-5M20 9v7"/></>;
      break;
  }

  return <svg {...commonProps} className={className}>{drawing}</svg>;
}
