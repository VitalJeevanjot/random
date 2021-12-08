package types

// ValidateBasic is used for validating the packet
func (p ReqRandomvalPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p ReqRandomvalPacketData) GetBytes() ([]byte, error) {
	var modulePacket RandomPacketData

	modulePacket.Packet = &RandomPacketData_ReqRandomvalPacket{&p}

	return modulePacket.Marshal()
}
