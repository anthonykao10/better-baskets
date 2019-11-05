import React from "react";
import { Chart } from "react-google-charts";
import '../styles/ShotChart.css';
import { whileStatement } from "@babel/types";
 
export default function ShotChart({ coordinates }) {
  if (coordinates !== undefined) {
    return (
      <>
        <div className="chart-container">
          <Chart
            className="shot-chart"
            chartType="LineChart"
            data={[...coordinates]}
            width="75%"
            height="480px"
            options={{
              curveType: 'function',
              backgroundColor: '#f1f8e9',
              chartArea: { width: '70%' },
              title: "chart title",
              hAxis: {
                minValue: 0,
                maxValue: 1280,
                textPosition: 'none',
                title: 'x-axis'
              },
              vAxis: {
                maxValue: 720,
                textPosition: 'none',
                title: "y-axis"
              },
              legend: 'none',
              pointSize: 3
            }}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
      </>
    );
  }
}