package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/genievot/random/x/random/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TimedoutRandomvalAll(c context.Context, req *types.QueryAllTimedoutRandomvalRequest) (*types.QueryAllTimedoutRandomvalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var timedoutRandomvals []types.TimedoutRandomval
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	timedoutRandomvalStore := prefix.NewStore(store, types.KeyPrefix(types.TimedoutRandomvalKey))

	pageRes, err := query.Paginate(timedoutRandomvalStore, req.Pagination, func(key []byte, value []byte) error {
		var timedoutRandomval types.TimedoutRandomval
		if err := k.cdc.Unmarshal(value, &timedoutRandomval); err != nil {
			return err
		}

		timedoutRandomvals = append(timedoutRandomvals, timedoutRandomval)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimedoutRandomvalResponse{TimedoutRandomval: timedoutRandomvals, Pagination: pageRes}, nil
}

func (k Keeper) TimedoutRandomval(c context.Context, req *types.QueryGetTimedoutRandomvalRequest) (*types.QueryGetTimedoutRandomvalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	timedoutRandomval, found := k.GetTimedoutRandomval(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTimedoutRandomvalResponse{TimedoutRandomval: timedoutRandomval}, nil
}
