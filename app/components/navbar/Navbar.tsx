"use client"
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { Navstyle } from './Navbar.styled'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <Navstyle >
        <nav  >
            <h1>Hikers</h1>
            <ul>
                <li>Equipment </li>
                <li>About us </li>
                <li>Blog </li>
            </ul>
            <p> {<HiOutlineUserCircle fontSize='30px' />} Account </p>
            </nav>
            </Navstyle>
  )
}

export default Navbar