import "./index.scss";
import { ReactComponent as Ape } from "../../../../../../../assets/images/pictures/desktop icons/ape.svg";
import { ReactComponent as File } from "../../../../../../../assets/images/pictures/desktop icons/file.svg";
import { ReactComponent as Banana } from "../../../../../../../assets/images/pictures/desktop icons/banana.svg";
import NSFWFolder from "./nsfwFolder/NSFWFolder";
import { TScreenState } from "../../../../../../api/types/screen";
import useScreen from "../../../../../../hooks/useScreen";
import useReduxState from "../../../../../../hooks/useReduxState";
import { useState } from "react";
import MintingCountdown from "./countdown/MintingCountdown";

export default function HomeScreen(): JSX.Element {
  const [{ connected }] = useReduxState((state) => state.globalData);
  const [, setScreen] = useScreen();
  const handleDir = (nextScreen: TScreenState) => {
    if (connected) {
      setScreen(nextScreen);
    } else {
      setScreen("CONNECT");
    }
  };

  const [nsfw, setNsfw] = useState(false);
  const [minting, setMinting] = useState(false);

  return (
    <div className="s-home">
      <div className="h-ape" onClick={() => setMinting(true)}>
        <Ape />
        <h2>mint.exe</h2>
      </div>
      <div className="h-file" onClick={() => setNsfw(true)}>
        <File />
        <h2>
          school
          <br />
          stuff
        </h2>
      </div>
      <div className="h-banana" onClick={() => handleDir("GAMES")}>
        <Banana />
        <h2>
          banana
          <br />
          blitz
        </h2>
      </div>
      <NSFWFolder open={nsfw} handleClose={() => setNsfw(false)} />
      <MintingCountdown open={minting} handleClose={() => setMinting(false)} />
    </div>
  );
}
