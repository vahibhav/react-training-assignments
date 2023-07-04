import React from 'react'
import LogoComponent from './LogoComponent'
import ViewTitleComponent from './ViewTitleComponent'

const HeaderComponent = () => {
  return (
    <div>
        <h1>I am Header Component</h1>
        
        <LogoComponent/>
        <ViewTitleComponent/>
      
    </div>
  )
}

export default HeaderComponent;
