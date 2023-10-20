import { Button, Input, Space } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'

function useInput(initialValue){
    const [value, setValue] = useState(initialValue)

    const clear = () => setValue('')

    const onChange = event => setValue(event.target.value)

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

export default function CustomUser() {
    const input1 = useInput('')
    const input2 = useInput('')

  return (
    <div>
        <Space.Compact>
            <Input {...input1.bind}/>
            <Button onClick={input1.clear}>Clear</Button>
        </Space.Compact>
        <br/>
        <Space.Compact>
            <Input {...input2.bind}/>
            <Button onClick={input2.clear}>Clear</Button>
        </Space.Compact>

        <Title>{input1.value} {input2.value}</Title>
    </div>
  )
}
