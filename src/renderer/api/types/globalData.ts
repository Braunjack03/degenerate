import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import Wallet from "@project-serum/sol-wallet-adapter";
type PhantomEvent = "disconnect" | "connect";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface WalletProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  autoApprove: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<void>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<any>;
}

export interface IGlobalData {
  connected: boolean;
  wallet: WalletProvider | null;
  screenLoading: boolean;
  connection: Connection;
}

export type TCryptoWallet = WalletProvider;
