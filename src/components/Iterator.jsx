import { Button, Input, Space } from "antd";
import { useState } from "react";

export default function Iterator() {

    const [iterator, setIterator] = useState(0)

    const [title, setTitle] = useState({
        text: 'Iterator',
        postText: 'Hey'
    })

    const buttonHandler = (isPlus) => {
        isPlus ? setIterator(iterator + 1) : setIterator(iterator - 1)
    }

    const changeIterator = (number) => {
        setTitle(previousValue => ({
            ...previousValue,
            text: `Iterator ${number}`
        }))
    }

    return (
        <div>
            <h1>{title.text + " - " + title.postText}</h1>
            <Space.Compact block>
                <Button type="primary" onClick={() => { buttonHandler(false) }} >Minus</Button>
                <Input style={{ maxWidth: '2vw' }} placeholder="input" value={iterator} />
                <Button type="primary" onClick={() => { buttonHandler(true) }} >Plus</Button>
            </Space.Compact>
            <br />
            <Button onClick={() => { changeIterator(iterator) }}>Change title</Button>
        </div>
    )
}
