# circom factor

- prove that you find the factor of a number without revealing the factor
- i.e. the question is 33, proof that you know the factors 3 and 11 and don't let other know

## circom

- There are 3 inputs, a, b and c. The only constraint is `c === a * b`. c should be the question, so make it a public signal.
- Setting up `input.json` and compile with `hardhat-circom`.

## guess

- put you guess in `guess/guess.json`
- use `Makefile` to generate the proof
- place your proof in `tests/Guess.ts`
- run test
