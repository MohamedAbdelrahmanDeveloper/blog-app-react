import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  // Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,
    Tooltip,
    Filler,
    Legend);

function DoughnutChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      } as ChartOptions<'doughnut'>;
      
      const labels = ['TypeSript', 'JavaScript', 'TsilwindCSS', 'DaisyUI', 'MongoDB', 'Nodejs'];
      
      const data = {
        labels,
        datasets: [
            {
                label: 'Visit',
                data: [122, 219, 30, 51, 82, 13],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              }
        ],
      } as ChartData<'doughnut'>;

    return(
      <Doughnut options={options} data={data} />
    )
}


export default DoughnutChart