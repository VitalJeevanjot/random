package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/genievot/random/x/random/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreateRandom())
	cmd.AddCommand(CmdSendReqRandomval())
	cmd.AddCommand(CmdCreateSentRandomval())
	cmd.AddCommand(CmdUpdateSentRandomval())
	cmd.AddCommand(CmdDeleteSentRandomval())
	cmd.AddCommand(CmdCreateTimedoutRandomval())
	cmd.AddCommand(CmdUpdateTimedoutRandomval())
	cmd.AddCommand(CmdDeleteTimedoutRandomval())
	// this line is used by starport scaffolding # 1

	return cmd
}
