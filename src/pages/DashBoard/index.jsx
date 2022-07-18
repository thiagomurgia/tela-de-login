import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { Container } from './styles';

function Dashboard() {
  const data = [
    { marcar: 'FIAT', value: 9.413 },
    { marcar: 'GM', value: 4.853 },
    { marcar: 'Toyota', value: 3.963 },
    { marcar: 'Hyundai', value: 3.606 },
    { marcar: 'Jeep', value: 2.466 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <Container>
        <h1>Venda de Carros no Brasil</h1>
        <Link to="/">
          <p>Logout</p>
        </Link>

        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Container>
    </>
  );
}
export { Dashboard };
