import React from "react";
import{ Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
function Chart(){
    const goldprice=[
        {month:"jan",price:'5000'},
        {month:"Feb",price:'3000'},
        {month:"Mar",price:'4000'},
    ]
    return(
        <div>
        <LineChart width={500} height={500} data={goldprice} style={{backgroundColor:"blue"}}>
            <CartesianGrid stroke="red"></CartesianGrid>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Line type="monotone" dataKey="price" stroke="#777777"></Line>
        </LineChart>
        <div>
        <BarChart width={500} height={500} data={goldprice} >
            <CartesianGrid stroke="red"></CartesianGrid>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar type="monotone" dataKey="price" stroke="#000000"></Bar>
            
        </BarChart>
        </div>
        </div>
    );
}
export default Chart;
