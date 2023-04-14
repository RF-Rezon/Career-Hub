import React from 'react';
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Scatter,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const data = [
    {
      name: "Assignment 1",
      mark: 60,
      amt: 100,
      cnt: 100
    },
    {
      name: "Assignment 2",
      mark: 60,
      amt: 100,
      cnt: 100
    },
    {
      name: "Assignment 3",
      mark: 60,
      amt: 100,
      cnt: 100
    },
    {
      name: "Assignment 4",
      mark: 56,
      amt: 80,
      cnt: 80
    },
    {
      name: "Assignment 5",
      mark: 57,
      amt: 85,
      cnt: 85
    },
    {
      name: "Assignment 6",
      mark: 58,
      amt: 90,
      cnt: 90
    },
    {
      name: "Assignment 7",
      mark: 60,
      amt: 100,
      cnt: 100
    }
  ];


const Statistics = () => {
    return (
        <div>
            <div className='flex items-center justify-center mt-12 mb-12'>
            <ComposedChart
      width={900}
      height={700}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="mark" barSize={30} fill="#413ea0" />
      <Scatter dataKey="cnt" fill="red" />
    </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;