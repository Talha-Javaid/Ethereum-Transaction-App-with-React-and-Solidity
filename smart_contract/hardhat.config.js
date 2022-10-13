require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/C22USmgYNtMTQ_hF50-hI5wi-m1j42pF",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

// 0x037E77c31F0f5F2191CA6D5B57Ea02DCCF0Aac9e
