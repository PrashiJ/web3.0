require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9geJsx1E1_z8l9l8Hs-_FNH0N1Ox9mID',
      accounts: ['782f8f57b0d31c686c987acc34701a04a9e411af87afcdf7500ed23da32b2a8a'],
    },
  },
};
