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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RandomKeeper(t)
	random.InitGenesis(ctx, *k, genesisState)
	got := random.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.RandomvalList, len(genesisState.RandomvalList))
	require.Subset(t, genesisState.RandomvalList, got.RandomvalList)
	// this line is used by starport scaffolding # genesis/test/assert
}
