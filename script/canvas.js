let staticVariable = 0;

const EMPTY = 0;
const WHITE = 1;
const BLACK = 2;

class PentagoFullTable {
  constructor() {
    this.fullTable = new Array(2);
    for(let i=0;i<2;++i) {
      this.fullTable[i] = new Array(2);
    }
    for(let i=0;i<2;++i) {
      for(let j=0;j<2;++j) {
        this.fullTable[i][j] = new Pentago_3_3();
      }
    }
  }
  clear() {
    for(let i=0;i<2;++i) {
      for(let j=0;j<2;++j) {
        this.fullTable[i][j].clear();
      }
    }
  }
}

class Pentago_3_3 {
  constructor() {
    this.table = new Array(3);
    for(let i=0;i<3;++i) {
      this.table[i] = new Array(3);
    }
  }
  
  clear() {
    for(let i=0;i<3;++i) {
      for(let j=0;j<3;++j) {
        this.table[i] = EMPTY;
      }
    }
  }
}

const TABLE = new PentagoFullTable();

function draw() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "rgba(200, 100, 20, 0.2)";
    ctx.fillRect (0, 0, 430, 430);
    // 바둑알 그리기용 원 
    let accumOffsetX = 0;
    let accumOffsetY = 0;
    for(let i=0;i<6;++i) {
      accumOffsetX = 0;
      for(let j=0;j<6;++j) {
        ctx.beginPath();
        let offsetX = (j > 2 ? 10 : 0);
        let offsetY = (i > 2 ? 10 : 0);
        let x = 30 + 5 + 60 * j + offsetX + accumOffsetX; // x coordinate
        let y = 30 + 5 + 60 * i + offsetY + accumOffsetY; // y coordinate
        let radius = 30; // Arc radius
        let startAngle = 0; // Starting point on circle
        let endAngle = Math.PI * 2; // End point on circle
        let anticlockwise = false; 
        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        if((i + j) % 2 == staticVariable % 2) {
          ctx.stroke(); // 외부 선만 
        } else {
          ctx.fillStyle = "rgba(100,100,100, 1)";
          ctx.fill();
        }
        accumOffsetX += 10;
      }
      accumOffsetY += 10;
    }
    ctx.beginPath();
    ctx.fillStyle("rgb(255,255,255)");
    ctx.moveTo(30, 30);
    ctx.lineTo(350, 30);
    ctx.stroke();
    let nowDIV = document.getElementById("myDiv");
    if(nowDIV == undefined) {
      let newDIV = document.createElement("div");
      newDIV.innerHTML = `test : ${staticVariable++}`;
      newDIV.setAttribute("id", "myDiv");
      newDIV.style.backgroundColor = "gray";
      let p = document.getElementById("body");
      p.appendChild(newDIV);
    } else {
      nowDIV.innerHTML = `test : ${staticVariable++}`;
    }
  }
}