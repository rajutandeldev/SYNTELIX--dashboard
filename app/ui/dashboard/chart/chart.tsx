"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import Styles from './chart.module.css'
// #region Sample data
const data = [
  {
    name: 'Sat',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Sun',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mon',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Tue',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Wed',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Thu',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Fri',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const MixBarChart = () => {
  return (

    // <BarChart
    //   style={{ 
    //     width: '100%', 
    //     maxWidth: '700px', 
    //     maxHeight: '70vh', 
    //     aspectRatio: 1.618, 
    //     backgroundColor:"#FFF",
    //     padding:"40px"
    //  }}
    //   responsive
    //   data={data}
    //   margin={{
    //     top: 20,
    //     right: 0,
    //     left: 0,
    //     bottom: 5,
    //   }}
    // >
        
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis width="auto" />
    //   <Tooltip />
    //   <Legend />
    //   <Bar dataKey="pv" stackId="a" fill="#ece6e2" />
    //   <Bar dataKey="amt" stackId="a" fill="#ccbcb4" />
    //   <RechartsDevtools />
    // </BarChart>
     <BarChart
     style={{ 
      width: '100%', 
      maxWidth: '700px', 
      maxHeight: '60vh', 
      aspectRatio: 1.6,
      backgroundColor:"#FFF",
      padding:'40px',
      border: 'none'
     }}
     responsive
     data={data}
   >
      <XAxis dataKey="name" />
      <Legend />
     {/* <Bar dataKey="uv" fill="#ece6e2" /> */}
     
     <Bar dataKey="pv" stackId="a" fill="#ece6e2" />
     
     <Bar dataKey="pv" stackId="a" fill="#ded4ce" />
     <RechartsDevtools />
   </BarChart>
  );
};

export default MixBarChart;