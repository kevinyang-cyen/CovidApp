import {
  BarChart,
  Label,
  LabelList,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Bar,
} from "recharts";

export default function BarGraph(props) {
  return (
    <div>
      <ResponsiveContainer width="80%" height={400}>
        <BarChart
          data={props.coviddata}
          fontSize={12}
          margin={{
            top: 30, right: 30, left: 70, bottom: 40
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="name"
            width={35}
            tickLine={true}
          >
            <Label offset={10} position="bottom" >
              Age Group
            </Label>
          </XAxis>
          <YAxis
            width={35}
            axisLine={false}
          >
            <Label angle={270} position='left' style={{ textAnchor: 'middle' }} dx={-25}>
              {props.yaxis}
            </Label>
          </YAxis>
          <Tooltip />
          <Bar dataKey="Case Count" fill="#82ca9d" barSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}