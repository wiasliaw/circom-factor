CIRCUITS=circuits
GUESS=guess

witness:; snarkjs wc $(CIRCUITS)/factor.wasm $(GUESS)/guess.json $(GUESS)/guess.wtns

plonkprove:; snarkjs plonk prove \
	$(CIRCUITS)/factor.zkey \
	$(GUESS)/guess.wtns \
	$(GUESS)/proof.json \
	$(GUESS)/public.json

calldata:; snarkjs generatecall $(GUESS)/public.json $(GUESS)/proof.json

.PHONY: circuits guess
