import React from 'react'
import BodyLeftComponent from './BodyLeftComponent'
import BodyRightComponent from './BodyRightComponent'

const BodyComponent = () => {
  return (
    <div>
      <h1>I am a Body Component</h1>
      <BodyLeftComponent/>
      <BodyRightComponent/>
    </div>
  )
}

export default BodyComponent
