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
import Card from '../glopal/Card';


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

function LineChart(){

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
      label: 'Articles',
      data: labels.map(() => { return Math.random() * 100 + 500 }),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      fill: true,
      label: 'Users',
      data: labels.map(() => { return Math.random() * 100 + 500 }),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      fill: true,
      label: 'Visits',
      data: labels.map(() => { return Math.random() * 100 + 500 }),
      borderColor: 'rgb(87, 168, 117)',
      backgroundColor: 'rgba(87, 168, 117, 0.5)',
    }
  ],
 } as ChartData<'line'> ;
  

    return(
      <Card>
        <Line data={data} options={options}/>
      </Card>
    )
}


export default LineChart