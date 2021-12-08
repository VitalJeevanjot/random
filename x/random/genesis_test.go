package random_test

import (
	"testing"

	keepertest "github.com/genievot/random/testutil/keeper"
	"github.com/genievot/random/x/random"
	"github.com/genievot/random/x/random/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		RandomvalList: []types.Randomval{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		UservalList: []types.Userval{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		SentRandomvalList: []types.SentRandomval{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		SentRandomvalCount: 2,
		TimedoutRandomvalList: []types.TimedoutRandomval{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TimedoutRandomvalCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RandomKeeper(t)
	random.InitGenesis(ctx, *k, genesisState)
	got := random.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.RandomvalList, len(genesisState.RandomvalList))
	require.Subset(t, genesisState.RandomvalList, got.RandomvalList)
	require.Len(t, got.UservalList, len(genesisState.UservalList))
	require.Subset(t, genesisState.UservalList, got.UservalList)
	require.Len(t, got.SentRandomvalList, len(genesisState.SentRandomvalList))
	require.Subset(t, genesisState.SentRandomvalList, got.SentRandomvalList)
	require.Equal(t, genesisState.SentRandomvalCount, got.SentRandomvalCount)
	require.Len(t, got.TimedoutRandomvalList, len(genesisState.TimedoutRandomvalList))
	require.Subset(t, genesisState.TimedoutRandomvalList, got.TimedoutRandomvalList)
	require.Equal(t, genesisState.TimedoutRandomvalCount, got.TimedoutRandomvalCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
