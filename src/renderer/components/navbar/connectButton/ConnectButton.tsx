import "./index.scss";
import PrimaryButton from "../../common/primaryButton/primaryButton";
import { useState } from "react";
import WalletList from "./walletList/WalletList";
export default function ConnectButton({
  className,
  navRef,
}: {
  className: string;
  navRef: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`nav-connect-wrap nav-connect  ${className} ${
        open ? "nc-open" : ""
      }`}
    >
      <PrimaryButton
        /*    {...(navRef.current && {
        style: { top: `${navRef.current.clientHeight / 2.93}%` },
      })} */
        onClick={() => setOpen(!open)}
      >
        Connect Wallet
      </PrimaryButton>
      <div className={`nc-dropdown `}>
        <WalletList />
      </div>
    </div>
  );
}
