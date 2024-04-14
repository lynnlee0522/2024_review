// interface ISwim {
//     swimming: () => void
// }

// interface IFly {
//     flying: () => void
// }

// class Animal implements ISwim, IFly {
//     swimming() {
//         console.log("--i can swimming");
//     }

//     flying() {
//         console.log("--i can flying");
//     }
// }

// class Swim {
//     name: string
//     swimming: () => void
// }

// class Fly {
//     name: boolean
//     flying() {
//         console.log("--hahahs--");  
//     }
// }

// interface IAnimal extends Swim, Fly {
//     name: any
//     eating: () => void
// }

// class Animal implements IAnimal {
//     name: 'heihie'

//     swimming() {
//         console.log("--i can swimming");
//     }

//     flying() {
//         console.log("--i can flying");
//     }

//     eating() {
//         console.log("--i can eating");
//     }
// }



// const animal = new Animal();
// animal.flying();

interface Animal {
    readonly name?: string
    readonly sex?: string
}

// type MyRequired<T> = {
//     -readonly [P in keyof T] -?: T[P]
// }

// type RequiredAnimal = MyRequired<Animal>


type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type MyPickType = MyPick<Animal, 'sex'>
type PickType = Pick<Animal, 'sex'>


type MyOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
}

type MyOmitType = MyOmit<Animal, 'sex'>
type OmitType = Omit<Animal, 'sex'>


type MyExclude<T, U> = T extends U ? never : T
type T4 = MyExclude<"a" | "b" | "c", "b">
type T3 = Exclude<"a" | "b" | "c", "b" | "c">


type MyNonNullable<T> = T extends null | undefined ? never : T
type T7 = MyNonNullable<string | number | null | undefined>
type T8 = NonNullable<string | number | null | undefined>


interface F

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type F1ReturnType = ReturnType<F1Type>
type MyF1ReturnType = MyReturnType<F1Type>

let test:unknown = 3
let a:string
let test2: any
test2 = test
a = test2
test = test2



export {}