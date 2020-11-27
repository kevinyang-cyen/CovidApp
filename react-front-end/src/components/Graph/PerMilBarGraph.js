import { ProgressBar } from "react-bootstrap";
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
      <ResponsiveContainer width="100%" height={245}>
        <BarChart
          data={props.coviddata}
          fontSize={12}
          margin={{
            top: 10, right: 20, left: 0, bottom: 20
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="name"
            interval={0}
            tickLine={true}
          >
            <Label offset={10} position="bottom" >
              Provinces
            </Label>
          </XAxis>
          <YAxis
            interval={0}
            axisLine={false}
          >
            <Label angle={270} position='left' style={{ textAnchor: 'middle' }} dx={-25}>
            </Label>
          </YAxis>
          <Tooltip />
          <Bar dataKey={props.yaxis} fill={props.fill} fillOpacity={0.7} barSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}