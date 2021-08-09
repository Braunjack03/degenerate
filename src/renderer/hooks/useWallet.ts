import { useState, useCallback } from "react";
import Wallet from "@project-serum/sol-wallet-adapter";
import useDidUpdateEffect from "./useDidUpdateEffect";
import { TCryptoWallet } from "./../api/types/globalData";
/*eslint-disable @typescript-eslint/no-non-null-assertion */

/*eslint-disable @typescript-eslint/no-explicit-any */

export type TWallet = "Sollet" | "Phantom";

export default function useWallet(): [
  TCryptoWallet | null,
  (wname: TWallet) => void
] {
  const [wallet, setWallet] = useState<TCryptoWallet | null>(null);
  const [walletName, setWalletName] = useState("");

  const getPhantomProvider = () => {
    if ("solana" in (window as any)) {
      const provider = (window as any).solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    return new Wallet(
      "https://phantom.app/",
      process.env.REACT_APP_SOLANA_NETWORK!
    );
  };
  useDidUpdateEffect(() => {
    if (walletName !== "") {
      let urlWallet;
      switch (walletName) {
        case "Sollet":
          urlWallet = new Wallet(
            "https://www.sollet.io",
            process.env.REACT_APP_SOLANA_NETWORK!
          );
          break;
        case "Phantom":
          if ((window as any).solana && (window as any).solana.isPhantom) {
            const phantomWallet = getPhantomProvider();
            urlWallet = phantomWallet;
          } else {
            urlWallet = new Wallet(
              "https://phantom.app/",
              process.env.REACT_APP_SOLANA_NETWORK!
            );
          }
          break;
        default:
          break;
      }

      setWallet(urlWallet);
    }
  }, [walletName]);

  const chooseWallet = useCallback((wname: TWallet) => {
    setWalletName(wname);
  }, []);

  return [wallet, chooseWallet];
}
