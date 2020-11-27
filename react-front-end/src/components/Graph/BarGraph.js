import {
  BarChart,
  Label,
  CartesianGrid,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Bar,
} from "recharts";

export default function BarGraph(props) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={props.coviddata}
          fontSize={12}
          margin={{
            top: 20, right: 20, left: 10, bottom: 20
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
          <Bar dataKey="Case Count" fill="#82ca9d" fillOpacity={0.5} barSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}