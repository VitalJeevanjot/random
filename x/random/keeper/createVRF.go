package keeper

import (
	"encoding/hex"
	"github.com/coniks-sys/coniks-go/crypto/vrf"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/genievot/random/x/random/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) CreateRandomNumber(ctx sdk.Context, msg *types.MsgCreateRandom) uint64 {

	userval, isFound := k.GetUserval(ctx, msg.Creator)

	if isFound {
		count_now := userval.Count + 1
	} else {
		count_now := 0
	}

	sk, err := vrf.GenerateKey(nil)
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Secret Key is not generated")
	}

	random_vals_key := msg.Creator + "," + count_now
	a_message := []byte(random_vals_key)

	

	newUserVal := types.Userval {
			Index: msg.Creator,
			Useraddr: msg.Creator,
			Count: count_now
	}


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
