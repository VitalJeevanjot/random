import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTimedoutRandomval } from "./types/random/tx";
import { MsgDeleteSentRandomval } from "./types/random/tx";
import { MsgDeleteTimedoutRandomval } from "./types/random/tx";
import { MsgCreateRandom } from "./types/random/tx";
import { MsgUpdateSentRandomval } from "./types/random/tx";
import { MsgCreateTimedoutRandomval } from "./types/random/tx";
import { MsgSendReqRandomval } from "./types/random/tx";
import { MsgCreateSentRandomval } from "./types/random/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateTimedoutRandomval: (data: MsgUpdateTimedoutRandomval) => EncodeObject;
    msgDeleteSentRandomval: (data: MsgDeleteSentRandomval) => EncodeObject;
    msgDeleteTimedoutRandomval: (data: MsgDeleteTimedoutRandomval) => EncodeObject;
    msgCreateRandom: (data: MsgCreateRandom) => EncodeObject;
    msgUpdateSentRandomval: (data: MsgUpdateSentRandomval) => EncodeObject;
    msgCreateTimedoutRandomval: (data: MsgCreateTimedoutRandomval) => EncodeObject;
    msgSendReqRandomval: (data: MsgSendReqRandomval) => EncodeObject;
    msgCreateSentRandomval: (data: MsgCreateSentRandomval) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
