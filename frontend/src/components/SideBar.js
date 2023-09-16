import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import '../pages/home';
import '../pages/login';

export const SideBar = [
    {
        title:'Home',
        path:"/home",
        icon: <AiIcons.AiFillHome/>,
        cName: 'sidebar-text'
    },
    {
        title:'My questions',
        path:"/home",
        icon: <IoIcons.IoIosPaper/>,
        cName: 'sidebar-text'
    },
    {
        title:'Support',
        path:"/home",
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'sidebar-text'
    },
    {
        title:'Logout',
        path:"/login",
        cName: 'sidebar-text'
    },
    {
        title:'Delete Account',
        path:"/login",
        cName: 'sidebar-text'
    },
    {
        title:'Update Account',
        path:"/home",
        cName: 'sidebar-text'
    }
]