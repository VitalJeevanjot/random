package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/genievot/random/testutil/keeper"
	"github.com/genievot/random/x/random/keeper"
	"github.com/genievot/random/x/random/types"
	"github.com/stretchr/testify/require"
)

func createNSentRandomval(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SentRandomval {
	items := make([]types.SentRandomval, n)
	for i := range items {
		items[i].Id = keeper.AppendSentRandomval(ctx, items[i])
	}
	return items
}

func TestSentRandomvalGet(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNSentRandomval(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetSentRandomval(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestSentRandomvalRemove(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNSentRandomval(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSentRandomval(ctx, item.Id)
		_, found := keeper.GetSentRandomval(ctx, item.Id)
		require.False(t, found)
	}
}

func TestSentRandomvalGetAll(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNSentRandomval(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllSentRandomval(ctx))
}

func TestSentRandomvalCount(t *testing.T) {
	keeper, ctx := keepertest.RandomKeeper(t)
	items := createNSentRandomval(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetSentRandomvalCount(ctx))
}
