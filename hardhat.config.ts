import path from 'path';
import dotenv from 'dotenv';

import type { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import '@nomicfoundation/hardhat-chai-matchers';
import '@typechain/hardhat';
import 'hardhat-tracer';
import 'hardhat-circom';

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
        version: '0.8.16',
        settings: {
          optimizer: { enabled: true, runs: 100_0000 },
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

  // circom
  circom: {
    inputBasePath: './circuits',
    ptau: 'https://hermezptau.blob.core.windows.net/ptau/powersOfTau28_hez_final_15.ptau',
    circuits: [
      {
        name: 'factor',
        protocol: 'plonk'
      },
    ],
  }
};

export default config;
