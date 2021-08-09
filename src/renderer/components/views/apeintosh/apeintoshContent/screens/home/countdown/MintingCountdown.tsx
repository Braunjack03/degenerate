import "./index.scss";

import ApeintoshPopupWindow from "../../../../../../common/apeintosh/apeintoshPopupWindow.tsx/ApeintoshPopupWindow";
import ApeintoshButton from "../../../../../../common/apeintosh/apeintoshButton/ApeintoshButton";
import useCountdown from "../../../../../../../hooks/useCountdown";
import mint from "../../../../../../../../utils/mint/mintApe";

export default function MintingCountdown({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}): JSX.Element {
  const timeLeft = useCountdown("2021-08-12T00:00:00");
  return (
    <ApeintoshPopupWindow open={open} ape={true}>
      <div className="h-minting">
        <h1>Minting opening:</h1>
        <div className="minting-countdown">
          {timeLeft.days}:{timeLeft.hours}:{timeLeft.min}:{timeLeft.sec}
        </div>
        <ApeintoshButton
          className="minting-button"
          onClick={() => {
            handleClose();
            mint({
              apes: [
                "https://degenape.academy/assets/images/DAA_Logo.png",
                "https://degenape.academy/assets/images/DAA_Logo.png",
              ],
            });
          }}
        >
          FUCK, OK
        </ApeintoshButton>
      </div>
    </ApeintoshPopupWindow>
  );
}
