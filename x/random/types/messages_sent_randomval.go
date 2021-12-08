package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSentRandomval{}

func NewMsgCreateSentRandomval(creator string, userid string, vrv string) *MsgCreateSentRandomval {
	return &MsgCreateSentRandomval{
		Creator: creator,
		Userid:  userid,
		Vrv:     vrv,
	}
}

func (msg *MsgCreateSentRandomval) Route() string {
	return RouterKey
}

func (msg *MsgCreateSentRandomval) Type() string {
	return "CreateSentRandomval"
}

func (msg *MsgCreateSentRandomval) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSentRandomval) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSentRandomval) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSentRandomval{}

func NewMsgUpdateSentRandomval(creator string, id uint64, userid string, vrv string) *MsgUpdateSentRandomval {
	return &MsgUpdateSentRandomval{
		Id:      id,
		Creator: creator,
		Userid:  userid,
		Vrv:     vrv,
	}
}

func (msg *MsgUpdateSentRandomval) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSentRandomval) Type() string {
	return "UpdateSentRandomval"
}

func (msg *MsgUpdateSentRandomval) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSentRandomval) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSentRandomval) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSentRandomval{}

func NewMsgDeleteSentRandomval(creator string, id uint64) *MsgDeleteSentRandomval {
	return &MsgDeleteSentRandomval{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSentRandomval) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSentRandomval) Type() string {
	return "DeleteSentRandomval"
}

func (msg *MsgDeleteSentRandomval) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSentRandomval) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSentRandomval) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
