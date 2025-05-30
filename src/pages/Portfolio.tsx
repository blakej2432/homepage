import React from 'react'
import SectionTitle from '../components/SectionTitle'
import PortfolioSwiper from '../components/PortfolioSwiper'

const Portfolio = () => {
  return (
    <div className="main portfolio">
        <div className='content-inner'>
            <SectionTitle title="Portfolio" subTitle="제 포트폴리오 입니다."/>
            <div>
                <PortfolioSwiper />
            </div>
        </div>
    </div>

  )
}

export default Portfolio
