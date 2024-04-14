// https://www.bilibili.com/video/BV1nT4y1a7AR/?spm_id_from=333.788&vd_source=b782dddc326159d2dba59359a828e657
// keyof 用于获取类型中的所有键, 类似于js中Object.keys()
// in 用于迭代对象属性的关键字， 相当于中for in


interface PartialType {
    id?: number;
    firstName?: string;
    lastName?: string;
}

// Partial<Type>
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}
type myPartialType = MyPartial<PartialType>


// Required<Type>
type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}
type myRequiredype = MyRequired<PartialType>


// Readonly<Type>
type MyReadonly<T> = {
    readonly [P in keyof T]-?: T[P]
}
type myReadonlyType = MyReadonly<PartialType>
type ReadonlyType = Readonly<PartialType>

// Pick<Type, Keys>
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
type MyPickType = MyPick<PartialType, 'id' | 'firstName'>
type PickType = Pick<PartialType, 'id' | 'firstName'>

// Omit<Type, Keys>
type MyOmit<T, K extends string | number | symbol> = {
    [P in Exclude<keyof T, K>]: T[P];
}
type MyOmitType = MyOmit<PartialType, 'id' | 'firstName'>
type OmitType = Omit<PartialType, 'id' | 'firstName'>

export { }

class Jumpable {
    name: string;
    constructor(name) {
        this.name = name
    }
    jump() { }
}

class Duckable {
    duck() { }
}

// Then you create an interface which merges
// the expected mixins with the same name as your base
interface Sprite extends Jumpable, Duckable {

}