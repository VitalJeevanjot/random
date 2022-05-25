// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteTimedoutRandomval } from "./types/random/tx";
import { MsgUpdateSentRandomval } from "./types/random/tx";
import { MsgDeleteSentRandomval } from "./types/random/tx";
import { MsgCreateRandom } from "./types/random/tx";
import { MsgCreateTimedoutRandomval } from "./types/random/tx";
import { MsgUpdateTimedoutRandomval } from "./types/random/tx";
import { MsgCreateSentRandomval } from "./types/random/tx";
import { MsgSendReqRandomval } from "./types/random/tx";
const types = [
    ["/genievot.random.random.MsgDeleteTimedoutRandomval", MsgDeleteTimedoutRandomval],
    ["/genievot.random.random.MsgUpdateSentRandomval", MsgUpdateSentRandomval],
    ["/genievot.random.random.MsgDeleteSentRandomval", MsgDeleteSentRandomval],
    ["/genievot.random.random.MsgCreateRandom", MsgCreateRandom],
    ["/genievot.random.random.MsgCreateTimedoutRandomval", MsgCreateTimedoutRandomval],
    ["/genievot.random.random.MsgUpdateTimedoutRandomval", MsgUpdateTimedoutRandomval],
    ["/genievot.random.random.MsgCreateSentRandomval", MsgCreateSentRandomval],
    ["/genievot.random.random.MsgSendReqRandomval", MsgSendReqRandomval],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteTimedoutRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgDeleteTimedoutRandomval", value: data }),
        msgUpdateSentRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgUpdateSentRandomval", value: data }),
        msgDeleteSentRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgDeleteSentRandomval", value: data }),
        msgCreateRandom: (data) => ({ typeUrl: "/genievot.random.random.MsgCreateRandom", value: data }),
        msgCreateTimedoutRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgCreateTimedoutRandomval", value: data }),
        msgUpdateTimedoutRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgUpdateTimedoutRandomval", value: data }),
        msgCreateSentRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgCreateSentRandomval", value: data }),
        msgSendReqRandomval: (data) => ({ typeUrl: "/genievot.random.random.MsgSendReqRandomval", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
