// sketch.js


let minDatavalue = 55;
let maxDatavalue = 65;

let graphX = 100;
let graphY = 100;

let graphWidth = 600;
let graphHeight = 400;

let table;

function preload() {
  table = loadTable("NashvilleTemp.csv", "csv");

}

function setup() {
  createCanvas(800, 800);


}

function draw() {
  background(128);

  drawGraphBackground();
  // drawYAxisLabels();
  drawXAxisLabels();
  drawLineGraph();
  drawChartTitle();

  noLoop();

}

function drawGraphBackground() {
  noStroke();
  fill(250);
  rect(graphX, graphY, graphWidth, graphHeight);

}



function drawYAxisLabels() {
  textFont("Verdana");
  textSize(16);
  textAlign(RIGHT, CENTER);

  for (let sampleValue = 60; sampleValue <= maxDatavalue; sampleValue += 5) {
    let y = map(sampleValue, minDatavalue, maxDatavalue, graphY + graphHeight, graphY);

    stroke(0);
    strokeWeight(1);
    line(graphX, y, graphX-15, y);

    stroke(220);
    line(graphX, y, graphX+graphWidth, y);

    fill(0);
    noStroke(0);
    text(sampleValue, graphX-19, y);
  }

}

function drawXAxisLabels() {

  let numberOfDataPoints = table.getRowCount();
  let years = table.getNum(1);

  textFont("Verdana");
  textSize(16);
  textAlign(CENTER, TOP);

  for (let yearValue = 1; yearValue <= numberOfDataPoints; yearValue += 1) {
    let x = map(yearValue, 1, numberOfDataPoints, graphX, graphX + graphWidth);

    stroke(0);
    strokeWeight(1);
    line(x,graphY+graphHeight, x, graphY+graphHeight+15);

    stroke(220);
    line(x, graphY, x, graphY+graphHeight);

    noStroke();
    strokeWeight(1);
    fill(0);
    text(yearValue, x, graphY+graphHeight+19);

  
  }

}
function drawLineGraph() {
  let numberOfDataPoints = table.getRowCount();

  let px = 0;
  let py = 0;

  for (let i = 0; i < numberOfDataPoints; i += 1) {


    let sampleValue = table.getNum(i, 1);
    let year = table.getNum(i, 0);

    let y = map(sampleValue, minDatavalue, maxDatavalue, graphY + graphHeight, graphY);
    let x = map(year, 2011, 2021, graphX, graphX + graphWidth);

    noStroke();
    fill(40);
    ellipse(x, y, 10, 10);

    if (i > 0) {
      stroke(0);
      strokeWeight(1)
      line(px, py, x, y,);
    }

    px = x;
    py = y;

  }

}
function drawChartTitle() {

  textFont("Verdana");
  textSize(24);
  noStroke();
  fill(0);
  textAlign(CENTER, TOP);
  text("Time Series Graph", 400, 40);

}


