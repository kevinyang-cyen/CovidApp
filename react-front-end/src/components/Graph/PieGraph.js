import { RadialBarChart, Tooltip, RadialBar, Legend } from 'recharts';

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

export default function PieGraph(props) {
  return (
    <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={150} fontSize={10} style={{ color: "black" }} barSize={20} data={props.coviddata}>
      <RadialBar minAngle={15} barGap={8} label={{ position: 'insideStart', fill: 'black' }} background clockWise dataKey="Case Count" nameKey= "age"/>
      <Tooltip />
      <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
    </RadialBarChart>
  );
}
