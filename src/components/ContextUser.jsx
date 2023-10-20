import React from 'react'
import AlertContext from './ContextComponents/AlertContext'
import MainContext from './ContextComponents/MainContext'
import WrapperContext from './ContextComponents/WrapperContext'

export default function ContextUser() {

  return (
    <div>
        <WrapperContext>
            <MainContext/>
            <br/>
            <AlertContext/>
        </WrapperContext>
    </div>
  )
}
