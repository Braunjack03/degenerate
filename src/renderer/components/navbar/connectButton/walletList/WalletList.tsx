import "./index.scss";
import PrimaryButton from "../../../common/primaryButton/primaryButton";
import { ReactComponent as Phamtom } from "../../../../../assets/images/pictures/icons/phantom.svg";
import { ReactComponent as Sollet } from "../../../../../assets/images/pictures/icons/sollet.svg";
import useWallet from "../../../../hooks/useWallet";
import useReduxState from "../../../../hooks/useReduxState";
import useDidUpdateEffect from "../../../../hooks/useDidUpdateEffect";
import { TWallet } from "../../../../hooks/useWallet";

export default function WalletList(): JSX.Element {
  const [wallet, setWallet] = useWallet();
  const [, setGlobalData] = useReduxState((state) => state.globalData);

  useDidUpdateEffect(() => {
    if (wallet) {
      setGlobalData({
        type: "SET_GLOBAL_DATA",
        arg: {
          wallet,
        },
      });
    }
  }, [wallet]);

  const handleWallet = (walletType: TWallet) => {
    setWallet(walletType);
  };
  return (
    <div className="w-list">
      <PrimaryButton
        className="wl-phantom"
        onClick={() => handleWallet("Phantom")}
      >
        <Phamtom />
        Phantom
      </PrimaryButton>
      <PrimaryButton
        className="wl-sollet"
        onClick={() => handleWallet("Sollet")}
      >
        <Sollet />
        Sollet
      </PrimaryButton>
    </div>
  );
}
