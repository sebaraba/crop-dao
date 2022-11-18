require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    buildbear: {
      url: 'https://backend.buildbear.io/node/peaceful-lamarr-21588e',
      acconts: [process.env.privateKey]
    }
  }
};
