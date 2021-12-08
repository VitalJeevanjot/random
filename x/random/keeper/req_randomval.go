package keeper

import (
	"errors"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/modules/core/24-host"
	"github.com/genievot/random/x/random/types"
)

// TransmitReqRandomvalPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitReqRandomvalPacket(
	ctx sdk.Context,
	packetData types.ReqRandomvalPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.channelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.channelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvReqRandomvalPacket processes packet reception
func (k Keeper) OnRecvReqRandomvalPacket(ctx sdk.Context, packet channeltypes.Packet, data types.ReqRandomvalPacketData) (packetAck types.ReqRandomvalPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic

	randomvalAck, _, err := k.CreateRandomNumber(ctx, "IBC-"+packet.SourcePort+"-"+packet.SourceChannel+"-"+data.Creator, data.Multiplier)

	packetAck.UniqIndex = randomvalAck.Index
	// packetAck.Creator = randomvalAck.Creator
	// packetAck.PublicKey = randomvalAck.Pubk
	// packetAck.Message = randomvalAck.Message
	// packetAck.Vrv = randomvalAck.Vrv
	// packetAck.Proof = randomvalAck.Proof
	packetAck.Finalvrvfl = strconv.FormatFloat(randomvalAck.Finalvrvfl, 'f', -1, 64)
	// packetAck.Multiplier = strconv.FormatUint(randomvalAck.Multiplier, 10)
	// packetAck.Parsedvrv = strconv.FormatUint(randomvalAck.Parsedvrv, 10)
	// packetAck.Finalvrv = strconv.FormatUint(randomvalAck.Finalvrv, 10)
	// packetAck.Floatvrv = strconv.FormatFloat(randomvalAck.Floatvrv, 'f', -1, 64)

	// k.SetRandomval(ctx, randomvalAck)
	// k.SetUserval(ctx, newUserVal)
	return packetAck, err
}

// OnAcknowledgementReqRandomvalPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementReqRandomvalPacket(ctx sdk.Context, packet channeltypes.Packet, data types.ReqRandomvalPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.ReqRandomvalPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		k.AppendSentRandomval(
			ctx,
			types.SentRandomval {
				Creator: data.Creator,
				Userid: packetAck.UniqIndex,
				Vrv: packetAck.Finalvrvfl,
			},
		)

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutReqRandomvalPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutReqRandomvalPacket(ctx sdk.Context, packet channeltypes.Packet, data types.ReqRandomvalPacketData) error {

	// TODO: packet timeout logic

	k.AppendTimedoutRandomval(
		ctx,
		types.TimedoutRandomval {
				Creator: data.Creator,
		},
	)

	return nil
}
