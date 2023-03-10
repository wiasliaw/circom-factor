import { expect } from 'chai';
import { ethers } from 'hardhat';

import { ProveFactor, PlonkVerifier } from '../dist/typechain';

describe('Guess', () => {
  let verifier: PlonkVerifier;
  let prove: ProveFactor;

  // prove you know the factor of 8252987 without revealing the factor
  const question = 8252987;

  beforeEach(async () => {
    verifier = await (await ethers.getContractFactory('PlonkVerifier')).deploy() as PlonkVerifier;
    await verifier.deployed();

    prove = await (await ethers.getContractFactory('ProveFactor')).deploy(verifier.address, question) as ProveFactor;
    await prove.deployed();
  });

  it('submit calldata(generated by makefile) to prove you solve it', async () => {
    await expect(prove.prove('<put yout proof>')).to.emit(prove, 'Solved');
  });
});
