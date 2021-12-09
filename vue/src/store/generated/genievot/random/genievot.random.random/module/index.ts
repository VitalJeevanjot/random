// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTimedoutRandomval } from "./types/random/tx";
import { MsgDeleteSentRandomval } from "./types/random/tx";
import { MsgDeleteTimedoutRandomval } from "./types/random/tx";
import { MsgCreateRandom } from "./types/random/tx";
import { MsgUpdateSentRandomval } from "./types/random/tx";
import { MsgCreateTimedoutRandomval } from "./types/random/tx";
import { MsgSendReqRandomval } from "./types/random/tx";
import { MsgCreateSentRandomval } from "./types/random/tx";


const types = [
  ["/genievot.random.random.MsgUpdateTimedoutRandomval", MsgUpdateTimedoutRandomval],
  ["/genievot.random.random.MsgDeleteSentRandomval", MsgDeleteSentRandomval],
  ["/genievot.random.random.MsgDeleteTimedoutRandomval", MsgDeleteTimedoutRandomval],
  ["/genievot.random.random.MsgCreateRandom", MsgCreateRandom],
  ["/genievot.random.random.MsgUpdateSentRandomval", MsgUpdateSentRandomval],
  ["/genievot.random.random.MsgCreateTimedoutRandomval", MsgCreateTimedoutRandomval],
  ["/genievot.random.random.MsgSendReqRandomval", MsgSendReqRandomval],
  ["/genievot.random.random.MsgCreateSentRandomval", MsgCreateSentRandomval],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateTimedoutRandomval: (data: MsgUpdateTimedoutRandomval): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgUpdateTimedoutRandomval", value: data }),
    msgDeleteSentRandomval: (data: MsgDeleteSentRandomval): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgDeleteSentRandomval", value: data }),
    msgDeleteTimedoutRandomval: (data: MsgDeleteTimedoutRandomval): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgDeleteTimedoutRandomval", value: data }),
    msgCreateRandom: (data: MsgCreateRandom): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgCreateRandom", value: data }),
    msgUpdateSentRandomval: (data: MsgUpdateSentRandomval): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgUpdateSentRandomval", value: data }),
    msgCreateTimedoutRandomval: (data: MsgCreateTimedoutRandomval): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgCreateTimedoutRandomval", value: data }),
    msgSendReqRandomval: (data: MsgSendReqRandomval): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgSendReqRandomval", value: data }),
    msgCreateSentRandomval: (data: MsgCreateSentRandomval): EncodeObject => ({ typeUrl: "/genievot.random.random.MsgCreateSentRandomval", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
