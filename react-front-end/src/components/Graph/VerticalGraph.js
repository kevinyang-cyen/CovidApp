import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label,
  Legend,
} from 'recharts';

export default function VerticalGraph(props) {
  return (
    <ComposedChart
      layout="vertical"
      width={800}
      height={1000}
      data={props.coviddata}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" >
        <Label value={props.xaxis} offset={0} position="insideBottom" />
      </XAxis>
      <YAxis dataKey={props.keydata} type="category" label={{ value: props.yaxis, angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey={props.keydataAxis} barSize={20} fill="#413ea0" />
    </ComposedChart>
  );
}
