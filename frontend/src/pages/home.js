import React, { useState } from 'react'
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBar } from '../components/sideBar';

import { IconContext } from 'react-icons/lib';
import Layout from './layout'

function Home() {
    const [sidebar, setsidebar] = useState(false);
    const showSideBar = () => setsidebar(!sidebar);

    const [updatePannel, setUpdatePannel] = useState(false);
    const showUpdatePannel = () => setUpdatePannel(!updatePannel);

    return (
        <Layout>
            <div className='home'>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='sidebar'>
                        <Link href="#" className='menu-bar'>
                            <FaIcons.FaBars className='icon' onClick={showSideBar} />
                        </Link>

                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <ul className='nav-menu-items' onClick={showSideBar}>
                                <li className='toggle'>
                                    <Link href='#' className='menu-bar'>
                                        <AiIcons.AiOutlineClose className='icon' />
                                    </Link>
                                </li>
                                {SideBar.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link href={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </IconContext.Provider>
                <p className='home-text'>Home</p>
            </div>
        </Layout>
    )
}

export default Home