import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import type { ChartData, ChartOptions } from 'chart.js';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  function OneLineChart(){
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    }as ChartOptions<'line'> ;
  
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
    const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'WebSite Visits',
        data: labels.map(() => { return Math.random() * 100 + 500 }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
   } as ChartData<'line'> ;
    
  
      return(
        <Line data={data} options={options}/>
      )
  }
  
  
  export default OneLineChart