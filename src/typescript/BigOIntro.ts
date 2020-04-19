export default class BigOIntro {
    //numbers : number[] = [1,2,3,4,5] //[ 9, 3, 34, 67, 4, 23, 55, 78, 39, 12 ]
    cycles : number = 0
    constructor(public numbers : number[] = [1,2,3,4,5]) {

    }
    

    // bestCase() {
    //     let numbersCopy = [...this.numbers].sort( (a,b) => a - b )
    //     this.bruteForce(numbersCopy)
    // }
    // worstCase() {
    //     let numbersCopy = [...this.numbers].sort( (a,b) => b - a )
    //     this.bruteForce(numbersCopy)
    // }

    bruteForce() {
        console.log("---")
        console.log(`Looking at list ${this.numbers}`)
        for (let item of this.numbers) {
            this.cycles ++
            console.log(this.compareToAllMin(item, this.numbers))
        }
        console.log(`Cycles: ${this.cycles}`)
    }

    compareToAllMin(item : number, list : number[]) : number {
        let result : number = item
        for (let i = 0; i < list.length; i++) {
            this.cycles++
            console.log(`Comparing ${item} to ${list[i]} ${list[i] > item }`);
            if( list[i] < result ) {
                result = list[i]
            }
        } 
        return result
    }

    
}