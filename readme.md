# random
**random** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

Clone the repository and run:

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Commands

### Chain Commands
- `randomd tx random create-random <multiplier> --from alice`
This _transaction_ command will use `multiplier` as the **max** number from **0** to create a random value then sign and broadcast it on the network.

- `randomd q random list-randomval`
This _query_ command will list all the map index with values created through `create-random` command (Lists all the random values + required data).

- `randomd q random show-randomval <index/key>`
This _query_ command will show random value on the specific index/key which currently is created using `message creator address,user request counter`

- `randomd q random list-userval`
This _query_ command will list all the users and the count that show how many times they sent the `create-random` command which ran the vr (verifiable random) functions and broadcasts on the network. (lists all the message creators + the count that shows how many times they performed this)

- `randomd q random show-userval <user_address>
This _query_ will show the times user performed (create message) `creat-random` (The time user created random value on this chain)

- `randomd q random verify-values [pubkey] [message] [vrv] [proof]`
This _query_ command will verify the values created using `create-random` command.
> For example here: 
> `randomd q random verify-values c00b85aaff213896e1bce84bad8200e1ea5d90f7d341ca2774e95a9837651
c9f cosmos1064p2u6xaw4d5exwpesf2jv3vd7cr7m7lgxzc8,3 71e759d11bc846f01c54fa1ecf1f4dc2f3c11f4fd899d0cd2d965dc5a3eea835 9206 
c9f cosmos1064p2u6xaw4d5exwpesf2jv3vd7cr7m7lgxzc8,3 71e759d11bc846f01c54fa1ecf1f4dc2f3c11f4fd899d0cd2d965dc5a3eea835 9206 
d61cae688f7cfcc23964b8391392bed94778df2f3bf493022d3e244331019b1f4fef646148c1819c4f38e9dbc51fb07aa8060200e9a13b2dab7df1174 
e09d7946722a4dbc85d5b19c02cb63883c12a496e9d1c3dd815b964bc8c175a271b`

### IBC Commands (Chain Commands+)

Configure the relayer when running for 2 local chains `earth` and `mars` (if you are following the tutorial from video [linked below])

```
starport relayer configure -a \
--source-rpc "http://0.0.0.0:26657" \
--source-faucet "http://0.0.0.0:4500" \
--source-port "random" \
--source-version "random-1" \
--source-gasprice "0.0000025stake" \
--source-prefix "cosmos" \
--source-gaslimit 300000 \
--target-rpc "http://0.0.0.0:26659" \
--target-faucet "http://0.0.0.0:4501" \
--target-port "random" \
--target-version "random-1" \
--target-gasprice "0.0000025stake" \
--target-prefix "cosmos" \
--target-gaslimit 300000
```
then
`starport relayer connect`

- `randomd tx random send-req-randomval random channel-0 5000 --from alice --chain-id earth --home ~/.earth`

This _transaction_ command will prepare and send packet with mulitplier field from (if you are using default settings and following video) chain Earth to chain Mars

- `randomd q random list-sent-randomval`

This _query_ command will list all the values received by chain Earth (the chain that you sent packet with in this case).

- `randomd q random list-timedout-randomval`

This _query_ command will list all the timedout packet information.


**To learn more about how to use or check randomval type's properties please check the video**
To see the working of theis repo, please check this [video](https://www.youtube.com/watch?v=gz1xD8-dqe0)

Also the presentation Introduction [here](https://docs.google.com/presentation/d/1mPnI8HJl6iECeXLXSF2vJuNSzN0aVEYVGmIkAqU3Udc/edit?usp=sharing)


### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/genievot/random@latest! | sudo bash
```
`genievot/random` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).


## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/cosmosnetwork)
