import { Button, Input, Space } from "antd";
import { useCallback, useEffect, useState } from "react";

export default function CallbackUser() {
    const [iterator, setIterator] = useState(0)
    const [reload, setReload] = useState(true)

    const buttonHandler = (isPlus) => {
        isPlus ? setIterator(iterator + 1) : iterator > 0 && setIterator(iterator - 1)
    }

    const getList = useCallback(() => {  //Позволяет не обновлять callback при ререндере страницы
        return new Array(iterator).fill('').map((_,i)=>`Элемент ${i+1}`)
    }, [reload])

    return (
        <div>
            <h1>UseCallback</h1>
            <Space.Compact block>
                <Button type="primary" onClick={() => { buttonHandler(false) }} >Minus</Button>
                <Input style={{ maxWidth: '40px' }} placeholder="input" value={iterator} />
                <Button type="primary" onClick={() => { buttonHandler(true) }} >Plus</Button>
            </Space.Compact>
            <br />
            <Button onClick={()=>{setReload(!reload)}}>Set posts</Button>
            <MakeList getList={getList}/>
        </div>
    )
}

function MakeList({getList}) {
    const [items, setItems] = useState([])

    useEffect(()=>{
        const newItems = getList()
        setItems(newItems)
        console.log('Render');
    }, [getList])

  return (
    <ul>
        {items.map((el, i)=><li key={i}>{el}</li>)}
    </ul>
  )
}
