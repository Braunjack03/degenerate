import store from "../../renderer/redux/stores/store";
import {
  SystemProgram,
  PublicKey,
  Transaction,
  TransactionInstruction,
  SYSVAR_RENT_PUBKEY,
  Keypair,
} from "@solana/web3.js";
import { createSerializedData } from "../data-structures/mintDataBorsh";

export default async function mint({ apes }: { apes: string[] }): Promise<any> {
  const { globalData } = store.getState();

  if (globalData.wallet && globalData.wallet.publicKey) {
    try {
      const contractData: {
        uri_vec: string[];
        name: string;
        symbol: string;
        max_supply: number;
        nft_amount: number;
      } = {
        uri_vec: apes,
        name: "testnft",
        symbol: "test",
        max_supply: 10000,
        nft_amount: apes.length,
      };

      const mintProgramId = new PublicKey(
        "kn9zpchdZKRDYoeeTQMiJKv1Sf17bqoxFiCfs5BEoKe"
      );

      const serializedData = createSerializedData(contractData);
      console.log(serializedData);

      const newAccount = new Keypair();

      const createMintDataAcount = SystemProgram.createAccount({
        space: serializedData.length,
        lamports: await globalData.connection.getMinimumBalanceForRentExemption(
          serializedData.length,
          "singleGossip"
        ),
        fromPubkey: globalData.wallet.publicKey,
        newAccountPubkey: newAccount.publicKey,
        programId: mintProgramId,
      });

      const mintTransaionInstruction = new TransactionInstruction({
        programId: mintProgramId,
        keys: [
          {
            pubkey: newAccount.publicKey,
            isSigner: false,
            isWritable: true,
          },
          {
            pubkey: SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: globalData.wallet.publicKey,
            isSigner: true,
            isWritable: false,
          },
        ],
        data: serializedData,
      });

      const mintTransaction = new Transaction(/* {
        feePayer: globalData.wallet.publicKey,
      } */).add(createMintDataAcount, mintTransaionInstruction);

      const signers = [newAccount];

      mintTransaction.recentBlockhash = (
        await globalData.connection.getRecentBlockhash()
      ).blockhash;
      mintTransaction.setSigners(
        globalData.wallet.publicKey,
        ...signers.map((s) => s.publicKey)
      );
      if (signers.length > 0) {
        mintTransaction.partialSign(...signers);
      }

      console.log(mintTransaction.serializeMessage().toString("base64"));
      const signedMint = await globalData.wallet.signTransaction(
        mintTransaction
      );

      const rawTransaction = signedMint.serialize();
      const options = {
        skipPreflight: true,
        commitment: "singleGossip",
      };
      const userSignature = await globalData.connection.sendRawTransaction(
        rawTransaction,
        options
      );

      console.log(userSignature);
      await globalData.connection.confirmTransaction(
        userSignature,
        "singleGossip"
      );
      console.log(userSignature);
      return {
        DataWallet: newAccount.publicKey.toBytes(),
        success: true,
        signature: userSignature,
      };
    } catch (e) {
      console.log(e);
      return { success: false };
    }
  }
}
