import React from 'react'
import BigTitle from '../components/BigTitle'
import "../components/scss/BigTitle.scss"
import Cube from '../components/Cube'

const Main = () => {
  return (
    <div className='main index'>
        <div className='content-inner'>
            <BigTitle title="FRONT END" desTitle='DEVELOPER' subTitle='MYEONG CHAN'/>
            <Cube />
        </div>
        
    </div>
    

  )
}

export default Main
