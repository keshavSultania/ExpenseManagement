import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const TimeSeriesWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: white;
`;

const TimeSeries = ({ bills, closeClick }) => {
  const obj = {};
  bills.forEach((element) => {
    obj[element.date] = obj[element.date]
      ? obj[element.date] + Number(element.amount)
      : Number(element.amount);
  });
  const xaxis = Object.keys(obj);
  const yaxis = Object.values(obj);
  const data = {
    labels: xaxis,
    datasets: [
      {
        label: "Expenses",
        data: yaxis
      }
    ]
  };
  return (
    <TimeSeriesWrapper>
      <h1>Time Series</h1>
      <button onClick={closeClick}>Close</button>
      <Line data={data} />
    </TimeSeriesWrapper>
  );
};

export default TimeSeries;
