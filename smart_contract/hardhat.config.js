// https://eth-goerli.g.alchemy.com/v2/G5XxDB9gs-zatAANiXoJBgFTvllP_dGW

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/G5XxDB9gs-zatAANiXoJBgFTvllP_dGW",
      accounts: [
        "e8e59dd2d0e20e803ee6ab03ae09130d2ae4087e038a5b9a0b3861e4c7051a68",
      ],
    },
  },
};
