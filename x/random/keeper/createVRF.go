package keeper

import (
	"encoding/hex"
	"strconv"
	"github.com/coniks-sys/coniks-go/crypto/vrf"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/genievot/random/x/random/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k Keeper) CreateRandomNumber(ctx sdk.Context, msg *types.MsgCreateRandom) error {

	userval, isFound := k.GetUserval(ctx, msg.Creator)
	
	var user_key_count int64 = 1
	if isFound {
		user_key_count = userval.Count+1
	}

	sk, err := vrf.GenerateKey(nil)
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Secret Key is not generated")
	}
	
	random_val_key := msg.Creator + "," + strconv.FormatInt(user_key_count, 10)
	a_message := []byte(random_val_key)

	vrv, proof := sk.Prove(a_message) // Generate vrv (verifiable random value) and proof
	pub_key, ok_bool := sk.Public() // public key creation

	if ok_bool == false {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Public Key is not generated")
	}

	newRandomVal := types.Randomval {
		Index: random_val_key,
		Creator: msg.Creator,
		Vrv: hex.EncodeToString(vrv),
		Outcap: msg.OutputCap,
		Proof: hex.EncodeToString(proof),
		Pubk: hex.EncodeToString(pub_key),
		Message: random_val_key,
		Parsedvrv: 55,
		Finalvrv: 56,
	}

	newUserVal := types.Userval {
			Index: msg.Creator,
			Useraddr: msg.Creator,
			Count: user_key_count,
	}

	k.SetRandomval(ctx, newRandomVal)
	k.SetUserval(ctx, newUserVal)
	return nil
}
