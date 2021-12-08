package keeper

import (
	"encoding/binary"
	"encoding/hex"
	"github.com/coniks-sys/coniks-go/crypto/vrf"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/genievot/random/x/random/types"
	"strconv"
)

func (k Keeper) CreateRandomNumber(ctx sdk.Context, msgCreator string, msg_multiplier string) (types.Randomval, types.Userval, error) {

	userval, isFound := k.GetUserval(ctx, msgCreator)

	var user_key_count int64 = 1
	if isFound {
		user_key_count = userval.Count + 1
	}

	err_newRandomVal := types.Randomval{
		Index:      "nil",
		Creator:    msgCreator,
		Vrv:        "nil",
		Multiplier: 0,
		Proof:      "nil",
		Pubk:       "nil",
		Message:    "nil",
		Parsedvrv:  0,
		Floatvrv:   0.0,
		Finalvrv:   0,
		Finalvrvfl: 0.0,
	}
	err_newUserVal := types.Userval{
		Index:    "nil",
		Useraddr: msgCreator,
		Count:    0,
	}
	sk, err := vrf.GenerateKey(nil)
	if err != nil {
		return err_newRandomVal, err_newUserVal, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Secret Key is not generated")
	}

	msgMultiplier, err := strconv.ParseUint(msg_multiplier, 10, 64)
	if err != nil {
		return err_newRandomVal, err_newUserVal, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Secret Key is not generated")
	}

	random_val_key := msgCreator + "," + strconv.FormatInt(user_key_count, 10)
	a_message := []byte(random_val_key)

	vrv, proof := sk.Prove(a_message) // Generate vrv (verifiable random value) and proof
	pub_key, ok_bool := sk.Public()   // public key creation

	if ok_bool == false {
		return err_newRandomVal, err_newUserVal, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Public Key is not generated")
	}

	var max_val_uint64 uint64 = 18446744073709551615
	parse_vrv_to_uint64 := binary.BigEndian.Uint64(vrv)
	var float_vrv float64 = float64(parse_vrv_to_uint64) / float64(max_val_uint64)
	final_vrv := float_vrv * float64(msgMultiplier)
	final_vrv_float := float_vrv * float64(msgMultiplier)

	newRandomVal := types.Randomval{
		Index:      random_val_key,
		Creator:    msgCreator,
		Vrv:        hex.EncodeToString(vrv),
		Multiplier: msgMultiplier,
		Proof:      hex.EncodeToString(proof),
		Pubk:       hex.EncodeToString(pub_key),
		Message:    random_val_key,
		Parsedvrv:  binary.BigEndian.Uint64(vrv),
		Floatvrv:   float_vrv,
		Finalvrv:   uint64(final_vrv),
		Finalvrvfl: final_vrv_float,
	}

	newUserVal := types.Userval{
		Index:    msgCreator,
		Useraddr: msgCreator,
		Count:    user_key_count,
	}

	k.SetRandomval(ctx, newRandomVal)
	k.SetUserval(ctx, newUserVal)
	return newRandomVal, newUserVal, nil
}

func (k Keeper) VerifyRandomNumber(ctx sdk.Context, req *types.QueryVerifyValuesRequest) (string, error) {

	var public_key vrf.PublicKey
	public_key, err := hex.DecodeString(req.Pubkey)
	if err != nil {
		return "false", sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Public Key cannot be decoded")
	}
	message_value := []byte(req.Message)
	vrv_value, err := hex.DecodeString(req.Vrv)
	if err != nil {
		return "false", sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "VRV Value cannot be decoded")
	}

	proof_value, err := hex.DecodeString(req.Proof)
	if err != nil {
		return "false", sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Proof value cannot be decoded")
	}

	is_verified := public_key.Verify(message_value, vrv_value, proof_value)

	return strconv.FormatBool(is_verified), err

}
