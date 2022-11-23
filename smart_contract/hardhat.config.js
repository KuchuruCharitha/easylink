require('@nomiclabs/hardhat-waffle');
//deployed to : 0xe07F031882A045437dd5fd1D9581b0F741062e56
const API_URL="https://eth-goerli.g.alchemy.com/v2/2fTkP_zCgK7V6fozIAr2DebKEOMqhXVM"
const PRIVATE_KEY="0fc632ac71b80d420da0206aa7422c3035ee0fddbcaa6eec4672c7ac33619245"

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
    },
      
  },
};

/**
 for local host 
require('@nomiclabs/hardhat-waffle');
//0x5FbDB2315678afecb367f032d93F642f64180aa3
module.exports = {
  solidity: '0.8.0',
  networks: {
    hardhat: {
      chainId:1337,
    },
  },
};




npm run dev

npx hardhat node

npx hardhat run --network localhost scripts/deploy.js

npx hardhat run --network goerli scripts/deploy.js

goerli


 */