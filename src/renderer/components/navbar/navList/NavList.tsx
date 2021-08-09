import "./index.scss";
import { Link } from "react-router-dom";
/* import PrimaryButton from "../../common/primaryButton/primaryButton"; */
import { useTrail } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { ReactComponent as Twitter } from "../../../../assets/images/icons/twitter.svg";
import { ReactComponent as Discord } from "../../../../assets/images/icons/discord.svg";
import React from "react";

export default function NavList({
  open,
  style,
  close,
}: {
  open: boolean;
  style?: React.CSSProperties;
  close: () => void;
}): JSX.Element {
  const trail = useTrail(9, {
    from: { x: 500, opacity: 0 },
    x: open ? 0 : 500,
    opacity: open ? 1 : 0,
    config: { mass: 6, tension: 3000, friction: 200 },
  });
  return (
    <div className="nav-list" style={style ?? {}} onClick={close}>
      <animated.div className="my-apes" style={trail[0]}>
        <Link to="/my-apes">My Apes</Link>
      </animated.div>
      <animated.div style={trail[1]}>
        <a href="/#about">About</a>
      </animated.div>
      <animated.div style={trail[2]}>
        <a href="/#roadmap">Utility & Roadmap</a>
      </animated.div>
      <animated.div style={trail[3]}>
        <a href="/#traits">Rarity</a>
      </animated.div>
      <animated.div style={trail[4]} >
        <Link to="/rarities">Academy Rarity</Link>
      </animated.div>
      <animated.div style={trail[5]}>
        <a href="/#faqs">Faq</a>
      </animated.div>
      <animated.div style={trail[6]}>
        <a href="/#team">The Team</a>
      </animated.div>
      <animated.div style={{ ...trail[7], ...{ marginBottom: "30%" } }}>
        <Link to="/terms">Terms</Link>
      </animated.div>
      <animated.div className="nav-social" style={trail[8]}>
        <a
          href="https://twitter.com/degenapeacademy"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://twitter.com/degenapeacademy"
          target="_blank"
          rel="noreferrer"
        >
          <Discord />
        </a>
      </animated.div>

      {/*       <PrimaryButton onClick={() => console.log("hi")}>MINT</PrimaryButton> */}
    </div>
  );
}
