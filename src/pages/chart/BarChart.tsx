import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const arr1: any = [1, 2, 3, 4, 5, 6, 7];
const arr2: any = [11, 22, 33, 44, 55, 66, 77];
console.log(arr1, arr2);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const array1 = [
  { item: "Rice", cost: 2000 },

  { item: "Yam", cost: 800 },

  { item: "Egg", cost: 1200 },

  { item: "Beans", cost: 500 },

  { item: "Egusi Soup", cost: 50000 },

  { item: "Spag", cost: 4000 },

  { item: "Bread", cost: 200 },

  { item: "Tomatoes", cost: 250 },

  { item: "Pepper", cost: 950 },

  { item: "Cake", cost: 7000 },
];

const myData:any[] = [];
const myItem:any[] = []

const genRand = (max: any, min: any) => {
 return  Math.floor(Math.random() * (max - min) );
};

const genLetter = "abcdefghijklmn";

Array.from({ length: 10 }, () => {
  myItem.push({
    items: genLetter[Math.floor(Math.random() * genLetter.length)],
    
  });

  myData.push({
    cost: genRand(90 , 20),
  })
});

console.log(`this is mydata ${myData}`)

export const data = {
  labels :array1.map((el)=> el.item),
  datasets: [
    // {
    //   label: "Dataset 1",
    //   data: myItem.map((el)=> el.items),
    //   //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "All Cost",
      data: array1.map((el)=> el.cost),
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const min = Math.floor(Math.random() * 0);
const max = Math.floor(Math.random() * 1000);

export function BarChart() {
  return (
    <div>
        <Bar options={options} data={data} />;
        <p> {JSON.stringify(myItem.map((el)=> el.items))} </p>
        <p> {JSON.stringify(myData.map((el)=> el.cost))} </p>
    </div>
  )


}
