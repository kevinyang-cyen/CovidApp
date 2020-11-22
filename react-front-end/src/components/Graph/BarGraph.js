import {
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

import * as covidData from "../result.json";

// BarChart Sample Data
export default function BarGraph() {


  const data = [];

  const covidDataList = covidData.result.forEach(result => {
    data.push({ name: result.date, cases: result.confirmed })
  });


  return (
    <div>
      <h1>Social Network Users</h1>
      <BarChart width={1000} height={250} data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="cases" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
