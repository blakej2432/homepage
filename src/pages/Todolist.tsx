import React from 'react'
import SectionTitle from '../components/SectionTitle'

const Todolist = () => {
  return (
    <div className="main todlist">
        <div className='content-inner'>
            <SectionTitle title="Todolist" subTitle="제 TODO 리스트입니다."/>
            <div>TODO 본문</div>
        </div>
    </div>

  )
}

export default Todolist
