 class TwosComplement {
    complement(num: number) : number {
        return ~num
    }

    print( num : number) {
        let out = ""
        for (let i in 1..10) {

        }
    }
}

let range = *[Symbol.iterator](from: number, to: number) => {
    for (let i = from; i < to; i++ ) {

    }
}

let bin = (num: number) => ( num >>> 0 & 0b11111111 ).toString(2).padStart(8, "0")

let twosc = new TwosComplement()

let test : number = 0b00000000

console.log(bin(test))
console.log( bin(twosc.complement(test)) )

