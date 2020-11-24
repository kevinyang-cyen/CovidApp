import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer
} from 'recharts';

export default function AreaGraph(props) {

  return (
    <ResponsiveContainer width="80%" height={300}>
      <AreaChart
        data={props.coviddata}
        fontSize={12}
        margin={{
          top: 30, right: 0, left: 60, bottom: 30,
        }}
        isAnimationActive={true}
      >
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="name"
          width={35}
          axisLine={false}
        >
          <Label value={props.xaxis} offset={10} position="bottom" />
        </XAxis>
        <YAxis
          width={35}
          axisLine={false}
        >
          <Label angle={270} position='left' style={{ textAnchor: 'middle' }} dx={-30} >
            {props.yaxis}
          </Label>
        </YAxis>
        <Tooltip />
        <Area type="monotone" dataKey={props.keydata} fillOpacity={0.3} stroke={props.color} fill={props.color} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// width={1500}
// height={400}
//{props.Yaxis}