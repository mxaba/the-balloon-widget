import React from 'react'
import {Doughnut} from 'react-chartjs-2';

function Chart(props) {
  const { colors } = props;

  const labelColors = (namePassed) =>{
    const newArray = []
    if (namePassed === "data" ){
      colors.forEach(color => {
        newArray.push(color.counter)
      })
    } else { 
      colors.forEach(color => {
        newArray.push(color.colorName)
      })
    }
    return newArray
  }

  const state = {
    labels: labelColors(),
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: labelColors(),
        hoverBackgroundColor: labelColors(),
        data: labelColors("data")
      }
    ]
  }

  return (
    <div className="chart">
      <Doughnut
        data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
        />
    </div>
  );
}

export default Chart;