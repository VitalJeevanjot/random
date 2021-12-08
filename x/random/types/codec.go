package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateRandom{}, "random/CreateRandom", nil)
	cdc.RegisterConcrete(&MsgSendReqRandomval{}, "random/SendReqRandomval", nil)
	cdc.RegisterConcrete(&MsgCreateSentRandomval{}, "random/CreateSentRandomval", nil)
	cdc.RegisterConcrete(&MsgUpdateSentRandomval{}, "random/UpdateSentRandomval", nil)
	cdc.RegisterConcrete(&MsgDeleteSentRandomval{}, "random/DeleteSentRandomval", nil)
	cdc.RegisterConcrete(&MsgCreateTimedoutRandomval{}, "random/CreateTimedoutRandomval", nil)
	cdc.RegisterConcrete(&MsgUpdateTimedoutRandomval{}, "random/UpdateTimedoutRandomval", nil)
	cdc.RegisterConcrete(&MsgDeleteTimedoutRandomval{}, "random/DeleteTimedoutRandomval", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRandom{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendReqRandomval{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSentRandomval{},
		&MsgUpdateSentRandomval{},
		&MsgDeleteSentRandomval{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTimedoutRandomval{},
		&MsgUpdateTimedoutRandomval{},
		&MsgDeleteTimedoutRandomval{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
