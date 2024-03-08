class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...args){


    let arr = [];

    for (let i = 0 ; i < args.length ; i++) {

        if (args[i] instanceof Dragon) {
            // console.log(args[i])
            arr.push(args[i].name)
        }
    }

    console.log(arr)
    return arr;

  }
}

const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
