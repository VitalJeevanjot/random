package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/genievot/random/x/random/types"
)

func (k msgServer) CreateSentRandomval(goCtx context.Context, msg *types.MsgCreateSentRandomval) (*types.MsgCreateSentRandomvalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sentRandomval = types.SentRandomval{
		Creator: msg.Creator,
		Userid:  msg.Userid,
		Vrv:     msg.Vrv,
	}

	id := k.AppendSentRandomval(
		ctx,
		sentRandomval,
	)

	return &types.MsgCreateSentRandomvalResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSentRandomval(goCtx context.Context, msg *types.MsgUpdateSentRandomval) (*types.MsgUpdateSentRandomvalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sentRandomval = types.SentRandomval{
		Creator: msg.Creator,
		Id:      msg.Id,
		Userid:  msg.Userid,
		Vrv:     msg.Vrv,
	}

	// Checks that the element exists
	val, found := k.GetSentRandomval(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSentRandomval(ctx, sentRandomval)

	return &types.MsgUpdateSentRandomvalResponse{}, nil
}

func (k msgServer) DeleteSentRandomval(goCtx context.Context, msg *types.MsgDeleteSentRandomval) (*types.MsgDeleteSentRandomvalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetSentRandomval(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSentRandomval(ctx, msg.Id)

	return &types.MsgDeleteSentRandomvalResponse{}, nil
}
