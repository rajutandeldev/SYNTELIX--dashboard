import React from 'react'
import Styles from '@/app/ui/dashboard/assignments/assignments.module.css'
import { LuLayers, LuType, LuMoon, LuPenTool } from "react-icons/lu";
export default function Assignments() {
  return (
    <div className={Styles.container}>
        <div className={Styles.header}>
          <p className={Styles.title}>Assignments</p>
          <p className={Styles.text}>24 Completed <span>.</span> Last updated on 4th Dec,24</p>
        </div>
        <table className={Styles.table}>
            <thead>
                <tr>
                    <td>Assignment</td>
                    <td>Level</td>
                    <td>Score</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={Styles.icons}>
                        <span className={Styles.tableIcons}>
                            <LuLayers/>
                        </span>
                        <div className={Styles.textWrap}>
                           Design Accessibility
                           <span>Today,10:30 AM</span>
                        </div>
                    </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      Advance
                     <span>2 hours</span>
                     </div>
                     </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      184
                     <span>/200</span>
                     </div>
                    </td>
                </tr>
                <tr>
                    <td className={Styles.icons}>
                        <span className={Styles.tableIcons}>
                            <LuType/>
                        </span>
                        <div className={Styles.textWrap}>
                           Typography
                           <span>4 Dec,12:30 AM</span>
                        </div>
                    </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      Intermediate
                     <span>4 hours</span>
                     </div>
                     </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      190
                     <span>/200</span>
                     </div>
                    </td>
                </tr>
                <tr>
                    <td className={Styles.icons}>
                        <span className={Styles.tableIcons}>
                            <LuMoon/>
                        </span>
                        <div className={Styles.textWrap}>
                           Design Composition
                           <span>2 Dec,10:30 AM</span>
                        </div>
                    </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      Advance
                     <span>5 hours</span>
                     </div>
                     </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      140
                     <span>/200</span>
                     </div>
                    </td>
                </tr>
                <tr>
                    <td className={Styles.icons}>
                        <span className={Styles.tableIcons}>
                            <LuPenTool/>
                        </span>
                        <div className={Styles.textWrap}>
                           UI Components
                           <span>9 Dec,10:30 AM</span>
                        </div>
                    </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      Intermediate
                     <span>7 hours</span>
                     </div>
                     </td>
                    <td>
                    <div className={Styles.textWrap}> 
                      168
                     <span>/200</span>
                     </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
