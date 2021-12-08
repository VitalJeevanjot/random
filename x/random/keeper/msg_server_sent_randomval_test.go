package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/genievot/random/x/random/types"
)

func TestSentRandomvalMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateSentRandomval(ctx, &types.MsgCreateSentRandomval{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestSentRandomvalMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateSentRandomval
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSentRandomval{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSentRandomval{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSentRandomval{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateSentRandomval(ctx, &types.MsgCreateSentRandomval{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateSentRandomval(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestSentRandomvalMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteSentRandomval
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteSentRandomval{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteSentRandomval{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteSentRandomval{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateSentRandomval(ctx, &types.MsgCreateSentRandomval{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteSentRandomval(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
