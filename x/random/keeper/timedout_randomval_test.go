package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/genievot/random/testutil/keeper"
	"github.com/genievot/random/x/random/keeper"
	"github.com/genievot/random/x/random/types"
	"github.com/stretchr/testify/require"
)

func createNTimedoutRandomval(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.TimedoutRandomval {
	items := make([]types.TimedoutRandomval, n)
	for i := range items {
		items[i].Id = keeper.AppendTimedoutRandomval(ctx, items[i])
	}
	return items
}

func TestTimedoutRandomvalGet(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNTimedoutRandomval(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTimedoutRandomval(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestTimedoutRandomvalRemove(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNTimedoutRandomval(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTimedoutRandomval(ctx, item.Id)
		_, found := keeper.GetTimedoutRandomval(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTimedoutRandomvalGetAll(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNTimedoutRandomval(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllTimedoutRandomval(ctx))
}

func TestTimedoutRandomvalCount(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNTimedoutRandomval(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTimedoutRandomvalCount(ctx))
}
