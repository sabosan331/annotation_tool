///////////////////////////////////////////// sample images ////////////////////////////////////////////////////////
var img_index = 0;
var img = document.getElementById("myimg");
const img_directory = "./img/"
var imgs = ["100.png","101.png","102.png","103.png","104.png","105.png"];
var label = 0
var label_json;
function submit(){
    if (document.getElementById("ok").checked == true) {
        text = "ok";
        label = 0;
    }else {
        text = "ng";
        label = 1;
    }
    document.getElementById("img_name").textContent = imgs[img_index]
    document.getElementById("result").textContent = (img_index+1) + " / " + imgs.length;
    
    if (img_index < imgs.length-1) img_index = img_index + 1; img.src = img_directory + imgs[img_index];
    console.log({ file_name : imgs[img_index],
　　　　　　　　　label : label,
　　　　　　　　　roi : [roi.startX, roi.startY, roi.w, roi.h]
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var locate = document.getElementById('locate');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var roi = {};
var drag = false;
var img = new Image();
img.src = './img/100.png';
img.onload = function(){
// ctx.drawImage(img,0,0);
ctx.drawImage(img, 0, 0, 216, 216);
// ctx.rect(20, 30,50, 100);
ctx.stroke();
ctx.lineWidth = "2";
ctx.strokeStyle = "#00ff00";
ctx.beginPath();
};
canvas.addEventListener('mousedown', mouseDown, false);
canvas.addEventListener('mouseup', mouseUp, false);
canvas.addEventListener('mousemove', mouseMove, false);
function mouseDown(e) {
  roi.startX = e.pageX - this.offsetLeft;
  roi.startY = e.pageY - this.offsetTop;
  drag = true;
}
function mouseUp() {
  drag = false;
  locate.innerHTML =  "(bx,by,ex,ey) = (" + roi.startX + "," + roi.startY + "," + (roi.startX + roi.w) + "," + (roi.startY + roi.h) + ")";
    // ctx.clearRect(0,0,canvas.width,canvas.height);
}
function mouseMove(e) {
  if (drag) {
    roi.w = (e.pageX - this.offsetLeft) - roi.startX;
    roi.h = (e.pageY - this.offsetTop) - roi.startY ;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw();
  }
}
function draw() {
    // ctx.setLineDash([6]);
    ctx.drawImage(img, 0, 0, 216, 216);
    ctx.strokeRect(roi.startX, roi.startY, roi.w, roi.h);
    // ctx.rect(rect.startX, rect.startY, rect.w, rect.h);
    // console.log(rect.startX, rect.startY, rect.w, rect.h)
}
// init();
