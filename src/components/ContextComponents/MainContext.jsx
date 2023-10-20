import { Button, Input } from 'antd'
import React, { useContext, useState } from 'react'
import { AlertProvider} from './WrapperContext'

export default function MainContext() {
    const [text, setText] = useState('')

    const {show, setAlert} = useContext(AlertProvider)

  return (
    <div>
        <Input value={text} onChange={event=>{setText(event.target.value)}} style={{maxWidth: '30vw'}} placeholder='Error message'/>
        <Button type='primary' onClick={()=>{setAlert(text)}}>Set error</Button>
        <Button type='primary' danger onClick={()=>{show()}}>Show</Button>
    </div>
  )
}
