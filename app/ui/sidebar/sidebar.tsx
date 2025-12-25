import React from 'react'
import Styles from './sidebar.module.css'
import { MdCalendarToday, MdDashboard } from 'react-icons/md';
import { DiRaphael } from 'react-icons/di';
import { MdSchool, MdDescription, MdLightbulb, MdTune, MdLogout } from "react-icons/md";
const menuItems=[
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
    },
    {
        title:"Courses",
        path:"/dashboard/courses",
        icon:<MdSchool/>
    },
    {
        title:"Routine",
        path:"/dashboard/routine",
        icon:<MdCalendarToday/>
    },
    {
        title:"Resouces",
        path:"/dashboard/resouces",
        icon:<MdDescription/>
    },
    {
        title:"Events",
        path:"/dashboard/events",
        icon:<MdLightbulb/>
    }
    ,
    {
        title:"Settings",
        path:"/dashboard/settings",
        icon:<MdTune/>
    },
    {
        title:"Sign out",
        path:"/dashboard/sign-out",
        icon:<MdLogout/>
    }
];
export default function Sidebar() {
  return (
    <div className={Styles.container}> 
      <div className={Styles.title}>
        <span><DiRaphael size={60} fontWeight={10}/></span>
        <h2>SYNTELIX</h2>
      </div>
      <ul className={Styles.list}>
        {menuItems.map((data,key)=>(
            <li key={key}>
                <span>{data.icon}</span>
                {data.title}
            </li>
        ))}
      </ul>
    </div>
  )
}
