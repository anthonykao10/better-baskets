import React from "react";
import { Chart } from "react-google-charts";
import '../styles/ShotChart.css';
import { whileStatement } from "@babel/types";
 
export default function ShotChart({ coordinates, chartTitle }) {
  if (coordinates !== undefined) {
    return (
      <>
        <div className="chart-container">
          <Chart
            className="shot-chart"
            chartType="LineChart"
            data={[...coordinates]}
            width="642px"
            height="482px"
            options={{
              curveType: 'function',
              backgroundColor: '#f1f8e9',
              chartArea: { width: '70%' },
              title: chartTitle,
              fontSize: "18",
              hAxis: {
                minValue: 0,
                maxValue: 1280,
                textPosition: 'none',
                title: 'Distance'
              },
              vAxis: {
                maxValue: 720,
                textPosition: 'none',
                title: "Height"
              },
              legend:{textStyle:{fontSize:'14', fontName:'Helvetica'}},
              tooltip:{textStyle:{fontSize:'12', fontName:'Helvetica'}},
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