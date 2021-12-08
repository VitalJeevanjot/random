package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTimedoutRandomval{}

func NewMsgCreateTimedoutRandomval(creator string, userid string, vrv string) *MsgCreateTimedoutRandomval {
	return &MsgCreateTimedoutRandomval{
		Creator: creator,
		Userid:  userid,
		Vrv:     vrv,
	}
}

func (msg *MsgCreateTimedoutRandomval) Route() string {
	return RouterKey
}

func (msg *MsgCreateTimedoutRandomval) Type() string {
	return "CreateTimedoutRandomval"
}

func (msg *MsgCreateTimedoutRandomval) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTimedoutRandomval) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTimedoutRandomval) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTimedoutRandomval{}

func NewMsgUpdateTimedoutRandomval(creator string, id uint64, userid string, vrv string) *MsgUpdateTimedoutRandomval {
	return &MsgUpdateTimedoutRandomval{
		Id:      id,
		Creator: creator,
		Userid:  userid,
		Vrv:     vrv,
	}
}

func (msg *MsgUpdateTimedoutRandomval) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTimedoutRandomval) Type() string {
	return "UpdateTimedoutRandomval"
}

func (msg *MsgUpdateTimedoutRandomval) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTimedoutRandomval) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTimedoutRandomval) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTimedoutRandomval{}

func NewMsgDeleteTimedoutRandomval(creator string, id uint64) *MsgDeleteTimedoutRandomval {
	return &MsgDeleteTimedoutRandomval{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTimedoutRandomval) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTimedoutRandomval) Type() string {
	return "DeleteTimedoutRandomval"
}

func (msg *MsgDeleteTimedoutRandomval) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTimedoutRandomval) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTimedoutRandomval) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
