import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, CartesianAxis } from 'recharts';

function SalesChart({data}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
        >
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#FF8548" fill="#FF854866" fillOpacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
  )
}

export default SalesChart