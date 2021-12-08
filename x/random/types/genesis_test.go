package types_test

import (
	"testing"

	"github.com/genievot/random/x/random/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated randomval",
			genState: &types.GenesisState{
				RandomvalList: []types.Randomval{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated userval",
			genState: &types.GenesisState{
				UservalList: []types.Userval{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated sentRandomval",
			genState: &types.GenesisState{
				SentRandomvalList: []types.SentRandomval{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid sentRandomval count",
			genState: &types.GenesisState{
				SentRandomvalList: []types.SentRandomval{
					{
						Id: 1,
					},
				},
				SentRandomvalCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated timedoutRandomval",
			genState: &types.GenesisState{
				TimedoutRandomvalList: []types.TimedoutRandomval{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid timedoutRandomval count",
			genState: &types.GenesisState{
				TimedoutRandomvalList: []types.TimedoutRandomval{
					{
						Id: 1,
					},
				},
				TimedoutRandomvalCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
