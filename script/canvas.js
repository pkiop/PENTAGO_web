function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect (10, 10, 20, 20);

    ctx.fillStyle = "rgba(200, 100, 20, 0.2)";
    ctx.fillRect (0, 0, 700, 700);

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

        ctx.stroke(); // 외부 선만 

        accumOffsetX += 10;
      }
      accumOffsetY += 10;
    }
    //ctx.fill(); // 내부 채우기
  }
}