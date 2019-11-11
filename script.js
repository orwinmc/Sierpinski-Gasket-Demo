var canvas = document.getElementById("drawing_area");
var ctx = canvas.getContext("2d")
var scale = 4;
canvas.width = canvas.clientWidth*scale;
canvas.height = canvas.clientHeight*scale;

points = []

function add_point() {
  points.push({x:Math.random(), y:Math.random()});
  draw();
}

function draw() {
  //ctx.clearRect(0, 0, canvas.style.width, canvas.style.height);

  for (var i = 0; i<points.length; i++) {
    console.log(points[i]);
    ctx.beginPath();
    ctx.arc(points[i].x*1600+100, points[i].y*1600+100, 60, 0, 2 * Math.PI);

    // Coloring
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
  }
}
