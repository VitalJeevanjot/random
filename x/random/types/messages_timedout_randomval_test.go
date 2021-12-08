package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/genievot/random/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateTimedoutRandomval_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateTimedoutRandomval
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateTimedoutRandomval{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateTimedoutRandomval{
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

func TestMsgUpdateTimedoutRandomval_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateTimedoutRandomval
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateTimedoutRandomval{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateTimedoutRandomval{
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

func TestMsgDeleteTimedoutRandomval_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteTimedoutRandomval
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteTimedoutRandomval{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteTimedoutRandomval{
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
