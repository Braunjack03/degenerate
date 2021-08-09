import "./index.scss";
import { useState } from "react";
export default function HamIcon({
  onClick,
  color,
}: {
  onClick: () => void;
  color?: string;
}): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      id="ham-icon"
      style={{ ["--ham-color" as any]: color ?? "white" }}
      onClick={() => {
        setIsClicked(!isClicked);
        onClick();
      }}
      className={isClicked ? "open" : ""}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
