//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw multiple squares on the screen in random locations--------------
	//---------------------First you will create an array of particles. Then you will move and draw them.-------------------
	//---------------------Follow the comments below to complete this assignment--------------------------------------------

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");		

	//----------------------------------------------Step 1: Create particles------------------------------------------------
	var amount = 12;

	var particles = [];

	for (var i = 0; i < amount; i++)
	{
		particles[i] = new GameObject();
		particles[i].x = Math.random() * canvas.width;
		particles[i].y = Math.random() * canvas.height;
	}

	//---------------------------------------------------------------------------------------------------------------

	var fX = .85;
	var fY = .97;

	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{

	context.clearRect(0,0,canvas.width, canvas.height);	


	//--------------------------------------Step 2: Draw Particles---------------------------------------------------------
	for (var i = 0; i < particles.length; i++)
	{
		particles[i].drawRect();
	}

	//----------------------------------------------------------------------------------------------------------------------
}

