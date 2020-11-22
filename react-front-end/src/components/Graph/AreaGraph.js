import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import * as covidData from "../result.json";


export default function AreaGraph() {
  const data = [];

  const covidDataList = covidData.result.forEach(result => {
    data.push({ name: result.date, cases: result.confirmed })
  });

    return (
      <AreaChart
        width={1500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
}
