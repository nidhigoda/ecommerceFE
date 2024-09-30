import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurta } from "../../../Data/mens_kurta";
import {Outlet} from 'react-router-dom'
const HomePage=()=>{
    return(
        <div>
            <MainCarosel />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
              <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
              <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Shoes"}/>
              <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Shirt"}/>
              <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Skirt"}/>
              <Outlet />
            </div>
        </div>
    )
}

export default HomePage