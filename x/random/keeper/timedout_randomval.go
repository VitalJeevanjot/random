package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/genievot/random/x/random/types"
)

// GetTimedoutRandomvalCount get the total number of timedoutRandomval
func (k Keeper) GetTimedoutRandomvalCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TimedoutRandomvalCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTimedoutRandomvalCount set the total number of timedoutRandomval
func (k Keeper) SetTimedoutRandomvalCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TimedoutRandomvalCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTimedoutRandomval appends a timedoutRandomval in the store with a new id and update the count
func (k Keeper) AppendTimedoutRandomval(
	ctx sdk.Context,
	timedoutRandomval types.TimedoutRandomval,
) uint64 {
	// Create the timedoutRandomval
	count := k.GetTimedoutRandomvalCount(ctx)

	// Set the ID of the appended value
	timedoutRandomval.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutRandomvalKey))
	appendedValue := k.cdc.MustMarshal(&timedoutRandomval)
	store.Set(GetTimedoutRandomvalIDBytes(timedoutRandomval.Id), appendedValue)

	// Update timedoutRandomval count
	k.SetTimedoutRandomvalCount(ctx, count+1)

	return count
}

// SetTimedoutRandomval set a specific timedoutRandomval in the store
func (k Keeper) SetTimedoutRandomval(ctx sdk.Context, timedoutRandomval types.TimedoutRandomval) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutRandomvalKey))
	b := k.cdc.MustMarshal(&timedoutRandomval)
	store.Set(GetTimedoutRandomvalIDBytes(timedoutRandomval.Id), b)
}

// GetTimedoutRandomval returns a timedoutRandomval from its id
func (k Keeper) GetTimedoutRandomval(ctx sdk.Context, id uint64) (val types.TimedoutRandomval, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutRandomvalKey))
	b := store.Get(GetTimedoutRandomvalIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTimedoutRandomval removes a timedoutRandomval from the store
func (k Keeper) RemoveTimedoutRandomval(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutRandomvalKey))
	store.Delete(GetTimedoutRandomvalIDBytes(id))
}

// GetAllTimedoutRandomval returns all timedoutRandomval
func (k Keeper) GetAllTimedoutRandomval(ctx sdk.Context) (list []types.TimedoutRandomval) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedoutRandomvalKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TimedoutRandomval
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTimedoutRandomvalIDBytes returns the byte representation of the ID
func GetTimedoutRandomvalIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTimedoutRandomvalIDFromBytes returns ID in uint64 format from a byte array
func GetTimedoutRandomvalIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
