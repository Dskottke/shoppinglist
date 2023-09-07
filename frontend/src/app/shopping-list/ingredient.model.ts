export class Ingredient {
    constructor(public id: string, public name: string, public amount: number, public succeed: boolean, public type: "g" | "L" | "Stk" | "ml" | "mg") {

    }

}
