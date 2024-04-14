import React, { useState } from 'react'

export const InputComponent = () => {
    const [value, setValue] = useState('')

    // []: 方括号用于指定一个字符集合，表示匹配方括号内任意一个字符。
    // \s: 表示匹配任何空白字符，包括空格、制表符、换行符等。
    // ,: 匹配逗号字符本身。
    // +: 表示匹配前面的元素一次或多次。
    //因此，[\s,]+的含义是匹配一个或多个连续的空格或逗号。换句话说，这个正则表达式会匹配任意数量的空格或逗号，直到遇到其他字符为止，然后将其作为分隔符进行字符串的分割。


    const handleChange = (event) => {
        const content = event.target.value
        setValue(content)

        const arr = content.replace('，', ',').split(/[\s,]+/)
        console.log("--arrr---", arr);
    }

    return (
        <input value={value} onChange={handleChange} />
    )
}