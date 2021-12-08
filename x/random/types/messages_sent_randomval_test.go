package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/genievot/random/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateSentRandomval_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateSentRandomval
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateSentRandomval{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateSentRandomval{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateSentRandomval_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateSentRandomval
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateSentRandomval{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateSentRandomval{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteSentRandomval_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteSentRandomval
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteSentRandomval{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteSentRandomval{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
