import React from 'react'
import Styles from './card.module.css'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Image from 'next/image'
export default function Card({ title, time, avatar1, avatar2 }: { title: string, time: string, avatar1: string, avatar2: string }) {
    return (
        <div className={Styles.container}>
            <div className={Styles.cardContainer}>
                <div className={Styles.upSection}>
                    <p >{title}</p>
                    <span>{time}</span>
                </div>
                <div className={Styles.icon}>

                    <MdOutlineArrowOutward />
                </div>
            </div>
            <div className={Styles.avContainer}>

                <div className={Styles.avatarImage}>

                    <Image src={avatar1} alt="" height={8} width={8} style={{ borderRadius: 50,objectFit:'cover' }} />
                    <Image src={avatar2} className={Styles.overlap} alt="" height={8} width={8} style={{ borderRadius: 50, objectFit:'cover' }} />
                    <span className={Styles.overlap}>7+</span>

                </div>
                <span className={Styles.rating}>4.8</span>
            </div>

        </div>
    )
}
