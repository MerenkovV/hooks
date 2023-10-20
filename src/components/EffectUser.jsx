import { Button, Space } from "antd";
import { useEffect, useState } from "react";

export default function EffectUser() {

    const [endpoint, setEndpoint] = useState('todos')
    const [data, setData] = useState([])
    const [position, setPosition] = useState({
        x: 0, y: 0
    })

    const mouseHandler = event => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(response => response.json())
        .then(json => setData(json))

        return(()=>{
            console.log('Cleared'); //Вызывается при размонтировании эффекта (в данном случае - при изменении endpoint)
        })
    }, [endpoint]) // Выполняется при изменении значения endpoint

    useEffect(()=>{
        window.addEventListener('mousemove', mouseHandler)

        return(()=>{
            window.removeEventListener('mousemove', mouseHandler)
        })
    }, []) //Выполняется один раз при старте

  return (
    <div>
        <h2>{`Position x: ${position.x} \n Position y: ${position.y}`}</h2>
        <Space.Compact block>
            <Button type="primary" onClick={() => { setEndpoint('todos') }} >ToDo</Button>
            <Button type="primary" onClick={() => { setEndpoint('posts') }} >Posts</Button>
            <Button type="primary" onClick={() => { setEndpoint('users') }} >Users</Button>
        </Space.Compact>
        <h1>{endpoint}</h1>
        <div style={{overflow: 'hidden', maxHeight:"390px"}}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    </div>
  )
}
