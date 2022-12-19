import path from 'path';
import dotenv from 'dotenv';

import type { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import '@nomicfoundation/hardhat-chai-matchers';
import '@typechain/hardhat';
import 'hardhat-tracer';

dotenv.config();

const config: HardhatUserConfig = {
  // default network
  defaultNetwork: 'hardhat',

  // network config
  networks: {},

  // solidity config
  solidity: {
    compilers: [
      {
        version: '0.8.2',
        settings: {
          optimizer: { enabled: true, runs: 200 },
          evmVersion: 'berlin',
        },
      },
    ],
  },

  // repository config
  paths: {
    sources: path.resolve(__dirname, 'contracts'),
    tests: path.resolve(__dirname, 'tests'),
    cache: path.resolve(__dirname, 'dist/.cache'),
    artifacts: path.resolve(__dirname, 'dist/artifacts'),
  },

  // typechain
  typechain: {
    outDir: 'dist/typechain',
    target: 'ethers-v5',
  },
};

export default config;
