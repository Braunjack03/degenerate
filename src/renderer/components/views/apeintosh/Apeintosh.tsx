import "./index.scss";
import ApeintoshImg from "../../../../assets/images/pictures/backgrounds/pc-off.png";
import { ReactComponent as ScrollWeb } from "../../../../assets/images/pictures/icons/scroll-web.svg";
import { ReactComponent as ScrollMobile } from "../../../../assets/images/pictures/icons/scroll-mobile.svg";
import ApeintoshContent from "./apeintoshContent/ApeintoshContent";
import { useRef, useState, useEffect } from "react";
import useDidUpdateEffect from "../../../hooks/useDidUpdateEffect";
import useReduxState from "../../../hooks/useReduxState";
import { useMediaQuery } from "react-responsive";
import ApesRemaining from "./apesRemaining/ApesRemaining";
/*eslint-disable react-hooks/exhaustive-deps */
export default function Apeintosh(): JSX.Element {
  const apeintoshImg = useRef<HTMLImageElement>(null);
  const [size, setSize] = useState<{ width: string; height: string }>({
    width: "0px",
    height: "0px",
  });

  const [{ wallet, screenLoading: loading }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );
  const handleResize = () => {
    if (apeintoshImg && apeintoshImg.current !== undefined) {
      setSize({
        height: `${apeintoshImg.current!.clientHeight}px`,
        width: `${apeintoshImg.current!.clientWidth}px`,
      });
    }
  };

  const isMobile = useMediaQuery({
    query: "(max-width:992px)",
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useDidUpdateEffect(() => {
    if (wallet) {
      wallet.on("connect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: true,
          },
        });
      });
      wallet.on("disconnect", () => {
        setGlobalData({
          type: "SET_GLOBAL_DATA",
          arg: {
            connected: false,
          },
        });
      });

      wallet.connect();
      return () => {
        wallet.disconnect();
      };
    }
  }, [wallet]);

  useDidUpdateEffect(() => {
    handleResize();
  }, [loading]);

  return (
    <div className="apeintosh">
      <div className="apeintosh-pc" ref={apeintoshImg}>
        {!loading && (
          <ApeintoshContent
            style={{
              ["--y" as string]: `10.001%`,
              ["--x" as string]: `9.5%`,
              ["--height" as string]: `calc(${size.height} * 0.4791)`,
              ["--width" as string]: `calc(${size.width} * 0.805)`,
            }}
          />
        )}
        <img src={ApeintoshImg} alt="computer" className="apeintosh-img" />
        <div className="ape-shadow" />
      </div>
      {isMobile ? <ScrollMobile /> : <ScrollWeb />}
      {!isMobile && <ApesRemaining />}
    </div>
  );
}
