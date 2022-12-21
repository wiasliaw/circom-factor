import { assert } from 'chai';
import hre from 'hardhat';

import type { CircuitTestUtils } from 'hardhat-circom';

describe('Factor Circom', () => {
  let circuit: CircuitTestUtils;

  const sampleInput = {
    'a': '3',
    'b': '11',
    'c': '33'
  };

  before(async () => {
    circuit = await hre.circuitTest.setup('factor');
  });

  it('produces a witness with valid constraints', async () => {
    const witness = await circuit.calculateWitness(sampleInput, true);
    await circuit.checkConstraints(witness);
  });

  it('has expected witness values', async () => {
    const witness = await circuit.calculateLabeledWitness(sampleInput, true);
    assert.propertyVal(witness, 'main.a', sampleInput.a);
    assert.propertyVal(witness, 'main.b', sampleInput.b);
    assert.propertyVal(witness, 'main.c', sampleInput.c);
  });
});
