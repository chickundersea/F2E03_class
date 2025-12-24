// function Greeting(name = "helen") {
//     console.log(`Welcome to my page~~~${name}`);

// }

// Greeting("arny")

// 計算BMI
function calcBMI(height, weight) {
  const h = height / 100;
  return weight / (h * h);
}

const bmi = calcBMI(170, 64);
console.log(bmi);
