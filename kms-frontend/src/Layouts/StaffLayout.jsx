import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'
import StaffHeader from '../components/StaffHeader'

const StaffLayout = () => {
    return (
        <>
            <StaffHeader />
            <div>
                <Outlet></Outlet>
            </div>
            <FooterComponent />
        </>
    )
}

export default StaffLayout