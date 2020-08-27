let staticVariable = 0;

class PentagoFullTable {
  constructor() {
    this.fullTable = new Array(2);
    for(let i=0;i<2;++i) {
      this.fullTable[i] = new Array(2);
    }
    for(let i=0;i<2;++i) {
      for(let j=0;j<2;++j) {
        this.fulltable[i][j] = new Pentago_3_3();
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
}

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect (10, 10, 20, 20);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "rgba(200, 100, 20, 0.2)";
    ctx.fillRect (0, 0, 430, 430);
    // 바둑알 그리기용 원 
    var accumOffsetX = 0;
    var accumOffsetY = 0;
    for(let i=0;i<6;++i) {
      accumOffsetX = 0;
      for(let j=0;j<6;++j) {
        ctx.beginPath();
        var offsetX = (j > 2 ? 10 : 0);
        var offsetY = (i > 2 ? 10 : 0);
        var x = 30 + 5 + 60 * j + offsetX + accumOffsetX; // x coordinate
        var y = 30 + 5 + 60 * i + offsetY + accumOffsetY; // y coordinate
        var radius = 30; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI * 2; // End point on circle
        var anticlockwise = false; 
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
      var newDIV = document.createElement("div");
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