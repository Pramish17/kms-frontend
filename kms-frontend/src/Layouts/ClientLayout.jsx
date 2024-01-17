import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'
import ClientHeader from '../components/ClientHeader'

const ClientLayout = () => {
    return (
        <>
            <ClientHeader />
            <div>
                <Outlet></Outlet>
            </div>
            <FooterComponent />
        </>
    )
}

export default ClientLayout