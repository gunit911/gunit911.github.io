var bx=4;
var by=24;
var bux=0;
var buy=200;
var x = 0;
var y = 315;
////GM
//body/shoulders
draw= function() {
background(255, 255, 255);
fill(0, 0, 0);
rect(bx-40,by+35,76,95);
ellipse(bx-40,by+56,40,40);
ellipse(bx+37,by+56,40,40);
//arms
fill(255, 229, 163);
rect(bx-60,by+64,20,45);
rect(bx+36,by+64,20,45);
//head
ellipse(bx-4,by+10,60,65);
//eyebrows/hat/hair
stroke(0, 0, 0);
line(bx+15,by+5,bx,by+5);
line(bx-10,by+5,bx-25,by+5);
fill(0, 0, 0);
ellipse(bx-4,by-14,64,28);
fill(107,87,31);
ellipse(bx-4,by-9,45,6);
//eyes
stroke(0, 0, 0);
fill(255, 255, 255);
ellipse(bx-16,by+12,15,8);
ellipse(bx+7,by+12,15,8);
fill(107, 87, 31);
ellipse(bx-16,by+12,5,3);
ellipse(bx+7,by+12,5,3);
//facial hair
noStroke();
fill(214, 190, 141);
ellipse(bx-4,by+30,35,24);
stroke(255, 168, 177);
//mouth
fill(255, 255, 255);
ellipse(bx-4,by+30,27,16);
noStroke();
fill(255, 229, 163);
ellipse(bx-4,by+24,35,12);
fill(0, 0, 0);
ellipse(bx-4,by+33,27,1);
fill(214, 190, 141);
ellipse(bx-4,by+28,35,2);
//nose
fill(250, 214, 108);
ellipse(bx-4,by+21,6,10);
ellipse(bx-7,by+23,4,5);
ellipse(bx-1,by+23,4,5);
//hair
fill(107, 87, 31);
rect(bx-40,by-12,10,15);
rect(bx+22,by-12,10,15);
//chain
stroke(214, 214, 214);
line(bx-4,by+58,bx-27,by+32);
line(bx-4,by+58,bx+21,by+32);
stroke(255, 255, 255);
line(bx-4,by+65,bx-4,by+52);
line(bx+2,by+56,bx-10,by+56);
//ears
stroke(255, 197, 82);
fill(255, 223, 135);
ellipse(bx-33,by+3,8,13);
ellipse(bx+25,by+3,8,13);
//gm
stroke(255, 255, 255);
fill(255, 255, 255);
line(bx-16,by+72,bx-8,by+72);
line(bx-16,by+72,bx-16,by+88);
line(bx-16,by+88,bx-8,by+88);
line(bx-8,by+88,bx-8,by+82);
line(bx+2,by+72,bx+12,by+72);
line(bx+7,by+72,bx+7,by+78);
line(bx+2,by+72,bx+2,by+88);
line(bx+12,by+72,bx+12,by+88);
////BUNNY
stroke(0, 0, 0);
ellipse(bux-20, buy-30, 30, 60);  // left ear
ellipse(bux+20, buy-30, 30, 60);  // right ear

ellipse(bux, buy+20, 75, 75);    // face

fill(0, 0, 0);
ellipse(bux-15, buy+15, 14, 14);  // left eye
ellipse(bux+15, buy+15, 14, 14);  // right eye

line(bux-20, buy+30, bux+20, buy+30);   // mouth

noFill();
rect(bux-10, buy+30, 10, 12); // left tooth
rect(bux, buy+30, 10, 12); // right tooth

////FROG

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

fill(0, 0, 0);
ellipse (x, y, 150, 75);

rect(x-55, y-47, 10, 10);
rect(x+45, y-47, 10, 10);
bx=bx+random(1,5);
bux=bux+random(1,5);
x=x+random(1,5);
};