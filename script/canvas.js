function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 20, 20);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 20, 20);

    // 바둑알 그리기용 원 
    ctx.beginPath();
    var x = 75; // x coordinate
    var y = 75; // y coordinate
    var radius = 50; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI * 2; // End point on circle
    var anticlockwise = false; 
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    //ctx.fill(); // 내부 채우기
    ctx.stroke(); // 외부 선만 
  }
}