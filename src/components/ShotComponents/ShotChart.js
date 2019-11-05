import React from "react";
import { Chart } from "react-google-charts";
import '../styles/ShotChart.css';
 
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
              hAxis: {
                minValue: 0,
                maxValue: 1280,
                textPosition: 'none'
              },
              vAxis: {
                maxValue: 720,
                textPosition: 'none'
              },
              legend: 'none',
              pointSize: 5
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