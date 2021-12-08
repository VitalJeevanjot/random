package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		RandomvalList:         []Randomval{},
		UservalList:           []Userval{},
		PortId:                PortID,
		SentRandomvalList:     []SentRandomval{},
		TimedoutRandomvalList: []TimedoutRandomval{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {

	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}

	// Check for duplicated index in randomval
	randomvalIndexMap := make(map[string]struct{})

	for _, elem := range gs.RandomvalList {
		index := string(RandomvalKey(elem.Index))
		if _, ok := randomvalIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for randomval")
		}
		randomvalIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in userval
	uservalIndexMap := make(map[string]struct{})

	for _, elem := range gs.UservalList {
		index := string(UservalKey(elem.Index))
		if _, ok := uservalIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for userval")
		}
		uservalIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in sentRandomval
	sentRandomvalIdMap := make(map[uint64]bool)
	sentRandomvalCount := gs.GetSentRandomvalCount()
	for _, elem := range gs.SentRandomvalList {
		if _, ok := sentRandomvalIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for sentRandomval")
		}
		if elem.Id >= sentRandomvalCount {
			return fmt.Errorf("sentRandomval id should be lower or equal than the last id")
		}
		sentRandomvalIdMap[elem.Id] = true
	}
	// Check for duplicated ID in timedoutRandomval
	timedoutRandomvalIdMap := make(map[uint64]bool)
	timedoutRandomvalCount := gs.GetTimedoutRandomvalCount()
	for _, elem := range gs.TimedoutRandomvalList {
		if _, ok := timedoutRandomvalIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for timedoutRandomval")
		}
		if elem.Id >= timedoutRandomvalCount {
			return fmt.Errorf("timedoutRandomval id should be lower or equal than the last id")
		}
		timedoutRandomvalIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
