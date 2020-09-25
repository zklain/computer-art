const SIZE = 512;
const BLICK = 3;
const OF_LINES = 15;
function setup() {
  createCanvas(SIZE, SIZE);
  colorMode(HSB, 360, 255, 255);
  background(0);
}

let t = 0;
function draw() {
  const x1 = x(t);
  const y1 = y(t);
  stroke(255);
  translate(SIZE / 2, SIZE / 2);
  for (let i = 0; i < OF_LINES; i++) {
    line(x1 + i * -20, y1 + i, (x1 + i), -(y1 + i * 10));
  }

 if (t % BLICK  === 0) {
     background(0);
   //t = 0;
 }

  t++;
}

const x = (t) => {
  return sin(t / 30) * 200;
};

const y = (t) => {
  return cos(t / 20) * 200;
};


// const No1 = (t) => {
//   const x = (t) => {
//     return sin(t / 9) * 200;
//   };

//   const y = (t) => {
//     return cos(t / 2) * 200;
//   };

//   strokeWeight(2);
//   stroke(255);
//   translate(SIZE / 2, SIZE / 2);
//   // stroke(t % 360, 255, 255);
//   line(y(t), x(t), x(-t), y(-t));
//   if (t > 100) {
//     background(0);
//     t = 0;
//   }
//   t++;
// };

// const No2 = (t) => {
//   const x = (t) => {
//     return sin(t / 9) * 200;
//   };

//   const y = (n) => {
//     return cos(n / 2) * 200;
//   };

//   const x1 = x(t);
//   const y1 = y(t);

//   for (let i = 0; i < 5; i++) {
//     line(x1 + i * 2, y1 + i, y1 + i, x1 + i * 2);
//   }

//   background(0);
//   if (t === 200) {
//     background(0);
//   }
//   t++;
// };

// todo: black metal logo vizualizer
