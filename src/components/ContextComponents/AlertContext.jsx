import { Alert } from 'antd'
import React, { useContext } from 'react'
import { AlertProvider} from './WrapperContext'

export default function AlertContext() {

    const {alert, toggle} = useContext(AlertProvider)

    if(!toggle) return null

  return (
    <Alert
      description={alert}
      type="error"
    />
  )
}
