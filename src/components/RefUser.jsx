import React, { useEffect, useRef, useState } from 'react'

export default function RefUser() {
    const rerenders = useRef(1) //useRef создаёт переменную , которая не ререндерит страницу при изменении
    const previousValue = useRef('')
    const referal = useRef(null) // useRef создаёт ссылку на dom элемент
    const [text, setText] = useState('initial')
    
    useEffect(()=>{
        rerenders.current++
    })

    useEffect(()=>{
        previousValue.current = text
    }, [text])

  return (
    <div>
        <h1>{`Rerenders count: ${rerenders.current}`}</h1>
        <h2>Прошлое состояние: {previousValue.current}</h2>
        <input ref={referal} type="text" value={text} onChange={e=>setText(e.target.value)}/>
        <button onClick={()=>referal.current.focus()}>Focus</button>
    </div>
  )
}
