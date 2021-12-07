package keeper

import (
	"encoding/hex"
	"fmt"
	"github.com/coniks-sys/coniks-go/crypto/vrf"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/genievot/random/x/random/types"
)

func (k Keeper) CreateRandomNumber(ctx sdk.Context, msg *types.MsgCreateRandom) uint64 {
	fmt.Println(msg.Creator)
	fmt.Println(msg.OutputCap)

	sk, err := vrf.GenerateKey(nil)
	if err != nil {
		fmt.Println(err)
		return 11
	}
	fmt.Println("GeneratedKey:", hex.EncodeToString(sk))
	a_message := []byte("Here is a string....")

	comp := sk.Compute(a_message)
	fmt.Println("Computed:", hex.EncodeToString(comp))
	return 54
}
