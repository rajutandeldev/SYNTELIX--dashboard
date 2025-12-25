import React from 'react'
import Styles from '@/app/ui/dashboard/tranding/trending.module.css'
import Card from '@/app/ui/dashboard/tranding/card/card'
export default function Trending() {
  return (
    <div className={Styles.container}>
      <h2>Trending now</h2>
      <Card title='Framer Masterclass' time='12 Lessons . 6h' avatar1='/avatar1.jpg' avatar2='/avatar2.jpg'/>
      <Card title='Design Composition' time='8 Lessons . 4h' avatar1='/avatar1.jpg' avatar2='/avatar2.jpg'/>
      <Card title='Analytics Tools' time='7 Lessons . 6h' avatar1='/avatar1.jpg' avatar2='/avatar2.jpg'/>
    </div>
  )
}
