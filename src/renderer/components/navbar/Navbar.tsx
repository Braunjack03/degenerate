import "./index.scss";
import HamIcon from "./hamIcon/HamIcon";
import { ReactComponent as NavIcon } from "../../../assets/images/pictures/logos/DAA_Logo-white.svg";
import { ReactComponent as ApeMenu } from "../../../assets/images/icons/menu-ape-logo.svg";
import { SwipeableDrawer } from "@material-ui/core";
import { useState, useRef, useEffect } from "react";
import NavList from "./navList/NavList";
import { useMediaQuery } from "react-responsive";
import ConnectButton from "./connectButton/ConnectButton";
import { useHistory } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const history = useHistory()
  const [menu, setMenu] = useState(false);
  const leftNav = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 992px)",
  });

  useEffect(() => {
    const body = document.getElementsByTagName("html");
    if (menu) {
      body[0].style.overflowY = "hidden";
    } else {
      body[0].style.overflowY = "auto";
    }
    return () => {
      body[0].style.overflowY = "auto";
    };
  }, [menu]);

  return (
    <div className="navbar">
      
      <NavIcon onClick={()=>history.push('/')} style={isMobile ? {} : { zIndex: 2000 }} />
      <div className="left-nav-main">
        <div className="left-nav" ref={leftNav}>
          <ConnectButton
            navRef={leftNav}
            className={`${menu ? "open-menu" : ""}`}
          />
          <HamIcon onClick={() => setMenu(!menu)} />
        </div>

        <SwipeableDrawer
          anchor="right"
          open={menu}
          onOpen={() => setMenu(true)}
          onClose={() => setMenu(false)}
          className="nav-drawer"
        >
          {!isMobile && (
            <>
              <div className="logo"></div>
              <div className="monke">
                <ApeMenu />
              </div>
            </>
          )}
          <NavList
            open={menu}
            style={isMobile ? { width: "100vw" } : { width: "40%" }}
            close={() => setMenu(false)}
          />
        </SwipeableDrawer>
      </div>
    </div>
  );
}
