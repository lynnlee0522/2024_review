// https://www.bilibili.com/read/cv16483553/?jump_opus=1
// extends  在 TypeScript 中可以理解为 Assignable
// 条件类型 类型 T 可以赋值给 U 时（extends  在 TypeScript 中可以理解为 Assignable），返回 X 类型，否则返回 Y 类型。 
// 分布式条件类型：如果传入的被检查类型是联合类型时，会被分解成多个分支

// typeof 
// 1. 获取函数对象的类型
declare function f1(arg: { a: number; b: string }): number;
type F1Type = typeof f1
// type F1ParamsType = Parameters<F1Type>
// type F1ReturnType = ReturnType<F1Type>

// 2. 获取对象类型
const lolo = {
    name: 'lolo',
    age: 7,
    address: {
        province: '福建'
    }
}
type Person = typeof lolo

type Address = typeof lolo["address"]
// 3. 对枚举类型
enum HttpMethod {
    Get,
    Post
}
type Method = keyof typeof HttpMethod
// 4. 对class
class Point {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
type PointType = typeof Point



// Exclude<UnionType, ExcludedMembers>
type MyExclude<T, U> = T extends U ? never : T
type T3 = Exclude<"a" | "b" | "c", "b">
type T4 = MyExclude<"a" | "b" | "c", "b">

// Extract<Type, Union>
type MyExtract<T, U> = T extends U ? T : never
type T5 = MyExtract<"a" | "b" | "c", "b" | "c">
type T6 = MyExtract<"a" | "b" | "c", "b" | "c">

// NonNullable<Type>
type MyNonNullable<T> = T extends null | undefined ? never : T
type T7 = MyNonNullable<string | number | null | undefined>
type T8 = NonNullable<string | number | null | undefined>


// infer: infer 关键字在 TypeScript 中用于提取并推断类型信息，特别是在条件类型中
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type MyF1ReturnType = MyReturnType<F1Type>
type F1ReturnType = ReturnType<F1Type>


type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : any
type F1ParamsType = Parameters<F1Type>
type MyF1ParamsType = MyParameters<F1Type>

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
const arr: Flatten<number> = 1

export {}