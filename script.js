var canvas = document.getElementById("drawing_area");
var ctx = canvas.getContext("2d")
var scale = 4;
canvas.width = canvas.clientWidth*scale;
canvas.height = canvas.clientHeight*scale;

points = []

function add_point() {
  //for (let i = 0; i<100; i++) {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let hexcolor = rgb_to_hex([r, g, b]);
    points.push({x:Math.random()*2-1, y:Math.random()*2-1, color:hexcolor});
  //}

  draw();
}

function rgb_to_hex(rgb) {
  let hex = "#";

  for (let i = 0; i<rgb.length; i++) {
    color_channel = rgb[i];
    color_str = color_channel.toString(16);
    if (color_str.length < 2) {
      color_str = "0" + color_str;
    }
    hex += color_str
  }

  return hex;
}

function draw() {
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();

  for (var i = 0; i<points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i].x*800+800, points[i].y*800+800, 30, 0, 2 * Math.PI);

    // Coloring
    ctx.fillStyle = points[i].color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
  }
}

function sg_iterate() {
  fixed_points = [
    {x:Math.cos((Math.PI*3)/6), y:Math.sin((Math.PI*3)/6)},
    {x:Math.cos((Math.PI*7)/6), y:Math.sin((Math.PI*7)/6)},
    {x:Math.cos((Math.PI*11)/6), y:Math.sin((Math.PI*11)/6)}
  ];

  new_points = []

  for (let i = 0; i<points.length; i++) {
    let p = points[i];
    for (let j = 0; j<fixed_points.length; j++) {
      fp = fixed_points[j];
      let new_p = {
        x:0.5*(p.x-fp.x)+fp.x,
        y:0.5*(p.y-fp.y)+fp.y,
        color:p.color
      };
      new_points.push(new_p);
    }
  }

  points = new_points;
  draw();
}
