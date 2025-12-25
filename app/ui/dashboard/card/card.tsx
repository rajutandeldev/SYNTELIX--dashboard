import React from 'react'
import Styles from "./card.module.css"
import Image from 'next/image'
import { DiRaphael } from 'react-icons/di'
import { FaAndroid, FaApple } from 'react-icons/fa'
export default function Card() {
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>

      <Image src="/boyImage.png"  alt="" fill/>
      </div>
      <div className={Styles.title}>
        <span><DiRaphael size={60} fontWeight={10}/></span>
        <h2>SYNTELIX</h2>
      </div>
      <div className={Styles.content}>
        <div className={Styles.cont}>
          <span>Learn </span>
          <span>on your terms,</span>
          <span>anytime, anywhere</span>
        </div>
      </div>

      <div className={Styles.icons}>
       <span><FaAndroid radius={50} color='#d3b5a0' /></span>
       <span className={Styles.overlap}><FaApple color='#d3b5a0'/></span>
        Download app on syntelix
      </div>
    </div>
  )
}
