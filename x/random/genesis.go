package random

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/genievot/random/x/random/keeper"
	"github.com/genievot/random/x/random/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}

	// Set all the randomval
	for _, elem := range genState.RandomvalList {
		k.SetRandomval(ctx, elem)
	}
	// Set all the userval
	for _, elem := range genState.UservalList {
		k.SetUserval(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.PortId = k.GetPort(ctx)
	genesis.RandomvalList = k.GetAllRandomval(ctx)
	genesis.UservalList = k.GetAllUserval(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
