import {
  PieChart, Pie, Cell, Tooltip, Legend
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

export default function PieAngleGraph(props) {

  return (
    <PieChart width={430} height={200}>
      <Pie
        data={props.coviddata}
        cx={120}
        cy={100}
        innerRadius={30}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={0}
        nameKey={props.nameKey}
        dataKey={props.datakey}
      >
        {
          props.coviddata.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Tooltip />
      <Legend iconSize={10} width={80} height={120} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
    </PieChart>
  );
}
