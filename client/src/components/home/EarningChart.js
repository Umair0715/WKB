import { Chart as ChartJS, registerables } from 'chart.js';
import { Line  } from 'react-chartjs-2'


const EarningChart = () => {
    ChartJS.register(...registerables);

    const lineState = {
        labels: ["Jan", "Feb" , "Mar" , "April" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"] ,
        datasets: [
           {
              label: "TOTAL AMOUNT",
              backgroundColor: ["tomato"],
              hoverBackgroundColor: ["rgb(197, 72, 49)"],
              data: [0, 50 , 34 , 555 , 321 , 22 , 50 , 777 , 384 , 91 , 38 , 89],
           },
        ],
     };

     const options = {
        plugins : {
            legend : false 
        } ,
       
        y : {
            min : 0 ,
            max : 1000 ,
            ticks : {
                stepSize : 200
            }
        }
     }

    return (
        <div className=''>
            <Line data={lineState} options={options} />
        </div>
    )
}

export default EarningChart