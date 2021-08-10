import * as borsh from "borsh";

export class MintDataAccount {
  uri_vec: string[];
  name: string;
  symbol: string;
  max_supply: number;
  nft_amount: number;

  constructor(
    uri_vec: string[],
    name: string,
    symbol: string,
    max_supply: number,
    nft_amount: number
  ) {
    this.uri_vec = uri_vec;
    this.max_supply = max_supply;
    this.name = name;
    this.symbol = symbol;
    this.nft_amount = nft_amount;
  }
}

export const createSerializedData = ({
  uri_vec,
  name,
  symbol,
  max_supply,
  nft_amount,
}: {
  uri_vec: string[];
  name: string;
  symbol: string;
  max_supply: number;
  nft_amount: number;
}) => {
  const mintTransfer = new MintDataAccount(
    uri_vec,
    name,
    symbol,
    max_supply,
    nft_amount
  );

  const mintSchema = new Map([
    [
      MintDataAccount,
      {
        kind: "struct",
        fields: [
          ["uri_vec", [uri_vec.length]],
          ["name", "string"],
          ["symbol", "string"],
          ["max_supply", "u64"],
          ["nft_amount", "u32"],
        ],
      },
    ],
  ]);

  const dataBuffer = borsh.serialize(mintSchema, mintTransfer);

  return new Uint8Array([1, ...dataBuffer]) as Buffer;
};
