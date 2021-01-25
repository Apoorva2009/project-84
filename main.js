canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
background_image="racing.jpg";
car_image="car1.png";
car_x=10;
car_y=10;

function add(){
bg_img=new Image();
bg_img.onload=uploadBackground;
bg_img.src=background_image;

car_img=new Image();
car.onload=uploadcar;
car_img.src=car_image;
}

function uploadBackground(){
ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadcar(){
ctx.drawImage(car_img,car_x,car_y,car_width,car_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
 keyPressed = e.keyCode; 
 console.log(keyPressed); 
 if(keyPressed == '38')
 { up(); 
console.log("up"); } 
if(keyPressed == '40')
{ down(); 
console.log("down"); } 
if(keyPressed == '37') 
{ left(); 
console.log("left"); } 
if(keyPressed == '39') 
{ right(); 
console.log("right"); } 
}