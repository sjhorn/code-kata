class TwosComplement {
    complement(num) {
        return ~num;
    }
}
let bin = (num) => (num >>> 0 & 0b11111111).toString(2).padStart(8, "0");
let twosc = new TwosComplement();
let test = 0b00000000;
console.log(bin(test));
console.log(bin(twosc.complement(test)));
