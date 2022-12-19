import { expect } from 'chai';
import { ethers } from 'hardhat';

// import artifacts type
import type { Simple } from '../dist/typechain/Simple';

describe('Simple', () => {
  let simple: Simple;

  beforeEach(async () => {
    simple = await (await ethers.getContractFactory('Simple')).deploy() as Simple;
    await simple.deployed();
  });

  it('set', async () => {
    expect(await simple.get()).to.eq(0);
    await simple.set(333);
    expect(await simple.get()).to.eq(333);
  });
});
