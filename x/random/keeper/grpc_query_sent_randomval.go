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

func (k Keeper) SentRandomvalAll(c context.Context, req *types.QueryAllSentRandomvalRequest) (*types.QueryAllSentRandomvalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sentRandomvals []types.SentRandomval
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sentRandomvalStore := prefix.NewStore(store, types.KeyPrefix(types.SentRandomvalKey))

	pageRes, err := query.Paginate(sentRandomvalStore, req.Pagination, func(key []byte, value []byte) error {
		var sentRandomval types.SentRandomval
		if err := k.cdc.Unmarshal(value, &sentRandomval); err != nil {
			return err
		}

		sentRandomvals = append(sentRandomvals, sentRandomval)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSentRandomvalResponse{SentRandomval: sentRandomvals, Pagination: pageRes}, nil
}

func (k Keeper) SentRandomval(c context.Context, req *types.QueryGetSentRandomvalRequest) (*types.QueryGetSentRandomvalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	sentRandomval, found := k.GetSentRandomval(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetSentRandomvalResponse{SentRandomval: sentRandomval}, nil
}
