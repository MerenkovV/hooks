import { Button, Input, Space } from "antd";
import { useEffect, useMemo, useState } from "react";

export default function MemoUser() {
    const [iterator, setIterator] = useState(0)
    const [textColor, changeTextColor] = useState(false)

    const styles = useMemo(()=>({ //Используется, потому что иначе при ререндере создавался бы "новый" styles, и useEffect бы отрабатывал при каждой перерисовке
        color: textColor ? 'blue' : 'black'
    }), [textColor])

    const massiveIterator = useMemo(()=>{ // Используется, чтобы функция не выполнялась при каждой перерисовке, а только тогда, когда изменяется iterator
        let i = 0
        while(i < 400000000){
            i++
        }
        return iterator * 2
    }, [iterator])

    useEffect(()=>{
        console.log('Styles Changed');
    }, [styles])

    const buttonHandler = (isPlus) => {
        isPlus ? setIterator(iterator + 1) : setIterator(iterator - 1)
    }

    return (
        <div>
            <h1 style={styles}>Iterator</h1>
            <Space.Compact block>
                <Button type="primary" onClick={() => { buttonHandler(false) }} >Minus</Button>
                <Input style={{ maxWidth: '2vw' }} placeholder="input" value={massiveIterator} />
                <Button type="primary" onClick={() => { buttonHandler(true) }} >Plus</Button>
            </Space.Compact>
            <Button onClick={() => { changeTextColor(prev=>!prev) }}></Button>
        </div>
    )
}
