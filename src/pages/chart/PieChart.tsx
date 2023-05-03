import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


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
    cost1: genRand(90 , 20),
    cost2: genRand(55 , 30),
    cost3: genRand(60 , 10),
    cost4: genRand(44 , 9),
    cost5: genRand(100 , 50),
    cost6: genRand(70 , 16),
    cost7: genRand(120 , 80),
 
  })
});





console.log(myData.map((el)=> el.cost1).reduce((a ,b )=> a + b))
console.log(myData.map((el)=> el.cost2).reduce((a ,b )=> a + b))
console.log(myData.map((el)=> el.cost3).reduce((a ,b )=> a + b))
console.log(myData.map((el)=> el.cost4).reduce((a ,b )=> a + b))
console.log(myData.map((el)=> el.cost5).reduce((a ,b )=> a + b))
console.log(myData.map((el)=> el.cost6).reduce((a ,b )=> a + b))
console.log(myData.map((el)=> el.cost7).reduce((a ,b )=> a + b))



const result = []

const array1 = [
    { item: "Rice", cost: 2000 },
  
    { item: "Yam", cost: 800 },
  
    { item: "Egg", cost: 1200 },
  
    { item: "Beans", cost: 500 },
  
    { item: "Egusi Soup", cost: 5000 },
  
    { item: "Spag", cost: 4000 },
  
    { item: "Bread", cost: 200 },
  
    { item: "Tomatoes", cost: 250 },
  
    { item: "Pepper", cost: 950 },
  
    { item: "Cake", cost: 7000 },
  ];

export const data = {
  labels:array1.map((el)=> el.item),
  datasets: [
    {
      label: "items",
      data: [
        
        myData.map((el)=> el.cost1).reduce((a ,b )=> a + b),
        myData.map((el)=> el.cost2).reduce((a ,b )=> a + b),
        myData.map((el)=> el.cost3).reduce((a ,b )=> a + b),
        myData.map((el)=> el.cost4).reduce((a ,b )=> a + b),
        myData.map((el)=> el.cost5).reduce((a ,b )=> a + b),
        myData.map((el)=> el.cost6).reduce((a ,b )=> a + b),    
        myData.map((el)=> el.cost7).reduce((a ,b )=> a + b)
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <div style={{ width: "100%", minHeight: "50vh" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
      <Doughnut data={data} />
    </div>
  );
}
