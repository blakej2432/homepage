import React from 'react'

//swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import "./scss/PortfolioSwiper.scss"

interface Portfolio{
    id:number; 
    title:string;
    des:string;
    skill:string;
    webUrl:string;
    gitUrl:string;
}

const PortfolioList: Portfolio[] = [
    {
        id:0, title: "제목1", des:"사이트 리뉴얼", skill:"React+Typescript", webUrl:"http://naver.com", gitUrl:""
    },
    {
        id:1, title: "제목1", des:"사이트 리뉴얼", skill:"Django", webUrl:"http://naver.com", gitUrl:""
    },
    {
        id:2, title: "제목1", des:"사이트 리뉴얼", skill:"FastAPI", webUrl:"http://naver.com", gitUrl:""
    },
]

const PortfolioSwiper = () => {
  return (
    <div className='main portSwiper'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        // autoplay={{delay: 5000}}
        slidesPerView={1}
        loop={true}
        scrollbar={{ draggable: true }}>
        {PortfolioList.map((item) => (
            <SwiperSlide>
                <p><img src={`./images/portfolio_slider_0${item.id+1}.png`} alt={item.title} /></p>
                <div className="text-box">
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                    <div className="btn-wrap">
                        <span>{item.skill}</span>
                        <ul>
                            <li><a href={item.gitUrl}>git</a></li>
                            <li><a href={item.webUrl}>web</a></li>   
                        </ul>
                    </div>
                </div>
            </SwiperSlide>
      ))}
    
      </Swiper>
    </div>
  )
}

export default PortfolioSwiper