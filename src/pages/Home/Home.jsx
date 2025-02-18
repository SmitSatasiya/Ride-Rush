import React from 'react'
import { Banner } from '../../components/Home/Banner'
import { CarClasses2 } from '../../components/Home/CarClasses2'
import { Work } from '../../components/Home/Work'
import { Service } from '../../components/Home/Services'
import { AboutComponet } from '../../components/Home/AboutComponet'
import { Question } from '../../components/Home/Question'



export const Home = () => {
    return (
        <>
            <Banner />
            <CarClasses2 />
            <Work />
            <AboutComponet />
            <Service />
            <Question/>
        </>
    )
}