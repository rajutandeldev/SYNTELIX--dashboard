import React from 'react'
import Styles from '@/app/ui/dashboard/dashboard.module.css'
import Sidebar from '../ui/sidebar/sidebar'

export default function layout({children}:{
    children:React.ReactNode
}) {
  return (
    <div className={Styles.container}>
        <div className={Styles.menu}>
          <Sidebar/>
        </div>
        <div className={Styles.content}>
           {children}
        </div>
        
    </div>
  )
}
