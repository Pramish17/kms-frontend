import React from 'react'
import { Outlet } from 'react-router-dom'
import PartialHeaderComp from '../components/PartialHeaderComp'
import FooterComponent from '../components/FooterComponent'

const Fulllayout = () => {
    return (
        <>
            <PartialHeaderComp />
            <div>
                <Outlet></Outlet>
            </div>
            <FooterComponent />
        </>
    )
}

export default Fulllayout