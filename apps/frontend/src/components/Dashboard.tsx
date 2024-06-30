import { Flex, Container, Box, VStack, HStack, Grid, GridItem, Text, Button, Image, Link } from "@chakra-ui/react";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, BarChart, Bar } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class LineDisplay extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#86EA8A" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

const data02 = [
  {
    "name": "Group A",
    "value": 2400,
    "fill": "#86EA8A"
  },
  {
    "name": "Group B",
    "value": 4567,
    "fill": "#5DD362"
  },
  {
    "name": "Group C",
    "value": 1398,
    "fill": "#45B876"
  },
  {
    "name": "Group D",
    "value": 9800,
    "fill": "#45B876"
  },
  {
    "name": "Group E",
    "value": 3908,
    "fill": "#3B963F"
  },
  {
    "name": "Group F",
    "value": 4800,
    "fill": "#356E36"
  }
];

const pieColors = ["#86EA8A", "#5DD362", "#45B876", "#3B963F", "#356E36"];

class PieDisplay extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            data={data02}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index
            }) => {
              const RADIAN = Math.PI / 180;
              // eslint-disable-next-line
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              // eslint-disable-next-line
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              // eslint-disable-next-line
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill={pieColors[index]}
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {value}
                </text>
              );
            }}
            innerRadius={"60%"}
            outerRadius={"70%"}
            dataKey="value"
          />
          <Legend align="left" verticalAlign="middle" width={100} />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

const data03 = [
  {
    "name": "Page A",
    "uv": 4000,
  },
  {
    "name": "Page B",
    "uv": 3000,
  },
  {
    "name": "Page C",
    "uv": 2000,
  },
  {
    "name": "Page D",
    "uv": 2780,
  },
  {
    "name": "Page E",
    "uv": 1890,
  },
  {
    "name": "Page F",
    "uv": 2390,
  },
  {
    "name": "Page G",
    "uv": 3490,
  }
]

class BarDisplay extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-4z3og';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data03}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#86EA8A" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}


export const Dashboard = () => {
    return (
        <Grid
          h={"100vh"}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }}
          gap={4}
          p={{ base: 4, md: 24 }}
          backgroundColor={"white"}
        >
          <GridItem colSpan={1} rowSpan={1}>
            <PieDisplay />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <LineDisplay />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <BarDisplay />
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <LineDisplay />
          </GridItem>
        </Grid>
    );
};