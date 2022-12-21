// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./FactorVerifier.sol";

contract ProveFactor {
    PlonkVerifier public verifier;
    uint256 public question;

    event Solved();
    event Failed();

    constructor(address verifier_, uint256 question_) {
        verifier = PlonkVerifier(verifier_);
        question = question_;
    }

    function prove(bytes calldata proof) external {
        uint256[] memory signals = new uint256[](1);
        signals[0] = question;

        if (verifier.verifyProof(proof, signals)) {
            emit Solved();
        } else {
            emit Failed();
        }
    }
}
