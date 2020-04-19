
import BigOIntro from './BigOIntro'

class App {

    public static start() {
        let bigOIntro = new BigOIntro()
        console.log("Normal Case")
        bigOIntro.bruteForce()
        // console.log("Best Case")
        // bigOIntro.bestCase()
        // console.log("Worst Case");
        // bigOIntro.worstCase()
    }
}

App.start();

