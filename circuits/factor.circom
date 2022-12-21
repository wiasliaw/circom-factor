pragma circom 2.0.3;

template Factor() {
    // c = a * b
    signal input a;
    signal input b;
    signal input c;

    c === a * b;
}

component main { public [ c ] } = Factor();
