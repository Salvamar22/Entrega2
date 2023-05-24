import React from 'react'
import Menu from './menu'
import { BiScan } from 'react-icons/bi'
import { GiTicket } from 'react-icons/gi'
import logo from '../images/logo.png'

const navbar = () => {
    return (
        <div className='bg-white w-screen p-2 fixed top-2 left-0 flex justify-between  items-center mr-2'>
            <Menu className="ml-2" />
            <img src={logo} alt="logo" className="h-7 w-9" />
            <h1>home</h1>
            <BiScan className="" />
            <GiTicket className="mr-2" />
        </div>
    )
}

export default navbar
