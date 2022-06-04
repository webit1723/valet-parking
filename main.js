canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	greencar_y = greencar_y - 10;
	console.log("When Up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
	uploadBackground();
	uploadgreencar();
}

function down()
{
	greencar_y = greencar_y + 10;
	console.log("When Down arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
	uploadBackground();
	uploadgreencar();
}

function left()
{
	greencar_x = greencar_x - 10;
	console.log("When Left arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
	uploadBackground();
	uploadgreencar();
}

function right()
{
	greencar_x = greencar_x + 10;
	console.log("When Right arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
	uploadBackground();
	uploadgreencar();
}

