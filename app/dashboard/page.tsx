import React from 'react'
import Card from '../ui/dashboard/card/card'
import Styles from '@/app/ui/dashboard/dashboard.module.css'
import MixBarChart from '../ui/dashboard/chart/chart'
import Assignments from '../ui/dashboard/assignments/assignments'
import Trending from '../ui/dashboard/tranding/trending'
export default function Dashboard() {
  return (
   <div className={Styles.dashcontainer}>
    <div className={Styles.container}>
      <MixBarChart/>
      <Card/>
    </div>
    <div className={Styles.mainContent}>
       <Assignments/>
       <Trending/>
    </div>

   </div>
  )
}
