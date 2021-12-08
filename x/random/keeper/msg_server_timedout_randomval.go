package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/genievot/random/x/random/types"
)

func (k msgServer) CreateTimedoutRandomval(goCtx context.Context, msg *types.MsgCreateTimedoutRandomval) (*types.MsgCreateTimedoutRandomvalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timedoutRandomval = types.TimedoutRandomval{
		Creator: msg.Creator,
	}

	id := k.AppendTimedoutRandomval(
		ctx,
		timedoutRandomval,
	)

	return &types.MsgCreateTimedoutRandomvalResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTimedoutRandomval(goCtx context.Context, msg *types.MsgUpdateTimedoutRandomval) (*types.MsgUpdateTimedoutRandomvalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var timedoutRandomval = types.TimedoutRandomval{
		Creator: msg.Creator,
		Id:      msg.Id,
	}

	// Checks that the element exists
	val, found := k.GetTimedoutRandomval(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTimedoutRandomval(ctx, timedoutRandomval)

	return &types.MsgUpdateTimedoutRandomvalResponse{}, nil
}

func (k msgServer) DeleteTimedoutRandomval(goCtx context.Context, msg *types.MsgDeleteTimedoutRandomval) (*types.MsgDeleteTimedoutRandomvalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetTimedoutRandomval(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTimedoutRandomval(ctx, msg.Id)

	return &types.MsgDeleteTimedoutRandomvalResponse{}, nil
}
